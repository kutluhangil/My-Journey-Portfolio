# Kombinasyon operatörleri

Tüm aritmetik operatörlerin, **eşdeğer birleşik (bileşik) operatörleri** vardır.

Bu operatörler, hem aritmetik işlemi gerçekleştirmeyi hem de bir değişkenin değerini, kendi mevcut değeri üzerinden **kısaca güncellemeyi** sağlar.

Bu sayede kod daha **kompakt ve okunabilir** hale gelir.

İşte aritmetik operatörlerin ve birleşik eşdeğerlerinin bir listesi:

- **Toplama**: **`+=`**. Örnek: **`x += y`**, **`x = x + y`** ile eşdeğerdir.
- **Çıkarma**: **`=`**. Örnek: **`x -= y`**, **`x = x - y`** ile eşdeğerdir.
- **Çarpma**: **`=`**. Örnek: **`x *= y`** , **`x *= y`** ile eşdeğerdir.
- **Bölme**: **`/=`**. Örnek: **`x /= y`**, **`x = x / y`** ile eşdeğerdir.
- **Bölme işleminin kalanı**: **`%=`**. Örnek: **`x %= y`**, **`x = x % y`** ile eşdeğerdir.

`age` değişkeninin değerini bir artırarak doğum gününden sonra kullanıcının yaşını güncelleme örneğine bakalım.

`let age = 25;
age = age + 1;
console.log(age); // 26`

İlk olarak, atama ifadesinin **sağ tarafındaki** toplama işlemi gerçekleştirilir.

`age` değişkeninin mevcut değeri olan **25**, `1` ile toplanır ve **sonuç 26** elde edilir.

Bu sonuç, ardından `age` değişkenine **yeni değer olarak atanır**.

Ancak, bu kodu toplama ile birleşik bir atama operatörü (`+=`) kullanarak geliştirebiliriz.

`let age = 25;
age += 1;
console.log(age); // 26`

# **Amaç**

Standart matematiksel operatörlerle ifadeleri toplama, çıkarma, çarpma ve bölme ile birleşik bir atama operatörü ile değiştirin.

# **Testler**

- `a` değişkeninin değeri `7`
- `+=` operatörü kullanılmıştır
- `b` değişkeninin değeri `6`
- `=` operatörü kullanılmıştır
- `c` değişkeninin değeri `45`
- `=` operatörü kullanıldı
- `d` değişkeninin değeri `2`
- `/=` operatörü kullanılmıştır