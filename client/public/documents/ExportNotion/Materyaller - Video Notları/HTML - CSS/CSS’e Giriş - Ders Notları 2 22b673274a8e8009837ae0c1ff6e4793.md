# CSS’e Giriş - Ders Notları 2

---

## **🎨 1. Color Özelliği (Renk Tanımlama)**

Metin rengini belirler. Birkaç farklı biçimde tanımlanabilir:

### **📌 Renk Formatları:**

| **Format** | **Örnek** | **Açıklama** |
| --- | --- | --- |
| İsim | color: red; | CSS’in tanıdığı renk isimleri |
| HEX | color: #ff0000; | #RRGGBB (16’lık sistemde) |
| Kısaltılmış HEX | color: #f00; | Eğer çiftler aynıysa 3 karakterle yazılabilir |
| RGB | color: rgb(255,0,0); | 0–255 arası değerlerle renk tanımı |
| RGBA | color: rgba(255,0,0,0.6); | Ek olarak **alfa (opacity)** değeri belirlenir |

🔸 rgba’daki son değer: 0 (şeffaf) ile 1 (tam opak) arasında olur. Örneğin:

```
color: rgba(255, 0, 0, 0.3); /* %30 görünürlük */
```

---

## **🔠 2. Font Size (Yazı Boyutu)**

Metnin boyutunu tanımlar.

### **✅ Kullanım Biçimleri:**

| **Değer Tipi** | **Örnek** | **Açıklama** |
| --- | --- | --- |
| px | font-size: 20px; | Sabit boyut |
| em | font-size: 1.5em; | Parent öğeye göre (örneğin body) oranlanır |
| rem | font-size: 1.5rem; | Tüm sayfanın kökü (html) baz alınır |
| % | font-size: 150%; | Yüzdelik oran |

🔸 1em = parent elementin font boyutu

🔸 1rem = html elementinin font boyutu

---

## **🧱 3. Font Weight (Yazı Kalınlığı)**

Metnin kalınlığını belirtir.

### **✅ Değerler:**

| **Değer** | **Açıklama** |
| --- | --- |
| normal (400) | Varsayılan |
| bold (700) | Kalın |
| 100–900 arası | İnce–Kalın |

> Her font ailesi tüm değerleri desteklemeyebilir.
> 

```
font-weight: 700; /* Kalın */
font-weight: 300; /* İnce */
```

---

## **⬅️➡️ 4. Text Align (Metin Hizalama)**

Metni yatayda hizalar.

```
text-align: left;     /* Sola hizalar */
text-align: center;   /* Ortalar */
text-align: right;    /* Sağa hizalar */
text-align: justify;  /* Sağa ve sola eşit boşluk */
```

---

## **📏 5. Line Height (Satır Aralığı)**

Satır aralığını belirler. Sayısal ya da oransal verilebilir.

```
line-height: 1.5;     /* Font boyutunun 1.5 katı */
line-height: 30px;    /* Sabit aralık */
```

> Genellikle okunabilirlik için 1.2–1.6 arasında kullanılır.
> 

---

## **📎 6. Text Decoration (Metin Süsleme)**

Metin altı/üstü çizgi gibi efektler ekler veya kaldırır.

```
text-decoration: none;        /* Alt çizgi kaldırılır */
text-decoration: underline;   /* Altı çizilir */
text-decoration: line-through;/* Üstü çizilir */
```

Ek özellikler:

```
text-decoration-color: red;
text-decoration-style: dotted;
text-underline-offset: 5px; /* Alt çizgiyi metinden uzaklaştırır */
```

---

## **🆎 7. Font Family (Yazı Tipi)**

Yazı tipi ailesini belirler.

```
font-family: Arial, Helvetica, sans-serif;
```

- İlk font sistemde yoksa sıradaki kullanılır.
- Genellikle body etiketine verilir ki tüm içerik etkilenir.
- Tüm sayfada aynı font kullanılacaksa, miras (inheritance) sayesinde sadece body’ye tanımlamak yeterlidir.

---

## **🌐 8. Google Fonts Kullanımı**

### **🔗 Link ile Dahil Etme:**

```
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

### **🔧 CSS Kullanımı:**

```
body {
  font-family: 'Roboto', sans-serif;
}
```

### **💡 Import ile Dahil Etme:**

```
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
```

- link: HTML head içinde yer alır.
- @import: CSS dosyasının en üstüne eklenir.

---

## **🖋 Font Family Özeti Tablosu:**

| **Terim** | **Açıklama** |
| --- | --- |
| Arial | Sistem fontu, sans-serif ailesindendir |
| Roboto | Google Fonts’ta popüler bir yazı tipi |
| sans-serif | Kuyruksuz yazı tipleri ailesi |
| serif | Kuyruklu yazı tipleri ailesi |
| monospace | Tüm karakterlerin aynı genişlikte olduğu font ailesi |
| cursive | El yazısı tarzı yazı tipleri |

---

## **✏️ 9. Letter Spacing (Harf Boşluğu)**

```
letter-spacing: 2px;   /* Harf araları açılır */
letter-spacing: -1px;  /* Harfler iç içe girer */
```

---

## **📚 10. Word Spacing (Kelime Boşluğu)**

```
word-spacing: 5px;     /* Kelimeler arası mesafe */
```

---

## **🆙 11. Text Transform (Büyük/Küçük Harf)**

```
text-transform: uppercase;   /* Tamamen büyük harf */
text-transform: lowercase;   /* Tamamen küçük harf */
text-transform: capitalize;  /* Her kelimenin ilk harfi büyük */
```

---

## **🖱️ 12. Cursor (İmleç Türü)**

```
cursor: pointer;    /* El simgesi */
cursor: crosshair;  /* Artı işareti */
```

---

## **📐 13. Vertical Align**

Satır içindeki öğeleri dikeyde hizalamak için kullanılır. Özellikle inline veya inline-block öğelerde etkilidir.

```
vertical-align: middle;
```

---

## **📦 14. Overflow: hidden**

Taşan içeriği gizlemek için kullanılır.

```
overflow: hidden;
```

---

## **⭕ 15. Border Radius**

Kenarları yuvarlatmak için kullanılır.

```
border-radius: 10px;     /* Köşeleri yuvarlar */
border-radius: 50%;      /* Tam daire oluşturur */
```

---

## **🧽 16. Reset / Normalize CSS**

Tarayıcıların varsayılan CSS’lerini sıfırlar.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css">
```

> Her CSS’in başına eklenir. Projenin daha tutarlı görünmesini sağlar.
> 

---

## **📝 17. CSS Yorum Satırı**

```
/* Bu bir CSS yorumudur */
```

Kodu açıklamak ve okunabilirliği artırmak için kullanılır.

---

## **🚫 18. !important Kullanımı**

Bir CSS kuralına öncelik vermek için kullanılır ama önerilmez.

```
color: red !important;
```

> ❗ Aşırı ve bilinçsiz kullanım stil çatışmalarına neden olur.
> 

---

## **📁 19. @font-face ile Lokal Font**

Bilgisayardaki bir fontu projeye dahil etmek için kullanılır.

```
@font-face {
  font-family: 'MyFont';
  src: url('fonts/MyFont.woff2') format('woff2');
}
```

---

---

### **✅CSS 2. Ders – Özellikler Tablosu (Özet)**

| **#** | **Özellik** | **Açıklama** | **Örnek Kod** |
| --- | --- | --- | --- |
| 1 | color | Metin rengini belirler. | color: red;color: #ff0000;color: rgba(255,0,0,0.5); |
| 2 | font-size | Metin boyutunu ayarlar. | font-size: 16px;font-size: 1.5em; |
| 3 | font-weight | Yazı kalınlığını ayarlar. | font-weight: bold;font-weight: 700; |
| 4 | text-align | Metni yatayda hizalar. | text-align: center; |
| 5 | line-height | Satır yüksekliğini belirler. | line-height: 1.5;line-height: 30px; |
| 6 | text-decoration | Alt/üst çizgi veya üstü çizili stil verir. | text-decoration: underline;text-decoration: none; |
| 7 | font-family | Yazı tipi ailesini belirler. | font-family: Arial, sans-serif; |
| 8 | Google Fonts | Google’dan özel yazı tipi ekleme yöntemi. | <link> ya da @import ile projeye dahil edilir. |
| 9 | letter-spacing | Harfler arası boşluğu ayarlar. | letter-spacing: 2px; |
| 10 | word-spacing | Kelimeler arası boşluğu ayarlar. | word-spacing: 10px; |
| 11 | text-transform | Metni büyük, küçük ya da baş harf büyük yapar. | text-transform: uppercase; |
| 12 | cursor | Fare imlecinin şeklini değiştirir. | cursor: pointer;cursor: crosshair; |
| 13 | vertical-align | Inline öğeleri dikeyde hizalar. | vertical-align: middle; |
| 14 | overflow | Taşan içeriği gizler veya taşır. | overflow: hidden; |
| 15 | border-radius | Köşeleri yuvarlatır. | border-radius: 10px;border-radius: 50%; |
| 16 | Normalize.css | Tarayıcı varsayılan stillerini sıfırlar. | <link rel="stylesheet" href="modern-normalize.min.css"> |
| 17 | CSS Yorum Satırı | Kodun içine açıklama ekler, çalışmaz. | /* Bu bir yorumdur */ |
| 18 | !important | CSS kuralına zorla öncelik verir. Tavsiye edilmez. | color: red !important; |
| 19 | @font-face | Bilgisayardaki özel fontu projeye dahil eder. | @font-face { font-family: 'X'; src: url('x.woff2'); } |

---