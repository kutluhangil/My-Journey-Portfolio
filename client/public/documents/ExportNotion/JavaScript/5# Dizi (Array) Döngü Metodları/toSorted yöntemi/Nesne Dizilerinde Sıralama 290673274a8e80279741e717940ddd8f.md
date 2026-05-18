# Nesne Dizilerinde Sıralama

Nesne dizisi ile çalışırken, sıralama belirli bir özelliğin sayısal veya metinsel değerine göre gerçekleştirilir. Örneğin, bir test puanına sahip bir grup öğrencimiz var. Nesne dizisini üç farklı senaryoya göre sıralamamız gerekmektedir:

- Artan puan sayısına göre
- Azalan puan sayısına göre
- Öğrencinin adına göre alfabetik sıraya göre

```
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
```

# **Görev**

Kodu şu şekilde tamamla:

- `sortedByAuthorName` değişkeninde, yazar adına göre alfabetik sırayla sıralanmış kitap dizisi olmalıdır.
- `sortedByReversedAuthorName` değişkeninde, yazar adına göre tersten alfabetik sırayla sıralanmış kitap dizisi olmalıdır.
- `sortedByAscendingRating` değişkeninde, değerlendirme puanına göre artan sırada sıralanmış kitap dizisi olmalıdır.
- `sortedByDescentingRating` değişkeninde, değerlendirme puanına göre azalan sırada sıralanmış kitap dizisi olmalıdır.

# **Testler**

- `books` değişkeni tanımlanmıştır.
- `books` değişkeninin değeri, kitapların orijinal nesnelerinin bir dizisidir.
- `sortedByAuthorName` değişkeni tanımlanmıştır.
- `sortedByAuthorName` değişkeninin değeri, yazar adına göre alfabetik sırayla sıralanmış kitap dizisidir.
- `sortedByReversedAuthorName` değişkeni tanımlanmıştır.
- `sortedByReversedAuthorName` değişkeninin değeri, yazar adına göre tersten alfabetik sırayla sıralanmış kitap dizisidir.
- `sortedByAscendingRating` değişkeni tanımlanmıştır.
- `sortedByAscendingRating` değişkeninin değeri, değerlendirme puanına göre artan sırada sıralanmış kitap dizisidir.
- `sortedByDescentingRating` değişkeni tanımlanmıştır.
- `sortedByDescentingRating` değişkeninin değeri, değerlendirme puanına göre azalan sırada sıralanmış kitap dizisidir.
- `books` dizisini dolaşmak için `toSorted()` yöntemi kullanılmıştır.

Harika, bu soru **nesne dizilerini farklı özelliklere göre sıralama** konusunu ölçüyor 🔍

ve senden hem **alfabetik (yazar adına göre)** hem de **sayısal (rating değerine göre)** sıralama yapmanı istiyor.

Bunu yapmak için modern JavaScript’in **toSorted()** metodunu kullanacağız ✅

---

## **✅ Çözüm:**

```
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51 },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 7.75 },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

// 1️⃣ YAZAR ADINA GÖRE (A → Z)
const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));

// 2️⃣ YAZAR ADINA GÖRE (Z → A)
const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

// 3️⃣ RATING’E GÖRE (KÜÇÜKTEN → BÜYÜĞE)
const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// 4️⃣ RATING’E GÖRE (BÜYÜKTEN → KÜÇÜĞE)
const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
```

---

## **🧠 Açıklama:**

### **toSorted() Nedir?**

toSorted() metodu, sort() gibi sıralama yapar ama:

- **Orijinal diziyi değiştirmez** (immutable)
- **Yeni bir sıralı dizi döndürür**

Yani books dizisi aynı kalır.

Bütün sıralamalar, bu dizinin **kopyaları üzerinde yapılır.**

---

### **localeCompare() Nedir?**

Stringleri (yazar adlarını) **alfabetik sırayla karşılaştırmak** için kullanılır:

| **Kod** | **Anlam** |
| --- | --- |
| a.localeCompare(b) | A → Z sıralama |
| b.localeCompare(a) | Z → A sıralama |

---

### **Sayısal Sıralama:**

Sayılarla çalışırken fark çok basittir:

| **Kod** | **Sıralama Türü** |
| --- | --- |
| (a, b) => a.rating - b.rating | Küçükten → büyüğe |
| (a, b) => b.rating - a.rating | Büyükten → küçüğe |

---

## **🧾 Örnek Çıktılar:**

### **sortedByAuthorName**

```
[
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 7.75 },
  { title: "Robert Sheckley", author: "Robert Sheckley", rating: 8.51 },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
]
```

### **sortedByReversedAuthorName**

Ters sıralama — “Z → A”

---

### **sortedByAscendingRating**

Küçükten büyüğe (rating değerine göre):

```
7.75 → 7.94 → 8.38 → 8.51 → 8.67
```

---

### **sortedByDescentingRating**

Büyükten küçüğe:

```
8.67 → 8.51 → 8.38 → 7.94 → 7.75
```

---

## **💡 Özet Tablo:**

| **Değişken** | **Sıralama Türü** | **Kod** |
| --- | --- | --- |
| sortedByAuthorName | Yazar A → Z | a.author.localeCompare(b.author) |
| sortedByReversedAuthorName | Yazar Z → A | b.author.localeCompare(a.author) |
| sortedByAscendingRating | Rating küçükten → büyüğe | a.rating - b.rating |
| sortedByDescentingRating | Rating büyükten → küçüğe | b.rating - a.rating |

---

✅ Bu şekilde hem toSorted() hem localeCompare() hem de sayısal sıralama mantığını tam olarak doğru biçimde kullanmış oluyorsun.