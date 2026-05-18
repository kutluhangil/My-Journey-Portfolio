# Parametreler Nesnesi

Bir sınıf, gelecekteki bir nesnenin özellikleri için büyük miktarda girdi verisini alabilir.

Bu verilere ayrıca, rastgele bir argüman seti yerine mantıklı adlandırılmış özelliklere sahip bir nesne geçirerek "Parametreler Nesnesi" deseni de uygulanabilir.

```
class User{
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Mango", email: "mango@mail.com" }
```

Çünkü bir yapılandırıcı sıradan bir fonksiyon olduğundan, onun parametresine yıkıcı atama uygulanabilir.

```
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Mango", email: "mango@mail.com" }
```

ÖRnek: 

`Car` sınıfını, `brand`, `model` ve `price` özelliklerine sahip bir nesneyi kabul edecek şekilde yeniden düzenleyin. Constructor’da nesneyi kaldırın.

- `Car` sınıfını tanımlanmalıdır.
- `Car` sınıfı `constructor` metoduna sahip olmalıdır.
- `new Car({ brand: "Audi", model: "Q3", price: 36000 })` çağrısı `{brand: "Audi", model: "Q3", price: 36000}` nesnesini oluşturur.
- `new Car({ brand: "BMW", model: "X5", price: 58900 })` çağrısı `{brand: "BMW", model: "X5", price: 58900}` nesnesi oluşturur.
- `new Car({ brand: "Nissan", model: "Murano", price: 31700 })`çağrısı `{brand: "Nissan", model: "Murano", price: 31700}` nesnesi oluşturur.

Aşağıda istenen şartların **tamamını karşılayan doğru çözüm** yer alıyor ✔️

(Parametreler artık **tek bir nesne** olarak alınıyor)

---

## **✅ Güncellenmiş Car Sınıfı**

```
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
```

---

## **🧪 Beklenen Sonuçlar**

```
new Car({ brand: "Audi", model: "Q3", price: 36000 });
// { brand: "Audi", model: "Q3", price: 36000 }

new Car({ brand: "BMW", model: "X5", price: 58900 });
// { brand: "BMW", model: "X5", price: 58900 }

new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// { brand: "Nissan", model: "Murano", price: 31700 }
```

---

## **🔍 Neden Böyle?**

### **🔹 Önce (eski yöntem)**

```
new Car("Audi", "Q3", 36000);
```

❌ Parametre sırası karışabilir

---

### **🔹 Şimdi (nesne ile)**

```
new Car({ brand, model, price });
```

✔️ Okunabilir

✔️ Sıra önemli değil

✔️ Genişletilebilir (yeni alan eklemek kolay)

---

## **🧠 Önemli Nokta**

```
constructor({ brand, model, price }) { ... }
```

Bu yapı:

- **Object destructuring**
- Parametre olarak gelen nesneden alanları çıkarır

---

## **🧠 Mini Ezber**

```
constructor({ ... }) → ayar nesnesi (config object)
```

---