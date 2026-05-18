# toSorted() yöntemi

`toSorted()` yöntemi dizinin öğelerini sıralar.

`array.toSorted()*;*`

- Input dizisini sıralar
- Yeni bir dizi döndürür
- Varsayılan olarak artan sırayla sıralar

**Sayı Dizisi**

`Notları` sıralamamız gereken bir örneği düşünelim.

Başlangıç dizisi `notlar` değişmeden kalır. `YuksekNotlar` adlı yeni dizi, büyüme sırasına göre sıralanmış sayıları içerir.

```
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted();

console.log(scores);// [61, 19, 74, 35, 92, 56]console.log(ascendingScores);// [19, 35, 56, 61, 74, 92]
```

Varsayılan olarak, `toSorted()` yöntemi sıralamadan önce tüm dizinin öğelerini dizeye dönüştürür, bu nedenle öğeler aslında dize olarak sıralanır, yani Unicode tablosundaki değerlerine göre sıralanır. Sayıların standart sıralaması, sayıları düşündüğümüzde garip görünse de, sayıların dizilere dönüştürüldüğünü bildiğimizde anlaşılır.

```
const scores = [27, 2, 41, 4, 7, 3, 75];

console.log(scores.toSorted());// [2, 27, 3, 4, 41, 7, 75]
```

Bu sıralamada, dizeler soldan sağa karakter karakter karşılaştırılır, yani önce 2. ve 27. dizeler karşılaştırılır. Bu iki dizede ilk karakter aynıdır, ancak 2. dize sadece 1 karakter içerdiği için 27. diziden daha küçüktür ve önce gelir.

Sonra 27. ve 3. dizeler karşılaştırılır. 3. dizideki ilk karakter, 27. dizideki 2. karakterden büyüktür, bu yüzden 3, 27'den sonra gelir.

```
Özel sıralama yöntemlerini bir sonraki bölümde ele alacağız.

```

**Dize Dizisi**

Dize dizisi alfabetik olarak sıralanır.

```
const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
```

Büyük harflerin sıra numarası küçük harflerininkinden daha küçüktür.

```
const letters = ["b", "B", "a", "A", "c", "C"];

console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]
```

# **Görev**

Kodu aşağıdaki şekilde tamamla:

- `ascendingReleaseDates` değişkeninde, `releaseDates` dizisinin artan sırayla sıralanmış bir kopyası olmalıdır,
- ve `alphabetikAuthors` değişkeninde, yazarların isimlerinin alfabetik sırayla sıralanmış bir kopyası olmalıdır.

# **Testler**

- `releaseDates` değişkeni bildirilmiştir
- `releaseDates` değişkeninin değeri `[2016, 1967, 2008, 1984, 1973, 2012, 1997]` dizisidir
- `authors` değişkeni bildirilmiştir
- `authors` değişkeninin değeri `["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]` dizisidir
- `ascendingReleaseDates` değişkeni bildirilmiştir
- `ascendingReleaseDates` değişkeninin değeri `[1967, 1973, 1984, 1997, 2008, 2012, 2016]` dizisidir
- `alphabetikAuthors` değişkeni bildirilmiştir
- `alphabetikAuthors` değişkeninin değeri `["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]` dizisidir
- `toSorted()` yöntemi kullanılmıştır

---

## **✅ Çözüm:**

```
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Edgar Allan Poe",
];

// Sayıları artan sırayla sırala
const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// Yazar isimlerini alfabetik sırayla sırala
const alphabeticalAuthors = authors.toSorted();
```

---

## **🧠 Açıklama:**

### **🧩 1. toSorted() nedir?**

- toSorted() ➡️ sort() metoduna **benzer**,
- Ancak **orijinal diziyi değiştirmez**, **yeni bir sıralanmış kopya** döndürür.
- Bu nedenle **saf (pure) bir metottur** ✅

### **🧮 2. Sayı sıralaması:**

```
releaseDates.toSorted((a, b) => a - b);
```

- (a - b) ifadesi sayıları küçükten büyüğe sıralar.
- Eğer (b - a) yapsaydık → büyükten küçüğe olurdu.

Sonuç:

[1967, 1973, 1984, 1997, 2008, 2012, 2016]

---

### **🔤 3. Alfabetik sıralama:**

```
authors.toSorted();
```

- String dizilerinde JavaScript otomatik olarak **alfabetik** (Unicode) sıraya göre sıralar.
- Sonuç:
    
    ["Bernard Cornwell", "Edgar Allan Poe", "Robert Sheckley", "Tanith Lee"]
    

---

## **📘 Tam Kod:**

```
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Edgar Allan Poe",
];

const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
const alphabeticalAuthors = authors.toSorted();

console.log(ascendingReleaseDates);
// [1967, 1973, 1984, 1997, 2008, 2012, 2016]

console.log(alphabeticalAuthors);
// ["Bernard Cornwell", "Edgar Allan Poe", "Robert Sheckley", "Tanith Lee"]
```

---

## **💡 Özet:**

| **Amaç** | **Kullanılan Metot** | **Sonuç** |
| --- | --- | --- |
| Sayıları küçükten büyüğe sırala | .toSorted((a, b) => a - b) | [1967, 1973, 1984, 1997, 2008, 2012, 2016] |
| Yazarları alfabetik sırala | .toSorted() | ["Bernard Cornwell", "Edgar Allan Poe", "Robert Sheckley", "Tanith Lee"] |

> ✨ toSorted() modern, güvenli ve orijinal diziyi bozmadan çalışan sıralama yöntemidir.
>