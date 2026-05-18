# Address etiketi

Web sayfalarının çoğu, bir kuruluşun veya kişinin iletişim bilgilerini içerir. Bu bilgiler bir kuruluşun ya da bir kişinin (bir makalenin ya da genel olarak bir web sayfasının yazarı) iletişim bilgileri olabilir. Her iki durumda da `<address>` etiketi ile işaretlenmesi önerilir. Bu blok etiketi yardımcı teknolojileri destekler ve sayfanın arama motoru sıralamasını iyileştirir. Böylece, örneğin "X Şirketi iletişim bilgileri ve adresi" gibi anahtar kelimeleri arayan kullanıcılar sonucu daha hızlı alabilirler.

İletişim bilgileri herhangi bir biçimde olabilir:

- fiziksel adres;
- e-posta adresi
- bir web sitesine bağlantı;
- telefon numarası vb.

`*<!-- Örnek 1 -->*<address>
mango@mail.pig
(111) 222-33-44
Kiev,
Lesya Ukrayinka Bulvarı, No: 26,
4. Kat Ofis 427
</address>`

**Örnek 1**'de tüm iletişim bilgileri tek bir satırda verilmiştir.

Metni daha okunabilir kılmak için, adresin her bileşenini ayrı satırlarda göstermek daha faydalıdır. Bunu sağlamak için `<br />` etiketi kullanılabilir.

**Örnek 2**'ye bakın, burada tek bir satır adresin biçimlendirmesi birkaç satıra bölünmüştür.

`*<!-- Örnek 2 -->*<address>
mango@mail.pig <br />
(111) 222-33-44 <br /> 
Kiev, <br />
Lesya Ukrayinka Bulvarı, No: 26, <br />
4. Kat Ofis 427
</address>`

<br> etiketi HTML’de “break” yani “satır sonu” anlamına gelir. Bu etiket bir paragrafı ya da metin bloğunu bölmeden, sadece yazının bir sonraki satıra geçmesini sağlar.

### **Ne işe yarar?**

- Yazıya yeni bir **satır başı** ekler.
- Ama yeni bir paragraf gibi boşluk oluşturmaz.
- Kendi başına kapanan (self-closing) bir etikettir, yani </br> gibi bir kapanışı yoktur.

### **Örnek:**

```
<p>Merhaba!<br>Ben bir yazılım geliştiricisiyim.</p>
```

**Ekranda görünüşü:**

```
Merhaba!
Ben bir yazılım geliştiricisiyim.
```

### **Nerede kullanılır?**

- Şiirlerde, adreslerde veya form gibi yapıların içinde satır atlamak gerektiğinde.
- Küçük içerik düzenlemelerinde hızlı satır geçişi yapılmak istendiğinde.

> Not: Paragraflar için genellikle <p> etiketi tercih edilir. <br> ise daha çok istisnai satır geçişlerinde kullanılır.
> 

Avantajlar listesinden sonra bir paragraf ve altına iletişim bilgileri ekleyin. İletişim bilgileri satırlarını görevdeki gibi yapın. Paragraf metnini ve iletişim bilgilerini aşağıya alın.

```
Do you want to know more? Contact us!

Call us: +070174069900
Email us: fatnessescape@doit.com
You may also want to visit us:
Lorem Foundation
332E Jacked Ave
Mountain View, CA 228322
USA

```

- Avantajlar listesinden sonra, `Do you want to know more? Contact us!` metninin yer aldığı bir paragraf bulunmalıdır.
- Kodda iletişim bilgilerini içeren bir `<address>` etiketi bulunmalıdır.
- `<address>` etiketinin içeriği görevle eşleşmelidir.
- İletişim bilgileri `<br />` etiketi ile yazılmalıdır.

<p>Do you want to know more? Contact us!</p>
<address>
<br>Call us: +070174069900<br />
<br>Email us: [fatnessescape@doit.com](mailto:fatnessescape@doit.com)<br />
<br>You may also want to visit us:
Lorem Foundation
332E Jacked Ave
Mountain View, CA 228322
USA<br />
</address>