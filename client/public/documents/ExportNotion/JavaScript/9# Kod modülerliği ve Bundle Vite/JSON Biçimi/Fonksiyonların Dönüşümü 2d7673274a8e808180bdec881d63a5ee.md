# Fonksiyonların Dönüşümü

Tüm JavaScript nesneleri JSON'a dönüştürülemez. Örneğin, bir nesnenin metodları (yani fonksiyonları) varsa, dönüştürme sırasında bunlar görmezden gelinir ve JSON çıktısına dahil edilmez.

```
const dog = {
  name: "Mango",
  age: 3,
  isGoodBoy: true,
  bark() {
    console.log("Woof!");
  },
};

const json = JSON.stringify(dog);
console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
```

Ayrıca, doğrudan bir fonksiyonu JSON'a dönüştürmeye çalıştığınızda sonuç `undefined` olacaktır:

```
const json = JSON.stringify(() => console.log("Well, this is awkward"));
console.log(json); // undefined
```