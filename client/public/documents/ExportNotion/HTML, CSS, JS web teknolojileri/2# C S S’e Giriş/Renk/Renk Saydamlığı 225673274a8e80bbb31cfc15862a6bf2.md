# Renk Saydamlığı

Renk saydamlığı eklemenin ana yolu `rgba()` fonksiyonudur. `rgb()`'den farklı olarak, dördüncü bir parametre ekler — renk saydamlığı (alfa kanalı).

`rgba(kırmızı, yeşil, mavi, alfa)`

Çoğu zaman, şeffaflık `0` (şeffaf) ile `1` (şeffaf değil) arasında bir sayı ile belirtilir.

`*/* Saf kırmızı renk ve %30 şeffaflık */*p {
  background-color: rgba(255, 0, 0, 0.3);
}`

Ancak `%0` (şeffaf) ile `%100` (şeffaf değil) arasındaki yüzdeleri de kullanabilirsiniz.

`*/* Saf kırmızı renk ve %30 şeffaflık */*
p {
  background-color: rgba(100%, 0%, 0%, 30%);
}`

```
Renk saydamlığıHex formatında da ayarlanabilir, ancak bu şekilde değer yazmanın ve hatırlamanın karmaşıklığı nedeniyle her zaman rgba () işlevi kullanılır.
```

# **Renk Saydamlığı**

Renk saydamlığı eklemenin ana yolu `rgba()` fonksiyonudur. `rgb()`'den farklı olarak, dördüncü bir parametre ekler — renk saydamlığı (alfa kanalı).

`rgba(kırmızı, yeşil, mavi, alfa)`

Çoğu zaman, şeffaflık `0` (şeffaf) ile `1` (şeffaf değil) arasında bir sayı ile belirtilir.

`*/* Saf kırmızı renk ve %30 şeffaflık */*p {
  background-color: rgba(255, 0, 0, 0.3);
}`

Ancak `%0` (şeffaf) ile `%100` (şeffaf değil) arasındaki yüzdeleri de kullanabilirsiniz.

`*/* Saf kırmızı renk ve %30 şeffaflık */*
p {
  background-color: rgba(100%, 0%, 0%, 30%);
}`

```
p {
  background-color: rgba(234, 51, 36, 0.5);
}
```

---

### **✅ 1. a seçicisi iki kez tanımlanmış**

Aynı seçici (a) için birden fazla tanım yapmak kodu gereksiz yere uzatır. Sadece **bir kez** yazman yeterli.

---

### **✅ 2. Her CSS kuralından sonra noktalı virgül (;) ve her bloğun sonunda kapalı süslü parantez (}) olmalı**

Senin kodunda nav bloğunda ; eksik. Tarayıcı çoğu zaman anlar ama sınav/otomatik kontrol sistemleri bunu hata sayabilir.

---

### **✅ Düzenlenmiş ve doğru CSS:**

```
header {
  background-color: #f5f5f5;
}

nav {
  background-color: rgba(0, 0, 255, 0.3);
}

a {
  color: #212121;
}
```

---

### **🔍 Kontrol listesi:**

| **İstenen Kural** | **Kodda Var mı?** | **Doğru mu?** |
| --- | --- | --- |
| header için background-color: #f5f5f5 | ✅ Evet | ✅ Doğru |
| nav için background-color: rgba(0, 0, 255, 0.3) | ✅ Evet | ✅ Doğru |
| a için color: #212121 | ✅ Evet | ✅ Doğru (tek tanıma indirildi) |

---

### **🎉 Sonuç:**

Kodun aşağıdaki gibi olursa **tüm istekleri karşılamış oluyorsun.** Otomatik sistemden de geçer 👍

İstersen HTML kısmını da kontrol edebilirim. Hazırsan onu da paylaşabilirsin.