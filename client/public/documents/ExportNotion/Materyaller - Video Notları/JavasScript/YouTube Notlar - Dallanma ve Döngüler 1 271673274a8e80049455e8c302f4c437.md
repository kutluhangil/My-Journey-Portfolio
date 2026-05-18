# YouTube Notlar - Dallanma ve Döngüler 1

---

# **1) If / Else-If / Else: Koşullu Akışın Temeli**

## **1.1 if yapısı (temel fikir)**

- if İngilizce “**eğer**”.
- Parantez içindeki **expression** (ifade) true olursa blok çalışır, false ise atlanır.

```
if (true) {
  console.log("Bu çalışır");
}

if (5 > 3) {
  console.log("5 büyüktür 3'ten"); // true → çalışır
}

if (5 < 3) {
  console.log("Bu yazmaz");        // false → çalışmaz
}
```

### **Hoca vurgusu**

- If’in içine her zaman **true/false’a indirgenebilen** (boolean’a “değerlenen”) bir ifade yazılır.

## **1.2 if … else**

- “Şöyleyse bunu yap, **değilse** şunu yap.”

```
function checkAge(age) {
  if (age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are under 18");
  }
}

checkAge(25); // adult
checkAge(15); // under 18
```

## **1.3 if … else if … else**

## **(kademeli karar)**

- Birden fazla koşul sırasıyla kontrol edilir; **ilk sağlanan** blok çalışır.

```
function ageBand(age) {
  if (age >= 25) {
    console.log("You are 25 or older");
  } else if (age >= 18) {
    console.log("You are 18 or older");
  } else {
    console.log("Under 18");
  }
}

ageBand(25); // ilk if
ageBand(24); // else if
ageBand(10); // else
```

### **Pratik örnek – Sınav notu sınıflaması**

```
function checkGrade(grade) {
  if (grade >= 80) {
    console.log("Pek iyi");
  } else if (grade >= 60) {
    console.log("İyi");
  } else {
    console.log("Dersten kaldınız");
  }
}
```

---

# **2) Ternary Operator**

# **condition ? exprIfTrue : exprIfFalse**

## **2.1 Nedir, ne zaman kullanılır?**

- **Üçlü** yapı: koşul ? doğruysa : yanlışsa
- **Kısa** ve **tek satırlık** kararlar için ideal.
- **Karmaşık** koşullarda **okunabilirlik** için if/else tercih edin.

```
const grade = 51;
const passed = grade > 50 ? true : false;
console.log("Is lecture passed:", passed); // true
```

### **İpucu**

- Ternary içinde yeni yan etkiler üretmekten (aşırı iç içe ternary gibi) kaçının.

---

# **3) switch … case … break … default**

## **3.1 Amaç**

- Çoklu else if zincirlerini **daha okunaklı** hale getirir.
- switch (değer) → sırayla case değerleriyle **strict** (===) karşılaştırma yapar.

```
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
    break;
  default:
    console.log("Fruit is unknown");
    // break gerekmiyor ama yazılabilir
}
```

### **Önemli notlar**

- break **kullanmazsan** “**fall-through**” olur; aşağıdaki case’ler de çalışır.
- Bazı durumlarda bu **bilinçli** olarak kullanılabilir (örn. hafta içi günlerini gruplayıp tek işlem).

```
const day = 3; // 1..7

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("This is a working day");
    break;
  case 6:
  case 7:
    console.log("It's a weekend day");
    break;
  default:
    console.log("Invalid day");
}
```

### **switch ve ===**

- switch **tip dönüşümü yapmaz** (arka planda ===).
- "5" (string) ile 5 (number) **eşit sayılmaz**; tipler uyuşmalı.

---

# **4) Truthy – Falsy ve**

# **Boolean()**

# **Dönüşümleri**

## **4.1 Falsy değerler (if içinde**

## **false**

## **gibi davranırlar)**

- false, 0, "" (boş string), null, undefined, NaN

```
if (0) { /* girmez */ }
if ("") { /* girmez */ }
if (null) { /* girmez */ }
```

## **4.2 Truthy örnekleri**

- Boş olmayan string ("false" bile!), **0 dışındaki** sayılar (-5, 3.14), boş olmayan objeler/array’ler ({}, [])

```
if ("false") { /* girer */ }  // dolu string → truthy
if (3) { /* girer */ }       // sayı varlığı → truthy
```

## **4.3 Boolean(x) hızlı kontrol**

```
Boolean(null);      // false
Boolean(undefined); // false
Boolean(0);         // false
Boolean("hello");   // true
Boolean(42);        // true
```

### **Form doğrulama örneği**

```
const email = ""; // kullanıcı yazmadı
if (!email) {
  console.log("Lütfen e-mail girin"); // "" → falsy → !"" → true
}
```

---

# **5) Mantıksal Operatörler: && (VE), || (VEYA),  (DEĞİL)**

## **5.1 && – VE (ikisi de doğru olmalı)**

- Soldan sağa değerlendirir; **ilk falsy** değerde durur ve onu döndürür.
- Hepsi truthy ise **son** değeri döndürür.

```
console.log("hello" && 5); // 5 (ikisi de truthy → sonuncu)
console.log(0 && "x");     // 0 (ilk falsy → 0)

const x = 20;
console.log(x > 10 && x < 30); // true && true → true
console.log(x > 10 && x < 10); // true && false → false
```

## **5.2 || – VEYA (en az biri doğru)**

- Soldan sağa; **ilk truthy** değeri döndürür, bulunamazsa son değeri döndürür.

```
console.log("hello" || 5); // "hello" (ilk truthy)
console.log("" || "fallback"); // "fallback" ("" falsy → devam)
```

## **5.3 ! – NOT (değil)**

- Boolean’ı tersine çevirir.

```
console.log(!true);  // false
console.log(!false); // true
console.log(!3);     // false (3 truthy → !truthy = false)
console.log(!0);     // true  (0 falsy → !falsy = true)
```

### **Kısa devre (short-circuit) davranışı – pratik örnekler**

```
// 1) Varsayılan değer atama (||)
const userInput = "";
const name = userInput || "Misafir"; // "" falsy → "Misafir"

// 2) Koşullu çalıştırma (&&)
const isAdmin = true;
isAdmin && console.log("Admin paneli açılıyor..."); // true ise log çalışır
```

---

# **6) Gerçek Dünya Senaryoları**

## **6.1 Kampanya gösterim kuralları**

```
const user = {
  isCustomer: true,
  yearsWithUs: 3,
  city: "Istanbul",
  hasPaidBefore: false
};

// VE mantığı: hepsi sağlanmalı
if (user.isCustomer && user.yearsWithUs >= 3 && !user.hasPaidBefore) {
  console.log("Özel kampanyayı göster");
}

// VEYA mantığı: birini sağlaması yeterli
const isEU = true;
const isUS = false;
if (isEU || isUS) {
  console.log("AB/ABD kampanyası görünür");
}
```

## **6.2 Güvenli karşılaştırma**

- == tip dönüştürür, sürpriz sonuçlar çıkarabilir.
- **Daima === / !== kullan.**

```
console.log(5 == "5");  // true  (tip dönüşümü var)
console.log(5 === "5"); // false (strict eşitlik)
```

---

# **7) Sık Hatalar & İpuçları**

1. **switch’te break unutmak:** Fall-through olur, alt case’ler de çalışır.
2. **Ternary ile romandan uzun koşullar:** Okunabilirlik düşer; karmaşık durumlarda if/else yaz.
3. **truthy/falsy sezgisine güvenmeme:** "", 0, null, undefined, NaN → **falsy**. "false" → **truthy**!
4. **== kullanımı:** Sürprizlerden kaçın; **===** yaz.
5. **Koşul içinde atama (=) yapma:** Karşılaştırma için ===, <, > vs. kullan.

---

# **8) Hızlı Özet (30 sn)**

- **if/else-if/else**: İlk true olan blok çalışır; hiçbiri değilse else.
- **Ternary**: koşul ? A : B – kısa ve basit kararlara uygun.
- **switch**: Çoklu eşitlik kontrolleri; **strict** (===) kıyas; break önemli.
- **Truthy/Falsy**: false, 0, "", null, undefined, NaN falsy; diğer çoğu truthy.
- **Mantıksal operatörler**: && (hepsi), || (en az biri), ! (tersi).
- **Pratik**: Varsayılan değer x || "default", koşullu çalıştırma cond && do().

---

# **9) Mini Alıştırmalar (hemen dene)**

1. **Yaş bandı (if–else-if)**
    
    ageInfo(age) yaz: 0–12 “child”, 13–17 “teen”, 18–64 “adult”, 65+ “senior”.
    
2. **Ternary ile mesaj**
    
    isLoggedIn ? "Welcome" : "Please login" ifadesini fonksiyon içinde döndür.
    
3. **Switch ile ay adları**
    
    1→Jan, 2→Feb … 12→Dec, aksi için “Invalid month”.
    
4. **Truthy/Falsy kontrol**
    
    isEmpty(value) yaz: value **boş string** veya **null/undefined** veya **NaN** ise true, aksi false.
    
5. **Kampanya koşulu**
    
    showPromo(u) yaz: Kullanıcı **müşteri** VE **en az 2 yıldır** bizde VE **daha önce ödeme yapmamışsa** true.
    
6. **Kısa devre**
    
    const title = userTitle || "Untitled"; ve isAdmin && openAdminPanel(); satırlarını açıklayan yorumlar yaz.
    

---