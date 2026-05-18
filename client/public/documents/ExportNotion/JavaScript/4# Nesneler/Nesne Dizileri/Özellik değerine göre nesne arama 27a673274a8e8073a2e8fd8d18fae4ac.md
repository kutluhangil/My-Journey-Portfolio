# Özellik değerine göre nesne arama

Nesne dizileriyle çalışırken yaygın görevlerden biri, belirli bir **özellik değerine** sahip nesneyi bulmaktır. Örneğin bir kitabı yazar adına göre aramak isteyebilirsiniz.

Bu işlem için:

- Dizi bir döngüyle gezilir
- Her nesnede, aranan değeri kontrol eden bir koşul uygulanır

```
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title)
		console.log(book.rating)
	}
}
```

Yukarıdaki örnekte, `for döngüsü`, `author` özelliğinin değeriyle `authorToSearchFor` değerini karşılaştırarak `true` döndürünceye kadar dizideki nesneleri geçer. Gerekli yazarı içeren nesne bulunduğunda, zaten bulunan nesneyle çalışabileceğimiz `if` bloğu çalıştırılır.

# **Görev**

`getProductPrice(productName)` fonksiyonunu tanımlayın, bu fonksiyon bir `productName` parametresi alır - ürün adı. Fonksiyon, `products` dizisinde adı (property `name`) verilen ürünün nesnesini arar ve onun fiyatını (property `price`) döndürür. Eğer böyle bir isme sahip ürün bulunamazsa, fonksiyon `null` döndürmelidir.

`getProductPrice(productName)` fonksiyonu, bir `productName` parametresi alır - ürün adı. Fonksiyon, `name` - ürün adı, `price` - fiyat ve `quantity` - miktar gibi özelliklere sahip `products` dizisini içerir.

Fonksiyonun kodunu, `products` dizisinde belirli bir isme sahip ürün nesnesini arayacak ve onun fiyatını ( `price` özelliği) döndürecek şekilde tamamlayın. Bu isme sahip bir ürün bulunamazsa, fonksiyon`null` döndürmelidir.

# **Testler**

- `getProductPrice(productName)` adlı fonksiyon açıklanmıştır.
- `getProductPrice("Radar")` çağrısı `1300` değerini döndürür.
- `getProductPrice("Grip")` çağrısı `1200` değerini döndürür.
- `getProductPrice("Scanner")` çağrısı `2700` değerini döndürür.
- `getProductPrice("Droid")` çağrısı `400` değerini döndürür.
- `getProductPrice("Engine")` çağrısı `null` değerini döndürür.

```
function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (productName === product.name) {
      return product.price;
    }
  }

  return null;
}
```