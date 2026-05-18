# Nokta Notasyonu ile Özelliklere Erişim

Bir nesne özelliğine erişmenin ilk yolu, `objectName.key` sözdizimini kullanmaktır.

Bu şekilde, belirtilen anahtara (özelliğe) sahip değerin kendisi döndürülür. Eğer nesnede bu anahtara karşılık gelen bir özellik yoksa, sonuç `undefined` olur. Genellikle, erişilmek istenen özelliğin adı (anahtarı) önceden biliniyorsa, bu yöntem tercih edilir.

`const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); *// "The Last Kingdom"*const bookGenres = book.genres;
console.log(bookGenres); *// ["historical prose", "adventure"]*const bookPrice = book.price;
console.log(bookPrice); *// undefined*`

# **Hedefler**

Daire nesnesi 5 özelliğe sahip bir `apartment` tanımlar: fotoğraf, açıklama, derecelendirme, fiyat, etiketler. Tanımlanan 4 değişken vardır. Bunların değerleri `apartment` nesnesinin özellikleridir.

Kodu, tanımlanan değişkenlere `apartment` nesnesinin ilgili özelliklerine erişim ifadelerini atayarak tamamlayın.

- `aptRating` - derecelendirme
- `aptDescr` - açıklama
- `aptPrice` - fiyat
- `aptTags` - etiketler

# **Testler**

- `apartment` değişkeni tanımlanır
- `apartment` değişkeninin değeri bir nesnedir
- `apartment` değişkeninin nesnesi, `imgUrl`, `descr`, `rating`, `price` ve `tags` değerlerine sahip özelliklere sahiptir
- `adaptRating` değişkeni tanımlanır
- `adaptRating` değişkeninin değeri `4` sayısıdır.
- `aptDescr` değişkeni tanımlanır
- `aptDescr` değişkeninin değeri `"Spacious apartment in the city center"` dizesidir.
- `aptPrice` değişkeni tanımlanır
- `aptPrice` değişkeninin değeri `2153` sayısıdır.
- `aptTags` değişkeni tanımlanır
- `aptTags` değişkeninin değeri, `["premium", "promoted", "top"]` dizelerinden oluşan bir dizidir.

```
const apartment = {
  imgUrl: "<https://via.placeholder.com/640x480>",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
```