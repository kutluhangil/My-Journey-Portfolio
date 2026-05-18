# Etiket Grubu Tasarlama

Başlıkların tasarım gereği ana yazı tipinden farklı bir yazı tipinde görüntülenebileceğinden daha önce bahsetmiştik. Her başlık için ayrı ayrı `font-family` ayarlamaktan kaçınmak için, `h1`'den `h6`'ya kadar tüm etiketler için bir seçici içeren bir CSS kuralı yazabilir ve istenen yazı tipini ayarlayabiliriz.

`body {
  font-family: 'Helvetica Neue', 'Roboto', 'Verdana', sans-serif;
	color: #2a2a2a;
	background-color: #fafafa;
}

h1, h2, h3, h4, h5, h6 {
	font-family: 'Tahoma';
}`

Bu kod, `h1`'den `h6`'ya kadar olan tüm başlık etiketlerinin `Tahoma` yazı tipini kullanmasını sağlar. Çünkü başlıklar için tanımlanan CSS kuralı, diğer stil kurallarına göre daha yüksek özgüllüğe sahiptir.

# **Kod parçacığına göz atın**

`body {
  font-family: 'Helvetica Neue', 'Roboto', 'Verdana', sans-serif;
	color: darkgray;
	background-color: white;
}

h1 h2, h3 {
	font-family: 'Tahoma';
  color: red;
}`

İkinci seviye başlık metninin rengini belirleyin (1 doğru yanıt)

darkgray

red

Sonuç

Bu doğru!

# **Kod parçacığına göz atın**

`body {
  font-family: 'Helvetica Neue', 'Roboto', 'Verdana', sans-serif;
	color: darkgray;
	background-color: white;
}

h1 h2, h3 {
	font-family: 'Tahoma';
  color: red;
}`

Belgemizdeki tüm başlıklar aynı yazı tipini `Oswald` kullanmaktadır. Her başlık için farklı CSS kurallarında font ailesi bildirimlerini yinelemekten kaçınmak için, `h1`den `h6`ya kadar tüm başlık türleri için bir kural ekleyin ve font ailesini bu kuralda belirtin. Başlıklar için sınıf seçicilerden font ailesi bildirim özelliğini kaldırmayı unutmayın.

- Stil sayfasında `h1, h2, h3, h4, h5, h6` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `h1, h2, h3, h4, h5, h6` seçicisine sahip CSS kuralının `font-family` özelliği `"Oswald", sans-serif` değerine sahip olmalıdır.
- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralında `font-family` özelliği bulunmamalıdır.
- Stil sayfasında `.section-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.section-title` seçicisine sahip CSS kuralı `font-family` özelliğine sahip olmamalıdır.
- Stil sayfasında `.club-list .title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .title` seçicisine sahip CSS kuralının `font-family`özelliği bulunmamalıdır.

![Screen Shot 2025-07-08 at 23.00.43 PM.png](Etiket%20Grubu%20Tasarlama/Screen_Shot_2025-07-08_at_23.00.43_PM.png)