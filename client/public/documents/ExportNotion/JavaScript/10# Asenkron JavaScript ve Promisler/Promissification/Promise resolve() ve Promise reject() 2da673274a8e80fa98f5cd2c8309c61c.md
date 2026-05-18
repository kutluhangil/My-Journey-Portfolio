# Promise.resolve() ve Promise.reject()

`Promise.resolve()` ve `Promise.reject()` — anında başarılı veya reddedilen Promise oluşturmak için kullanılan statik metotlardır. `new Promise()` ile benzer şekilde çalışırlar, Promise döndürürler ancak daha kısa bir sözdizimine sahiptirler.

**new Promise()** kullanarak başarılı bir Promise nasıl oluşturulur:

```
new Promise(resolve => resolve("success value"))
	.then(value => console.log(value));
	.catch(error => console.log(error));
```

**Promise.resolve()** ile başarılı bir şekilde tamamlanan Promise nasıl oluşturulur:

```
Promise.resolve("success value");
	.then(value => console.log(value));
	.catch(error => console.log(error));
```

Yeni bir Promise, `new Promise()` üzerinden hata ile nasıl gerçekleştirilir:

```
new Promise((resolve, reject) => reject("error"));
	.then(value => console.log(value));
	.catch(error => console.log(error));
```

Promise, hata ile tamamlanan `Promise.reject()` tarafından nasıl oluşturulur:

```
Promise.reject("error");
	.then(value => console.log(value));
	.catch(error => console.log(error));
```