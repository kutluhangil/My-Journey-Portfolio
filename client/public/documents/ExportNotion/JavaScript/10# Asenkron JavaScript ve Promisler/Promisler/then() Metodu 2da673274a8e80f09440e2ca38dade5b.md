# then() Metodu

Bir şeyi asenkron olarak yapması gereken kod, bir Promise oluşturur ve onu döndürür.

Promise alan dış kod, bu Promise'e işleyiciler ekler. Asenkron işlem tamamlandığında, dış kod içinde Promise otomatik olarak `tamamlandı` veya `reddedildi` durumuna geçirilir ve Promise yöntemleri (işleyiciler) otomatik olarak çağrılır.

Promise `then()` metodu, Promise'in durumu değiştiğinde çağrılacak iki `geri çağırma` işlevini kabul eder.

Promise'in sonucu, işlevlerin argüman olarak alacağı bir değer veya hata olabilir.

`promise.then(onResolve, onReject)`

- `onResolve(değer)` — `then()` metodunun 1. argümanı, Promise'in başarılı bir şekilde çözülmesi durumunda çağrılacak olan geri çağırma fonksiyonudur ve Promise'in sonucunu bir argüman olarak alır.
- `onReject(hata)` — `then()` metodunun 2. argümanı, Promise'in bir hatayla çözülmesi durumunda çağrılacak olan geri çağırma fonksiyonudur ve hatayı bir argüman olarak alır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/39c5f851-20c8-4e5e-94c9-1dc7289e0068image%20%283%29.png)

Promise oluşturulduktan sonra, sonucu callback fonksiyonunda işlenir.

Kod, gelecekteki tüm senaryoları göz önünde bulunduracak şekilde yazılır:

1. Promise başarılı bir şekilde tamamlanırsa.
2. Promise başarısız olursa.

Aşağıdaki örnekte, başarılı bir Promise durumunda `onResolve` callback fonksiyonu, başarısız olursa ise `onReject`, hata oluştuğunda iki saniye sonra çağrılacaktır.

```
const isSuccess = true;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Registering promise callbacks
promise.then(
  value => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  error => {
    console.log(error); // "Error! Error passed to reject function"
  }
);
```

`onResolve` ve `onReject` fonksiyonları karmaşık bir mantık içeriyorsa, bunlar konfor için dış fonksiyonlar olarak tanımlanır ve `then()` metoduna isimleri ile birlikte iletilir.