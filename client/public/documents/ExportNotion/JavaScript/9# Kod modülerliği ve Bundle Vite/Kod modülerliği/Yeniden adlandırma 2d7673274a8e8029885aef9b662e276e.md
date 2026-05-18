# Yeniden adlandırma

**Yeniden adlandırma (rename export)**; bir modülden başka bir modüle değişkenleri, fonksiyonları vb. aktarırken, aktarım sırasında adlarını değiştirme tekniğidir.

Başka bir modülden içe aktarım yapılırken yeni bir ad belirlemek için `as` anahtar kelimesi kullanılır:

`import { name as newName } from '...'`

Örneğin:

```
// Module myModule.js
export const original = "Hello, World!";

// Your current module, for example app.js
import { original as renamed } from './myModule.js';

console.log(renamed); // "Hello, World!"
```

Bu örnekte, mevcut modülümüzde `original` isimli değeri `renamed` adıyla içe aktarıyoruz. Artık kodumuzda `renamed` değişkenini kullanabiliriz ve bu, `original`'dan ihraç edilen değeri temsil eder.

```
Yeniden adlandırma ne zaman kullanılmalı?
 Kütüphanelerde veya diğer modüllerde isimler çok uzun, genel ya da mevcut modülünüzdeki değişken adlarıyla çakışan isimler olabilir. Bu gibi durumlarda, daha okunabilir ve çakışmasız bir yapı sağlamak için yeniden adlandırma kullanmak iyi bir tercihtir.
```