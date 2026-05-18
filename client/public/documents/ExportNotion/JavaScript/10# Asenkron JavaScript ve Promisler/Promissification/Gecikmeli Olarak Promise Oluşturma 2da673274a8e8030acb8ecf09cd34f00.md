# Gecikmeli Olarak Promise Oluşturma

`makePromise(options)` adlı bir fonksiyon oluşturalım. Bu fonksiyon, belirli bir gecikmeyle bir `Promise` oluşturup döndürecektir:

```
const makePromise = options => {
	// ...
};

makePromise({
	value: "Some value",
	delay: 2000,
	shouldResolve: true
})
```

Fonksiyon, şu özellikleri içeren `options` adlı bir nesne alır:

- **value**: Promise tamamlandığında döndürülecek değer.
- **delay**: Promise'in belirtilen süre (ms) sonra çalıştırılması için gecikme süresi.
- **shouldResolve**: Promise’in başarılı (true) mı yoksa hatalı (false) mı tamamlanacağını belirten boolean değer.

Fonksiyonun bir `Promise` döndürmesi için yapı aşağıdaki gibi güncellenmelidir:

```
const makePromise = options => {
  return new Promise((resolve, reject) => {
		// ...
  });
};
```

Bu vaka, `value` özelliğinde belirtilen değerle gecikme süresinden (`delay`) sonra Promise'in başarılı bir şekilde yerine getirilmesini veya reddedilmesini sağlayacağız.

Varsayılan olarak, Promise'in başarılı bir şekilde yerine getirilmesi gerektiğini belirlemek için, yıkım sırasında `shouldResolve` özelliği için `true` değerini varsayılan olarak belirtiyoruz.

```
const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			if(shouldResolve) {
				resolve(value)
			} else {
				reject(value)
			}
		}, delay);
  });
};
```

Yani, bu sadece her seferinde Promise oluşturmak gerektiğinde bu kodu yazmamak için gecikmeli Promise oluşturma kodunu içeren yeniden kullanılan bir işlevdir.

Fonksiyonun çalışmasını birkaç farklı gecikme süresi ve değerlerle Promise'ler oluşturarak kontrol edelim.

```
const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
	   setTimeout(() => {
				if(shouldResolve) {
					resolve(value)
				} else {
					reject(value)
				}
			}, delay);
  });
};

makePromise({ value: "A", delay: 1000 })
	.then(value => console.log(value)) // "A"
	.catch(error => console.log(error));

makePromise({ value: "B", delay: 3000 })
	.then(value => console.log(value)) // "B"
	.catch(error => console.log(error));

makePromise({ value: "C", delay: 2000, shouldResolve: false })
	.then(value => console.log(value))
	.catch(error => console.log(error)); // "C"
```

Bu fonksiyon olmadan, bu kod şu şekilde olurdu:

```
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fulfilled A');
  }, 1000);
})
  .then(value => console.log(value))
  .catch(error => console.log(error));

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fulfilled B');
  }, 3000);
})
  .then(value => console.log(value))
  .catch(error => console.log(error));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected C');
  }, 2000);
})
  .then(value => console.log(value))
  .catch(error => console.log(error)); // "Rejected C"
```