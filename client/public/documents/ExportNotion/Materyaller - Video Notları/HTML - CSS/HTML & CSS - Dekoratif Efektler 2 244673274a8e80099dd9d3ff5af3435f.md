# HTML & CSS - Dekoratif Efektler 2

**position Özelliği**

Bir elementin sayfa üzerindeki konumunu belirler. Değerleri:

---

### **static (varsayılan)**

- Her HTML elementi varsayılan olarak static konumludur.
- top, left, right, bottom gibi konumlandırma özellikleri geçerli değildir.

```
div {
  position: static;
  top: 20px; /* İşe yaramaz! */
}
```

---

### **relative**

- Element normal akışta kalır.
- top, left, right, bottom ile konumu kaydırılabilir.
- Diğer öğeler, hâlâ onun orijinal konumunu referans alır.

```
div {
  position: relative;
  top: 20px;
  left: 10px;
}
```

📌 En çok kullanılan konumlandırma türüdür. Genellikle kapsayıcı (parent) elementlere uygulanır.

---

### **absolute**

- Belge akışından çıkar, bulunduğu en yakın relative, absolute, fixed veya sticky parent’a göre konumlanır.
- Eğer böyle bir parent yoksa body’ye göre konumlanır.

```
<div style="position: relative;">
  <span style="position: absolute; top: 10px; left: 20px;">A</span>
</div>
```

📌 Eğer parent position: static olursa, absolute element body’e göre konumlanır. Mutlaka parent’ı relative yap!

---

### **fixed**

- Sayfa kaydırılsa bile element sabit kalır.
- viewporta (ekran görünüm alanına) göre konumlanır.

```
div {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
```

📌 Canlı destek, WhatsApp butonları gibi sayfanın sağ alt köşesinde sabit kalan öğeler için kullanılır.

---

### **sticky**

- Normal akışta kalır, belli bir noktaya gelince sabitlenir.
- top, left, right, bottom gibi değerlerle sınır noktası verilir.

```
div {
  position: sticky;
  top: 0;
}
```

📌 Menü çubukları gibi scroll edildiğinde en üstte sabit kalan elemanlar için kullanılır.

---

### **🪜**

### **z-index**

### **Özelliği**

Elementlerin üst üste gelme sırasını (katman sırasını) belirler. Sadece position değeri relative, absolute, fixed veya sticky olan öğelerde geçerlidir.

```
div {
  position: absolute;
  z-index: 2;
}
```

📌 Büyük sayı daha üstte gösterilir.

**Örnek:**

```
<div style="position: absolute; z-index: 1;">Kırmızı</div>
<div style="position: absolute; z-index: 2;">Mavi</div>
<div style="position: absolute; z-index: 0;">Yeşil</div>
```

---

### **transition Özelliği**

CSS özellikleri değiştiğinde bu değişim aniden değil, yumuşak şekilde gerçekleşir.

### **✅ Kısa Kullanım:**

```
div {
  transition: all 0.5s ease-in-out;
}
```

**Açıklama:**

- all: Tüm geçiş yapılabilir özellikleri kapsar.
- 0.5s: Süre
- ease-in-out: Başlangıçta yavaş, ortada hızlı, sonra yine yavaş geçiş

**Hover Örneği:**

```
div {
  background-color: red;
  transition: background-color 0.5s ease-in-out;
}

div:hover {
  background-color: blue;
}
```

---

### **transition-property, transition-duration, transition-timing-function , transition-delay**

**Parçalı Kullanım:**

```
div {
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: ease;
  transition-delay: 0.5s;
}
```

| **Özellik** | **Görev** |
| --- | --- |
| transition-property | Hangi CSS özelliğinde geçiş yapılacak |
| transition-duration | Geçiş süresi (saniye veya milisaniye) |
| transition-timing-function | Geçiş animasyon tipi (ease, linear, ease-in, ease-out…) |
| transition-delay | Geçiş başlamadan önce ne kadar bekleyecek |

---

### **transform Özelliği**

Bir elementin dönüşmesini, büyümesini/küçülmesini veya yer değiştirmesini sağlar.

| **Fonksiyon** | **Açıklama** | **Örnek** |
| --- | --- | --- |
| rotate() | Elementi döndürür | transform: rotate(30deg); |
| scale() | Büyütür/küçültür | transform: scale(1.2); |
| translate() | Yer değiştirir | transform: translateX(20px); |

**Animasyonla Birleştirme:**

```
div {
  transition: transform 0.5s;
}

div:hover {
  transform: rotate(30deg);
}
```

---

## **📌 Genel Uygulama Tavsiyesi:**

- absolute kullanacaksan parent’ı relative yapmayı unutma.
- z-index kullanırken her elementin position özelliği olduğuna emin ol.
- transition ve transform birlikte kullanarak animasyonlu hover efektleri oluştur.
- sticky kullanıyorsan mutlaka top veya benzeri bir offset değeri ver.

---