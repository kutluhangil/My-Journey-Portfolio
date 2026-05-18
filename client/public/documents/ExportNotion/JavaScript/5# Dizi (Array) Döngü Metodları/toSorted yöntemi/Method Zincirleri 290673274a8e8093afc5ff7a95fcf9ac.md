# Method Zincirleri

Öğrencilerin her birinin adları, notları ve ziyaret ettikleri öğelerle birlikte bir nesne dizimiz var.

```
const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];
```

Test puanlarına göre sıralanmış isimlerinin bir dizisini almanız gerekmektedir.

Bunun için:

1. Diziyi `toSorted()` yöntemiyle sıralayın,
2. Ardından sıralanmış diziden `name` özelliğinin değerlerinden oluşan bir dizi oluşturmak için `map()` yöntemini kullanın.

```
const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names);// ["Ajax", "Poly", "Mango", "Kiwi"]
```

Sorun, her işlemden sonra, sonuncusu hariç, ara değişkenlerin ortaya çıkmasıdır. `sortedByAscendingScore` değişkeni gereksizdir. Sadece geçici sonucu saklamak için gereklidir.

Bu "ölü" değişkenlerden kurtulmak, yöntem çağrılarını zincirleme yaparak yapılabilir. Her bir sonraki yöntem, öncekinin sonucuna dayalı olarak gerçekleştirilecektir.

```
const names = students
  .toSorted((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names);// ["Ajax", "Poly", "Mango", "Kiwi"]
```

1. Dizide `toSorted()` yöntemini çağırıyoruz.
2. `toSorted()` yönteminin çalışma sonucuna `map()` yöntemini uyguluyoruz.
3. `names` değişkenine `map()` yönteminin çalışma sonucu atanır.

Alfabeye göre sıralı benzersiz ziyaret edilen öğelerin bir dizisini elde ediyoruz.

```
const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses);// ["biology", "science", "literature", "mathematics", "physics"]
```

1. Yığın üzerinde `flatMap()` çağrısı yaparak tüm dersleri düzleştirilmiş bir diziye dönüştürürüz
2. `flatMap()` yönteminden gelen sonuca benzersiz öğeleri filtrelemek için `filter()` yöntemini uygularız
3. `filter()` yönteminin sonucuna `toSorted()` çağrısı yaparız
4. `uniqueSortedCourses` değişkenine `toSorted()` yönteminin sonucu atanır

Yöntem zinciri isteğe bağlı olarak uzun olabilir, ancak genellikle 2-3 işlemden fazlasını içermez.

Öncelikle, döngüsel yöntemler koleksiyon üzerinde nispeten basit işlemler için kullanılır. İkinci olarak, her bir sonraki yöntemi çağırma işlemi, büyük miktarlarda performansa etki edebilecek dizi tekrarlarına neden olabilir.

# **Görev**

Kodu, `MIN_BOOK_RATING` değişken değerinden büyük olan kitapların yazarlarının isimlerini alfabetik sırayla içeren 'names' dizisini tamamla.

# **Testler**

- `books` değişkeni tanımlanmıştır.
- `books` değişkeninin değeri başlangıçtaki nesne dizisidir.
- `MIN_BOOK_RATING` değişkeni tanımlanmıştır.
- `MIN_BOOK_RATING` değişkeninin değeri `8` sayısıdır.
- `names` değişkeni tanımlanmıştır.
- `names` değişkeninin değeri `["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]` dizisidir.
- `books`, `MIN_BOOK_RATING` ve `names` dışında herhangi bir değişken tanımlanmamıştır.
- `filter`, `map`, `toSorted` method zinciri kullanılmaktadır.

Harika 🎯

Bu görev **zincirleme metot kullanımı (method chaining)** pratiği!

Yani filter(), map() ve toSorted() metodlarını **tek bir satırda** kullanacağız.

---

## **✅ Çözüm**

```
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51 },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 7.75 },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "The Dreams in the Witch House", author: "Howard Lovecraft", rating: 8.67 },
];

const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)       // 1️⃣ Yüksek puanlı kitapları filtrele
  .map(book => book.author)                            // 2️⃣ Sadece yazar isimlerini al
  .toSorted((a, b) => a.localeCompare(b));             // 3️⃣ Alfabetik sıraya göre sırala
```

---

## **🧠 Adım Adım Açıklama**

### **filter()**

```
.filter(book => book.rating > MIN_BOOK_RATING)
```

Bu adımda, rating değeri **8’den büyük olan** kitapları seçiyoruz.

🔹 Filtrelenen kitaplar:

```
[
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51 },
  { title: "The Dreams in the Witch House", author: "Howard Lovecraft", rating: 8.67 }
]
```

---

### **map()**

```
.map(book => book.author)
```

Burada artık sadece yazar isimlerini alıyoruz.

Sonuç:

```
["Bernard Cornwell", "Robert Sheckley", "Howard Lovecraft"]
```

---

### **toSorted()**

```
.toSorted((a, b) => a.localeCompare(b))
```

Bu adımda yazar isimleri **alfabetik olarak sıralanıyor**.

Sonuç:

```
["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
```

---

## **✅ Nihai Sonuç**

```
console.log(names);
// ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
```

---

## **🧾 Özet Tablo**

| **Aşama** | **Metot** | **Ne yapıyor** | **Örnek Çıktı** |
| --- | --- | --- | --- |
| 1️⃣ | filter() | Puanı 8’den büyük kitapları seçer | [Book1, Book2, Book5] |
| 2️⃣ | map() | Sadece yazar adlarını alır | ["Bernard Cornwell", "Robert Sheckley", "Howard Lovecraft"] |
| 3️⃣ | toSorted() | Alfabetik sıraya sokar | ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"] |

---

Bu çözüm:

✅ Tek satırda zincirleme (filter → map → toSorted)

✅ Orijinal diziyi **değiştirmez**

✅ Doğru alfabetik sıralama yapar 🚀