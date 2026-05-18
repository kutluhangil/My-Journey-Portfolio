# Dizeleri Karşılaştırarak Sıralama

Dizeleri alfabetik olarak, artan veya azalan şekilde sıralamak için `localeCompare()`yöntemi kullanılır.

`firstString.localeCompare(secondString)`

Bu, ona `secondString` olarak iletilen metinle (`firstString`) karşılaştırılması gereken bir satırda çağrılır.

```
"a".localeCompare("b");// -1"b".localeCompare("a");// 1"a".localeCompare("a");// 0"b".localeCompare("b");// 0
```

- Eğer `firstString`, `secondString`'den önce olmalıysa negatif bir değer döndürür
- Eğer `firstString`, `secondString`'den sonra olmalıysa pozitif bir değer döndürür
- Eğer dizeler aynı ise, sıfır döndürülür ve birbirlerine göre sıralamaları değişmez

`localeCompare()` metodu, dizedeki karakterleri sıralamak için uygun bir şekilde kullanılabilir çünkü `toSorted()` metodu aynı değerleri geri döndürmesini bekler.

```
const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
```

---

## **🎯 Normalde sort() veya toSorted()**

## **metodu nasıl çalışır?**

JavaScript’te dizilerdeki elemanları sıralamak için:

```
array.sort()
```

veya modern hâliyle:

```
array.toSorted()
```

kullanılır.

Ama bu metot **varsayılan olarak sayılar değil, karakter kodları (Unicode)** üzerinden sıralama yapar.

Bu da bazı dillerde, büyük/küçük harf farklarında ya da aksanlı harflerde yanlış sıralamalara yol açabilir.

---

## **💡 Çözüm:**

## **localeCompare()**

localeCompare() metodu, iki string’i **alfabetik olarak karşılaştırır**

ve hangi sırada gelmesi gerektiğini söyler.

Yani:

```
firstString.localeCompare(secondString)
```

şunu döndürür 👇

| **Durum** | **Dönen Değer** | **Açıklama** |
| --- | --- | --- |
| firstString alfabetik olarak **önce** geliyorsa | -1 | örn: "a".localeCompare("b") |
| firstString alfabetik olarak **sonra** geliyorsa | 1 | örn: "b".localeCompare("a") |
| İki string **aynıysa** | 0 | örn: "a".localeCompare("a") |

---

## **⚙️ Kullanım toSorted() ile**

toSorted() veya sort() metodu, bir sıralama fonksiyonuna ihtiyaç duyar:

```
array.toSorted((a, b) => a.localeCompare(b))
```

Burada:

- a.localeCompare(b) negatifse → a önce gelir.
- a.localeCompare(b) pozitifse → b önce gelir.
- 0 ise → sıralama değişmez.

---

## **📘 Örnek:**

```
const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
```

### **🔹 Artan (A → Z)**

```
const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder);
```

✅ Çıktı:

```
["Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon"]
```

---

### **🔹 Azalan (Z → A)**

```
const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder);
```

✅ Çıktı:

```
["Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian"]
```

---

## **🔍 Kısaca Özetleyelim:**

| **Amaç** | **Kod** | **Açıklama** |
| --- | --- | --- |
| Alfabetik sırala (A → Z) | (a, b) => a.localeCompare(b) | “a önce, b sonra” |
| Ters alfabetik sırala (Z → A) | (a, b) => b.localeCompare(a) | “b önce, a sonra” |

---

## **💬 Neden localeCompare kullanılır?**

Çünkü bu metot:

- Harf büyüklük-küçüklük farklarını düzgün ele alır,
- Türkçe, Fransızca, Almanca gibi **farklı alfabelerdeki** özel karakterleri doğru sıralar,
- Ve JavaScript’in dil ayarlarına uygun sıralama yapar.

---

Özetle:

👉 localeCompare() = stringleri **insan gözüyle doğru** sıralamanın yolu.

👉 toSorted() = orijinal diziyi bozmadan yeni sıralı dizi oluşturur.

Bu ikisini birlikte kullanmak hem **doğru**, hem **güvenli** sıralama sağlar. ✅

# **Görev**

Çevrimiçi kütüphanenin yazarlarına göre sıralanmış kitapları alfabetik ve ters alfabetik sırada gösterilmesi gerekmektedir. Kodu `authors` dizisine göre sıralayarak güncelle, böylece `authorsInAlphabetOrder` değişkeninde `authors` dizisinin alfabetik olarak sıralanmış bir kopyasını, `authorsInReversedOrder` değişkeninde ise ters alfabetik sıralı bir kopyası olacak şekilde çıktı al.

# **Testler**

- `authors` değişkeni tanımlandı
- `authors` değişkeninin değeri `["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]` dizisidir
- `authorsInAlphabetOrder` değişkeni tanımlandı
- `authorsInAlphabetOrder` değişkeninin değeri `["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]` dizisidir
- `authorsInReversedOrder` değişkeni tanımlandı
- `authorsInReversedOrder` değişkeninin değeri `["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]`dizisidir
- `toSorted()` metodu kullanıldı

➡️ authors dizisini **orijinalini bozmadan**,

➡️ **alfabetik (A → Z)** ve **ters alfabetik (Z → A)** sırada sıralanmış iki ayrı kopya oluşturmak.

Ve bunu yapmak için **toSorted()** metodunu ve **localeCompare()** fonksiyonunu kullanacağız.

---

## **✅ Doğru Çözüm:**

```
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Edgar Allan Poe",
  "Howard Lovecraft",
];

// A → Z sıralama
const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// Z → A sıralama
const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
```

---

## **🧠 Açıklama:**

### **toSorted() Nedir?**

- toSorted() metodu, tıpkı sort() gibi sıralama yapar,
- ama **orijinal diziyi değiştirmez**, yeni bir sıralı **kopya** oluşturur.
    
    Yani authors dizisi aynı kalır.
    

---

### **localeCompare() Nedir?**

- Dize (string) karşılaştırması yapar.
- Alfabetik sıraya göre çalışır.
- Farklı dillerdeki karakterleri (örneğin Türkçe’de “Ç”, “Ş”, “İ”) doğru şekilde sıralayabilir.

---

### **Artan (Alfabetik) Sıralama**

```
a.localeCompare(b)
```

→ Eğer a önce gelmeli ise negatif döner,

→ yani a, b’den önce yazılır.

Örnek: "A" < "B".

---

### **Azalan (Ters Alfabetik) Sıralama**

```
b.localeCompare(a)
```

→ Eğer b önce gelmeli ise negatif döner,

→ yani Z başa gelir.

---

## **🧾 Çalışan Kod:**

```
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Edgar Allan Poe",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
// ["Bernard Cornwell", "Edgar Allan Poe", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]

console.log(authorsInReversedOrder);
// ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Edgar Allan Poe", "Bernard Cornwell"]
```

---

## **💡 Özet:**

| **Değişken** | **Amaç** | **Kod** | **Sonuç** |
| --- | --- | --- | --- |
| authorsInAlphabetOrder | Alfabetik sıra (A → Z) | .toSorted((a, b) => a.localeCompare(b)) | [ "Bernard Cornwell", "Edgar Allan Poe", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee" ] |
| authorsInReversedOrder | Ters alfabetik sıra (Z → A) | .toSorted((a, b) => b.localeCompare(a)) | [ "Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Edgar Allan Poe", "Bernard Cornwell" ] |

---

✅ Böylece:

- toSorted() ile **orijinal dizi korunur**,
- localeCompare() ile **alfabetik sıralama garantili** yapılır.