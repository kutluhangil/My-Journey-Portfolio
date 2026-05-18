# Docker Desktop

Docker Desktop, Mac, Windows veya Linux ortamınızda kolayca kurulabilen, containerize edilmiş uygulama ve microservice’leri oluşturup paylaşmanızı sağlayan bir uygulamadır. Docker Desktop; Docker daemon (**`dockerd`**), Docker client (**`docker`**), Docker Compose, Docker Content Trust, Kubernetes ve Credential Helper bileşenlerini içerir.

---

# **1️⃣ Docker Desktop Nedir?**

**Docker Desktop**, bilgisayarınızda container tabanlı uygulamalar geliştirmenizi, çalıştırmanızı ve yönetmenizi sağlayan bir masaüstü uygulamasıdır.

Başlıca amaçları:

- Docker ortamını kolay kurmak
- Container geliştirme ortamı sağlamak
- Kubernetes ile çalışmayı kolaylaştırmak
- Microservice mimarilerini test etmek
- Docker araçlarını tek paket içinde sunmak

Özellikle **Mac ve Windows’ta Docker Engine doğrudan çalışmadığı için Docker Desktop gereklidir.**

---

# **2️⃣ Docker Desktop İçinde Neler Var?**

Docker Desktop aslında tek bir program değil, içinde birçok Docker bileşeni bulunan bir pakettir.

Metinde geçen bileşenleri tek tek açıklayalım.

---

# **3️⃣ Docker Daemon (dockerd)**

Docker daemon, Docker’ın **arka planda çalışan servisidir**.

Görevleri:

- Container oluşturmak
- Image yönetmek
- Network oluşturmak
- Volume yönetmek
- Docker API isteklerini işlemek

Örnek işlem:

```
docker run nginx
```

Bu komut:

1. Docker client tarafından gönderilir
2. Docker daemon tarafından işlenir
3. Container oluşturulur ve çalıştırılır

---

# **4️⃣ Docker Client (docker)**

Docker client, kullanıcıların Docker ile etkileşim kurmasını sağlar.

Terminalde kullandığımız komut:

```
docker
```

Örnek:

```
docker build .
docker run node
docker ps
```

Docker client komutları **Docker API üzerinden Docker daemon’a gönderir.**

---

# **5️⃣ Docker Compose**

Docker Compose, **birden fazla container’ı birlikte çalıştırmayı sağlar.**

Özellikle microservice mimarilerinde kullanılır.

Örnek senaryo:

Bir uygulama şu bileşenlerden oluşabilir:

- Node.js backend
- MongoDB
- Redis
- Nginx

Bunları tek tek başlatmak yerine **docker-compose.yml** dosyası ile hepsini birlikte başlatabilirsin.

Örnek:

```
version: "3"

services:
  backend:
    build: .
    ports:
      - "3000:3000"

  database:
    image: mongo
```

Çalıştırmak için:

```
docker compose up
```

---

# **6️⃣ Docker Content Trust**

Docker Content Trust, **Docker image’larının güvenliğini sağlar.**

Amaç:

- Image’ın gerçekten güvenilir olduğunu doğrulamak
- Image manipülasyonunu önlemek

Bu sistem **image imzalama (image signing)** kullanır.

Yani:

```
image → cryptographic signature → doğrulanır
```

Böylece güvenilmeyen image’ların çalıştırılması engellenebilir.

---

# **7️⃣ Kubernetes**

Docker Desktop içinde **Kubernetes cluster** da bulunur.

Kubernetes:

- container orkestrasyon sistemidir
- container’ları otomatik yönetir
- ölçekleme yapar
- servis discovery sağlar

Docker Desktop’ta:

```
local kubernetes cluster
```

çalıştırabilirsin.

Bu sayede:

- deployment
- pods
- services

gibi Kubernetes kavramlarını lokal ortamda test edebilirsin.

---

# **8️⃣ Credential Helper**

Credential Helper, **Docker registry giriş bilgilerini güvenli saklar.**

Örneğin:

```
docker login
```

yaptığında kullanıcı adı ve şifre sistemde saklanır.

Credential Helper bu bilgileri:

- keychain
- secure storage

gibi güvenli alanlarda tutar.

Bu sayede şifreler plain text olarak saklanmaz.

---

# **9️⃣ Docker Desktop’un Sağladığı Avantajlar**

Docker Desktop sayesinde:

### **1️⃣ Kolay kurulum**

Docker Engine, Compose, Kubernetes otomatik kurulur.

### **2️⃣ GUI arayüz**

Container’ları grafik arayüzden görebilirsin.

### **3️⃣ Resource yönetimi**

CPU ve RAM ayarlayabilirsin.

### **4️⃣ Log görüntüleme**

Container loglarını görebilirsin.

### **5️⃣ Kubernetes entegrasyonu**

Tek tıkla Kubernetes açılabilir.

---

# **🔟 Docker Desktop Nasıl Çalışır?**

Docker Desktop aslında arka planda bir **Linux VM** çalıştırır.

Sebep:

Docker container’lar Linux kernel özelliklerini kullanır.

Bu yüzden:

Mac / Windows → Linux VM → Docker Engine

şeklinde çalışır.

---

# **1️⃣1️⃣ Gerçek kullanım örneği**

Bir Node.js uygulaması çalıştırmak:

```
docker build -t my-app .
docker run -p 3000:3000 my-app
```

Docker Desktop sayesinde:

- container listesi görülür
- loglar görüntülenir
- container durdurulabilir
- resource kullanımı izlenir

---

# **1️⃣2️⃣ Kısa Özet**

Docker Desktop:

- Docker geliştirme ortamını kolaylaştıran bir uygulamadır
- Docker daemon içerir
- Docker client içerir
- Docker Compose içerir
- Kubernetes içerir
- güvenli credential yönetimi sağlar
- containerize uygulamaları geliştirmek ve çalıştırmak için kullanılır

---

✅ **Kısaca:**

Docker Desktop, Docker ile çalışmak için gerekli tüm araçları tek bir uygulama içinde sunan bir geliştirme platformudur.

---