# HTML’e Giriş – Ders 1 Notları

## **1️⃣ HTML Nedir?**

**HTML (HyperText Markup Language)**, web sayfalarının temel yapısını oluşturan bir işaretleme dilidir. Tarayıcılar, HTML etiketleri sayesinde sayfa içeriğini ve düzenini anlar.

🔎 Kıyaslama:

- **HTML = Yapı**
- **CSS = Görsellik** (renkler, yazı tipi, konumlandırma)
- **JavaScript = Davranış** (etkileşim, hareket, dinamiklik)

---

## **2️⃣ HTML Belge Yapısı**

Her HTML dosyası aşağıdaki temel yapıyı içermelidir:

```
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <title>Benim İlk Sayfam</title>
  </head>
  <body>
    <h1>Merhaba Dünya!</h1>
    <p>Bu benim ilk web sayfam.</p>
  </body>
</html>
```

### **Açıklamalar:**

- <!DOCTYPE html>: Sayfanın HTML5 olduğunu belirtir.
- <html>: Tüm HTML içeriğini saran kök etikettir.
- <head>: Sayfa hakkında bilgi içerir (kullanıcıya görünmez).
- <body>: Sayfanın kullanıcıya görünen kısmıdır.

---

## **3️⃣ VS Code ve Gerekli Eklentiler**

Kod yazmak için en çok kullanılan editörlerden biri: **Visual Studio Code**

🔌 Faydalı Eklentiler:

- **Live Server** → Tarayıcıda canlı önizleme yapar.
- **Prettier** → Kodunuzu otomatik düzenler.
- **HTML/CSS Support** → Otomatik tamamlama ve renk önerisi sağlar.

---

## **4️⃣ Etiketler ve Nitelikler (Tags & Attributes)**

### **📎 Etiketler (Tags):**

HTML’deki tüm yapı taşları “etiketlerle” tanımlanır.

Örnek Etiketler:

- <p> → Paragraf
- <h1> → Başlık
- <img> → Görsel
- <a> → Link

### **⚙️ Nitelikler (Attributes):**

Etiketlerin özelliklerini belirtir.

```
<img src="resim.jpg" alt="Açıklayıcı metin" />
```

- src: Görselin yolu
- alt: Görüntü yüklenmezse gösterilecek metin

---

## **5️⃣ Semantik HTML**

HTML5 ile gelen anlamlı etiketler, sayfanın bölümlerini daha iyi tanımlar:

| **Etiket** | **Anlamı** |
| --- | --- |
| <header> | Sayfanın üst kısmı |
| <main> | Ana içerik bölgesi |
| <footer> | Alt bilgi (telif, iletişim) |
| <section> | Konusal bölüm |
| <article> | Bağımsız içerik (ör. blog yazısı) |

➡️ Arama motorları ve erişilebilirlik araçları için önemlidir.

---

## **6️⃣ Başlık Etiketleri (h1 - h6)**

- <h1>: En önemli ve en büyük başlık. Sayfada **yalnızca bir tane** olmalı.
- <h2>-<h6>: Alt başlıklar. Hiyerarşik yapıyı destekler.

**Örnek:**

```
<h1>Blog Başlığı</h1>
<h2>Giriş</h2>
<h3>Alt Konu</h3>
```

---

## **7️⃣ Paragraf Etiketi – <p>**

Paragraf yazmak için kullanılır. Varsayılan olarak paragraflar arasında boşluk bırakır.

```
<p>Bu ilk paragraf.</p>
<p>Bu ikinci paragraf.</p>
```

---

## **8️⃣ Görsel Ekleme – <img>**

Resim eklemek için kullanılır. **Kapatıcı etiketi yoktur.**

```
<img src="images/logo.jpg" alt="Logo resmi" />
```

- src: Dosya yolu
- alt: Alternatif metin (erişilebilirlik için önemlidir)

---

## **9️⃣ Bağlantı Verme –**

## **<a>**

Bağlantı oluşturmak için kullanılır.

```
<a href="https://google.com" target="_blank">Google'a Git</a>
```

- href: Bağlantının gideceği URL
- target="_blank": Yeni sekmede açılmasını sağlar

---

## **🔟 <section> ve <div>**

### **<section>**

- Anlamlı içerik bölümleri için kullanılır.
- Başlık ve içerik barındırabilir.

### **<div>**

- Anlamsız, genel kapsayıcıdır.
- CSS ile stillendirmek için kullanılır.

**Örnek:**

```
<section>
  <h2>Hakkımda</h2>
  <p>Ben bir geliştiriciyim.</p>
</section>

<div>
  <img src="resim.jpg" alt="açıklama" />
</div>
```

---

## **1️⃣1️⃣ Yorum Satırları**

Kod içerisine açıklama veya not bırakmak için kullanılır. Tarayıcı tarafından göz ardı edilir.

```
<!-- Bu bir yorum satırıdır -->
```

📌 Başkalarıyla çalışırken veya projeyi anlatmak için kullanılır.

---

## **✅ KISA KISA ÖZET (Hafızaya Kazın)**

- 🔸 HTML, bir **programlama dili değil**, işaretleme dilidir.
- 🔸 Tüm HTML içerikleri **etiketlerle** tanımlanır.
- 🔸 Her HTML dosyası <!DOCTYPE html> ile başlamalıdır.
- 🔸 <head>: Sayfa bilgileri – kullanıcı görmez.
- 🔸 <body>: Sayfa içeriği – kullanıcı görür.
- 🔸 <h1> etiketi sadece **bir kez** kullanılmalıdır.
- 🔸 Görsel eklerken **alt** niteliği unutulmamalı.
- 🔸 Semantik etiketler SEO ve erişilebilirlik için önemlidir.
- 🔸 <div> stil içindir, <section> anlam içindir.
- 🔸 <!-- yorum --> satırları kullanıcıya gösterilmez.