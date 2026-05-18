# Rest (kalan) parametreler

Nasıl tanımlandığına bakılmaksızın bir **fonksiyonu** istediğiniz sayıda argümanla çağırabileceğinizi zaten biliyoruz. Ekstra **argümanlar** bir hataya neden olmaz.

```
function multiply(a, b) {
	console.log(a, b)
}

multiply(1, 2);// 1 2
multiply(1, 2, 3);// 1 2
multiply(1, 2, 3, 4);// 1 2
```

Yukarıdaki örnekte sorun, parametrelerden daha fazla argüman olmasıdır. Ve tanımlanan parametre sayısına göre sadece ilk iki argüman kullanılacaktır.

Gönderilen tüm argümanları toplayan `arguments` sözde dizisini kullanarak bu tür sorunları nasıl çözeceğimizi zaten biliyoruz.

```
function multiply() {
	console.log(arguments)
}

multiply(1, 2);// pseudo-array [1, 2]
multiply(1, 2, 3);// pseudo-array [1, 2, 3]
multiply(1, 2, 3, 4);// pseudo-array [1, 2, 3, 4]
```

ES6 ile başlayarak, rest(kalan) parametreler (`...rest`) kavramı tanıtıldı. Bu, bir grup bağımsız öğeyi bir dizi halinde bir araya getirmenize olanak tanıyan özel bir sözdizimidir.

```
function multiply(...args) {
  console.log(args);
}

multiply(1, 2);// [1, 2]
multiply(1, 2, 3);// [1, 2, 3]
multiply(1, 2, 3, 4);// [1, 2, 3, 4]
```

Serbest parametreler üç nokta ile gösterilebilir `...` Kelimenin tam anlamıyla şu anlama gelir: "kalan parametreleri topla ve onları bir diziye koy". Parametrenin adı isteğe bağlı olabilir. Çoğu zaman, `args` veya `rest` olarak adlandırılır.

# **Görev**

Rest(kalan) parametre sözdizimini kullanarak, `add()` fonksiyonunun kodunu `args` parametresine herhangi bir sayıda argüman kabul edecek, bunları okuyacak ve toplamlarını döndürecek şekilde değiştirin.

# **Testler**

- `add` fonksiyonu şu şekilde tanımlanır
- `add` fonksiyonu `args` parametresini kullanır
- Argümanları fonksiyon imzasındaki `args` değişkeninde toplamak için rest parametre sözdizimi kullanılır
- `add(15, 27)` çağrısı `42` döndürür.
- `add(12, 4, 11, 48)` çağrısı `75` döndürür.
- `add(32, 6, 13, 19, 8)` çağrısı `78` döndürür.

```
function add(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

```