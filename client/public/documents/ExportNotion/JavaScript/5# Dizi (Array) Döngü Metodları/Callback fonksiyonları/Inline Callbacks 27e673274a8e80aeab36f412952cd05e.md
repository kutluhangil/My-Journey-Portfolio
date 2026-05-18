# Inline Callbacks

Geri çağırma (callback) fonksiyonu küçükse ve yalnızca bir argüman olarak geçirilmesi gerekiyorsa, callback fonksiyonunun çağrısı sırasında doğrudan bildirilebilir. Bu tür işlevlere satır içi geri çağrılar (inline callbacks) denir. Yalnızca parametre değeri olarak kullanılabilir ve kodda başka hiçbir yerde bulunmazlar.

```
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// Inline fonksiyon greet'i callback olarak geçiyoruz
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Inline fonksiyon notify'ı callback olarak geçiyoruz
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});
```

# **Görev**

`makePizza` fonksiyonunun iki parametresi vardır: `pizzaName` - pizzanın adı - ve `callback` - bir geri arama işlevi. Çalışma zamanında, `makePizza` bu callback fonksiyonunu çağırır ve `pizzaName` fonksiyonunu argüman olarak iletir.

`makePizza(pizzaName, callback)` fonksiyonuna yapılan ikinci çağrıyı, `eatPizza(pizzaName)` satır içi callback fonksiyonunu ikinci argüman olarak geçirerek tamamlayın. `eatPizza` geri çağrısı `"Eating pizza <pizza name>"` dizesini günlüğe kaydeder; burada `<pizza name>`, `pizzaName` parametresinin değeridir.

# **Testler**

- `makePizza` fonksiyonu şöyle tanımlanır
- `makePizza` fonksiyonu iki parametre alır
- `makePizza("Ultracheese")` çağrısı yapılırken ikinci argüman, tek bir parametre olan `pizzaName` ile `eatPizza` işlevidir

```
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese");
```