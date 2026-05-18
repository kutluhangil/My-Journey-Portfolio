# Özellik ekleme

Bir nesne oluşturulduktan sonra, yeni bir özellik eklemek mevcut bir özelliğin değerini değiştirmeye benzer şekilde yapılır.

Belirtilen anahtara göre bir değer atandığında ve o anahtar nesnede mevcut değilse, bu özellik otomatik olarak oluşturulur.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
```

# **Görev**

`apartment` nesnesine bazı yeni özellikler ekleyin:

- `area` — metrekare cinsinden alan, number `60`;
- `rooms` — oda sayısı, number `3`;
- `location` — dairenin konumu, aşağıdaki iç içe geçmiş özelliklere sahip bir nesne:
- `country` — ülke, string `"Jamaika"`;
- `city` — şehir, string `Kingston`.

Lütfen dikkat: **`country`** ve **`city`** özelliklerini henüz oluşturulmamış bir **`location`** özelliğine eklemeye çalışırsanız bir hata alırsınız. Önce **`location`** öğesini boş bir nesne olarak başlatın ve ardından ona özellikler ekleyin.

# **Testler**

- `apartment` değişkeni tanımlanır
- `apartment` değişkeninin değeri bir nesnedir
- İç içe geçmiş `area` özelliğinin değeri `60` sayısıdır.
- İç içe `rooms` özelliğinin değeri `3` sayısıdır
- İç içe `location` özelliğinin değeri bir nesnedir
- İç içe `location.country` özelliğinin değeri `"Jamaika"` dizesidir
- İç içe `location.city` özelliğinin değeri `"Kingston"` dizesidir.

```
const apartment = {
  imgUrl: "<https://via.placeholder.com/640x480>",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;

apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};
```