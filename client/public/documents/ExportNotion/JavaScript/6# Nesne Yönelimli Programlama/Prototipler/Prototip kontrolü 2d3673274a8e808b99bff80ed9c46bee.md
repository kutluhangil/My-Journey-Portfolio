# Prototip kontrolü

Bir nesnenin başka bir nesnenin prototipi olup olmadığını kodda kontrol etmek gerekiyorsa, `isPrototypeOf()` yöntemi kullanılır.

`objA.isPrototypeOf(objB)`

- Metod, `objA` nesnesinin `objB` nesnesinin prototipi olup olmadığını kontrol eder
- Eğer öyleyse `true` döndürür, aksi halde `false` döndürür

Prototip aidiyetini kontrol etmek için `isPrototypeOf()` metodunun kullanımını içeren bir örnek inceleyelim.

```
const customer = {
	username: "Jacob"
};

const animal = {
	legs: 4
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false
console.log(customer.isPrototypeOf(dog)); // false
```

- Birinci hücrede, `dog` nesnesi `name` ve `[[Prototype]]` özellikleri ile görüntülenir. `[[Prototype]]`, `animal`'ı bir prototip olarak işaret eder
- İkincisinde, `animal`'ın `dog` için prototip olduğu için `true` döner
- Üçüncü sırada, `dog`dan `animal`'a geriye miras alınmadığı için `false` döner
- Dördüncü hücrede ise, `customer`'ın `dog` için prototip olmadığı için `false`döner