# Dizeleri sayılara dönüştürme

`Number.parseInt()` ve `Number.parseFloat()` yöntemleri, bir dizeyi sayıya dönüştürmek için kullanılır.

- `Number.parseInt()` yöntemi, dizeleri **tam sayılara** dönüştürür.
- `Number.parseFloat()` yöntemi ise dizeleri **ondalıklı (noktalı) sayılara** dönüştürür.

# **Yöntem Number.parseInt()**

`Number.parseInt()` metodu iki argüman alır:

1. **Bir dize:** Argüman dize değilse, önce otomatik olarak dizeye dönüştürülür.
2. **Sayı sistemi:** (İsteğe bağlı argüman, varsayılan olarak ondalık — yani 10’dur). Örneğin, ondalık sistem için `10`, onaltılık sistem için `16` gibi.

Bu yöntem, dizeyi soldan sağa doğru analiz eder. Başlangıçtaki boşlukları kaldırır ve ilk geçersiz karaktere kadar geçerli karakterleri sayıya dönüştürür.

Geçersiz karakterle karşılaştığında işlem durur ve o ana kadar dönüştürülmüş olan tam sayı değeri döndürülür.

`console.log(Number.parseInt("5")); *// 5*`

`console.log(Number.parseInt("5.5")); *// 5*`

`console.log(Number.parseInt("5cm")); *// 5*`

`console.log(Number.parseInt("12qwe74")); *// 12*`

`console.log(Number.parseInt("12.46qwe79")); *// 12*`

`console.log(Number.parseInt("cm5")); *// NaN*`

`console.log(Number.parseInt("")); *// NaN*`

`console.log(Number.parseInt("qweqwe")); *// NaN*`

Dizenin ilk karakterleri sayıya dönüştürülemiyorsa, ya da dize boş veya eksikse, sonuç `NaN` (Not a Number) olur.

# **Yöntem Number.parseFloat()**

`Number.parseFloat(),` `Number.parseInt()` yöntemine benzer ancak bir farkla: bir dizeyi noktalı sayılara (floating number) dönüştürür.

`console.log(Number.parseFloat("5")); *// 5*`

`console.log(Number.parseFloat("5.5")); *// 5.5*`

`console.log(Number.parseFloat("3.14")); *// 3.14*`

`console.log(Number.parseFloat("5cm")); *// 5*`

`console.log(Number.parseFloat("5.5cm")); *// 5.5*`

`console.log(Number.parseFloat("12qwe74")); *// 12*`

`console.log(Number.parseFloat("12.46qwe79")); *// 12.46*`

`console.log(Number.parseFloat("cm5")); *// NaN*`

`console.log(Number.parseFloat("")); *// NaN*`

`console.log(Number.parseFloat("qweqwe")); *// NaN*`

Bir dizenin başındaki karakterler sayıya dönüştürülemezse veya dize boş ya da eksikse, sonuç `NaN` (Not a Number) olur.

# **Görev**

`value` değeri sayı ve ölçü birimlerinde oluşan bir dizi içerir örneğin; `24.5px`, `14cm`, `20.3vh` vb.

Değişkeni `numerical` olarak tanımlayın ve kodu aşağıdaki gibi tamamlayın:

- Mümkünse, `numerical` değişkeninin değeri `value` içinde bulunan dizenin sayısal kısmı olacaktır.
- Aksi takdirde, `numerical` değişkeninin değeri `NaN` olacaktır.

# **Testler**

- `value` değişkeni tanımlanır.
- `numerical` değişkeni tanımlanır.
- Eğer `value` değeri `24.5px` ise, `numerical` değeri `24.5` olacaktır.
- Eğer `value` değeri `14cm` ise, `numerical` değeri `14` olur.
- Eğer `value` değeri `20.3vh` değerine eşitse, `numerical` değeri `20.3` olacaktır.
- Eğer `value` değeri `Poly16` değerine eşitse, `numerical` değeri `NaN` olacaktır.

Bir stringin içindeki **sayısal kısmı almak** (örneğin "24.5px" → 24.5) ama eğer başta sayı yoksa (örneğin "Poly16") → **NaN** dönmeli.

Bunu yapmak için JavaScript’te **parseFloat()** kullanabiliriz.

---

### **Kod:**

```
const value = "24.5px";

// stringten sayı çıkarır (mümkünse)
const numerical = parseFloat(value);

console.log(numerical); // 24.5
```

---

### **Mantığı tane tane:**

1. parseFloat("24.5px") → "24.5" kısmını alır → 24.5
2. parseFloat("14cm") → 14
3. parseFloat("20.3vh") → 20.3
4. parseFloat("Poly16") → başta sayı yok → NaN

---

✅ Yani doğru çözüm:

```
const numerical = parseFloat(value);
```

---