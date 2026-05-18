# Global bağlamı

`this` değerinin tanımında önemli bir nüans vardır: `this` değeri, fonksiyonun **tanımlandığı anda** değil (**arrow fonksiyonlar hariç**), **çağrıldığı anda** belirlenir. Başka bir deyişle, `this` değeri fonksiyonun **nerede tanımlandığıyla** değil, **nasıl çağrıldığıyla** ilişkilidir.

```
function foo() {
  console.log(this);
}

foo(); // window
```

Genel (global) bağlamda, fonksiyon **strict modda çağrılmazsa**, `this` değeri `window`nesnesine başvurur. `window` nesnesi, tarayıcı özelliklerine ve işlevlerine erişim sağlar ve tarayıcıdaki komut dosyaları için genel yürütme bağlamıdır.

**Strict mod** kullanıldığında, global bağlamda `this` değeri her zaman `undefined`olacaktır:

```
"use strict";

function foo() {
  console.log(this);
}

foo(); // undefined
```