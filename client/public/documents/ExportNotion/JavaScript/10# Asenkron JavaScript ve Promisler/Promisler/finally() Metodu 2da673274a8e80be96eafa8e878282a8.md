# finally() Metodu

Bu yöntem, Promise'ın (`fulfilled` veya `rejected`) sonucundan bağımsız olarak tamamlandıktan sonra kodu çalıştırmak gerektiğinde faydalı olabilir.

```
promise
	.then(value => {
	  // Promise fulfilled
	})
	.catch(error => {
	  // Promise rejected
	})
	.finally(() => {
	  // Promise fulfilled or rejected
	});
```

`finally()` yöntemi, `then()` ve `catch()` işleyicilerinde kod tekrarını önlemenize olanak tanır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e9d91386-82bf-4372-8c21-0259f3f343bdimage%20%281%29.png)

Geri çağrı işlevi, bir Promise'in başarılı olup olmadığını veya reddedilip reddilmediğini belirleyemediğinden hiçbir argüman almayacak. Burada her durumda çalıştırılması gereken kod yürütülecek.

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
promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"
```