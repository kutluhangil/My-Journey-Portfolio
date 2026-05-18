# composes Özelliği

CSS modüllerinin temel özelliklerinden biri olan kompozisyon, başka bir sınıfın stillerini kopyalamadan yeni bir sınıfa dahil etmeyi sağlar. Bu sayede, örneğin `Alert` bileşeninin stillerini yeniden kullanarak farklı varyantlar oluşturabilirsiniz. `composes` özelliği kullanıldığında, geçersiz kılınabilecek kurallar için diğer stiller öncelikli olmalıdır.

```
/* src/components/Alert.module.css */

.alert {
  margin: 8px;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: gray;
  color: white;
}

.info {
  composes: alert;
  background-color: blue;
}

.success {
  composes: alert;
  background-color: green;
}

.error {
  composes: alert;
  background-color: red;
}

.warning {
  composes: alert;
  background-color: orange;
}
```

Basit durumlarda bileşen oluşturmak için `clsx` kütüphanesine ihtiyaç duymadan da yapabiliriz. Temel sınıf olan `alert`'i tanımlamıyoruz çünkü bu sınıf, varyant sınıflarının bileşimi olarak kullanılıyor. Sonuç olarak, `<p>` elementi üzerinde iki sınıf olacak; temel `alert` ve arka plan rengi değerini geçersiz kılan varyant sınıfı.

```
// src/components/Alert.jsx

import css from "./Alert.module.css";

const Alert = ({ variant, children }) => {
  return <p className={css[variant]}>{children}</p>;
};
```

`CSS sınıflarına genellikle css.alert şeklinde erişilir; ancak köşeli parantez kullanmak da mümkündür, örneğin css["alert"]. Bu, sınıf adlarının bir değişkende saklandığı durumlarda kullanışlıdır, bizim örneğimizde variant propunda olduğu gibi.`