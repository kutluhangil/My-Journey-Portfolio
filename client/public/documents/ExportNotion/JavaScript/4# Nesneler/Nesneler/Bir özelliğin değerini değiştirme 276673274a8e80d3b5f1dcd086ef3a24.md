# Bir özelliğin değerini değiştirme

Bir nesne oluşturulduktan sonra, özelliklerinin değerleri değiştirilebilir.

Bunun için ilgili özelliğe, örneğin nokta notasyonu kullanarak erişip, yeni bir değer atamanız yeterlidir.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating);// 9console.log(book.isPublic);// falseconsole.log(book.genres);// ["historical prose", "adventure", "drama"]
```

# **Görev**

Kodu `apartment` nesnesinin özelliklerinin değerlerini güncelleyerek tamamlayın:

- `fiyat` özelliğinin değeri `5000`;
- dairenin `rating` özelliğinin değeri `4.7` ;
- iç içe geçmiş `name` özelliğinin değeri `"Henry Sibola"` ;
- `tags` özelliğindeki etiket dizisinin sonuna `"trusted"` eklenir.

# **Testler**

- `apartment` değişkeni tanımlanır
- `apartment` değişkeninin değeri bir nesnedir
- İç içe `price` özelliğinin değeri `5000` sayısıdır.
- İç içe `rating` özelliğinin değeri `4.7` sayısıdır.
- İç içe `name` özelliğinin değeri `"Henry Sibola"` dizesidir.
- İç içe `tags` özelliğinin değeri bir dizidir `["premium", "promoted", "top", "trusted"]`

```
const apartment = {
  imgUrl: "<https://via.placeholder.com/640x480>",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");
```