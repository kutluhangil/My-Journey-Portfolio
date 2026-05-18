# Özel Mülkler - (Private değerler)

Bir otomobil sürücüsü gaz pedalına basar - ve araba hızlanır. Hava sistemini kolayca ve basit bir şekilde kontrol edebilir, hızı gösteren bir panel görebilir vb. Bununla birlikte, aracın içindeki arayüzün bu kadar kullanışlı bir şekilde kullanılabilmesi için birçok işlem ve süreç yürütülür.

**Kapsülleme** - OOP paradigmasıdır ve sınıfın içteki uygulamasının ayrıntılarını dış kodlardan gizleme prensibini içerir. Kapsülleme, sadece sınıf içinde erişilebilen özel özellikler ve metotlarla gerçekleştirilir.

Bu sınıfı kullanan diğer geliştiricinin, yalnızca sınıfın genel arayüzüne - sınıfın genel özellik ve metotları kümesine erişmesi gerekir.

Kullanıcının posta adresinin dışarıdan doğrudan değişime kapalı olması gerektiğini varsayalım, yani özel olması gerektiğini varsayalım. Özellik adının başına `#`sembolünü ekleyerek onu özel hale getiriyoruz. Özel bir özelliğin tanımını, yapıcı içinde başlangıç öncesi yapmak zorunludur.

```
class User {
  // Kamu mülklerinin isteğe bağlı ilanı
  name;
  // Özel mülklerin zorunlu ilanı
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango.name); // "Mango"
console.log(mango.#email); // Hata oluştu, bu özel bir özelliktir
```

Özel bir özelliğin değerini almak veya değiştirmek için **genel yöntemler** kullanılır.

```
class User {
  name;
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango.getEmail()); // "mango@mail.com"
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // "mango@supermail.com"
```

Örnek:

`Car` sınıfını şu şekilde yeniden düzenleyin: `brand` özelliğini özel olarak tanımlayın ve bu özelliği okumak ve değiştirmek için genel arayüze iki metod ekleyin.

- `getBrand()` - Özel `brand` özelliğinin değerini döndürür.
- `changeBrand(newBrand)` - Özel `brand` özelliğinin değerini `newBrand` olarak değiştirir.
- - `Car` sınıfını tanımlanmaldır.
- `brand` özelliği `Car` sınıfında özel olarak tanımlanmış olmalıdır.
- Sınıf yapıcısı (`constructor`), `brand`, `model` ve `price` özelliklerine sahip bir nesneyi kabul etmelidir.
- `new Car({ brand: "Audi", model: "Q3", price: 36000 })` çağrısı sonucunda bir nesne oluşturulduğunda, `{ model: "Q3", price: 36000 }` özelliklerine sahip olmalıdır.
- `new Car({ brand: "bmw", model: "X5", price: 58900 })` çağrısı sonucunda bir nesne oluşturulduğunda, `{ model: "X5", price: 58900 }` özelliklerine sahip olmalıdır.
- `new Car({ brand: "Nissan", model: "Murano", price: 31700 })` çağrısı sonucunda bir nesne oluşturulduğunda, `{ model: "Murano", price: 31700 }` özelliklerine sahip olmalıdır.
- Örnekte `brand` adlı bir genel özellik bulunmamalıdır.
- `getBrand()` metodu, özel `brand` özelliğinin değerini döndürmelidir.
- `changeBrand("Honda")` metodu, özel `brand` özelliğinin değerini `"Honda"` olarak değiştirmelidir.

Aşağıda **istenen tüm şartları eksiksiz sağlayan doğru çözüm** yer alıyor ✔️

(brand **özel (private)** alan olarak tanımlanmıştır)

---

## **✅ Güncellenmiş Car Sınıfı (Private Field ile)**

```
class Car {
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}
```

---

## **🧪 Beklenen Davranışlar**

### **🔹 Nesne oluşturma**

```
const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(audi);
// { model: "Q3", price: 36000 }
```

```
const bmw = new Car({ brand: "BMW", model: "X5", price: 58900 });
console.log(bmw);
// { model: "X5", price: 58900 }
```

```
const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(nissan);
// { model: "Murano", price: 31700 }
```

✔️ Dikkat: **brand görünmüyor** (çünkü özel)

---

### **🔹 Genel (public)**

### **brand**

### **özelliği yok**

```
audi.brand; // undefined
```

✔️ Şart sağlandı

---

### **🔹 Özel brand okuma**

```
audi.getBrand();
// "Audi"
```

---

### **🔹 Özel brand değiştirme**

```
audi.changeBrand("Honda");
audi.getBrand();
// "Honda"
```

---

## **🔍 Neden Doğru?**

- #brand → **private field**
- Dışarıdan erişilemez ❌
- Sadece sınıf içinden erişilebilir ✅
- getBrand / changeBrand → **genel arayüz (public API)**

---

## **🧠 Mini Ezber**

```
#property → özel (private)
this.#property → sadece sınıf içinde
```

---

## **🎯 Kısa Özet**

- brand gizli ✔️
- model, price açık ✔️
- Okuma → getBrand() ✔️
- Güncelleme → changeBrand() ✔️

---