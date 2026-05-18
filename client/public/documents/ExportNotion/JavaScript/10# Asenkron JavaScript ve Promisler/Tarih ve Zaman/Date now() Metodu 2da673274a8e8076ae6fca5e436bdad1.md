# Date.now() Metodu

Zaten zaman nesnesi oluşturma örneğini inceledik. Bu nesnenin `getTime` adında bir metodu vardır, bu metot zaman anının sayısal temsilini milisaniye cinsinden almayı sağlar.

```
const date = new Date();
console.log(date.getTime()); // 1624021654154
```

Eğer ihtiyacınız olan tek şey zamanın sayısal temsili ise, tam bir nesne oluşturmanın bir anlamı yoktur. Mevcut zamanı milisaniye cinsinden almanın hızlı ve pratik bir yolu olarak `Date.now()` yöntemini kullanabilirsiniz.

`const time = Date.now(); // 1693237207904`

`Date.now()`'ın uygulanma temel fikri, zamanın ölçümü, aralıkların hesaplanması gibi şeylerde yatar.

Belirli bir kodun yürütülmesinin ne kadar zaman aldığını ölçmek istiyorsan, şunu yapabilirsin:

```
const startTime = Date.now();

// Belirli bir süre boyunca yürütülen kodunuz
for(let i = 0; i <= 100; i += 1) {
	console.log(i);
}

const endTime = Date.now();
const elapsedTime = endTime - startTime;

console.log(`Elapsed time: ${elapsedTime} ms`);
```

- Olaydan önce zamanı koru
- Olaydan sonra zamanı koru
- Başlangıç ve bitiş zamanı arasındaki farkı hesapla