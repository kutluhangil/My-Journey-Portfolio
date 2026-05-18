# Homework 1 - HTML

# HTML Ödev Kabul Kriterleri Kontrol Listesi

## Proje Kriterleri

- [x]  **`«A1»`** HTML dosyası `index.html` olarak adlandırılmalıdır.
- [x]  **`«A2»`** Proje kök dizininde `images` adında sayfa için gerekli resimleri içeren bir klasör bulunmalıdır.
- [x]  **`«A3»`** Dosya adları büyük harf, Kiril karakteri, boşluk veya harf çevirisi içermemelidir. İsimler yalnızca İngilizce harfler ve kelimelerden oluşmalıdır.
- [x]  **`«A4»`** Kaynak kodu `Prettier` kullanılarak biçimlendirilmiş olmalıdır.
- [x]  **`«A5»`** Tüm görseller ve metin içeriği figmadan alınmalıdır.
- [x]  **`«A6»`** Tüm bitmap görseller, sıkıştırma ve optimize işlemi için [squoosh](https://squoosh.app/) kullanılarak optimize edilmelidir.
- [x]  **`«A7»`** Kod [**yönergeler**](https://codeguide.co/) takip edilerek yazılmalıdır.

## İşaretleme Kriterleri

- [x]  **`«B1»`** İşaretleme `index.html` dosyasına yazılmalıdır.
- [x]  **`«B2»`** Düzenin tüm elemanlarının HTML etiketleri ile işaretlemesi yapılmalıdır.
- [x]  **`«B3»`** Etiketler semantik içeriklerine göre kullanılmalıdır.
- [x]  **`«B4»`** HTML [**validator**](http://validator.w3.org/nu/) tarafından hatasız olarak kontrol edilmelidir.
- [x]  **`«B5»`** Biçimlendirme, sayfanın ana yapısını vurgulamak için etiketler içermelidir: `&lt;header&gt;`, `&lt;main&gt;` і `&lt;footer&gt;`.
- [x]  **`«B6»`** Üstbilgi ve altbilgideki logo bir resim değil, metin içeren bir bağlantı olmalıdır.
- [x]  **`«B7»`** `&lt;nav&gt;` etiketi sayfada bir kez kullanılmalıdır (Başlık bölümünde sadece).
- [x]  **`«B8»`** Başlıktaki kişiler (e-posta ve telefon) `&lt;nav&gt;` etiketinin dışında yer almalıdır.
- [x]  **`«B9»`** `&lt;h1&gt;` etiketi sayfada bir kez kullanılmalıdır.
- [x]  **`«B10»`** `Order Service` metnine sahip öğe `type="button"` olan bir buton olmalıdır.
- [x]  **`«B11»`** Bölüm başlıkları `&lt;h2&gt;` etiketi ile işaretlenmelidir.
- [x]  **`«B12»`** `&lt;img&gt;` etiketlerinde width niteliği bulunmalıdır (width niteliği: resim genişliğini belirten HTML özniteliği).
- [x]  **`«B13»`** `&lt;img&gt;` etiketleri, resimde neyin tasvir edildiğine dair kısa bir açıklama ile doldurulan bir `alt` niteliğine sahip olmalıdır. Açıklama, metin içeriğinin geri kalanıyla aynı dilde olmalıdır.
- [x]  **`«B14»`** Resimler figmadan `jpg` formatında dışa aktarılmalıdır.
- [x]  **`«B15»`** Benzer öğelerden oluşan gruplar `&lt;ul&gt;` listelerinde toplanmalıdır.

---

Yapılmak istenilen Ödev:

![Main Page.jpg](Homework%201%20-%20HTML/Main_Page.jpg)

## **🔍 KODUNUN ANALİZİ – MADDE MADDE**

### **✅ «B1» index.html içinde yazıldı → UYGUN**

---

### **✅ «B2» Tüm yapılar HTML etiketleriyle işaretlenmiş → UYGUN**

---

### **⚠️ «B3» Etiketler semantik olmalı**

**Sorun:**

- <h2> etiketi ekip üyelerinin adları için kullanılmış. Ama bu başlıklar sayfa bölümü değil, içerik başlığı. **Burada <h3> kullanılmalı.**

**Neden?**

- <h2> yalnızca ana bölüm başlıkları için kullanılmalı.
- <h3> → <h2> altındaki içerik başlığıdır (örneğin “Mark Guerrero”).

---

### **⚠️ «B4» Validator hatası oluşur**

**Hatalar:**

- <img> etiketi kapatılmamış (örneğin Camila Garcia satırı)
- <h2>Camila Garcia</> etiketi yanlış ve eksik kapatılmış
- <header> etiketi **iki kez açılmış**, biri en dışta gereksiz şekilde <body> dışına taşmış

---

### **✅ «B5» <header>, <main>, <footer> etiketleri kullanılmış → UYGUN**

---

### **✅ «B6» Logo bir bağlantı ve resim değil → UYGUN**

---

### **✅ «B7» <nav> etiketi yalnızca bir kez, header içinde kullanılmış → UYGUN**

---

### **✅ «B8» E-posta ve telefon nav dışına <address> ile yazılmış → UYGUN**

---

### **⚠️ «B9» <h1> etiketi iki kez kullanılmış**

**Nerede hata var:**

- Hem üstte “WEBSTUDIO” başlığına <h1> kullanılmış
- Hem ortada “Effective Solutions…” başlığına

**Çözüm:**

- WEBSTUDIO zaten bir logo bağlantısı, **başlık olmamalı**
- h1 → yalnızca “Effective Solutions…” metni için kullanılmalı

---

### **✅ «B10» Order Service butonu type="button" ile doğru yazılmış → UYGUN**

---

### **✅ «B11» Tüm bölüm başlıkları <h2> ile işaretlenmiş → UYGUN**

---

### **⚠️ «B12» Tüm <img> etiketlerinde width var → UYGUN**

Ama:

- Bazılarında **etiket düzgün kapanmamış**, bu validator’da sorun yaratır

---

### **⚠️ «B13» Alt metinler doğru → UYGUN**

Ama hatalı <img> etiketi olduğu için **geçerli sayılmaz**

---

### **⚠️ «B14» Resimler .png uzantılı → Figma’dan .jpg formatında çıkarılmalı**

---

### **⚠️ «B15» Ekip üyeleri <ul> içinde ama <h2> ve <p> etiketleri <li> dışına yazılmış**

**Doğrusu:**

Her üye <li> içinde aşağıdaki gibi yapılandırılmalı:

```
<li>
  <img src="..." width="..." alt="...">
  <h3>Ad Soyad</h3>
  <p>Unvan</p>
</li>
```

---

## **✅ DOĞRU VE TEMİZ HALİ (TÜM KURALLARA UYGUN)**

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebStudio</title>
</head>
<body>
  <header>
    <a href="#">WEBSTUDIO</a>
    <nav>
      <ul>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </nav>
    <address>
      <ul>
        <li><a href="mailto:info@devstudio.com">info@devstudio.com</a></li>
        <li><a href="tel:+110001111111">+11 (000) 111-11-11</a></li>
      </ul>
    </address>
  </header>

  <main>
    <section>
      <h1>Effective Solutions for Your Business</h1>
      <button type="button">Order Service</button>
    </section>

    <section>
      <h2>Strategy</h2>
      <p>Our goal is to identify the business problem to walk away with the perfect and creative solution.</p>

      <h2>Punctuality</h2>
      <p>Bring the key message to the brand's audience for the best price within the shortest possible time.</p>

      <h2>Diligence</h2>
      <p>Research and confirm brands with the strongest digital growth opportunities and minimize risk.</p>

      <h2>Technologies</h2>
      <p>Design practice focused on digital experiences. We bring forth a deep passion for problem-solving.</p>
    </section>

    <section>
      <h2>Our Team</h2>
      <ul>
        <li>
          <img src="images/team-card-1.jpg" width="270" alt="Mark Guerrero - Product Designer">
          <h3>Mark Guerrero</h3>
          <p>Product Designer</p>
        </li>
        <li>
          <img src="images/team-card-2.jpg" width="270" alt="Tom Ford - Frontend Developer">
          <h3>Tom Ford</h3>
          <p>Frontend Developer</p>
        </li>
        <li>
          <img src="images/team-card-3.jpg" width="270" alt="Camila Garcia - Marketing">
          <h3>Camila Garcia</h3>
          <p>Marketing</p>
        </li>
        <li>
          <img src="images/team-card-4.jpg" width="270" alt="Daniel Wilson - UI Designer">
          <h3>Daniel Wilson</h3>
          <p>UI Designer</p>
        </li>
      </ul>
    </section>
  </main>

  <footer>
    <a href="#">WEBSTUDIO</a>
    <p>Increase the flow of customers and sales for your business with digital marketing & growth solutions.</p>
  </footer>
</body>
</html>
```

---

## **✅ Validator’dan Hatasız Geçmesi İçin:**

- Tüm <img> etiketleri düzgün kapanmalı
- Tüm alt, width ve src alanları eksiksiz olmalı
- .jpg uzantılı görseller kullanılmalı

---