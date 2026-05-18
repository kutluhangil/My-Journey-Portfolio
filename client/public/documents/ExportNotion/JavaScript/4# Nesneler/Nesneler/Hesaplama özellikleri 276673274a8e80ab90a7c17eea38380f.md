# Hesaplama özellikleri

Bazı durumlarda, bir nesneyi tanımlarken özelliğin adı dinamik olabilir — yani bir değişkenin değeri ya da bir fonksiyonun sonucu olarak belirlenir.

Eskiden bu gibi durumlarda önce nesneyi tanımlayıp, ardından köşeli parantez kullanarak özelliği eklemek gerekirdi. Ancak bu yöntem her zaman pratik ve okunabilir değildi.

```
const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Henry Sibola";
console.log(user.name); // "Henry Sibola"
```

Hesaplanan **özellikler** için kullanılan sözdizimi, gereksiz kod tekrarlarını önlemeye ve bazı durumlarda kodu sadeleştirmeye yardımcı olur.

Bir hesaplanan özelliğin değeri, geçerli herhangi bir ifade olabilir.

```
const propName = "name";
const user = {
  age: 25,
    // bu özelliğin anahtarı propName değişkeninin değerinden alınacaktır
  [propName]: "Henry Sibola",
};

console.log(user.name); // "Henry Sibola"
```

# **Görev**

Sonuç olarak iki özelliğe sahip olacak şekilde `credentials` nesnesini bildirmek için kodu tamamlayın: isimleri `emailInputName` ve `passwordInputName` değişkenlerinde saklanan `email` ve `password`.

`e-mail` özelliğinin değeri `henry.carter@aptmail.com` dizesi ve `parola` özelliğinin değeri `jqueryismyjam` dizesi olmalıdır.

# **Testler**

- `credentials` değişkeni tanımlanır
- `credentials` değişkeninin değeri bir nesnedir
- `credentials` nesnesi `email` özelliğini içerir
- İç içe `email` özelliğinin değeri `"henry.carter@aptmail.com"` dizesidir
- `credentials` nesnesi `password` özelliğini içerir
- İç içe `password` özelliğinin değeri `"jqueryismyjam"` dizesidir

```
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {};
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
```