# Karşılaştırma operatörleri

Şimdi, bu operatörlerin nasıl kullanıldığına dair örneklere bakalım:

**Karşılaştırma operatörleri**, iki değeri karşılaştırmak ve sonuca göre bir boolean değer (`true` veya `false`) döndürmek için kullanılır.

İşte bazı temel karşılaştırma operatörleri:

- `>` (büyüktür): Soldaki sayı, sağdakinden büyükse `true`; değilse `false` döndürür.
- `<` (küçüktür): Soldaki sayı, sağdakinden küçükse `true`; değilse `false` döndürür.
- `>=`: Soldaki sayı, sağdakinden büyük veya eşitse `true`; aksi takdirde `false` döndürür.
- `<=`: Soldaki sayı, sağdakinden küçük veya eşitse `true`; aksi takdirde `false` döndürür.

Şimdi, bu operatörlerin nasıl çalıştığını örneklerle inceleyelim:

`const a = 2;
const b = 5;

console.log(a > b); *// false*console.log(b > a); *// true*console.log(a >= b); *// false*console.log(b >= a); *// true*console.log(a < b); *// true*console.log(b < a); *// false*console.log(a <= b); *// true*console.log(b <= a); *// false*`

Karşılaştırma operatörlerini kullanmanın temel amacı, iki değeri karşılaştırarak bir **boolean** (true veya false) sonucu elde etmektir. Bu sonuç, belirli kararlar almanızı ve programın davranışını koşullara göre yönlendirmenizi sağlar.

Karşılaştırma operatörleri, genellikle ileride öğreneceğiniz **koşullu ifadeler** ve **döngüler** içinde kullanılır. Bu sayede, koşulları kontrol edebilir ve karşılaştırmanın sonucuna göre belirli işlemleri gerçekleştirebilirsiniz.

Örneğin, 18 yaşın üzerindeki kullanıcılara belirli bir ürün grubuna erişim izni verilmesi gibi.

# **Görev**

`isAdult` değişkenini tanımlayın ve `age` değişkeninin değerini kontrol ederek sonucunu verin.

Karşılaştırma operatörlerini kullanın ve kodu şu şekilde tamamlayın:

- Kullanıcının yaşı `18`e eşit veya büyükse, `isAdult` değişkeninin değeri `true` olacaktır.
- Kullanıcının yaşı `18`den küçükse, `isAdult` değişkeninin değeri `false` olacaktır.

# **Testler**

- `age` değişkeni tanımlanır
- `isAdult(age)` değişkeni tanımlanır
- `isAdult(20)`, `true` döndürür
- `isAdult(14)`, `false` döndürür
- `isAdult(8)`, `false` döndürür
- `isAdult(37)`, `true` döndürür
- Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür.

# **Testler**

- Eğer `age` değeri `16` değerine eşitse, `isAdult` değeri `false` olacaktır.
- Eğer `age` değeri `14` ise, `isAdult` değeri `false` olacaktır.
- Eğer `age` değeri `18` ise, `isAdult` değeri `true` olacaktır.
- Eğer `age` değeri `37` ise, `isAdult` değeri `true` olacaktır.

CEVAP:

`const age = 16;
const isAdult = age >= 18;`

## **Amaç**

- age değişkeni kullanıcının yaşı.
- isAdult değişkeni **18 ve üzeri** ise true, aksi halde false olmalı.

## **Neyi kullanacağız?**

- Karşılaştırma operatörü: >=
- Bu operatör bir **boolean** (true/false) döndürür.

## **En basit çözüm**

```
const age = 20;                 // örnek: 20 yaş
const isAdult = age >= 18;      // 20 >= 18 → true
console.log(isAdult);           // true
```

### **Neden böyle?**

- age >= 18 ifadesi zaten true ya da false üretir; ekstra if yazmaya gerek yok.

## **Alternatif (açık biçim, istersen)**

```
const age = 20;
const isAdult = (age >= 18) ? true : false; // gereksiz ama okunaklı
```

---

## **Test edelim (sorudaki dört değerle)**

```
function check(age){
  const isAdult = age >= 18;
  console.log(age, "→", isAdult);
}

check(8);   // false
check(14);  // false
check(20);  // true
check(37);  // true
```

Beklenen çıktı:

```
8  → false
14 → false
20 → true
37 → true
```

## **Küçük not 🤓**

- > kullanırsan 18 yaşı **yetişkin sayılmaz** (hatalı olur). Bu yüzden **>=** kullanıyoruz.

[**Eşitlik operatörleri**](Kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma%20operat%C3%B6rleri/E%C5%9Fitlik%20operat%C3%B6rleri%20266673274a8e808f844dd847846c1510.md)

[**Tür dönüştürme: sayılar**](Kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma%20operat%C3%B6rleri/T%C3%BCr%20d%C3%B6n%C3%BC%C5%9Ft%C3%BCrme%20say%C4%B1lar%20266673274a8e8058b16fc3f699e124cf.md)

[**Dizeleri sayılara dönüştürme**](Kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma%20operat%C3%B6rleri/Dizeleri%20say%C4%B1lara%20d%C3%B6n%C3%BC%C5%9Ft%C3%BCrme%20266673274a8e8051b3b5d7cbc5c65124.md)

[**Aritmetik fonksiyonlar**](Kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma%20operat%C3%B6rleri/Aritmetik%20fonksiyonlar%20266673274a8e8092b477cbc85cf36979.md)

[**Kesirli sayılar**](Kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma%20operat%C3%B6rleri/Kesirli%20say%C4%B1lar%20266673274a8e805a9067caa8f66f3a8e.md)