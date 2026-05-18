# Youtube Notlar - Değişkenler ve türleri

## **1) JavaScript’e genel bakış**

- **Amaç & ortaya çıkışı:** 90’ların ortasında web sayfalarını **interaktif** yapmak için geliştirildi.
- **Java ≠ JavaScript:** İsim benzerliği dışında **tamamen farklı** dillerdir.
- **Modern kullanım alanları:**
    - **Frontend:** tarayıcı (React vb.)
    - **Backend:** Node.js ile sunucu tarafı
    - **Mobil:** React Native (iOS/Android)
    - **Masaüstü:** Electron (Windows/macOS/Linux)
- **Sonuç:** Tek dille **full-stack** geliştirme mümkün.

---

## **2) Geliştirme ortamı**

- **Editör:** VS Code (veya dilediğin editör).
- **Live Server eklentisi:** HTML dosyanı anında tarayıcıda görmek için.
- **Geliştirici araçları:** Tarayıcıda **F12 → Console** ile JS çıktılarını/hataları incele.

---

## **3) HTML’e JS bağlamak**

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>JS Intro</title>
  <script src="index.js" defer></script>
</head>
<body>
  Hello world
</body>
</html>
```

- **<script src="...">** ile JS dosyasını ekle.
- **defer**: HTML parse biter bitmez script’i çalıştırır (güvenli yükleme sırası).

---

## **4) Konsola yazmak (debug temel taşı)**

```
console.log("Merhaba");   // test/diagnostic çıktı
console.log(123);
console.log(true);
```

- **Nerede görürüm?** Tarayıcı geliştirici araçları → **Console** sekmesi.

---

## **5) Strict mode**

```
"use strict";
```

- **Amaç:** Hataları erken yakalar, daha güvenli JS.
- Bazı “gevşek” davranışları kısıtlar (ör. anahtar sözcüksüz değişken tanımı).

---

## **6) Değişkenler:**

## **const**

## **,**

## **let**

## **, (**

## **var**

## **)**

- **const**: Sabit referans, **yeniden atama yapılamaz**.
- **let**: Sonradan **değer değiştirilebilir**.
- **var**: Eski; **function-scope, hoisting, redeclare** gibi sorunlar — modern JS’de **kullanma**.

```
const lesson = "JavaScript";
let username = "John";
let age = 25;

// Geçersiz: const değerini değiştiremezsin
// lesson = "HTML"; // TypeError

// Geçerli: let yeniden atanabilir
username = "Jane";
```

### **İsimlendirme kuralları**

- Harf, _ veya $ ile başlar; **sayı ile başlayamaz**.
- **camelCase** önerilir: userName, totalPrice
- Rezerve kelimeler **kullanılamaz**: let, class, break vb.

---

## **7) Scope & hoisting (kısa özet)**

- let/const **block-scope** ({} içinde yaşar), “temporal dead zone” nedeniyle tanımlanmadan önce erişilemez.
- var **function-scope** ve hoisting’e uğrar → sürpriz davranışlar.
- **Kural:** Modern JS’de const (varsayılan), gerektiğinde let.

---

## **8) Veri türleri (primitive)**

1. **string** — "Mango"
2. **number** — 42, 3.14
3. **boolean** — true / false
4. **undefined** — değer atanmamış değişken
5. **null** — bilerek “boş” değer
6. **bigint** — çok büyük tam sayılar
7. **symbol** — benzersiz, özel kimlikler

```
typeof "Hi"       // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object"  ← tarihsel bug, ezber bilgi
```

---

## **9) Aritmetik operatörler**

```
3 + 2   // 5
3 - 2   // 1
3 * 2   // 6
4 / 2   // 2
12 % 5  // 2   (mod: bölümden kalan)
2 ** 3  // 8   (üs alma)
```

---

## **10) String birleştirme & template literals**

**Birleştirme (+)**

```
"Hello " + "World"      // "Hello World"
"Age: " + 25            // "Age: 25" (sayı stringe dönüşür)
```

**Template literal (backtick `) — önerilir**

```
const name = "John";
const msg  = `Welcome ${name}!`;
```

- **Daha okunaklı** ve değişken/ifade gömmeyi kolaylaştırır: ${...}

---

## **11) Tip dönüşümleri (kısaca)**

- + ile bir operand **string** ise, diğer operand **string’e** çevrilir → **concatenation**.
- Sıra önemlidir:
    - 1 + "2" + 4 → "124"
    - 1 + 2 + "4" → 3 + "4" → "34"

**Explicit dönüşüm (bilerek):**

```
String(5)      // "5"
String(true)   // "true"
```

**Implicit dönüşüm (arka planda):** "Hi " + 5 → "Hi 5"

---

## **12) String uzunluğu ve indeksleme**

```
const s = "Welcome John";
s.length        // 12
s[0]            // 'W'  (indeksler 0’dan başlar)
s[s.length-1]   // 'n'  (son karakter)
```

- **String’ler immutable** (değişmez): s[0] = 'K' işlemez; yeni string üretmen gerekir.

---

## **13) Yüzen nokta (küsurat) hassasiyeti — mini not**

```
0.1 + 0.2 === 0.3  // false
0.1 + 0.2          // 0.30000000000000004
```

**Çözümler:**

- Ölçekleme → (0.1*10 + 0.2*10)/10 → 0.3
- Yuvarlama → (0.1 + 0.2).toFixed(1) → "0.3" (string döner)

---

## **14) Küçük pratikler (mini egzersiz)**

1. **Template literal**:

```
const guestName = "Mango";
const room = 207;
const greeting = `Welcome ${guestName}, your room number is ${room}!`;
```

1. **Toplam hesapla fonksiyonu**:

```
function calculateTotalPrice(qty, price) {
  return qty * price;
}
```

1. **Son karakteri bul**:

```
const word = "JavaScript";
const last = word[word.length - 1]; // 't'
```

---

## **15) Best practices**

- Varsayılan olarak **const** kullan; değeri değişecekse **let**.
- **Anlaşılır isimlendirme**: totalPrice, isLoggedIn.
- **Template literal** ile string üret.
- Hataları görmek için sık sık **console.log** ve **DevTools** kullan.
- var kullanmaktan kaçın.

---

## **16) Örnek akış (baştan sona)**

1. index.html oluştur, Live Server ile aç.
2. index.js dosyası ekle ve <script src="index.js" defer> ile bağla.
3. "use strict"; ve ilk console.log testini yap.
4. const/let ile değişkenleri tanımla; veri türleri ve typeof ile kontrol et.
5. Aritmetik ve string işlemleri dene; template literal’e geç.
6. length ve indekslerle string pratikleri yap.
7. Küçük bir fonksiyon yaz ve **return** ile değer döndür.

---

## **17) Sık düşülen tuzaklar**

- typeof null === "object" (tarihsel davranış)
- Stringler **değişmez**; s[0] = 'X' işlemez.
- var’ın hoisting & scope tuzakları.
- 0.1 + 0.2 gibi **floating-point** hassasiyeti.

---