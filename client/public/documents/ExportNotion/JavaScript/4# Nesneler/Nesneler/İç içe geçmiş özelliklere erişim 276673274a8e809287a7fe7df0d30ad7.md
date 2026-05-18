# İç içe geçmiş özelliklere erişim

İç içe geçmiş özelliklere erişmek için, nokta (`.`) ile ayrılmış bir çağrı zinciri kullanılır.

Bir özelliğin değeri başka bir nesne olduğunda bu zincir kullanılarak derinlemesine erişim sağlanabilir.

Örneğin, bir kullanıcının ülke bilgisine erişmek için şu sözdizimini kullanırız: `user.location.country`

Burada:

- `user.location` → `location` özelliğindeki nesneye referans verir.
- `user.location.country` → bu nesnenin içindeki `country` özelliğine referanstır.
- Yani her “nokta”, bir adım daha içeriye ilerlemeyi ifade eder.

```
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"
```

**Değeri bir dizi olan özellikler:**

Bir özelliğin değeri bir dizi ise, aşağıdaki örneğimizde bu **diziye** erişilecektir: `user.hobbies`

```
const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]
```

Dizinin öğelerine **köşeli parantez** ve index kullanarak erişebilirsiniz: `user.hobbies[0];`

```
const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"
```

Bir dizinin **özelliklerini** ve yöntemlerini de kullanabilirsiniz; örneğin, uzunluk değerini length özelliğinden alabilirsiniz: `user.hobbies.length;`

```
const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies);// 3
```

# **Görevler**

`apartment` nesnesi, 6 özelliğe sahip bir daireyi tanımlar: `imgurl`, `descr`, `rating`, `price`, `tags` ve `owner`. `owner` özelliği de bir nesnedir.

Tanımlanan değişkenleri `apartment` nesnesinin ilgili özelliklerine erişen ifadelere ayarlayarak kodu tamamlayın.

- `ownerName` - daire sahibinin adı;
- `ownerPhone` - mal sahibinin telefon numarası;
- `ownerEmail` - sahibinin e-postası;
- `numberOfTags` - `tags` özelliğindeki dizi elemanlarının sayısı;
- `firstTag` - `tags` özelliğindeki dizinin ilk elemanı;
- `lastTag` - `tags` özelliğindeki dizinin son elemanı.

# **Testler**

- `apartment` değişkeni `const` kullanılarak tanımlanır
- `apartment` değişkeninin değeri bir nesnedir
- `ownerName` değişkeni `const` kullanılarak tanımlanır
- `ownerName` değişkeninin değeri `"Henry"` dizesidir.
- `ownerPhone` değişkeni `const` kullanılarak tanımlanır.
- `ownerPhone` değişkeninin değeri `"982-126-1588"`dir.
- `ownerEmail` değişkeni `const` ile tanımlanır.
- `ownerEmail` değişkeninin değeri `"henry.carter@aptmail.com"`dur.
- `const` ile `numberOfTags` değişkeni deklare edildi
- `numberOfTags` değişkeninin değeri `3`tür.
- `const` ile `firstTag` değişkeni tanımlanır
- `firstTag` değişkeninin değeri `"premium"`dur
- `const` ile tanımlanan `lastTag` değişkeni
- `lastTag` değişkeninin değeri `top`tur.

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

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];
```