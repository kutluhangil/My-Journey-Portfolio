# Artırma ve azaltma (increment — decrement)

Artırma (`++`) ve azaltma (`--`) işlemleri, bir sayı değişkeninin değerini bir birim artıran veya azaltan ve ardından bu güncellenmiş değeri saklayan işlemlerdir.

Artırma ve azaltma işleçlerinin iki türü vardır: **önekli (prefix)** ve **sonekli (postfix)**.

# **Artırma**

**Önekli (prefix) artırma** (`++value`) önce dеğişkenin dеğеrini artırır vе sоnrа bu yеni dеğеri ifadеdе kullanır.

`let x = 5;
const y = ++x;
console.log(x); *// 6*
console.log(y); *// 6*`

**Postfix (sonekli) artırma** (`value++`), değişkenin mevcut değerini ifadede kullandıktan sonra değerini arttırır.

`let x = 5;
const y = x++;
console.log(x); *// 6*
console.log(y); *// 5*`

# **Azaltma**

**Önekli (prefix) azaltma** (`--value`) değişkenin değerini önce azaltır ve ardından ifadede yeni değeri kullanır.

`let x = 5;
const y = --x;
console.log(x); *// 4*
console.log(y); *// 4*`

**Postfix (sonekli) azaltma** (`value--`) önce değişkenin mevcut değerini ifadede kullanır ve ardından değeri azaltır.

`let x = 5;
const y = x--;
console.log(x); *// 4*
console.log(y); *// 5*`

Bu işlemler, değişken değerlerini hemen bir birim artırmak gerektiğinde faydalı olabilir; örneğin, döngülerde sayaçlar oluştururken `+=` ve `-=` işleçlerinin yerine kullanılabilir.

`for (let i = 0*; i <= 5; i++) {*
  console.log(i)*;*
}`

Yukarıdaki `for` döngüsü örneğinde, `i` değişkeni `0` değeriyle başlatılır ve döngü `i`'nin `5`'ten küçük veya eşit olana kadar devam eder. Her iterasyondan sonra `i` değeri `1` artar. Sonuç olarak, konsola `0` ile `5` arasındaki sayılar yazdırılır.

---

### **🔼 Artırma (++)**

Bir değişkenin değerini **1 artırır**.

- **Önce artır, sonra kullan** (++x)
    
    Yani “hemen üstüne 1 koy, sonra değeri ver”.
    

```
let x = 5;
let y = ++x; // önce x = 6 yapılır, sonra y = 6 olur
console.log(x); // 6
console.log(y); // 6
```

- 
- **Önce kullan, sonra artır** (x++)
    
    Yani “önce şimdiki değeri ver, sonra 1 artır”.
    

```
let x = 5;
let y = x++; // önce y = 5 olur, sonra x = 6 yapılır
console.log(x); // 6
console.log(y); // 5
```

---

### **🔽 Azaltma (–)**

Bir değişkenin değerini **1 azaltır**.

- **Önce azalt, sonra kullan** (--x)

```
let x = 5;
let y = --x; // önce x = 4 yapılır, sonra y = 4 olur
console.log(x); // 4
console.log(y); // 4
```

- 
- **Önce kullan, sonra azalt** (x--)

```
let x = 5;
let y = x--; // önce y = 5 olur, sonra x = 4 yapılır
console.log(x); // 4
console.log(y); // 5
```

---

### **🤔 Basit benzetme**

- ++x = “önce yemek ye, sonra arkadaşına tabağı ver” 🍽️
- x++ = “önce tabağı ver, sonra yemeğini ye” 🍴

---

### **🔄 Nerede kullanıyoruz?**

Özellikle **döngülerde sayaç artırmak/azaltmak** için.

```
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
```

👉 Burada her turda i++ çalışır, yani i sayısı **1’er 1’er artar**:

Çıktı: 0, 1, 2, 3, 4, 5

---

# **Öyleydi**

`calculateEvenTotal(number)` adında bir işlev yazın, bu işlev bir tamsayıyı (parametre `number`) alır ve 1'den bu sayıya kadar olan tüm çift tamsayıların toplamını döndürür. Örneğin, eğer `number` `6` ise, toplam şu şekilde olacaktır: `2 + 4 + 6`, yani `12`.

# **Olacak**

`calculateEvenTotal(number)` fonksiyonu bir tamsayıyı alır (parametre `number`).

Fonksiyonun kodunu, 1'den bu sayıya kadar olan tüm çift tamsayıların toplamını döndürecek şekilde tamamlayın. Çift sayılar, 2'ye bölündüğünde kalanı olmayan sayılardır (bu konu, Modül 1'deki Aritmetik İşlemler konusunda ele alınmıştır). Örneğin, eğer `number` 6 ise, toplam 2 + 4 + 6, yani 12 olacaktır.

`function calculateEvenTotal(number) {}`

`function calculateEvenTotal(number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }

  return total;
}`