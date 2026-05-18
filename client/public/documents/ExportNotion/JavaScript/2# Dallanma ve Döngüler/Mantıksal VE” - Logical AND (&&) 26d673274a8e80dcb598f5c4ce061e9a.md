# Mantıksal "VE” - Logical AND (&&)

**Boolean operatörleri**, örneğin bir `if` ifadesinde birden fazla koşulu aynı anda kontrol etmek için kullanılır.

**"VE" (`&&`) operatörü**, tüm işlenenleri (operand) Boolean türüne (`true` veya `false`) dönüştürür ve bunlardan **birinin** değil, **değerlendirme sırasında karşılaşılan ilk "false" değeri** ya da tümü `true` ise **son değeri** döndürür. Bu operatör, bir ifadedeki **tüm koşulların karşılanıp karşılanmadığını** kontrol etmenizi sağlar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/22032234-14ee-4efc-befc-920a8a4de4b1Frame%20771431.jpg)

Operatör soldan sağa doğru hesaplanır.

`expression1 && expression2`

**`&&` (VE) operatörü**, her iki işlenenin (operand) doğruluğunu **soldan sağa** doğru kontrol eder.

Karşılaştığı ilk `false` değeri bulduğunda işlemi durdurur ve bu değeri döndürür. Eğer tüm işlenenler `true` olarak değerlendirilirse, en **sondaki işlenenin değeri** döndürülür.

Bu davranışa genellikle **"kısa devre değerlendirmesi"** (short-circuit evaluation) denir.

Bunu basit bir örnekle düşünelim:

Bir kişi kahvesini **şekerli ve sütlü** içiyorsa, bu iki bileşenden **her ikisi de** olmadıkça memnun kalmaz. Yani her iki koşul da sağlanmadıkça kahve içilmez — tüm bileşenler zorunludur.

Aşağıdaki örneklerde, her iki işlenen de `true` olarak değerlendirilir.

Değerlendirme soldan sağa yapıldığı için, sonuç **sağdaki işlenenin değeri** olur.

`console.log("hello" && 5); *// 5*console.log(5 && "hello"); *// "hello"*console.log("mango" && "poly"); *// "poly"*console.log("poly" && "mango"); *// "mango"*console.log(3 && true); *// true*console.log(true && 3); *// 3*`

Ancak bu örnekte, işlenenlerden biri `false` değerine dönüştürülecek, dolayısıyla sonuç false işleneni olacaktır.

`console.log("hello" && 0); *// 0*console.log(0 && "hello"); *// 0*console.log(3 && false); *// false*console.log(false && 3); *// false*console.log(0 && ""); *// 0*console.log("" && 0); *// ""*`

- `"hello" && 0` örneğinde, sol işlenen `true` değerine ve sağ işlenen `false` değerine ayarlanmıştır, bu nedenle ifadenin sonucu, önce false değerine ayarlanmış olan sağ işlenenin değeridir, yani `0`'dır.
- `0 && "hello"` örneğinde, sol işlenen `false` olarak ayarlanmıştır, bu nedenle sağ işlenen değerlendirilmeyecektir. İfadenin sonucu, ilk olarak `false` olarak ayarlanan sol işlenenin değeri, yani `0` olacaktır.
- 

Pratikte, mantıksal işlemler birden fazla koşulu kontrol etmek için kullanılır.

İşlenenlerin ifade olması durumunda, önce bunların değerlendirileceğini ve ardından sonuçlarının `&&` işleci ile karşılaştırılacağını belirtmek gerekir.

`const a = 20;
console.log(a > 10 && a < 30); // true && true -> true

const b = 50;
console.log(b > 10 && b < 30); // true && false -> false
console.log(b > 80 && b < 120); // false && true -> false`

Yukarıdaki örnekte, `a` değişkeni aynı anda iki koşulu sağlamalıdır: 1) 10'dan büyük olmalı, ancak 2) 30'dan küçük olmalıdır. İki koşulun aynı anda yerine getirilip getirilmediğini `&&` operatörünü kullanarak kontrol ederiz. İlk olarak, işlenenlerdeki ifadeleri değerlendiririz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f70c85eb-de59-4f76-a53e-ea6a5a96ab1cFrame%2048588.png)

`&&` işleci yalnızca bağımsız bir koşul değil, aynı zamanda daha karmaşık koşulların bir parçası da olabilir; örneğin, bir `if` ifadesinin koşulunda olduğu gibi

`const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if(screenWidth <= sm) {
	console.log("Mobile screen");
} else if(screenWidth > sm && screenWidth <= md) {
	console.log("Tablet screen");
} else if(screenWidth > md && screenWidth <= lg) {
	console.log("Desktop screen");
} else {
	console.log("Godzilla screen");
}`

Yukarıdaki örnekte bir kontrol zinciri vardır, bunlara bakalım.

İlk olarak, `if` koşulu kontrol edilir, yani `700 < 320` ve `false` değeri döndürülür, böylece `if` bloğunun gövdesi yok sayılır ve kod yürütme işlemi `else...if` bloğuna ilerler.

`screenWidth > md && screenWidth ≤ md` koşuluna sahiptir.

İlk olarak, sol işlenen hesaplanacak, `700 > 320` koşulu `true` değerini döndürecek, ardından sağ işlenen — `700 <= 768`, bu da `true` değerini döndürecektir. Her iki işlenen de doğru olduğundan, `true && true` en uçtaki doğru işlenenin değerini, yani `true` değerini döndürür. `else...if` ifadesinin koşulunun `true` olması nedeniyle, gövdesi yürütülecek ve konsolda "`Tablet screen`" satırı görüntülenecektir.

---

## **📌 Mantıksal VE (&&) Nedir?**

- **&&** operatörü, birden fazla koşulu aynı anda kontrol etmeye yarar.
- Mantığı şu:
    
    👉 **Hepsi doğru olursa** sonuç **doğru** olur.
    
    👉 **Bir tanesi bile yanlışsa** sonuç **yanlış** olur.
    

Bunu şöyle düşünebilirsin:

👩‍🍳 “Kahve içebilmem için hem süt hem şeker lazım.

- Sadece süt varsa → olmaz ❌
- Sadece şeker varsa → olmaz ❌
- Hem süt hem şeker varsa → olur ✅”

---

## **📌 && Nasıl Çalışır?**

JavaScript’te **&& operatörü kısa devre (short-circuit) mantığıyla çalışır**:

1. Soldan sağa doğru bakar.
2. İlk gördüğü **false değeri** bulursa durur, onu döndürür.
3. Eğer hiç false bulmazsa en sondaki değeri döndürür.

---

### **✅ Örnekler: Hepsi doğruysa en sondaki döner**

```
console.log("hello" && 5);       // 5
console.log(5 && "hello");       // "hello"
console.log("mango" && "poly");  // "poly"
console.log(true && 3);          // 3
```

👉 Burada **hiçbir operand (işlenen) false değil**, o yüzden en sondaki değer döner.

---

### **❌ Örnekler: İlk false döner**

```
console.log("hello" && 0);   // 0
console.log(0 && "hello");   // 0
console.log(3 && false);     // false
console.log(false && 3);     // false
console.log(0 && "");        // 0
console.log("" && 0);        // ""
```

- "hello" && 0 → "hello" true sayılır, sonra 0 false → sonuç 0.
- 0 && "hello" → İlk değer zaten false → hemen 0 döner, sağa bakmaz bile.

---

## **📌 Gerçek Kullanım: Koşullar**

```
const a = 20;
console.log(a > 10 && a < 30); // true && true → true

const b = 50;
console.log(b > 10 && b < 30); // true && false → false
```

- a = 20 → hem 10’dan büyük ✅ hem 30’dan küçük ✅ → sonuç true.
- b = 50 → 10’dan büyük ✅ ama 30’dan küçük değil ❌ → sonuç false.

---

## **📌 Daha Karmaşık Örnek: Ekran Boyutu**

```
const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if (screenWidth <= sm) {
  console.log("Mobile screen");
} else if (screenWidth > sm && screenWidth <= md) {
  console.log("Tablet screen");
} else if (screenWidth > md && screenWidth <= lg) {
  console.log("Desktop screen");
} else {
  console.log("Godzilla screen");
}
```

- screenWidth = 700
- İlk if: 700 <= 320 ❌ (false) → çalışmaz.
- İkinci if: 700 > 320 && 700 <= 768 → **true && true** ✅ → çalışır.
- Çıktı: "Tablet screen"

---

## **🎯 Kısaca**

- **&& (VE) = Hepsi doğru olmalı.**
- İlk false bulunursa sonuç o olur.
- Hepsi doğruysa en sondaki değer döner.
- Gerçek hayatta, birden fazla şartın aynı anda sağlanıp sağlanmadığını kontrol etmek için kullanılır.

---