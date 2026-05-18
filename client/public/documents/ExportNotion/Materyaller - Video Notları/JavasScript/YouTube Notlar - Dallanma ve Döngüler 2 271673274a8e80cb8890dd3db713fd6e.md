# YouTube Notlar - Dallanma ve Döngüler 2

---

# **1) String’ler: Property vs Metot**

## **1.1 Kavramlar**

- **Property (özellik):** Bir nesnenin (object) niteliği. Örn: length.
- **Metot:** Nesnenin üzerinde çağrılan **fonksiyon**. Örn: toUpperCase().

> Hoca notu:
> 

### **Örnek**

```
const myLesson = "JavaScript string";
console.log(myLesson.length);       // Property → 18
console.log(myLesson.toUpperCase()); // Metot → "JAVASCRIPT STRING"
```

## **1.2 Strings are immutable (değiştirilemez)**

- Bir metot çağrısı orijinal stringi **değiştirmez**, **yeni** bir string döndürür.

```
let s = "javascript";
s.toUpperCase();
console.log(s); // "javascript" (değişmedi)
const upper = s.toUpperCase();
console.log(upper); // "JAVASCRIPT"
```

> Pratik ipucu:
> 
> 
> **karşılaştırma için**
> 

---

# **2) Sık Kullanılan String Özellik & Metotları**

Aşağıdaki tablo, derste geçenler + birkaç bonus içerir:

| **Adı** | **Tür** | **Ne yapar?** | **Dönen tip** | **Örnek** | **Not** |
| --- | --- | --- | --- | --- | --- |
| length | property | Karakter sayısını verir | Number | "abc".length // 3 | Boşluklar da sayılır |
| toUpperCase() | metot | Büyük harfe çevirir | String | "js".toUpperCase() // "JS" | Orijinal string değişmez |
| toLowerCase() | metot | Küçük harfe çevirir | String | "Js".toLowerCase() // "js" | Karşılaştırma için ideal |
| includes(sub) | metot | Alt-string içeriyor mu? | Boolean | "abc".includes("b") // true | Büyük/küçük harf duyarlı |
| startsWith(prefix) | metot | Şununla başlıyor mu? | Boolean | "Java".startsWith("Ja") // true | Duyarlı |
| endsWith(suffix) | metot | Şununla bitiyor mu? | Boolean | "note.txt".endsWith(".txt") // true | Duyarlı |
| indexOf(sub) | metot | İlk eşleşmenin indeksi | Number | "bananas".indexOf("na") // 2 | Bulamazsa -1 döner |
| trim() | metot | Baş/son boşlukları siler | String | "  hi  ".trim() // "hi" | Orta boşlukları silmez |
| slice(start, end?) | metot | Dilimler (end hariç) | String | "JavaScript".slice(2,6) // "vaSc" | end vermezsen sona kadar |

### **Hoca’nın örnekleri yeniden kuralım**

### **(1) toUpperCase / toLowerCase ve immutability**

```
const name = "kutluhan";
console.log(name.toUpperCase()); // "KUTLUHAN"
console.log(name);               // "kutluhan" (değişmedi)
```

### **(2) Case-insensitive kıyaslama (kullanıcı adı giriş senaryosu)**

```
const dbUsername = "goIt";
const input = "GOİT"; // Diyelim klavye farklı locale ile yazdı

const normalizedDb = dbUsername.toLowerCase();
const normalizedInput = input.toLowerCase();

console.log(normalizedDb === normalizedInput); // true
```

### **(3) includes, startsWith, endsWith**

```
const s = "JavaScript";
console.log(s.includes("a"));        // true
console.log(s.includes("z"));        // false
console.log(s.startsWith("J"));      // true
console.log(s.endsWith("t"));        // true
```

### **(4) indexOf**

```
const s = "JavaScript";
console.log(s.indexOf("v"));   // 2
console.log(s.indexOf("sc"));  // 4
console.log(s.indexOf("sr"));  // -1 (yoksa -1)
```

### **(5) trim**

```
const raw = "   Computer  ";
console.log(raw.trim()); // "Computer"
```

### **(6) slice**

```
const s = "JavaScript";
//  0 1 2 3 4 5 6 7 8 9
//  J a v a S c r i p t
console.log(s.slice(2, 6)); // "vaSc" (2 dahil, 6 hariç)
console.log(s.slice(4));    // "Script" (sona kadar)
```

---

# **3) Döngüler (Loops)**

## **3.1 while döngüsü**

**Yapı:** Koşul true olduğu sürece çalışır.

```
let count = 0;
while (count < 10) {
  console.log(count);
  count += 1; // kritik: artırmayı unutursan sonsuz döngüye girer!
}
```

### **Sonsuz döngü uyarısı**

Koşulu asla false yapmayacak bir kod yazarsan **infinite loop** olur. Bu hem tarayıcıyı hem Node oturumunu kilitleyebilir.

> Hoca uyarısı:
> 
> 
> **asla**
> 

## **3.2 do...while döngüsü**

**Yapı:** Gövde **en az bir kez** çalışır, sonra koşula bakılır.

```
let c = 5;
do {
  console.log(c);
  c++;
} while (c < 3);
// Çıktı: sadece bir kez 5 (koşul en sonda değerlendirilir)
```

## **3.3 for döngüsü**

**Yapı:** Başlatma; koşul; her tur sonrası işlem

```
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
```

- **1. kısım (başlatma):** let i = 0
- **2. kısım (koşul):** i <= 20 (false olunca döngü biter)
- **3. kısım (adım):** i++ (her turdan sonra çalışır)

### **i++ vs ++i**

### **(postfix vs prefix)**

```
let x = 5;
console.log(x++); // 5 (önce değeri döndürür, sonra 6 yapar)
console.log(++x); // 7 (önce 7 yapar, sonra 7'yi döndürür)
```

> Döngü başlığında (for (...))
> 

## **3.4 break ve return farkı**

- **break**: İçinde bulunduğu **döngüyü** durdurur, **fonksiyonu durdurmaz**.
- **return**: İçinde bulunduğu **fonksiyonu** sonlandırır. (Döngü içindeyse bile fonksiyon biter.)

```
// break örneği
for (let i = 0; i < 100; i++) {
  if (i === 13) break;   // sadece döngüden çıkar
  console.log(i);
}
console.log("burayı görürüz"); // çalışır

// return örneği
function demo() {
  console.log("A");
  for (let i = 0; i < 100; i++) {
    if (i === 13) return; // fonksiyonu sonlandırır
  }
  console.log("B"); // burası asla çalışmaz
}
demo();
```

> Hoca vurgusu:
> 
> 
> **return**
> 
> **break**
> 

---

# **4) Kullanım Senaryoları (Gerçek dünya)**

## **4.1 Giriş (login) doğrulama – kullanıcı adı**

- Kaydı **case-insensitive** tutmak için DB’ye toLowerCase() ile yaz.
- Girişte de toLowerCase() ile normalize et, öyle karşılaştır.

```
const dbUsername = "Kutluhan";
const inputUsername = "kutLUHAN ";

const normalizedDb = dbUsername.toLowerCase().trim();
const normalizedInput = inputUsername.toLowerCase().trim();

if (normalizedDb === normalizedInput) {
  console.log("Giriş başarılı");
} else {
  console.log("Kullanıcı adı hatalı");
}
```

## **4.2 Uzantı kontrolü**

```
function isTextFile(name) {
  return name.toLowerCase().endsWith(".txt");
}
```

## **4.3 Anahtar kelime filtreleme**

```
const text = "JavaScript ile string metotlarını öğreniyorum.";
if (text.toLowerCase().includes("string")) {
  console.log("String ifadesi geçti!");
}
```

## **4.4 Dilimleme ile özet**

```
function summary(s, max = 20) {
  return s.length > max ? s.slice(0, max) + "..." : s;
}
console.log(summary("Uzun bir açıklama metni...", 10)); // "Uzun bir a..."
```

---

# **5) Hata/tuzağa düşme noktaları**

1. **İmmutability:** toUpperCase() orijinal stringi değiştirmez. Sonucu yeni değişkende tut.
2. **includes ve harf duyarlılığı:** "A".includes("a") === false. Normalizasyon (lower/upper) yap.
3. **indexOf -1 kontrolü:** Bulunamadığında -1 döner, if (str.indexOf("x") !== -1) şeklinde kontrol et.
4. **trim sadece baş/son boşluğu siler:** Ortadakileri silmez. Gerekirse regex veya replaceAll ile işle.
5. **Döngüde artırmayı unutmak:** while/for içinde sayacı güncelle; yoksa **sonsuz döngü**.
6. **break vs return:** Döngü mü bitecek, fonksiyon mu? Doğru kelimeyi kullan.

---

# **6) Hızlı Özet (1 dakikalık tekrar)**

- **Property vs Metot:** length (özellik), toUpperCase() (metot).
- **String immutability:** Metotlar orijinali **değiştirmez**, yeni string döner.
- **Önemli metotlar:** toUpperCase, toLowerCase, includes, startsWith, endsWith, indexOf, trim, slice.
- **Döngüler:** while (koşul doğruyken), do...while (en az bir kez), for (başlatma; koşul; adım).
- **Sonsuz döngüden kaçın:** sayaç güncelle.
- **break** döngüyü, **return** fonksiyonu durdurur.

---

# **7) Mini Alıştırmalar (hemen deneyebilirsin)**

1. **Case-insensitive arama**
    
    searchInsensitive(text, query) yaz: text içinde query geçiyorsa true döndürsün; büyük-küçük harf önemsemesin.
    
2. **Trim + normalize**
    
    Bir sanitize(input) fonksiyonu yaz: trim + toLowerCase uygulasın.
    
3. **Kısa özet**
    
    teaser(s, n) yaz: s uzunluğu n’i geçerse slice(0, n) + "..." döndürsün; yoksa s.
    
4. **Sayı sayma (for)**
    
    0’dan 100’e kadar say; 13’te break yap; sadece 0..12 yazdır.
    
5. **Do-while en az bir kez**
    
    Kullanıcıdan (simülasyon) şifre alındığını varsay; do-while ile en az bir kere “şifreyi kontrol et” mesajı yazdır.
    

---