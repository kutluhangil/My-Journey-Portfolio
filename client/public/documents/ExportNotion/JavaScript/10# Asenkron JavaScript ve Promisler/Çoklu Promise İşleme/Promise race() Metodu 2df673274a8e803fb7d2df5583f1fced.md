# Promise.race() Metodu

`Promise.race` yöntemi, bir dizi Promise alır ve iletilenler arasından ilk tamamlanan veya reddedilen Promise'ı, değeri veya reddedilme nedeniyle birlikte "en hızlı" olarak döndürür.

`Promise.race([promise1, promise2, promise3, ...])`

# **Durum 1**

Farklı tamamlanma sürelerine sahip birkaç Promise oluşturalım.

```
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 2000);
});

Promise.race([p1, p2])
	.then(value => console.log(value)); // 1
	.catch(error => console.log(error));
```

İlk Promise, 1 saniye sonra `fulfilled` durumuna geçecek (en hızlı olacak) ve ilk Promise değeri ile `then` yöntemi gerçekleştirilecek, diğerleri reddedilecektir.

Dizideki bir Promise bile gerçekleştirilirse, dönen Promise `resolved` durumuna geçer ve diğerleri reddedilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1c7f1d69-4b71-4e1a-8cf7-50c1be74e92cScreenshot%202023-08-28%20at%2017.05.10.png)

# **Durum 2**

Farklı tamamlanma sürelerine sahip birkaç Promise oluşturalım.

```
onst p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 1000);
});

Promise.race([p1, p2])
	.then(value => console.log(value));
	.catch(error => console.log(error)); // 2
```

Bir sonraki Promise, 1 saniye içinde `rejected` durumuna geçecek (en hızlı olan), ikinci Promise'nin değeriyle `catch` metodu gerçekleşecek ve diğerleri reddedilecektir.

Dizi içindeki herhangi bir Promise'den biri reddedildiğinde, dönen Promise `rejected` durumuna geçecek ve diğerleri reddedilecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/68fec33f-14cf-4f05-9b0d-2f23176eaa6fScreenshot%202023-08-28%20at%2017.10.04.png)