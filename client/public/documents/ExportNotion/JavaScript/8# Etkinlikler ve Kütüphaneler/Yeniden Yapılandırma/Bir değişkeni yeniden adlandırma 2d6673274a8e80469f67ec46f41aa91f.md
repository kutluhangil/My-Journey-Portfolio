# Bir değişkeni yeniden adlandırma

Yeniden yapılandırma sırasında, bir özelliğin değerini çıkarırken `:` işaretini kullanarak bu değeri farklı bir değişken adıyla atayabilirsiniz.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Yeniden Yapılandırma
const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
console.log(title); // "The Last Kingdom"
console.log(bookAuthor); // "Bernard Cornwell"
console.log(isPublic); // true
console.log(bookRating); // 8.38
```

Bu yüzden şu şekilde yazarız:

- Değerini almak istediğiniz özelliğin adını yazın,
- Ardından iki nokta üst üste (`:`) koyun,
- Son olarak, bu özelliğin değerini atamak istediğiniz değişkenin adını yazın.