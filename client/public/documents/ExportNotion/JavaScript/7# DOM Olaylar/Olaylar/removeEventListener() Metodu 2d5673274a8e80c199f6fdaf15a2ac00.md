# removeEventListener() Metodu

`removeEventListener()` metodu, bir olay dinleyicisini öğeden **kaldırmak** için kullanılır.

Geçilen argümanlar, `addEventListener()` metodundakilerle **aynıdır**:

— Olay adı,

— Geri çağırma (callback) fonksiyonu,

— (Varsa) opsiyonel ayarlar.

`element.removeEventListener(event, handler, options)`

Bir olay dinleyicisini `removeEventListener` ile bir öğeden kaldırabilmek için, `addEventListener` ile atanmış **aynı işlevin** kullanılması çok önemlidir.

Bu nedenle, olay işleyicileri için **adlandırılmış fonksiyonların** kullanılması önerilir.

Bu sayede aynı fonksiyon, gerektiğinde kolayca argüman olarak aktarılabilir.

```
const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};

button.addEventListener("click", handleClick);
```

### **🔹 removeEventListener() — Kısa ve Net Özet**

**Ne işe yarar?**

removeEventListener() bir HTML öğesine daha önce eklenmiş olan **olay dinleyicisini kaldırmak** için kullanılır.

Yani: *“Artık bu olaya tepki verme”* demektir.

---

### **📌 Nasıl çalışır?**

addEventListener() ile eklenen olayın **aynı türü** ve **aynı fonksiyonu** verilerek kaldırılır.

```
element.removeEventListener(event, handler, options);
```

---

### **⚠️ Önemli Kural**

👉 **Anonim fonksiyonlar kaldırılamaz.**

Bu yüzden **adlandırılmış fonksiyon** kullanmak gerekir.

❌ Yanlış (kaldırılamaz):

```
button.addEventListener("click", () => console.log("Clicked"));
button.removeEventListener("click", () => console.log("Clicked")); // Çalışmaz
```

✅ Doğru:

```
const handleClick = () => {
  console.log("Button clicked");
};

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

---

### **🧠 Ne zaman kullanılır?**

- Bir butonu **devre dışı bırakmak** istediğinde
- Oyunlarda veya animasyonlarda **geçici olaylar** için
- Performans ve kontrol amacıyla

---

### **🧾 Tek cümlelik özet:**

> removeEventListener(), bir öğenin belirli bir olaya verdiği tepkiyi durdurmak için kullanılır ve mutlaka aynı fonksiyon referansı ile çağrılmalıdır.
>