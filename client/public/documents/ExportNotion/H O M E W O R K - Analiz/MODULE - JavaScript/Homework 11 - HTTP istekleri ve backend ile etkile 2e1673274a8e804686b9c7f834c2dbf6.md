# Homework 11 - HTTP istekleri ve backend ile etkileşim

Öğrenmek her zaman kolay değildir, ama her zaman fayda sağlar 💪

Hadi modül 11’de şimdiye kadar neler yapıldığını özetleyelim.

Kendini test etmek için şunları bildiğinden emin ol:

- HTTP ve HTTPS protokolleri arasındaki fark nedir.
- Temel HTTP metotları ve bunları nasıl kullanacağını.
- CRUD nedir.
- Backend ile nasıl etkileşim kurulur.

Bu bilgileri kendi uygulamanı oluştururken pratikte pekiştirme zamanı geldi.

# **Ev Ödevi 11**

- `goit-js-hw-11` adlı bir depo oluştur.
- [Vite](https://vitejs.dev/) kullanarak projeyi derle. Senin için [hazır bir yapılandırma](https://github.com/goitacademy/vanilla-app-template) hazırladık ve bunu kullanmanı tavsiye ederiz.
- Görevi oku ve kod editöründe tamamla.
- Kodu `Prettier` ile biçimlendirildiğinden ve canlı sayfayı açtığında konsolda hata ve uyarı bulunmadığından emin ol.
- Ödevi kontrol için teslim et.

**Teslim formatı:** Ödev iki bağlantı içerir: kaynak dosyalar ve `GitHub Pages` üzerindeki çalışma sayfası.

# **Görev — Görsel Arama**

Bir anahtar kelimeyle görsel arama yapabileceğin ve galeri içinde görebileceğin bir uygulama oluştur. Arayüz öğelerinin makete göre düzenlenmesini ekle.

```
Görevlerinin düzenlenmesi için bu maketi kullan.

```

# **Arama Formu**

Arama formu HTML belgesinde yer alır. Kullanıcı arama kutusuna bir arama terimi girer ve form gönderildiğinde bu arama terimiyle bir HTTP isteği yapılmalıdır.

# **HTTP İstekleri**

Backend için [Pixabay](https://pixabay.com/api/docs/) servisinin genel API'sini kullan. Kayıt ol, kendi benzersiz erişim anahtarını al ve [dokümantasyona](https://pixabay.com/api/docs/#api_search_images) göz at.

Sorgu dizesi parametrelerinden mutlaka ~~belirtmen~~ bulunması gerekenler:

- `key` — API'ye erişim için benzersiz anahtarın.
- `q` — Arama terimi. Kullanıcının girdiği şey.
- `image_type` — Görsel türü. Sadece fotoğraflar gerekli, bu yüzden `photo` değerini gir.
- `orientation` — Fotoğrafın yönü. `horizontal` değerini gir.
- `safesearch` — Yaş filtresi. `true` değerini gir.

Yanıtta birkaç özelliği olan bir nesne olacak, bunlardan birinde sorgu parametrelerine uyan görsellerin bulunduğu bir dizi olacaktır.

Eğer backend boş bir dizi döndürüyorsa, bu, uygun bir şey bulunamadığı anlamına gelir. Bu durumda `"Sorry, there are no images matching your search query. Please try again!"`mesajını göster. Bildirimler için [iziToast](https://izitoast.marcelodolza.com/) kütüphanesini kullan.

Kütüphanenin CSS kodunu projeye eklemek için dokümantasyonda belirtilenlere ek olarak bir import daha eklemen gerekiyor.

`// Dokümantasyonda belirtilen import
import iziToast from "izitoast";
// Stil importu
import "izitoast/dist/css/iziToast.min.css";`

Uygulamanın bu aşamadaki çalışma videosunu izle:

# **Galeri ve Görsel Kartları**

Galeri (aynı türden öğelerden oluşan liste) HTML belgesinde yer alır ve HTTP isteklerinden sonra görsel kartlarının yerleşimini eklemek için kullanılmalıdır.

Her bir görsel aşağıdaki özelliklerle tanımlanan bir nesneyle ifade edilir:

- `webformatURL` — Galerideki kart listesi için küçük görselin bağlantısı
- `largeImageURL` — Modal penceredeki büyük görselin bağlantısı
- `tags` — Görselin açıklaması olan bir dize. `alt` niteliği için uygun.
- `likes` — Beğeni sayısı
- `views` — Görüntüleme sayısı
- `comments` — Yorum sayısı
- `downloads` — İndirme sayısı

Yeni bir anahtar kelimeyle arama yapmadan önce galerinin içeriğini tamamen temizlemelisin, böylece sorgu sonuçları karışmaz.

Uygulamanın bu aşamadaki çalışma videosunu izle:

# **SimpleLightbox Kütüphanesi**

Tam bir galeri için [SimpleLightbox](https://simplelightbox.com/) kütüphanesiyle büyük görselin versiyonunu göster.

Kütüphanenin CSS kodunu projeye eklemek için dokümantasyonda belirtilenlere ek olarak bir import daha eklemen gerekiyor.

`// Dokümantasyonda belirtilen import
import SimpleLightbox from "simplelightbox";
// Stil importu
import "simplelightbox/dist/simple-lightbox.min.css";`

- Her görsel kartını dökümanda belirtilen [«Markup»](https://github.com/andreknieriem/simplelightbox#markup) bölümündeki gibi bir bağlantı içine alman gerekecek.
- Kütüphane, galeriye yeni öğeler ekledikten sonra mutlaka çağrılması gereken bir [`refresh()`](https://github.com/andreknieriem/simplelightbox#public-methods) metoduna sahiptir.

Uygulamanın bu aşamadaki çalışma videosunu izle.

# **Yükleme Göstergesi**

Backend’den görsellerin yüklenmekte olduğunu kullanıcıya bildiren bir öğe ekle. Yükleyici, HTTP isteği başlamadan hemen önce görünmeli ve istek tamamlandıktan sonra kaybolmalıdır.

Uygulamanın bu aşamadaki çalışma videosunu izle.

Videodaki gibi basit bir metin yerine, [css-loader](https://github.com/vineethtrv/css-loader) gibi güzel yükleme göstergeleri sunan bir kütüphane kullanabilirsin. Bu kütüphanenin kullanımına dair video talimatı, projenin [README.md](https://github.com/vineethtrv/css-loader/blob/master/README.md) dosyasında mevcuttur.

**Mentorun Kontrol Edeceği Noktalar:**

- Ödev iki bağlantı içerir: kaynak dosyalar ve `GitHub Pages` üzerindeki canlı sayfa
- Proje [Vite](https://vitejs.dev/) kullanılarak derlenmiştir
- Geliştirici araçlarındaki konsol, hatalar, uyarılar ve konsol logları içermemektedir
- Projeye iziToast, SimpleLightbox ve css-loader kütüphaneleri eklenmiştir
- Sayfadaki öğeler makete göre (veya kendi stillerine göre) stillendirilmiştir
- Sayfada, arama terimi ile görsel arama yapmaya yönelik bir arama formu bulunmaktadır
- Form gönderildiğinde, backend’e istek gönderilmeden önce css-loader ile yükleme göstergesi çıkar ve sayfadaki önceki arama sonuçları temizlenir
- Form gönderildiğinde, belirli parametrelerle anahtar kelimeye göre görsel aramak için backend'e bir istek gönderilir
- Backend'den yanıt alındığında, yükleme göstergesi kaybolur ve backend'den alınan verilere göre sayfada görseller oluşturulur veya uygun sonuç bulunmadığına dair bir mesaj gösterilir
- Yeni görseller, DOM’a tek bir işlemle eklenir
- Görseller listesine yeni öğeler eklendikten sonra SimpleLightbox örneğinde `refresh()` metodu çağrılır
- Galerideki küçük bir görsele tıklandığında, SimpleLightbox kütüphanesi kullanılarak modal pencerede büyütülmüş versiyonu açılır
- HTTP istekleri sırasında olası hataları işlemek ve sayfanın çökmesini önlemek için **`then()`** ve **`catch()`** yöntemleri kullanılır

[Task - Çözüm](Homework%2011%20-%20HTTP%20istekleri%20ve%20backend%20ile%20etkile/Task%20-%20%C3%87%C3%B6z%C3%BCm%202e1673274a8e80d680c5fad4fe27bda7.md)