# Docker Registries

Bir Docker registry, Docker image’lerini depolar. Docker Hub, herkesin kullanabileceği genel bir registry’dir ve Docker varsayılan olarak image’leri Docker Hub’da arar. Kendi özel registry’nizi de çalıştırabilirsiniz.

**`docker pull`** veya **`docker run`** komutlarını kullandığınızda, Docker gerekli image’i yapılandırılmış registry’den çeker. **`docker push`** komutunu kullandığınızda ise image’inizi registry’ye gönderir.

---

# **1️⃣ Docker Registry Nedir?**

**Docker Registry**, Docker image’larının saklandığı bir sunucu veya servistir.

Yani registry:

- image depolar
- image paylaşılmasını sağlar
- image indirilmesini sağlar

Basitçe:

```
Docker Registry = Docker image deposu
```

---

# **2️⃣ Docker Image Nedir? (Registry ile ilişkisi)**

Docker image, container oluşturmak için kullanılan **hazır uygulama paketidir**.

Örnek image’lar:

- nginx
- node
- mongodb
- redis
- postgres

Bir container çalıştırmak istediğinde Docker önce bu image’i bulur.

Örnek:

```
docker run nginx
```

Docker şu işlemleri yapar:

1️⃣ nginx image’i var mı kontrol eder

2️⃣ yoksa registry’den indirir

3️⃣ container oluşturur

---

# **3️⃣ Docker Hub Nedir?**

**Docker Hub**, en popüler ve varsayılan Docker registry’sidir.

Özellikleri:

- herkese açık image’lar içerir
- resmi image’lar vardır
- milyonlarca image bulunur

Örnek Docker Hub image’ları:

```
node
nginx
mongo
mysql
python
redis
```

Docker varsayılan olarak image’ları **Docker Hub’dan arar.**

Örneğin:

```
docker pull node
```

Docker şu registry’ye gider:

```
docker.io/library/node
```

---

# **4️⃣ Docker Pull (Image indirme)**

docker pull komutu registry’den image indirir.

Örnek:

```
docker pull nginx
```

Arka planda olanlar:

1️⃣ Docker registry’ye bağlanır

2️⃣ nginx image’ını bulur

3️⃣ image katmanlarını indirir

4️⃣ local makinede saklar

İndirdikten sonra:

```
docker images
```

ile görebilirsin.

---

# **5️⃣ Docker Run Komutu Registry Kullanır**

Şu komutu yazdığında:

```
docker run nginx
```

Docker şu kontrolü yapar:

```
local machine → image var mı?
```

### **Eğer varsa**

Container direkt çalışır.

### **Eğer yoksa**

Docker otomatik olarak:

```
Docker Hub → image indirir
```

Sonra container oluşturur.

---

# **6️⃣ Docker Push (Image gönderme)**

docker push komutu image’i registry’ye yükler.

Örnek:

```
docker push username/my-app
```

Bunun için önce login gerekir:

```
docker login
```

Sonra image gönderilir.

Bu genelde şu durumlarda kullanılır:

- CI/CD pipeline
- deployment
- uygulama paylaşımı

---

# **7️⃣ Özel (Private) Docker Registry**

Docker Hub dışında **özel registry’ler** de olabilir.

Sebep:

- şirket içi uygulamalar
- güvenlik
- private image’lar

Kullanılan private registry örnekleri:

```
AWS ECR
Google Container Registry
Azure Container Registry
GitHub Container Registry
Harbor
self-hosted Docker registry
```

---

# **8️⃣ Kendi Docker Registry’ni Çalıştırmak**

Docker ile kendi registry’ni bile kurabilirsin.

Örnek:

```
docker run -d -p 5000:5000 registry
```

Bu komut:

```
localhost:5000
```

adresinde bir registry oluşturur.

Image gönderme:

```
docker tag my-app localhost:5000/my-app
docker push localhost:5000/my-app
```

---

# **9️⃣ Docker Registry Yapısı**

Registry içinde image’lar şu şekilde organize edilir:

```
registry
 └ repository
      └ image
           └ tag
```

Örnek:

```
node:18
node:20
node:latest
```

Burada:

```
node = repository
18 = tag
```

---

# **🔟 Image Tag Nedir?**

Tag, image versiyonunu belirtir.

Örnek:

```
docker pull node:18
docker pull node:20
```

Eğer tag yazmazsan:

```
docker pull node
```

Docker şu tag’i kullanır:

```
latest
```

---

# **1️⃣1️⃣ Gerçek Hayat Örneği**

Bir backend uygulaması yaptığını düşün.

Image oluştur:

```
docker build -t kutluhan/api .
```

Registry’ye gönder:

```
docker push kutluhan/api
```

Başka bir sunucu:

```
docker pull kutluhan/api
docker run kutluhan/api
```

Böylece uygulama kolayca paylaşılır.

---

# **1️⃣2️⃣ Kısa Özet**

Docker Registry:

- Docker image’larının depolandığı yerdir
- Docker Hub en yaygın registry’dir
- docker pull image indirir
- docker push image gönderir
- private registry kurulabilir
- container deployment için kullanılır

---

✅ **Basit mantık:**

```
Docker Registry = image deposu
Docker Pull = image indir
Docker Push = image gönder
```

---