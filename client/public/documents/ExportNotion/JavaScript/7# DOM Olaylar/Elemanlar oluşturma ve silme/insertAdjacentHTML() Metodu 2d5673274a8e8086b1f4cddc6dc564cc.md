# insertAdjacentHTML() Metodu

`insertAdjacentHTML()` metodu, **HTML etiketleri içeren bir metni** bir elemanın **önüne**, **arkasına** veya **içine** eklemek için kullanılan modern bir yöntemdir.

Bu yöntem, mevcut içeriğe etiket eklerken içeriğin yeniden serileştirilmesi sorununu **ortadan kaldırır**.

`element.insertAdjacentHTML(position, string)`

`position` argümanı, `element` öğesine göre **eklenecek HTML içeriğinin konumunu**belirleyen bir **dizedir**.

Aşağıdaki değerlerden birini alır:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e57ebae4-c09e-4a94-ba0d-8d5fd5264708Frame%2048662.jpg)

`position` argümanı aşağıdaki değerlerden birini alabilir:

- `"beforebegin"` – Elementin **önünde**
- `"afterbegin"` – Elementin **içinde**, tüm çocuklardan **önce**
- `"beforeend"` – Elementin **içinde**, tüm çocuklardan **sonra**
- `"afterend"` – Elementin **arkasında**

`"beforebegin"` ve `"afterend"` değerleri, yalnızca **elementin zaten DOM ağacında bulunduğu durumlarda** çalışır. Bu kısıtlama, bir element **DOM ağacında yer almıyorsa**, içeriğin nereye yerleştirileceğinin belirlenememesinden kaynaklanır.

Canlı örnekte, başlangıçta üç öğeden oluşan bir liste yer alır.

Daha sonra, JavaScript kullanarak `insertAdjacentHTML` metoduyla bir **başlık** ve üç **yeni liste öğesi** ekleriz.

👉 **Ne işe yarar?**

Bir HTML öğesinin **önüne, içine veya arkasına** yeni HTML kodu eklemek için kullanılır.

👉 **Neden kullanılır?**

innerHTML gibi tüm içeriği silip yeniden oluşturmaz.

Sadece **ekleme yapar**, bu yüzden **daha hızlı ve verimlidir**.

---

### **Kullanımı**

```
element.insertAdjacentHTML(position, htmlString);
```

- **position**: HTML’in nereye ekleneceğini söyler
- **htmlString**: Eklenecek HTML metni (string)

---

### **position Değerleri (çok net)**

| **Değer** | **Ne demek** |
| --- | --- |
| "beforebegin" | Elemanın **önüne** |
| "afterbegin" | Elemanın **içine, en başa** |
| "beforeend" | Elemanın **içine, en sona** |
| "afterend" | Elemanın **arkasına** |

📌 beforebegin ve afterend **sadece eleman DOM’daysa** çalışır.

---

### **Mini Örnek**

```
const list = document.querySelector("ul");

list.insertAdjacentHTML("beforeend", "<li>New item</li>");
```

➡️ Listenin **sonuna** yeni bir <li> ekler.

---

### **Kısaca Mantık**

- 🔹 HTML ekler
- 🔹 Var olan içeriği silmez
- 🔹 innerHTML’den daha performanslıdır
- 🔹 Dinamik içerik eklemek için idealdir

💡 **Akılda kalıcı:**

> insertAdjacentHTML = “Mevcut yapıyı bozmadan HTML ekle”
>