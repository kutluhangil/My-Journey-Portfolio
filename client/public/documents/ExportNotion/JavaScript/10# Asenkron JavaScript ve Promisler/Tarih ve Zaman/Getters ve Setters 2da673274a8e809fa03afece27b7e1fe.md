# Getters ve Setters

`Date` sınıfının örneği, tarih ve saat değerlerini okumak ve yazmak için birçok yönteme sahiptir. Her örnek için yıl, ay, ayın günü veya haftası, saat, dakika, saniye ve milisaniye değerlerini döndüren veya atayan yöntemler bulunmaktadır.

Getters, tarihin tamamını veya ayrı bir bileşeni okumak için kullanılır. Döndürülen değer, bilgisayarınıza ayarlanmış geçerli saat dilimine bağlıdır.

```
const date = new Date("March 16, 2030 14:25:00");
console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// 1 ile 31 arasında günü döndürür
console.log("Day: ", date.getDate()); // 16

// 0 ile 6 arasında haftanın gününü döndürür, Pazar 0'dır
console.log("Day of the week: ", date.getDay()); // 6

// 0 ile 11 arasında ayı döndürür
console.log("Month: ", date.getMonth()); // 2

// 4 haneli yılı döndürür
console.log("Full year: ", date.getFullYear()); // 2030

// Saati döndürür
console.log("Hours: ", date.getHours()); // 14

// Dakikaları döndürür
console.log("Minutes: ", date.getMinutes()); // 25

// Saniyeleri döndürür
console.log("Seconds: ", date.getSeconds()); // 0

// Milisaniyeleri döndürür
console.log("Milliseconds: ", date.getMilliseconds()); // 0
```

Herhangi bir şey okunabiliyorsa, yazılabilir; yazma yöntemleri  `set` ön ekiyle başlar.

```
const date = new Date("March 16, 2030 14:25:00");

date.setMinutes(50);
console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040);
console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

date.setMonth(4);
console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"

```