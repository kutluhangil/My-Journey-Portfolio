# Parametreler ve argümanlar

Fonksiyon adından sonra, **parametreler** parantez içinde belirtilir.

Parametreler, fonksiyon çağrıldığında ona iletilmesi beklenen verilerin listesidir.

`*// x, y, z parametrelerinin bildirilmesi*function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}`

Parametreler, yalnızca fonksiyonun gövdesi içinde erişilebilen **yerel değişkenlerdir**.

Birden fazla parametre, virgülle ayrılarak yazılır.

Bir fonksiyonun hiç parametresi olmayabilir; bu durumda sadece **boş parantezler** kullanılır.

Fonksiyon çağrılırken, parantez içinde tanımlı parametreler için **argümanlar** (değerler) iletilir.

`*// x, y, z parametrelerinin bildirilmesi*
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

*// Argümanların iletilmesi*multiply(2, 3, 5); *// "Result: 30"*multiply(4, 8, 12); *// "Result: 384"*multiply(17, 6, 25); *// "Result: 2550"*`

Yukarıdaki örnekte x, y, z parametreleri bulunmaktadır.

Her fonksiyon çağrısında parametre, argümanlardan yeni bir değer alabilir. Örneğin, parametre `x` başlangıçta 2 değerini aldı, sonra 4, sonra 17.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3ee919cd-5167-4c8b-b913-81fc76210c27m01-b05-s02.jpg)

Fonksiyona argüman iletilirken, tanımlanan parametrelerin sırasına uyulmalıdır:

İlk argümanın değeri birinci parametreye, ikinci argümanın değeri ikinci parametreye atanır — bu şekilde devam eder.

Her fonksiyon çağrısında parametreler yeniden tanımlanır ve bu parametrelerin değerleri, farklı çağrılarda birbirini etkilemez.

# **Görev**

`add` fonksiyonu üç sayıyı ekleyebilmeli ve sonucu konsola yazdırmalıdır.

`add` fonksiyonuna üç parametre ekleyin: `a`, `b` ve `c`, bu parametrelerin değerlerini çağrılırken alacaktır.

`console.log()`'u şöyle tamamlayın ki, `"Addition result equals <result>"` cümlesini kaydetsin, burada `<result>`, iletilen sayıların toplamıdır.

# **Testler**

- `add(a, b, c)` fonksiyonu tanımlandı.
- `add(15, 27, 10)` çağrısı konsola `"Addition result equals 52"` yazdırır.
- `add(10, 20, 30)` çağrısı konsola `"Addition result equals 60"` yazdırır.
- `add(5, 10, 15)` çağrısı konsola `"Addition result equals 30"` yazdırır.

---

✅ Çözüm:

```
function add(a, b, c) {
  const result = a + b + c;
  console.log(`Addition result equals ${result}`);
}

// Test çağrıları
add(15, 27, 10); // Addition result equals 52
add(10, 20, 30); // Addition result equals 60
add(5, 10, 15);  // Addition result equals 30
```

---

🔎 Açıklama:

- function add(a, b, c) → add adında 3 parametre alan fonksiyon tanımlar.
- const result = a + b + c; → parametrelerin toplamını result değişkenine atar.
- console.log(`Addition result equals ${result}`); → template string ile sonucu ekrana yazar.
- Sonra add(...) ile farklı sayılar verip fonksiyonu çağırıyoruz.

---

👉 Çalıştırdığında konsolda şu çıktılar olacak:

```
Addition result equals 52
Addition result equals 60
Addition result equals 30
```