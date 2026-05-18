# İsim Alanı İçe Aktarma

**İsim alanı içe aktarma (namespace import)**, bir modülün tüm içeriğini o modülün isim alanını temsil eden bir nesne altında içe aktarma tekniğidir. Bu, modülden adlandırılmış tüm dışa aktarımların bu nesnenin özellikleri hâline geldiği anlamına gelir. Özellikle bir modülden birçok farklı işlev, değişken veya sınıfı tek tek seçmeden içe aktarmak gerektiğinde kullanışlıdır.

Örneğin:

```
// Module user.js
export const name = "Mango";
export const age = 26;
export const email = "mango@mail.com";

// Your current module
import * as user from './myModule.js';

console.log(user.name); // "Mango"
console.log(user.age); // 26
console.log(user.email ); // "mango@mail.com"
```

Bu örnekte, `user.js` modülündeki tüm isimlendirilmiş dışa aktarımlar `user` nesnesi altında toplanmıştır. Tüm bu dışa aktarımlar, `user` nesnesinin özellikleri olarak erişilebilir durumdadır. Sonuç olarak, `user.name`, `user.age` gibi noktalı sözdizimi ile bu değerlere ulaşabiliriz.

```
İsim alanı içe aktarma, içe aktarılan isimlerin mevcut modüldeki değişkenlerle çakışmasını önlemeye yardımcı olur. Özellikle çok sayıda isimlendirilmiş dışa aktarım içeren kütüphane veya modüllerle çalışırken oldukça faydalıdır.
```