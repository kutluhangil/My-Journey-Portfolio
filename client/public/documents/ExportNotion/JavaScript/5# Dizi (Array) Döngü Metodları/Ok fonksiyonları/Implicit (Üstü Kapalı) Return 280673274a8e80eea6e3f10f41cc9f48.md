# Implicit (Üstü Kapalı) Return

Bir arrow fonksiyonunda, fonksiyonun gövdesi `=>` sembolünden sonra yer alır. İki yazım şekli vardır: küme parantezli ve küme parantezsiz.

# **Küme parantezleriyle yazma**

Küme parantezleri varsa ve fonksiyonun bir değer döndürmesi gerekiyorsa, `return` öğesini açıkça belirtmeniz gerekir. Buna `explicit return` (explicit return) denir.

```
const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
```

Bu sözdizimi, bir değer döndürmenin yanı sıra fonksiyon gövdesinde başka talimatlar yürütmeniz gerektiğinde kullanılır.

# **Küme parantezleri olmadan yazma**

Küme parantezi yoksa, `=>` ifadesini izleyen ifadenin sonucu döndürülür. Buna Implicit return denir. Örnekte, `a`, `b` ve `c` parametrelerini eklemeye yönelik ifadenin sonucu döndürülür.

`const add = (a, b, c) => a + b + c;`

Implicit return sözdizimi, bir gövde ve return dönüş değeri olan bir fonsiyon tanımlamanın kalabalıklığını önemli ölçüde azaltır. Bununla birlikte, yalnızca işlev gövdesinde bir değer döndürmekten başka hiçbir ek yönergenin yürütülmesi gerekmediğinde uygundur.

```
// Öncefunction classicAdd(a, b, c) {
  return a + b + c;
}

// Sonra
const arrowAdd = (a, b, c) => a + b + c;
```

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Testler
console.log(calculateTotalPrice(5, 100)); // 500
console.log(calculateTotalPrice(8, 60));  // 480
console.log(calculateTotalPrice(3, 400)); // 1200

`const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;`

# **Görev**

`calculateTotalPrice(orderedItems)` fonksiyonunu, tanımlanmasını bir ok fonksiyonu ile değiştirerek yeniden düzenleyin. `forEach()` metoduna aktarılan callback fonksiyonunu bir arrow fonksiyon değiştirin.

# **Testler**

- `calculateTotalPrice` değişkeni tanımlanır
- `calculateTotalPrice` değişkenine `(orderedItems)` parametresiyle bir ok fonksiyonu atanır.
- `forEach` yöntemi, `orderedItems` dizisi üzerinde yineleme yapmak için kullanılır
- `forEach` yöntemi için callback bir ok işlevidir
- `calculateTotalPrice([12, 85, 37, 4])` fonksiyonuna yapılan bir çağrı `138` değerini döndürür.
- `calculateTotalPrice([164, 48, 291])` fonksiyonunun çağrılması `503` döndürür.
- `calculateTotalPrice([412, 371, 94, 63, 176])` işlevi çağrıldığında `1116` döndürülür.
- Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür

```
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}
```

```
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
```

# **Görev**

`filterArray()` işlevini tanımlayın ve `forEach()` metodunun callback'ini ok (arrow) fonksiyonla değiştirin.

# **Testler**

- `filterArray` değişkeni tanımlanır.
- `filterArray` değişkenine `(numbers, value)` parametreli bir ok fonksiyonu atanır.
- `forEach` metodu `numbers` dizisi üzerinde döngü yapmak için kullanılır.
- `forEach` metodu için callback bir ok fonksiyonudur.
- `filterArray([1, 2, 3, 4, 5], 3)` işlevi çağrıldığında `[4, 5]` döndürülür.
- `filterArray([1, 2, 3, 4, 5], 4)` işlevi çağrıldığında `[5]` döndürülür.
- `filterArray([1, 2, 3, 4, 5], 5)` işlevi çağrıldığında `[]` döndürülür.
- `filterArray([12, 24, 8, 41, 76], 38)` işlevi çağrıldığında `[41, 76]` döndürülür.
- `filterArray([12, 24, 8, 41, 76], 20)` işlevi çağrıldığında `[24, 41, 76]` döndürülür.
- Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür.

```
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}
```

```
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
```