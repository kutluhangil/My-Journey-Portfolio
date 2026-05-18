# Verileri Almak

`getItem(key)` yöntemi, depodan belirtilen `key` anahtarıyla bir kaydı okumanızı sağlar ve onun değerini **JSON biçiminde** döndürür.

```
const savedTheme = localStorage.getItem("ui-theme");
console.log(savedTheme); // "light"

```

Depo içinde belirtilen anahtarla kayıt bulunmuyorsa, yöntem `null` değerini döndürür.

```
const savedItem = localStorage.getItem("key-that-does-not-exist");
console.log(savedItem); // null
```

Eğer değer **primitif** bir türse, ayrıştırmaya gerek yoktur.

Aksi hâlde, bir dizi veya nesne ise, geçerli veriler elde etmek için `JSON.parse()`yöntemiyle değeri ayrıştırmak gereklidir.

```
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object
```

`savedSettings` değişkeninde bir nesneyi temsil eden bir dize olacak, bu yüzden bu değeri ayrıştıracağız ve `parsedSettings` değişkeninde özelliklere sahip tam bir nesne elde edeceğiz.

## **🧠 Kısaca ne işe yarıyor? (Notluk)**

> localStorage’dan alınan veri:
> 
- **Her zaman stringtir**
- Eğer veri nesne/dizi ise → **JSON.parse() ile gerçek JS nesnesine çevrilir**
- Böylece özelliklere ve elemanlara normal şekilde erişebiliriz

---

## **🎯 Nerede kullanılır?**

- Tema tercihi (dark / light)
- Kullanıcı ayarları
- Sepet bilgileri
- Login durumu
- Form verilerini sayfa yenilense bile korumak

---

### **Tek cümlelik özet:**

> localStorage.getItem() veriyi string olarak getirir, nesne/dizi ise
> 
> 
> **JSON.parse**
>