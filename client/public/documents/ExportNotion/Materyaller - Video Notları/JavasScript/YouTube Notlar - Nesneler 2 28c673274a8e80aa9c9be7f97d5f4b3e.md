# YouTube Notlar - Nesneler 2

---

# **📘 JavaScript – Array of Objects, Nesne Metotları, this , Rest/Spread Operatörleri**

## **0) Hızlı Özet (TL;DR)**

- **Array of Objects**: Back-end’den gelen verinin en yaygın formu. for...of, filter, map gibi işlemlerle dolaş, seç, dönüştür.
- **Nesne Metotları**: Obje içine fonksiyon koyarsan adı **metot** olur. Çağırırken obj.method() kullanırsın.
- **this**: Metodun **hangi obje üzerinden çağrıldığına** göre o objeyi işaret eder: bookshelf.getBooks() içindeki this → bookshelf.
- **Rest (...args)**: Çok girdiyi **tek pakette (array)** toplar (fonksiyon parametresinde).
- **Spread (...arr)**: Tek paketi (array/obje) **açar**, elemanları tek tek yayar (fonksiyon çağrısı, kopya/merge).

---

## **1) Array of Objects (Nesneler Dizisi)**

### **1.1. Tanım ve Neden Önemli?**

Back-end genellikle liste verilerini “**array of objects**” olarak döner:

```
const books = [
  { title: "The Last Kingdom", rating: 8.0, author: "Bernard Cornwell" },
  { title: "Dream Guardian",   rating: 8.5, author: "Robert Shackley" },
  { title: "Clean Code",       rating: 9.3, author: "Robert C. Martin" }
];
```

Bu yapı arayüzde listelemek, filtrelemek, aramak ve dönüştürmek için **standart**tır.

### **1.2. Dolaşma – for...of**

```
for (const book of books) {
  console.log(book.title, book.rating);
}
```

- book her iterasyonda dizideki **tek** nesnedir.
- Property’lere **dot** veya **bracket** notasyonuyla erişirsin:
    
    book.title ✅ | book["title"] ✅
    

### **1.3. Arama (Search) – Yazar ismine göre**

```
for (const book of books) {
  if (book.author === "Robert Shackley") {
    console.log("Bulundu:", book);
    break; // ilk eşleşmede durmak istersen
  }
}
```

> Pratik alternatifler:
> 
- books.find(b => b.author === "Robert Shackley") (ilk eşleşmeyi döner)
- books.filter(b => b.author === "Robert Shackley") (tüm eşleşmeleri dizi olarak döner)

### **1.4. Filtreleme – Puan eşiğine göre**

```
const highRated = [];
for (const book of books) {
  if (book.rating > 8.5) highRated.push(book);
}
console.log(highRated);
```

> Modern/okunabilir alternatif:
> 

> const highRated = books.filter(b => b.rating > 8.5);
> 

### **1.5. Sadece Başlıkları Toplamak (Mapleme)**

```
const titles = [];
for (const book of books) {
  titles.push(book.title);
}
console.log(titles); // ["The Last Kingdom", "Dream Guardian", "Clean Code"]
```

> Modern alternatif:
> 

> const titles = books.map(b => b.title);
> 

---

## **2) Nesne İçinde Metotlar (Object Methods)**

### **2.1. Metot Nedir?**

Obje içine yerleştirilmiş fonksiyonlara **metot** denir:

```
const myObject = {
  username: "John",
  age: 25,
  sayHi() {                 // kısaltılmış method syntax
    console.log("Hello!");
  }
};

myObject.sayHi(); // "Hello!"
```

### **2.2. Uygulamalı Örnek – bookshelf Nesnesi**

```
const bookshelf = {
  books: [
    { title: "The Last Kingdom", rating: 8.0 },
    { title: "Dream Guardian",   rating: 6.0 }
  ],

  getBooks() {
    // this → çağıran obje (bookshelf)
    return this.books;
  },

  addBook(bookName) {
    // Basit sürüm: sadece string ekle
    this.books.push({ title: bookName, rating: 0 });
    // Yansıma için genelde return yerine getBooks çağrılır:
    return this.getBooks();
  }
};

console.log(bookshelf.getBooks());
console.log(bookshelf.addBook("New Book 13"));
```

> Not: Metodu yazarken
> 
> 
> **method shorthand**
> 

---

## **3) this Anahtar Kelimesi (Temel Kullanım)**

### **3.1. Basit Kural**

- Bir metot **hangi obje üstünden çağrıldıysa**, metot içindeki this **o objeyi** gösterir.

```
const shelf = {
  books: ["A", "B"],
  getFirst() {
    return this.books[0]; // this === shelf
  }
};
console.log(shelf.getFirst()); // "A"
```

### **3.2. Dikkat – Arrow Function’larda this**

- **Arrow function**’ların kendi this’i yoktur; **dış bağlamdan** alır.
- Nesne metodu yazarken çoğunlukla **normal function** (method shorthand) tercih et.

Kısa örnek:

```
const x = {
  value: 42,
  ok: () => { console.log(this.value); } // this burada beklediğin gibi x olmaz
};
x.ok(); // undefined (veya window/global bağlama bağlı sonuç)
```

> Bu yüzden metotlarda ok() { ... } şeklini tercih et.
> 

---

## **4) this ile Daha İleri Örnek – Ortalama Puan**

Array of Objects üzerinde this ile erişim + döngü:

```
const bookshelf2 = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "Dream Guardian",   rating: 6 }
  ],

  getAverageRating() {
    let total = 0;
    for (const book of this.books) {
      total += book.rating;
    }
    return total / this.books.length || 0;
  }
};

console.log(bookshelf2.getAverageRating()); // 7
```

---

## **5) Rest ve Spread Operatörleri (...)**

> Görünüş aynı (...) ama bağlama göre isim değişir
> 
- **Rest**: Çok şeyi **tek pakete toplar** (parametre toplama)
- **Spread**: Tek paketi **açar/dağıtır** (çağrıda/oluşturmada yayma)

### **5.1. Rest – Fonksiyon Parametreleri Toplama**

```
function sum(...nums) {    // rest: tüm argümanları array olarak toplar
  let total = 0;
  for (const n of nums) total += n;
  return total;
}

console.log(sum(2, 3));           // 5
console.log(sum(2, 3, 5, 7, 11)); // 28
```

- Eskiden arguments vardı; **array-benzeri**ydi. ...rest ile **gerçek array** alırsın.

### **5.2. Spread – Fonksiyon Çağrısında Yayma**

```
const arr = [14, -4, 25, 8, 11];
console.log(Math.max(...arr)); // 25  ← arr'yi tek tek argümana yayar
```

### **5.3. Spread – Array Kopyalama (Shallow Copy)**

```
const a = [1, 2, 3];
const aCopy = [...a];   // yeni referans, aynı içerik
aCopy.push(99);

console.log(a);     // [1,2,3]  (değişmedi)
console.log(aCopy); // [1,2,3,99]
```

> Uyarı (Shallow Copy)
> 
> 
> **içteki referanslar**
> 

> Derin kopya için: structuredClone(obj) (tarayıcı destekliyse) veya JSON.parse(JSON.stringify(obj)) (tür kayıplarına dikkat).
> 

### **5.4. Spread – Array Birleştirme**

```
const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, ...a2]; // [1,2,3,4]
```

### **5.5. Spread – Obje Birleştirme (Merge)**

```
const userBase = { id: 1, name: "John" };
const userFlags = { isCustomer: true, country: "TR" };

const mergedUser = { ...userBase, ...userFlags };
// { id:1, name:"John", isCustomer:true, country:"TR" }
```

> Çakışan anahtarlar
> 
> 
> **soldakini ezer**
> 

> const u = { a:1, a:2 } → a son değeri 2 olur.
> 

---

## **6) Hepsi Bir Arada – Mini Uygulama**

```
const bookshelf = {
  books: [
    { title: "The Last Kingdom", rating: 8.0, author: "Bernard Cornwell" },
    { title: "Dream Guardian",   rating: 8.5, author: "Robert Shackley" },
    { title: "Clean Code",       rating: 9.3, author: "Robert C. Martin" }
  ],

  getBooks() {
    return this.books;
  },

  addBook(title, rating = 0, author = "Unknown") {
    this.books.push({ title, rating, author });
    return this.getBooks();
  },

  findByAuthor(name) {
    // Tüm eşleşmeleri döndürelim
    return this.books.filter(b => b.author === name);
  },

  highRated(threshold = 8.5) {
    return this.books.filter(b => b.rating > threshold);
  },

  titles() {
    return this.books.map(b => b.title);
  },

  averageRating() {
    const ratings = this.books.map(b => b.rating);
    const total = ratings.reduce((acc, n) => acc + n, 0);
    return (total / ratings.length) || 0;
  }
};

// Kullanım
console.log(bookshelf.getBooks());
console.log(bookshelf.addBook("You Don’t Know JS", 8.9, "Kyle Simpson"));
console.log(bookshelf.findByAuthor("Robert C. Martin"));
console.log(bookshelf.highRated(8.5));
console.log(bookshelf.titles());
console.log(bookshelf.averageRating());
```

---

## **7) Sık Yapılan Hatalar & İpuçları**

- **this ve arrow function**: Metotlarda arrow function kullanma; this beklediğin obje olmayabilir.
- **Shallow copy tuzağı**: ... ile kopya **yüzeyseldir**. Derin yapılar için structuredClone.
- **Mutasyon kontrolü**: Birçok array metodu orijinali **değiştirir** (push, sort, splice).
    
    Değişmesini istemiyorsan önce const copy = [...arr] yap.
    
- **Performans bilinçli kullanım**:
    - find ilk eşleşmeyi arar → O( n )
    - filter hepsini toplar → O( n )
    - map dönüşüm yapar → O( n )
        
        Gereksiz birden çok geçiş yerine tek geçişte işi bitirmeyi hedefle (gerekirse reduce).
        

---

## **8) Mini Alıştırmalar (Kendini Test Et)**

1. books dizisinden **en uzun başlığı** olan kitabı döndüren fonksiyon yaz.
2. books içindeki **benzersiz yazarları** dizi olarak döndür (Set + map).
3. bookshelf.addBook’e **nesne** kabul eden ikinci bir sürüm yaz:

```
addBookObj(book) { /* {title, rating, author} beklesin */ }
```

1. 
2. averageRating’i **virgülden sonra 2 basamak** ile string döndür (örn. "8.25").

---

## **9) Kısa Özet Tablosu**

| **Konu** | **Kullanım** | **Not** |
| --- | --- | --- |
| Dolaşma | for (const item of arr) {} | Array of Objects için ideal |
| Arama | find, filter | İlk vs. tüm eşleşmeler |
| Dönüştürme | map | titles = books.map(b=>b.title) |
| Toplama | reduce | Ortalama, toplam vs. |
| Metot | obj.method() | Obje içindeki fonksiyon |
| this | Metot içinde çağıran objeyi gösterir | Arrow function kullanma |
| Rest | function f(...args){} | Argümanları **toplar** |
| Spread | f(...arr) / {...a, ...b} | Diziyi/objeyi **açar** |
| Kopya | [...arr], {...obj} | **Shallow** kopya |

---