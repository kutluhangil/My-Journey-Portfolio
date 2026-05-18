# Promise Zincirleri

`then()` metodu yeni bir Promise döndürür, bu Promise de sırasıyla `onResolve`callback işlevinden değer alır. Bu özellik, Promise'leri zincirleyerek ardışık asenkron operasyonlar oluşturmaya olanak tanır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a807eab9-cd14-449d-95d0-bb53e2cddf20image%20%282%29.png)

`then()` yöntemi bir Promise döndürür. Çalışmadan önce bir süre geçebilir, bu nedenle geriye kalan zincirin kısmı sonucu bekleyecektir. Zincirin herhangi bir yerinde hata oluşursa, tüm sonraki `then()` işlemleri iptal edilir ve kontrol `catch()`yöntemine geçer. Bu nedenle, `catch()`, tüm `then()` işlemlerinin zincirinin sonunda olmalıdır.

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
```