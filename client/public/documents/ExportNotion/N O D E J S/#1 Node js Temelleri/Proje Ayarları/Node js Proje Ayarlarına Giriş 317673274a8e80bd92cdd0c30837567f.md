# Node.js Proje Ayarlarına Giriş

Node.js ortamında projelerinizi daha verimli bir şekilde geliştirebilmeniz için tasarlanmış bu bölüme hoş geldiniz! Burada, temel proje yapılandırmalarını öğrenerek Node.js projelerinizi sağlam bir temele oturtabilirsiniz. Ele alacağımız başlıca konular:

1. **Proje Başlatma:** Node.js ortamında sıfırdan bir proje oluşturma sürecini detaylandıracağız.
2. **ESLint Entegrasyonu:** Kod kalitesini artırmak ve standartlara uygunluğu sağlamak için ESLint'in nasıl yapılandırılacağını öğreneceksiniz.
3. **Konfigürasyon Dosyaları:** **`package.json`**, **`.eslintrc`** gibi proje ayar dosyalarının rolü ve doğru yapılandırma yöntemlerini inceleyeceğiz.

Bu rehber, Node.js projelerinizi kolayca başlatmak ve yönetmek için gerekli bilgi ve araçları sağlayacaktır. Haydi başlayalım!

# **Proje Başlatma**

Bir proje oluşturmak için bilgisayarınızda Node.js'in yüklü olduğundan emin olmalısınız. Yüklü sürümü kontrol etmek için terminalde şu komutu çalıştırabilirsiniz:

`node --version`

Eğer terminalde ***v18.17.0*** veya daha yüksek bir sürüm görüyorsanız, Node.js kurulumunuz hazır demektir. Aksi takdirde, ***command not found: node*** gibi bir hata alırsanız, [Node.js resmi web sitesinden](https://nodejs.org/en) **LTS (Long Term Support)** sürümünü indirip kurmanız gerekecek.

Node.js projesi başlatmak için adımlar:

1. Bilgisayarınızda `nodejs-basics` adında yeni bir proje dizini oluşturun.
2. Terminali açın ve bu dizine `cd nodejs-basics` komutuyla geçin veya bu dizinde terminali açmak sizin için daha uygunsa, doğrudan o klasörde açın.
3. Terminalde NPM kullanarak yeni bir Node.js projesi başlatmak için şu komutu çalıştırın:

`npm init -y`

[https://goitlmsstorage.b-cdn.net/2e62bd85-c761-4b9b-be8c-3f67ca82541d2024-03-19%2016-23-17.mp4](https://goitlmsstorage.b-cdn.net/2e62bd85-c761-4b9b-be8c-3f67ca82541d2024-03-19%2016-23-17.mp4)

Bu komut, proje dizininizin kökünde otomatik olarak bir **`package.json`** dosyası oluşturur. Bu dosya, projenize ait meta verileri içerir ve başlangıçta varsayılan değerlerle doldurulmuştur:

```
{
  "name": "nodejs-basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Bu dosya üzerinde ihtiyaçlarınıza göre değişiklik yapabilirsiniz. Örneğin, projenizin açıklamasını, yazar bilgilerini veya özel komutları bu dosyada tanımlayabilirsiniz.