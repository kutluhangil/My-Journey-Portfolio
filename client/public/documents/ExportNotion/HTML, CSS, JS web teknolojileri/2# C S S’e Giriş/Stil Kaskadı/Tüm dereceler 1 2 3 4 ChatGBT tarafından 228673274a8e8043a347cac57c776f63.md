# Tüm dereceler 1 2 3 4 ChatGBT tarafından

**Özgüllük Nedir? Basitçe Tekrar**

CSS’te bir öğeye birden fazla kural uygulanabilir.

Eğer bu kurallar **aynı özelliği** (mesela color) tanımlıyorsa, **tarayıcı hangisini uygulayacağına özgüllüğe bakarak karar verir**.

Bu, adeta bir puan sistemidir:

```
Özgüllük 4 basamaklı gibi düşünülür: (a, b, c, d)
a = inline stil (style="")
b = id seçicisi (#id)
c = class, attribute, pseudo-class (.class, [type], :hover)
d = eleman adı, pseudo-element (div, p, h1, ::before)
```

---

## **🔢 4. Derece Seçiciler (En zayıf olanlar)**

Bu grup şunlardır:

- **Etiket türü seçiciler:** p, h1, div, ul, a gibi
- **Sözde öğe seçiciler:** ::before, ::after (ileride detaylı öğreneceksin)

> 🧮 Her biri d basamağına
> 
> 
> **1 puan**
> 

> Yani p {} → özgüllük:
> 
> 
> **(0, 0, 0, 1)**
> 

### **Örnek:**

```
p {
  color: green;
}

section > p {
  color: orange;
}
```

- p {} → özgüllük: **(0, 0, 0, 1)**
- section > p {} → **iki tane etiket kullanılmış** → **(0, 0, 0, 2)**

🔶 Sonuç: orange uygulanır çünkü 0002 > 0001

---

## **🧮 3. Derece Seçiciler (Biraz daha güçlü)**

Bu grup şunları içerir:

- .class-name → sınıf seçiciler
- [type="text"] → nitelik seçiciler
- :hover, :active gibi sözde sınıf seçiciler

> Her biri c basamağına
> 
> 
> **1 puan**
> 

### **Örnek:**

```
.post-title {
  color: green; /* 0010 */
}

.post > .post-title {
  color: orange; /* 0020 */
}
```

- .post-title → 1 class → **(0, 0, 1, 0)**
- .post > .post-title → 2 class → **(0, 0, 2, 0)**

🔶 Sonuç: orange uygulanır.

---

## **🧮 2. Derece Seçiciler (Daha güçlü)**

Bu grup sadece **id seçicileridir: #id**

> Her biri b basamağına
> 
> 
> **1 puan**
> 

### **Örnek:**

```
.post-title {
  color: green; /* 0010 */
}

#title {
  color: orange; /* 0100 */
}
```

🔶 Sonuç: orange çünkü ID seçicisi daha güçlüdür.

---

## **🧮 1. Derece Seçiciler (En güçlü)**

Bu grup yalnızca **inline CSS** içindir.

Yani HTML etiketi içine doğrudan yazılan stil.

```
<p style="color: green;">Text</p>
```

> Bu tür stiller a basamağına
> 
> 
> **1 puan**
> 
> **(1, 0, 0, 0)**
> 

🔶 Tarayıcıda hiçbir normal CSS bu stili geçersiz kılamaz (ancak !important hariç).

---

## **💥 Çakışma Olursa Ne Olur?**

Eğer iki kuralın **özgüllük puanı aynıysa**, o zaman **en son yazılan kural uygulanır.**

Yani tarayıcı son kurala öncelik verir.

---

## **🎯 Uygulamalı Soru Yanıtı (Kod örneği):**

```
a {
  color: green;          /* 0001 */
}

.post-link {
  color: orange;         /* 0010 */
}

a.post-link {
  color: blue;           /* 0011 */
}

.post > .post-link {
  color: red;            /* 0020 */
}

.post > a.post-link {
  color: brown;          /* ✅ 0021 */
}
```

🔶 En yüksek özgüllük: **0021** → uygulanacak renk: **brown**

---

## **✅ Özgüllük Hesaplama Pratiği**

Soru: Aşağıdakilerden hangisinin özgüllüğü 0021?

- ol > li.features → ol + li + .features = **0021** ✅
- header > nav → 2 etiket = **0002**
- .main > p.benefits → .main, p, .benefits = **0012**

Cevap: **ol > li.features**

---

## **🤯 Kafa Karıştıysa Son Özet:**

| **Seçici Türü** | **Sembol** | **Katkısı** | **Özgüllük Katmanı** |
| --- | --- | --- | --- |
| Inline style | style=”” | +1 | a (en güçlü) |
| ID seçici | #id | +1 | b |
| Class, [attr], :hover | .class | +1 | c |
| Etiket, ::before | p, h1 | +1 | d (en zayıf) |

---

İstersen bir oyunlaştırma yapabiliriz: Ben birkaç seçici yazarım, sen özgüllüklerini bulursun. Eğlenceli ve öğretici olur! Hazırsan başlayalım mı? 😄