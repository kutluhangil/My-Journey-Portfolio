# Homework 8 - Etkinlikler ve Kütüphaneler

JavaScript kursunun üçte ikisi tamamlandı — devam ediyoruz! 💪

Geriye dönüp Modül 8'de hangi önemli konuların ele alındığını hatırlayalım.

Teorik materyalleri inceledikten sonra, siz:

- olay yaşam döngüsünün aşamalarını biliyorsunuz ve bir olayın sona ermesinin ne olduğunu anlıyorsunuz
- olayın nerede gerçekleştiğini nasıl belirleyeceğinizi ve ortaya çıkmasını nasıl durduracağınızı biliyorsunuz
- olaylarla çalışırken kalıpların nasıl kullanılacağını biliyorsunuz (dağıtım, olayların delegasyonu)
- kütüphanelerin temel özelliklerini ve nasıl bağlantı kurabilleceğinizi biliyorsunuz
- yeniden yapılandırmanın ne olduğunu biliyorsunuz
- Parametre Nesnesi modelinin nasıl kullanılacağını anlıyorsunuz
- Nesneleri ve dizileri nasıl yok edeceğinizi biliyorsunuz

Bu bilgileri uygulamaya koymanın zamanı geldi!

# **Ev Ödevi 8**

- Bir depo oluştur `goit-js-hw-08`
- `gallery.js` ve `index.html` dosyalarındaki görevi gerçekleştirin
- Görevi okuyun ve kod düzenleyicide tamamlayın.
- Kodun `Prettier` ile biçimlendirildiğinden ve canlı görev sayfasını açtığınızda konsolda herhangi bir hata veya uyarı olmadığından emin olun.
- Ödevinizi gözden geçirmek için teslim edin.

**Teslimat formatı:** Ödev iki bağlantı içerir: kaynak dosyalara ve `GitHub Pages`'daki çalışma sayfasına.

```
Görev düzeninizi şekillendirmek için bu düzeni kullanın.

```

# **Hedefler — Görüntü galerisi**

Öğelerine tıklama ve tam boyutlu bir görüntüyü modal bir pencerede görüntüleme özelliğine sahip bir galeri oluşturun. Galerinin demo videosunu izleyin.

Bir galeri oluşturmak — her biri sizi nihai hedefe yaklaştıracak daha basit birkaç alt göreve bölünmesi gereken karmaşık bir görevdir. Bu sürece görev ayrıştırma denir.

# **1 - Galeri düzeni**

Galeri öğelerini ekleyeceğimiz bir kapsayıcı oluşturarak başlamak mantıklıdır. Bunu yapmak için HTML koduna galeri konteyner etiketini ekleyin — `gallery` sınıfına sahip sırasız bir liste.

`<ul class="gallery"></ul>`

# **2 - Görüntü dizisi**

Galeri öğeleri oluşturmak için veriye ihtiyacınız olacak. Bu nesne dizisini JavaScript dosyanıza ekleyin. Her nesne bir galeri öğesini temsil eder.

- `preview` — galeri kartı için resmin küçük bir versiyonuna bağlantı
- `original` — modal pencere için görüntünün büyük bir versiyonuna bağlantı
- `description` — küçük resmin `alt` niteliği ve modaldeki büyük resmin başlığı için resmin metin açıklaması.

```
const images = [
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg>',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg>',
    description: 'Aerial Beach View',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg>',
    description: 'Flower Blooms',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg>',
    description: 'Alpine Mountains',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg>',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg>',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg>',
    description: 'Nature Landscape',
  },
  {
    preview:
      '<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg>',
    original:
      '<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg>',
    description: 'Lighthouse Coast Sea',
  },
];
```

# **3 - Galeri öğelerini işaretleme**

Galeri öğelerini eklemek için bir kapsayıcınız ve bunları oluşturmak için verileriniz var. Şimdi galeriyi işaretleme ile doldurma zamanı.

Bir galeri öğesi için `images` dizisini ve bu HTML şablonunu kullanın ve JavaScript kodunda öğe biçimlendirmesini oluşturun, ardından tüm biçimlendirmeyi ul.gallery içine ekleyin. Bu şablonda bulunanlar dışında herhangi bir HTML etiketi eklemeyin.

`<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>`

- `<img>` etiketinin `src` niteliğinde, görüntünün küçük bir sürümüne bir bağlantı belirtin.
- `alt` niteliği için, görüntünün bir açıklamasını kullanırız.
- Büyük bir resmin bağlantısı, `<img>` öğesindeki `source` data niteliğinde saklanmalı ve bağlantının `href`'inde belirtilmelidir.
- Lütfen görüntünün, görüntü dosyasının yolunu gösteren `href` niteliğine sahip bir bağlantıya sarıldığını unutmayın. Bu nedenle, üzerine tıklamak görüntünün kullanıcının bilgisayarına indirilmesine neden olabilir. Bu davranışı varsayılan olarak devre dışı bırakın.

# **4 - Stil**

Düzene göre galeri stilini ekleyin.

# **5 - Delegasyon**

Galeri öğelerine tıklamaları dinleme ve tıklandıklarında büyük bir resme bağlantı alma işlevselliğini eklemenin zamanı geldi. Bunu yapmak için `ul.gallery` üzerinde delegasyon yöntemini kullanın. Şimdilik, bir galeri öğesine tıkladığınızda, konsolda büyük resme bir bağlantı görüntüleyin.

# **6 - Kütüphane bağlantısı**

[basicLightbox](https://github.com/electerious/basicLightbox/tree/master) kütüphanesi, görevimiz için mükemmel olan tamamen işlevsel bir modal pencere sağlar. [jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) CDN hizmetini kullanın ve kütüphanenin küçültülmüş (`.min`) JS ve CSS dosyalarının bağlantılarını HTML dosyanıza ekleyin.

# **7 - Modal pencere**

Kodunuzu, bir galeri öğesine tıkladığınızda bağlı kütüphanenin modal penceresi açılacak şekilde değiştirin. Modal pencereyi kodunuzda nasıl başlatacağınızı ve nasıl kullanacağınızı öğrenmek için [belgeleri](https://github.com/electerious/basicLightbox#readme) ve [örnekleri](https://basiclightbox.electerious.com/) okuyun.

# **8 - Büyük resim**

Açmadan önce modal penceredeki `<img>` öğesinin `src` niteliğinin değerini değiştirmek üzere büyük bir resme bağlantı almak için kodunuzu kullanın. [basicLightbox](https://basiclightbox.electerious.com/) kütüphanesindeki örneklerden bir görüntü içeren bir modal pencere için hazır işaretlemeyi kullanın.

# **9 - Klavyeden kapatma**

`Escape` tuşuna bastıktan sonra modal pencereyi kapatma işlevini ekleyin. Klavyenin yalnızca mod penceresi açık olduğu sürece dinlendiğinden emin olun. [basicLightbox](https://basiclightbox.electerious.com/) kütüphanesi, bir mod penceresini programlı olarak kapatmak için bir yöntem içerir.

# **Mentor ödevi kontrol ederken nelere bakacaktır:**

- Canlı sayfada `images` veri kümesinden bir resim galerisi görüntülenir
- Düzene uyacak şekilde stilize edilmiş resim galerisi
- Galeri için veriler JS'de dinamik olarak oluşturulur
- Galeri öğelerine tıklama olayını dinlerken temsilci atama tekniği kullanılır
- Galeri öğeleri arasına tıkladığınızda hiçbir şey olmuyor
- basicLightbox kütüphanesi bağlantı kurulması
- Bir galeri öğesine tıkladığınızda, bağlı kütüphanenin tıklanan görüntünün büyütülmüş bir versiyonunu içeren modal bir penceresi açılır
- `Escape` tuşuna bastıktan sonra modal pencereyi kapatma işlevi uygulandı
- Klavye olayının dinlenmesi yalnızca modal pencere açıkken gerçekleşir

[Task - Detaylı Çözüm](Homework%208%20-%20Etkinlikler%20ve%20K%C3%BCt%C3%BCphaneler/Task%20-%20Detayl%C4%B1%20%C3%87%C3%B6z%C3%BCm%202d7673274a8e8082a6c3f20995860f72.md)