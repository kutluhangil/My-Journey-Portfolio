# Switch Operatörü

`switch` operatörü, bir ifadenin değerine bağlı olarak farklı eylemler gerçekleştirmeyi sağlar.

Birden fazla durumu kontrol etmek gerektiğinde, `switch` kullanımı; `if...else` ve `else if` ifadelerine kıyasla daha kompakt ve okunabilir bir alternatif sunar.

İşte `switch` operatörünün genel sözdizimi:

`switch (expression) {
  case value1:
    *// Eğer ifade (expression), value1'e eşitse çalıştırılacak kod*break;
  case value2:
    *// Eğer ifade (expression), value2'e eşitse çalıştırılacak kod*break;
  *// ...*default:
    *// Eğer ifade (expression) herhangi bir değere karşılık gelmiyorsa yürütülen kod*
}`

**Nasıl çalışır:**

1. `switch` ifadesindeki ifade hesaplanır.
2. Bu ifade, yukarıdan aşağıya her bir `case` bloğunun değeriyle karşılaştırılır.
3. İfade, bir `case` değeriyle eşleşirse, o bloğun içindeki kod çalıştırılır.
4. Bloğun sonunda `break` ifadesi yer almalıdır; bu, `switch` yapısından çıkılmasını sağlar ve diğer `case` bloklarının çalışmasını engeller.
5. Eğer hiçbir `case` değeri ifadeyle eşleşmezse, varsa `default` bloğundaki kod çalıştırılır.

```
default bloğu varsa,switch kod bloğunda en sona yerleştirilmelidir.

```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e1fc9ab6-f8d2-4dcd-94f1-004275bde391Frame%2048586.jpg)

`switch` ifadesinin nasıl kullanıldığına dair bir örnek:

`const fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
}`

Bu örnekte, `fruit` değişkeninin değeri, `case` bloklarında belirtilen farklı değerlerle karşılaştırılır.

Eğer `fruit` değişkeninin değeri bu değerlerden biriyle eşleşirse, ilgili mesaj görüntülenir. Hiçbir `case` bloğu eşleşmezse, `default` bloğundaki kod çalıştırılır.

- Örnekte görüldüğü gibi, `switch` ifadesi tek bir genel soruyla sınırlıdır (neyi karşılaştırmak) ve bir dizi yanıt seçeneğiyle (neyle karşılaştırmak).
- `switch` bloğundaki ifade - herhangi bir türde bir ifade (bir değişken veya karmaşık hesaplamalar) olup, sonuç üstten alta doğru sıkı bir şekilde (`===`) tüm `case` bloklarındaki değerlerle karşılaştırılır. Yani büyüktür veya küçüktür karşılaştırmasi yapilamaz, sadece sıkı eşleşme yapılabilir.
- `break` ifadesi her `case` bloğunun sonuna eklenir. `break` ifadesinin işlevi, bir `case` bloğu çalıştırıldıktan sonra, karşılaştırmaya devam etmeden hemen `switch` bloğundan sonraki kod kısmına geçmektir.
- Eğer hiçbir eşleşme olmazsa, varsayılan kodunu çalıştırmak gerekir. Bunun için tüm `case` bloklarından sonra bir `default` bloğu eklenir.
- `default` bloğundan sonra `break` ifadesi gerekli değildir, çünkü bu zaten `switch` içinde çalışacak son şeydir ve kontrol kendiliğinden sonrasındaki koda aktarılır.

# **break Operatörü**

Bir `switch` bloğunda, belirli bir durumun yürütülmesinden sonra yapının dışına çıkmak için genellikle `break` operatörü kullanılır.

Eğer `break` ifadesi belirtilmezse, kodun yürütülmesi bir sonraki `case` bloğuna (ve gerekirse sonrasına) devam eder. Bu davranışa **“fall-through”** (düşme) denir.

Bazı durumlarda, aynı kodun birden fazla `case` bloğunda çalıştırılması isteniyorsa, araya `break` ifadesi koymadan bloklar arka arkaya yazılabilir.

`const day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('This is a working day');
    break;
  case 6:
  case 7:
    console.log('It is a day off');
    break;
  default:
    console.log('Invalid');
}`

Bu örnekte `case 1`, `case 2`, `case 3`, `case 4`, `case 5` gibi birkaç blok başarısız oluyor ve bu durumda ifadelerinin eşitliği durumunda aynı kod çalıştırılıyor çünkü aralarında `break` operatörleri bulunmamaktadır.

# **Görev**

`getSubscriptionPrice(type)` işlevi, kullanıcının abonelik türü ile bir dize alır (parametre `type`), onu aylık üç olası abonelik türüyle kontrol eder ve fiyatı veya yanlış abonelik türü hakkında bir ileti döndürür.

Eğer `type` parametresinin değeri bir dize ise:

- `"starter"` - Abonelik fiyatı `0` kredi.
- `"professional"` - Abonelik fiyatı `20` kredi.
- `"organization"` - Abonelik fiyatı `50` kredi.

Başka herhangi bir `type` parametre değeri için `"Invalid subscription type!"` dizesi döndürülür.

Bu görevi çözmek için bir `switch` operatörü kullanın!

# **Testler**

- `getSubscriptionPrice(type)` fonksiyonu tanımlıdır
- `getSubscriptionPrice("professional")` çağrısı `20` sayısını döndürür
- `getSubscriptionPrice("organization")` çağrısı `50` sayısını döndürür
- `getSubscriptionPrice("starter")` çağrısı `0` sayısını döndürür
- `getSubscriptionPrice("random")` çağrısı `"Invalid subscription type!"` dizesini döndürür
- `getSubscriptionPrice("premium")` çağrısı `"Invalid subscription type!"` dizesini döndürür

# **Doğru cevap**

`function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;

    case "professional":
      return 20;

    case "organization":
      return 50;

    default:
      return "Invalid subscription type!";
  }
}`