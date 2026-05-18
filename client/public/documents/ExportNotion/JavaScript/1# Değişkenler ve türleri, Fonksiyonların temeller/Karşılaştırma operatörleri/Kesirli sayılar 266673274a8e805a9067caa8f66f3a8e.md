# Kesirli sayılar

Kesirli sayılarla işlem yaparken, bilgisayarın bellekteki sayıları **dahili olarak temsil etme biçimi** nedeniyle bazı hatalar oluşabilir.

Örneğin, `0.1 + 0.2` işleminin sonucu tam olarak `0.3` değildir.

Bunun nedeni, bilgisayarda kullanılan ikili sayı sisteminde `0.1` sayısının **sonsuz bir kesir** olarak temsil edilmesidir.

Bu tür sonsuz kesirler bellekte yalnızca belirli bir basamağa kadar saklanabilir, bu da küçük ama önemli hatalara yol açar.

`0.1` ve `0.2` toplandığında, bu iki küçük sapma birleşerek hesaplamada fark edilir bir hata oluşturur.

`console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004`

Bu sorun nasıl çözülür?

Gereken doğruluğa bağlı olarak farklı yaklaşımlar kullanılabilir.

**Yaklaşım 1**

- Sayıları yeterince büyük bir sayı ile çarpın (örneğin 10 veya 100).
- Toplama işlemini gerçekleştirin.
- Sonucu, orijinal ölçeğe döndürmek için aynı sayıya bölün.

`console.log(0.1 * 10 + 0.2 * 10); // 3
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3`

**Yaklaşım 2**

**Sonucu belirli bir ondalık basamak sayısına yuvarlamak için** `toFixed()` sayı yöntemini kullanın.

`console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2));  //  ”5.00”
console.log((8.762195).toFixed(4));  //  “8.7622”`

`toFixed()` yöntemi, belirtilen sayıda ondalık basamak içeren bir sayıyı temsil eden bir **dize** döndürür. Bu sayede, istenen doğrulukta yuvarlanmış bir sonuç elde edebilirsiniz.