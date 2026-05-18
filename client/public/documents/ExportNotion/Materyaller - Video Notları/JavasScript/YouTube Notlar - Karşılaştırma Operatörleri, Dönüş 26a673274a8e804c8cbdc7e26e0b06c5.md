# YouTube Notlar - Karşılaştırma Operatörleri, Dönüşümler, Math, Fonksiyonlar, Scope

## **1) Karşılaştırma Operatörleri (>, <, >=, <=)**

- Sonuç **her zaman boolean** döner: true / false.

```
const x = 5;
const y = 8;

console.log(x < y);   // true
console.log(x > y);   // false
console.log(x <= 5);  // true  (eşitlik dahil)
console.log(y >= 8);  // true  (eşitlik dahil)
```

**Ek örnek:** “reşit mi?” kontrolü

```
const myAge = 18;
const isAdult = myAge >= 18; // true
```

---

## **2) Eşitlik Operatörleri: == vs ===, != vs !==**

- == (gevşek eşitlik): önce **tür dönüştürür**, sonra kıyaslar.
- === (katı eşitlik): **tür + değer** aynı olmalı.
- != ve !== eşitliğin tersidir.

```
console.log(5 == "5");   // true   (tür dönüşümü yaptı)
console.log(5 === "5");  // false  (number ≠ string)

console.log(0 == false);     // true  (gevşek)
console.log(0 === false);    // false (number ≠ boolean)

console.log(5 != "5");   // false
console.log(5 !== "5");  // true
```

**Ek örnek:** formdan gelen sayısal stringi karşılaştırma

```
const input = "42";
const limit = 42;

console.log(input == limit);  // true
console.log(input === limit); // false (önerilen)
```

> Uygulamada
> 
> 
> **her zaman === / !==**
> 

---

## **3) Truthy / Falsy (kısa hatırlatma)**

- **Falsy** değerler: 0, "" (boş string), null, undefined, NaN, false
- Diğer her şey **truthy**.

```
if ("hello") { /* girer (truthy) */ }
if ("") { /* girmez (falsy) */ }
```

**Ek örnek:** güvenli varsayılan

```
const nickname = "";
const displayName = nickname || "Guest"; // "Guest" (boş string falsy)
```

---

## **4) Tür Dönüşümü (Explicit & Implicit)**

### **Explicit (bilerek dönüştür)**

```
String(5);       // "5"
Number("10");    // 10
Number(true);    // 1
Number(false);   // 0
Number(null);    // 0
Number("hello"); // NaN
```

### **Implicit (arka planda otomatik)**

- Aritmetikte - * / mümkünse **number**’a çevirir:

```
console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 - true); // 4  (true→1)
console.log(5 - "x");  // NaN
```

- + operatöründe **string** varsa birleştirme yapar:

```
console.log("Age: " + 25); // "Age: 25"
```

**Ek örnek:** güvenli sayıya çevirme

```
const qty = "12pcs";
console.log(Number(qty));     // NaN
console.log(parseInt(qty,10)); // 12  ✅
```

---

## **5) parseInt ve parseFloat**

- parseInt baştaki tam sayıyı, parseFloat baştaki ondalıklı sayıyı çeker.

```
parseInt("5cm");     // 5
parseInt("5.5cm");   // 5
parseFloat("5.5cm"); // 5.5
parseInt("cm5");     // NaN  (sayıyla başlamalı)
```

**Ek örnek:** fiyat etiketi temizleme

```
const priceLabel = "€19.99";
const price = parseFloat(priceLabel.slice(1)); // 19.99
```

---

## **6) Math yardımcıları**

```
Math.floor(1.9); // 1  (aşağı)
Math.ceil(1.1);  // 2  (yukarı)
Math.round(1.5); // 2  (yakına)
Math.max(10, 50, 20); // 50
Math.min(10, 50, 20); // 10
```

**Ek örnek:** sayfalamada “toplam sayfa”

```
const total = 73;
const perPage = 10;
const totalPages = Math.ceil(total / perPage); // 8
```

---

## **7) Kayan Nokta (Floating-Point) Hassasiyeti**

```
0.1 + 0.2 === 0.3;           // false
0.1 + 0.2;                   // 0.30000000000000004
(0.1*10 + 0.2*10) / 10;      // 0.3 (ölçekleme)
Number((0.1 + 0.2).toFixed(1)); // 0.3 (yuvarlayıp sayı yap)
```

**Ek örnek:** parayı 1 kuruş hassasiyetle hesapla

```
const sum = (a, b) => Math.round((a + b) * 100) / 100;
console.log(sum(0.1, 0.2)); // 0.3
```

---

## **8) Fonksiyonlar — Tanım, Çağrı, Parametre/Argüman**

### **Temel**

```
function sayHi() {
  console.log("Hello!");
}
sayHi(); // çağrı
```

### **Parametre vs Argüman**

```
function add(a, b) {      // a, b: parametre
  return a + b;
}
add(2, 3);                 // 2, 3: argüman
```

### **return davranışı**

- return görüldüğü anda fonksiyon biter; sonrası çalışmaz.
- return yazmazsanız **undefined** döner.

```
function f() {
  console.log("önce");
  return 42;
  console.log("burası çalışmaz");
}
```

**Ek örnek:** mesaj üretici

```
function makeMessage(name, price) {
  return `You picked ${name}, price per item is ${price} credits`;
}
```

---

## **9) Çalışma Sırası (Execution Order)**

- JS **yukarıdan aşağı** çalışır.
- Fonksiyon çağrısı görüldüğünde, JS o fonksiyonun **içine girer**, işi bitince kaldığı yerden devam eder.

```
console.log("Hello 1");
function sum(a,b){ console.log(a+b); }
sum(1,2);           // burada fonksiyon içine girer → 3
console.log("Hello 2");
// Sıra: Hello 1 → 3 → Hello 2
```

---

## **10) Scope (Görünürlük Alanı)**

- let/const **block-scope**: { ... } içinde geçerlidir.
- **Fonksiyon içinden dışarı** (global) erişilebilir; **dışarıdan fonksiyon içindekine** erişilemez.

```
const outer = 1;

function demo() {
  const inner = 2;
  console.log(outer); // 1 (erişir)
}
demo();

console.log(typeof inner); // "undefined" (erişemez)
```

**Ek örnek:** gölgeleme (shadowing)

```
let x = 10;
function test() {
  let x = 5;         // dıştaki x’i gölgeler
  console.log(x);    // 5
}
test();
console.log(x);      // 10
```

---

## **11) Mini Özet**

- Karşılaştırmalar boolean döndürür.
- Eşitlikte **=== / !==** kullan; sürpriz dönüşümlerden kaçın.
- Tür dönüşümlerinde Number, parseInt, parseFloat farkını bil.
- Math yardımcılarıyla yuvarlama ve min/max işleri kolay.
- Kayan nokta hatalarında **ölçekleme** veya **toFixed** kullan.
- Fonksiyonlar: **parametre/argüman**, **return**, **scope** temelini kavra.