# Arrow fonksiyonları: sözdizimi

Arrow fonksiyonları, özellikle fonksiyon küçük olduğundan callback olarak kullanıldığında kod miktarını azaltan daha kısa, daha özlü bir sözdizimine sahiptir.

Tüm yapı bir fonksiyon ifadesi olarak oluşturulur ve bir değişkene atanmalıdır.

```
// Normal fonksiyon tanımlama
function classicAdd(a, b, c) {
  return a + b + c;
}

// Aynısını ok (arrow) fonksiyon ile tanımlanması
const arrowAdd = (a, b, c) => {
  return a + b + c;
};
```

- Parametreler hemen tanımlanır
- Parametreler hemen bildirilir
- Parametrelerin ardından `=>` sembolü ve küme parantezleri içinde fonksiyonun gövdesi gelir

Birden fazla parametre varsa, bunlar parantez içinde virgülle ayrılmış olarak, `=` eşittir işaretleri ve `=>` oku arasında listelenir.

```
const add = (a, b, c) => {
  return a + b + c;
};
```

Yalnızca bir parametre varsa, parantez olmadan tanımlanabilir.

```
const add = a => {
  return a + 5;
};
```

Parametre yoksa, boş parantezler kullanılabilir .

```
const greet = () => {
  console.log("Hello!");
};
```