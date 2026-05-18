# Fonksiyon bağlamı

# **this anahtar kelimesi**

JavaScript'teki bir fonksiyonun bağlamı, bir cümledeki bağlama benzer.

Daha iyi anlamak için aşağıdaki örnekleri göz önünde bulundurun:

1. `Victor` hızlı koşuyor çünkü `Victor` treni yakalamaya çalışıyor.
2. `Victor` hızlı koşuyor çünkü `o` treni yakalamaya çalışıyor.

İkinci cümle kulağa daha özlü ve doğal geliyor, değil mi?

“O" zamirinin kullanılması 'Victor' öznesinin tekrarlanmasını önler. Cümle, Victor'un eylemi gerçekleştiren, ilgi odağındaki nesne olduğu bağlamı kuruyor. Bu cümledeki "he" zamirinin "Victor" öznesine atıfta bulunduğuna şüphe yoktur, bu nedenle ismi tekrar etmenin bir anlamı yoktur.

Benzer şekilde, bir nesne bir işlevin yürütülmesi sırasında mevcut bağlam olabilir.

Metotların içindeki özelliklerine erişmek için nesnenin adını kullanmak kötü bir yaklaşımdır. Bu, bir cümlede her seferinde "o" yerine "Victor" kelimesini tekrarlamakla aynı şeydir.

```
 möçöçfg tyvdzds<const user = {
  username: "Victor",
  showName() {
// ❌ Victor hızlı koşuyor çünkü Victor treni yakalamaya çalışıyorconsole.log(user.username);
  },
};

user.showName();
```

Nesne adı yerine `this` ayrılmış anahtar sözcüğünü kullanırız.

Bir fonksiyon çağrıldığında, çağrıldığı bağlamdaki nesneye bir referans `this`e yazılır. Böylece, fonksiyonun gövdesinde bu nesnenin özelliklerine ve metotlarına erişebiliriz.

```
const user = {
  username: "Victor",
  showName() {
// ✅ Victor hızlı koşuyor çünkü (o) treni yakalamaya çalışıyor.console.log(this.username);
  },
};

user.showName();
```

showName metodu, user nesnesi bağlamında çağrılan bir fonksiyondur. Çağrıldığında, user nesnesinin bir referansı this’e yazılır ve nesnesinin özelliklerine ve yöntemlerine erişebiliriz.

`showName` metodu, `user` nesnesi bağlamında çağrılan bir fonksiyondur. Çağrıldığında, `user` nesnesinin bir referansı `this`’e yazılır ve nesnesinin özelliklerine ve yöntemlerine erişebiliriz.

[**Global bağlamı**](Fonksiyon%20ba%C4%9Flam%C4%B1/Global%20ba%C4%9Flam%C4%B1%202d2673274a8e80cbb290d5d6554cc5ae.md)

[**Nesne metodu bağlamı**](Fonksiyon%20ba%C4%9Flam%C4%B1/Nesne%20metodu%20ba%C4%9Flam%C4%B1%202d2673274a8e808e94bee948c31cb47c.md)

[**call() metodu**](Fonksiyon%20ba%C4%9Flam%C4%B1/call()%20metodu%202d2673274a8e80159b5cf91aa0ec880a.md)

[**apply()metodu**](Fonksiyon%20ba%C4%9Flam%C4%B1/apply()metodu%202d2673274a8e80a1b99ccf6d64bdfff6.md)

[**bind() metodu ve bağlam kaybı**](Fonksiyon%20ba%C4%9Flam%C4%B1/bind()%20metodu%20ve%20ba%C4%9Flam%20kayb%C4%B1%202d2673274a8e80fdbe55e0ea6830fd96.md)

[**bind() metodu ve callback**](Fonksiyon%20ba%C4%9Flam%C4%B1/bind()%20metodu%20ve%20callback%202d3673274a8e80a2ba71f49d22e8bd7c.md)

[**Ok fonksiyonları**](Fonksiyon%20ba%C4%9Flam%C4%B1/Ok%20fonksiyonlar%C4%B1%202d3673274a8e80a19289f1ca9483c94f.md)

[**this belirleme algoritması**](Fonksiyon%20ba%C4%9Flam%C4%B1/this%20belirleme%20algoritmas%C4%B1%202d3673274a8e8061aa28d50555a1f3a4.md)