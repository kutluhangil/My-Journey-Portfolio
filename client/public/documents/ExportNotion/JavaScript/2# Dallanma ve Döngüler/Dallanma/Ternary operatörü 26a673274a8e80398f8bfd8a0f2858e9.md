# Ternary operatörü

Ternary operatör, `if...else` ifadesinin kısa ve sade bir sözdizimsel alternatifidir. Belirli bir kod parçasının, bir koşula bağlı olarak çalıştırılmasını sağlar.

`<condition> ? <expression if condition is true> : <expression if condition is false>`

**Ternary operatör şu şekilde çalışır:**

- `condition` koşulu değerlendirilir.
- Koşul doğru (`true`) olarak değerlendirilirse, `?` işaretinden sonraki ifade çalıştırılır.
- Koşul yanlış (`false`) olarak değerlendirilirse, `:` işaretinden sonraki ifade çalıştırılır.
- Hesaplanan ifadenin sonucu, üçlü operatörün (ternary) işlem çıktısı olarak döndürülür.

Ternary operatör, hesaplanan ifadenin değerini döndürdüğü için, koşula bağlı olarak bir değişkene farklı değerler atamak amacıyla kullanılabilir.

Aşağıda, aynı işlemin `if...else` ifadesi kullanılarak nasıl yapılabileceğine dair bir örnek yer almaktadır.

`let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); *// 'adult'*`

Aynı kod, ternary operatör kullanılarak yeniden yazılabilir.

`const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); *// 'adult'*`

İkinci örnek: İki sayı arasında büyük olanın bulunması: `if...else` ifadesi kullanılarak.

`const a = 5*;*
const b = 10*;*
let biggerNumber*;*

if (a > b) {
  biggerNumber = a*;*
} else {
  biggerNumber = b*;*
}

console.log(biggerNumber)*; // 10*`

Ternary operatörü kullanarak, yukarıdaki kodu basitleştirebilirsiniz.

`const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;

console.log(biggerNumber); *// 10*`

```
Ternary operatörü,atama veya dönüş işlemlerinde en basit durumlarda kullanılması önerilir. Ancakkarmaşık dallanmalarda kullanılması tavsiye edilmez, çünkü bu, kodun okunmasını ve anlaşılmasını zorlaştırabilir.
```

# **Görev**

`checkPassword(password)` işlevi, parametre olarak iletilen şifreyi (`password`) saklanan yönetici şifresi (`correctPassword`) ile karşılaştırır ve sonucu bildiren bir ileti dizesini döndürür.

Ternary operatörü kullanarak işlevi şu şekilde tamamlayın:

- Eğer `password` ve `correctPassword` değerleri eşleşirse, işlev `"Access granted"` dizesini döndürmelidir.
- Aksi takdirde, işlev `"Access denied, wrong password!"` dizesini döndürmelidir.

# **Testler**

- `checkPassword(password)` işlevi tanımlanmalıdır.
- Ternary operatör kullanılmalıdır.
- `checkPassword("jqueryismyjam")` çağrısı, `"Access granted"` yanıtını döndürmelidir
- `checkPassword("angul4r1sl1f3")` çağrısı, `"Access denied, wrong password!"` yanıtını döndürmelidir
- `checkPassword("r3actsux")` çağrısı, `"Access denied, wrong password!"` yanıtını döndürmelidir

# **Doğru cevap**

`function checkPassword(password) {
  const correctPassword = "jqueryismyjam";

  return password === correctPassword
    ? "Access granted"
    : "Access denied, wrong password!";
}`

---

### **Konu: checkPassword(password) fonksiyonu**

- Düşün ki bir **kulübün kapısı** var.
- Kapının şifresi "jqueryismyjam". (Bu bizim correctPassword.)
- Sen kapıya gelip bir şifre söylüyorsun (password).

Kapı şunu yapıyor:

👉 Eğer söylediğin şifre **doğru şifreyle aynı** ise:

➡️ Kapı açılıyor ve "Access granted" (yani **“Giriş izni verildi”**) yazıyor.

👉 Eğer söylediğin şifre **yanlış** ise:

➡️ Kapı kapanıyor ve "Access denied, wrong password!" (yani **“Giriş reddedildi, yanlış şifre”**) yazıyor.

---

### **Ternary (üçlü) operatör**

Bu, kapıya şöyle sormak gibi:

- **Soru:** “Şifre doğru mu ❓”
- **Evet:** "Access granted"
- **Hayır:** "Access denied, wrong password!"

Kodda bunun kısa yazımı var:

```
password === correctPassword
  ? "Access granted"
  : "Access denied, wrong password!";
```

Burada ? **“evetse bunu yap”**, : **“değilse bunu yap”** demek.

---

Yani bu kod aslında şu uzun if-else’nin kısasıdır:

```
if (password === correctPassword) {
  return "Access granted";
} else {
  return "Access denied, wrong password!";
}
```

---

💡 Kısacası: **Doğru şifre söylersen kapı açılır, yanlış söylersen kapanır.**

Ternary sadece bu “aç/kapat” kararını daha kısa yazmamızı sağlar.