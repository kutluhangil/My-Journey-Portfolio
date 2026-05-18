# Sınıf metodları

Gelecekteki örnek özellikleriyle çalışmak için sınıf metodları kullanılır.

**Sınıf metodları** - Bu, örneğin bir prototipinde mevcut olacak fonksiyonlardır. Bunlar, kurucudan sonra istenilen sırayla bildirilir. Nesne yöntemi sözdiziminden farklı olarak (virgülle ayrılmış olmaları), sınıf yöntemleri herhangi bir özel sembolle ayrılmaz.

`User` sınıfında metodlarının nasıl kullanılabileceğine bir örnek üzerinde duruluyor.

```
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // getEmail metodu
  getEmail() {
		// ...
  }

  // changeEmail metodu
  changeEmail(newEmail) {
		// ...
  }
}
```

`this` anahtar kelimesi, yöntemlerin bir nesne örneği bağlamında çağrılacağı için yöntemlerin özelliklerine erişmek için kullanılır.

```
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
```

Sınıfın belirtilen yöntemlerini kullanarak oluşturulan bir örneği, onları çağıran nesnenin özelliklerine erişecek şekilde kullanabilirsiniz.

```
const mango = new User({
	name: "Mango",
	email: "mango@mail.com"
});

console.log(mango.getEmail()); // "mango@mail.com"

mango.changeEmail("new@mail.com");

console.log(mango.getEmail()); // "new@mail.com"
```

Soru: 

`Car` sınıfına şu iki metodu ekleyin:

- `getPrice()` - Çağıran nesnenin `price` özelliğinin değerini döndürür.
- `changePrice(newPrice)` - Çağıran nesnenin `price` özelliğinin değerini `newPrice`parametresi ile günceller.
- `Car` sınıfında `getPrice` metodu tanımlanmalıdır.
- `getPrice` metodu, onu çağıran sınıfın örneğinin `price` özelliğinin değerini döndürür
- `Car` sınıfında `changePrice` metodu tanımlanmalıdır.
- `changePrice` metodu, onu çağıran sınıfın örneğinin `price` özelliğinin değerini değiştirmelidir.

İstenen tüm şartları karşılayan **doğru ve temiz çözüm** aşağıdadır ✔️

---

## **✅ Güncellenmiş Car Sınıfı**

```
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}
```

---

## **🧪 Beklenen Davranış**

```
const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });

audi.getPrice();
// 36000

audi.changePrice(35000);
audi.getPrice();
// 35000
```

---

## **🔍 Neden Doğru?**

- getPrice()
    
    → **Çağıran nesnenin** price değerini döndürür
    
- changePrice(newPrice)
    
    → **Çağıran nesnenin** price değerini günceller
    
- this → her zaman **o anki örneği** temsil eder

---

## **🧠 Mini Ezber**

```
getX()    → return this.x
changeX(v) → this.x = v
```

---