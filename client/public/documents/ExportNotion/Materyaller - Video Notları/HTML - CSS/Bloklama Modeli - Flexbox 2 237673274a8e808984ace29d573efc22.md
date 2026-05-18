# Bloklama Modeli - Flexbox 2

---

## **🧱 Bloklama Modeli (Display Özellikleri)**

### **display: block**

- Öğeler tüm satırı kaplar. Alt alta sıralanır.
- Örnek: <div>, <p>

### **display: inline**

- Sadece içerik kadar yer kaplar, yan yana gelir.
- Örnek: <span>, <a>

### **display: inline-block**

- İçerik kadar yer kaplar ama width ve height verilebilir.

---

## **display: flex Nedir?**

Flexbox, bir kapsayıcı (container) içindeki öğeleri esnek ve düzenli bir şekilde hizalamaya yarar.

### **Neden kullanılır?**

Eskiden margin, padding, float gibi karmaşık yapılarla hizalama yapılırdı. Flex ile çok daha az kodla düzenli ve esnek tasarımlar yapılabilir.

---

## **🔄 Flexbox’ın Temel Terimleri**

### **🧺 Flex Container**

- display: flex uygulanan ebeveyn öğe.
- İçindeki çocuklara (child) esneklik sağlar.

### **🧱 Flex Items**

- Flex container içindeki öğelerdir.
- Flexbox kurallarından etkilenir.

---

## **↔️ Eksenler (Axis Kavramı)**

### **Main Axis (Ana Eksen)**

- Varsayılan: Yatay (soldan sağa)
- flex-direction: row

### **Cross Axis (Çapraz Eksen)**

- Varsayılan: Dikey (yukarıdan aşağı)
- flex-direction değişirse bu da yön değiştirir.

---

## **flex-direction Özelliği**

Yön belirleme:

| **Değer** | **Anlamı** |
| --- | --- |
| row | Soldan sağa (varsayılan) |
| row-reverse | Sağdan sola |
| column | Yukarıdan aşağı |
| column-reverse | Aşağıdan yukarı |

🧪 Örnek:

```
.kapsayici {
  display: flex;
  flex-direction: row;
}
```

---

## **justify-content (Main Axis hizalama)**

Ana eksen (yani yatay/dikey duruma göre) üzerinde hizalama yapar.

| **Değer** | **Açıklama** |
| --- | --- |
| flex-start | Başa hizalar |
| flex-end | Sona hizalar |
| center | Ortalar |
| space-between | İlk ve son öğeyi kenarlara yaslar, diğerleri eşit |
| space-around | Tüm öğelerin etrafına eşit boşluk koyar |
| space-evenly | Her boşluğu eşit yapar |

---

## **align-items (Cross Axis hizalama)**

Çapraz eksende hizalama yapar.

| **Değer** | **Açıklama** |
| --- | --- |
| stretch | (Varsayılan) Yüksekliği doldurur |
| flex-start | Üste hizalar |
| flex-end | Alta hizalar |
| center | Ortalar |
| baseline | Yazı taban çizgisine göre hizalar |

---

## **gap Özelliği**

- Flex öğeleri arasındaki boşluğu ayarlamak için kullanılır.
- margin ya da padding vermeye gerek kalmaz.

🧪 Örnek:

```
.kapsayici {
  display: flex;
  gap: 20px;
}
```

---

## **flex-wrap (Taşma kontrolü)**

Flex öğeleri sığmazsa ne yapılacağını belirler.

| **Değer** | **Açıklama** |
| --- | --- |
| nowrap | (Varsayılan) Taşarsa dışarı taşar |
| wrap | Yeni satıra geçer |
| wrap-reverse | Aşağıdan yukarıya doğru sarar |

---

## **flex-flow**

- Kısa yazım biçimi: flex-direction + flex-wrap

🧪 Örnek:

```
.kapsayici {
  display: flex;
  flex-flow: row wrap;
}
```

---

## **flex: 1 Ne İşe Yarar?**

- Flex item’ların kapsayıcıyı eşit bölmesini sağlar.
- Yani 3 öğe varsa her biri kapsayıcının %33’ünü kaplar.

🧪 Örnek:

```
.kapsayici > div {
  flex: 1;
}
```

Aynı anda şunları ayarlar:

- flex-grow: 1;
- flex-shrink: 1;
- flex-basis: 0;

---

## **flex: 1 ve justify-content: space-around farkı**

| **Özellik** | **Etkisi** |
| --- | --- |
| flex: 1 | Öğelerin genişliği eşit olur |
| space-around | Öğelerin arası eşit boşlukla ayrılır |

---

## **display: grid Nedir? Flex’e göre farkı ne?**

- Daha karmaşık düzenler için kullanılır (satır + sütun).
- Flex daha esnek ve hızlıdır.
- Grid’de sütun/satır sayısını açıkça belirtirsin.

🧪 Örnek:

```
.kapsayici {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

---

## **Özetle**

| **Özellik** | **Açıklama** |
| --- | --- |
| display: flex | Öğeleri yatay ya da dikey hizalar |
| justify-content | Ana eksende hizalama |
| align-items | Çapraz eksende hizalama |
| gap | Öğeler arasındaki boşluk |
| flex-wrap | Öğeleri birden fazla satıra yayar |
| flex: 1 | Öğelerin eşit yer kaplamasını sağlar |

---