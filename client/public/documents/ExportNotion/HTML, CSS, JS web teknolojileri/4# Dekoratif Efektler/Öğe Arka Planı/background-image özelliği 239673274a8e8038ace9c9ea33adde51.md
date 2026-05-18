# background-image özelliği

`background-image` özelliği, adresi `url()` işlevine argüman olarak belirtilen öğenin arka plan görüntüsünü ayarlar. Bu, göreli veya mutlak bir yol olabilir.

`background-image: url(görüntü yolu);`

```
Arka plan öğesi yalnızca içerik alanı ve dolgu için geçerlidir,kenar boşluğu için asla geçerli değildir, çünkü kenar boşluğu harici bir girintidir.

```

Arka plan rengini ve arka planın üstüne yerleştirilecek olan arka plan resmini hemen ayarlamalısınız. Örneğin, görüntü yüklenmezse, kullanıcı en azından arka plan rengini görerek boş bir alan görmez. Bu durum özellikle blok, belgenin ana rengiyle kontrast oluşturmayan bir metin içeriyorsa geçerlidir.

`.hero {
	background-color: #2a2a2a;
	background-image: url(görüntü yolu);
}`

### `background-image` Özelliği Nedir?

CSS'deki `background-image` özelliği, bir HTML elemanının arka planına bir resim yerleştirmenizi sağlar. Bu resmin adresi, `url()` fonksiyonunun içine yazılır.

**Sözdizimi:**

```css
.selector {
  background-image: url('resmin-yolu/resim.jpg');
}

```

Burada `resmin-yolu/resim.jpg` kısmı, resminizin bulunduğu konumu belirtir. Bu, aynı klasördeki bir resim (göreli yol) olabileceği gibi, internet üzerindeki bir resmin adresi (mutlak yol) de olabilir.

---

### Metindeki Önemli Noktaların Açıklaması

### 1\. Arka Plan Nereye Uygulanır? (İçerik ve Dolgu Alanı)

Metinde belirtildiği gibi, arka plan resmi sadece elemanın **içerik (content)** ve **iç boşluk (padding)** alanlarını kaplar. **Dış boşluk (margin)** alanını kaplamaz.

Bunu daha iyi anlamak için CSS kutu modelini (box model) göz önüne alalım:

- **Content (İçerik):** Metin, resim gibi elemanın asıl içeriğinin bulunduğu alandır.
- **Padding (İç Boşluk):** İçerik ile kenarlık arasındaki boşluktur.
- **Border (Kenarlık):** Padding alanını çevreleyen çizgidir.
- **Margin (Dış Boşluk):** Kenarlığın dışında, eleman ile diğer elemanlar arasına konulan boşluktur.

**Örnek:**

Aşağıdaki kodda, `div` elemanımızın bir metin içeriği, padding'i, kenarlığı ve margin'i var. Arka plan resminin sadece içerik ve padding alanını kapladığını, kenarlık ve margin alanını ise etkilemediğini görebilirsiniz.

**HTML Kodu:**

```html
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Background Image Örneği</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="kutu">
  <h2>Başlık</h2>
  <p>Bu alan, içeriğin ve iç boşluğun (padding) arka plan resmini nasıl kapladığını gösterir. Dıştaki turuncu alan ise dış boşluktur (margin) ve arka plandan etkilenmez.</p>
</div>

</body>
</html>

```

**CSS Kodu (`style.css`):**

```css
body {
  background-color: #f0f0f0; /* Sayfanın genel arka planı */
}

.kutu {
  /* Arka Plan Özellikleri */
  background-color: #2a2a2a; /* Resim yüklenmezse görünecek renk */
  background-image: url('<https://via.placeholder.com/400x200.png?text=Arka+Plan+Resmi>'); /* Örnek resim adresi */

  /* Kutu Modeli Özellikleri */
  padding: 30px; /* İç boşluk */
  border: 5px solid red; /* Kırmızı kenarlık */
  margin: 40px; /* Dış boşluk (Turuncu ile gösterilecek) */

  /* Diğer stiller */
  color: white; /* Metin rengi */
  text-align: center;
  background-color: orange; /* Margin alanını görselleştirmek için kutuyu saran bir konteyner yerine body'ye margin verdik ve kutunun marginini turuncu yaptık.*/
}

```

**Bu kodun çıktısı şöyle görünecektir:**

- **Beyaz Metin ve Gri Resim:** Bunlar `content` ve `padding` alanını kaplayan arka planın üzerindedir.
- **Kırmızı Çizgi:** Bu, `border` (kenarlık) alanıdır. Arka plan resmi bu alana uygulanmaz.
- **Turuncu Alan:** Bu, `margin` (dış boşluk) alanıdır ve tamamen şeffaftır, altındaki `body`'nin rengini gösterir.

---

### 2\. Neden `background-color` Kullanmalıyız?

Metnin vurguladığı en önemli konulardan biri budur. `background-image` ile birlikte her zaman bir `background-color` (arka plan rengi) belirlemelisiniz. Bunun birkaç sebebi vardır:

- **Yükleme Hataları:** Eğer belirttiğiniz resim adresi yanlışsa, resim sunucudan silinmişse veya kullanıcının internet bağlantısı yavaşsa resim yüklenemeyebilir. Bu durumda, eğer bir `background-color` belirtmediyseniz, o alan boş ve genellikle beyaz kalır.
- **Okunabilirlik:** Özellikle arka planın üzerindeki metin açık renkliyse (örneğimizdeki gibi beyaz), resim yüklenmediğinde beyaz arka plan üzerinde beyaz metin görünmez hale gelir. Bir `background-color` atayarak (örneğin koyu bir renk), resim yüklenmese bile metnin okunabilir kalmasını sağlarsınız.

**Örnek Senaryo:**

Yukarıdaki CSS kodunda `background-image` URL'ini kasten yanlış yazalım:

```css
.kutu {
  background-color: #2a2a2a; /* Bu renk hayat kurtarır! */
  background-image: url('yanlis-adres/resim.jpg'); /* Bu resim yüklenmeyecek */

  color: white; /* Metin rengi beyaz */
  padding: 30px;
  border: 5px solid red;
  margin: 40px;
}

```

**Sonuç:**

Resim yüklenemediği için tarayıcı doğrudan `background-color` olan `#2a2a2a` (koyu gri) rengini gösterecektir. Beyaz metin bu koyu arka plan üzerinde rahatlıkla okunabilir. Eğer `background-color` olmasaydı, okunması çok zor bir metnimiz olacaktı.