# Neden yeniden yapılandırmamız gerekiyor?

**Yeniden yapılandırma (Destructuring)**, nesneler veya diziler gibi veri yapılarından değerler çıkarmanıza ve bunları değişkenlere atamanıza olanak tanıyan özel bir sözdizimidir. Bu yöntem, karmaşık yapılardan yalnızca ihtiyacınız olan verileri almanızı ve bu verileri kodunuzda daha kolay kullanmanızı sağlar.

Yeniden yapılandırma olmadan, nesne özellikleriyle çalışmak şuna benzer:

```
const user = {
	name: "Jacob",
	age: 32
};

console.log(user.name); // Jacob
console.log(user.age); // 32
```

Yeniden yapılandırma ile nesne özellikleriyle çalışmak şu şekildedir:

```
const user = {
	name: "Jacob",
	age: 32
};

const { name, age } = user;
console.log(name); // Jacob
console.log(age); // 32
```