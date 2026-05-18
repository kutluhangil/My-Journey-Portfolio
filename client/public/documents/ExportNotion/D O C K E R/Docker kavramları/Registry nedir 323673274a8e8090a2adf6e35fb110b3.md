# Registry nedir?

**Açıklama**

Artık bir konteyner imajının ne olduğunu ve nasıl çalıştığını bildiğinize göre, bu imajları nerede saklayacağınızı merak ediyor olabilirsiniz.

Konteyner imajlarınızı bilgisayarınızda saklayabilirsiniz, ancak onları arkadaşlarınızla paylaşmak veya başka bir makinede kullanmak isterseniz ne yaparsınız? İşte burada image registry devreye girer.

Bir **image registry**, konteyner imajlarınızı saklamak ve paylaşmak için merkezi bir konumdur. Hem **public** hem de **private** olabilir. [Docker Hub](https://hub.docker.com/) herkesin kullanabileceği bir public registry’dir ve varsayılan registry olarak gelir.

Docker Hub popüler bir seçenek olsa da, bugün kullanabileceğiniz başka birçok container registry vardır, örneğin: [Amazon Elastic Container Registry (ECR)](https://aws.amazon.com/ecr/), [Azure Container Registry (ACR)](https://azure.microsoft.com/en-in/products/container-registry) ve [Google Container Registry (GCR)](https://cloud.google.com/artifact-registry). Ayrıca kendi private registry’nizi yerel sisteminizde veya organizasyonunuz içinde çalıştırabilirsiniz. Örneğin: Harbor, JFrog Artifactory, GitLab Container Registry vb.

**Registry vs Repository**

Registry ile çalışırken, *registry* ve *repository* terimlerini birbirinin yerine kullanılır gibi duyabilirsiniz. İlişkili olmalarına rağmen aynı şey değiller.

- **Registry**, konteyner imajlarını saklayan ve yöneten merkezi bir konumdur.
- **Repository**, bir registry içindeki ilgili konteyner imajlarının koleksiyonudur. Bir proje klasörü gibi düşünebilirsiniz; her repository bir veya birden fazla konteyner imajı içerir.

Aşağıdaki diyagram, registry, repository’ler ve imajlar arasındaki ilişkiyi gösterir.

```
Not
Docker Hub’un ücretsiz sürümüyle bir private repository ve sınırsız public repository oluşturabilirsiniz. Daha fazla bilgi için Docker Hub subscription page sayfasını ziyaret edin.
```

**Deneyin**

Bu pratikte, bir Docker imajını Docker Hub repository’sine nasıl build ve push edeceğinizi öğreneceksiniz.

**Ücretsiz Docker hesabı oluşturma**

1. Henüz oluşturmadıysanız, yeni bir Docker hesabı açmak için [Docker Hub](https://hub.docker.com/)sayfasına gidin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f8b0e7a6-35d7-42ac-a18c-56028055b396image.png)

Google veya GitHub hesabınızı kullanarak da giriş yapabilirsiniz.

**İlk repository’nizi oluşturun**

1. [Docker Hub](https://hub.docker.com/)’a giriş yapın.
2. Sağ üst köşedeki **Create repository** butonuna tıklayın.
3. Namespace’inizi seçin (muhtemelen kullanıcı adınız) ve repository adı olarak **`docker-quickstart`** girin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/808ee7b6-71f8-4771-9a3d-14f9f89cc9d2image.png)

1. 
2. Visibility’i **Public** olarak ayarlayın.
3. Repository oluşturmak için **Create** butonuna tıklayın.

Tebrikler! İlk repository’nizi başarıyla oluşturdunuz. 🎉

Şu anda bu repository boş. Şimdi ona bir imaj push ederek dolduracağız.

**Docker Desktop ile giriş yapma**

1. Docker Desktop yüklü değilse [indirip kurun](https://www.docker.com/products/docker-desktop/).
2. Docker Desktop GUI’de sağ üst köşedeki **Sign in** butonuna tıklayın.

**Örnek Node.js kodunu klonlayın**

Bir imaj oluşturmak için önce bir projeye ihtiyacınız var. Hızlı başlamak için [github.com/dockersamples/helloworld-demo-node](https://github.com/dockersamples/helloworld-demo-node) adresindeki örnek Node.js projesini kullanacağız. Bu repository, bir Docker imajı oluşturmak için gerekli önceden hazırlanmış Dockerfile içerir.

Dockerfile detayları için endişelenmeyin; bunu ilerleyen bölümlerde öğreneceksiniz.

1. GitHub repository’yi klonlayın:

`git clone <https://github.com/dockersamples/helloworld-demo-node>`

1. Yeni oluşturulan dizine girin:

`cd helloworld-demo-node`

1. Docker imajı oluşturmak için aşağıdaki komutu çalıştırın (kendi kullanıcı adınızla değiştirin):

`docker build -t YOUR_DOCKER_USERNAME/docker-quickstart .`

```
Not
docker build komutunun sonunda noktayı (.) eklediğinizden emin olun. Bu, Docker’a Dockerfile’ın yerini gösterir.
```

1. Oluşturulan Docker imajını listelemek için:

`docker images`

Çıktı örneği:

`REPOSITORY                               TAG       IMAGE ID       CREATED         SIZE
YOUR_DOCKER_USERNAME/docker-quickstart   latest    476de364f70e   2 minutes ago   170MB`

1. İmajı test etmek için bir konteyner başlatın:

`docker run -d -p 8080:8080 YOUR_DOCKER_USERNAME/docker-quickstart`

Tarayıcınızda [http://localhost:8080](http://localhost:8080/) adresine giderek konteynerin çalışıp çalışmadığını doğrulayabilirsiniz.

1. Docker imajına tag eklemek için:

`docker tag YOUR_DOCKER_USERNAME/docker-quickstart YOUR_DOCKER_USERNAME/docker-quickstart:1.0`

1. Son olarak, imajı Docker Hub repository’nize push edin:

`docker push YOUR_DOCKER_USERNAME/docker-quickstart:1.0`

1. [Docker Hub](https://hub.docker.com/)’a gidin ve repository’nize bakın. **Tags** bölümünde yeni push edilen imajınızı görebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/990775f1-c5b8-4abb-8f95-ce76d5f2f956image.png)

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/2cf657d9-6208-47b9-8ce3-e919ec80b5fbimage.png)

Bu walkthrough’da, Docker hesabı oluşturmayı, ilk Docker Hub repository’nizi oluşturmayı ve bir konteyner imajını build, tag ve push etmeyi öğrendiniz.