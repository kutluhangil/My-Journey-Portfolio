# Aritmetik fonksiyonlar

`Math` sınıfı, JavaScript’te yerleşik olarak bulunan bir sınıftır.

Bu sınıf, matematiksel işlemler gerçekleştirmek ve sayılarla çalışmak için çeşitli yöntemler sağlar.

İşte `Math` sınıfı tarafından sağlanan en kullanışlı yöntemlerden bazıları:

- `Math.floor(num)`: Belirtilen `num` değerine eşit veya ondan küçük olan **en yakın tam sayıyı** döndürür.

Örneğin:

`console.log(Math.floor(1.3)); *// 1*console.log(Math.floor(1.7)); *// 1*`

`Math.ceil(num)`, belirtilen `num` değerinden büyük veya ona eşit olan **en yakın tam sayıyı** döndürür.

Örneğin:

`console.log(Math.ceil(1.3)); *// 2*console.log(Math.ceil(1.7)); *// 2*`

`Math.round(num)`: Belirtilen sayıyı **en yakın tam sayıya** yuvarlayarak döndürür.

Yuvarlama işlemi matematiksel kurallara göre yapılır:

Ondalık kısmı 0,5’ten küçükse aşağı, 0,5 veya daha büyükse yukarı yuvarlanır.

Örneğin:

`console.log(Math.round(1.3)); *// 1*console.log(Math.round(1.7)); *// 2*`

`Math.max(num1, num2, ...)`: Aktarılan sayı kümesi içinden **en büyük sayıyı** döndürür. Örneğin:

`console.log(Math.max(20, 10, 50, 40)); // 50`

`Math.min(num1, num2, ...)`: Aktarılan sayılar kümesi içinden **en küçük sayıyı** döndürür.

Örneğin:

`console.log(Math.min(20, 10, 50, 40)); // 10`

`Math.random()`: 0 (dahil) ile 1 (hariç) arasındaki aralıkta rastgele bir sayı döndürür.

Örneğin:

`console.log(Math.random()); // 0 ile 1 arasında rastgele bir sayı, örneğin 0,2 ... 0,9166353649342294`

Bunlar, `Math` sınıfındaki yöntemlerden yalnızca birkaçıdır.

Buna ek olarak, trigonometrik fonksiyonlar, logaritmalar ve diğer matematiksel işlemler için de çeşitli yöntemler sunar. `Math` sınıfındaki tüm yöntemlerin listesi ve ayrıntılı açıklamaları için JavaScript belgelerine başvurabilirsiniz.