# text-shadow özelliği

`text-shadow` özelliği metin gölgesini kontrol eder ve parametrelerini ayarlar: renk, ofset ve bulanıklık yarıçapı.

`text-shadow: <x ofset>, <y ofset>, <bulanıklık yarıçapı>, <renk>`

Ayarların her birinin metin görüntüsünü nasıl etkilediğini karşılaştırın.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/bba8af2c-0f29-4636-81e1-729dacc068daUntitled%20%2834%29.jpeg)

Her bir parametreye ayrı ayrı bakalım:

- `renk` — Gölgenin rengini belirler. Herhangi bir renk değeri (renk ismi, HEX, RGB, vb.) belirtilebilir. Varsayılan olarak, gölge rengi metin rengiyle eşleşir.
- **X Ofseti**: Gölgenin metne göre yatay kaymasıdır. Pozitif bir değer gölgeyi sağa, negatif bir değer ise sola kaydırır.
- **Y Ofseti**: Gölgenin metne göre dikey kaymasıdır. Pozitif bir değer gölgeyi aşağıya, negatif bir değer ise yukarıya kaydırır.
- `bulanıklık yarıçapı` — Gölgenin ne kadar bulanık olduğunu belirler. Değer ne kadar büyükse, gölge o kadar bulanıklaşır ve daha geniş bir alana yayılır. Belirtilmemişse varsayılan değer `0`'dır.

`<h1 class="title">Fusce posuere ligula elementum purus</h1>`

Koyu gölgeli turuncu bir metin oluşturalım. Bunu yapmak için X ve Y ofsetini `2px`, bulanıklık yarıçapını `4px` ve gölgeyi siyah olarak ayarlayın.

`.title {
  color: orangered;
  text-shadow: 2px 2px 4px black
}`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ed98ec50-d57a-459b-afa6-95688f9ec1e7Screenshot%202023-02-24%20at%2014.50.20.png)

Birinci seviye başlığa aşağıdaki özelliklere sahip bir gölge ekleyin:

- Yatay ofset : `2px`
- Dikey ofset : `2px`
- Bulanıklık yarıçapı : `4px`
- Gölge rengi : `#212121`

Mevcut CSS kurallarını kullanın.

- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `text-shadow` değeri `2px 2px 4px #212121` olmalıdır.
    
    ![Screen Shot 2025-07-07 at 23.37.08 PM.png](text-shadow%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-07_at_23.37.08_PM.png)
    

![Screen Shot 2025-07-07 at 23.37.22 PM.png](text-shadow%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-07_at_23.37.22_PM.png)