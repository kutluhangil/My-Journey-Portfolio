# push() metodu

`push()` dizi metodu, bir dizinin sonuna bir veya daha fazla öğe eklemek için kullanılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/918aedb7-4007-4f70-bd09-513e3605da8dFrame%2048601.jpg)

**`push()`** metodunun sözdizimi aşağıdaki gibidir:

`array.push(element1, element2, ..., elementN);`

Burada:

- **`array`** eleman eklemek istediğiniz kaynak dizidir
- **`element1, element2, ..., elementN`** - dizinin sonuna eklenecek elemanlar

**`push()`** metodunun kullanımına bir örnek:

`const planets = ["Earth", "Mars", "Venus"];

planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]`

Örnekte, başlangıç elemanları `"Earth"`, `"Mars"` ve `"Venus"` olan bir `planets` dizisi oluşturulmuştur. Ardından `push()` metodu kullanılarak, dizinin sonuna sırasıyla `"Jupiter"`, `"Saturn"` ve `"Neptune"` öğeleri eklenir. `push()` metodu çalıştırıldıktan sonra, `planets` dizisi bu yeni elemanları da içerecektir.

Bir döngü ile, tekrarlayan işlemler gerçekleştirebilir ve her yinelemede diziye yeni elemanlar eklemek için **`push`** metodunu kullanabiliriz. Bu, dinamik olarak eklenebilen elemanlara sahip bir dizi oluşturmamız gerektiğinde çok kullanışlıdır.

`const tags = [];

for(let i = 0; i < 3; i += 1) {
	tags.push(`tag-${i}`);
}

console.log(tags); *// ["tag-0", "tag-1", "tag-2"]*`

Bu örnekte, boş bir `tags` dizisi oluşturulur ve `"tag-0"`, `"tag-1"`, `"tag-2"` şeklindeki dizeler bir `for` döngüsü ile diziye eklenir. Her etiket, `i` değişkeninin değerine göre şablon dize kullanılarak dinamik biçimde üretilir. Sonuç olarak, `tags` dizisi bu benzersiz değerleri içerir.

# **Görev**

`CreateArrayOfNumbers(min, max)` fonksiyonunun kodunu, `min` değerinden `max` değerine kadar olan tüm tamsayılardan oluşan bir dizi döndürecek şekilde tamamlayın.

# **Testler**

- `createArrayOfNumbers(min, max)` fonksiyonu bildirilmiştir
- `CreateArrayOfNumbers(1, 3)` fonksiyonu çağrıldığında `[1, 2, 3]` döndürülür
- `createArrayOfNumbers(14, 17)` fonksiyonu çağrıldığında `[14, 15, 16, 17]` döndürülür
- `createArrayOfNumbers(29, 34)` çağrısı `[29, 30, 31, 32, 33, 34]` döndürür
- Rastgele `min` ve `max` değerleriyle `createArrayOfNumbers()` fonksiyonunun çağrılması doğru diziyi döndürür
- `for` döngüsü `push` metodunu kullanır

`function createArrayOfNumbers(min, max) {}`

`function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}`