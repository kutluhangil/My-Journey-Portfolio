# else...if bloğu

`else if` yapısı, `if...else` yapısını genişleterek birden fazla koşulun kontrol edilmesini ve her birine uygun yanıt verilmesini sağlar. Birden fazla koşulun bulunduğu durumlarda bu yapı oldukça kullanışlıdır.

`if (condition_1) {
  // Koşul (condition_1) doğruysa yürütülen kod
} else if (condition_2) {
  // Koşul (condition_2) doğruysa yürütülen kod
} else if (condition_3) {
  // Koşul (condition_3) doğruysa yürütülen kod
} else {
	// Tüm koşullar yanlışsa yürütülen kod
}`

Her koşul, yukarıdan aşağıya doğru sırayla kontrol edilir.

Eğer `condition_1` koşulu doğru (`true`) olarak değerlendirilirse, ilgili kod bloğu çalıştırılır ve kontrol süreci sona erer.

Eğer `condition_1` koşulu yanlış (`false`) olarak değerlendirilirse, bu durumda `condition_2` ve sonraki koşullar sırayla kontrol edilir.

`else` bloğundaki kod, yalnızca `if` ve `else if` bloklarındaki hiçbir koşul doğru (`true`) olarak değerlendirilmediğinde çalıştırılır.

Kontrol, yalnızca ilk karşılanan koşulu bulduğunda durur. Bu durumda, sadece ilgili `if` veya `else if` bloğunun gövdesi çalıştırılır.

Bu nedenle, koşullar zinciri şu mantıkla okunmalıdır:

**"İlk karşılanan koşulu arıyorum ve diğer tüm koşulları yoksayıyorum."**

Görsel olarak aşağıdaki şemaya benzetilebilir:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/48612d22-eb31-4144-b356-d6dd340eab23Frame%2048585%20%281%29.jpg)

Bu örnekte önce `grade >= 90` koşulu kontrol edilir.

`const grade = 85;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}`

İlk koşul olan `grade >= 90` yanlış (`false`) olduğundan, `if` bloğu çalıştırılmaz ve ardından bir sonraki koşul olan `grade >= 80` kontrol edilir. Bu koşul doğru (`true`) olarak değerlendirilirse, `else if` bloğu çalıştırılır ve `console.log("Good")` ifadesi yazdırılır.

Bu noktadan sonra, kalan koşullar artık kontrol edilmez.

# **Görev**

`checkStorage(available, ordered)` fonksiyonu, bir siparişin işleme konulabilme olasılığını kontrol eder ve sonucu bildiren bir değer döndürür. Bu fonksiyon, çağrıldığı sırada belirlenecek olan iki parametreyi kullanır:

- `available` - depoda bulunan ürün miktarı
- `ordered` - siparişteki ürün miktarı

Fonksiyonun kodunu koşullu ifadeler kullanarak şu şekilde tamamlayın:

- Siparişte henüz ürün bulunmuyorsa, yani `ordered` parametresinin değeri 0 ise, fonksiyon `"There are no products in the order!"` dizesini döndürmelidir.
- Siparişte mevcut stoktan daha fazla ürün varsa, işlev `"Your order is too large, there are not enough items in stock!"` dizesini döndürmelidir.
- Aksi takdirde, fonksiyon `"The order is accepted, our manager will contact you"` dizesini döndürmelidir.

# **Testler**

- `checkStorage(available, ordered)` fonksiyonu tanımlanmalıdır.
- `checkStorage(100, 50)` fonksiyonunun çağrılması `"The order is accepted, our manager will contact you"` sonucunu döndürmelidir.
- `checkStorage(100, 130)` fonksiyonunun çağrılması `"Your order is too large, there are not enough items in stock!"` sonucunu döndürmelidir.
- `checkStorage(70, 0)` fonksiyonunun çağrılması `"There are no products in the order!"` sonucunu döndürmelidir.
- `checkStorage(200, 20)` fonksiyonunun çağrılması `"The order is accepted, our manager will contact you"` sonucunu döndürmelidir.
- `checkStorage(200, 250)` fonksiyonunun çağrılması `"Your order is too large, there are not enough items in stock!"` sonucunu döndürmelidir.
- `checkStorage(150, 0)` fonksiyonunun çağrılması `"There are no products in the order!"` sonucunu döndürmelidir.
- `checkStorage(80, 80)` fonksiyonunun çağrılması `"The order is accepted, our manager will contact you"` sonucunu döndürmelidir.

# **Doğru cevap**

`function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "There are no products in the order!";
  } else if (ordered > available) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "The order is accepted, our manager will contact you";
  }
}`