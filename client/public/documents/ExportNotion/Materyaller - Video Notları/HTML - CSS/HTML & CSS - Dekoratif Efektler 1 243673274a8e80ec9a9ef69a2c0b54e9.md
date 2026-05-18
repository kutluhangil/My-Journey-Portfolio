# HTML & CSS - Dekoratif Efektler 1

### **1. 🎨 Görsel Türleri: İçerik Görseli vs. Dekoratif Görsel**

### **📷 İçerik Görselleri**

- Sayfada bilgi verirler.
- etiketi ile eklenir.
- Erişilebilirlik için alt açıklaması ZORUNLUDUR.

🧠 **Unutma:** Bu tür görseller olmazsa, kullanıcı bir şeyleri kaçırır.

**Örnek:**

```
<img src="yemek.jpg" alt="Lazanya tarifi için görsel">
```

### **🌈 Dekoratif Görseller**

- Görsel şıklık ve süsleme içindir, bilgi taşımaz.
- background-image gibi CSS yöntemleriyle kullanılır.
- Sayfa bu görsel olmadan da anlamlıdır.

**Örnek:**

```
body {
  background-image: url('dots.png');
}
```

---

### **2. 🖼️ Arka Plan İşlemleri (CSS background)**

### **A. background-color**

Elemanın arka planına düz renk verir.

**Örnek:**

```
div {
  background-color: lightblue;
}
```

### **B. background-image**

Arka plana görsel yerleştirir.

**Örnek:**

```
section {
  background-image: url('../images/kedi.jpg');
}
```

### **C. background-size**

Görselin boyutunu belirler.

| **Değer** | **Açıklama** |
| --- | --- |
| cover | Görsel alanı tamamen kaplar, birazı kesilebilir. |
| contain | Görsel alanın içine sığar, boşluk kalabilir. |
| 100% 100% | Tam olarak alana oturur ama şekli bozulabilir. |
| 500px 300px | Belirli boyutta gösterilir. |

**Örnek:**

```
div {
  background-size: cover;
}
```

### **D. background-repeat**

Görselin tekrar edip etmeyeceğini ayarlar.

**Örnek:**

```
div {
  background-repeat: no-repeat;
}
```

### **E. background-position**

Görselin konumunu belirler.

**Örnek:**

```
div {
  background-position: center;
}
```

---

### **3. 🌈 Gradyanlar (Geçişli Renkler)**

Renkler arasında geçiş efekti sağlar.

### **linear-gradient**

Düz çizgi boyunca geçiş.

**Örnek:**

```
div {
  background: linear-gradient(to right, red, blue);
}
```

### **radial-gradient**

Merkezden dışa dairesel geçiş.

**Örnek:**

```
div {
  background: radial-gradient(yellow, green);
}
```

---

### **4. 🫥 Eleman Gizleme (visibility ve display)**

### **visibility: hidden;**

Eleman görünmez ama alanı korunur.

### **display: none;**

Eleman tamamen yok olur, boşluk da kalkar.

**Örnek:**

```
p {
  visibility: hidden;
}
span {
  display: none;
}
```

---

### **5. 🕶️ Kutu Gölgesi (box-shadow)**

Kutunun çevresine gölge verir. Gölgeye efekt katmak için kullanılır.

**Yapısı:**

```
box-shadow: yatay dikey bulanıklık yayılma renk;
```

**Örnek:**

```
div {
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.3);
}
```

### **inset → Gölge içe doğru olur.**

```
div {
  box-shadow: inset 2px 2px 5px gray;
}
```

---

### **6. 🪄 Sözde Elemanlar (::before ve ::after )**

Gerçekte HTML’de olmayan ama CSS ile eklenen içeriklerdir.

### **Kullanım Şekli:**

```
h1::before {
  content: '★ ';
  color: gold;
}
```

### **Not:**

- content özelliği şarttır.
- Genelde süsleme, ikon veya ekstra metin için kullanılır.

---

### **7. 🧩 SVG (Scalable Vector Graphics)**

Vektör görsellerdir: **Yakınlaştırıldığında bile bozulmaz.**

### **Avantajları:**

- Net kalır, piksel piksel olmaz.
- Hafiftir, siteyi yavaşlatmaz.
- CSS/JS ile şekli ve rengi değiştirilebilir.

### **Kullanım Yolları:**

🅰️  **ile:**

```
<img src="icon.svg" alt="Araba ikonu">
```

➡️ Ancak rengi CSS ile değiştiremezsin.

🅱️ **HTML içine SVG kodu:**

```
<svg width="24" height="24" fill="red">
  <circle cx="12" cy="12" r="10" />
</svg>
```

➡️ CSS ile rengi (fill) değiştirebilirsin.

🅾️ **SVG Sprite:**

Tüm ikonlar bir dosyada → Performans artar.

### **🧾 HTML & CSS - Dekoratif Efektler Özeti (Tablolu)**

| **🔢 #** | **🧩 Konu** | **📘 Açıklama** | **💻 Kullanım / Örnek** |
| --- | --- | --- | --- |
| 1 | **İçerik Görselleri** | Bilgi verir,  ile eklenir, alt zorunlu | <img src="foto.jpg" alt="Açıklama"> |
| 2 | **Dekoratif Görseller** | Bilgi taşımaz, CSS ile eklenir | background-image: url("bg.png"); |
| 3 | **Arka Plan Rengi** | Düz arka plan rengi tanımlar | background-color: red; |
| 4 | **Arka Plan Görseli** | CSS ile görsel arka plana eklenir | background-image: url("kedi.jpg"); |
| 5 | **Görsel Boyutu (background-size)** | Görselin nasıl sığacağını ayarlar | cover, contain, 100% 100% |
| 6 | **Tekrar (background-repeat)** | Görselin tekrar edilip edilmeyeceği | no-repeat, repeat-x, repeat-y |
| 7 | **Konum (background-position)** | Görselin yerleşim konumu | center, top left, 20px 30px |
| 8 | **Linear Gradient** | Düz çizgi boyunca renk geçişi | linear-gradient(red, blue) |
| 9 | **Radial Gradient** | Merkezden dışa renk geçişi | radial-gradient(yellow, green) |
| 10 | **visibility: hidden** | Eleman görünmez ama yeri durur | visibility: hidden; |
| 11 | **display: none** | Eleman görünmez ve yer kaplamaz | display: none; |
| 12 | **Box Shadow** | Elemanlara gölge efekti | box-shadow: 4px 4px 10px rgba(0,0,0,0.5); |
| 13 | **Inset Shadow** | Gölge içe doğru verilir | box-shadow: inset 2px 2px 5px gray; |
| 14 | **Sözde Elemanlar** | HTML’e ek içerik gibi süsleme | ::before, ::after, content: ''; |
| 15 | **SVG (img ile)** | Vektör görsel eklenir, CSS ile rengi değişmez | <img src="icon.svg" alt="İkon"> |
| 16 | **SVG (inline)** | SVG HTML içinde yazılır, CSS ile kontrol edilir | <svg><circle ... /></svg> |
| 17 | **SVG Sprite** | Tek dosyada tüm ikonlar, performans için iyi | <use xlink:href="#icon-car" /> |

---