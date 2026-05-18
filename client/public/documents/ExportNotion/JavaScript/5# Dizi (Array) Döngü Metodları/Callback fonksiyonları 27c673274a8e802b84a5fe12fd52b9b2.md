# Callback fonksiyonları

[**Değer olarak fonksiyon**](Callback%20fonksiyonlar%C4%B1/De%C4%9Fer%20olarak%20fonksiyon%2027c673274a8e8011b495fd94111c615a.md)

Bir kullanıcı adı kabul eden ve farklı mesajlar görüntüleyen `greet` ve `notify` adlı iki fonksiyon tanımlayalım:

```
function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}
```

Ardından, iki parametre alacak bir `registerGuest` fonksiyonu tanımlayalım:

```
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
```

- `name` — kullanıcı adı
- `callback` — `registerGuest` fonksiyonu içinde çağrılacak ve kullanıcı adını alacak olan fonksiyona yapılan referans

Şimdi `registerGuest` fonksiyonunu çağırırken `greet` ve `notify` fonksiyonlarını argüman olarak kullanalım:

```
function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet);// "Registering Mango!"// "Welcome Mango!"

registerGuest("Mango", notify);// "Registering Mango!"// "Dear Mango, your room will be ready in 30 minutes"
```

Burada, `greet` ve `notify` fonksiyonlarına referans olarak argüman geçiriyoruz. Bu fonksiyonlar `registerGuest` içinde `callback` parametresi aracılığıyla çağrılır.

**Callback fonksiyonu**, başka bir fonksiyona argüman olarak verilen ve bu fonksiyon tarafından çağrılan fonksiyondur.

Bu örnekte, `greet` ve `notify` fonksiyonları callback’tir, çünkü `registerGuest` fonksiyonuna argüman olarak aktarılırlar. `callback` parametresinin adı keyfi olabilir; önemli olan, bu değerin bir fonksiyon olmasıdır.

**Higher-order function (yüksek dereceli fonksiyon)**, parametre olarak başka fonksiyonlar alabilen veya fonksiyon döndürebilen bir fonksiyondur.

Bu örnekte `registerGuest`, parametre olarak bir fonksiyon aldığı için yüksek dereceli bir fonksiyondur.

# **Görev**

`makeMessage` fonksiyonu bir parametre alır - teslim edilecek pizzanın adı - `pizzaName` ve istemciye bir mesaj içeren bir dize döndürür.

`makeMessage` fonksiyonunu, ikinci parametre olarak bir callback fonksiyonu (`callback` parametresi) bekleyecek ve çağrısının sonucunu döndürecek şekilde genişletin. `deliverPizza` veya `makePizza` fonksiyonları `makeMessage` fonksiyonuna bir geri çağırma olarak aktarılacak ve teslim edilecek bitmiş pizzanın adını bir argüman olarak bekleyecektir.

# **Testler**

- `deliverPizza` fonksiyonu tanımlanır
- `makePizza` fonksiyonu tanımlanır
- `makeMessage` fonksiyonu tanımlanır
- `makeMessage` fonksiyonu göreve göre adlandırılmış iki parametre alır, `pizzaName` ve `callback`.
- `makeMessage("Royal Grand", makePizza)` çağrısı `"Pizza Royal Grand is being prepared, please wait..."` dizesini döndürür.
- `makeMessage("Ultracheese", deliverPizza)` çağrısı `"Delivering Ultracheese pizza.` dizesini döndürür.

```
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
```

[**Inline Callbacks**](Callback%20fonksiyonlar%C4%B1/Inline%20Callbacks%2027e673274a8e80aeab36f412952cd05e.md)

[**forEach(callback) metodu**](Callback%20fonksiyonlar%C4%B1/forEach(callback)%20metodu%2027e673274a8e80359a6ef50728493a81.md)