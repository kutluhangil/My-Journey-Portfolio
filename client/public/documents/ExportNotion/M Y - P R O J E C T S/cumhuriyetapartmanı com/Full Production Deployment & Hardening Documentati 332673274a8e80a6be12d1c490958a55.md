# Full Production Deployment & Hardening Documentation

---

# **📌 1. PROJE GENEL BAKIŞ**

Bu proje, bir apartman yönetim sistemi olup aşağıdaki özellikleri içerir:

- 👤 Admin & Yönetici giriş sistemi
- 💰 Aidat ve finans yönetimi
- 📄 Doküman ve duyuru yönetimi
- 🛠️ Bakım ve toplantı kayıtları
- 🌐 Web üzerinden erişim

---

# **🧱 2. MİMARİ YAPI**

## **🔹 Backend**

- Node.js (Express)
- REST API
- JWT Authentication
- Role-based access control (RBAC)

## **🔹 Frontend**

- React (Vite)
- Axios API iletişimi
- Cookie tabanlı auth

## **🔹 Deployment**

- Docker container (frontend + backend)
- Cloudflare Tunnel (public access)
- Domain: cumhuriyetapartmani.com

---

# **🐳 3. DOCKER KURULUMU**

## **🔹 Container Yapısı**

- frontend → Nginx üzerinden static servis
- backend → Node.js API

## **🔹 Docker Compose**

- Container’lar docker-compose ile yönetiliyor
- Restart policy: unless-stopped

---

# **💾 4. VERİ KALICILIĞI (CRITICAL FIX)**

## **❗ Önceki durum:**

- Upload dosyaları container içindeydi
- Container silinirse veri kaybı riski vardı

## **✅ Çözüm:**

Docker volume oluşturuldu:

```
volumes:
  - uploads_data:/app/uploads
```

## **🔹 Sonuç:**

- Upload dosyaları artık kalıcı diskte
- Container restart → veri korunur

---

# **🌐 5. CLOUDFLARE TUNNEL**

## **🔹 Amaç**

- Port forwarding gerektirmeden public erişim
- CGNAT bypass

## **🔹 Kurulum**

- cloudflared kuruldu
- Tunnel oluşturuldu
- Domain bağlandı

## **🔹 Config**

```
ingress:
  - hostname: cumhuriyetapartmani.com
    service: http://localhost:80
```

## **🔹 System Service**

```
sudo cloudflared service install
```

## **🔹 Sonuç**

- Tunnel otomatik başlıyor
- Server restart → site çalışmaya devam eder

---

# **🔐 6. AUTHENTICATION & SECURITY**

## **🔹 Önceki durum:**

- localStorage JWT
- bazı endpointler korumasız

## **🔹 Yapılan iyileştirmeler:**

### **✅ JWT → Cookie**

- httpOnly
- secure
- sameSite=strict

### **✅ Backend Auth Middleware**

- Tüm endpointler korundu

### **✅ RBAC (Role-Based Access Control)**

- admin / manager ayrımı

### **✅ Logout sistemi eklendi**

---

# **🛡️ 7. GÜVENLİK HARDENING**

## **🔹 Helmet**

- HTTP header güvenliği

## **🔹 CSP (Content Security Policy)**

- XSS riskini azaltır

## **🔹 CSRF Koruması**

- Custom header kontrolü

## **🔹 Rate Limiting**

- Cloudflare IP ile çalışacak şekilde yapılandırıldı

## **🔹 CORS**

- Sadece production frontend izinli

---

# **📁 8. FILE UPLOAD GÜVENLİĞİ**

## **🔹 Önceki riskler:**

- Path traversal
- Fake file upload

## **🔹 Çözüm:**

- MIME + extension kontrolü
- Random filename
- Validation eklendi

---

# **🧾 9. ERROR HANDLING**

## **🔹 Önce:**

- Stack trace leak

## **🔹 Sonra:**

- Production’da maskelenmiş error
- Sensitive data loglanmaz

---

# **🐳 10. DOCKER GÜVENLİĞİ**

## **🔹 Yapılanlar:**

- Non-root user ile çalıştırma
- Multi-stage build (frontend)
- Nginx ile secure serving
- Backend dış erişim minimize edildi

---

# **🔄 11. BACKUP SİSTEMİ**

## **🔹 Kod backup (cron)**

```
0 3 * * 0 tar -czf ~/backup-$(date +\%F).tar.gz ~/Apartment-Management-System
```

- Her Pazar 03:00
- Otomatik çalışır

---

## **🔹 Upload backup**

```
docker run --rm \
  -v apartment-management-system_uploads_data:/data \
  -v $(pwd):/backup \
  alpine \
  tar -czf /backup/uploads-backup.tar.gz /data
```

---

## **🔹 Dış backup**

- Google Drive / harici disk önerilir

---

# **⏱️ 12. MONITORING**

## **🔹 UptimeRobot**

- Site uptime kontrolü
- Email alert

---

# **🔒 13. CLOUDFLARE GÜVENLİK**

## **Yapılan ayarlar:**

- SSL Mode → Full (Strict)
- Always HTTPS → ON
- Bot Fight Mode → ON

---

# **⚙️ 14. SYSTEM RESILIENCE**

## **Sistem şu durumlara dayanıklı:**

- Server restart
- Docker restart
- Tunnel restart
- Network değişimi

---

# **📊 15. SON DURUM ANALİZİ**

| **Alan** | **Durum** |
| --- | --- |
| Deployment | ✅ |
| Security | ✅ |
| Stability | ✅ |
| Backup | ✅ |
| Monitoring | ✅ |
| Production Ready | ✅ |

---

# **🧠 16. RİSKLER (GERÇEKÇİ)**

- Tek server (Mac Mini)
- Hardware failure riski
- Manuel backup disiplini gerekli

---

# **🏁 17. SONUÇ**

Bu sistem:

- Küçük ölçekli kullanım için
- 2 kullanıcı (admin + yönetici)
- Finansal veri içeren yapı

👉 **tamamen production-ready hale getirilmiştir**

---

# **🚀 18. GELECEK GELİŞTİRMELER**

- 💳 Online ödeme sistemi
- 👥 Çok apartmanlı yapı (SaaS)
- 📱 Mobil uygulama
- 🔐 Cloudflare Access (Zero Trust)

---

# **🎉 FINAL**

Bu proje:

👉 Full-stack development

👉 DevOps

👉 Security hardening

içeren **gerçek bir production sistemdir**.

---

**Status: ✅ LIVE & STABLE**