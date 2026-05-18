# split() metodu

String metodu **`split(delimiter)`**, dizi metodu **`join(delimiter)`**'ın tersi bir işlem gerçekleştirir. Bir dizeyi belirtilen sınırlayıcı **`delimiter`** ile bölerek bir diziye dönüştürmenize olanak tanır.

Sınırlayıcı boş bir dizeyse (karakter içermeyen bir dizeyse), dizedeki tek tek karakterlerden oluşan bir dizi elde edersiniz. Sınırlayıcı bir veya daha fazla karakter olabilir. Metodun sonucu daha sonra kullanılmak üzere bir değişkene kaydedilebilir.

**`split()`** metodunun kullanımına ilişkin örnekler:

`const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" ");
console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]`

- İlk örnekte, **`"Mango"`** dizesi bir diziye dönüştürüldü ve her harf dizinin ayrı bir elemanı oldu. Sınırlayıcı boş bir dizeydi.
- İkinci örnekte, **`"JavaScript essentials"`** dizesi, ayırıcı olarak bir boşluk kullanılarak iki dizi öğesine bölünmüştür.
- Üçüncü örnekte, **`"amazing-french-recipes"`** dizesi, ayırıcı olarak bir tire kullanılarak üç dizi öğesine bölünmüştür.

# **Görev**

Bir sistem için, kelime sayısına ve kelime başına fiyata bağlı olarak gravür fiyatını otomatik olarak hesaplayacak bir fonksiyona ihtiyaç vardır.

`CalculateEngravingPrice(message, pricePerWord)` fonksiyonu tanımlanmıştır. Bu fonksiyon sadece boşluklarla ayrılmış bir kelime dizisini (`message` parametresi) ve kelime başına gravür fiyatını (`pricePerWord` parametresi) kabul eder.

Fonksiyonun gövdesini, dizedeki tüm kelimelerin kazınmasının toplam maliyetini döndürecek şekilde tamamlayın.

# **Testler**

- Tanımlanan fonksiyon `calculateEngravingPrice(message, pricePerWord)`
- `calculateEngravingPrice("JavaScript is in my blood", 10)` sorgusu `50` döndürür.
- `calculateEngravingPrice("JavaScript is in my blood", 20)` sorgusu `100` döndürür.
- `calculateEngravingPrice("Web-development is creative work", 40)` sorgusu `160` döndürür.
- `calculateEngravingPrice("Web-development is creative work", 20)` sorgusu `80` döndürür.

`function calculateEngravingPrice(message, pricePerWord) *{}*`

`function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}`