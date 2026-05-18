# Mantıksal operatörler

# **Türleri dönüştürme: mantıksal**

**Mantıksal tür dönüştürme (Boolean type conversion)**, herhangi bir veri türündeki bir değerin `true` veya `false` mantıksal (Boolean) değerine dönüştürülmesi anlamına gelir.

Bir değerin `true` ya da `false` olarak değerlendirilip değerlendirilmeyeceğini belirleyen bazı kurallar vardır.

Bu kurallar iki şekilde devreye girer:

- `Boolean()` fonksiyonu kullanılarak yapılan **açık (explicit)** tür dönüştürmelerde
- `if` deyimleri veya mantıksal operatörler gibi yapılarda gerçekleşen **dolaylı (implicit)** tür dönüştürmelerde

1. **Boolean değerleri** `true` ve `false` değişmeden kalır.

`console.log(Boolean(true)); *// true*console.log(Boolean(false)); *// false*`

2. `0` **sayısı**, `NaN`, `null` ve `undefined` değerleri her zaman `false` değerine dönüştürülür. Diğer tüm sayılar `true` değerine dönüştürülür.

`console.log(Boolean(NaN)); *// false*console.log(Boolean(null)); *// false*console.log(Boolean(undefined)); *// false*console.log(Boolean(0)); *// false*console.log(Boolean(3.14)); *// true*console.log(Boolean(-10)); *// true*`

Şimdi bu örneklere bir göz atalım.

Hangi kod bloğu çalıştırılacaktır?

`if(null) {
	console.log("Block if")
} else {
	console.log("Block else")
}

if(0) {
	console.log("Block if")
} else {
	console.log("Block else")
}`

`if` ifadesinin koşulundaki değer `false` olarak ayarlanır.

Böylece, `else` bloğundaki kod yürütülür.

Bu örnekte hangi kod çalıştırılmaktadır?

`if(5) {
	console.log("Block if")
} else {
	console.log("Block else")
}`

`if` ifadesinin koşulundaki değer `true` olarak ayarlanır.

Böylece, `if` bloğundaki kod yürütülür.

3. **Boş dize** (`""`) `false` değerine dönüştürülür. Boş olmayan diğer tüm dizeler `true` olarak ayarlanır.

`console.log(Boolean("")); *// false*console.log(Boolean("hello")); *// true*console.log(Boolean("false")); *// true*`

Aşağıdaki örneği okuyunuz.

Kod hangi bloktan itibaren çalıştırılacak?

`if("") {
	console.log("Block if")
} else {
	console.log("Block else")
}`

Örnekte, `if` ifadesi koşulunda boş bir dize belirtilmiştir.

Boş dize `false` değerine dönüştürülür. Böylece `else` bloğundaki kod çalıştırılır.

Peki ya bu örnekte?

Hangi kod bloğu çalıştırılacak?

`if("batman") {
	console.log("Block if")
} else {
	console.log("Block else")
}`

Talimatın koşulunda — `"batman"` dizesi yer alır.

Yani, `if` `true` olarak ayarlanır. `if` bloğundaki kod çalıştırılır.

```
falsesonuçlanan 6 durumu hatırlayın:
0“”NaNnullundefinedfalse
```

### **Mantıksal tür dönüşümü (Boolean conversion)**

JavaScript bazen bir şeyi **“doğru mu, yanlış mı?”** diye kontrol etmek zorunda kalır.

Ama her şey **true** veya **false** değil ki! Sayılar var, stringler var, null, undefined var.

O yüzden JavaScript şunu yapıyor:

👉 “Ben bu değeri **true gibi mi kabul edeyim, yoksa false gibi mi?” diye karar veriyor.

Buna **mantıksal dönüşüm** deniyor.

---

### **Kurallar**

### **1. Zaten boolean olanlar değişmez**

- true → true
- false → false

```
console.log(Boolean(true));   // true
console.log(Boolean(false));  // false
```

---

### **2. Sayılar**

- 0, NaN → false
- Diğer tüm sayılar (pozitif veya negatif fark etmez) → true

```
console.log(Boolean(0));     // false
console.log(Boolean(3.14));  // true
console.log(Boolean(-10));   // true
console.log(Boolean(NaN));   // false
```

---

### **3. null ve undefined**

- null → false
- undefined → false

```
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
```

---

### **4. Stringler**

- "" (boş string) → false
- "herhangi bir şey" → true (tek harf bile olsa)

```
console.log(Boolean(""));       // false
console.log(Boolean("hello"));  // true
console.log(Boolean("0"));      // true  (dikkat! çünkü bu bir string)
```

---

### **if içinde nasıl çalışır?**

if parantezin içindekini boolean’a çevirip karar verir.

```
if(0) {
  console.log("Block if")
} else {
  console.log("Block else")
}
// 0 → false → else çalışır
```

```
if(5) {
  console.log("Block if")
} else {
  console.log("Block else")
}
// 5 → true → if çalışır
```

```
if("") {
  console.log("Block if")
} else {
  console.log("Block else")
}
// "" → false → else çalışır
```

```
if("batman") {
  console.log("Block if")
} else {
  console.log("Block else")
}
// "batman" → true → if çalışır
```

---

### **Özet (false kabul edilen 6 şey)**

1. 0
2. "" (boş string)
3. NaN
4. null
5. undefined
6. false

Bunların dışındaki **her şey true kabul edilir** 🎉

---

# **Görev**

`isNumberInRange(start, end, number)` fonksiyonu, bir sayının belirli bir aralığa dahil olup olmadığını kontrol eder. Bu fonksiyon, çağrıldığı sırada belirlenecek olan üç parametreyi kullanır :

- `number` - kontrol edilen sayı
- `start` - sayısal aralığın başlangıcı
- `end` - sayısal aralığın sonu

`isNumberInRange` fonksiyonunu `&&` operatörünü kullanarak yeniden düzenleyerek, `number`'ın `start` ile `end` arasındaki sayısal aralığa dahil olup olmadığını döndürecek şekilde tamamlayın. Yani sayı hem `start`'tan büyük veya ona eşit olmalı, hem de `end`'ten küçük veya ona eşit olmalıdır. Fonksiyon sonucu boolean `true` veya `false` olmalıdır.

# **Testler**

- `isNumberInRange(start, end, number)` işlevi duyuruldu
- `&&` operatörü kullanılmalıdır.
- `isNumberInRange(10, 30, 17)` çağrısı `true` fonksiyonu tanımlanmalıdır.
- `isNumberInRange(10, 30, 5)` çağrısı `false`değerini döndürmelidir.
- `isNumberInRange(20, 50, 24)` çağrısı `true` değerini döndürmelidir.
- `isNumberInRange(20, 50, 76)` çağrısı `false` değerini döndürmelidir.

---

### **🎯 Mantık**

Bir sayının belli bir aralıkta olup olmadığını kontrol etmek için iki şartımız var:

1. **number ≥ start** → sayı başlangıç değerinden küçük olmamalı.
2. **number ≤ end** → sayı bitiş değerinden büyük olmamalı.

👉 Bu iki koşulun **ikisi de doğru olmalı**. Yani burada **mantıksal VE (&&)** kullanacağız.

---

### **✅ Çözüm Kodu**

```
function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
}

// Testler
console.log(isNumberInRange(10, 30, 17)); // true
console.log(isNumberInRange(10, 30, 5));  // false
console.log(isNumberInRange(20, 50, 24)); // true
console.log(isNumberInRange(20, 50, 76)); // false
```

---

### **📝 Açıklama**

- number >= start → sayı başlangıca eşit veya büyük mü?
- number <= end → sayı bitişe eşit veya küçük mü?
- Eğer **her ikisi de doğru** ise sonuç true.
- Eğer **bir tanesi bile yanlış** ise sonuç false.

---