# const ve let arasında seçim yapma

`const` ve `let` arasındaki temel fark, bir değişkenin değerinin tanımlandıktan sonra yeniden atanıp atanamayacağıdır.

`const` anahtar sözcüğü, bir değişkenin değerinin yeniden atanmasını engeller.

`let` anahtar sözcüğü ise, bir değişkenin değerinin tanımlandıktan sonra değiştirilmesine olanak tanır.

Çoğu değişkene yeniden değer atanması gerekmez. Bu nedenle, çoğu değişkeni tanımlarken varsayılan olarak `const` kullanılması önerilir. Bu, değişken değerleri yeniden atanamadığı için kodun anlaşılmasını ve bakımını kolaylaştırır.

`// Değeri değiştirmek istemiyorsanız
const username = "Mango"*;*
console.log(username)*;*`

Bir değeri güncellemeniz veya geçici olarak saklamanız gerekiyorsa — yani kod çalışırken bir değişkenin değerini değiştirmeniz gerekiyorsa — `let` en iyi seçimdir.

Bir değeri tanımlayıp onun sabit kalmasını istiyorsanız — `const` en iyi seçimdir.

`// Değeri değiştirmeniz gerekiyorsa
let username = "Mango"*;*
console.log(username)*;*username = "Poly"*;*
console.log(username)*;*`

```
const ve let kullanımı için kural şu şekilde olabilir:
 — Değişkenleri tanımlarken varsayılan olarak const kullanın.
 — Kodun çalışması sırasında bir değişkenin değerini değiştirmeniz gerekiyorsa let kullanın.
Bu kural, bakımı kolay, daha güvenilir ve anlaşılır kodlar yazmanıza yardımcı olur.
```