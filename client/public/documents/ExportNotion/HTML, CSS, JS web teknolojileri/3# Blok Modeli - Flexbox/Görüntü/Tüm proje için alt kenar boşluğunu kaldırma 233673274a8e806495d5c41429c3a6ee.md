# Tüm proje için alt kenar boşluğunu kaldırma

Her görüntü için öğe türünün değiştirilmesini tekrarlamaktan kaçınmak ve alt dolguyu bir kez ve herkes için kaldırmak için, `img` etiketi için global stiller ayarlayarak onu bir blok etiketi haline getireceğiz. Bu sorunu çözer. Aslında, pratikte, resimlerle çalışırken, her zaman bloklu hale getirilirler.

`img {
	display: block;
}`

- Tüm resimler bloklu olduğunda bir sayfanın nasıl göründüğünü görmek için **Result** öğesine tıklayın.
- **CSS** sekmesinde, adresinin her bir öğeye gereksiz sınıflar atamasını veya öğe türü stillerini çoğaltmasını önlemenizi sağlayan genel ayarları keşfedin.