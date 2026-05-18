# İfade ve literal

İnsan dillerinde tamamlanmış bir düşünceyi ifade eden cümleler bulunmaktadır. Cümleler ifadelerden oluşur.

Benzer şekilde, programlama dillerinde bilgisayara komut veren talimatlar bulunmaktadır. Talimatlar, küçük parçalardan oluşan ifadelerden oluşur.

**İfade** (expression) - Bu, bir değişkeni veya değeri işaret eden veya operatörlerle birleştirilmiş bir değişkenler ve değerler kümesini işaret eden bir ifadedir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/395997bc-c509-41c0-b361-532d47752694m01-b01-s04.jpg)

Bu örnekte talimatlar 5 ifade içeriyor. Her talimat, görselleştirme amacıyla kare parantezlerle belirtilmiştir (bu örnekteki parantezler dil özelliği olarak kullanılmamıştır):

- `2` — bir literalin değer ifadesi. Burada, sayı 2'yi temsil eden sayısal bir literali kullanılmıştır.
- `b` ve `a` — değişken ifadeleri. Bu ifadeler, değişken `b` ve `a`'nın değerlerinin kullanılması gerektiğini belirtir. Bununla birlikte, bu değişkenlerin değerleri, sadece değişkenler atama operatörünün sağ tarafında bulunduğunda kullanılacaktır.
- `b * 2` — çarpma aritmetik ifadesi. Burada, değişken `b`'nin değeri 2 ile çarpılmıştır.
- `a = b * 2` — atama ifadesi. Bu durumda, ifade sağ tarafın hesaplanmasını ve sonucun sol taraftaki değişken `a`'ya atama işlemini gerektirir.

Fonksiyon çağrısı ifadeleri, karşılaştırma ifadeleri gibi başka tür ifadeler de vardır. Bunları daha sonra ele alacağız. Şu anda önemli olan, kaynak kodun hangi parçalardan oluştuğunu anlamak ve onu nasıl doğru okuyacağınızı bilmektir.

**Literals**, program kodunda doğrudan belirtilen ve belirli bir veri türünü temsil eden bir değerdir.

- Sayısal(number) literaller, program kodunda yazılmış sayılardır.
- Dize(string) literalleri, tırnak işareti içinde yer alan karakter dizileridir.

Literals, değişkenlere ve diğer işlemlere başlangıç değerleri vermek için kullanılır ve belirli bir değere ihtiyaç duyulduğunda belirtilir.

`// Sayısal ifade --> number
10

// Dize ifade --> string
"JavaScript is awesome!"`

#