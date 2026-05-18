# İç içe yerleştirme: neyin nereye yerleştirilebileceği nasıl belirlenir

Yerleşimi öğrenmek için, hangi etiketlerin birbiri içine yerleştirilebileceğini anlamak önemlidir. Aşağıdaki belgeler etiketler ve iç içe yerleştirme hakkında kapsamlı bilgi sağlar:

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/) spesifikasyonu, HTML dilinin standartlarını, özelliklerini ve gelecekteki gelişimini açıklayan ana belgedir.
- [HTML Etiket Referans Kılavuzu](https://htmlreference.io/), belirli etiketlerle çalışırken veya hızlı bir şekilde bilgiye ihtiyaç duyduğunuzda kullanışlı bir **hızlı referans kılavuzu** olarak el altında bulundurulabilir.

```
Bir geliştirici en sık kullanılan etiketlerin özelliklerini ezbere bilir.
Daha az kullanılan etiketlerin özelliklerinin açıklığa kavuşturulması gerekiyorsa, referans kitaplara başvurur.
Görüşme sırasında spesifikasyonla ilgili sorular da ortaya çıkabilir.

```

Spesifikasyonlar ve kılavuzlar oldukça detaylıdır ve bilgiyi araştırmak ve öğrenmek için zaman gerektirir. Günlük kullanım için çok kullanışlı kaynaklar mevcuttur, örneğin [Can I include](https://caninclude.glitch.me/). Bu kaynak sayesinde etiketin gömülmesinin olanaklı olup olmadığını belirlemek çok daha kolay hale gelir.

1. Lütfen şu bağlantıya tıklayın: [https://caninclude.glitch.me/](https://caninclude.glitch.me/)

2. İşte giriş:

- Eklemek istediğimiz *etiketi* **(örneğin, <li>)** **"Child tag name"** alanına girin;
- Gömmek istediğimiz *etiketi* **(örneğin, <ul>)** **"Parent tag name"** alanına girin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/53deae2e-dcde-40de-a37d-110835af37f7Untitled%20-%202024-03-25T011228.958.png)

3. **Kontrol Et** düğmesine tıklayın ve sonucu görün:

**Yeşil** - içine konulabilir,

**Kırmızı** - içine konulamaz,

**Sarı** - kesin bir cevap yok, ek koşullar veya bazı kısıtlamalarla farklı cevaplar mümkündür. Örneğin, `<a>` etiketi içine etkileşimli öğeler dışındaki her şey konulabilir, örneğin, diğer bağlantılar.

```
Net bir cevabınız yoksa, mentorunuzla iletişime geçin veya dersten önce öğretmeninize sorun.
```