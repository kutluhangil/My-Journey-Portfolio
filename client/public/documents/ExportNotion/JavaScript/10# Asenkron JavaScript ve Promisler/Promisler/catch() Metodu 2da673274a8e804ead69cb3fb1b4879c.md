# catch() Metodu

Pratikte, `then()` yönteminde yalnızca Promise'in başarılı bir şekilde gerçekleştirilmesi işlenir.

Hatası, hizmetliyle tanımlanmış `catch()` yöntemi kullanılarak hatalar yakalanır.

```
promise
	.then(value => {
		// Promise fulfilled
	})
	.catch(error => {
	  // Promise rejected
	});
```

`catch` yöntemindeki geri çağırma işlevi, bir Promise hata ile tamamlandığında çağrılacak ve bu hatayı bir argüman olarak alacak. `catch` yöntemi, `then`metodundan sonra gelmelidir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/c7e7d3be-ac3e-49d8-bc19-bed80c284c4dimage.png)

`then` yönteminden `catch` yöntemine hata işleme aktarımı yapacağız.

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
  .then(value => {
    console.log(value); // "Success! Value passed to resolve function"
  })
  .catch(error => {
    console.log(error); // "Error! Error passed to reject function"
  });
```

---

## **catch() metodu nedir?**

- catch() **Promise hata ile sonuçlandığında (rejected)** çalışır
- Promise **başarılıysa (fulfilled)** catch() **hiç çalışmaz**

---

## **Temel kullanım**

```
promise
  .then(value => {
    // Promise başarılıysa çalışır
  })
  .catch(error => {
    // Promise hata verirse çalışır
  });
```

---

## **Önemli noktalar ⭐**

- then() → **başarılı sonucu (resolve) yakalar**
- catch() → **hata durumunu (reject) yakalar**
- catch() **her zaman then()’den sonra yazılır**
- Promise hatasızsa → **sadece then() çalışır**
- Promise hatalıysa → **then() atlanır, catch() çalışır**

---

## **catch() ne zaman çalışır?**

✅ **Promise hata ile tamamlandığında**

❌ Promise oluşturulduğunda

❌ Promise başarıyla tamamlandığında

---

## **catch() içine gelen parametre nedir?**

- catch(error => { ... })
- Bu error:
    - reject() ile gönderilen **hata bilgisidir**
    - Promise’in neden başarısız olduğunu açıklar

---

## **Tek cümlelik özet 📝**

> catch() metodu, Promise
> 
> 
> **hata ile sonuçlandığında**
> 
> **reject edilen hatayı**
>