# Döngüler halinde yeniden yapılanma

`for...of` döngüsüyle bir nesne dizisi üzerinde yineleme yaparken, her nesnenin özelliklerine birden fazla kez erişim yapılabilir.

```
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
```

Tekrarlanan erişimleri azaltmak için, döngü gövdesinde bir nesnenin özelliklerini yerel değişkenlere dönüştürebilirsiniz.

```
for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
```

Eğer nesne az sayıda özellik içeriyorsa, yıkımı doğrudan `book` değişkeninin tanımlandığı satırda gerçekleştirebilirsiniz.

```
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
```