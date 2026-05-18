# Props Türlerinin Belirlenmesi

Bir bileşenin aldığı props'ların türlerini kontrol etmek, olası hataların erken tespit edilmesine yardımcı olur. Örneğin, bir props olarak bir dizi (array) bekliyorsanız ancak bileşene yanlışlıkla bir sayı veya geçersiz bir değer gönderilirse, bu durum hatalara yol açabilir.

**Props** türlerini belirlemek, hata ayıklama sürecinde zaman kazandırır ve özellikle dikkat hatalarını önlemek açısından oldukça faydalıdır. İleride TypeScript gibi statik tür kontrolü sağlayan diller hakkında bilgi edinmek daha kapsamlı çözümler sunabilir, ancak başlangıç seviyesinde küçük bir kütüphane de bu işlevi yerine getirebilir.

```
Props türlerini tanımlamak zorunlu değildir. Props'ların türlendirilmesi hataların tespitinde zaman kazandırsa da, bu süreç geliştirici açısından ek bir kod yazımı gerektirir. Bu nedenle, tamamen isteğe bağlıdır.

```

Bu amaçla kullanılan en yaygın araçlardan biri `prop-types` paketidir. Bu kütüphane, kod çalıştığı sırada alınan veri türlerinin doğruluğunu kontrol etmek için bir dizi doğrulayıcı sağlar ve tutarsızlıkları tarayıcı konsolunda bildirir.

`npm install --save-dev prop-types`

Örneğin, `Product` bileşeninin props türlerini tanımlayalım. Bileşenin aldığı props'ların türlerini belirtmek için `propTypes` adlı özel bir özellik kullanılır:

```
// src/components/Product.jsx

import PropTypes from 'prop-types';

const Product = ({
  name,
  imgUrl = "<https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder>",
  price,
}) => (
  <div>
		<img src={imgUrl} alt={name} width="480" />
		<h2>{name}</h2>
    <p>Price: {price} credits</p>
  </div>
);

// Bileşen prop türlerinin tanımı
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};
```

`prop-types` kütüphanesi ile yapılan props türü kontrolü yalnızca geliştirme ortamında çalışır. Bu durum, üretim ortamında uygulamanızın performansını etkilemez; ancak geliştirme sürecinde olası hataları erkenden fark etmenizi sağlar.

## **PropTypes ne işe yarar?**

**PropTypes**, bir React bileşenine gönderilen **props’ların doğru türde olup olmadığını kontrol eder**.

👉 Yanlış türde veri gönderilirse, **tarayıcı konsolunda uyarı verir**.

👉 Uygulama çökmez, ama **hata erkenden fark edilir**.

---

## **Neden kullanılır?**

- Yanlış prop gönderimini erken yakalar
- Kodun **daha güvenli ve okunabilir** olmasını sağlar
- Takım çalışmalarında “bu bileşen ne bekliyor?” sorusunu cevaplar

---

## **Ne zaman çalışır?**

- ✅ **Sadece development (geliştirme) ortamında**
- ❌ Production’da çalışmaz → performansı etkilemez

---

## **Basit örnek**

```
Product.propTypes = {
  name: PropTypes.string.isRequired, // zorunlu string
  imgUrl: PropTypes.string,          // opsiyonel string
  price: PropTypes.number.isRequired // zorunlu number
};
```

Yanlış kullanım:

```
<Product name={123} price="ucuz" />
```

📌 Konsolda uyarı çıkar:

> “Expected string but received number”
> 

---

## **Özet (tek cümle)**

> PropTypes, React bileşenlerine gelen verilerin doğru türde olup olmadığını kontrol eden bir geliştirme aracıdır.
>