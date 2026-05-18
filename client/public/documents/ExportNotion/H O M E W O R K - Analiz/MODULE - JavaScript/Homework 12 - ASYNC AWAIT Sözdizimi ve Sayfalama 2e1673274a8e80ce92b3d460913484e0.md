# Homework 12 - ASYNC/AWAIT Sözdizimi ve Sayfalama

Tebrikler! Son aşamaya geldiniz 💪

Modül 12'de yapılanları özetleme ve üzerinde düşünme zamanı.

Kendinizi kontrol edebilirsiniz — şimdi:

- async/await sözdizimini anlıyorsunuz.
- Hatalarla nasıl başa çıkılacağını biliyorsunuz.
- Sayfalandırmanın özünü anlıyorsunuz.
- Sayfalandırma ile çalışırken sorgu parametrelerinin nasıl yapılandırılacağını biliyorsunuz.
- "Daha fazla indir" tekniğini nasıl kullanacağınızı biliyorsunuz.

Bu bilgileri uygulamaya koymanın ve projenizi bir görsel arama uygulaması ile tamamlamanın zamanı geldi.

# **Ev ödevi #12**

- Bir `goit-js-hw-12` deposu oluşturun.
- Projenizi [Vite](https://vitejs.dev/) ile oluşturun. Sizin için tüm ek proje ayarlarıyla birlikte [hazır bir yapı](https://github.com/goitacademy/vanilla-app-template) hazırladık ve bunu kullanmanızı öneririz.
- HTTP istekleri için [axios](https://axios-http.com/) kütüphanesini kullanın.
- `async/await` sözdizimini kullanın.
- Görevi okuyun ve kod düzenleyicide tamamlayın.
- Kodun `Prettier` ile biçimlendirildiğinden ve canlı görev sayfasını açtığınızda konsolda herhangi bir hata veya uyarı olmadığından emin olun.
- Ödevinizi gözden geçirmeniz için teslim edin.

**Teslimat formatı:** Ödev iki bağlantı içerir: kaynak dosyalara ve `GitHub Pages`'daki çalışma sayfasına.

```
Görev düzeninizi şekillendirmek için bu düzeni kullanın.

```

**Hedefler — Görselleri arayın**

Önceki modülün ödevindeki kodu kullanın ve resim arama uygulama koduna yeni fonksiyonlar ekleyin.

**Yeniden Düzenleme**

HTTP istekleri ile çalışmak için [Axios](https://axios-http.com/) kütüphanesini projenize ekleyin ve `fetch` kullanımını değiştirmek için yeniden düzenleyin.

Asenkron isteklerle çalışmak için `async/await` sözdizimini kullanın. Kodunuzu yeniden düzenleyin.

**Sayfalandırma**

Pixabay API'si sayfalandırmayı destekler ve `page` ve `per_page` parametrelerini sağlar. Her görsel arama yanıtında 40 nesnenin döndürüldüğünden emin olun (varsayılan olarak 20).

- `page` parametresinin başlangıç değeri `1` olmalıdır.
- Sonraki her talepte bu değer `1` artırılmalıdır.
- Yeni bir anahtar kelime ararken, yeni resim koleksiyonu sayfalandırılacağından `page` değeri orijinaline döndürülmelidir.

HTML belgesinde, galeriden sonra, bir sonraki resim grubunu istemek ve mevcut galeri öğelerine işaretleme eklemek için tıklanacak olan `Load more` metnine sahip bir düğme ekleyin. Bunu yapmak için, formu gönderdiğinizde, kullanıcının girdiklerini global bir değişkene kaydetmeniz gerekir.

- Galeride resim yokken düğme gizlenmelidir.
- Resimler galeride göründükten sonra, galerinin altındaki arayüzde düğme görünür.
- Formu yeniden gönderdiğinizde, düğme önce gizlenir ve sorgu sonuçlarını aldıktan sonra gerekirse tekrar görüntülenir.
- Ek resim yüklemek için yükleme göstergesini düğmenin altına taşıyın.

Bu aşamada uygulamanın demo videosunu izleyin.

**Koleksiyonun sonu**

Yanıt olarak, arka uç `totalHits` özelliğini getirir — arama kriteriyle eşleşen toplam resim sayısı (ücretsiz bir hesap için). Kullanıcı koleksiyonun sonuna ulaştıysa, `Load more` düğmesini gizleyin ve "`We're sorry, but you've reached the end of search results`" yazan bir mesaj gösterin.

Bu aşamada uygulamanın demo videosunu izleyin.

**Sayfayı kaydırın**

Her bir sonraki resim grubunu talep ettikten ve görüntüledikten sonra sayfanın düzgün bir şekilde kaydırılmasını sağlayın. Bunu yapmak için, [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) işlevini kullanarak koddaki bir galeri kartının yüksekliğini alın. Bundan sonra, sayfayı iki galeri kartı yüksekliğinde kaydırmak için [window.scrollBy](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy)yöntemini kullanın.

Bu aşamada uygulamanın demo videosunu izleyin. [https://youtu.be/aEhYvL7wIV8](https://youtu.be/aEhYvL7wIV8)

[2023-09-29 14-47-54.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/89fec302-e51c-45d8-a968-db8bdab456d2/7b1033a3-adff-4a7c-98d5-d758f539d443/2023-09-29_14-47-54.mp4)

**Mentor kontrol ederken nelere bakacaktır:**

- Ödev iki bağlantı içermeli: kaynak dosyalara ve `GitHub Pages`'da canlı bir sayfaya
- Proje [Vite](https://vitejs.dev/) ile inşa edilmeli
- Geliştirici araçlarındaki konsol hataları, uyarıları ve konsol logları içermez
- Sayfadaki öğeler düzene (veya özel stillere) göre şekillendirilir
- Proje önceki ödevden kod içermektedir
- Tüm asenkron istekler yeniden düzenlendi ve async/await sözdizimi kullanılarak uygulandı
- Talep başına en fazla 20 ürün iade edilir
- Yeni görüntüler tek bir işlemle DOM'a eklenir
- Galerinin altındaki sayfa, tıklandığında bir sonraki sayfaya istek gönderen **Load more** düğmesini içerir
- SimpleLightbox örneğindeki görüntü listesine yeni öğeler eklendikten sonra `refresh()` yöntemi çağrılır
- Kullanıcı belirli bir arama terimi için mümkün olan maksimum sayfanın sonuçlarını aldığında, yani yüklenecek bir şey kalmadığında, **Load more** düğmesi kaybolur ve ilgili bir mesaj görüntülenir
- Her yeni form gönderiminde sayfa numarası varsayılan 1'e sıfırlanır ve önceki isteklerin sonuçları kaybolur
- Galerideki küçük bir resme tıkladığınızda, SimpleLightbox kütüphanesi kullanılarak büyütülmüş versiyonu modal bir pencerede açılır

[Task - Çözüm](Homework%2012%20-%20ASYNC%20AWAIT%20S%C3%B6zdizimi%20ve%20Sayfalama/Task%20-%20%C3%87%C3%B6z%C3%BCm%202e1673274a8e80dea763dbdcc59d9913.md)