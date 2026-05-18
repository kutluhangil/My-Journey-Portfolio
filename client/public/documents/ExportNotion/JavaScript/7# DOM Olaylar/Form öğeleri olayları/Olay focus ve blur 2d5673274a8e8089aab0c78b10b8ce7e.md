# Olay focus ve blur

Bir öğeye fareyle tıklanması veya **Tab tuşuyla gezinilmesi** sırasında öğe **odaklanır**.

**Odaklanma** ve **odaktan çıkma** anları oldukça önemlidir.

Örneğin, odak aldığımızda:

- Verileri otomatik olarak doldurabilir,
- Değişiklikleri izlemeye başlayabiliriz.

Odaktan çıktığımızda ise:

- Girilen verileri kontrol etmek gibi işlemler gerçekleştirebiliriz.
- `focus` olayı, bir öğeye **odaklandığımızda** gerçekleşir.
- `blur` olayı ise, **odak kaybedildiğinde** — örneğin kullanıcı ekranın başka bir yerine tıkladığında — gerçekleşir.

Odaklamayı programatik olarak **etkinleştirebilir** veya **iptal edebiliriz**.

Bunun için ilgili öğe üzerinde `focus()` veya `blur()` yöntemlerini çağırmamız yeterlidir.

Son olarak, **`focus`** ve **`blur` olaylarının** canlı bir örnekte nasıl çalıştığını inceleyin.

Birim zamanda **yalnızca bir öğe** odaklanmış olabilir.

Şu anda odaklanan öğeye, `document.activeElement` özelliği kullanılarak **erişilebilir**.

Çoğu öğe **odak alamaz**.

Örneğin, bir `<div>` öğesine tıklamak **odaklanmayı başlatmaz**, çünkü bu öğe **etkileşimli değildir**.

### **🧠 Mantığı (ELI5)**

Odak (**focus**), kullanıcının şu anda **hangi öğeyle etkileşimde olduğunu** gösterir.

Yani: *“Klavye girdisi şu an nereye gidiyor?”*

- Bir input’a tıklarsan veya **Tab** ile gidersen → o öğe **odaklanır**
- Başka bir yere tıklarsan → önceki öğe **odaktan çıkar**

Bu sayede:

- Odak **alındığında** → kullanıcı yazmaya başlıyor, hazırlık yapabilirsin
- Odak **kaybedildiğinde** → kullanıcı işini bitirdi, kontrol edebilirsin

---

### **🔹 Kısa ve Öz Özet**

- **focus** → öğe odak aldığında çalışır
- **blur** → öğe odak kaybettiğinde çalışır

```
input.addEventListener("focus", () => console.log("Odaklandı"));
input.addEventListener("blur", () => console.log("Odak kayboldu"));
```

- Odak **kodla verilebilir** → element.focus()
- Odak **kodla kaldırılabilir** → element.blur()
- Aynı anda **sadece 1 öğe** odakta olabilir
- Şu an odakta olan öğe:

```
document.activeElement
```

---

### **⚠️ Önemli Not**

- Sadece **etkileşimli öğeler** (input, button, select, textarea, link) odak alır
- <div> gibi öğeler **varsayılan olarak odaklanamaz**

> Kısaca:
> 

> focus = kullanıcı başladı
> 

> blur = kullanıcı bitirdi
>