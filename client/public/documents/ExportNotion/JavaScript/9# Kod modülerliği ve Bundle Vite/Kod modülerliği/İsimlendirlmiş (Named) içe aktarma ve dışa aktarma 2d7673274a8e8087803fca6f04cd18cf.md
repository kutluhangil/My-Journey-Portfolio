# İsimlendirlmiş (Named) içe aktarma ve dışa aktarma

**İsimlendirilmiş dışa aktarma (named export)**, bir modülden bir veya birden fazla değeri belirli adlar altında dışa aktarma yöntemidir.

Bu sayede bir değişkeni, fonksiyonu, nesneyi vb. belirli bir adla dışa aktarabilir ve başka bir dosyada aynı adla içe aktararak erişebilirsiniz.

İsimlendirilmiş dışa aktarma işlemi `export` ifadesiyle gerçekleştirilir:

`export exportedValue`

Burada:

- `export`: dışa aktarma için anahtar kelime
- `exportedValue`: dışa aktarılacak değer

İsimlendirilmiş dışa aktarma için sözdizimi şöyledir:

```
export const makeMessage = username => {
	return `Welcome, ${username}!`;
};

export const levels = ["easy", "medium", "hard"];
```

```
Dikkat!
 Bir modülde istediğiniz kadar isimli dışa aktarma yapabilirsiniz. Bu, yalnızca bir tane olabilen varsayılan dışa aktarmanın aksine önemli bir farktır.

```

İsimli içe aktarma işlemi, `import` yapısı ile gerçekleştirilir.

`import { name } from "..."`

Burada:

- `import` ve `from`: içe aktarma için anahtar kelimeler
- `name`: modülde tanımlanan dışa aktarma adıyla birebir aynı olmalıdır
- `"..."`: modülün göreli dosya yolu (string olarak)

Örnek kullanım:

```
import { makeMessage, levels } from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
console.log(levels); // ["easy", "medium", "hard"]
```

```
İsimlendirilmiş içe aktarma, bir modülde çok sayıda dışa aktarılmış değer olduğunda ve sadece belirli olanları almak istediğinizde oldukça faydalıdır.
 Varsayılan dışa aktarma kullanılan bir değeri isimlendirilmiş şekilde içe aktaramazsınız. Aynı şekilde, isimli dışa aktarılan bir değeri varsayılan şekilde içe aktarmak da mümkün değildir.

```

İçe aktarma sırasında, almak istediğiniz değerlerin adlarını açıkça belirtmeniz gerekir. Bu da hangi bileşenlerin içe alınacağını net şekilde kontrol etmenizi sağlar.

---

## **1️⃣ Büyük resim (tek cümlelik mantık)**

👉 **Export = “Bu dosyadaki şunu, başka dosyalar da kullanabilsin.”**

👉 **Import = “Başka dosyada yazılmış şunu, buraya getir ve kullan.”**

---

## **2️⃣ Gerçek hayat benzetmesi (çok işe yarar)**

Düşün ki:

- **Bir dosya = bir atölye**
- Atölyede aletler var (fonksiyonlar, değişkenler)
- Normalde aletler **sadece o atölyede** kullanılabilir
- Ama bazı aletleri **dışarı kiralamak** istiyorsun

👉 İşte **export = dışarı kiralamak**

👉 **import = kiralanan aleti alıp kullanmak**

---

## **3️⃣ En basit örnek (tek dosya → başka dosya)**

### **📁 makeMessage.js**

```
function makeMessage(name) {
  return `Hello, ${name}!`;
}

export default makeMessage;
```

📌 Burada ne yaptık?

- makeMessage fonksiyonunu yazdık
- export default diyerek dedik ki:
    
    > “Bu dosyanın
    > 
    > 
    > **asıl işi**
    > 

---

### **📁 index.js**

```
import makeMessage from "./makeMessage";

console.log(makeMessage("Kutluhan"));
```

📌 Burada ne yaptık?

- Başka dosyadaki fonksiyonu **import ettik**
- Kendi dosyamızdaymış gibi kullandık

---

## **4️⃣ Peki “default” ne demek?**

**default = bu dosyanın ana şeyi**

### **Kurallar:**

- ✔ Bir dosyada **sadece 1 default export olur**
- ✔ Import ederken ismi **istediğin gibi koyabilirsin**

```
import mesaj from "./makeMessage";
import fn from "./makeMessage";
```

İkisi de çalışır 👍

---

## **5️⃣ Named export (birden fazla şeyi paylaşmak)**

### **📁 utils.js**

```
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
```

📌 Burada:

- 2 farklı fonksiyonu **isimli** olarak dışarı açtık

---

### **📁 index.js**

```
import { sum, multiply } from "./utils";

console.log(sum(2, 3));       // 5
console.log(multiply(2, 3)); // 6
```

📌 Kurallar:

- { } **şart**
- İsimler **birebir aynı** olmalı

---

## **6️⃣ Default vs Named farkı (çok önemli)**

| **Default Export** | **Named Export** |
| --- | --- |
| 1 tane olur | Sınırsız |
| { } yok | { } var |
| İsim serbest | İsim birebir |

---

## **7️⃣ “Neyi export edeceğim?” sorusunun cevabı**

Şunları export edersin:

- Başka dosyada **kullanılacak** olan şeyleri

❌ Export ETME:

- Sadece o dosyada kullanılan yardımcı kodları

---

## **8️⃣ Mini gerçek proje örneği (Vite için birebir)**

```
// api.js
export async function getUsers() {
  const res = await fetch("/users");
  return res.json();
}
```

```
// main.js
import { getUsers } from "./api";

getUsers().then(console.log);
```

👉 İşte modülerlik bu

👉 Kod düzenli, okunur, bakımı kolay

---

## **9️⃣ Tek cümlelik süper özet (not al 👇)**

> Export = bu dosyadaki şunu dış dünyaya açıyorum
> 

> Import = dışarı açılmış şeyi buraya alıyorum
> 

---