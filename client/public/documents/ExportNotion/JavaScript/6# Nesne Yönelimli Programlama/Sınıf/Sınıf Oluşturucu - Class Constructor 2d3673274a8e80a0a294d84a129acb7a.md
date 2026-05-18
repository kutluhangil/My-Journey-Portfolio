# Sınıf Oluşturucu - Class Constructor

Sınıfın oluşturulma şekli görevinizle bağlantılıdır. Örneğimizde `User` sınıfı bir kullanıcıyı temsil ettiğinden, isim ve e-posta alanlarını ekleyeceğiz.

Sınıf örneğinin başlatılması için `constructor` metodu kullanılır.

Eğer **açıkça belirtilmezse**, varsayılan bir yapıcı oluşturulur - sınıf örneğini değiştirmeyen boş bir fonksiyon.

```
class User{
  // Sınıf yöntemi tanımlama sözdizimi
  constructor() {
		// ...
  }
}
```

`new` operatörü ile sınıfın çağrılması yeni bir nesne oluşturur ve otomatik olarak `constructor` metodu çağrılır.

```
class User {
  constructor() {
		console.log("constructor call")
  }
}

const mango = new User(); // "constructor call"
console.log(mango); // {}
```

`new User()` çağrılırken verilen argümanlar, `constructor` yöntemi için parametre değerlerine dönüşür.

```
class User{
  constructor(name, email) {
		console.log(name, email);
  }
}

const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
console.log(mango); // {}
```

Dikkat et, `constructor` metodu oluşturulan örnek içinde çağrılır.

```
class User {
  constructor(name, email) {
    // Örnek özelliklerin başlatılması
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
```

Bu şekilde, `this` constructor içinde yeni oluşturulan nesneye işaret eder.

Bu, her bir nesneye aynı adlarla fakat farklı değerlerle özellikler eklemeyi mümkün kılar.

`name` ve `email` özellikleri **genel özellikler** olarak adlandırılır, çünkü bunlar örnek nesnenin kendi özellikleridir.

AI tarafından:

---

## **1️⃣ Sınıf (class) Nedir?**

```
class User {}
```

👉 Bu bir **şablon**dur

👉 Henüz **kullanıcı değildir**

👉 Kullanıcı üretmek için kullanılır

> Kek kalıbı gibi düşün 🍰
> 

---

## **2️⃣ constructor Nedir?**

### **❓ Ne işe yarar?**

> Yeni nesne oluşturulurken çalışan ilk fonksiyon
> 
- Sınıfın **kurulum aşaması**
- Nesnenin **ilk hâlini hazırlar**

---

## **3️⃣ constructor Yazmazsak Ne Olur?**

```
class User {}
const u = new User();
```

✔️ JavaScript şunu otomatik yapar:

```
constructor() {}
```

➡️ **Boş bir constructor**

➡️ Nesne değişmeden oluşur

---

## **4️⃣ constructor Nasıl Yazılır?**

```
class User {
  constructor() {
    console.log("constructor call");
  }
}
```

### **Ne zaman çalışır?**

```
new User();
```

✔️ new → constructor’ı **otomatik çağırır**

📌 ÇIKTI:

```
constructor call
```

---

## **5️⃣ new Ne Yapar? (ÇOK ÖNEMLİ)**

```
new User()
```

Şu 3 şeyi yapar:

1️⃣ **Boş bir nesne oluşturur**

2️⃣ this → bu yeni nesneyi gösterir

3️⃣ constructor’ı çalıştırır

---

## **6️⃣ constructor Parametre Alabilir mi?**

Evet 👍

```
class User {
  constructor(name, email) {
    console.log(name, email);
  }
}

new User("Mango", "mango@mail.com");
```

📌 ÇIKTI:

```
Mango mango@mail.com
```

---

## **7️⃣ Parametreler Ne Olur?**

```
new User("Mango", "mango@mail.com");
```

➡️ Bu değerler:

```
constructor(name, email)
```

➡️ **name = “Mango”**

➡️ **email = “mango@mail.com”**

---

## **8️⃣ Asıl Amaç: Nesneye Özellik Eklemek**

```
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
```

### **Burada olan şey 👇**

- this → **yeni oluşturulan nesne**
- this.name → nesnenin özelliği
- this.email → nesnenin özelliği

---

## **9️⃣ Gerçek Sonuç**

```
const mango = new User("Mango", "mango@mail.com");

console.log(mango);
```

📌 ÇIKTI:

```
{ name: "Mango", email: "mango@mail.com" }
```

---

## **🔁 Birden Fazla Nesne**

```
const poly = new User("Poly", "poly@mail.com");
```

📌 ÇIKTI:

```
{ name: "Poly", email: "poly@mail.com" }
```

✔️ Aynı sınıf

✔️ Farklı nesneler

✔️ Farklı değerler

---

## **🧠 En Önemli Nokta (Ezber)**

> constructor içindeki this, her zaman yeni oluşturulan nesnedir
> 

---

## **🧩 Mini Özet**

```
class → şablon
constructor → kurulum fonksiyonu
new → nesne üretir
this → üretilen nesne
```

---

`Car` sınıfına üç parametre alan bir `constructor` metodu ekleyin:

- `brand` - araba markası
- `model` - araba modeli
- `price` - arabanın fiyatı

`Car` sınıfı, `brand`, `model` ve `price` adlı özelliklere sahip bir nesne oluşturmalıdır ve bu özellikler, `new` operatörü kullanılarak yeni bir örnek oluşturulduğunda argümanlardan değerlerini almalıdır.

- `Car` sınıfını tanımlanmalıdır.
- `Car` sınıfı `constructor` metoduna sahip olmalıdır.
- `new Car("Audi", "Q3", 36000)` çağrısı `{brand: "Audi", model: "Q3", price: 36000}` nesnesini oluşturur
- `new Car("BMW", "X5", 58900)` çağrısı `{brand: "BMW", model: "X5", price: 58900}`nesnesini oluşturur
- `new Car("Nissan","Murano", 31700)`çağrısı `{brand: "Nissan", model: "Murano", price: 31700}` nesnesini oluşturur

İstenen tüm koşulları karşılayan **doğru ve temiz çözüm** aşağıdadır ✔️

---

## **✅ Car Sınıfı (Constructor ile)**

```
class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
```

---

## **🧪 Beklenen Davranış**

```
new Car("Audi", "Q3", 36000);
// { brand: "Audi", model: "Q3", price: 36000 }

new Car("BMW", "X5", 58900);
// { brand: "BMW", model: "X5", price: 58900 }

new Car("Nissan", "Murano", 31700);
// { brand: "Nissan", model: "Murano", price: 31700 }
```

---

## **🔍 Neden Doğru?**

- class Car → sınıf tanımlandı
- constructor(brand, model, price) → 3 parametre alır
- this.brand = brand → yeni oluşturulan nesneye özellik ekler
- new Car(...) → her çağrıda **yeni ve bağımsız bir nesne** oluşturur

---

## **🧠 Mini Ezber**

```
constructor(parametre) → this.özellik = parametre
```

---