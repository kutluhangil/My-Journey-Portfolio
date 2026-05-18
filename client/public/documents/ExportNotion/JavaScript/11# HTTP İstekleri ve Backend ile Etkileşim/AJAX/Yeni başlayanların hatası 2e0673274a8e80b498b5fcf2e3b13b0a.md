# Yeni başlayanların hatası

Asenkron kodla çalışırken sıkça yapılan bir hatayı inceleyelim: HTTP istek verilerini senkron kodda `then()` yöntemi callback dışında kullanma girişimi.

Yeni başlayanlar "getirme sonucunu" harici bir değişkene yazmaya ve `fetch()`yöntemini çağırdıktan hemen sonra bunu aşağıdaki senkron kodda kullanmaya çalışır.

```
let globalVariable; // undefined

// HTTP isteğini yürütme
fetch("<https://jsonplaceholder.typicode.com/users>")
  .then(response => response.json())
  .then(users => {
    console.log("users inside then callback: ", users);

    // Sorgu sonucunu eşzamansız olarak harici bir değişkene yazma
    globalVariable = users;

    // then yöntemi içinde her şey yolunda
    console.log("globalVariable inside fetch callback: ", globalVariable);
  });

// Then yöntemi geri çağrısı dışında, senkron kodun asenkron arka uç yanıt verilerine erişimi yoktur
console.log("globalVariable outside fetch: ", globalVariable); // undefined

```

Yukarıdaki örneğimizde, `then()` yöntemi callback dışında veri yoktur çünkü son `console.log()` sunucu yanıtı alınmadan önce çalıştırılacaktır (eşzamanlı kod). `console.log("globalVariable outside fetch: ", globalVariable)` çağrısı sırasında, `globalVariable` değişkeni hala `undefined` değerine sahiptir. Yürütülen ilerlemenin değeri yalnızca eşzamansız kodda mevcuttur, örneğimizde `then()` yöntemi geri çağrısındadır.

```
Bu nedenle, asenkron bir işlemin sonucunu harici bir değişkene yazmaya ve bunu senkron kodda kullanmaya çalışmanın verimsiz bir yaklaşım olduğunu unutmamak çok önemlidir. Bunun yerine, eşzamansız işlemlerin sonuçlarını alındıkları anda işlemek için ..then() ve .catch() yöntemlerini kullanmak daha iyidir.
```