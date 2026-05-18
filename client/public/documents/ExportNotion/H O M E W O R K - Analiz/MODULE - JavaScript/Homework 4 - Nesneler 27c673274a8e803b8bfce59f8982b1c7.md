# Homework 4 - Nesneler

# **Görev 1. Ürünlerin Paketlenmesi**

```
Bu görevi task-1.js dosyasında tamamla

```

`isEnoughCapacity(products, containerSize)` adında bir fonksiyon yaz, bu fonksiyon verilen ürünlerin tümünün konteynıra paketlerken sığıp sığmayacağını hesaplar.

Fonksiyon iki parametre alır:

- `products` — Ürünlerin adlarını içeren ve miktarlarını değer olarak içeren bir nesne. Örneğin, `{ apples: 2, grapes: 4 }`.
- `containerSize` — Konteynerin içine sığabileceği maksimum ürün miktarı.

Fonksiyon, ürünlerin konteynıra sığıp sığmayacağını kontrol ederek sonucu döndürmelidir. Yani, `products` nesnesindeki toplam ürün miktarını hesaplayıp bu miktarın `containerSize`'a eşit veya daha az olduğunda `true`, aksi takdirde `false` değerini döndürmelidir.

Aşağıdaki kodu al ve kendi fonksiyonunu tanımladıktan sonra çalıştırarak doğruluğunu kontrol et. Sonuçlar konsola yazdırılacaktır.

```
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
);// trueconsole.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
);// falseconsole.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
);// trueconsole.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
);// false
```

Bu kodu mentor tarafından kontrol edilmesi için bırak.

**Mentorun dikkat edeceği noktalar:**

- `isEnoughCapacity(products, containerSize)` adlı bir işlev tanımlandı.
- `isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)` çağrısı `true` değerini döndürür.
- `isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)` çağrısı `false` değerini döndürür.
- `isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)` çağrısı `true` değerini döndürür.
- `isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)` çağrısı `false` değerini döndürür.

---

### **📌 Çözüm Adımları**

1. isEnoughCapacity(products, containerSize) fonksiyonunu tanımla.
2. products nesnesindeki değerleri al → Object.values(products).
    
    Örn: { apples: 2, grapes: 3 } → [2, 3].
    
3. Bu değerleri reduce() ile topla.
4. Toplam kapasiteyi containerSize ile karşılaştır:
    - Eğer **toplam ≤ containerSize** → true döndür.
    - Yoksa false döndür.

---

### **✅ Kod (task-1.js)**

```
function isEnoughCapacity(products, containerSize) {
  // Nesnedeki değerleri alıp topla
  const totalProducts = Object.values(products).reduce(
    (sum, value) => sum + value,
    0
  );

  // Konteyner kapasitesiyle karşılaştır
  return totalProducts <= containerSize;
}

// Testler
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
```

---

### **📌 Mentorun kontrol edeceği noktalar**

- Fonksiyon adı **isEnoughCapacity** ✅
- Doğru parametreleri alıyor (products, containerSize) ✅
- Object.values + reduce kullanarak toplam hesaplandı ✅
- Konsoldaki çıktılar, görevde verilen beklenen sonuçlarla birebir aynı ✅

---

# **Görev 2. Kalori Hesaplama**

```
Bu görevitask-2.js dosyasında tamamla.

```

`calcAverageCalories(days)` adlı bir fonksiyon yaz, bu fonksiyon hafta boyunca sporcu tarafından tüketilen kalori miktarının günlük ortalama değerini döndürür. Fonksiyon tek bir parametre bekler: `days` — bir dizi obje. Her obje, sporcu tarafından o gün tüketilen kalori miktarını açıklayan gün ve `calories` özelliklerine sahiptir. Fonksiyonun doğru çalışıp çalışmadığını kontrol etmek için aşağıdaki kodu, fonksiyon tanımından hemen sonra yapıştır. Sonuçlar konsola yazdırılacaktır.

```
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
);// 3180console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
);// 2270console.log(
  calcAverageCalories([])
);// 0
```

Bu kodu mentor tarafından kontrol edilmesi için bırak.

**Mentorun dikkat edeceği noktalar:**

- Tanımlanan `calcAverageCalories(days)` fonksiyonu
- `calcAverageCalories` fonksiyonunun bu çağrısı `3180` değerini döndürür.

```
calcAverageCalories([
  { day: "monday", calories: 3010 },
  { day: "tuesday", calories: 3200 },
  { day: "wednesday", calories: 3120 },
  { day: "thursday", calories: 2900 },
  { day: "friday", calories: 3450 },
  { day: "saturday", calories: 3280 },
  { day: "sunday", calories: 3300 }
])
```

- `calcAverageCalories` fonksiyonunun bu çağrısı `2270` değerini döndürür.

```
calcAverageCalories([
  { day: "monday", calories: 2040 },
  { day: "tuesday", calories: 2270 },
  { day: "wednesday", calories: 2420 },
  { day: "thursday", calories: 1900 },
  { day: "friday", calories: 2370 },
  { day: "saturday", calories: 2280 },
  { day: "sunday", calories: 2610 }
])
```

- `calcAverageCalories` fonksiyonunun bu çağrısı `0` değerini döndürür.

`calcAverageCalories([])`

# **Görev 3. Oyuncu Profili**

```
Bu görevitask-3.js dosyasında tamamla

```

`profile` nesnesi, bir oyun platformundaki kullanıcının profiline aittir. Özellikleri arasında profil adı `username` ve oyunda geçirilen `playTime` olarak belirtilen aktif saatler bulunmaktadır.

`const profile = {
	username: "Jacob",
  playTime: 300,
};`

`profile` nesnesini özellikleriyle çalışmak için metodlarla tamamlayın.

- `changeUsername(newName)` metodu, bir dizeyi (yeni ad) `newName` parametresi olarak almalı ve `username` özelliğinin değerini yeni değerle değiştirmelidir. Hiçbir şey döndürmez.
- `updatePlayTime(saatler)` metodu, bir sayıyı (saat miktarı) `hours` parametresi olarak almalı ve `playTime` özelliğinin değerini artırmalıdır. Hiçbir şey döndürmez.
- `getInfo()` metodu, `<Username> has <amount> active hours!` formatında bir dize döndürmelidir, burada `<Username>`, profil adıdır ve `<amount>`, oyun saatlerinin miktarıdır.

Fonksiyonunuzu tanımladıktan sonra aşağıdaki kodu alıp yapıştırın, böylece işlevin doğru çalışıp çalışmadığını kontrol edebilirsiniz. Sonuçlar konsola yazdırılacaktır.

```
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
```

Bu kodu mentor tarafından kontrol edilmesi için bırak.

**Mentor kontrol ederken dikkat edilecek noktalar:**

- `profile` adında bir değişken tanımlandı
- `profile` değişkeninin değeri, `username`, `playTime`, `getInfo`, `changeUsername` ve `updatePlayTime` özelliklerine sahip bir nesnedir
- `getInfo` özelliğinin değeri bir fonksiyondur
- `changeUsername` özelliğinin değeri bir fonksiyondur
- `updatePlayTime` özelliğinin değeri bir fonksiyondur
- Nesnenin özelliklerine metotlarında erişmek için `this` kullanılır.
- 

Bir **oyuncu profili nesnesi** tanımlamak ve ona 3 tane metod eklemek:

- **changeUsername(newName)** → kullanıcı adını değiştirir.
- **updatePlayTime(hours)** → oynama süresini artırır.
- **getInfo()** → bilgiyi özel bir formatta string olarak döndürür.

Burada kritik nokta: **this kullanmak**, çünkü nesne içindeki diğer özelliklere (username, playTime) erişmek için this.username, this.playTime yazmamız gerekiyor.

---

## **📌 Çözüm (task-3.js)**

```
const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Testler
console.log(profile.getInfo());
// "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo());
// "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo());
// "Marco has 320 active hours!"
```

---

## **📖 Açıklama**

1. this.username → profile nesnesinin içindeki username özelliğini işaret eder.
2. this.playTime → profile nesnesinin içindeki playTime özelliğini işaret eder.
3. changeUsername("Marco") → username değerini "Marco" olarak değiştirir.
4. updatePlayTime(20) → mevcut playTime değerine 20 ekler.
5. getInfo() → "Marco has 320 active hours!" gibi düzgün bir string döndürür.

---

✅ Mentor kontrolünde dikkat edilecekler:

- profile nesnesi tanımlı.
- İçinde username, playTime, getInfo, changeUsername, updatePlayTime var.
- Fonksiyonlar this ile nesnenin özelliklerine erişiyor.
- Çıktılar, görevde verilen örneklerle birebir uyumlu.

---