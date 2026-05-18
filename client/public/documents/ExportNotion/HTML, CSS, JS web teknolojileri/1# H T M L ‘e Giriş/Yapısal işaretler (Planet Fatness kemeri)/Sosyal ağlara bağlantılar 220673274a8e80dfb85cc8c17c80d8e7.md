# Sosyal ağlara bağlantılar

Genellikle bir web sitesi altbilgisi, şirketin veya yazarın sosyal medya sayfalarına bağlantılar içerir. Teknik olarak, bu bağlantılar, daha önce tartıştığımız **görüntü bağlantıları** (resim bağlantıları) ile aynıdır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/57b1edf0-5eae-43df-b3b7-77cd97d8fe36image.png)

**Tek fark yüklenecek görselin formatındadır. Sosyal medya logolarının görselleri SVG formatında olmalıdır.**

```
Teoriyi Yeniden İncelemekte Fayda Var!
Yeni bilgiler öğrenmek beyin için bir meydan okumadır. Çok fazla yeni bilgi olduğunda, beyin bu bilgiyi işlemek için mevcut bilgileri bir kenara koyabilir ve unutur. Bu sorunları önlemek için, yararlı bilgileri düzenli olarak tekrar etmek önemlidir—örneğin, derslerden önce, ödev yaparken veya boş vakitlerde. Bu, tüm bilgileri okumayı gerektirmez; yalnızca teorik blokları gözden geçirmek yeterlidir.
```

Altbilgideki metni kaldırın. Metin yerine, altbilgiye popüler sosyal ağlara resim-bağlantı listesi ekleyin. Her simgenin yüksekliği ve genişliği `32` piksel olsun. Bağlantıya tıkladığınızda, sosyal medya sayfaları yeni bir tarayıcı sekmesinde açılmalıdır. Simgeler ve alternatif metinler için aşağıdaki bağlantıları kullanın.

```
Bağlantı 1: https://www.instagram.com/
Simge 1: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04insta.svg
Alternatif metin 1: Instagram

Bağlantı 2: https://www.facebook.com/
Simge 2: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04facebook.svg
Alternatif metin 2: Facebook

Bağlantı 3: https://www.youtube.com/
Simge 3: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04youtube.svg
Alternatif metin 3: YouTube

```

- Belge `<footer>` etiketini içermelidir.
- Altbilginin içinde bir liste olmalıdır.
- Liste üç öğeden oluşmalıdır.
- Listedeki her öğenin bir bağlantısı bulunmalıdır.
- Sosyal medya bağlantılarına tıkladığınızda, yeni bir tarayıcı sekmesinde açılmalıdır.
- Her bağlantı bir resim içermelidir.
- İlk bağlantının `href` niteliğinin değeri `https://www.instagram.com/` şeklinde olmalıdır.
- İlk görüntünün `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04insta.svg` şeklinde olmalıdır.
- İlk resmin `alt` niteliğinin değeri `Instagram` olmalıdır.
- İkinci bağlantının `href` niteliğinin değeri `https://www.facebook.com/` olmalıdır.
- İkinci görüntünün `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04facebook.svg` olmalıdır.
- İkinci resmin `alt` özniteliğinin değeri `Facebook` olmalıdır.
- Üçüncü bağlantının `href` niteliğinin değeri `https://www.youtube.com/`olmalıdır.
- Üçüncü resmin `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04youtube.svg` olmalıdır.
- Üçüncü resmin `alt` niteliğinin değeri `YouTube` olmalıdır.

<header>Page header</header>

<main>Main content</main>

<footer>
<ul>
<li>
<a href="[https://www.instagram.com/](https://www.instagram.com/)" target="_blank">
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04insta.svg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04insta.svg)"
alt="Instagram"
width="32"
height="32"
/>
</a>
</li>
<li>
<a href="[https://www.facebook.com/](https://www.facebook.com/)" target="_blank">
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04facebook.svg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04facebook.svg)"
alt="Facebook"
width="32"
height="32"
/>
</a>
</li>
<li>
<a href="[https://www.youtube.com/](https://www.youtube.com/)" target="_blank">
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04youtube.svg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/b04youtube.svg)"
alt="YouTube"
width="32"
height="32"
/>
</a>
</li>
</ul>
</footer>