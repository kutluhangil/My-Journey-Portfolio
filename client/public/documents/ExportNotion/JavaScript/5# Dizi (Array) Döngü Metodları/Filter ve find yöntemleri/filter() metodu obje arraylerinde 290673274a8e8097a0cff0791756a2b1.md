# filter() metodu obje arraylerinde

Objeler dizisinde belirli bir özelliğin değerine göre filtreleme gerçekleştirilir. Sonuç olarak, filtrelenmiş objelerden oluşan yeni bir dizi oluşturulur.

Test notlarına sahip öğrenci dizisiyle ilgili bir örneği ele alalım. Aşağıdakilerden birine sahip olan öğrencileri filtrelememiz gerekiyor:

- Yüksek notlar (80 ve üzeri),
- Düşük notlar (50'nin altı)
- Orta notlar (50 ile 80 arasında)

```
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best);// Mango ve Kiwi adlarıyla nesneler dizisi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst);// Ajax ile tek bir nesne dizisi// Objenin özelliklerini çözmek için callback fonksiyonunda kullanışlıdır
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average);// Poly ve Houston adlarıyla bir dizi nesne
```

Yukarıdaki örnekte, `filter()` yöntemi, **`students`** dizisindeki nesnelerle yeni bir dizi oluşturur ve **`score`** özelliğine dayalı olarak belirlenen koşulları karşılayanları seçer. Koşullar, **`filter()`**'a argüman olarak iletilen bir geri çağrı işlevi tarafından belirlenir.

`best` değişkenine, `score` özelliğinin değeri `HIGH_SCORE`'dan büyük veya eşit olan nesneler filtrelenir. Sonuç olarak, adları `"Mango"` ve `"Kiwi"` olan nesnelerin bulunduğu bir dizi elde edilir.

`worst` değişkenine, `score` özelliğinin değeri `LOW_SCORE`'dan küçük olan nesneler eklenir. Sonuç olarak, `"Ajax"` adına sahip bir nesne içeren bir dizi elde edilir.

`average` değişkenine, `score` özelliğinin değeri `LOW_SCORE`'dan büyük veya eşit ancak `HIGH_SCORE`'dan küçük olan nesneler eklenir. Sonuç olarak, `"Poly"` ve `"Houston"`adlarına sahip nesnelerin bulunduğu bir dizi elde edilir.

# **Görev**

`filter()` yöntemini kullanarak kodu şu şekilde tamamla:

- `topRatedBooks` değişkeninde, derecelendirmesi (`rating` özelliği) `MIN_RATING`değişkeninin değerinden büyük veya eşit olan kitapların bir dizisi oluşturulmalıdır.
- `booksByAuthor` değişkeninde, yazarın adının (`author` özelliği) `AUTHOR`değişkenindeki değerle eşleştiği kitapların bir dizisi oluşturulmalıdır.

# **Testler**

- `books` değişkeni tanımlanmıştır.
- `books` değişkeninin değeri bir nesne dizisidir.
- `MIN_RATING` değişkeni tanımlanmıştır.
- `MIN_RATING` değişkeninin değeri `8` sayısıdır.
- `AUTHOR` değişkeni tanımlanmıştır.
- `AUTHOR` değişkeninin değeri `"Bernard Cornwell"` dizesidir.
- `topRatedBooks` değişkeni tanımlanmıştır.
- `topRatedBooks` değişkeninin değeri, `8`'den yüksek bir dereceye sahip kitapların bir dizisidir.
- `booksByAuthor` değişkeni tanımlanmıştır.
- `booksByAuthor` değişkeninin değeri, `"Bernard Cornwell"` tarafından yazılmış kitapların bir dizisidir.
- `books` dizisini filtrelemek için `filter()` yöntemi kullanılmıştır.

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
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);
```

# **Görev**

Bu nesne dizisini, görev sırasında işlev çağrısında `users` parametresine ileteceğiz.

```
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
```

`getUsersWithEyeColor(users, color)` fonksiyonunu şöyle tamamla: göz rengi özelliği (`eyeColor`) belirtilen `color` değeriyle eşleşen kullanıcılar dizisini döndürsün.

# **Testler**

- `getUsersWithEyeColor` değişkeni tanımlandı.
- `getUsersWithEyeColor` değişkenine `(users, color)` parametreleriyle ok işaretli fonksiyon atandı.
- `users` parametresi üzerinde döngü için `filter()` yöntemi kullanıldı.
- Eğer `color` değeri `"blue"` ise, fonksiyon `Moore Hensley`, `Sharlene Bush` ve `Carey Barr` isimli kullanıcıların nesnelerini içeren bir dizi döndürecek.
- Eğer `color` değeri `"green"` ise, fonksiyon `Ross Vazquez` ve `Elma Head` isimli kullanıcıların nesnelerini içeren bir dizi döndürecek.
- Eğer `color` değeri `"brown"` ise, fonksiyon `Blackburn Dotson` ve `Sheree Anthony`isimli kullanıcıların nesnelerini içeren bir dizi döndürecek.
- Eğer `color` değeri farklı bir dize ise, fonksiyon boş bir dizi döndürecek.
- Rasgele ancak geçerli argümanlar kullanarak yapılan fonksiyon çağrısı doğru değeri döndürür.

```
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
```