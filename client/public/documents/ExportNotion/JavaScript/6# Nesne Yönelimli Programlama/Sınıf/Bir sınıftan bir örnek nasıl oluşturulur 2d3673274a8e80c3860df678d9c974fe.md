# Bir sınıftan bir örnek nasıl oluşturulur?

Bir sınıf tanımlandıktan sonra, `new` operatörünü kullanarak sınıfın bir örneğini oluşturabilirsiniz. `new User()` çağrısının sonucunda `User` sınıfının bir örneği oluşur. Bu örnek, sınıfta tanımlanan verileri içerir ve davranışlara sahiptir.

```
class User {
  // Sınıfın gövdesi
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}
```