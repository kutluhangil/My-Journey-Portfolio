# Homework 3 - Diziler (Arraylar) ve Fonksiyonlar

Artık şunları biliyorsunuz:

- diziler nasıl çalışır
- temel dizi yöntemleri
- bir dizi üzerinde yineleme yapmak için `for ... of` döngüsünü kullanmanın özellikleri
- fonksiyonlarla çalışırken karşılaşılan durumlar
- global ve blok scopelar arasındaki fark

Şimdi bu bilgileri uygulamaya koyma ve önceki materyalleri gözden geçirme zamanı.

# **Ev Ödevi 3**

- `goit-js-hw-03` deposunu oluşturun ve bilgisayarınıza indirin.
- `goit-js-hw-03` klasöründe, aşağıdaki şemada gösterildiği gibi bir proje yapısı oluşturun.

```
Lütfen dikkat! Dosya ve klasör adları ile bunların iç içe geçmiş yapısı belirtilen şemaya uygun olmalıdır. Aksi takdirde, çalışma kabul edilmeyecektir.

```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/27e02638-5b0d-4872-8703-e22d3c919a25Frame%2048582%20%283%29.jpg)

- Her bir görevi okuyun ve uygun dosyada tamamlayın.
- Kodun `Prettier` ile biçimlendirildiğinden ve canlı görev sayfasını açtığınızda konsolda herhangi bir hata veya uyarı olmadığından emin olun.
- Kontrol için ödevinizi teslim edin

**Teslim Formatı:** Ödev iki bağlantı içeriyor: kaynak dosyalari ve `GitHub Pages`'daki canli sayfa.

# **Görev 1. slug oluşturucu**

```
Bu görevitask-1.js dosyasında çalıştırın

```

Sorunu çözmeden önce, yeni bir terim tanımlayalım!

**Slug** terimi — okunabilir URL'ler oluşturmak için web geliştirmede kullanılan insan tarafından okunabilir benzersiz bir tanımlayıcıdır.

Örneğin, kullanıcının adres çubuğunda [`mysite.com/posts/1q8fh74tx`](http://mysite.com/posts/1q8fh74tx) adresini görmesi yerine, makalenin başlığından bir `slug` oluşturabilirsiniz. Sonuç olarak, adres daha okunabilir olacaktır: [`mysite.com/posts/arrays-for-beginners`](http://mysite.com/posts/arrays-for-beginners).

**Slug** — her zaman küçük harfli bir dizedir ve sözcükler tire ile ayrılmıştır.

Anladınız mı? Şimdi elimizdeki göreve devam edelim!

Makalenin başlığını, `title` parametresini alan ve bu dizeden oluşturulan `slug`'ı döndüren bir `slugify(title)` işlevi yazın.

- `title` parametresinin değeri, sözcükleri yalnızca boşluklarla ayrılmış dizeler olacaktır.
- Tüm `slug` karakterleri küçük harf olmalıdır.
- Tüm `slug` kelimeler bir tire ile ayrılmalıdır.

Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımlanmasından sonra yapıştırın. Konsol, sonuçları gösterecektir.

`console.log(slugify("Arrays for begginers")); *// "arrays-for-begginers"*console.log(slugify("English for developer")); *// "english-for-developer"*console.log(slugify("Ten secrets of JavaScript")); *// "ten-secrets-of-javascript"*console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); *// "how-to-become-a-junior-developer-in-two-weeks"*`

Bu kodu mentorunuzun kontrol etmesi için bırakın.

# **Mentor kontrol ederken nelere bakacaktır:**

- `slugify(title)` işlevi tanimlanir
- `slugify("Arrays for begginers")` çağrısı `"arrays-for-beginners"` değerini verir
- `slugify(" English for developer")` çağrısı `"english-for-developer”` sonucunu verir
- `slugify("Ten secrets of JavaScript")` çağrısı `"ten-secrets-of-javascript"` sonucunu verir
- `slugify("How to become a JUNIOR developer in TWO WEEKS")` çağrısı `"how-to-become-a-junior-developer-in-two-weeks"` sonucunu verir

**NEURONICS ÇÖZÜM**

`function slugify (title) {
  return title.toLowerCase().split(" ").join("-");
}`

# **Görev 2. Dizi kompozisyonu**

```
Bu görevitask-2.js dosyasında çalıştırın

```

Üç parametre alan `makeArray` adında bir fonksiyon yazın: `firstArray`, `secondArray` ve `maxLength`. Fonksiyon, `firstArray`'deki tüm elemanları ve ardından `secondArray`'deki tüm elemanları içeren yeni bir dizi oluşturmalıdır

- Yeni dizideki eleman sayısı `maxLength` değerini aşarsa, fonksiyon dizinin `maxLength` değerindeki eleman uzunluğuna sahip bir kopyasını döndürmelidir.
- Aksi takdirde, fonksiyon yeni dizinin tamamını döndürmelidir.

Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun bildiriminden sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir.

`console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []`

Bu kodu mentorunuzun kontrol etmesi için bırakın.

# **Mentor kontrol ederken nelere bakacaktır:**

- `makeArray(firstArray, secondArray, maxLength)`işlevi tanimlanir.
- `makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)` işlevi `["Mango", "Poly", "Ajax"]` sonucunu verir
- `makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)` işlevi `["Mango", "Poly", "Houston", "Ajax"]` sonucunu verir
- `makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)` işlevi `["Mango", "Ajax", "Chelsea"]` sonucunu verir
- `makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)` işlevi `["Earth", "Jupiter"]` sonucunu verir
- `makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)` işlevi `["Earth", "Jupiter", "Neptune", "Uranus"]` sonucunu verir
- `makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)` işlevi `[]` sonucunu verir
- `makeArray()` fonksiyonunun rastgele diziler ve rastgele bir sayı ile çağrılması doğru diziyi döndürür

# **NÖRONİK ÇÖZÜM**

`function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    newArray.length = maxLength;
  }
  return newArray;
}`

# **Görev 3. Bir sayı dizisini filtreleme**

```
Bu görevitask-3.js dosyasında çalıştırın

```

Parametre olarak bir sayı dizisi ve bir değer alan bir `filterArray(numbers, value)` fonksiyonu yazın. Fonksiyon, `numbers` dizisinden yalnızca `value` değerinden büyük olan sayılardan oluşan yeni bir dizi döndürmelidir.

Özelliklerin içinde:

- Eşleşen sayıları ekleyeceğiniz boş bir dizi oluşturun.
- `numbers` dizisinin her bir öğesi üzerinde yineleme yapmak için bir döngü kullanın.
- Her bir öğeyi kontrol etmek ve dizinize eklemek için döngü içindeki koşullu `if` ifadesini kullanın.
- Sonuç olarak eşleşen sayıları içeren yeni dizinizi döndürün.

Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun bildiriminden sonra yapıştırın. Konsol, çalışmanın sonuçlarını gösterecektir.

`console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]`

Bu kodu mentorunuzun kontrol etmesi için bırakın.

# **Mentor kontrol ederken nelere bakacaktır:**

- `filterArray(numbers, value)` işlevi tanimlanir
- `filterArray([1, 2, 3, 4, 5], 3)` işlevi `[4, 5]` sonucunu verir.
- `filterArray([1, 2, 3, 4, 5], 4)` işlevi `[5]` sonucunu verir.
- `filterArray([1, 2, 3, 4, 5], 5)` işlevi `[]` sonucunu verir.
- `filterArray([12, 24, 8, 41, 76], 38)` işlevi `[41, 76]` sonucunu verir.
- `filterArray([12, 24, 8, 41, 76], 20)` işlevi `[24, 41, 76]` sonucunu verir.
- `filterArray()` işlevinin rastgele bir dizi ve bir sayı ile çağrılması doğru diziyi döndürür

# **NÖRONİK ÇÖZÜM**

`function filterArray(numbers, value) {
  const newArray = [];

  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }

  return newArray;
}`

TASK 1 Cevap:

Bir **slug** oluşturacağız → başlık (title) stringini alıp şu kurallara çevireceğiz:

- Tüm harfler **küçük harf** olmalı.
- Kelimeler **boşlukla değil, tireyle (-)** ayrılmalı.

Kod:

```
function slugify(title) {
  return title
    .toLowerCase()     // 1. Hepsini küçük harfe çevir
    .split(" ")        // 2. Boşluklardan ayır, bir dizi yap
    .join("-");        // 3. Diziyi tekrar string yap, aralara "-" koy
}
```

---

### **🔎 Ne oluyor sırayla?**

Örnek: "How to become a JUNIOR developer in TWO WEEKS"

1. **toLowerCase()**

```
"How to become a JUNIOR developer in TWO WEEKS".toLowerCase()
// "how to become a junior developer in two weeks"
```

1. 
2. **split(” “)**

```
"how to become a junior developer in two weeks".split(" ")
// ["how", "to", "become", "a", "junior", "developer", "in", "two", "weeks"]
```

1. 
2. **join(”-”)**

```
["how", "to", "become", "a", "junior", "developer", "in", "two", "weeks"].join("-")
// "how-to-become-a-junior-developer-in-two-weeks"
```

---

### **🎯 Kısaca:**

- toLowerCase() → tümünü küçük harfe çeviriyor.
- split(" ") → cümleyi boşluklardan kesip bir **array** yapıyor.
- join("-") → o array’i tekrar stringe çeviriyor ama boşluk yerine tire koyuyor.

Sonuç: how-to-become-a-junior-developer-in-two-weeks

---

TASK-2 Cevap:

---

### **✅ Görev Tanımı**

- İki diziyi (firstArray, secondArray) **birleştiriyoruz**.
- Sonra bir sınır (maxLength) koyuyoruz:
    - Eğer birleşmiş dizi bu sınırdan uzunsa, **kesiyoruz**.
    - Eğer sınırdan kısa veya eşitse, aynen döndürüyoruz.

---

### **📌 Çözüm**

```
function makeArray(firstArray, secondArray, maxLength) {
  // 1. Dizileri birleştir
  const newArray = firstArray.concat(secondArray);

  // 2. Uzunluk kontrolü yap
  if (newArray.length > maxLength) {
    newArray.length = maxLength; // fazla elemanları kes
  }

  // 3. Sonucu döndür
  return newArray;
}
```

---

### **🔎 Adım Adım Örnek**

**Örnek 1:**

```
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
```

1. firstArray.concat(secondArray)
    
    → ["Mango", "Poly", "Ajax", "Chelsea"]
    
2. newArray.length > 3 → evet
    
    newArray.length = 3 yapıyoruz → ["Mango", "Poly", "Ajax"]
    

✅ Sonuç: ["Mango", "Poly", "Ajax"]

---

**Örnek 2:**

```
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
```

1. Birleşmiş hali → ["Earth", "Jupiter", "Neptune", "Uranus"]
2. Uzunluğu 4 → maxLength zaten 4, kesmeye gerek yok.

✅ Sonuç: ["Earth", "Jupiter", "Neptune", "Uranus"]

---

**Örnek 3 (maxLength = 0):**

```
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
```

1. Birleşmiş hali → ["Earth", "Jupiter", "Neptune", "Uranus", "Venus"]
2. newArray.length = 0 → dizi tamamen boşaltılır

✅ Sonuç: []

---

### **🎯 Kısaca**

- concat() → iki diziyi birleştiriyor.
- newArray.length = maxLength → diziyi kısaltıyor (fazla elemanları atıyor).
- Fonksiyon çok esnek, çünkü hem birleşmeyi hem de kısaltmayı tek seferde hallediyor.

---

TASK-3 Cevap: