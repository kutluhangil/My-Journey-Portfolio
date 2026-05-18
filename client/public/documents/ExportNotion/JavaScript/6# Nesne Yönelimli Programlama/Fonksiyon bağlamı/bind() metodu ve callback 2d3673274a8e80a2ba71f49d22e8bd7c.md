# bind() metodu ve callback

`bind()` metodu çok kullanışlıdır. Özellikle geri çağırma (callback) işlevlerinde ve işlev çağrısı sırasında bağlamın kaybolabileceği durumlarda kullanılması önemlidir.

Bir nesne metodunu geri çağırma fonksiyonu olarak geçirdiğimizde bağlam kaybının bir örneğini düşünün:

```
"use strict";

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

function makeMessage(callback) {
  // callback() - bu, genel bağlamda getFullName yöntemine yapılan bir fonksiyon çağrısıdır
	const username = callback();
  console.log(`Processing an application from ${username}`);
}

makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')
```

Bu durumda, `getFullName` metodu bir `callback` fonksiyonu olarak aktarılır ve `customer` nesnesinin bağlamını kaybeder. Bu bir hataya yol açar çünkü getFullName metodundaki `this` değeri, callback olarak genel bağlamda çağrıldığında `undefined`olur. `firstName` ve `lastName` özelliklerine başvurduğumuzda, `undefined` bir nesne olmadığı için bir hata alırız.

Bu bağlam kaybını önlemek için `bind()` yöntemini kullanabilirsiniz. Orijinal `getFullName` metodunu geçirmek yerine, `customer` nesnesinin bağlamının bağlı olduğu bir kopyasını geçiririz.

```
const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
	const username = callback();
	console.log(`Processing an application from ${username}`);
}

makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"
```

**Örnek kodu inceleyin**

```
const library = {
	books: 1923,
	logBookCount() {
		console.log(this.books);
	}
};

const showBooks = library.logBookCount.bind({ books: 724 });

showBooks();
```

Doğru cevap: **724** ✔️

---

### **🔍 Açıklama**

```
const showBooks = library.logBookCount.bind({ books: 724 });
showBooks();
```

- bind({ books: 724 }) →
    
    logBookCount metodundaki this, **kalıcı olarak** { books: 724 } nesnesine bağlanır
    
- this.books → 724
- Orijinal library.books (1923) **kullanılmaz**

📌 bind, fonksiyonun çağrıldığı yerden bağımsız olarak this’i sabitler 💡

---

### **🧠 Seçeneklerin Analizi**

| **Seçenek** | **Doğru mu** | **Neden** |
| --- | --- | --- |
| 1923 | ❌ | this artık library değildir |
| 724 | ✅ | bind ile yeni bağlam |
| undefined | ❌ | books özelliği vardır |
| TypeError | ❌ | this tanımlıdır |

---

### **💡 Kısa Hatırlatma**

```
const fn = obj.method.bind(anotherObj);
fn(); // this === anotherObj
```

İstersen sıradaki adımda **bind zincirlenirse ne olur?** gibi tuzak sorulara da bakabiliriz 🤔

**Örnek kodu inceleyin**

```
"use strict";

const library = {
	books: 1923,
	logBookCount() {
		console.log(this.books);
	}
};

function showBooks(callback) {
	callback()
}

showBooks(library.logBookCount);
```

Doğru cevap: **TypeError: Cannot read properties of undefined (reading 'books')** ✔️

---

### **🔍 Adım Adım Açıklama**

```
"use strict";

showBooks(library.logBookCount);
```

- library.logBookCount **metot referansı** olarak gönderilir
- callback() şeklinde çağrıldığı için:
    - this → **undefined** (strict mode)
- Metot içinde:

```
console.log(this.books);
```

- → this undefined olduğu için **TypeError** oluşur ❗

---

### **🧠 Seçeneklerin Analizi**

| **Seçenek** | **Doğru mu** | **Neden** |
| --- | --- | --- |
| 1923 | ❌ | this artık library değildir |
| window | ❌ | strict mode’ta this window olmaz |
| undefined | ❌ | console.log(this.books) hata fırlatır |
| TypeError | ✅ | this → undefined, property erişimi hatalı |

---

### **💡 Çözüm Yolları**

```
showBooks(library.logBookCount.bind(library));
```

veya:

```
function showBooks(callback) {
  callback.call(library);
}
```

---

📌 **Kural:**

> Metot callback olarak gönderilirse, this bağlamı
> 
> 
> **kaybolur**
>