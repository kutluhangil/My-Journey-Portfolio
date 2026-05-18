# Mantıksal “DEĞIL” - Logical NOT (!)

Şimdiye kadar ele aldığımız tüm operatörler ikiliydi. İkili operatörler iki işlenen içerir: sol ve sağ.

Mantıksal “DEĞIL” (`!`) — **tek değişkenli** bir operatördür — bir işlenen üzerinde sağa doğru bir işlem gerçekleştirir.

`!expression`

Mantıksal “DEĞİL” (`!`) operatörü, verilen ifadeyi önce mantıksal (`true` veya `false`) bir değere dönüştürür, ardından bu değerin tersini alır.

Yani `true` → `false`, `false` → `true` dönüşümü gerçekleşir.

`console.log(!true); *// false*
console.log(!false); *// true*console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true`

Pratikte, mantıksal olumsuzlama tersini kontrol etmek için kullanılır. Örneğin, bir sohbet mesajının yalnızca kullanıcı **engellenmemişse** yazılmasına izin verebilirsiniz.

`const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}`

Yukarıdaki örnekte, `isBlocked` değişkeninin değeri `false` olduğundan, kullanıcı engellenmemiştir. Bu durumda `canChat` değişkeninin sonucu `true` olacaktır.

`isBlocked` değişkeninin değeri `true` ise, bu durumda kullanıcı engellenmiş demektir. Dolayısıyla `canChat` ifadesinin sonucu `false` olur ve `if` koşulu, kullanıcının sohbete yazmasını engeller.

`const isBlocked = true;
const canChat = !isBlocked; // !true -> false

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}`

Mantıksal “DEĞİL” (`!`) operatörü, diğer mantıksal operatörlerle birlikte kullanılabilir. Örneğin, bir sohbete yazabilme durumu hem kullanıcının çevrimiçi olmasına hem de engellenmemiş olmasına bağlıysa, bu koşullar birlikte değerlendirilebilir.

`const isOnline = true*;*const isBlocked = false*;*const canChat = isOnline && !isBlocked*;* 
// true && !false -> true && true -> true

if(canChat) {
	console.log("Can type in chat!")
} else {
	console.log("Blocked from typing in chat!")
}`

---

## **1. Mantığı Nedir?**

- ! operatörü bir **tek işlenen** alır.
- Önce işleneni **boolean (true/false)** tipine çevirir.
- Sonra bu değerin **tersini** alır:
    - true → false
    - false → true

---

## **2. Örneklerle**

```
console.log(!true);   // false
console.log(!false);  // true

console.log(!3);      // !true -> false
console.log(!"Mango");// !true -> false
console.log(!0);      // !false -> true
console.log(!"");     // !false -> true
console.log(!null);   // !false -> true
```

- 3, "Mango" → truthy → tersleri false
- 0, "", null → falsy → tersleri true

---

## **3. Pratik Kullanım**

### **a) Olumsuz koşulları kontrol etmek**

```
const isBlocked = false;
const canChat = !isBlocked; // !false -> true

if (canChat) {
  console.log("Can type in chat!");
} else {
  console.log("Blocked from typing in chat!");
}
```

- Eğer isBlocked = false → kullanıcı engelli değil → !false = true → sohbet edebilir.
- Eğer isBlocked = true → kullanıcı engelli → !true = false → sohbet edemez.

---

### **b) Diğer operatörlerle birlikte**

! sıkça && (VE) veya || (VEYA) ile birlikte kullanılır.

```
const isOnline = true;
const isBlocked = false;
const canChat = isOnline && !isBlocked;
// true && !false -> true && true -> true
```

- Kullanıcı **çevrimiçi** (true) ve **engelli değilse** (!false = true), sohbete yazabilir.
- Yani ! ile “engelli değil” şartını kolayca ifade edebiliyoruz.

---

## **4. Kısacası**

- ! → verilen değeri boolean’a çevirir, tersini alır.
- Truthy → false, Falsy → true.
- Olumsuz durumları kontrol etmekte çok kullanışlıdır.
- Diğer mantıksal operatörlerle birleşerek güçlü koşullar yazmamızı sağlar.

---

# **Görev**

`toggleModalVisibility(isVisible)` işlevi, modal pencerenin görünürlüğünü değiştirir. `isVisible` parametresi olarak bir boolean değeri `true` veya `false` bekler. Fonksiyonu, bu parametrenin ters değerini döndürecek şekilde tamamlayın.

# **Testler**

- `toggleModalVisibility(isVisible)` işlevi tanımlanmalıdır.
- `toggleModalVisibility(true)` çağrısı `false` değerini döndürmelidir.
- `toggleModalVisibility(false)` çağrısı `true` değerini döndürmelidir.
- Kullanılan operatör `!` olmalıdır.

# **Doğru cevap**

`function toggleModalVisibility(isVisible) {
 return !isVisible;
}`