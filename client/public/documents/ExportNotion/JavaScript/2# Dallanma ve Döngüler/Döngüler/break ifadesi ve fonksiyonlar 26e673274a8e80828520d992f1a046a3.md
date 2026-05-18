# break ifadesi ve fonksiyonlar

`break` ifadesi bir döngü içinde bulunduğunda, döngünün hemen durdurulmasını sağlar ve kontrol, döngünün ardından gelen ilk talimata aktarılır – bu durum döngü bir fonksiyon içinde olsa bile geçerlidir. Yani `break` ifadesi fonksiyonun yürütülmesini değil, yalnızca döngünün çalışmasını durdurur.

`function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number $ {target}, interrupt the cycle`);
			break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumber(10, 6);
console.log("Log after exiting function");`

`return` ifadesi, fonksiyonun yürütülmesini anında durdurarak dışarıya bir değer döndürmek için kullanılır. (Not: Döngüyü değil, sadece fonksiyonu durdurur.)

Örnekte, 6 sayısını arıyoruz. `if` koşulu sağlandığında, `return` ifadesiyle hem döngü hem de fonksiyon sonlandırılır.

`function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number ${target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  *// Bu console.log çalışmıyor*console.log("Log in body function after cycle");
}

const result = findNumber(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`);`

Örnek:

`findNumber(start, end, bölen)` fonksiyonu, üç tamsayı parametre almalıdır.

Fonksiyon şu şekilde tamamlanmalıdır:

- `start` ile `end` arasındaki ilk `divisor` ile bölünebilen sayıyı döndürmelidir.
- `break` komutu kullanmamalıdır.
- `findNumber(start, end, divisor)` işlevi tanımlanmalıdır.
- `findNumber(2, 6, 5)` çağrısı `5` değerini döndürmelidir.
- `findNumber(8, 17, 3)` çağrısı `9` değerini döndürmelidir.
- `findNumber(6, 9, 4)` çağrısı `8` değerini döndürmelidir.
- `findNumber(16, 35, 7)` çağrısı `21` değerini döndürmelidir.
- Rastgele bir dizi sayı ile yapılan `findNumber()` fonksiyonu çağrıları doğru sonuçlar döndürmelidir.
- `for` döngüsü içinde tüm iterasyonların tamamlanmasını beklemek yerine çıkış imkanı sağlanmalı, ancak `break` kullanılmamalıdır.

Cevap:

- **for döngüsü kullanılacak**
- **break kullanılmayacak**
- Ama döngü yine de ilk uygun sayıyı bulduğunda bitmeli.

👉 Bunu çözmek için **return** kullanabiliriz. Çünkü return fonksiyonu tamamen durdurur (break gibi sadece döngüyü değil, fonksiyonun tamamını bitirir).

---

📌 Kod:

```
function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      return i; // İlk bulduğunda fonksiyon burada biter
    }
  }
}
```

---

✅ Test edelim:

```
console.log(findNumber(2, 6, 5));   // 5
console.log(findNumber(8, 17, 3));  // 9
console.log(findNumber(6, 9, 4));   // 8
console.log(findNumber(16, 35, 7)); // 21
```

---

🔍 Açıklama:

- Döngü start’tan başlar end’e kadar gider.
- İlk uygun sayı bulunduğunda return çalışır → fonksiyon tamamen sonlanır.
- Böylece break kullanmadan aynı etkiyi sağlamış olduk.👉 İstersen ben sana aynı mantığı **while** ile de yazabilirim. Görmek ister misin?

---