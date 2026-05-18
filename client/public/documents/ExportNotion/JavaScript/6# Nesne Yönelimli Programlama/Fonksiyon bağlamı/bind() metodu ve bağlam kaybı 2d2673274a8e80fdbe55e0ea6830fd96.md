# bind() metodu ve bağlam kaybı

`call` ve `apply` metodları bir işlevi "yerinde", yani hemen çağırır.

`bind` metodu önceden tanımlanmış bir bağlama sahip **yeni bir fonksiyon** oluşturur ve döndürür; bu yeni fonksiyon daha sonra herhangi bir argümanla çağrılabilir.

`bind()` metodu aşağıdaki gibidir:

`const boundFoo = foo.bind(thisArg, arg1, arg2, ...)`

- `thisArg` - fonksiyon için bağlam (`this` değeri) olarak ayarlamak istediğimiz nesne
- `arg1, arg2, ...` - çağrıldığında fonksiyona aktarılacak isteğe bağlı argümanlar

Nesne yönteminin referansını bir değişkene kaydetmeyi ve bunu global bağlamda çağırmayı deneyelim.

```
"use strict";

const customer = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

customer.sayHello(); // "Hello, Jacob!"

const greet = customer.sayHello;

greet(); // TypeError: Cannot read properties of undefined (reading 'username')
```

- `greet` değişkeninde `sayHello` metoduna bir referans kaydedilir
- `greet()` fonksiyonu çağrılırken bağlam kaybolur, fonksiyon global bağlamda çağrılır, bu nedenle `this` değeri `undefined` olur.

`greet()` fonksiyonunu çağırırken `this.username` özelliğine erişmeye çalıştığınızda, `undefined` bir nesne bile olmadığı için bir hata oluşur

Bu, **`bind`** yöntemi kullanılarak bağlam bağlanarak düzeltilebilir.

```
"use strict";

const customer = {
  username: "Jacob",
	sayHello() {
		console.log(`Hello, ${this.username}!`);
  }
};

customer.sayHello(); // "Hello, Jacob!"

const greet = customer.sayHello.bind(customer);

greet(); // "Hello, Jacob!"
```

`bind()` fonksiyonunu kullandığımızda, yeni bir `greet` fonksiyonu oluştururuz. Bu yeni fonksiyon her zaman doğru bağlama sahip olacak ve `customer` nesnesinin `username` özelliğini kullanabilecektir.