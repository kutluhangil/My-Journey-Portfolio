# Nesne Dizileri

Nesneler, bir varlığın açıklayıcı özelliklerini bir arada tutmamıza olanak tanır. Örneğin bir kullanıcıyı, kitabı veya arabayı tanımlamak için kullanılabilirler.

Benzer varlıkların bir grubunu temsil etmek için **nesne dizileri** kullanılır.

Bir kütüphane örneğini düşünün: Her kitap, başlık, yazar ve puan gibi bilgileri içeren ayrı bir nesnedir.

Eğer bir kitap bir nesne ise, kütüphane — kitapların yer aldığı bir **nesne dizisi** olur.

```
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  }
];

```

Geliştiricinin günlük rutin görevlerinin standart bir parçası, homojen nesneler dizisiyle çalışmaktır. Bu, dizideki tüm nesnelerin garantili olarak aynı özelliklere sahip olacağı, ancak farklı değerlere sahip olacağı anlamına gelir.

Bu tür bir diziyi dolaşmak için standart bir `for...in` döngüsü kullanılır. Her bir nesnenin özellik değerlerine "nokta operatörüyle" (bkz. **Objeler** konusu. *Nokta operatörüyle özelliklere erişim*) erişebilirsiniz, çünkü her nesnede özelliklerin ve isimlerinin kümesi aynı olacaktır, yalnızca değerler farklı olacaktır.

```
for (const kitap of kitaplar) {
  console.log(kitap);// Kitap nesnesiconsole.log(kitap.baslik);// Başlıkconsole.log(kitap.yazar);// Yazarconsole.log(kitap.ortalama_puan);// Değerlendirme
}
```

# **Görev**

`colors` adlı nesne dizisi bir dizi rengi içerir. Her renk, ilgili renk değerlerine sahip olan `hex` ve `rgb` özelliklerine sahiptir.

Döngü kullanarak `colors` dizisini gezin, `for...of` kullanın. Tüm nesnelerin `colors` dizisinden gelen nesnelerin `hex` özellik değerlerini `hexColors` dizisine ekleyin ve`rgb` özellik değerlerini `rgbColors` dizisine ekleyin.

# **Testler**

- `colors` değişkeni tanımlı olmalıdır
- `colors` değişkeninin değeri bir dizi olmalıdır
- `hexColors` değişkeni tanımlanmalıdır
- `hexColors` değişkeninin değeri `["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]` olmalıdır
- `rgbColors` değişkeni tanımlanmalıdır
- `rgbColors` değişkeninin değeri `["244,67,54", "33,150,243", "76,175,80", "255,235,59"]` olmalıdır

```
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
```

[**Özellik değerine göre nesne arama**](Nesne%20Dizileri/%C3%96zellik%20de%C4%9Ferine%20g%C3%B6re%20nesne%20arama%2027a673274a8e8073a2e8fd8d18fae4ac.md)

[**Nitelik değeri koleksiyonu**](Nesne%20Dizileri/Nitelik%20de%C4%9Feri%20koleksiyonu%2027a673274a8e804585fcdf8d23bda554.md)