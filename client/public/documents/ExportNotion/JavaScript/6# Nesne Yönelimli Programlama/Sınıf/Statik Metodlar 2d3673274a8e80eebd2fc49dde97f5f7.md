# Statik Metodlar

Sınıfta sadece gelecekteki bir örneğin metotlarını değil, aynı zamanda statik metodları da tanımlayabilirsiniz. **Statik metodlar** - sadece sınıfa erişilebilen metotlardır. Hem **genel** hem de **özel** olabilirler.

Statik metodların bildirimi neredeyse statik özelliklerle aynıdır. Tek fark, değerin bir metot olmasıdır.

```
	class MyClass{
		static myMethod() {
			console.log("A static method");
	}
}

MyClass.myMethod(); // "A static method"
```

`User` sınıfına şunları ekleyelim:

- `takenEmails` adında bir statik özellik, kullanımda olan e-postaları saklamak için
- `isEmailTaken` adında bir statik metod, e-postanın kullanımda olup olmadığını kontrol edecek

Sınıfın yapıcısında, örnek oluşturulurken e-postayı kullanımda olanlar listesine ekleyeceğiz.

```
class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com")); // false
console.log(User.isEmailTaken("mango@mail.com")); // true
```

**`Statik metodların özelliği** Bu metodlar çağrıldığında, this anahtar kelimesi sınıfa kendini referans değer olarak gösterir. Bu, statik yöntemin **sınıfın statik özelliklerine**, ancak **örneğin özelliklerine** erişebilmesi anlamına gelir. Bu mantıklıdır çünkü statik yöntemler sınıf tarafından çağrılır, örnekler tarafından değil.`

Örnek:

`Car` sınıfına, araba fiyatını kontrol eden genel statik bir `checkPrice(price)` metodu ekleyin. Bu metod, `price` parametresini `maxPrice` adında özel bir statik özellikle karşılaştırmalıdır.

- Arabanın fiyatı maksimumu aşarsa, metod `"Hata! Fiyat maksimumu aşıyor"`şeklinde bir dize döndürmelidir.
- Aksi takdirde, metod `"Başarılı! Fiyat kabul edilebilir sınırlar içinde"`şeklinde bir dize döndürmelidir.

Sınıf duyurusunun altında, `checkPrice(price)` metodunun nasıl kullanılacağını göstermek için örnek başlatma ve metot çağrılarını ekledinddi.

- `Car` sınıfını tanımlanmalıdır.
- `Car` sınıfı, `checkPrice(price)` adlı statik bir metodu içermelidir.
- `Car.checkPrice(36000)` çağrısı `"Başarılı! Fiyat kabul edilebilir sınırlar içinde"` dizesini döndürmelidir.
- `Car.checkPrice(18000)` çağrısı `"Başarılı! Fiyat kabul edilebilir sınırlar içinde"` dizesini döndürmelidir.
- `Car.checkPrice(64000)` çağrısı `"Hata! Fiyat maksimumu aşıyor"` dizesini döndürmelidir.
- `Car.checkPrice(57000)` çağrısı `"Hata! Fiyat maksimumu aşıyor"` dizesini döndürmelidir.

Örnek: 

`Car` sınıfına, araba fiyatını kontrol eden genel statik bir `checkPrice(price)` metodu ekleyin. Bu metod, `price` parametresini `maxPrice` adında özel bir statik özellikle karşılaştırmalıdır.

- Arabanın fiyatı maksimumu aşarsa, metod `"Hata! Fiyat maksimumu aşıyor"`şeklinde bir dize döndürmelidir.
- Aksi takdirde, metod `"Başarılı! Fiyat kabul edilebilir sınırlar içinde"`şeklinde bir dize döndürmelidir.

Sınıf duyurusunun altında, `checkPrice(price)` metodunun nasıl kullanılacağını göstermek için örnek başlatma ve metot çağrılarını ekledinddi.

- `Car` sınıfını tanımlanmalıdır.
- `Car` sınıfı, `checkPrice(price)` adlı statik bir metodu içermelidir.
- `Car.checkPrice(36000)` çağrısı `"Başarılı! Fiyat kabul edilebilir sınırlar içinde"` dizesini döndürmelidir.
- `Car.checkPrice(18000)` çağrısı `"Başarılı! Fiyat kabul edilebilir sınırlar içinde"` dizesini döndürmelidir.
- `Car.checkPrice(64000)` çağrısı `"Hata! Fiyat maksimumu aşıyor"` dizesini döndürmelidir.
- `Car.checkPrice(57000)` çağrısı `"Hata! Fiyat maksimumu aşıyor"` dizesini döndürmelidir.

---

## **✅ DOĞRU ve TESTLERLE TAM UYUMLU ÇÖZÜM**

```
class Car {
  static #maxPrice = 50000;

  static checkPrice(price) {
    if (price > Car.#maxPrice) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
}
```

---

## **🧪 GÖREVDEKİ BEKLENEN ÇIKTILAR**

```
Car.checkPrice(57000);
// "Error! Price exceeds the maximum"

Car.checkPrice(64000);
// "Error! Price exceeds the maximum"

Car.checkPrice(36000);
// "Success! Price is within acceptable limits"

Car.checkPrice(18000);
// "Success! Price is within acceptable limits"
```

✔️ **Birebir string eşleşmesi**

✔️ Static metod

✔️ Private static property

✔️ Instance gerekmez

---

## **🔍 Neden Öncekiler Hatalıydı?**

```
"Hata! Fiyat maksimumu aşıyor" ❌
"Başarılı! Fiyat kabul edilebilir sınırlar içinde" ❌
```

Test sistemi şuna bakar:

```
String === String
```

En ufak fark → ❌ FAIL

---

## **🧠 Mini Ezber (Sınav / Test İçin)**

```
Kod doğru olabilir
String yanlışsa → test kalır
```

---