# Homework 1 - Değişkenler ve türleri, Fonksiyonların temelleri

# **Görev 1. Droid siparişi**

```
Bu görevitask-1.js dosyasında gerçekleştirin.

```

Tamiri yapılmış droidlerin satış istasyonu başlatılmaya hazır, satış departmanı için yazılım yazılması gerekiyor. `makeTransaction` fonksiyonunu olustur, bu fonksiyon çağrılırken iki parametre bekleyecek:

- `quantity` — ilk parametre, sipariş edilen droid miktarını içeren bir `number` olmalidir
- `pricePerDroid` — ikinci parametre, bir droidin fiyatını içeren bir `number` olmalidir

Fonksiyonun kodunu, kullanıcının ülkesine ürün teslimatı hakkında bir mesaj içeren bir `string` döndürecek şekilde tamamlayın: `You ordered <quantity> droids worth <totalPrice> credits!"`, burada:

- `<quantity>` — bu sipariş edilen droid miktarıdır
- `<totalPrice>` — bu siparişin toplam değeridir, yani sipariş edilen tüm droidlerin toplam maliyetidir

Aşağıdaki kodu al ve fonksiyonunu tamamladiktan sonra doğruluğunu kontrol etmek için altina yapıştır. Konsola fonksiyonun çıktıları yazdırılacaktır.

`console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"`

Bu kodu mentor tarafından kontrol edilmesi için bırak.

# **Kontrol sırasında mentorun dikkat edeceği noktalar:**

- `makeTransaction(quantity, pricePerDroid)` adlı fonksiyonun tanımlanması
- `makeTransaction(5, 3000)` çağrısının `"You ordered 5 droids worth 15000 credits!"` şeklinde geri dönmesi
- `makeTransaction(3, 1000)` çağrısının `"You ordered 3 droids worth 3000 credits!"` şeklinde geri dönmesi
- `makeTransaction(10, 500)` çağrısının `"You ordered 10 droids worth 5000 credits!"` şeklinde geri dönmesi
- Tüm çağrıların sonuçlarının konsola yazdırılması
- Herhangi geçerli argümanlarla yapılan `makeTransaction` çağrısının doğru değeri döndürmesi

# **Görev 2. Ürün Teslimatı**

`task-2.js` dosyasında bu görevi yerine getirin. `getShippingMessage` adında bir fonksiyon tanımlayın. Bu fonksiyon, çağrılırken aşağıdaki değerlere sahip olan üç parametreyi almalidir.

- `country` - Birinci parametre teslimatın yapılacağı ülkeyi içeren bir `string` olmali
- `price` - Ikinci parametre toplam ürün maliyetini içeren bir `number` olmali
- `deliveryFee` - Üçüncü parametre ürün teslimat maliyetini içeren bir `number` olmali

Fonksiyonun kodunu, kullanıcının ülkesine ürün teslimatı hakkında bir mesaj içeren bir `string` döndürecek şekilde tamamlayın: `"Shipping to <country> will cost <totalPrice> credits"`, burada:

- `<country>` - Teslimat ülkesidir
- `<totalPrice>` - Ürün ve teslimat maliyetini içeren toplam sipariş maliyetidir

Aşağıdaki kodu al ve fonksiyonunu tamamladiktan sonra doğruluğunu kontrol etmek için altina yapıştır. Konsola fonksiyonun çıktıları yazdırılacaktır.

`console.log(getShippingMessage("Australia", 120, 50)); *// "Shipping to Australia will cost 170 credits"*console.log(getShippingMessage("Germany", 80, 20)); *// "Shipping to Germany will cost 100 credits"*console.log(getShippingMessage("Sweden", 100, 20)); *// "Shipping to Sweden will cost 120 credits"*`

Bu kodu mentor tarafından kontrol edilmesi için bırak.

# **Kontrol sırasında mentorun dikkat edeceği noktalar:**

- `getShippingMessage(country, price, deliveryFee)` adında bir fonksiyon tanımlanmıştir.
- `getShippingMessage("Australia", 120, 50)` çağrısı `"Shipping to Australia will cost 170 credits"` yanıtını döndürür.
- `getShippingMessage("Germany", 80, 20)` çağrısı `"Shipping to Germany will cost 100 credits"` yanıtını döndürür.
- `getShippingMessage("Sweden", 100, 20)` çağrısı `"Shipping to Sweden will cost 120 credits"` yanıtını döndürür.
- Herhangi geçerli argümanlarla `getShippingMessage` çağrısı doğru değeri döndürür.

# **Görev 3. Öğe Genişliği**

`task-3.js` dosyasında bu görevi yerine getirin.

Çağrıldığında üç parametre bekleyen `getElementWidth` adında bir fonksiyon tanımlayın:

- `content`— İçerik genişliği olan ilk parametre
- `padding` — Her bir kenar için dolgu değeri olan ikinci parametre
- `border` — Her bir kenar için border kalınlığı değeri olan üçüncü parametre

Tüm parametrelerin değerleri `Npx` biçiminde olacak, burada N herhangi bir tam veya ondalık sayıdır.

Fonksiyonun öğenin toplam genişliğini döndürmelidir. Toplam genişliği hesaplarken, `box-sizing` değerinin `border-box` olduğunu varsay.

Aşağıdaki kodu al ve fonksiyonunu tamamladiktan sonra doğruluğunu kontrol etmek için altina yapıştır. Konsola fonksiyonun çıktıları yazdırılacaktır.

`console.log(getElementWidth("50px", "8px", "4px")); *// 74*console.log(getElementWidth("60px", "12px", "8.5px")); *// 101*console.log(getElementWidth("200px", "0px", "0px")); *// 200*`

Bu kodu mentor tarafından kontrol edilmesi için bırak.

# **Kontrol sırasında mentorun dikkat edeceği noktalar:**

- `getElementWidth(content, padding, border)` adlı fonksiyon tanımlanmıştır.
- `getElementWidth("50px", "8px", "4px")` çağrısı `74` sayısını döndürür.
- `getElementWidth("60px", "12px", "8.5px")` çağrısı `101` sayısını döndürür.
- `getElementWidth("200px", "0px", "0px")` çağrısı `200` sayısını döndürür.
- Herhangi geçerli argümanlarla yapılan `getElementWidth` çağrısı doğru değeri döndürür.

Task 1:

```
function makeTransaction(quantity, pricePerDroid) {
  // 1. Parametrelerin değerlerini görelim
  console.log("Sipariş edilen miktar:", quantity);
  console.log("Bir droid fiyatı:", pricePerDroid);

  // 2. Toplam fiyatı hesaplayalım
  let totalPrice = quantity * pricePerDroid;
  console.log("Hesaplanan toplam fiyat:", totalPrice);

  // 3. Sonucu döndürelim
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Testler
console.log("Çıktı 1:", makeTransaction(5, 3000));
console.log("Çıktı 2:", makeTransaction(3, 1000));
console.log("Çıktı 3:", makeTransaction(10, 500));
```

---

### **Çalıştırınca konsolda göreceğin şeyler:**

```
Sipariş edilen miktar: 5
Bir droid fiyatı: 3000
Hesaplanan toplam fiyat: 15000
Çıktı 1: You ordered 5 droids worth 15000 credits!

Sipariş edilen miktar: 3
Bir droid fiyatı: 1000
Hesaplanan toplam fiyat: 3000
Çıktı 2: You ordered 3 droids worth 3000 credits!

Sipariş edilen miktar: 10
Bir droid fiyatı: 500
Hesaplanan toplam fiyat: 5000
Çıktı 3: You ordered 10 droids worth 5000 credits!
```

---

💡 Böylece fonksiyonun **önce parametreleri aldığını, sonra çarpma işlemi yaptığını ve en sonunda string döndürdüğünü** net şekilde görüyorsun.

Task 2:

1. country, price, deliveryFee parametrelerini alıyor.
2. total = price + deliveryFee ile toplam maliyeti hesaplıyor.
3. Template literal ile şu formatta string döndürüyor:
    
    "Shipping to <country> will cost <total> credits"
    
4. console.log testleri de mentorun istediği çıktıyı birebir veriyor.

---

Senin yazdığın kod:

```
function getShippingMessage(country, price, deliveryFee) {
  let total = price + deliveryFee;
  return `Shipping to ${country} will cost ${total} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
```

🔎 Çıktılar:

```
Shipping to Australia will cost 170 credits
Shipping to Germany will cost 100 credits
Shipping to Sweden will cost 120 credits
```

---

💡 Küçük bir iyileştirme önerisi:

Değişken adı total yerine totalPrice olursa daha açıklayıcı olur, ama zorunlu değil. Mentorun için de gayet okunur durumda.

Task 3: 

```
let totalWidth = content + padding * 2 + border * 2;
```

Buradaki problem şu:

- content, padding, border parametreleri string formatında geliyor, yani "50px", "8px" gibi.
- JavaScript string ile matematik yapamaz ➝ "50px" + 2 dediğinde yanlış sonuç verir.
- Önce bu stringlerden "px" kısmını atıp **sayısal değere çevirmemiz** gerekiyor. Bunun için parseFloat() fonksiyonunu kullanmalıyız ✔️

---

### **Doğru Çözüm**

```
function getElementWidth(content, padding, border) {
  // "50px" → 50
  let contentValue = parseFloat(content);
  let paddingValue = parseFloat(padding);
  let borderValue = parseFloat(border);

  // Toplam genişlik (box-sizing: border-box varsayımı ile)
  let totalWidth = contentValue + (paddingValue * 2) + (borderValue * 2);
  return totalWidth;
}

// Testler
console.log(getElementWidth("50px", "8px", "4px"));     // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px"));   // 200
```

---

### **Çalışma Mantığı**

- parseFloat("50px") → 50
- parseFloat("8px") → 8
- parseFloat("4px") → 4

Hesaplama:

50 + (8 * 2) + (4 * 2) = 74 ✅

---

💡 Senin eksik olan kısım sadece **string → number dönüşümü** idi. Kod mantığın tamamen doğruydu 🎉

👉 İstersen ben sana bunun **ara değerlerini console.log ile gösteren açıklamalı versiyonunu** da yazayım mı, tıpkı diğer görevlerde yaptığımız gibi?

README File:

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JavaScript Homework – Functions Practice</title>
</head>
<body>
<h1>JavaScript Homework – Functions Practice</h1>
<p>This repository contains three small JavaScript tasks that demonstrate the use of functions, parameters, string formatting, and basic calculations.</p>

<hr>

<h2>🚀 Task 1 – Droid Order</h2>
<p><b>File:</b> <code>task-1.js</code></p>
<p>The function <code>makeTransaction(quantity, pricePerDroid)</code> calculates the total price for a given number of droids and returns a formatted string.</p>

<h3>Implementation:</h3>
<pre><code>
function makeTransaction(quantity, pricePerDroid) {
let totalPrice = quantity * pricePerDroid;
return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
</code></pre>

<h3>Examples:</h3>
<pre><code>
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
</code></pre>

<hr>

<h2>🚚 Task 2 – Product Delivery</h2>
<p><b>File:</b> <code>task-2.js</code></p>
<p>The function <code>getShippingMessage(country, price, deliveryFee)</code> calculates the total order cost including the delivery fee and returns a formatted message.</p>

<h3>Implementation:</h3>
<pre><code>
function getShippingMessage(country, price, deliveryFee) {
let total = price + deliveryFee;
return `Shipping to ${country} will cost ${total} credits`;
}
</code></pre>

<h3>Examples:</h3>
<pre><code>
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20));    // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20));    // "Shipping to Sweden will cost 120 credits"
</code></pre>

<hr>

<h2>📐 Task 3 – Element Width</h2>
<p><b>File:</b> <code>task-3.js</code></p>
<p>The function <code>getElementWidth(content, padding, border)</code> calculates the total element width assuming <code>box-sizing: border-box</code>.
Since the parameters are strings with <code>"px"</code>, <code>parseFloat()</code> is used to extract numeric values.</p>

<h3>Implementation:</h3>
<pre><code>
function getElementWidth(content, padding, border) {
let contentValue = parseFloat(content);
let paddingValue = parseFloat(padding);
let borderValue = parseFloat(border);

return contentValue + (paddingValue * 2) + (borderValue * 2);
}
</code></pre>

<h3>Examples:</h3>
<pre><code>
console.log(getElementWidth("50px", "8px", "4px"));     // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px"));   // 200
</code></pre>

<hr>

<h2>✅ Summary</h2>
<ul>
<li><b>Task 1:</b> Calculates total droid order price.</li>
<li><b>Task 2:</b> Calculates total shipping cost including delivery.</li>
<li><b>Task 3:</b> Calculates element width with padding and border (CSS box-sizing).</li>
</ul>

<p>Each function is tested with different inputs and returns the expected results.</p>
</body>
</html>