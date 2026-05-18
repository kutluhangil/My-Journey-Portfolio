# Komşu elemanlar

Yapısal sözde sınıflar, ek sınıflar atamadan bir alt öğeler (komşular) koleksiyonundan belirli öğeleri seçmenin bir yoludur.

Alt elemanlar (komşular), ortak bir kapsayıcıya sahip olan elemanlardır.

`<ul class="list">
  <li class="list-item">
    <a class="list-link">Link 1</a>
  </li>
  <li class="list-item">
    <a class="list-link">Link 2</a>
  </li>
  <li class="list-item">
    <a class="list-link">Link 3</a>
  </li>
</ul>`

Yukarıdaki örnekte, `li.list-item` öğeleri komşudur ve bunlara yapısal sözde sınıflar uygulayabilirsiniz.

Ancak, `a.list-link` bağlantıları komşu değildir, çünkü ortak bir kapsayıcıya sahip değillerdir. Bu nedenle, belirli bir bağlantıyı veya bağlantı grubunu seçmek için sözde sınıfları kullanamazsınız.

## **Komşu Elemanlar ve Yapısal Sözde Sınıflar (Structural Pseudo-Classes)**

---

### **🧩 Önce şunu bil:**

- HTML’de bazı etiketler birbirine “**komşu**” olur. Yani **aynı ebeveynin** (aynı kapsayıcının) çocuklarıdır.
- Tıpkı bir **anne-babanın çocukları** gibi. Aynı anne-babadan doğan çocuklar **kardeş** ve **komşudur**.

---

### **👨‍👩‍👧‍👦 Örnek üzerinden açıklayalım:**

```
<ul class="list">
  <li class="list-item">
    <a class="list-link">Link 1</a>
  </li>
  <li class="list-item">
    <a class="list-link">Link 2</a>
  </li>
  <li class="list-item">
    <a class="list-link">Link 3</a>
  </li>
</ul>
```

- Burada li.list-item’lar aynı <ul> etiketinin çocuklarıdır → **komşu elemanlardır** ✅
- Ama içlerindeki <a class="list-link"> etiketleri sadece kendi li içinde yer alır, yani:
    - **Kendi aralarında komşu değildirler!** ❌
    - Çünkü **aynı kapsayıcıları (ebeveynleri) yoktur**.

---

### **🧙 Ne işe yarar bu bilgi?**

CSS’te bazı özel seçiciler var, mesela:

- li + li {} → Bu sadece **bir li’den hemen sonra gelen komşu li**’yi seçer.
- Ama a + a {} bu örnekte çalışmaz çünkü <a>’lar komşu değildir.

---

### **✅ Basitçe hatırla:**

- **Komşu elemanlar**, aynı ebeveyne sahip kardeşlerdir.
- Eğer komşu değillerse, bazı CSS sihirleri (+, ~, :nth-child, vs.) onlara uygulanamaz.

---