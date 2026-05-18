# Homework 9 - Kod Modülerliği ve Bundler Vite

Wow, sen zaten 9. modüldesin!

Ara sonuçları toplayalım mı? Sen artık:

- JSON formatının özelliğini anlıyorsun
- JSON objesinin metotlarını biliyor ve kullanıyorsun
- Web depolama ve yerel depolama arasındaki farkı biliyorsun
- Node.js'i yükledin ve NPM (node paket yöneticisi) kullanıyorsun
- Kod modülerliği kavramını anlıyorsun
- ECMAScript Modules'nin sözdizimini kullanıyorsun
- Paketleri nasıl yükleneceğini, kaldırılacağını ve kod içinde nasıl kullanılacağını biliyorsun

Pratik yapma zamanı geldi! Seni ilginç görevler bekliyor - resim galerisi oluşturma ve form verilerini kaydetme.

# **Ev Ödevi 9**

- `goit-js-hw-09` deposunu oluştur
- Projeyi [Vite](https://vitejs.dev/) ile derle. Ek ayarlarla önceden hazırlanmış bir derleme için [şablonu](https://github.com/goitacademy/vanilla-app-template) hazırladık ve kullanmanı öneriyoruz.
- Görevi oku ve kod düzenleyicide uygula.
- Kodunun `Prettier` ile biçimlendirildiğinden ve görev sayfasını açarken konsol üzerinde hata veya uyarı olmadığından emin ol.
- Ev ödevini kontrol etmek için teslim et.

**Teslim Formatı:** Ev ödevi, kaynak dosyalar ve çalışan sayfanın `GitHub Pages` bağlantısını içermelidir.

```
Görevlerinin biçimlendirmesi için bu taslağı kullan.

```

Projektin `src` klasöründeki dosya ve klasör yapısı aşağıdaki gibi olmalıdır. Dosyaları index.html'e eklemeyi önceki ev ödevinde nasıl yaptığını görebilirsin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/92720eb1-a3cb-44aa-b717-2c277df396afScreenshot%202023-09-27%20at%2016.40.05.png)

# **Görev 1 - Resim Galerisi**

Bu görevi `01-gallery.html` ve `01-gallery.js` dosyalarında gerçekleştir.

Önceki ödevinde, resim galerisi oluşturmayı kendi başına yapmıştın, olay delegasyonunu kullanarak ve CDN üzerinden modal pencere ekleyerek resmin tam boyutunu göstermek için.

Galeri oluşturmak, geliştiricinin günlük görevidir, ancak her seferinde el ile yazmak çok zahmetlidir. Bu işlevselliği gerçekleştiren kütüphaneler mevcuttur.

SimpleLightbox kütüphanesini kullanarak aynı galeriyi oluştur, bu kütüphane resimlere tıklamaların, modal pencerenin açılmasının ve kapanmasının, ayrıca klavyeyle resimleri dolaşmanın tüm işlevselliğini tamamen üstlenecektir.

Galeri çalışma demo videosunu izle.

Dikkat etmen gereken detaylar şunlardır:

- Artık etkinlik yönlendirme işlemini gerçekleştirmene gerek yok, [SimpleLightbox](https://www.npmjs.com/package/simplelightbox) kütüphanesi galeri kartlarında tıklama olaylarını otomatik olarak takip edecek.
- Modal pencere oluşturmak için ayrı bir kütüphane gerekli değildir, bu özellik [SimpleLightbox](https://www.npmjs.com/package/simplelightbox)kütüphanesinde entegre olarak bulunmaktadır.

Bu görevi `gallery.html` ve `gallery.js` dosyalarında gerçekleştir. Görevi birkaç alt göreve ayır:

Önceki ödevdeki kodu kullan ve onu yeniden düzenle. Her şeyi sıfırdan yazmana gerek yok. Örneğin, galeri öğelerini oluşturma aynı kalacaktır. Ancak, etkinlik yönlendirme ve modal pencereyi açma kodunu silmelisin.

Galeri kartı düzenini biraz değiştirmen gerekecek, aşağıdaki şablonu kullan.

```
<li class="gallery-item">
	<a class="gallery-link" href="large-image.jpg">
		<img
			class="gallery-image"
			src="small-image.jpg"
			alt="Image description"
			/>
	</a>
</li>
```

Projenize [SimpleLightbox](https://www.npmjs.com/package/simplelightbox) bağımlılık olarak eklemek için `npm` kullanın. Kütüphanenin CSS kodunu projeye dahil etmek için, belgelerde belirtilenin yanı sıra başka bir import eklemeniz gerekmektedir.

```
// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";
```

Sonraki adım, `ul.gallery` içine galeri öğeleri oluşturduktan ve ekledikten sonra kütüphaneyi başlatmaktır. Bunun için [SimpleLightbox](https://www.npmjs.com/package/simplelightbox) belgelerine göz at - öncelikle "Usage" ve "Markup" bölümlerine.

Sonrasında belgede "Options" bölümüne bak, ve görüntüler için `alt` özniteliğinden açıklamaların eklenmesini yap. Açıklama altta olsun ve modüler pencere açıldıktan 250 milisaniye sonra görünsün.

# **Mentorun dikkat edeceği konular:**

- Canlı sayfada, `images` veri dizisinden resim galerisinin görüntülenmesi
- Resim galerisi, taslakla uyumlu şekilde stilize edilmiş
- Galeri verileri dinamik olarak JS tarafından oluşturulmuş
- Özel olay dinleyicilerinin olmaması
- `npm` kullanılarak SimpleLightbox kütüphanesinin entegre edilmiş olması
- Kütüphane örneği, galeri öğeleri DOM'a eklendikten sonra ve herhangi bir işlevin kapsamı dışında başlatılmış olması
- Galeri öğesine tıklandığında bağlanan kütüphanenin modal penceresinin açılması, tıklanan resmin büyütülmüş sürümünün bulunduğu ve kütüphanenin temel işlevlerinin çalıştığı bir pencerenin açılması
- Modal penceresi açıldıktan sonra 250 milisaniye içinde, resmin alt etiket içeriğinin `alt` kısmında gösterilmesi

# **Görev 2 - Geri Bildirim Formu**

Bu görevi `02-form.html` ve `02-form.js` dosyalarında tamamla.

HTML yapısına bir geri bildirim formu ekleyin. JS'de kullanıcının bir şey yazdığında alan değerlerini yerel depolamada saklayacak bir script yazın.

```
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Bu görevi `feedback.html` ve `feedback.js` dosyalarında gerçekleştir. Görevi aşağıdaki alt görevlere ayır:

1. Delegasyon kullanarak, form üzerinde `input` olayını izleyerek her seferinde `email` ve `message`alanlarını içeren bir nesneyi yerel depolama kaydet. Depolama için anahtar olarak `"feedback-form-state"` dizisini kullan.
2. Sayfa yüklendiğinde depo durumunu kontrol et, eğer kayıtlı veri varsa, form alanlarını bu verilerle doldur. Aksi takdirde, alanlar boş olmalıdır.
3. Form gönderildiğinde depoyu ve form alanlarını temizle, ayrıca konsola `email`, `message` alanlarını ve mevcut değerlerini içeren bir nesne yazdır.

# **Mentorun gözden geçirme sırasında dikkat edeceği noktalar:**

- Canlı sayfada, iki form elemanı ve `submit` tipinde bir düğme içeren bir form görüntülenir.
- Form, layout'a uygun şekilde stilize edilmiştir.
- Formda `input` ve `submit` etkinlikleri dinlenir.
- Herhangi bir form elemanına veri girildiğinde, bu veriler `"feedback-form-state"` anahtarı altında yerel depoda saklanır ve kaydedilen veriler kenarlarda boşluk içermez.
- Formdaki bir alanına veri girişi yapılması, diğer alandaki depodaki verileri silmez.
- Sayfa yenilendiğinde, yerel depodaki veriler form elemanlarına yerleştirilir ve form alanlarında `undefined` değerleri bulunmaz.
- Form submit edildiğinde, her iki form elemanının da doldurulduğunu kontrol eder.
- Form submit edildiğinde, her iki form elemanı da doldurulmuşsa, `email`, `message` alanları ve mevcut değerleriyle birlikte bir nesne konsola yazdırılır ve depo ile form alanları temizlenir.
- Form submit edildikten sonra herhangi bir form elemanına veri girilirse, yerel depoda önceki submit'ten gelen veriler görünmez.

[Task - Çözüm](Homework%209%20-%20Kod%20Mod%C3%BClerli%C4%9Fi%20ve%20Bundler%20Vite/Task%20-%20%C3%87%C3%B6z%C3%BCm%202d8673274a8e8084a6fcecec8345eb6e.md)