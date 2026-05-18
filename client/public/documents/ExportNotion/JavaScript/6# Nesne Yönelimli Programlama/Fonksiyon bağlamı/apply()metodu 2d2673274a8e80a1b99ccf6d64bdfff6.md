# apply()metodu

`apply` metodu `call` metoduna benzer. Aradaki fark, `apply()` yönteminde, fonksiyon bağımsız değişkenleri tek tek değerler olsa bile, bağımsız değişkenleri gönderme sözdiziminin bir **dizi** gerektirmesidir.

`apply()` metodu aşağıdaki gibidir:

`foo.apply(thisArg, [arg1, arg2, ...])`

- `thisArg` - fonksiyon için bağlam olarak ayarlamak istediğimiz nesne (`this`değeri).
- `arg1, arg2, ...` - fonksiyona aktarılacak isteğe bağlı argümanlar.

`apply` metodu, `foo` fonksiyonunu, işlevdeki `this` değeri `obj` nesnesine başvuracak ve dizi öğelerini `arg1`, `arg2` vb. ayrı bağımsız değişkenler olarak gönderecek şekilde çağırır.

Daha önce tanımlanan `greet` fonksiyonunu kullandığımız bir örnek düşünün. Bu kez `call` yerine `apply` metodunu kullanarak çağırıyoruz.

```
function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
	room: 27
};

const poly = {
  username: "Poly",
	room: 191
};

greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

```

Yani, `call` ve `apply` arasındaki fark sadece argümanları gönderme biçimindedir. `call` ve `apply` arasındaki seçim, belirli bir durumda bir fonksiyona nasıl argüman aktarmak istediğinize bağlıdır. Diğer tüm açılardan aynı şekilde çalışırlar: belirli bir nesne bağlamında bir işlevi çağırır ve ona argümanlar iletirler.