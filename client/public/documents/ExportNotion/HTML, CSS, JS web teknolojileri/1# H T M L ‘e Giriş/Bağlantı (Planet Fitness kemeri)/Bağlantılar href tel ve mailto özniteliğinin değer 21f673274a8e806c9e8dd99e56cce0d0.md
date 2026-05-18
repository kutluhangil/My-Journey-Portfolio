# Bağlantılar: href tel ve mailto özniteliğinin değerleri

Bir bağlantıya tıkladığınızda, yalnızca diğer sayfalara gitmekle kalmaz, aynı zamanda arama yapabilir ve e-posta gönderebilirsiniz. Bu amaçla `href` niteliğinin özel değerleri kullanabilirsiniz.

Bir cep telefonu kullanıcısının bir bağlantıya tıkladığında arama yapmasının sağlamak istiyorsanız, `href` niteliğine `tel:phone number` değerini eklemelisiniz. Öznitelikteki telefon numarası uluslararası formatta (+ ile başlar) olmalı ve herhangi bir noktalama işareti veya boşluk içermemelidir.

`<a href="tel:+14251234563">+1(425) 123-45-63</a>`

Kullanıcının e-posta istemcisini, bağlantıya tıkladığında alıcı alanı doldurulmuş olarak açmak için, `href` niteliğine `mailto:mailaddress` değerini eklemeniz gerekir; burada `mailaddress`, `mailto` önekine herhangi bir karakter veya boşluk olmadan eklenen alıcının, kişinin veya şirketin adresidir.

`<a href="<mailto:example@mail.pig>">example@mail.pig</a>`

Bu tür bağlantılar `<address>` etiketine gömülebilir ve iletişim bilgileri biçimlendirmesi ile birlikte kullanılabilir.

`<address>
	<a href="<mailto:mango@mail.pig>">mango@mail.pig</a></br />
  <a href="tel:+11112223344">+1(111) 222-33-44</a></br />
  Kiev, <br />
  Lesya Ukrayinka Bulvarı, No: 26, <br />
  4. Kat Ofis 427
</address>`

Doğrusu aşağıda ki:

<address>
<a href="[mailto:mango@mail.pig](mailto:mango@mail.pig)">mango@mail.pig</a><br />
<a href="tel:+11112223344">+1(111) 222-33-44</a><br />
Kiev, <br />
Lesya Ukrayinka Bulvarı, No: 26, <br />
4. Kat Ofis 427
</address>

Telefon numarasını `+070174069900` ve e-posta adresini `fatnessescape@doit.com` bağlantıları yapın, böylece kullanıcı bunlara tıkladığında sizi arayabilir veya size e-posta gönderebilir.

- Kodda iletişim bilgilerini içeren bir `<address>` etiketi bulunmalıdır.
- `<address>` etiketinin iki bağlantısı olmalıdır.
- `<address>` etiketindeki `+070174069900` metni bir bağlantıya sahip olmalıdır.
- Telefon numarası referansının `href` niteliğinin değeri `tel:+070174069900` şeklinde olmalıdır.
- `<address>` etiketindeki `fatnessescape@doit.com` metni bir bağlantıya sahip olmalıdır.
- E-posta adresi referansının `href` niteliğinin değeri `mailto:fatnessescape@doit.com` şeklinde olmalıdır.

<p>Do you want to know more? Contact us!</p>
<address>
Call us: <a href="tel:+070174069900">+070174069900</a><br />
Email us: <a [href="mailto:fatnessescape@doit.com](mailto:href=%22mailto:fatnessescape@doit.com)">[fatnessescape@doit.com](mailto:fatnessescape@doit.com)</a><br />
You may also want to visit us:<br />
Lorem Foundation<br />
332E Jacked Ave<br />
Mountain View, CA 228322<br />
USA
</address>

Kendi yorumum:

İletişim bilgileri doldururken eğer kişinini PC de varsayılan uygulaması üzerinden telefon ve mail olarak açılmasını istiyorsak;  <a href="mailto: ve <a href="tel kullanmamız gerekli.

Örnek olarak: <a [href="mailto:fatnessescape@doit.com](mailto:href=%22mailto:fatnessescape@doit.com)">[fatnessescape@doit.com](mailto:fatnessescape@doit.com)</a><br />

<a href="tel:+070174069900">+070174069900</a><br />