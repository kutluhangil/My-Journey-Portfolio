# Mantıksal "VEYA” - Logical OR (||)

VEYA işleci (`||`) tüm işlenenleri mantıksal bir türe (`true` veya `false`) dönüştürür ve bunlardan birinin değerini döndürür.

İşlenenlerden en az birinin "doğru" olup olmadığını kontrol etmenizi sağlar.

Operatör soldan sağa doğru hesaplanır.

`expression1 || expression2`

İşlenenlerden **en az biri** `true` değerine dönüştürülebiliyorsa, mantıksal VEYA işleminin sonucu bu işlenendir.

`console.log(true || false); *// true*console.log(false || true); *// true*console.log(5 || false); *// 5*console.log(false || 5); *// 5*console.log("hello" || 0); *// "hello"*console.log(0 || "hello"); *// "hello"*`

VEYA mantıksal işleci, `true` değerine dönüşen bir işlenen bulur bulmaz durur ve değerini döndürür. **İlk işlenen** doğruysa, ikincisi değerlendirmeye bile alınmaz. Bu, özellikle ikinci işlenen yüksek hesaplama maliyetine sahip bir ifade olduğunda pratik uygulamalara sahip olabilir.

`console.log(5 || 3); *// 5*console.log(3 || 5); *// 3*console.log("mango" || "poly"); *// "mango"*console.log("poly" || "mango"); *// "poly"*`

**Tüm işlenenler** `false` değerine dönüştürülürse, sonuç **en sağdaki** işlenenin değeridir.

`console.log(0 || false); *// false*console.log(false || 0); *// 0*console.log(null || ""); *// ""*console.log("" || null); *// null*`

```
VEYA işleci doğru işlenen üzerinde kapanır ve takılı kaldığı işlenenin değerini veya en sağdaki işlenenin değerini döndürür. Sol işlenentrue değerine dönüştürülürse, sağ işlenen değerlendirilmez.

```

Uygulamada, VEYA operatörü birden fazla koşulu test etmek için de kullanılır.

`const a = 5;
console.log(a < 10 || a > 30); // true || false -> true

const b = 50;
console.log(b < 10 || b > 30); // false || true -> true

const c = 20;
console.log(c - 20 || c * 2); // 0 || 40 -> 40`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7b51b462-8f88-4833-955a-202553647507Frame%2048589.jpg)

Özellikle, `if` ifadesinin koşulunda.

`const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if(screenWidth <= sm || screenWidth > md) {
	console.log("Mobile or Desktop screen");
  *// koşullardan hiçbiri doğru olmadığı için konsol boş olacaktır*
}`

# **Görev**

`checkAccess(subType)` işlevi, kullanıcının içeriğe erişim hakkını kontrol eder. Bu işlev, abonelik türüne göre çalışır. "VEYA" operatörünü kullanarak, işlev kodunu şu şekilde tamamlayın: eğer `subType` parametresinin değeri `"pro"` veya `"vip"` dizesine eşitse, işlev `true` değerini döndürmeli ve kullanıcı erişim elde eder. Aksi takdirde `false` değeri döndürmelidir.

# **Testler**

- `checkAccess(subType)` işlevi tanımlanmalı.
- Kullanılan operatör `||` olmalıdır.
- `checkAccess("pro")` çağrısı `true` değerini döndürmelidir.
- `checkAccess("starter")` çağrısı `false` değerini döndürmelidir.
- `checkAccess("vip")` çağrısı `true` değerini döndürmelidir.
- `checkAccess("free")` çağrısı `false` değerini döndürmelidir.

# **Doğru cevap**

`function checkAccess(subType) {
  return subType === "pro" || subType === "vip";
}`