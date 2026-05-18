# Değişkenlerin tanımlanması

Değişken, veri depolamak için kullanılan bir kaptır.

Bir değişken iki temel bileşenden oluşur:

- Bir tanımlayıcı (benzersiz bir ad)
- Değerin depolandığı bir bellek konumu

Bir değişkeni, üzerinde ismi yazılı ve içinde bir değer bulunan bir kutuya benzetebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/275ae0b1-59ca-4149-bab7-e27925474efam01-b01-s01.jpg)

Şimdi değişken tanımlama örneklerine bakalım.

`const age = 20*;*
const username = "Mango"*;*`

- Bir değişken tanımlaması, bir anahtar sözcükle başlar (örneğin: const). Modern JavaScript sözdiziminde değişkenleri `const` ve `let` anahtar sözcükleriyle tanımlamak daha güvenlidir.
- Anahtar sözcük kullanılmadan yapılan değişken tanımlamaları hatalara yol açabilir.
- Anahtar sözcüğün ardından, bir boşluk bırakılarak değişken adı yazılır (örnek: `age`, `username`).
- Bir değişkene değer atamak için `=` atama operatörü kullanılır.
- Değişken tanımlama ifadesi, noktalı virgül `;` ile sona ermelidir.
- Daha iyi okunabilirlik sağlamak için her yeni değişkenin yeni bir satırda tanımlanması önerilir.

Bir değişken tanımlandıktan sonra, kodun ilerleyen bölümlerinde değişkene adını kullanarak erişebilirsiniz. Bu, değişkenin değerini kullanarak işlemler gerçekleştirmenizi sağlar. Örneğin, geliştirici araçları konsolunda değişkenin değerini görüntülemek için adını kullanabilirsiniz.

`const age = 20*;*
console.log(age)*; // 20*

const username = "Mango"*;*
console.log(username)*; // "Mango"*`

`const` anahtar kelimesini kullanarak iki değişken bildirin: `productName` - ürün adını saklamak için, `pricePerItem` - birim fiyatı saklamak için.

Değişkenlerinizi tanımlarken onlara aşağıdaki değerleri atayın:

- ürün adı - `"Droid"` dizesi;
- ürün birim fiyatı `2000` sayısıdır.
- `productName` değişkeni tanımlanmalıdır.
- `productName` değişkeni `const` kullanılarak tanımlanmalıdır.
- `productName` değişkeninin değeri `"Droid"` dizesidir
- `pricePerItem` değişkeni tanımlanmalıdı.
- `pricePerItem` değişkeni `const` kullanılarak tanımlanmalıdır.
- `pricePerItem` değişkeninin değeri `2000` sayısı olmalıdır.

const productName = "Droid";
console.log(productName); // "Droid"

cont pricePerItem = "2000"
console.log(pricePerItem); // 2000