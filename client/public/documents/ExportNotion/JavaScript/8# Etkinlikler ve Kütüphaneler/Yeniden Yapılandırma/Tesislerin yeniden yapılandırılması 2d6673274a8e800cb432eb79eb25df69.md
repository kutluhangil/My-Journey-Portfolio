# Tesislerin yeniden yapılandırılması

Karmaşık veriler genellikle bir nesne ile temsil edilir. Nesne özelliklerine tekrar tekrar erişmek, kodun görsel olarak karmaşık ve dağınık görünmesine neden olur.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? "pulbic" : "private";
const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
```

Yeniden yapılandırma, nesne özelliklerinin değerlerini yerel değişkenlere “paketinden çıkarmanıza” olanak tanır. Bu, kodu kullanıldığı noktada daha az “gürültülü” ve daha okunabilir hale getirir.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// şeklini bozma (destruct etme)
const { title, author, isPublic, rating } = book;

// Kullanımı
const accessType = isPublic ? "pulbic" : "private";
const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
```

`const` veya `let` anahtar sözcüğünden sonra, bir nesne tanımlarken olduğu gibi küme parantezleri kullanırız.

Parantezler içinde, yıkılan nesnenin özelliklerine karşılık gelen ve bu değerlere atanacak değişkenlerin adlarını virgüllerle ayırarak belirtiriz. Yıkım (destructuring) her zaman atama işleminin sol tarafında yer alır. Küme parantezleri içindeki değişkenlere, nesnenin aynı isimli özelliklerinin değerleri atanır.

Değişkenlerin küme parantezleri içinde yer alma sırası önemli değildir.