# for Döngüsü

`for` döngüsü ayrıca tekrarlanan kodları çok kez çalıştırmayı sağlar. `while` ve `do…while` döngülerinden farklı olarak, `for` döngüsünün bir sayaç değişkeni vardır. Sayaç değişkeni `let` anahtar kelimesiyle tanımlanır (`const` ile tanımlandığında hata alırsınız). Her bir iterasyonda döngü gövdesindeki kod çalıştırıldıktan sonra, sayaç değişkeni belirli bir adımla başlangıç değerinden bitiş değerine değişir.

`for` döngüsünün sözdizimi:

`for (initialization; condition; afterthought) {
  statement *// **Döngü Gövdesi***
}`

- **Başlatma (initialization)** — **döngüye başlamadan önce bir kez** gerçekleştirilir. Burada sayıcı değişkeni tanımlanır ve başlangıç değeri belirtilir.
- **Koşul (condition) —** Bu, döngünün her **iterasyonu öncesinde değerlendirilen bir ifade**dir. Koşul **`true`** olarak dönüştürülürse, döngünün gövdesi çalıştırılır. Koşul **`false`** olursa, döngü sona erer.
- **Sonraki ifade (afterthought)** — Bu, döngünün her iterasyonunun sonunda, **koşul tekrar kontrol edilmeden önce** çalıştırılır.
- **Döngü Gövdesi** — Bu, eğer koşul **`true`** olarak dönüşürse, **döngünün her iterasyonunda** çalıştırılan bir kod bloğudur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/2628ed22-79b8-41aa-9ab9-a9e21a60ae35Frame%2048591.jpg)

Örnek bir durumu inceleyelim:

`for (let i = 0*; i <= 20; i += 5) {*
  console.log(i)*;*
}`

Verilen `for` döngüsü örneğinde, `i` değişkeni 20 değeriyle başlatılır. Döngü, `i` değeri **0’a eşit veya daha büyük** olduğu sürece devam eder. Her iterasyonda `i` değeri `5` artar. Sonuç olarak, konsola `0`, `5`, `10`, `15` ve `20` sayıları yazdırılır.

Ayrıca, her iterasyondan sonra sayaç değerini azaltarak ters geri sayım da yapılabilir, koşulu değiştirerek.

`for (let i = 20*; i >= 0; i -= 5) {*
  console.log(i)*;*
}`

Verilen `for` döngüsü örneğinde, `i` değişkeni `20` değeri ile başlatılır. Döngü, `i` değeri `0`'dan büyük veya eşit olana kadar devam eder. Her bir iterasyondan sonra `i` değeri `5` azaltılır. Sonuç olarak, konsola `20`, `15`, `10`, `5` ve `0` sayıları yazdırılır.

---

## **for Döngüsü Mantığı**

Bir işi **tekrar tekrar** yapmamız gerektiğinde (örneğin, 1’den 10’a kadar sayıları yazdırmak) döngü kullanırız.

👉 for döngüsü özellikle **kaç defa çalışacağını bildiğimiz** durumlarda kullanılır.

Yapısı:

```
for (initialization; condition; afterthought) {
  // döngü gövdesi (her turda çalışacak kod)
}
```

- **initialization (başlatma):** Döngü başlarken sayaç değişkenini tanımlarız (let i = 0;).
- **condition (koşul):** Döngü çalışmaya devam etsin mi? (i <= 20). Eğer **false** olursa döngü biter.
- **afterthought (adım):** Her tur sonunda sayaç nasıl değişsin? (i += 5).
- **body (gövde):** Her turda yapılacak işler (console.log(i)).

---

## **✅ Örnek 1: İleri Sayma**

```
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
```

📌 Adım adım çalışması:

1. **Başlatma:** i = 0
2. **Koşul:** i <= 20 → doğru, gövde çalışır (console.log(0)).
3. **Adım:** i += 5 → i = 5.
4. Tekrar koşul → i <= 20 → doğru → yazdır (5).
5. Bu böyle 0, 5, 10, 15, 20’ye kadar gider.

---

## **✅ Örnek 2: Geri Sayma**

```
for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}
```

📌 Adım adım çalışması:

1. **Başlatma:** i = 20
2. **Koşul:** i >= 0 → doğru, yazdır (20).
3. **Adım:** i -= 5 → i = 15.
4. Tekrar koşul → yazdır (15).
5. Böyle 20, 15, 10, 5, 0’a kadar gider.

---

## **🎯 Günlük hayattan benzetme**

- Bir **asansör** düşün:
    - Başlangıç (i = 0) → asansör 0. katta başlıyor.
    - Koşul (i <= 20) → 20. kata kadar çıkabilir.
    - Adım (i += 5) → her seferinde 5 kat çıkıyor.
    - Gövde (console.log(i)) → her durakta katta olduğumuzu söylüyoruz.

Aynı mantıkla aşağıya inerken de i -= 5 yapıyoruz 🚪⬇️

---

👉 Yani özet:

- for döngüsü **başlangıç, bitiş ve adım** belli olduğunda çok kullanışlıdır.
- **while** daha çok “kaç kez çalışacağı bilinmeyen” durumlarda tercih edilir.

---

Bir for döngüsü şu şekilde yazılıyor:

```
for (başlatma; koşul; son-ifade) {
  // döngü gövdesi
}
```

---

### **🔢 1. Başlatma (Initialization)**

👉 Döngü başlarken **sadece bir kez** çalışır.

Burada sayaç değişkeni oluşturulur ve ilk değer verilir.

Örnek:

```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Burada let i = 0 sadece **bir kez** yapılır.

---

### **🔍 2. Koşul (Condition)**

👉 Döngü **her turdan önce** kontrol edilir.

Eğer true → döngü gövdesi çalışır.

Eğer false → döngü biter.

Örnek:

- i < 5 doğruysa döngü devam eder.
- i artık 5 olduğunda → koşul false olur ve döngü durur.

---

### **🔁 3. Döngü Gövdesi (Body)**

👉 Koşul doğruysa, gövde çalışır.

Yani süslü parantez { ... } içindeki kod her seferinde yürütülür.

---

### **🔄 4. Son ifade (Afterthought)**

👉 Gövde çalıştıktan **sonra** her turda çalışır.

Genelde sayaç artırılır (i++).

---

### **🛑 5. Döngünün bitmesi**

Döngü **koşul false olduğunda** durur.

- Eğer i < 5 artık sağlanmıyorsa → döngü sona erer.

---

### **🎯 Özet akış:**

1. Başlatma → sadece bir kez
2. Koşul kontrolü
3. Eğer doğruysa → Gövde çalışır
4. Son ifade → sayaç değişir
5. Tekrar koşula dönülür
6. Koşul false olunca döngü biter

---

👉 Kısaca:

- **Başlatma:** 1 kez
- **Koşul:** her turdan önce
- **Son ifade:** her turdan sonra
- **Durma:** koşul false olunca

---

# **Görev**

`calculateTotal(number)` fonksiyonu bir tamsayıyı (parametre `number`) alır. Bu fonksiyon, 1'den belirtilen sayıya kadar olan tüm tamsayıların toplamını döndürmelidir. Bu amaçla bir `for` döngüsü kullanarak kodu tamamlayın. Örneğin,`number` değeri `3` ise, toplam `1 + 2 + 3` şeklinde hesaplanmalı ve sonuç `6` olmalıdır..

# **Testler**

- `calculateTotal(number)` fonksiyonu tanımlanmalıdır.
- `calculateTotal(1)` işlevinin çağrılması `1` değerini döndürmelidir.
- `calculateTotal(0)` işlevinin çağrılması `0` değerini döndürmelidir.
- `calculateTotal(7)` işlevinin çağrılması `28` değerini döndürmelidir.
- `calculateTotal(18)` işlevinin çağrılması `171` değerini döndürmelidir.
- `calculateTotal(24)` işlevinin çağrılması `300` değerini döndürmelidir.
- `calculateTotal()` işlevinin rastgele bir sayı ile çağrılması doğru değeri döndürmelidir.

İşte doğru çözüm:

```
function calculateTotal(number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
}
```

---

### **✅ Nasıl çalışıyor?**

1. total değişkenini sıfırdan başlatıyoruz.
2. for döngüsü ile i değerini 1’den başlayıp number’a kadar artırıyoruz.
3. Her adımda total içine i’yi ekliyoruz (total += i).
4. Döngü bittiğinde total sonucu döndürülüyor.

---

### **🔍 Test Edelim**

```
console.log(calculateTotal(1));   // 1
console.log(calculateTotal(0));   // 0
console.log(calculateTotal(7));   // 28 (1+2+3+4+5+6+7)
console.log(calculateTotal(18));  // 171
console.log(calculateTotal(24));  // 300
```