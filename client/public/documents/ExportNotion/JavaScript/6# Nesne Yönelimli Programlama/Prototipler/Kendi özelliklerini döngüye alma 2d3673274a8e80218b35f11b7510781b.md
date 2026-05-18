# Kendi özelliklerini döngüye alma

`for...in` döngüsünde kullanılan `in` operatörü, bir nesnenin kendi özelliklerini ve prototipini ayırt etmez. Bu özellik genellikle sadece kendi özelliklerini döngüye almak gerektiğinden sorun oluşturabilir.

```
const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

for (const key in dog) {
  console.log(key); // "name" "legs"
}
```

`for...in` döngüsü sırasında kendi özelliklerinizi seçmek için her iterasyonda `obj.hasOwnProperty(key)` yöntemi ile kendi özelliğinizi kontrol etmeniz gerekmektedir. Bu metod, `obj` nesnesinin `key` adındaki özelliğe sahip olup olmadığını kontrol ederek, bu özelliğin prototipinden değil nesneden geldiği durumda `true`, aksi halde `false` döndürür. Örnek üzerinden inceleyelim:

```
const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

for (const key in dog) {
	if(dog.hasOwnProperty(key)) {
		console.log(key); // "name"
	}
}
```

- Eğer bu kendi özelliği ise, `if` bloğunu çalıştırırız.
- Eğer bu başkasına ait bir özellikse, hiçbir şey yapmayız.

`Object.keys(obj)` ve `Object.values(obj)` yöntemleri, `for...in` ve `hasOwnProperty`yerine pratikte sadece nesnenin sadece kendi anahtarlarını veya değerlerini döndürür. Bu nedenle, genellikle bunları `for...of` döngüsü ile birlikte kullanırlar.

```
const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for(const key of Object.keys(dog)) {
	console.log(key); // "name"
}
```