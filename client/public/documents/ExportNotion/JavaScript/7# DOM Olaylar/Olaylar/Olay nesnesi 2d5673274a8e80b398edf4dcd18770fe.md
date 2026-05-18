# Olay nesnesi

Bir olayın işlenmesi için, sadece olayın bir tıklama mı yoksa tuşa basma mı olduğunu bilmek **yeterli değildir**. Geliştirici, olayın gerçekleştiği öğe, mevcut metin alanı değeri, yerleşik yöntemler gibi **diğer ayrıntılara** da ihtiyaç duyabilir.

Her olay, bir olayın ayrıntılarını içeren bir **nesnedir** ve bu nesne, olay işleyicisine **birinci argüman** olarak otomatik olarak iletilir.

Tüm olay nesneleri, temel `Event` sınıfından türetilir.

```
const handleClick = event => {
  console.log(event);
};

button.addEventListener("click", handleClick);
```

`event` parametresi, olayın gerçekleşmesiyle birlikte **otomatik olarak** geri çağırma (callback) fonksiyonuna **ilk argüman** olarak iletilen bir **olay nesnesidir**.

Bu parametreye istediğimiz ismi verebiliriz; ancak genellikle `e`, `evt` veya `event`olarak adlandırılır.

**Olay nesnesinin bazı yaygın özellikleri:**

- `event.type` – Olayın türünü belirtir (örneğin `"click"`, `"keydown"`).
- `event.currentTarget` – Olay işleyicisinin çalıştırıldığı **öğeyi** ifade eder.

### **🔹 Olay Nesnesi (Event Object) — Kısa Özet**

**Nedir?**

Olay nesnesi, bir olay gerçekleştiğinde (tıklama, tuşa basma vb.) o olaya ait **tüm detayları taşıyan** özel bir JavaScript nesnesidir.

---

### **📌 Ne işe yarar?**

Sadece *“tıklandı mı?”* bilgisini değil, şunları da öğrenmemizi sağlar:

- Olay **hangi türde** gerçekleşti (click, keydown vb.)
- Olay **hangi öğede** oldu
- Kullanıcının yaptığı **etkileşimin detayları**

---

### **🔁 Nasıl gelir?**

Olay nesnesi, **event listener’a otomatik olarak ilk parametre** olarak gönderilir.

```
const handleClick = event => {
  console.log(event);
};

button.addEventListener("click", handleClick);
```

---

### **🧠 Sık kullanılan özellikler**

```
event.type          // Olay türü → "click"
event.currentTarget // Olayı dinleyen öğe
```

Örnek:

```
const handleClick = event => {
  console.log(event.type); // "click"
  console.log(event.currentTarget); // <button>...</button>
};
```

---

### **🧾 Tek cümlelik özet:**

> Olay nesnesi, bir olay gerçekleştiğinde o olayla ilgili tüm bilgileri taşıyan ve event listener’a otomatik olarak iletilen nesnedir.
>