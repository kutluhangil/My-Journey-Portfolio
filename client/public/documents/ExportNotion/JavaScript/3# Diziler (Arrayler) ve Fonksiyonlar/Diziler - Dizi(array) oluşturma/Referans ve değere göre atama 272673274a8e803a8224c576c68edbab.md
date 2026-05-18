# Referans ve değere göre atama

Karmaşık tipler ile ilkel (primitive) tipler arasındaki temel fark, bunların nasıl saklandığı ve kopyalandığıdır.

İlkeller: `dizeler`, `sayılar`, `booleanlar`, `null` ve `undefined` atandığında tamamen değere göre **(by value)** kopyalanır.

Karmaşık tipler için durum böyle değildir. Örneğin bir dizinin atandığı bir değişkende, dizi elemanlarının kendi değerleri değil, dizinin bellekte bulunduğu yerin adresi atanır. Başka bir deyişle — referans (işaretçi). Yani, referans ile **(by reference)** aktarılırlar.

Bir değişkeni bir kağıt parçası olarak düşünelim. Değeri bu kağıt parçası üzerinde bir girdi olarak temsil edilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/07556a02-2195-4134-880f-6924be905062Frame%2048593%20%281%29.jpg)

Bu kaydın içeriğini kullanıcılarla paylaşmak istiyorsak, bunu fiziksel kopyalar oluşturup herkese dağıtarak — yani **birden fazla** bağımsız kopya oluşturarak **(değere göre atama)** yapabiliriz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f745a146-20b9-46b1-877b-f198bf75d7f7Frame%2048594.jpg)

Ya da sayfayı kilitli bir odaya koyar ve kullanıcılara bu odaya erişim anahtarı veririz — bu durumda herkes aynı orijinal veriye erişmiş olur (referansla atama).

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1374b314-f711-4ceb-a247-b900939cc314Frame%2048595.jpg)

Şimdi kağıt üzerindeki veriyi — yani değişkenin değerini değiştirelim. Odayı ziyaret edenler yaptığımız değişiklikleri her zaman göreceklerdir, çünkü orijinal değiştirilmektedir ve ona erişimleri vardır. Öte yandan, kağıt kopyaların sahipleri kendi kopyalarına baktıklarında değişiklikleri fark etmeyeceklerdir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/31476ad0-e5c2-4b4b-81f5-662aa766c33dFrame%2048596.jpg)

Bir değişkene değer atarken, yeni bir bellek konumu tahsis edilir ve veriler buraya kopyalanır. Bir kağıt sayfasının birden fazla kopyası ile yapılan benzetme, her kopya için ayrı bir sayfa olmak üzere çok gerçek bir düzenlemeye sahiptir.

Referansla atama yapılırken, yeni bir değer oluşturmak yerine, değişkene mevcut bir diziye, yani bellekteki yerine bir referans (işaretçi) atanır. Böylece, kullanıcıların orijinal çalışma sayfasına erişim anahtarına sahip olduğu kilitli bir odaya benzer şekilde, birkaç değişken aynı diziye işaret edebilir.

Tüm ilkel tipler değere göre atanır, yani bir kopya oluşturulur.

`let a = 5;

let b = a;
console.log(a); *// 5*console.log(b); *// 5// Değere göre atama, bellekte daha fazlası oluşturulacaktır// içine 5 değerinin kopyalanacağı bir hücre// Değerini değiştirelim*
a = 10;
console.log(a); *// 10*console.log(b); *// 5 Ayrı bir kopya olduğu için b'nin değeri değişmemiştir*`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/17afa1f7-dc80-4be2-af94-bc3670818cdcFrame%2048597.jpg)

Diziler (karmaşık bir tür) referansla atanır, yani değişken basitçe mevcut bir diziye referans (bellekteki bir işaretçi) alır.

`const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]`

`a` bir dizi olduğu için, bellekte zaten bulunan bir dizinin referansı `b`'ye yazılır. Şimdi `a` ve `b` aynı diziye işaret etmektedir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a748e777-072f-400d-a4e5-09c895bc5ae4Frame%2048598.jpg)

`a`'daki referansı kullanarak `1` indeksli elemanı değiştirerek diziyi değiştirin.

`const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]`

`b`'de depolanan şey de değişmiştir, çünkü `b`, `a` gibi, bellekte aynı yere — bir diziye bir referans içerir.

Diziyi değiştirmek için `b` değişkeninde bir referans kullanırsanız sonuç tekrarlanır.

`const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]

b[0] = "Ajax";
console.log(a); // ["Ajax", "Jacob"]
console.log(b); // ["Ajax", "Jacob"]`

İki dizi, boş olsalar veya aynı öğelere sahip olsalar bile asla birbirine eşit değildir.

`const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); *// false*console.log([] === []); *// false*`

Örneklerde, diziler aynı değerleri içerir, ancak `===` işleci, dizilerdeki öğelerin değil dizi referanslarının eşitliğini kontrol ettiği için `false` değerini döndürür. Bu durum, `arr1` ve `arr2` değişkenlerinin farklı kağıtlara sahip ancak içerikleri aynı olan farklı odalara atıfta bulunmasına benzetilebilir.

---

### **📌 İlkel (Primitive) Değerler: “by value”**

- Sayılar, stringler, boolean, null, undefined → **değere göre kopyalanır.**
- Yani biri değişirse, diğeri **etkilenmez.**

```
let a = 5;
let b = a;   // b = 5 (kopya)
a = 10;

console.log(a); // 10
console.log(b); // 5 (değişmez)
```

👉 Burada a değişse de b etkilenmez çünkü sadece **kopya** aldık.

---

### **📌 Karmaşık Tipler (Arrays, Objects): “by reference”**

- Diziler ve nesneler → **referansla kopyalanır.**
- Yani iki değişken aynı adrese (odaya) bakar.
- Birinde değişiklik yaparsan → diğerinde de görünür.

```
const a = ["Mango", "Poly"];
const b = a;  // b, aynı diziye bakıyor

a[1] = "Jacob";

console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]
```

👉 Hem a hem b aynı diziye bağlı → değişiklik **ikisini birden etkiler.**

---

### **📌 Çok önemli!**

İki farklı dizi **asla eşit olmaz**, içleri aynı olsa bile.

```
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false
```

👉 Çünkü arr1 ve arr2 **farklı odalara bakıyor.** İçerikleri aynı olsa da adresleri farklı.

---

✅ Özet:

- **Primitive (sayı, string, boolean…) → kopya alınır.**
- **Objects & Arrays → adres paylaşılır (referans).**