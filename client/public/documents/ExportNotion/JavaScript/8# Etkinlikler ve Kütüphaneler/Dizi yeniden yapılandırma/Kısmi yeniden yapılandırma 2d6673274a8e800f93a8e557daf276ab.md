# Kısmi yeniden yapılandırma

Bazen bir dizinin yalnızca ilk **N** öğesini ayırmak ve geri kalanını bir dizi olarak tek bir değişkene kaydetmek isteyebilirsiniz.

Diziyi yeniden yapılandırarak, gerekli ilk öğeleri ayıklayabilir ve `...rest` işlemini kullanarak dizi öğelerinin geri kalanını bir değişkene atayabilirsiniz:

```
const color = [200, 255, 100];

const [ red, ...otherColors ] = color;

console.log(red); // 200
console.log(otherColors); // [255, 100]
```

Bu durumda, orijinal dizi değiştirilmez; `otherColors` değişkeni, geri kalan değerlerin kopyalarını içeren yeni bir dizi olur.

Bu yöntem aynı zamanda nesnelerle de çalışır. Belirli özellikleri ayrı değişkenlere ayırabilir ve geri kalanını yeni bir nesnede toplayabilirsiniz:

```
const user = {
	name: "Jacob",
	age: 32,
	email: "j.cob@mail.com",
	isOnline: true
};

const { name, isOnline, ...otherProps } = user;

console.log(name); // "Jacob"
console.log(isOnline); // true
console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}
```

Bu durumda da orijinal nesne değiştirilmez; `otherProps` değişkeni, kalan özelliklerin kopyalarını içeren yeni bir nesne olacaktır.