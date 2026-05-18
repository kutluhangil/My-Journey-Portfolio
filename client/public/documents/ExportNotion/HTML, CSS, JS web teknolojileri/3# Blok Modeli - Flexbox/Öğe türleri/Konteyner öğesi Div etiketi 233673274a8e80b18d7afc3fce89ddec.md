# Konteyner öğesi. Div etiketi

`Div` etiketi, anlamsal bir anlamı olmayan evrensel bir kapsayıcıdır. İçeriği gruplamak ve daha fazla şekillendirmek için bir blok sarmalayıcı olarak kullanılır.

Aşağıdaki durumlarda `div` etiketini seçin

- Genel bir kapsayıcıya ihtiyacınız varsa;
- İçeriği tanımlamak için uygun bir etiket ismi bulamıyorsanız.

`<div class="container"></div>`

CSS ile, genellikle `container` adında bir sınıf oluşturularak, `div` etiketi üzerinde stil tanımlanabilir. Kapsayıcının ayarları şunları içerir:

- düzene göre genişlik;
- otomatik yatay kenar boşlukları ve
- isteğe bağlı yatay dolgu, ayrıca düzene göre.

`.container {
  width: 480px;
  margin: 0 auto;
  padding: 0 15px;
}`

Basit tasarımlarda, sayfanın tüm içeriğini hemen hemen saran tek bir genel konteyner olabilir.

- Birden fazla konteyner kullanımına dair örneği inceleyin. Konteyner sınırları kesikli çizgilerle belirtilmiştir.
- **HTML** sekmesine tıklayarak `<div>` etiketinin HTML dosyasında nasıl kullanıldığını görün.
- **CSS** sekmesine tıklayarak, `container` sınıfının nasıl biçimlendirildiğini inceleyin.

Birden fazla konteyner de kullanılabilir, her sayfa bölümünde kendi konteyneri gerektiren durumlarda. Bu yaklaşım, sayfa bölümlerine farklı arka planlar ve stil öğeleri tanımlamayı kolaylaştırır.

- Birden fazla konteyner kullanımına dair örneği inceleyin. Konteyner sınırları farklı renklerle vurgulanmıştır.
- **HTML** sekmesine tıklayarak **HTML** dosyasında kaç `<div>` etiketi kullanıldığını ve hangi içeriği sardıklarını görebilirsiniz.
- **CSS** sekmesinde farklı konteynerlerin nasıl biçimlendirildiğini inceleyin.