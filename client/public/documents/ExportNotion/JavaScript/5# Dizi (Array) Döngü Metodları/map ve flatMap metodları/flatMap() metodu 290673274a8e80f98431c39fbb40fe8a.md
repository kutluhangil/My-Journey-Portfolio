# flatMap() metodu

`flatMap(callback)` metodu, `map()` yöntemine benzer şekilde çalışır; ancak sonuç çok boyutlu (iç içe) bir dizi olduğunda, bu sonucu düzleştirerek tek boyutlu hale getirir.

```
array.flatMap((element, index, array) => {
// callback fonksiyonun gövdesi
});
```

Aşağıda, `students` dizisi her öğrencinin aldığı dersleri `courses` özelliğinde saklayan bir koleksiyon içeriyor. Aynı dersi birden fazla öğrenci alabilir. Amacımız, bu öğrenci grubunun aldığı tüm derslerin tek bir listede toplanmasıdır.

```
const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
```

`flatMap()` metodu, orijinal dizinin her elemanı için callback fonksiyonunu çağırır ve sonucunu bir diziye yazar. `map()` metodundan farkı, ortaya çıkan dizinin tek seviyeye indirgenmiş (flattened) olmasıdır. Yani, iç içe diziler otomatik olarak birleştirilir ve sonuç tek boyutlu bir dizi olur.

Tabii 🤓 bunu çok net bir şekilde açıklayayım:

---

## **💡 Önce: map() ne yapıyordu?**

map() bir dizinin **her elemanını dönüştürür** ama **her dönüşü sonucu ayrı bir diziye koyar**.

Yani eğer map() işleminin sonucu dizilerden oluşuyorsa, sonuç **çok boyutlu (nested)** bir dizi olur.

### **🎯 Örnek:**

```
const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses);
```

📤 **Sonuç:**

```
[
  ["mathematics", "physics"],
  ["science", "mathematics"],
  ["physics", "biology"]
]
```

➡️ Gördüğün gibi, sonuç **3 elemanlı**, ama her eleman **kendi içinde bir dizi**.

Bu yapı: “**çok boyutlu dizi**” (multi-dimensional array) olarak geçer.

---

## **🧩 İşte burada devreye flatMap() giriyor!**

flatMap() neredeyse **aynı şeyi yapar**, ama **sonuçta iç içe dizileri düzleştirir (flatten)**.

### **🎯 Aynı örnek flatMap**

### **ile:**

```
const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses);
```

📤 **Sonuç:**

```
["mathematics", "physics", "science", "mathematics", "physics", "biology"]
```

Yani artık elimizde **tek boyutlu** bir liste var!

Her öğrencinin derslerini tek bir sırada topladı 🎉

---

## **⚙️ Özetle fark:**

| **Özellik** | map() | flatMap() |
| --- | --- | --- |
| Dönen sonuç | Dizilerin dizisi (nested array) | Tek boyutlu dizi |
| Kullanım amacı | Verileri dönüştürmek | Verileri dönüştürüp düzleştirmek |
| Düzleştirme | ❌ Hayır | ✅ Evet (1 seviye) |

---

## **📘 Gerçek hayattan bir benzetme:**

Diyelim ki üç öğrencinin **ders listeleri** ayrı kağıtlarda:

```
Mango: [matematik, fizik]
Poly: [fen, matematik]
Kiwi: [fizik, biyoloji]
```

- map() bu üç kağıdı **bir klasöre koyar** (yani 3 sayfa hâlinde saklar).
- flatMap() hepsini **tek bir listeye yazar** — sanki tüm dersleri tek kağıtta toplar.

---

# **Görev**

`books` dizisi, her biri değeri bir türler dizisi olan bir `rating` özelliği içeren bir kitap nesneleri koleksiyonu içerir. `flatMap()` yöntemini kullanarak, `genres` değişkeninin `books` dizisindeki tüm kitapların türlerinin bir dizisini (`genres` özelliği) içerdiğinden emin olun.

# **Testler**

- `books` değişkeni bildirilmiştir
- `books` değişkeninin değeri bir nesne dizisidir
- `genres` değişkeni bildirilmiştir
- Türler değişkeninin değeri bir dizidir `[ "adventure", "history", "fiction", "horror", "mysticism" ]`
- `books` dizisi üzerinde yineleme yapmak için `flatMap()` yöntemini kullanın

---

### **✅ Çözüm:**

```
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

// flatMap() her kitabın genres dizisini alır ve sonuçları düzleştirir
const genres = books.flatMap(book => book.genres);

console.log(genres);
// ["adventure", "history", "fiction", "horror", "mysticism"]
```

---

### **🧠 Açıklama adım adım:**

1. books → her elemanı bir kitap nesnesi (title, author, genres).
2. Her kitabın içinde genres bir **dizi**.
    
    Yani ["adventure", "history"], ["fiction"], ["horror", "mysticism"] gibi.
    
3. map() kullanırsak şöyle olurdu:

```
[
  ["adventure", "history"],
  ["fiction"],
  ["horror", "mysticism"]
]
```

1. Bu **iç içe bir dizi** olur.
2. Ama flatMap() kullanırsak, bu diziler **otomatik olarak birleştirilir**:

```
["adventure", "history", "fiction", "horror", "mysticism"]
```

1. ✅ Tam da bizden istenen sonuç bu.

---

### **📘 Sonuç:**

- books: dizi ✅
- flatMap(): doğru kullanıldı ✅
- genres:

```
["adventure", "history", "fiction", "horror", "mysticism"]
```

---