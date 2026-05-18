# HTML’e Giriş – Ders 2 Notları

---

### **1. Listeleme Etiketleri (Lists)**

HTML’de iki ana listeleme etiketi vardır:

### **Sırasız Liste (Unordered List)**

- Etiket: <ul> (unordered list)
- Alt eleman: <li> (list item)
- Kullanım: Nokta, çizgi gibi işaretlerle maddeler sırasız şekilde listelenir.

**Örnek:**

```
<ul>
  <li>Merhaba</li>
  <li>Merhaba 2</li>
</ul>
```

### **Sıralı Liste (Ordered List)**

- Etiket: <ol> (ordered list)
- Alt eleman: <li>
- Kullanım: 1, 2, 3 ya da A, B, C şeklinde sıralı listeler oluşturur.

**Örnek:**

```
<ol>
  <li>Armut</li>
  <li>Elma</li>
</ol>
```

---

### **2. Kullanımı Azalan Etiketler (Deprecated Tags)**

HTML5 ile birlikte bazı etiketlerin kullanımı azalmıştır. Bunun yerine CSS veya daha semantik etiketler tercih edilir.

| **Eski Etiket** | **Yeni Alternatif** | **Açıklama** |
| --- | --- | --- |
| <center> | CSS: text-align: center | Yatay ortalamak için |
| <strike> | CSS: text-decoration: line-through veya <del> | Üzeri çizili metin |
| <b> | <strong> | Kalın yazı |
| <i> | <em> | İtalik yazı |
| <u> | CSS: text-decoration: underline | Altı çizili |

---

### **3. <table> (Tablo Oluşturma)**

- Satır: <tr>
- Hücre: <td>
- Çerçeve: border özelliği ile görünür hale getirilir.

**Örnek:**

```
<table border="1">
  <tr>
    <td>Ad</td>
    <td>Soyad</td>
  </tr>
  <tr>
    <td>Aziz</td>
    <td>Kaymaz</td>
  </tr>
</table>
```

Günümüzde daha çok CSS ile flex, grid kullanımı tercih edilir ama e-posta şablonlarında table halen yaygındır.

---

### **4. <iframe> (Sayfa İçi Sayfa Gömme)**

- Başka bir sitenin içeriğini (örneğin Google Maps veya YouTube) gömmek için kullanılır.
- Güvenlik sebebiyle kullanımı kısıtlanmıştır.

**Örnek:**

```
<iframe src="https://example.com" width="600" height="400"></iframe>
```

---

### **5. HTML5 Semantik Etiketler**

| **Etiket** | **Açıklama** |
| --- | --- |
| <header> | Sayfanın üst kısmı, genelde logo ve menü içerir |
| <nav> | Navigasyon menüsü (linkler) |
| <section> | Anlamlı içerik bölümleri |
| <main> | Sayfanın asıl içeriği |
| <aside> | Yan içerikler (örneğin kenar çubuğu) |
| <footer> | Sayfanın alt bilgileri (iletişim, telif, sosyal medya) |

📌 Bu etiketler sayfanın yapısını arama motorlarına ve ekran okuyuculara daha iyi anlatmak için kullanılır.

---

### **6. <form> ve <input> (Formlar) <form>**

- Kullanıcıdan veri almak ve sunucuya göndermek için kullanılır.
- İçerisine input, textarea, select, button gibi elemanlar yerleştirilir.

**Form Mantığı:** Form = A4 kağıdı, Input = O kağıttaki alanlar

**Örnek:**

```
<form action="/submit" method="post">
  <input type="text" placeholder="Adınız">
  <textarea></textarea>
  <button type="submit">Gönder</button>
</form>
```

### **<input>**

### **Tipleri:**

- text: Metin girişi
- email, password
- radio, checkbox
- submit, button

---

### **🎯 7. Örnek HTML İskeleti**

```
<body>
  <header>
    <div>
      <p>Subscribe</p>
      <nav>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </nav>
    </div>
    <div>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <img src="search.png" alt="Search">
      <img src="menu.png" alt="Menu">
    </div>
  </header>

  <main>
    <section>
      <h1>Interior Design</h1>
      <nav>
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
        </ul>
      </nav>
    </section>
  </main>

  <footer>
    <p>Tüm hakları saklıdır - Aziz Kaymaz</p>
  </footer>
</body>
```

---