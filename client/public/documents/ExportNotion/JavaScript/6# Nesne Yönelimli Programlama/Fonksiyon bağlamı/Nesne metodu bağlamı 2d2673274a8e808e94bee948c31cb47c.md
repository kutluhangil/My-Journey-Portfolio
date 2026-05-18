# Nesne metodu bağlamı

Fonksiyon bir nesne metodu olarak çağrıldıysa, `this` o yöntemin ait olduğu **nesnenin kendisini** gösterir.

```
const user = {
  username: "Poly",
  showThis() {
    console.log(this);
  }
};

user.showThis(); // {username: "Poly", showThis: ƒ}
```

Şimdi daha karmaşık bir örneğe bakalım.

İlk olarak, global bağlamda bir fonksiyon oluşturup çağıralım. **Strict mode**kullanımına dikkat edin:

```
"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

// Global bağlamda çağırıyoruz
showThis(); // "this in showThis: undefined"
```

Daha sonra bu fonksiyonu bir nesne özelliğine atayıp, o nesnenin metodu olarak çağırıyoruz:

```
"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

const user = {
  username: "Poly",
};

user.showContext = showThis;

// Nesne bağlamında çağırıyoruz
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Global bağlamda çağırıyoruz
showThis(); // "this in showThis: undefined"
```

- `user` nesnesi yalnızca `username` özelliği ile tanımlanmıştır.
- `showContext` metoduna, `showThis` fonksiyonunun kendisini atıyoruz. Bu bir **çağrı değildir**, çünkü parantez `()` kullanılmamıştır.
- Ardından, `showContext` metodunu çağırarak `showThis` fonksiyonunu nesne bağlamında çalıştırıyoruz. `this`, çağrının yapıldığı geçerli nesneyi (yani `user`) işaret eder.

Bu örnek, bir fonksiyonun `this` bağlamının **tanımlandığı anda değil**, **çağrıldığı anda** belirlendiğini açıkça göstermektedir.

**Örnek kodu inceleyin**

```
"use strict";

const book = {
	updateAuthor(newAuthor) {
		// ...
	}
};

book.updateAuthor("Jacob");
```