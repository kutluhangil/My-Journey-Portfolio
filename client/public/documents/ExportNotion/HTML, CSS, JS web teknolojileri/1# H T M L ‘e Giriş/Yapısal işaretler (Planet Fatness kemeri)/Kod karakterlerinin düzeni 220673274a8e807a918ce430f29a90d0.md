# Kod karakterlerinin düzeni

Karakter ikameleri yalnızca klavyede olmayan karakterleri eklemek için değil, aynı zamanda HTML'de özel bir amacı olan karakterler için de kullanılır. Örneğin, etiket içeren bir metni sayfada metin olarak görüntülemek istiyorsanız.

`<p>Kalın metin için, etiketlerle seçin <strong> і </strong>.</p>`

`<` ve `>` karakterleri, etiketleri açan ve kapatan HTML sözdiziminin bir parçasıdır. Bu nedenle, bunları doğrudan sayfa koduna eklemek, `<strong>` ve `</strong>` etiketlerinin yorumlanmasına neden olacaktır. Bu durumda, `<` ve `>` karakterleri yerine `&lt;` ve `&gt;` joker karakterlerini kullanmalısınız.

`<p>Kalın metin için, etiketlerle seçin &lt;strong&gt; і &lt;/strong&gt;.</p>`

---

### **🎯 ÖNCE SORUN NE?**

HTML’de bazı karakterler **özel anlamlara** sahiptir.

Mesela:

- < → “etiket başlıyor” demektir
- > → “etiket bitiyor” demektir

Örneğin bu kod:

```
<p>Merhaba <strong>dünya</strong></p>
```

şöyle görünür:

👉 **Merhaba dünya**

Ama bazen bu <strong> etiketlerini **göstermek**, yani kodun kendisini **yazı olarak ekrana yazdırmak** istersin.

Ama HTML normalde bunu bir etiket gibi görüp uygular. Yani <strong> yazarsan, kalın yazar, “” diye göstermez.

---

### **💡 ÇÖZÜM: ÖZEL KARAKTER KODLARI KULLAN**

Eğer < ve > gibi özel anlamı olan karakterleri **sadece yazı olarak göstermek** istiyorsan, onların yerine özel simgeler yazarsın:

- < yerine &lt;
- > yerine &gt;

---

### **🧠 ÖRNEĞİ ANLAYALIM:**

Senin örneğin şu:

```
<p>Kalın metin için, etiketlerle seçin <strong> і </strong>.</p>
```

Bu, tarayıcıda şöyle görünür:

👉 Kalın metin için, etiketlerle seçin **і**.

Ama sen **“ і ” kodunu yazı olarak göstermek** istersen (yani kalın değil, düz yazı olarak) şöyle yazmalısın:

```
<p>Kalın metin için, etiketlerle seçin &lt;strong&gt; і &lt;/strong&gt;.</p>
```

Bu da ekranda şöyle görünür:

👉 Kalın metin için, etiketlerle seçin <strong> і </strong>.

---

### **✅ SONUÇ:**

- < ve > karakterlerini doğrudan yazarsan HTML bunu **etiket** olarak algılar.
- Ama bunları **yazı olarak göstermek** istersen &lt; ve &gt; şeklinde yazmalısın.

İşte hepsi bu kadar! 🤓

İstersen bu örneği kendi HTML sayfanda deneyebilirsin.

Aşağıdaki metni tüm karakterleriyle birlikte bağlantı listesinden sonra altbilgiye ekleyin. Sembolik ikameleri kullanın.

```
©2023 ARST Planet Fatness, Ltd. All rights reserved. Unless otherwise indicated,
all materials on the page are copyrighted by ARST Planet Fatness, Limited. All rights
reserved. No part of this page, either text or image may be used for any purpose.

```

- Belge `<footer>` etiketini içermelidir.
- Altbilginin içinde bir paragraf metni bulunmalıdır.
- Paragrafta `©` için bir karakter değiştirme kodu bulunmalıdır.
- Paragraf metni görev ile örtüşmelidir.

<p>
©2023 ARST Planet Fatness, Ltd. All rights reserved. Unless otherwise indicated, all materials on the page are copyrighted by ARST Planet Fatness, Limited. All rights reserved. No part of this page, either text or image may be used for any purpose.
</p>

</footer>