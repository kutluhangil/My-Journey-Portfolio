# font-weight özelliği

`font-weight` özelliği, bir fonttaki harflerin kalınlığını (kalınlık, ağırlık) kontrol eder. Özellik değeri, bir dizi ayrılmış sözcük kullanılarak veya 100'lük artışlarla `100` ila `900` arasındaki sayılar kullanılarak belirtilebilir. Bu değerler, ince `100`'den kalın `900`'e kadar olan glifin kalınlık derecesini ifade eder.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/aecb9ad2-601e-431c-ac4b-d4a483d70d48%D0%9C02%D0%9205S04.jpg)

`font-weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900`

Anahtar kelimeler sayılarla ilişkilidir, örneğin `normal` `400` ve `bold` `700` anlamına gelir. Geliştirme sırasında, tüm tarayıcılarda aynı tam ağırlığı ayarlamak için genellikle sayılar kullanılır.

`<h1 class="title">Iste odit similique sit</h1>
<p class="text">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
  veritatis nihil alias iste odit similique sit eius optio veniam, impedit
  cumque fuga facere labore quo id necessitatibus quaerat rerum.
</p>`

Varsayılan olarak, tarayıcının stil sayfasında ayarlanan paragraf yazı tipi ağırlığı `400` ve başlık ağırlığı — `700`'dür.

`*/* Başlık ve paragraf metninin kalınlığını değiştirin */*.title {
  font-weight: 400;
}

.text {
  font-weight: 700;
}`

Kulüp bölüm başlıklarının ve bağlantılarının yazı tipi kalınlığını ayarlayın. Mevcut CSS kurallarını tamamlayın.

- `h1` başlık metni kalınlığı `500` olmalıdır
- `h2` başlık metni kalınlığı `500` olmalıdır
- Kulüpler bölümündeki bağlantı metinlerinin kalınlığı `500`olmalıdır
- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı ulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `font-weight` değeri `500` olmalıdır.
- Stil sayfasında `.section-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.section-title` seçicisine sahip CSS kuralının `font-weight` değeri `500` olmalıdır.
- Stil sayfasında `.club-list .link` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .link` seçicisine sahip CSS kuralının `font-weight`değeri `500` olmalıdır.

![Screen Shot 2025-07-06 at 23.57.45 PM.png](font-weight%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-06_at_23.57.45_PM.png)