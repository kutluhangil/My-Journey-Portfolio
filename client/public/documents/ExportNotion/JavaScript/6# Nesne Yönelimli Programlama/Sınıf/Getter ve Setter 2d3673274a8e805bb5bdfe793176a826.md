# Getter ve Setter

Getter ve setter, özelliklerle etkileşim için yöntemlerin özel bir tanımlama sözdizimidir. Getter ve setter, bir sınıfın genel bir özelliğini taklit ederken, diğer özelliklerle daha kullanışlı bir şekilde etkileşim sağlar.

```
class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Getter email
  get email() {
    return this.#email;
  }

  // **Setter** email
  set email(newEmail) {
    this.#email = newEmail;
  }
}
```

Yukarıdaki örnekte `email` adında bir getter ve setter bildirilmiştir. Getter ve setter bildirmek için özellik adının önüne ilgili anahtar kelimeler olan `get` ve `set`yazılmalıdır. Bu yöntemlerin içinde:

- Getter ile özel `#email` özelliğinin değerini döndürüyoruz.
- Setter ile değerini değiştiriyoruz.

Getter ve setter'ları, onlarla çalıştıkları özelliğin adıyla aynı şekilde adlandırmak iyi bir uygulama olarak kabul edilir. Bu, kodun okunmasını ve anlaşılmasını kolaylaştırır. Diğer geliştiriciler, aynı adı taşıyan getter veya setter'ı gördüklerinde, bu yöntemin belirli bir özelliğe erişim için olduğunu kolayca anlayabilirler. Örneğin, özel `#email`özelliği için getter ve setter'a basitçe `email` adını vermek en mantıklısıdır.

```
Getter ve setter'ın adı aynı olmalıdır. Getter ve setter'ların, onlarla çalıştıkları özelliğin adıyla aynı şekilde adlandırılması daha iyidir. Getter, setter'sız var olabilir; aynı şekilde setter, getter'sız olabilir.

```

Bir örneği ele alalım: Getter, özelliğin değerini almaya çalıştığımızda çalışır, setter ise değerini değiştirmeye çalıştığımızda çalışır.

```
const mango = new User({
	name: "Mango",
	email: "mango@mail.com"
});

console.log(mango.email); // mango@mail.com

mango.email = "mango@supermail.com";

console.log(mango.email); // mango@supermail.com
```

- `mango.email`'e erişildiğinde, `get email() {...}` getter'ı çağrılır ve kodu çalıştırılır.
- `mango.email = "mango@supermail.com"` yazmaya çalışıldığında, `set email(newEmail) {...}` setter'ı çağrılır ve "[mango@supermail.com](mailto:mango@supermail.com)" dizesi `newEmail` parametresinin değeri haline gelir.

Bu yöntemin avantajı, bunların metodlar olmasıdır. Bu nedenle, yazma veya okuma sırasında doğrudan özellikle işlem yapmaktan farklı olarak, herhangi bir ek kontrolle ek kod çalıştırılabilir.

```
set email(newEmail){
  if(newEmail === "") {
    console.log("Hata! E-posta boş olamaz!");
    return;
  }

  this.#email = newEmail;
}

```

`Getterler ve setterler, özellikle özel olanların, değerlerini okuma ve değiştirme işlemleri için kullanışlıdır, ancak özellikle dizi veya nesne tutan özelliklerle çalışırken uygun değildir.`

---

## **🧠 Getter & Setter — Temel Mantık (Not)**

### **✅ Getter nedir?**

- Bir **sınıf özelliğinin değerini okumak** için kullanılan özel metottur
- get anahtar kelimesi ile tanımlanır
- Özelliğe **fonksiyon gibi değil, property gibi** erişilir

```
get prop() { ... }
```

---

### **✅ Setter nedir?**

- Bir **sınıf özelliğinin değerini değiştirmek** için kullanılan özel metottur
- set anahtar kelimesi ile tanımlanır
- Yeni değer **parametre olarak** alınır

```
set prop(value) { ... }
```

---

### **🏷️ Getter & Setter Adlandırma Kuralı**

- **Getter ve setter aynı ada sahip olmalıdır**
- Bu ad:
    - Genellikle üzerinde çalıştıkları özelliğin adı olur
    - Ama bu **zorunlu bir sözdizimi kuralı değildir**, sadece **iyi pratiktir**

```
get email() {}
set email(value) {}
```

---

### **🔐 Neden Kullanılır?**

- Özelliğin **doğrudan erişimini kontrol etmek**
- Okuma ve yazma sırasında **kontrol / doğrulama** yapmak
- **Encapsulation (kapsülleme)** sağlamak

---

### **📌 Mini Ezber**

```
get → okur
set → yazar
isimleri → aynı
```

---

Örnek:

`Car` sınıfını yeniden düzenleyin. Ek olarak, `#brand` özel özelliğine `model` ve `price`özel özelliklerini ekleyin. Sınıfın genel arayüzünü standartlaştırın; `brand`, `model` ve `price` özelliklerini etkileşim için getter ve setter'larla değiştirin.

- `Car` sınıfını tanımlanmalıdr.
- `Car` sınıfında `brand` özel özelliği tanımlanmalıdır
- `Car` sınıfında `model` adlı özel bir özellik tanımlanmalıdır.
- `Car` sınıfında `price` özel özelliği tanımlanmaldır
- Sınıfın yapıcısı (`constructor`), `brand`, `model` ve `price` özelliklerine sahip bir nesneyi kabul etmelidir.
- `Car` sınıfında `brand` getter'ı tanımlanmalıdır.
- `Car` sınıfında `brand` ayarlayıcısı tanımlanmalıdır.
- `Car` sınıfında `model` getter'ı tanımlanmalıdır.

Aşağıda **istenen tüm maddeleri birebir karşılayan**, doğru ve “standart getter/setter” kullanan **düzeltilmiş Car sınıfı** var ✔️

(Verilen kodu doğru OOP + encapsulation mantığına göre yeniden düzenledim)

---

## **✅ Doğru Çözüm**

```
class Car {
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  // brand
  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  // model
  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  // price
  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}
```

---

## **🔍 Neden Verilen Kod Yanlıştı?**

Verilen kodda şu problemler vardı ❗

1. **model ve price private değildi**

```
this.model = params.model; // ❌ public
this.price = params.price; // ❌ public
```

1. **Getter / Setter standartları yoktu**

```
getBrand() ❌
changeBrand() ❌
```

👉 Görev açıkça şunu istiyor:

- **getter / setter**
- **aynı isim**
- **property gibi erişim**

---

## **🧠 Doğru Kullanım Şekli**

```
const car = new Car({
  brand: "Audi",
  model: "Q3",
  price: 36000
});

car.brand;        // getter → "Audi"
car.brand = "BMW"; // setter

car.model;        // "Q3"
car.price = 40000;
```

✔️ Dışarıdan **property gibi**

✔️ İçeride **kontrollü**

✔️ Tam encapsulation

---

## **📌 Mini Özet (Notluk)**

```
#brand, #model, #price → private
get prop() → okuma
set prop(v) → yazma
method yok → standart arayüz
```

---