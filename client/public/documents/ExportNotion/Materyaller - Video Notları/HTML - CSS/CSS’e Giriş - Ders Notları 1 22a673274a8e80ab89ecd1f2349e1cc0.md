# CSS’e Giriş - Ders Notları 1

---

## **🔹 CSS Nedir?**

- **CSS** (Cascading Style Sheets): HTML öğelerinin görünümünü düzenleyen stil dilidir.
- HTML ile yapıyı kurarız (iskelet), CSS ile bu yapıya stil ve görsellik katarız (renk, yazı tipi, hizalama, boşluk vb.).

---

## **🔹 CSS Kullanım Yöntemleri**

### **1. Inline CSS (Satır içi stil)**

- CSS doğrudan HTML etiketi içinde style özniteliği ile yazılır.
- Örnek:

```
<h1 style="color: blue;">Merhaba CSS</h1>
```

- 
- **Avantaj:** Hızlı ve tekil kullanım için uygundur.
- **Dezavantaj:** Yönetimi zordur, büyük projelerde önerilmez.

---

### **2. Internal CSS (Dahili stil)**

- HTML belgesinin <head> etiketi içine <style> bloğu açılır.
- Tüm sayfa içindeki etiketler burada stil alabilir.
- Örnek:

```
<style>
  h1 {
    color: green;
    font-size: 30px;
  }
</style>
```

- 
- **Avantaj:** Sayfa içinde merkezi stil yönetimi.
- **Dezavantaj:** Yalnızca tek sayfa için geçerlidir.

---

### **3. External CSS (Harici stil)**

- Stil kuralları .css uzantılı ayrı bir dosyaya yazılır.
- HTML belgesine <link> etiketi ile bağlanır.
- Örnek:

```
<link rel="stylesheet" href="style.css">
```

- **style.css**

```
h1 {
  color: red;
}
```

- 
- **Avantaj:** Büyük projelerde en çok tercih edilen yöntemdir. Tüm sayfalarda aynı stil kullanılabilir.

---

## **🔹 CSS Söz Dizimi (Syntax)**

```
seçici {
  özellik: değer;
}
```

- **Seçici (Selector):** Hangi HTML öğesinin etkileneceğini belirtir. (örneğin: h1, .class-ismi, #id)
- **Özellik (Property):** Değiştirilmek istenen CSS özelliği. (örneğin: color, font-size)
- **Değer (Value):** Özelliğin alacağı değer. (örneğin: blue, 24px)

---

## **🔹 CSS Öncelik Kuralları**

1. **Inline CSS** (en yüksek öncelik)
2. **Internal CSS**
3. **External CSS**

> Not: !important kullanıldığında kural en baskın hale gelir, ancak tavsiye edilmez.
> 

---

## **🔹 CSS Seçiciler**

### **1. Etiket (Tag) Seçici**

```
p { color: blue; }
```

### **2. Class Seçici (Birden fazla öğede tekrar kullanılabilir)**

```
<p class="mavi-yazi">Yazı</p>
```

```
.mavi-yazi { color: blue; }
```

### **3. ID Seçici (Sayfada sadece bir kez kullanılır)**

```
<p id="ozel-yazi">Yazı</p>
```

```
#ozel-yazi { color: red; }
```

### **4. Descendant Seçici (Bir öğenin içinde yer alan başka bir öğe)**

```
div p { color: green; }
```

### **5. Child Seçici (>)**

```
div > p { color: red; }
```

> Sadece doğrudan çocuğu olan öğeye uygulanır.
> 

---

## **🔹 Çoklu Class Kullanımı**

Bir HTML öğesine birden fazla class verilebilir:

```
<p class="kirmizi buyuk">Yazı</p>
```

```
.kirmizi { color: red; }
.buyuk { font-size: 30px; }
```

---

## **🔹 CSS Kademeli Stil ve Miras**

- En son tanımlanan stil geçerli olur (kademeli yapı).
- ID > Class > Etiket şeklinde bir öncelik sırası vardır.
- Miras: Bir öğe, ebeveyninden bazı stil özelliklerini miras alabilir.
    
    Örnek:
    

```
body { font-family: Arial; }
```

---

## **🔹 Sözde Sınıflar (Pseudo Classes)**

- Belirli durumlarda geçerli olur.

```
a:hover { color: red; }
input:focus { background-color: yellow; }
li:first-child { font-weight: bold; }
```

---

## **🔹 Aynı Özelliğe Sahip Birden Fazla Class**

Aynı stil kuralı birden fazla class için geçerliyse:

```
.class1, .class2, .class3 {
  font-size: 20px;
}
```

---

## **🔹 Renk Tanımlamaları**

1. **Renk adıyla**: color: red;
2. **Hex kodu**: color: #ff0000;
3. **RGB**: color: rgb(255, 0, 0);
4. **RGBA (şeffaflıkla)**: color: rgba(255, 0, 0, 0.5);

---

## **🔹 Kenarlık (Border) Özelliği**

```
div {
  border: 2px solid blue;
}
```

- Sırasıyla: Kalınlık | Stil (solid, dashed, dotted…) | Renk

---

## **🔹 Display Özelliği**

- block: Tüm satırı kaplar.
- inline: Sadece içerdiği kadar alan kaplar.
- inline-block: Inline gibi davranır ama boyut alabilir.
- none: Görünmez yapar (DOM’da kalır ama görünmezdir).

---

## **🔹 Position Özelliği**

- static: Varsayılan.
- relative: Bulunduğu yere göre konumlanır.
- absolute: En yakın relative ebeveyne göre konumlanır.
- fixed: Ekrana sabitlenir.
- sticky: Belirli bir noktaya kadar scroll ile gider, sonra sabitlenir.

---

## **🔹 Margin ve Padding**

- margin: Dış boşluk
- padding: İç boşluk

Örnek:

```
p {
  margin: 20px;
  padding: 10px;
}
```

---

## **🔹 Font Özellikleri**

- font-family: Yazı tipi
- font-size: Yazı boyutu (px, em, rem)
- font-weight: Kalınlık (normal, bold, 100–900)
- font-style: Italic ya da normal
- line-height: Satır aralığı

---

## **🔹 Background Özellikleri**

- background-color: Arka plan rengi
- background-image: Arka plan resmi

```
body {
  background-image: url("resim.jpg");
  background-size: cover;
  background-position: center;
}
```

---

## **🔹 Width ve Height**

- width: Genişlik
- height: Yükseklik

```
div {
  width: 400px;
  height: 300px;
}
```

---

## **🔹 Transform Özelliği**

- rotate(45deg): Döndürür
- scale(1.5): Büyütür/küçültür
- translateX(50px): X ekseninde kaydırır
- translateY(50px): Y ekseninde kaydırır

```
div {
  transform: rotate(30deg);
}
```

---

## **🔹 CSS Değişkenleri (Custom Properties)**

```
:root {
  --ana-renk: #e91e63;
}

body {
  background-color: var(--ana-renk);
}
```

> Tüm projede aynı rengi değiştirmek kolaylaşır.
> 

---

## **🔹 Reset CSS**

- Tarayıcıların varsayılan CSS stillerini sıfırlar.
- **Normalize CSS** veya **Modern Reset** kullanılır.
- Örnek:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css">
```

---

## **🔹 CSS Framework’leri**

Kullanımı kolaylaştıran hazır CSS kütüphaneleri:

- **Bootstrap**: Bileşen odaklı.
- **Tailwind CSS**: Class odaklı modern framework.

```
<button class="bg-blue-500 text-white px-4 py-2">Buton</button>
```

---