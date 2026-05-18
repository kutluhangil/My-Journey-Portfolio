# YouTube Notlar - Nesneler 1

**JavaScript – Objeler (Objects) Ders Notları**

---

## **🧩 1. Obje (Object) Nedir?**

**Tanım:**

Objeler, birden fazla veriyi (özellikleri ve değerleri) tek bir yapı içinde saklamamızı sağlar.

JavaScript’te objeler süslü parantez {} ile oluşturulur.

```
let user = {
  username: "John",
  age: 25,
  country: "TR"
};
```

- {} → obje oluşturmak için kullanılır.
- property: value → her bir özellik (anahtar) ve değerden oluşur.
- Her property **virgül ( , )** ile ayrılır.

---

## **🧱 2. Temel Kavramlar**

| **Terim** | **Açıklama** | **Örnek** |
| --- | --- | --- |
| **Object (Obje / Nesne)** | Birden çok veriyi bir arada tutan yapı | { username: "John" } |
| **Property (Özellik)** | Objede sol tarafta yer alan anahtar | username |
| **Value (Değer)** | Özelliğin sağ tarafındaki değer | "John" |
| **Key-Value Pair (Anahtar-Değer Çifti)** | Property ve value’nun birlikte ifade edilmesi | username: "John" |
| **Method (Metot)** | Objelerin içindeki fonksiyonlara verilen ad | greet: function() { ... } |

---

## **🧠 3. Obje Oluşturma**

### **Yöntem 1 – Literal Söz Dizimi**

```
const car = {
  brand: "Fiat",
  model: "Uno",
  year: 2000
};
```

### **Yöntem 2 – Boş Obje + Sonradan Ekleme**

```
const person = {};
person.name = "Ayşe";
person.age = 30;
```

---

## **🎯 4. Objeye Erişim Yöntemleri**

### **4.1. Dot Notation (Nokta Notasyonu)**

```
console.log(user.username); // "John"
console.log(user.age);      // 25
```

🔹 En sık kullanılan yöntemdir.

🔹 Ancak property adında - gibi özel karakterler varsa **çalışmaz**.

### **4.2. Bracket Notation (Köşeli Parantez Notasyonu)**

```
console.log(user["username"]); // "John"
```

🔹 Property ismi **string** olarak yazılır.

🔹 Aşağıdaki gibi özel karakter içeren property’lerde zorunludur:

```
let obj = {
  "is-premium": true
};
console.log(obj["is-premium"]); // ✅
console.log(obj.is-premium);    // ❌ hata
```

---

## **⚙️ 5. Objede Veri Türleri**

Objelerde **her türden veri** saklanabilir:

```
const user = {
  name: "John",
  age: 30,
  isPremium: true,
  products: ["Basic", "Premium"],
  location: { city: "İstanbul", country: "TR" }
};
```

- string, number, boolean ✅
- array ve object iç içe olabilir ✅
- Hatta **fonksiyonlar (metotlar)** da olabilir:

```
const user = {
  greet: function() {
    console.log("Hello!");
  }
};

user.greet(); // "Hello!"
```

---

## **🔁 6. Objede Değer Güncelleme ve Yeni Özellik Ekleme**

### **6.1. Değer Güncelleme**

```
user.age = 31; // mevcut değeri değiştirir
```

### **6.2. Yeni Property Ekleme**

```
user.foodPreference = "Vegetarian";
```

Veya köşeli parantezle:

```
user["foodPreference"] = "Vegetarian";
```

Sonuç:

```
{
  username: "John",
  age: 31,
  country: "TR",
  foodPreference: "Vegetarian"
}
```

---

## **🔄 7. Dinamik Property (Variable’dan Değer Atama)**

Bir değişkenin değerini obje içinde kullanabilirsin:

```
let age = 25;
let isCustomer = false;

let myObject = {
  username: "John",
  age: age,
  isCustomer: isCustomer
};
```

➡️ **Kısaltılmış Yazım:**

Eğer property ismi ve değişken ismi aynıysa:

```
let age = 25;
let isCustomer = false;

let myObject = { age, isCustomer };
```

Bu, yukarıdakiyle aynı sonucu verir.

---

## **🔁 8. Objelerde Döngü (Iterasyon)**

Objelerdeki tüm property ve value’ları döngüyle gezebiliriz.

### **8.1.**

### **for...in**

### **Döngüsü**

```
const user = {
  username: "John",
  age: 26,
  country: "TR",
  isCustomer: false
};

for (let key in user) {
  console.log(key);          // property isimleri
  console.log(user[key]);    // property değerleri
}
```

> Not:
> 

> for...of array’ler için kullanılır.
> 

---

## **🧩 9. Object Methods (Yerleşik Objeler)**

JavaScript, objelerle çalışmayı kolaylaştıran yerleşik metotlar sağlar:

### **9.1.**

### **Object.keys(obj)**

Objedeki property isimlerini (key’leri) **array** olarak döndürür.

```
Object.keys(user);
// ["username", "age", "country", "isCustomer"]
```

### **9.2.**

### **Object.values(obj)**

Objedeki değerleri (value’ları) **array** olarak döndürür.

```
Object.values(user);
// ["John", 26, "TR", false]
```

### **9.3.**

### **Object.entries(obj)**

Objedeki tüm key-value çiftlerini **iki elemanlı array’ler** olarak döndürür.

```
Object.entries(user);
/*
[
  ["username", "John"],
  ["age", 26],
  ["country", "TR"],
  ["isCustomer", false]
]
*/
```

Bu metot sayesinde objeleri kolayca dönüştürüp filtreleyebilirsin.

---

## **🧠 10. Objelerin İçinde Objeler ve Diziler**

İç içe yapılar oluşturulabilir:

```
const company = {
  name: "TechCorp",
  address: {
    city: "Ankara",
    country: "TR"
  },
  employees: ["Ali", "Ayşe", "Veli"]
};

console.log(company.address.city); // "Ankara"
console.log(company.employees[1]); // "Ayşe"
```

---

## **🧪 11. Örnek: Obje Pratiği**

```
const student = {
  name: "Kutluhan",
  age: 28,
  skills: ["HTML", "CSS", "JS"],
  course: {
    title: "Full Stack Development",
    duration: "6 months"
  }
};

// Yeni property ekleme
student.isGraduated = false;

// Property değerini güncelleme
student.age = 29;

// İç içe objelere erişim
console.log(student.course.title); // "Full Stack Development"

// Objeyi döngüyle gezme
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
```

---

## **🎓 12. Özet Tablo**

| **Konu** | **Açıklama** | **Örnek** |
| --- | --- | --- |
| Obje oluşturma | {} ile | let obj = {a:1} |
| Özellik ekleme | obj.key = val veya obj["key"]=val | obj.name="Ali" |
| Erişim | Nokta veya köşeli notasyon | obj.name / obj["name"] |
| Değer güncelleme | obj.key = newVal | obj.age=30 |
| Döngü | for...in | for (let key in obj) |
| Metotlar | Object.keys(), Object.values(), Object.entries() |  |
| İç içe yapı | Objeler, array’ler, fonksiyonlar olabilir | obj.nested.key |

---

## **🚀 13. Kapanış**

> 🔹 Objeler, JavaScript’in temel yapı taşlarından biridir.
> 

> 🔹 Array’lerle birlikte veri modellemenin en güçlü yoludur.
> 

> 🔹 Bir sonraki adım:
> 
> 
> **Array of Objects**
> 

---