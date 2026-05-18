# Kendi ve başkalarının özellikleri

Artık tanıdık olduğumuz `animal` prototipi ile birlikte `dog` nesnesini oluştururken kullanılan örneği kullanalım.

```
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: "Mango", [[Prototype]]: animal}
console.log(dog.name); // "Mango"
console.log(dog.legs); // 4
```

- `name` özelliği, `dog` nesnesine aittir, bu yüzden `dog` nesnesinin **kendine ait özelliği** olarak adlandırılır.
- `legs` özelliği `dog` nesnesine ait değildir. Bu, `animal` prototipinin özelliğidir, bu yüzden `dog` nesnesinin **kendine ait olmayan özelliği** olarak adlandırılır.

Bir nesnede kendi özelliğini kontrol etmek için `obj.hasOwnProperty(key)` ~~yöntemi~~metodu kullanılır. Bu metod, `key` adındaki kendi özelliğin varlığını kontrol eder ve varsa `true`, yoksa `false` değerini döndürür.

```
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
```