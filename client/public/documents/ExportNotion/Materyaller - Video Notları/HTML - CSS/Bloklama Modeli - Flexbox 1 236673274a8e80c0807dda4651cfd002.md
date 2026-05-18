# Bloklama Modeli - Flexbox 1

# **FLEXBOX ÖNCESİ ÖNEMLİ CSS KAVRAMLARI**

---

## **1. Display: Block, Inline, Inline-Block**

**Display nedir?**

Sayfadaki öğelerin nasıl sıralanacağını belirler.

- block: Yeni satırdan başlar, tüm satırı kaplar.
    
    Örnek: <div>, <p>
    
- inline: Aynı satırda kalır, sadece içerik kadar yer kaplar.
    
    Örnek: <span>, <a>
    
- inline-block: Inline gibi yan yana durur ama width ve height alabilir.

📌 **Not**: Menü gibi öğelerde inline-block tercih edilir.

### **🧪 Örnek:**

```
<div style="display: block; background: yellow;">Ben block'um</div>
<span style="display: inline; background: pink;">Ben inline'ım</span>
<span style="display: inline-block; width: 100px; height: 50px; background: lightblue;">Ben inline-block'um</span>
```

---

## **2. box-sizing: content-box vs border-box**

**Neyi etkiler?**

width ve height ölçüsünün neleri kapsayacağını belirler.

- content-box (varsayılan): Sadece içerik ölçülür.
- border-box: İçerik + padding + border birlikte ölçülür.

📌 **Neden önemli?**

Tasarımda kutuların taşmaması ve tam hesaplama için border-box tercih edilir.

### **🧪 Örnek:**

```
<div style="box-sizing: content-box; width: 200px; padding: 20px; border: 5px solid red;">
  content-box → Toplam genişlik: 250px
</div>

<div style="box-sizing: border-box; width: 200px; padding: 20px; border: 5px solid green;">
  border-box → Toplam genişlik: 200px
</div>
```

---

## **3. White space (Boşluk) Problemi**

**Ne olur?**

Yan yana duran inline-block öğelerin arasında boşluk olur.

**Çözüm:**

Kapsayıcıya font-size: 0 verilir, boşluklar gider.

### **🧪 Örnek:**

```
<style>
  .kutu { display: inline-block; width: 100px; height: 100px; background: orange; }
  .container { font-size: 0; }
</style>
<div class="container">
  <div class="kutu"></div><div class="kutu"></div>
</div>
```

---

## **✅**

## **4. min-width ve max-width**

**Küçük/büyük ekran uyumu (Responsive)** için kullanılır.

- min-width: Daha da küçülemez.
- max-width: Daha da büyüyemez.

### **🧪 Örnek:**

```
<div style="background: lightgray; min-width: 300px; max-width: 600px;">
  Ekran 300'den küçük olamaz, 600'den büyük olamaz.
</div>
```

---

## **5. overflow: hidden, scroll, auto**

**Ne işe yarar?**

Kutu içeriği dışarı taşarsa ne yapılacağını söyler.

- hidden: Taşanı gizler.
- scroll: Her zaman scroll çubuğu gösterir.
- auto: Sadece içerik taşarsa scroll gösterir.

### **🧪 Örnek:**

```
<div style="width: 200px; height: 100px; overflow: auto; border: 1px solid black;">
  Çok fazla yazı var burada. Çok fazla yazı var burada. Çok fazla yazı var burada.
</div>
```

---

## **6. padding, margin, border: shorthand kullanımı**

**Sıralama:**

**Üst, Sağ, Alt, Sol** (Saat yönü gibi)

- 1 değer → Her kenar aynı
- 2 değer → Üst/alt ve sağ/sol
- 4 değer → Üst, Sağ, Alt, Sol sırasıyla

### **🧪 Örnek:**

```
<div style="padding: 10px 20px 30px 40px; border: 2px solid blue;">
  padding → Üst:10, Sağ:20, Alt:30, Sol:40
</div>
```

---

## **7. margin collapse (üst üste binen margin)**

Alt alta gelen iki öğede, margin-top ve margin-bottom çakışırsa:

- **Toplam olmaz**
- En büyük değer geçerli olur

### **🧪 Örnek:**

```
<div style="margin-bottom: 30px; background: lightblue;">Üst kutu</div>
<div style="margin-top: 50px; background: lightgreen;">Alt kutu</div>
<!-- Aradaki boşluk: 50px olur -->
```

---

## **8. Block öğeleri ortalama (Yatayda)**

**Nasıl yapılır?**

```
margin: 0 auto;
```

Bu sayede sağdan ve soldan eşit boşluk bırakılarak öğe ortalanır.

### **🧪 Örnek:**

```
<div style="width: 200px; margin: 0 auto; background: pink;">
  Ortada duran bir kutuyum!
</div>
```

---

## **9. Görsel kutu boyutlandırma (Visual Box Model)**

**Bir kutunun toplam boyutu =**

İçerik + Padding + Border + Margin

Bu özellikler birlikte görsel olarak kutuyu oluşturur.

### **🧪 Örnek:**

```
<div style="width: 200px; padding: 10px; border: 5px solid black; margin: 20px;">
  Kutu yapısı: içerik + padding + border + margin
</div>
```

---

## **10. Border ve Border-radius (Çerçeve & Yuvarlama)**

- border: Kenarlık çizer
- border-radius: Köşeleri yuvarlar
    - 50% → Tam daire
    - 4px → Hafif yumuşak köşe

### **🧪 Örnek:**

```
<div style="width: 100px; height: 100px; background: red; border-radius: 50%;">
  Ben bir yuvarlağım 🥯
</div>
```

---