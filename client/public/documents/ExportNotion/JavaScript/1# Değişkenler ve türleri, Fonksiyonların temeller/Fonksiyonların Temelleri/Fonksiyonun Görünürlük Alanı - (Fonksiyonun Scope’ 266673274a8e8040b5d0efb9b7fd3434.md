# Fonksiyonun Görünürlük Alanı - (Fonksiyonun Scope’u)

**Görünürlük alanı**, değişkenlerin ve fonksiyonların kod içinde nerede ve nasıl erişilebileceğini belirler. Bir değişken veya fonksiyon tanımlandığında, yalnızca belirli bir kod bloğunda "görünür" olur. Bu da onları nerede ve nasıl kullanabileceğinizi doğrudan etkiler.

Herhangi bir kod bloğunun dışında tanımlanan değişkenler veya fonksiyonlar, yani **genel görünürlük alanında** tanımlananlar, kodun her yerinden erişilebilir. Bunlara **global değişkenler** denir.

`*// Global değişken*
const value = "I'm a global variable";

function foo() {
*// Global değişkene başvurulabilir*console.log(value); *// "I'm a global variable"*
}

foo();
*// Global değişkene başvurulabilir.*console.log(value); *// "I'm a global variable"*`

`value` değişkeni, genel görünürlük alanında tanımlanmıştır; yani bir kod bloğunun — bu durumda bir fonksiyonun gövdesinin — dışında yer almaktadır. Bu nedenle, tanımlandıktan sonra programa ait herhangi bir yerden erişilebilir.

Koşullar, döngüler, fonksiyonlar vb. yapılar `{}` süslü parantezler içinde tanımlandığında, her biri **yeni bir yerel görünürlük alanı** oluşturur. Bu alan içinde tanımlanan değişkenler, **yalnızca o kod bloğu içerisinde** kullanılabilir.

`function foo() {
	*// Yerel değişken*
	const value = "I'm a local variable";
	*// Yerel değişkene başvurulabilir*console.log(value); *// "I'm a local variable"*
}

foo();
  console.log(value); *// ReferenceError: value is not defined// Hata: Fonksiyonun dışında yerel değişken görünmüyor.*`

`foo` fonksiyonu içinde tanımlanan `value` değişkeni, yalnızca bu fonksiyonun kapsamıyla sınırlı olan **yerel bir alanda** geçerlidir. Bu değişkene sadece fonksiyon içinden erişilebilir; fonksiyon dışında erişmeye çalışmak hata verecektir.

# **Görev**

`makeMessage(name, price)` fonksiyonu, bir satın alma mesajı oluşturur. Fonksiyon çağrıldığında, iki parametre alır:

- `name` – Ürünün adı
- `price` – Ürünün fiyatı

Fonksiyonun kodunu şu şekilde tamamlayın:

Fonksiyon, `<ürün adı>` ve `<ürün fiyatı>` parametrelerine karşılık gelen değerleri yerleştirerek aşağıdaki dizeyi döndürmelidir: `"You picked <product name>, price per item is <product price> credits"`

```
Dikkat
Kod içindemakeMessage fonksiyonunun çağrısı eksiktir. Bu görevden sonra kendi fonksiyonlarınızı çağıracak ve nasıl çalıştıklarını kontrol edeceksiniz. Kontrol sonuçlarını, kod editörünün altındakiSonuçlar bloğunda görebilirsiniz.

```

**Testler**

- `makeMessage(name, price)` fonksiyonu tanımlanmıştır.
- `makeMessage('Radar', 6150)` çağrısı `"You picked Radar, price per item is 6150 credits"` dizesini döndürür.
- `makeMessage('Scanner', 3500)` çağrısı `"You picked Scanner, price per item is 3500 credits"` dizesini döndürür.
- `makeMessage('Reactor', 8000)` çağrısı `"You picked Reactor, price per item is 8000 credits"` dizesini döndürür.
- `makeMessage('Engine', 4070)` çağrısı `"You picked Engine, price per item is 4070 credits"` dizesini döndürür.

✅ Doğru çözüm:

```
function makeMessage(name, price) {
  return `You picked ${name}, price per item is ${price} credits`;
}
```

---

🔎 Adım adım:

1. Fonksiyon makeMessage(name, price) iki parametre alıyor → ürün adı (name) ve fiyat (price).
2. return ile şablon dizemizi geri döndürüyoruz.
3. Şablon dizesinde ${name} ve ${price} yazarak bu değişkenlerin değerlerini otomatik olarak string içine yerleştiriyoruz.

---

✅ Test edelim:

```
console.log(makeMessage('Radar', 6150));
// "You picked Radar, price per item is 6150 credits"

console.log(makeMessage('Scanner', 3500));
// "You picked Scanner, price per item is 3500 credits"
```

---

# **Görev**

`calculateTotalPrice` adında bir fonksiyon yazın. Bu fonksiyon, toplam satın alma tutarını hesaplar. İki parametre alır ve bu parametreler fonksiyon çağrısı sırasında belirlenir.

- `orderedQuantity` — ilk parametre, siparişte bulunan ürün adedi;
- `pricePerItem` — ikinci parametre, bir ürünün fiyatı.

Fonksiyon toplam satın alma tutarını döndürmelidir. Toplam satın alma tutarı, ürün adedinin fiyatla çarpımı sonucunda elde edilir.

# **Testler**

- `calculateTotalPrice(orderedQuantity, pricePerItem)` fonksiyonu tanımlandı.
- `calculateTotalPrice(5, 100)` çağrısı `500` değerini döndürmeli.
- `calculateTotalPrice(8, 60)` çağrısı `480` değerini döndürmeli.
- `calculateTotalPrice(3, 400)` çağrısı `1200` değerini döndürmeli.
- `calculateTotalPrice(1, 3500)` çağrısı `3500` değerini döndürmeli.
- `calculateTotalPrice(12, 70)` çağrısı `840` değerini döndürmeli.
- Rastgele geçerli argümanlarla fonksiyon çağrısı doğru değeri döndürmeli.

✅ Doğru çözüm:

```
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  return orderedQuantity * pricePerItem;
}
```

---

🔎 Adım adım:

1. Fonksiyonun adı **calculateTotalPrice**.
2. Parametreler:
    - orderedQuantity → ürün miktarı
    - pricePerItem → ürünün birim fiyatı
3. return ile bu ikisini çarpıyoruz.

---

✅ Test edelim:

```
console.log(calculateTotalPrice(5, 100));   // 500
console.log(calculateTotalPrice(8, 60));    // 480
console.log(calculateTotalPrice(3, 400));   // 1200
console.log(calculateTotalPrice(1, 3500));  // 3500
console.log(calculateTotalPrice(12, 70));   // 840
```

Her biri doğru sonucu döndürür 🎯