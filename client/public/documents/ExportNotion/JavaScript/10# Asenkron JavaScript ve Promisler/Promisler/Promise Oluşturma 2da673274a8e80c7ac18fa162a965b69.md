# Promise Oluşturma

Promise, `Promise` sınıfının bir örneği olarak oluşturulur ve bir işlevi argüman olarak kabul eder ("yürütücü" (executor) olarak adlandırılır) ve hemen çağrılır, Promise oluşturulmadan önce ve dönmeden önce.

```
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});
```

- `resolve(value)` - Başarılı bir işlem durumunda çağrılacak bir işlev. Parametre olarak iletilen değer, gerçekleştirilen Promise'un değeri olacaktır.
- `reject(error)` - Bir hata durumunda çağrılacak bir işlev. Parametre olarak iletilen değer, reddedilen Promise'un değeri olacaktır.

Geriçağrı işlevi, bağlı olduğu işlemin ne zaman ve nasıl tamamlandığını Promise'a bildirir. Bu işlevde herhangi bir asenkron işlem gerçekleştirilebilir. İşlev tamamlandıktan sonra şunları çağırmak gereklidir:

- Başarılı tamamlamayı işaretlemek için `resolve()` çağırın. Sonuç "gerçekleştirildi" olacaktır.

veya

- Hata durumunda `reject()` çağırarak, Promise'un durumunu "reddedilmiş" (**`rejected`**) olarak ayarlar.

Bu işlevin döndürdüğü değer, göz ardı edilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/91cb5d2a-3cde-46aa-96cf-2490f7418042image%20%282%29.png)

Örnekte, değişken `isSuccess` değerinin `true` veya `false` olarak değiştirilerek `resolve` veya `reject` çağrılarak Promise'in başarılı (`fulfilled`) veya hata ile tamamlanan (`rejected`) şeklinin simüle edildiği gösterilmektedir.

```
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

console.log(promise); // Promise nesnesi
```

`promise` değişkenine, `pending` durumunda bir Promise (nesne) atanacak ve iki saniye sonra `resolve()` veya `reject()` çağrıldığında, Promise durumu `fulfilled`veya `rejected` olacak ve onu işleyebileceğiz.