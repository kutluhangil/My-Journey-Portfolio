# Parametre yapılandırma

Nesneleri fonksiyonlara aktardığınızda, yalnızca ihtiyacınız olan verilere erişmek için bu nesneleri yapılarına ayırabilirsiniz. Bu, bir fonksiyonda nesnenin hangi alanlarının kullanılacağını açıkça belirtmenize olanak tanır.

**Nesne yeniden yapılandırması (destructuring) henüz söz konusu değildir:**

```
function printUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
}

printUserInfo({
	name: "Alice",
	age: 25,
	hobby: "dancing"
}); // Name: Alice, Age: 25, Hobby: dancing
```

fonksiyon gövdesinde nesnenin yeniden yapılandırılmasıyla:

```
function printUserInfo(user){
const { name, age, hobby } = user
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({
	name: "Alice",
	age: 25,
	hobby: "dancing"
}); // Name: Alice, Age: 25, Hobby: dancing
```

Parametrelerin tanımlandığı noktada nesne yeniden yapılandırması ile:

```
function printUserInfo({ name, age, hobby }) {
  console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
}

printUserInfo({
	name: "Alice",
	age: 25,
	hobby: "dancing"
}); // Name: Alice, Age: 25, Hobby: dancing
```