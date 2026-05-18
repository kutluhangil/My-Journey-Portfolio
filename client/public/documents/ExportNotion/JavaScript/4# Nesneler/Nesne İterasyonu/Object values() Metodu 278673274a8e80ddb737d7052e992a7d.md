# Object.values() Metodu

`Object.keys(object)` bir nesnenin **anahtarlarını** dizi olarak döndürürken, `Object.values(object)` ise **özellik değerlerini** içeren bir dizi döndürür.

Eğer nesnede hiç özellik yoksa, `Object.values(object)` boş bir dizi verir.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "genres", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
```

Bu şekilde elde edilen değerler, örneğin `for...of` döngüsü ile işlenebilir. Özellikle sayısal değerlerin toplamını almak gibi işlemlerde kullanılabilir.

# **Görev**

`keys` değişkenine `apartment` nesnesinin özellik anahtarlarının bir dizi halini, `values` değişkenine ise bu anahtarların değerlerinin bir dizi halini kaydet. Bunun için `Object.keys()` ve `Object.values()` metodlarını kullan.

# **Testler**

- `apartment` değişkeni tanımlanmış olmalı
- `apartment` değişkeninin değeri bir nesne olmalı
- `keys` değişkeni tanımlanmış olmalı
- `keys` değişkeninin değeri `["descr", "rating", "price"]` dizisi olmalı
- `values` değişkeni tanımlanmış olmalı
- `values` değişkeninin değeri `["Spacious apartment in the city center", 4, 2153]` dizisi olmalı
- `apartment` nesnesinin anahtarlarını almak için `Object.keys()` yöntemi kullanılmalı
- `apartment` nesnesinin değerlerini almak için `Object.values()` yöntemi kullanılmalı

```
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);
```