# Çocuk Seçici (X > Y)

Bir diğer yaygın seçici, sadece bir üst öğenin içindeki doğrudan çocuk öğeyi seçmenizi sağlar.

Çok katmanlı bir mağaza menüsü düzeni örneğinde, çocuk seçicilerin nasıl kullanılacağını görelim. **`menu`** sınıfına sahip bir listedeki **`<li>`** etiketlerini biçimlendirmeniz gerekiyor, ancak **`submenu`** sınıfına sahip olanları değil.

`<ul class="menu">
  <li>
    Bilgisayarlar ve bileşenler
    <ul class="submenu">
      <li>İşlemciler</li>
      <li>Monitörler</li>
      <li>Ekran kartları</li>
    </ul>
  </li>
  <li>
    Ev aletleri
    <ul class="submenu">
      <li>Buzdolapları</li>
      <li>Televizyonlar</li>
      <li>Çamaşır makineleri</li>
    </ul>
  </li>
  <li>
    Ev eşyaları
    <ul class="submenu">
      <li>Koltuklar</li>
      <li>Yataklar</li>
      <li>Elektrikli şömineler</li>
    </ul>
  </li>
</ul>`

Eğer çocuk (bağlam) seçici kullanılırsa, genellikle CSS tüm `<li>` etiketlerine uygulanır ve her birinde kırmızı bir kenarlık olur.

`*/* ❌ Görevi çözmüyor */*.menu li {
  border: 1px solid tomato;
}`

Çocuk seçici, **`<ul class="menu">`** listesinin yalnızca çocukları olan **`<li>`** öğelerini seçerek bu sorunu çözmeye yardımcı olur.

`*/* ✅ Tam olarak ihtiyaç duyulan */*.menu > li {
  border: 1px solid tomato;
}`

```
HTML'de "children (çocuk)" veya "child elements (çocuk elementler)" olarak adlandırılan öğeler, doğrudan "parent (ebeveyn)" öğeye gömülü olan öğelerdir. Gömülü olan 2. ve daha derin seviyedeki öğeler "children (çocuk)" değildir —bunlar "children of children (çocukların çocukları) ", yani "torunlar"dır.
```

CSS’de **> (çocuk seçici)**, sadece **doğrudan bağlı** olan öğeleri hedef almanı sağlar.

Yani:

📌 “Bir öğenin hemen altındaki (ilk seviye) çocukları” seçilir.

📌 Daha derindeki torunlar, yeğenler, kuzenler… seçilmez! 😄

---

### **👨‍👩‍👧‍👦 Gerçek hayat benzetmesiyle anlatayım:**

Diyelim ki ul.menu bir **aile**.

```
<ul class="menu">
  <li>Anne/Baba</li> <!-- bu direkt çocuk -->
  <ul class="submenu">
    <li>Çocukların çocukları (torunlar)</li> <!-- bu torun -->
  </ul>
</ul>
```

Eğer .menu > li dersen, **yalnızca o ailenin kendi çocuğu** olan kişiyi seçiyorsun.

Ama .menu li dersen, **hem kendi çocuklarını hem de torunlarını** seçmiş oluyorsun.

---

### **🔍 Senin örnekle sadeleştirelim:**

### **HTML:**

```
<ul class="menu">
  <li>Bilgisayarlar ve bileşenler
    <ul class="submenu">
      <li>İşlemciler</li>
    </ul>
  </li>
  <li>Ev aletleri
    <ul class="submenu">
      <li>Televizyonlar</li>
    </ul>
  </li>
</ul>
```

### **CSS 1 – Hatalı olan (torunları da seçer):**

```
.menu li {
  border: 1px solid tomato;
}
```

🟥 Bu kural tüm <li> etiketlerini seçer:

- menu içindeki **birinci seviye** <li>’ler
- ve **submenu** içindeki **ikinci seviye** <li>’ler de

---

### **CSS 2 – Doğru olan (sadece ilk seviye çocukları seçer):**

```
.menu > li {
  border: 1px solid tomato;
}
```

🟩 Bu sadece menu’nin **doğrudan** çocukları olan <li>’lere uygular.

Yani:

- ✅ Bilgisayarlar ve bileşenler
- ✅ Ev aletleri
- ❌ İşlemciler, Televizyonlar (submenu içindeki torunlar → **seçilmez**)

---

### **🧠 Kuralı özetle:**

| **Seçici** | **Anlamı** |
| --- | --- |
| .menu li | .menu içindeki **tüm** <li>’leri seçer (çocuk + torun + hepsi) |
| .menu > li | .menu içindeki **yalnızca doğrudan çocuk** <li>’leri seçer |

---

### **💡 Hatırlaman için ipucu:**

> > varsa, “
> 
> 
> **hemen altındaki çocuk**
> 

> “Araya başka element girerse çalışmaz.”
> 

| **Seçici Türü** | **Yazımı** | **Ne Seçer?** |
| --- | --- | --- |
| **Alt seçici** | .parent .child | Her seviyedeki iç içe geçmiş öğeyi (çocuk, torun, vs.) |
| **Çocuk seçici** | .parent > .child | Sadece doğrudan içindeki (birinci seviye) öğeleri |