# Unix zaman

Bilgisayarlar için zaman sayımı, UTC (Koordinatlı Evrensel Zaman) zaman diliminde 1 Ocak 1970 gece yarısından bu yana geçen milisaniye cinsinden hesaplanır. Bu, Unix zamanıdır.

Tarihin tek bir sayıyla başlatılması sırasında, 01.01.1970'den bu yana geçen milisaniye miktarını temsil eder.

```
console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
```

`getTime()` yerleşik yöntemi, bu tarihin sayısal değerini (`timestamp`) döndürür - 1 Ocak 1970 gece yarısından bu yana geçen milisaniye miktarı.

```
const date = new Date();
console.log(date.getTime()); // 1624021654154
```

Bu rakam benzersizdir ve asla tekrarlanmayacaktır çünkü zaman anı benzersizdir ve her zaman sadece artar.

Bu formatın kolaylığı, tüm tarihleri, dizeleri ve zaman dilimlerinden endişelenmeden anlık zamanı bir sayı olarak gösterebilmenizdir. Çünkü gerektiğinde tüm gerekli bilgilere ulaşabilirsiniz.