# Statik Özellikler

Gelecekteki bir örneğin kamu ve özel özelliklerinin yanı sıra, sınıfta kendi özelliklerini de tanımlayabilirsiniz. Sadece sınıfa erişilebilen ancak örneklerine değil - bunlar **statik özellikler** olarak adlandırılır. Bu, sınıfla ilgili bilgileri saklamak için yararlıdır.

Statik özellikler sınıfın gövdesinde tanımlanır. Özellik adından önce `static` anahtar kelimesi eklenir. Statik özellikler, sınıfta olduğu gibi sınıf dışında da kullanılabilir.

```
class MyClass{
	static myProp = "value";
}

console.log(MyClass.myProp); // "value"
```

Sınıfın statik özelliklerine örnek erişimi yoktur.

```
class MyClass{
	static myProp = "value";
}

const inst = new MyClass();
console.log(inst.myProp); // undefined
```

Kullanıcı sınıfına `role` adında özel bir özellik ekleyelim - kullanıcının sahip olduğu hakları belirleyen rolü, örneğin: yönetici, editör, standart kullanıcı vb. Kullanıcı rollerini `roles` statik bir özellik olarak saklayacağız - özelliklere sahip bir nesne olarak.

```
class User {
  static roles = {
    admin: "admin",
    editor: "editor",
		basic: "basic"
  };

  #email;
  #role;

  constructor({ email, role = User.roles.basic }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.roles.admin,
});

console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"
```

Örnek:

`Car` sınıfını şu şekilde düzenleyin: `maxPrice` adlı genel statik bir özellik ekleyin ve değerini `50000` olarak ayarlayın - bu izin verilen maksimum araba fiyatıdır. `price`özelliği için bir setter tanımlayın. Setter, `newPrice` parametresinin değerini kontrol eder. Eğer bu değer `maxPrice`'dan büyükse, setter hiçbir şey yapmaz; ancak daha küçük veya eşitse, `price` özelliğini günceller.

Sınıf tanımının altında, `price` getter ve setter'larının nasıl kullanılacağını göstermek için örnekler ve metod çağrıları ekledik.

- `Car` sınıfını tanımlanmalıdır.
- `Car` sınıfı `maxPrice` statik özelliğini içermelidir.
- `maxPrice` statik özelliğinin değeri `50000` sayısı olmalıdır.
- Örnek `Car` sınıfının `price` özelliğini içermemelidir.
- `Car` sınıfında `price` adlı bir getter ve setter tanımlanmalıdır.
- `Car` örneğinde `price` setter'ı çağrıldığında, argüman değeri `maxPrice`değerinden küçük olduğunda `price` özelliği güncellenmelidir.
- `Car` örneğinde `price` setter'ı çağrıldığında, argüman değeri `maxPrice`değerinden büyük olduğunda `price` özelliği güncellenmemelidir.

Aşağıda, **tüm maddeleri birebir karşılayan doğru çözüm** yer alıyor ✔️

(verilen kod, static maxPrice ve kontrol mantığı eklenerek **doğru şekilde** düzenlendi)

---

## **✅ Doğru Car Sınıfı**

```
class Car {
  static maxPrice = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.maxPrice) {
      this.#price = newPrice;
    }
  }
}
```

---

## **🧪 Kullanım Örnekleri (İstenen Davranış)**

```
const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000 ✅ (maxPrice altında)

audi.price = 51000;
console.log(audi.price); // 49000 ✅ (değişmedi)
```

---

## **🔍 Neden Doğru?**

### **static maxPrice**

```
static maxPrice = 50000;
```

- Sınıfa aittir
- Tüm örnekler için **ortak sınırdır**

---

### **price public değil**

```
#price;
```

✔️ Dışarıdan erişilemez

✔️ Encapsulation sağlandı

---

### **Setter kontrol yapıyor**

```
if (newPrice <= Car.maxPrice) {
  this.#price = newPrice;
}
```

- Büyükse ❌ → hiçbir şey yapmaz
- Uygunsa ✅ → günceller

---

## **🧠 Mini Ezber (Notluk)**

```
static → sınıfa ait
Car.maxPrice → sınır
setter → kontrol noktası
private → güvenlik
```

---