# İndeksleme elemanları

Dizeler, her karakterin kendine ait bir sıra numarasına (dizin) sahip olduğu karakter kümeleridir. Dize öğeleri **sıfırdan** başlayan bir şekilde indekslenir: İlk karakterin indeksi 0, ikinci karakterin indeksi 1, üçüncü karakterin indeksi 2 şeklinde devam eder.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7521c6af-44ec-4f11-bb30-37cd719fcd48m01-b03-s06.jpg)

Örneğin, `"JavaScript"` dizesinde, `J` harfi `0` konum dizinindedir.

`t` harfi `9` dizinindedir.

`"JavaScript"` dizesinin uzunluğu `10`, yani dizenin son öğesinin indeksi her zaman uzunluğundan bir eksiktir.

Bir dize içindeki belirli bir karaktere erişmek için, istenen karakterin indeksini belirterek **köşeli parantez sözdizimi** kullanılır: `string[index]`.

`const product = "Repair droid";
console.log(product[0]); *// 'R'*console.log(product[5]); *// 'r'*console.log(product[11]); *// 'd'*`

Bir dizenin son karakterine, dizin numarasını kullanarak erişebilirsiniz: `string[lastIndex]`.

Son karakterin indeksini bulmak için, dizenin uzunluğundan 1 çıkarılır: `string.length - 1`.

`const product = "Repair droid"*;*
const lastElementIndex = product.length - 1*;*
console.log(product[lastElementIndex])*; // 'd'*`

Yeni bir değişken tanımlamadan bir dizenin son karakterine erişmek için, `product.length - 1` ifadesini doğrudan köşeli parantez içine yazabilirsiniz.

`const product = "Repair droid";
console.log(product[product.length - 1]); // 'd'`

# **Görev**

Aşağıdaki değerleri değişkenlere yazan kodu ekleyin:

- `courseTopicLength` — dizenin uzunluğu.
- `firstElement` — dizenin ilk karakteri.
- `lastElement` — dizenin son karakteri.

# **Testler**

- `courseTopic` değişkeni tanımlanır
- `courseTopic` değişkeninin değeri `"JavaScript essentials"` dizesidir.
- `courseTopicLength` değişkeni tanımlanır
- `courseTopicLength` değişkeninin değeri `21`.
- `firstElement` değişkeni tanımlanır
- `firstElement` değişkeninin değeri `"J"` dizesidir.
- `lastElement` değişkeni tanımlanır
- `lastElement` değişkeninin değeri `"s"` dizesidir.

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length; // 21
const firstElement = courseTopic[0];          // "J"
const lastElement = courseTopic[courseTopicLength - 1]; // "s"

console.log(courseTopicLength); // 21
console.log(firstElement);      // "J"
console.log(lastElement);       // "s"