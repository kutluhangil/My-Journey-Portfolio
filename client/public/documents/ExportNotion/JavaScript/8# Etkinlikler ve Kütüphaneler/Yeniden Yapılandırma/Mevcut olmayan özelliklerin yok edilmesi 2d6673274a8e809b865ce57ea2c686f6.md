# Mevcut olmayan özelliklerin yok edilmesi

Değişken adı ile nesne özelliğinin adı eşleşirse, atama gerçekleşir.

**Peki, eşleşme olmazsa ne olur?**

Eğer nesnede bu isimde bir özellik yoksa, ilgili değişkene `undefined` değeri atanır.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Yeniden Yapılandırma
const { title, bookTitle, coverImage, bookRating } = book;
console.log(title); // "The Last Kingdom"
console.log(bookTitle); // undefined
console.log(coverImage); // undefined
console.log(bookRating); // undefined
```

Var olmayan özellikleri yıkarken `undefined` atamasından kaçınmak için, `=` işaretini kullanarak değişkenlere varsayılan değerler atayabilirsiniz. Bu varsayılan değer, yalnızca nesnede bu isimde bir özellik bulunmadığında geçerli olur.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Kitap nesnesinin bir kapak resmi yoksa bir kapak resmi ekleyin
const {
  title,
  author,
  coverImage = "<https://via.placeholder.com/640/480>"
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "<https://via.placeholder.com/640/480>"
```