# İlk imajınızı oluşturun ve push edin

**Konteyner imajları**

Konteyner imajlarına yeniyseniz, bunları uygulamayı çalıştırmak için gereken her şeyi içeren standartlaştırılmış paketler olarak düşünebilirsiniz: dosyalar, konfigürasyon ve bağımlılıklar. Bu paketler daha sonra dağıtılabilir ve başkalarıyla paylaşılabilir.

**Docker Hub**

Docker imajlarınızı paylaşmak için bir depolama alanına ihtiyacınız vardır. İşte registries (kayıt depoları) devreye girer. Birçok registry mevcut olsa da, Docker Hub varsayılan ve tercih edilen imaj registry’sidir. Docker Hub hem kendi imajlarınızı depolayabileceğiniz hem de başkalarının imajlarını bulup çalıştırabileceğiniz veya kendi imajlarınız için temel olarak kullanabileceğiniz bir alan sağlar.

**Develop with containers** bölümünde Docker Hub’dan gelen ve Docker Official Images olan şu imajları kullandınız:

- [node](https://hub.docker.com/_/node) – Node ortamı sağlar ve geliştirme çalışmalarınız için temel imaj olarak kullanılır. Bu imaj aynı zamanda nihai uygulama imajının temelini oluşturur.
- [mysql](https://hub.docker.com/_/mysql) – To-do list öğelerini depolamak için MySQL veritabanı sağlar.
- [phpmyadmin](https://hub.docker.com/_/phpmyadmin) – MySQL veritabanıyla etkileşim sağlayan web tabanlı bir arayüz sunar.
- [traefik](https://hub.docker.com/_/traefik) – Modern HTTP reverse proxy ve load balancer sağlayan Traefik, istekleri routing kurallarına göre uygun konteynere yönlendirir.

Daha fazla seçenek görmek için [Docker Official Images](https://hub.docker.com/search?image_filter=official&q=), [Docker Verified Publishers](https://hub.docker.com/search?q=&image_filter=store)ve [Docker Sponsored Open Source Software](https://hub.docker.com/search?q=&image_filter=open_source) imaj kataloğunu keşfedin.

**Docker hesabınızla giriş yapın**

İmajları Docker Hub’a push etmek için Docker hesabınızla giriş yapmanız gerekir.

1. Docker Dashboard’u açın.
2. Sağ üst köşedeki **Sign in** seçeneğini tıklayın.
3. Gerekirse bir hesap oluşturun ve giriş işlemini tamamlayın.

İşlem tamamlandığında **Sign in** butonu profil resmine dönüşecektir.

**İmaj repository’si oluşturun**

Artık hesabınız olduğuna göre bir imaj repository’si oluşturabilirsiniz. Git repository kaynak kodu saklarken, imaj repository konteyner imajlarını saklar.

1. [Docker Hub](https://hub.docker.com/)’a gidin.
2. **Create repository** seçeneğini tıklayın.
3. **Create repository** sayfasında aşağıdaki bilgileri girin:
- **Repository name** – **`getting-started-todo-app`**
- **Short description** – isteğe bağlı bir açıklama ekleyin
- **Visibility** – diğerlerinin sizin özelleştirilmiş to-do uygulamanızı çekebilmesi için **Public** seçin
1. **Create**’i seçerek repository’i oluşturun.

**İmajı oluşturun ve push edin**

Repository’niz hazır olduğuna göre, imajınızı oluşturup push edebilirsiniz. Önemli bir not: oluşturacağınız imaj Node imajını extend eder, yani Node, yarn vb. yüklemenize veya yapılandırmanıza gerek yoktur. Sadece uygulamanızı benzersiz kılan kısma odaklanabilirsiniz.

```
İmaj/Dockerfile nedir?
Bir konteyner imajını, bir prosesi çalıştırmak için gereken her şeyi içeren tek paket olarak düşünebilirsiniz. Bu örnekte Node ortamını, backend kodunu ve derlenmiş React kodunu içerir.
Bu imajı kullanan herhangi bir makine, uygulamayı oluşturulduğu şekilde çalıştırabilir, önceden başka bir şey yüklemesine gerek yoktur.
Bir Dockerfile, imajın nasıl oluşturulacağını tanımlayan metin tabanlı bir betiktir. Bu quick start için repository zaten Dockerfile içeriyor.
```

CLI / VS Code ile

1. Projeyi başlatmak için ya klonlayın ya da [ZIP olarak indirin](https://github.com/docker/getting-started-todo-app/archive/refs/heads/main.zip):

`git clone <https://github.com/docker/getting-started-todo-app>`

Klonlama tamamlandıktan sonra dizine girin:

`cd getting-started-todo-app`

1. Projeyi oluşturmak için aşağıdaki komutu çalıştırın. **`DOCKER_USERNAME`** yerine Docker kullanıcı adınızı yazın:

`docker build -t DOCKER_USERNAME/getting-started-todo-app .`

Örnek: Docker kullanıcı adınız **`mobydock`** ise:

`docker build -t mobydock/getting-started-todo-app .`

1. İmajın yerel olarak mevcut olduğunu doğrulamak için **`docker image ls`**komutunu kullanabilirsiniz:

`docker image ls`

Çıktı şöyle görünecektir:

`REPOSITORY                          TAG       IMAGE ID       CREATED          SIZE
mobydock/getting-started-todo-app   latest    1543656c9290   2 minutes ago    1.12GB
...`

1. İmajı push etmek için **`docker push`** komutunu kullanın (**`DOCKER_USERNAME`**yerine kullanıcı adınızı yazmayı unutmayın):

`docker push DOCKER_USERNAME/getting-started-todo-app`

Yükleme hızınıza bağlı olarak push işlemi birkaç dakika sürebilir.

**Özet**

Bir dakikanızı ayırın ve neler olduğuna bakın. Kısa sürede şunları başardınız:

- Uygulamanızı paketleyen bir konteyner imajı oluşturup Docker Hub’a push ettiniz.
- Docker Hub, güvenilir içerik bulmak için varsayılan registry’dir. Docker, Docker Official Images, Docker Verified Publishers ve Docker Sponsored Open Source Software’den oluşan güvenilir bir içerik koleksiyonu sağlar; bunları doğrudan kullanabilir veya kendi imajlarınızın temeli olarak alabilirsiniz.
- Docker Hub, kendi uygulamalarınızı dağıtmanız için bir pazar sağlar. Herkes hesap açabilir ve imajlarını dağıtabilir. Oluşturduğunuz imajı herkese açık dağıtırken, özel repository’ler yalnızca yetkili kullanıcıların erişebilmesini sağlar.

```
Diğer registries kullanımı
Docker Hub varsayılan registry olsa da, registries Open Container Initiative (OCI) standardı ile uyumludur. Bu sayede şirketler ve organizasyonlar kendi özel registry’lerini çalıştırabilir. Çoğu zaman, güvenilir içerik Docker Hub’dan bu özel registry’lere kopyalanır veya yansıtılır.
```