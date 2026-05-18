# Global border-box (bu kod CSS başında yaz)

Modern projelerde `border-box` değeri blok modelinin standardı olarak kabul edilir. Her elemente ayrı ayrı `box-sizing` özelliği atamaktan kaçınmak için, stil sayfanızın başında aşağıdaki CSS kodunu kullanabilirsiniz:

- `,
*::before,
*::after { box-sizing: border-box;
}
*/* Kodun geri kalanı */*`

Bu kodda kullanılan evrensel seçici `*`, tüm öğeleri ve tüm öğe içi (pseudo) öğeleri `::before` ve `::after` seçer ve bunlara `border-box` değerini atar (bu seçiciler hakkında daha fazla bilgiye daha sonra ulaşabilirsiniz).

[modern-normalize](https://www.notion.so/eb7eeef1b42848cc8d22d69cb2acd4ec?pvs=21) normalleştirici paketi varsayılan olarak global bir `border-box` ayarına sahiptir. Bu nedenle, projenizin gereksinimlerine bağlı olarak, stillerinizde kutu boyutunu ayrıca belirtmenize gerek kalmayabilir.

### **🔎 Anlamı:**

- → Tüm HTML öğelerini seçer
- ::before ve *::after → Tüm pseudo-elementleri (örn. içerik öncesi veya sonrası oluşturulan stiller) kapsar
- Bu satırla, **tüm öğelerin kutu modeli border-box** olarak ayarlanır.

---

## **📌 Neden bu kodu yazıyoruz?**

### **1. Tutarlı bir kutu modeli sağlamak için**

- border-box, içerik + padding + border’ı tek bir width/height içine sıkıştırır.
- Bu sayede padding ve border ekledikçe hesap yapmaya gerek kalmaz.

### **2. Tasarım bozulmalarını önlemek için**

- Özellikle karmaşık yapılarda veya responsive (mobil uyumlu) tasarımlarda, content-box yüzünden kutular taşabilir ya da hizalar şaşabilir.
- border-box ile bu sorunlar minimuma iner.

---

## **🧠 Her zaman yazmak şart mı?**

### **🎯 Eğer modern-normalize gibi bir CSS reset / normalize paketi kullanıyorsan:**

> 💡 modern-normalize zaten bu box-sizing: border-box ayarını
> 
> 
> **global olarak uygular.**
> 

Yani şunu yapar:

```
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

Bu durumda tekrar yazmana gerek **olmayabilir**. Ama emin değilsen veya başka normalize kullanıyorsan, en başa kendin eklemen iyi olur.

---

## **🔐 En güvenlisi ne?**

Projenin başında, özellikle kendi CSS dosyanla başlıyorsan:

```
/* Base ayarlar */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

bu kodu **alışkanlık olarak** eklemek **en güvenli ve önerilen yoldur.**

---

## **🧾 Özetle**

| **Durum** | **Gerekli mi?** |
| --- | --- |
| Kendi başına vanilla CSS yazıyorsan | ✅ Evet |
| Normalize.css gibi eski reset kullanıyorsan | ✅ Evet |
| modern-normalize gibi bir reset kullanıyorsan | 🔄 Duruma göre (genelde içerir) |
| Bir CSS framework (Bootstrap, Tailwind vs.) kullanıyorsan | ⛔ Gerek yok (zaten içeriyor) |

---

CSS düzenleyicisinde, `border-box` değerine sahip `box-sizing`özelliğinin global değeri için bir kural ekleyin.

- Stil sayfasında `, *::before, *::after` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `, *::before, *::after` seçicisine sahip CSS kuralı, `border-box`değerine sahip `box-sizing` özelliğine sahip olmalıdır.
- `, *::before, *::after` seçicisine sahip CSS kuralı, `:root`seçicisine sahip kuraldan hemen sonra bildirilmelidir.
    
    ![Screen Shot 2025-07-12 at 13.09.24 PM.png](Global%20border-box%20(bu%20kod%20CSS%20ba%C5%9F%C4%B1nda%20yaz)/Screen_Shot_2025-07-12_at_13.09.24_PM.png)