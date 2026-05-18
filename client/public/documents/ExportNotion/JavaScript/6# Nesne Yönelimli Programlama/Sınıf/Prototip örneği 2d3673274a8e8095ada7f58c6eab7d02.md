# Prototip örneği

Örneğin, şu anda aşağıdaki gibi görünen `User` sınıfının kodunu inceleyelim:

```
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({
	name: "Mango",
	email: "mango@mail.com"
});

console.log(mango.getEmail());  // “mango@mail.com”
```

`User` sınıfının örneğinin yapısına geliştirici araçlarında baktığınızda, "Çağırdığımız yöntemler nerede?" sorusu ortaya çıkabilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/78e2eb8c-f7ab-4f50-9984-35be7902d6ebScreenshot%202023-09-04%20at%2016.04.45.png)

JavaScript'de nesneye yönelik programlama, prototipik mirasa dayanmaktadır. Sınıf yöntemleri **örneğin özellikleri değil**. Bu doğru çünkü özellik değerlerinin aksine benzersiz değiller. Aynı fonksiyon, farklı nesneler bağlamında çağrılan bir fonksiyondur. Her örneğin her yöntemi kopyalamak anlamsızdır, çünkü binlerce örnek olabilir.

Sınıf yöntemleri, sınıfın kendisinin `prototype` özelliğinde saklanan özel bir nesneye eklenir.

```
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}
```

`new` aracılığıyla bir örnek oluşturulduğunda, sınıfın `prototype` özelliğinde saklanan nesne otomatik olarak onun prototipi haline gelir. Bu, örneğin `[[Prototype]]`özelliğinin sınıfın `prototype` özelliğine bir referans aldığını gösterir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/c114c621-8c76-4cc7-b8fe-509c7909123aScreenshot%202023-09-04%20at%2016.05.41.png)

Bu nesne örneği, sınıfın metodlarını kullanabilir hale gelir, yani prototipinin özelliklerini kullanabilir. Ayrıca, bu nesnede sınıfın yapıcı `constructor` metoduna bir referans saklanır, ancak bu sadece sınıfın iç mekanizmaları için gereklidir ve bizim için anlam ifade etmez.