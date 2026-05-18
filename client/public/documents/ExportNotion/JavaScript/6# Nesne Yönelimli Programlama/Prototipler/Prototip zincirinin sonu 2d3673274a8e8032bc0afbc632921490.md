# Prototip zincirinin sonu

İki nesnenin prototip zincirini oluşturalım.

```
const objB = {
	b: "objB prop"
};

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA);
```

Yani, `objB`, `objA` nesnesinin prototipidir. Geliştirici konsolunda prototip zincirinin içeriğini genişlettiğimizde şu görüntüyü göreceğiz.

![Screen Shot 2025-12-25 at 00.36.59 AM.png](Prototip%20zincirinin%20sonu/Screen_Shot_2025-12-25_at_00.36.59_AM.png)

`objB` nesnesinin `[[Prototype]]` özelliğinde `objA` nesnesine bir referans bulunur. Peki `objB` nesnesinin `[[Prototype]]` özelliğinde ne bulunur?

![Screen Shot 2025-12-25 at 00.37.19 AM.png](Prototip%20zincirinin%20sonu/Screen_Shot_2025-12-25_at_00.37.19_AM.png)

Prototip zincirinin sonunda her zaman veri türünün zincirde köken aldığı temel sınıfa bir referans bulunur. Bizim durumumuzda, `objB` bir nesnedir, bu yüzden zincirin sonunda `Object` sınıfına bir referans olacaktır.

![Screen Shot 2025-12-25 at 00.37.37 AM.png](Prototip%20zincirinin%20sonu/Screen_Shot_2025-12-25_at_00.37.37_AM.png)