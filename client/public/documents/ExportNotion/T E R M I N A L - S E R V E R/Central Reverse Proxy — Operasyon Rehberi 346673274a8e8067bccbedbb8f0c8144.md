# Central Reverse Proxy — Operasyon Rehberi

> Bu dosya, Mac Mini sunucusundaki **central-reverse-proxy** mimarisini açıklar.
> 
> 
> Yeni proje eklerken, sorun giderirken veya sistemi devralırken bu dosyayı baştan sona oku.
> 
> AI asistanlar için: bu dosyada anlatılan mimariye göre cevap ver, varsayım yapma.
> 

---

## 🎯 Amaç

Birden fazla web uygulamasını **tek bir public port (80)** üzerinden path-based routing ile sunmak.

- Her uygulama kendi container'ında izole çalışır.
- Hiçbir uygulama doğrudan public port yayınlamaz.
- Sadece `central-reverse-proxy` (nginx) public — istekleri içeride uygun container'a yönlendirir.

---

## 🏗️ Mimari

```
                   ┌───────────────────────────────┐
   Internet :80 ─► │      central-reverse-proxy    │  (nginx)
                   │   (sadece bu container public)│
                   └───────┬───────────────┬───────┘
                           │               │
                  /        │               │ /subsense/
                           ▼               ▼
              ┌──────────────────┐  ┌────────────────────┐
              │ cumhuriyet-      │  │ subsense-          │
              │ frontend-        │  │ frontend-          │
              │ internal (nginx) │  │ internal (nginx)   │
              └────────┬─────────┘  └────────────────────┘
                       │ /api/* → http://backend:3001
                       ▼
              ┌──────────────────┐
              │ cumhuriyet-      │
              │ backend          │
              │ (Node.js :3001)  │
              └──────────────────┘
```

---

## 📁 Dosya Konumları

| Dosya | İşlev |
| --- | --- |
| `/home/kutluhan/reverse-proxy/docker-compose.yml` | Proxy stack tanımı (tüm internal frontend'ler + proxy) |
| `/home/kutluhan/reverse-proxy/nginx.conf` | Path-based routing kuralları |
| `/home/kutluhan/Apartment-Management-System/` | Cumhuriyet kaynak kodu (kendi compose'unda SADECE backend var) |
| `/home/kutluhan/SubSense/` | SubSense kaynak kodu (compose dosyası YOK — proxy build ediyor) |

---

## 🌐 Docker Networks

| Network | Sahibi | Üzerindeki container'lar |
| --- | --- | --- |
| `reverse-proxy_internal-web` | reverse-proxy compose | central-reverse-proxy, tüm `*-frontend-internal` |
| `apartment-management-system_app-network` | apartment-management-system compose | cumhuriyet-backend + cumhuriyet-frontend-internal |

**🔑 KRİTİK KURAL:** Bir frontend'in backend'i varsa, frontend hem `internal-web` hem de backend'in bulunduğu

network'e bağlanmalı. Aksi halde frontend nginx'i `proxy_pass http://backend` çağrısında "host not found" hatasıyla
crash döngüsüne girer.

---

## 📦 Mevcut Servisler (compose içinde)

| Service (compose) | Container adı | Network'leri | Public port |
| --- | --- | --- | --- |
| `reverse-proxy` | `central-reverse-proxy` | internal-web | **80** |
| `cumhuriyet` | `cumhuriyet-frontend-internal` | internal-web + app-network | yok |
| `subsense` | `subsense-frontend-internal` | internal-web | yok |

Ayrı compose'da:

| Service | Container adı | Network | Public port |
| --- | --- | --- | --- |
| `backend` (apartment-management-system) | `cumhuriyet-backend` | app-network | yok (sadece :3001 internal) |

---

## ➕ Yeni Proje Ekleme — Adım Adım

Diyelim ki `myapp` adında yeni bir uygulamayı `/myapp/` path'inde sunmak istiyorsun.

### 1. Frontend'i `/myapp/` base path'ine göre build et

- React/Vite: `vite.config.ts` içine `base: '/myapp/'` ekle
- Next.js: `next.config.js` içine `basePath: '/myapp'`
- Aksi halde `/myapp/` altında JS/CSS asset'leri 404 olur

### 2. `/home/kutluhan/reverse-proxy/docker-compose.yml`'a servis ekle

```yaml
  myapp:
    build:
      context: ../myapp
      dockerfile: Dockerfile
    container_name: myapp-frontend-internal
    expose:
      - "80"
    restart: unless-stopped
    networks:
      - internal-web
      # Eğer backend'i varsa, backend'in network'ünü de ekle (external olarak deklare etmeyi unutma)
```

`reverse-proxy` servisinin `depends_on` listesine `myapp` ekle.

### 3. `/home/kutluhan/reverse-proxy/nginx.conf`'a routing kuralı ekle

**`location /` bloğunun ÜSTÜNE** ekle (sıra önemli — `/` her şeyi yakalar):

```
    location = /myapp {
        return 301 /myapp/;
    }

    location /myapp/ {
        proxy_pass http://myapp:80/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
```

### 4. Eğer myapp'in backend'i varsa

- Backend ayrı bir compose'da çalışıyorsa, network'ünü `external` olarak deklare et:
    
    ```yaml
    networks:                                                       internal-web:                                                                                                         driver: bridge                                              myapp-backend-net:    name: myapp_backend-network                                                                                         external: true
    ```
    
- `myapp` servisinin `networks:` listesine `myapp-backend-net` ekle.

### 5. Build et ve başlat

```
docker compose -f /home/kutluhan/reverse-proxy/docker-compose.yml up -d --build myapp
```

### 6. Reverse-proxy'yi yeniden yükle (nginx config değiştiyse)

```
docker compose -f /home/kutluhan/reverse-proxy/docker-compose.yml restart reverse-proxy
```

### 7. Test

```
curl -sI http://localhost/myapp/
```

`200 OK` görmelisin. Tarayıcıda da aç, JS/CSS yükleniyor mu kontrol et.

---

## 🔧 Yaygın Komutlar

Tüm komutlar tek satır — kopyala-yapıştır güvenli.

**Tüm container'ların durumu:**

```
docker ps
```

**Reverse-proxy stack'i tamamen başlat/durdur:**

```
docker compose -f /home/kutluhan/reverse-proxy/docker-compose.yml up -d
```

```
docker compose -f /home/kutluhan/reverse-proxy/docker-compose.yml down
```

**Tek bir servisi rebuild et:**

```
docker compose -f /home/kutluhan/reverse-proxy/docker-compose.yml up -d --build cumhuriyet
```

**Sadece nginx config'i yenile (rebuild gerekmiyor):**

```
docker compose -f /home/kutluhan/reverse-proxy/docker-compose.yml restart reverse-proxy
```

**Bir container'ın loglarını gör:**

```
docker logs --tail 50 -f central-reverse-proxy
```

**Container içinden network testi:**

```
docker exec cumhuriyet-frontend-internal wget -qO- http://backend:3001/api/health
```

**Bir container'ın hangi network'lerde olduğunu gör:**

```
docker inspect cumhuriyet-frontend-internal --format '{{json .NetworkSettings.Networks}}'
```

---

## ⚠️ Önemli Uyarılar

1. **HİÇBİR uygulama compose'unda `ports: - "X:Y"` mapping'i OLMAMALI.** Sadece `central-reverse-proxy` public port
    
    açar. Aksi halde port çakışması veya bypass olur.
    
2. **Apartment-Management-System backend'i `apartment-management-system_app-network` üzerinde — bu network'ü
reverse-proxy compose'u `external` olarak referans veriyor.** Eğer apartment-management-system stack'i `docker compose down` ile tamamen kapatılırsa, network silinir ve reverse-proxy başlatılamaz. Backend'i her zaman çalışır tut.
3. **Eski hatalı container'ı `docker start` ETME — `docker rm -f` ile sil, sonra `docker compose up` ile YENİDEN
YARAT.** Sebep: yaratım sırasında port allocation başarısız olduysa, mevcut container'da port mapping kayıt edilmez.
    
    `start` mevcut bozuk config'i kullanır. Yeniden yaratmak doğru config'i uygular.
    
4. **SPA'lar (React/Vue/Vite) bir sub-path altında çalışacaksa MUTLAKA o `base path` ile build edilmeli.** Aksi halde
HTML 200 döner ama JS/CSS asset'leri 404 olur. Curl ile asset link'lerini kontrol et:
    
    ```
    curl -s http://localhost/myapp/ | grep -oE '(src|href)="[^"]+"'
    ```
    
    Tüm relative path'ler `/myapp/...` ile başlamalı.
    
5. **nginx.conf düzenlerken HEREDOC veya `echo` kullanma** — sadece `nano` veya `vim`. Geçmişte komutları config
olarak yapıştırma hatası yaşandı.
6. **Backend healthcheck'leri `curl` kullanıyorsa ve image'da `curl` yoksa** container "unhealthy" görünür ama
    
    gerçekte çalışıyor olabilir. `wget` ile değiştirebilir veya Dockerfile'a `apk add --no-cache curl` ekleyebilirsin.
    
    Acil sorun değil.
    

---

## 🐛 Troubleshooting

### "host not found in upstream X" — frontend crash döngüsünde

Frontend, backend'i resolve edemiyor. Aynı network'te değiller.

- **Kontrol:** `docker inspect <frontend-container> --format '{{json .NetworkSettings.Networks}}'`
- **Çözüm:** Frontend'i backend'in network'üne de bağla. Compose'da `networks:` listesine ekle, `external: true` ile
network'ü deklare et.

### "Bind for 0.0.0.0:80 failed: port is already allocated"

Başka bir container port 80'i tutuyor.

- **Bul:** `docker ps | grep ":80->"`
- **Çözüm:** Eski container'ı durdur (`docker stop <name>`). SİLME — rollback için tut.

### Container "Up" ama PORTS sütunu boş

Yaratım esnasında port binding başarısız olmuş, container var ama port'a bağlı değil.

- **Çözüm:** `docker rm -f <name>` sonra `docker compose up -d <service>`. Yeniden yarat, sadece restart etme.

### Routing yanlış — `/foo/` istediğimde başka şey geliyor

nginx location bloklarının sırası önemli. Daha spesifik path (`/foo/`) genel `/` bloğundan ÖNCE gelmeli.

- **Çözüm:** `nginx.conf`'ta `location /foo/` bloğunu `location /` bloğunun üstüne taşı.

### Asset 404'leri (JS/CSS yüklenmiyor) sub-path altında

Frontend `base path`'siz build edilmiş.

- **Kontrol:** `curl -s http://localhost/foo/ | grep -oE 'src="[^"]+"'` → link'ler `/assets/...` ile başlıyorsa
hatalı, `/foo/assets/...` olmalı
- **Çözüm:** Vite `base`, Next.js `basePath`, vb. ile yeniden build et.

### `docker compose up` yapınca eski public-port'lu container yeniden yaratıldı

Eski compose dosyasında `ports` mapping'i kalmış.

- **Çözüm:** Compose dosyasını düzenle, `frontend` servisini veya `ports` field'ını kaldır.

---

## 📋 Mimariye Geçişin Tarihçesi

İlk geçiş: 2026-04-18.

- Eski durum: cumhuriyet-frontend port 80, subsense_frontend port 3002, ikisi de public.
- Yeni durum: tek public proxy, path-based routing.
- Yapılan kritik düzeltme: cumhuriyet-frontend-internal'in backend'e ulaşamadığı sorunu (sadece `internal-web`'deydi,
`app-network`'e de eklendi).
- Eski compose'lardan public-port frontend servisleri silindi (gelecek çakışmaları önlemek için).