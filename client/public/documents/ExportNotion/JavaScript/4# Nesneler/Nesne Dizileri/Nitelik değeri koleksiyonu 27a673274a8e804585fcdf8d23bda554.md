# Nitelik değeri koleksiyonu

Nesne dizileriyle çalışırken yaygın görevlerden biri, belirli bir özelliğin tüm değerlerini **bir dizi** olarak toplamaktır.

Örneğin: Kitapları tanımlayan bir dizi içinden tüm başlıkları veya tüm derecelendirme puanlarını almak.

Bunun için yapılması gerekenler:

1. Değerleri saklamak için boş bir dizi oluşturun
2. Nesne dizisini bir döngüyle gezin
3. Her turda, ilgili özelliğin değerini diziye ekleyin

Örneğin, `books` koleksiyonundaki tüm kitapların başlıklarının bir listesini alalım.

```
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", , rating: 6.8 }
];

const titles = [];

for (const book of books) {
	titles.push(book.title)
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]
```

Belirli bir özelliğin tüm nesnelerden gelen değerlerin bir dizi şeklinde çıkacak.

Tüm koleksiyonumuzun ortalama derecesini öğreneceğiz. Bunun için tüm dereceleri toplamalı ve aldığımız değeri kitap sayısına bölmeliyiz.

```
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", , rating: 6.8 }
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(averageRating); // 8
```

# **Görev**

`getAllPropValues(propName)` fonksiyonunu yazın, bu fonksiyon tek bir `propName` parametresi alan, özellik adı (anahtar) olan bir fonksiyondur. Fonksiyon, `products` dizisindeki her bir nesnenin bu adla bir özelliğe sahip olması durumunda, bu özelliğin tüm değerlerinin bir dizisini döndürmelidir. Nesnelerde bu ada sahip özellikler yoksa, fonksiyon boş bir dizi döndürmelidir.

`getAllPropValues(propName)` fonksiyonu, bir `propName` parametresi alır - özellik adı (anahtar). Fonksiyon, `name` - ürün adı, `price` - fiyat ve `quantity` - miktar gibi özelliklere sahip `products` dizisini içerir.

Fonksiyonun kodunu, `propName` olarak belirtilen özellik adından her bir `products` dizisindeki nesneden tüm değerlerin bir dizisini döndürecek şekilde tamamlayın. Nesnelerde bu ada sahip özellikler bulunmuyorsa, fonksiyon boş bir dizi döndürmelidir.

# **Testler**

- `getAllPropValues(propAdı)` adlı fonksiyon açıklandı.
- `getAllPropValues("name")` çağrısı `["Radar", "Scanner", "Droid", "Grip"]` değerini döndürür.
- `getAllPropValues("quantity")` çağrısı `[4, 3, 7, 9]` değerini döndürür.
- `getAllPropValues("price")` çağrısı `[1300, 2700, 400, 1200]` değerini döndürür.
- `getAllPropValues("category")` çağrısı `[]` değerini döndürür.

```
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const values = [];

  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
    values.push(product[propName]);
    }
  }

  return values;
}
```