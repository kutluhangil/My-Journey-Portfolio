# Değişken isimleri

Bir değişken için isim seçerken uyulması gereken çeşitli kurallar vardır. Bu kurallar, isimlerin anlaşılır olmasını ve genel kabul görmüş standartlara uygunluğunu sağlamak için önemlidir.

- Değişken adları harfler (a-z, A-Z), sayılar (0-9), alt çizgi (*) ve dolar işareti ($) içerebilir.*
- *Bir değişken adının ilk karakteri bir Latin harfi, alt çizgi (*) ya da dolar işareti ($) olmalıdır. Sonraki karakterler, izin verilen bu karakterlerden herhangi biri olabilir.
- Değişken adları büyük/küçük harf duyarlıdır; örneğin `user`, `usEr` ve `User` farklı değişkenler olarak değerlendirilir.

İyi bir değişken adı, açık ve anlaşılır olmalı; değişkenin amacı veya içeriği hakkında bilgi vermelidir.

`*// ❌ Kötü*
chislo
korzina_tovariv
profil_koristuvacha

*// ✅ Güzel*number
cart
userProfile`

Değişkenleri adlandırmak için *camelCase* kullanmak iyi bir yöntemdir. *camelCase* gösteriminde ilk kelime küçük harfle yazılır, sonraki her kelime ise büyük harfle başlar. Örneğin: `user`, `getUserData`, `isActive`, `activeGuestCount`.

Değişken adlarının büyük/küçük harf duyarlılığına dikkat edin. Örneğin, `isActive` ve `IsActive` farklı değişkenlerdir.

Ayrıca, bazı sözcüklerin önceden tanımlanmış anahtar kelimeler olduğunu unutmamak gerekir. Bu kelimeler dilin yapısında özel bir anlam taşır ve belirli işlevler için ayrılmıştır. Bu nedenle, anahtar kelimeleri değişken adı olarak kullanmak hatalara yol açar ve yasaktır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1516925e-fd76-4ffd-95ea-b1ba5d65a903m01-b02-s04.jpg)