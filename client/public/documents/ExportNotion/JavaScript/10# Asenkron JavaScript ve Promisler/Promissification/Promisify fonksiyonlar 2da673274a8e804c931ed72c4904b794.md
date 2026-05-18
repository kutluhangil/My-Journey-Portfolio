# Promisify fonksiyonlar

`fetchUserFromServer` fonksiyonu ile çalışma kodunu, kullanıcı adı ve sonuçları işleme geri çağırma işlevlerini aktararak tamamlayalım.

```
const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);
};

fetchUserFromServer(
	"Mango",
	user => console.log(user),
	error => console.error(error)
);
```

Ardından, asenkron bir işlemi taklit etmek için bir zamanlayıcı kullanacağız ve belirli bir koşula göre geri çağrıları çağıracak şekilde ayarlayacağız. Asenkron bir işlemin durumunu taklit etmek için `isSuccess` değişkeninin değerini `true` veya `false`olarak değiştirebiliriz.

```
const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

fetchUserFromServer(
	"Mango",
	user => console.log(user),
	error => console.error(error)
);
```

Daha önce de belirttiğimiz gibi, bir fonksiyon artık çalışmasının sonucunu kullanacak kod hakkında çok fazla şey biliyor. Yani, fonksiyonun içine bir şey aktarıyoruz (bir geri arama) ve bunun doğru çalışacağını umuyoruz, ki bu güvenilmezdir.

İlk olarak, `Promise` fonksiyonundan dönen kodu yazalım. Bunun için içinde `new Promise` ile bir Promise oluşturup onu döndürüyoruz.

```
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
		// ...
  });
};
```

Dış kodda bir Promise alıyoruz ve ona `then` ve `catch` metodlarında işleyiciler ekliyoruz.

```
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
		// ...
  });
};

const userPromise = fetchUserFromServer("Mango"); // fetchUserFromServer("Mango") çağrısının sonucu bir Promise olacak

// Promise, then() ve catch() metodlarıyla ele alınır
userPromise
	.then(user => console.log(user))
  .catch(error => console.error(error));
```

Genellikle işleyiciler, Promise işlevinin çağrısının sonucunu ek bir değişkene yazmadan ekler.

```
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
		// ...
  });
};

fetchUserFromServer("Mango")  // fetchUserFromServer("Mango") çağrısının sonucu bir Promise olacak
.then(user => console.log(user))  // Promise then() yöntemiyle işlenir
.catch(error => console.error(error));  // Promise catch() yöntemiyle işlenir
```

Tüm çalışma mantığıyla ilişkili kodları, Promise oluşturma fonksiyonunun içine ekliyoruz.

```
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve("success value");  // resolve parametresinin değeri then() metodunun geri çağrı fonksiyonu olacaktır
      } else {
        reject("error");  // reject parametresinin değeri catch() metodunun geri çağrı fonksiyonu olacaktır
      }
    }, 2000);
  });
};

fetchUserFromServer("Mango")
  .then(user => console.log(user))
  .catch(error => console.error(error));
```

Çoğu modern kütüphane Promise üzerinde temellendirilmiştir. Bir metot asenkron bir işlem için çağrıldığında, sonucu bir Promise olarak kullanılabilir, bu Promise'e `then()` ve `catch()` metodlarında işleyiciler ekleyebilirsiniz.