# Köşeli parantezler ile özelliklere erişim

Bir nesne özelliğine erişmenin ikinci yolu, `objectName["key"]` sözdizimini kullanmaktır.

Bu yöntem, bir dizi elemanına erişmeye benzer; ancak burada köşeli parantez içinde bir **indeks** değil, bir **anahtar** (özellik adı) olarak kullanılan bir **string** yer alır.

Bu sözdizimi daha az yaygın olarak kullanılır. Genellikle, özellik adının önceden bilinmediği ya da bir değişken içinde tutulduğu durumlarda tercih edilir.

Tıpkı nokta notasyonunda olduğu gibi:

- Belirtilen anahtara sahip bir özellik varsa, o değeri döndürür.
- Yoksa `undefined` sonucu verir.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book.title);// "The Last Kingdom"console.log(book["title"]);// "The Last Kingdom"console.log(book.genres);// ["historical prose", "adventure"]console.log(book["genres"]);// ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey);// undefinedconsole.log(book[propKey]);// "Bernard Cornwell"
```

Yukarıdaki örnekte:

- `console.log(book.propKey);` `undefined`dır çünkü `book` nesnesinin `propKey` anahtarına sahip bir özelliği yoktur.
- `console.log(book[propKey]);` `Bernard Cornwell`dir, çünkü `propKey` değişkeninin değeri `author` dizesidir ve `book` nesnesinin `author` anahtarına sahip bir özelliği vardır, bu nedenle bu girdi yazar özelliğinin değerini döndürür).

# **Görev**

`apartment` nesnesi, 6 özelliğe sahip bir daireyi tanımlar: `imgurl`, `descr`, `rating`, `price`, `tags` .

Bildirilen değişkenleri "köşeli parantez" sözdizimini kullanarak `apartment` nesnesinin ilgili özelliklerine erişen ifadelere ayarlayarak kodu tamamlayın.

- `aptRating` - derecelendirme;
- `aptDescr` - açıklama;
- `aptPrice` - fiyat;
- `aptTags` - etiketler.

# **Testler**

- `apartment` değişkeni tanımlanır
- `apartment` değişkeninin değeri bir nesnedir
- `aptRating` değişkeni tanımlanır
- `aptRating` değişkeninin değeri `4`tür.
- `aptDescr` değişkeni tanımlanır
- `aptDescr` değişkeninin değeri `"Spacious apartment in the city center"`dir.
- `aptPrice` değişkeni tanımlanır
- `aptPrice` değişkeninin değeri `2153`tür.
- `aptTags` değişkeni tanımlanır
- `aptTags` değişkeninin değeri `["premium", "promoted", "top"]` şeklindedir.

```
const apartment = {
  imgUrl: "<https://via.placeholder.com/640x480>",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
```