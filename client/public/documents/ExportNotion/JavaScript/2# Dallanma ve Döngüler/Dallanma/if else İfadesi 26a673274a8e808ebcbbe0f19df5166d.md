# if...else İfadesi

`if` ifadesi, kodun alternatif yürütme seçeneklerini tanımlamak için `else` bloğu ile genişletilebilir.

`if (condition) {
  // koşul doğruysa yürütülen kod
} else {
	// koşul yanlışsa yürütülen kod
}`

Eğer koşul (`condition`) doğru (`true`) olarak değerlendirilirse, `if` bloğundaki ifadeler çalıştırılır.

Koşul yanlış (`false`) olarak değerlendirilirse, `else` bloğundaki ifadeler çalıştırılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e5d529c8-695b-4b20-bafe-3ff19d0959d4Frame%2048584.jpg)

Aşağıdaki örnekte, koşul `true` olarak değiştirildiğinde `if` bloğundaki kod çalıştırılır; `else` bloğundaki kod ise yoksayılır.

`const grade = 85*;*

if (grade >= 70) {
  console.log("Satisfactorily")*;*
} else {
  console.log("Unsatisfactorily")*;*
}`

Eğer koşul `false` olarak değerlendirilirse, `if` bloğundaki kod atlanır ve `else` bloğundaki kod çalıştırılır.

`const grade = 40*;*

if (grade >= 70) {
  console.log("Satisfactorily")*;*
} else {
  console.log("Unsatisfactorily")*;*
}`

# **Görev**

`checkStorage(available, ordered)` fonksiyonu, bir siparişin işleme konulabilme olasılığını kontrol eder ve sonucu bildiren bir ileti döndürür. Bu fonksiyon, çağrıldığı sırada belirlenecek olan iki parametreyi kullanır:

- `available` - depoda bulunan ürün miktarı
- `ordered` - siparişteki ürün miktarı

Fonksiyonun kodunu koşullu ifadeleri kullanarak şu şekilde tamamlayın:

- Stoktaki mal miktarını aşan bir sayı belirtilirse, işlev `"Not enough goods in stock!"` dizesini döndürmelidir.
- Aksi takdirde, işlev `"Order is processed, our manager will contact you"` dizesini döndürmelidir.

# **Testler**

- `checkStorage(available, ordered)` fonksiyonu tanımlanmalıdır.
- `checkStorage(100, 50)` çağrısı `"Order is processed, our manager will contact you"` dizesini döndürmelidir.
- `checkStorage(100, 130)` çağrısı `"Not enough goods in stock!"` dizesini döndürmelidir.
- `checkStorage(200, 20)` çağrısı `"Order is processed, our manager will contact you"` dizesini döndürmelidir.
- `checkStorage(200, 150)` çağrısı `"Order is processed, our manager will contact you"` dizesini döndürmelidir.
- `checkStorage(150, 180)` çağrısı `"Not enough goods in stock!"` dizesini döndürmelidir.
- Rastgele ancak geçerli argümanlarla yapılan bir fonksiyon çağrısı doğru değeri döndürmelidir.

Cevap:

```
function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you.";
  }
}
```