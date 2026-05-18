# Object.keys() Metodu

JavaScript’te yerleşik olarak gelen `Object` sınıfı, nesnelerle çalışmayı kolaylaştıran birkaç kullanışlı metoda sahiptir.

Bunlardan biri olan `Object.keys(object)`, verilen nesnenin **özellik anahtarlarını içeren bir dizi** döndürür.

Eğer nesnede hiç özellik yoksa, bu metod boş bir dizi verir.

```
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

```

`Object.keys()` ile `for...of` döngüsü birleştirilerek, `for...in` kullanmadan nesnedeki özelliklerde gezinebilirsiniz:

```
const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys)
  console.log(key);// Anahtar
  console.log(book[key]);// Özellik değeri
}
```

Bu yöntemde, anahtarları içeren dizi üzerinden geçerek her yinelemede hem anahtarı hem de ilgili özelliğin değerini elde edersiniz.

### **🔹 Kısaca fark**

- **for...in** → nesneyi direkt dolaşır.
- **Object.keys() + for…of** → önce anahtarları **diziye çevirir**, sonra bu dizi üzerinde dolaşır.

Avantajı → Object.keys() ile elde edilen dizi üzerinde ister for...of, ister map, forEach gibi **dizi metodlarını** kullanabilirsin.

---

# **Görev**

`Object.keys()` metodunu ve `for...of` döngüsünü kullanarak `apartment` nesnesini gözden geçir. `apartment` nesnesinin özelliklerinin anahtarlarını içeren bir dizi olan `keys` değişkenine atayın ve tüm özelliklerinin değerlerini içeren bir `values` dizisine ekleyin.

# **Testler**

- `apartment` değişkeni tanımlandı.
- `apartment` değişkeninin değeri bir nesnedir.
- `keys` değişkeni tanımlandı.
- `keys` değişkeninin değeri `["descr", "rating", "price"]` dizisidir.
- `keys` değişkeninin değeri `Object.keys()` yöntemi kullanılarak elde edildi.
- `values` değişkeni tanımlandı.
- `values` değişkeninin değeri `["Şehir merkezinde geniş daire", 4, 2153]` dizisidir.
- `values` değişkeninin değeri `for...of` döngüsü kullanılarak elde edildi.

```
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}
```

# **Görev**

`countProps(object)` fonksiyonunun yeniden düzenlemesini yaparak, `for ... in` döngüsüyle anahtarları dolaşmayı `Object.keys()` yöntemiyle değiştirin ve özelliklerin bir dizi içine alınmasını sağlayın.

Fonksiyon, `object` içindeki özelliklerin sayısını döndürmelidir.

# **Testler**

- `countProps(object)` fonksiyonu tanımlanmıştır.
- `countProps({})` çağrısı `0` döndürmelidir.
- `countProps({ name: "Mango", age: 2 })` çağrısı `2` döndürmelidir.
- `countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })` çağrısı `3` döndürmelidir.
- Fonksiyon, `Object.keys()` yöntemini kullanır ve muhtemelen `for...of` döngüsünü kullanır.

```
function countProps(object) {
  return Object.keys(object).length;
}
```