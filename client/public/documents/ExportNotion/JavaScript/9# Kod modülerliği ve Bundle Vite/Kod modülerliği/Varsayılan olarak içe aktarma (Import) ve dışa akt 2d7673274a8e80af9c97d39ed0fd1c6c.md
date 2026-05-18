# Varsayılan olarak içe aktarma (Import) ve dışa aktarma (export)

Temel fikir, bir modülde yalnızca bir adet varsayılan dışa aktarma (default export) olabileceğidir. Bu değer, modül başka bir yerde içe aktarıldığında modülün "ana" değeri olarak kabul edilir.

Varsayılan dışa aktarma işlemi `export default` yapısıyla gerçekleştirilir:

```
javascript
KopyalaDüzenle
```

`export default exportedValue`

Burada:

- `export default`: dışa aktarılacak anahtar ifade
- `exportedValue`: dışa aktarılacak değer

Bu sözdizimi varsayılan değeri dışa aktarmak için kullanılır:

```
const makeMessage = username => {
	return `Welcome, ${username}!`;
};

export default makeMessage;
```

Varsayılan olarak içe aktarma işlemi `import` yapısıyla gerçekleştirilir:

`import name from "..."`

Burada:

- `import` ve `from`: içe aktarma için anahtar kelimeler
- `name`: içe aktarılan değerin yerel değişkeni
- `"..."`: modül dosyasının göreli yolu (string olarak)

Proje dosyalarının herhangi birinde varsayılan değerleri şu şekilde içe aktarabilirsiniz:

```
import makeMessage from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
```

Dikkat: Varsayılan olarak içe aktarılan değerin adı, içe aktaran dosyada isteğe bağlı
olarak belirlenebilir.

Varsayılan dışa aktarma, bir modülden tek bir ana değer, işlev veya nesne ihraç edilmek istendiğinde oldukça kullanışlı bir seçenektir.

---

## **🔹 Default Export & Import (Varsayılan Dışa / İçe Aktarma)**

- **Bir dosyada (modülde) sadece 1 tane default export olabilir.**
- Bu export, o dosyanın **ana değeri** olarak kabul edilir.

---

### **✅ Default Export nasıl yapılır?**

```
const makeMessage = username => `Welcome, ${username}!`;

export default makeMessage;
```

👉 Bu dosya **tek bir ana şeyi** dışa aktarıyor: makeMessage

---

### **✅ Default Import nasıl yapılır?**

```
import makeMessage from "./makeMessage";
```

- Süslü parantez **yok**
- İçe aktarırken **ismi istediğin gibi verebilirsin**

```
import hello from "./makeMessage"; // Bu da geçerli
```

---

### **🧠 Akılda kalıcı özet**

- **default export** → dosyanın ana ürünü
- **sadece 1 tane olabilir**
- **import ederken isim serbest**
- { } kullanılmaz

---

### **📌 Ne zaman kullanılır?**

- Dosya **tek bir iş yapıyorsa**
    - Tek fonksiyon
    - Tek sınıf
    - Tek nesne

> 📦 “Bu dosyanın asıl olayı bu” demek istediğinde → export default
>