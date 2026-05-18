# Özellik flex-wrap

Varsayılan olarak, `display: flex` özelliği, öğeleri tek bir satıra yerleştirilen ve gerekirse sıkıştırılan tek satırlı bir kapsayıcı oluşturur.

`flex-wrap` özelliği tek satırlı bir konteyneri çok satırlı bir konteynere dönüştürmenizi sağlar. Elemanlar, içinde boşluk olduğu sürece satıra eklenecek ve ardından otomatik olarak başka bir satır oluşturulacaktır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/983cdd2b-cfd7-46d1-9684-e1740204885eFrame%2048123.png)

`Flex-wrap` özelliği aşağıdaki değerlere sahiptir:

`flex-wrap: nowrap | wrap | wrap-reverse`

- `nowrap` - tüm öğeler aynı satırda olacaktır. Bu varsayılan değerdir.
- `wrap` - öğelerin, varsayılan olarak yukarıdan aşağıya (`cross axis` boyunca) düzenlenmiş olan diğer satırlara atlamasına izin verir.
- `wrap-reverse` - elemanların aşağıdan yukarıya doğru (`cross axis` boyunca) düzenlenmiş diğer satırlara atlamasına izin verir.