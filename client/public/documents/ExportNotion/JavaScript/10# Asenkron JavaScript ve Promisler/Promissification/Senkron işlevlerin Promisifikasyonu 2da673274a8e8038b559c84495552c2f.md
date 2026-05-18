# Senkron işlevlerin Promisifikasyonu

`Promise.resolve()` ve `Promise.reject()` yöntemleri, **promissify** edilmiş işlevlerde, asenkron işlemin sonucunu beklemek gerekmediği durumlarda; yalnızca bir Promise zinciri oluşturmak ve başlangıç değerine sahip olmak gerektiğinde

kullanılır.

İki geri çağırımı alan ve koşula bağlı olarak onları çağıran işlevin kodunu yeniden yapılandıralım:

```
const makeGreeting = (guestName, onSuccess, onError) => {
  if (!guestName) {
    onError("Guest name must not be empty");
  } else {
		onSuccess(`Welcome ${guestName}`);
	}
};

makeGreeting(
  "Mango",
  greeting => console.log(greeting),
  error => console.error(error)
);
```

`makeGreeting` fonksiyonunu **promisify** ederek, dış kodlara olan bağımlılığını tamamen ortadan kaldıralım. Sadece bir Promise döndürmesi yeterlidir:

```
const makeGreeting = guestName => {
	return new Promise((resolve, reject) => {
		  if (!guestName) {
				reject("Guest name must not be empty");
		  } else {
				resolve(`Welcome ${guestName}`);
			}
	})
};

makeGreeting("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
```

Şimdi, `Promise` sınıfının statik yöntemlerini kullanarak aynı mantığı daha kısa bir şekilde yazalım:

```
const makeGreeting = guestName => {
  if (!guestName) {
   return Promise.reject("Guest name must not be empty");
  } else {
		return Promise.resolve(`Welcome ${guestName}`);
	}
};

makeGreeting("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
```

Fonksiyonun dönüş değeri (`return`), artık geri çağırma (callback) işlevleri kabul etmek ve çağırmak yerine bir `Promise` döner. Bu `Promise`in gelecekteki sonucu, artık bu fonksiyonun değil, onu kullanan dış kodun sorumluluğundadır.