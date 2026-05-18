# Üst düzey öğeler: <html> etiketi

Üst düzey öğeler, bir web sayfasının temel yapısını oluşturmak ve belgenin başlık (hizmet bilgileriyle) ve gövde (sayfa içeriğiyle) bölümlerini tanımlamak için tasarlanmıştır.

`<html>` etiketi, belgenin kök öğesidir ve sayfanın tüm içeriğini içeren kapsayıcıdır. `<html>` etiketinin dışındaki herhangi bir şey tarayıcı tarafından HTML kodu olarak algılanmaz ve işlenmez.

`<!DOCTYPE html>
<html lang="en"></html>`

`lang` niteliği, sayfa metninin hangi dilde yazıldığını gösterir. Bu, arama motorları ve ekran okuyucular gibi yardımcı teknolojiler için gereklidir.

**🔹 “Üst düzey öğeler” ne demek?**

---

Bu ifadeyle anlatılmak istenen şu:

Bir HTML sayfasının **en tepe**, **en genel** parçalarıdır. Sayfanın iskeletini bunlar oluşturur. Bunların en başında da <html> etiketi gelir.

---

### **🏗**

### **<html>**

### **etiketi ne işe yarar?**

```
<html> ... </html>
```

Bu etiket, **tüm HTML sayfasının kapsayıcısıdır**.

Yani tarayıcı, “Bu sayfa HTML mi?” diye baktığında bu etiketi arar.

Eğer <html> etiketi dışında bir yerde HTML kodu varsa, tarayıcı onu **yok sayabilir** veya yanlış gösterebilir.

💡 **Unutma:** Sayfanın başlık kısmı (yani <head>) ve içerik kısmı (yani <body>) bile bu etiketin içinde yer almalıdır.

---

### **🌍 lang niteliği ne işe yarar?**

```
<html lang="en">
```

Bu kısımda geçen lang="en" ifadesi, **sayfanın dili İngilizce** demektir.

Neden önemli?

- **Arama motorları** (Google gibi), sayfanın hangi dilde olduğunu anlar ve buna göre gösterir.
- **Ekran okuyucu** kullanan görme engelli bireyler için, doğru telaffuz ve okuma yapılır.
- Çok dilli siteler için olmazsa olmazdır.

📌 Eğer sayfan Türkçeyse lang="tr" yazmalısın:

```
<html lang="tr">
```

---

### **✅ Özetle:**

| **Terim** | **Anlamı** |
| --- | --- |
| **Üst düzey öğe** | Sayfanın temelini oluşturan büyük yapı parçaları |
| **<html>** | Sayfanın tüm içeriğini kapsayan, en dıştaki etiket |
| **lang="..."** | Sayfa içeriğinin hangi dilde yazıldığını belirtir |

---

🔧 Kısaca:

Senin HTML sayfan bir kutuysa, <html> o kutunun kendisidir. İçine neler koyduğun (başlık, içerik) fark etmez, her şey onun içinde olmalı.

Ve o kutunun üstüne hangi dilde olduğunu yazman da gerekir — yani lang="tr" ya da lang="en" gibi.