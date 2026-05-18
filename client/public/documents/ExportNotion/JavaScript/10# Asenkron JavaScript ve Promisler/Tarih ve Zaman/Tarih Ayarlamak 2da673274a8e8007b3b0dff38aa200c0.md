# Tarih Ayarlamak

`Date` sınıfının bir örneğini oluştururken farklı veri görüntüleme biçimlerini ayarlayabilirsiniz. Aşağıda, yalnızca tarihi açıklayan bir metni `Date` sınıfına ileten bir örnek bulunmaktadır.

```
const date = new Date("2030-03-16");
console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"
```

Burada `Date`'e bir dize iletilmiş, tarih ve saat'in büyük harf `T` (time) ile ayrıldığı.

```
const date = new Date("2030-03-16T14:25:00");
console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"
```

Gördüğün gibi, `Date`'e iletilen dize biçimi çok esnektir.

Yalnızca yılı, yılı ve ayı veya tarihin tamamını, gün ve saat dahil olmak üzere iletmek mümkündür.

```
console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"
```

Yeni bir tarih oluşturmanın başka bir yolu, yılı, ayı (0'dan başlar), günü, saati, dakikayı, saniyeyi ve milisaniyeyi tanımlayan yedi sayıyı iletmektir. Zorunlu olan yalnızca ilk üçüdür.

```
const date = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "
```