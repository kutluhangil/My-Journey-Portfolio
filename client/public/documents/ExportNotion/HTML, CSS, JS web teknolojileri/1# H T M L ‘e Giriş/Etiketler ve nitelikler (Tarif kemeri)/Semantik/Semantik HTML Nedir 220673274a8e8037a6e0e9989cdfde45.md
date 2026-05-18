# Semantik HTML Nedir?

### 

**Semantik HTML**, tarayıcıya ve geliştiricilere **içeriğin ne anlama geldiğini anlatan** HTML etiketlerini kullanmaktır. Yani sadece nasıl görüneceğini değil, **ne olduğunu** da belirtmiş olursun.

---

### **🧱**

### **Semantik HTML Etiketlerine Örnekler**

| **Etiket** | **Ne işe yarar?** |
| --- | --- |
| <header> | Sayfanın ya da bölümün başlığıdır. Genelde logo, menü gibi şeyler içerir. |
| <nav> | Navigasyon (menü) alanıdır. Linkler burada yer alır. |
| <main> | Sayfadaki asıl, ana içerik buraya yazılır. |
| <section> | Sayfanın konuyla ilgili bir bölümüdür. |
| <article> | Bağımsız ve tekrar kullanılabilir içerik. (örneğin blog yazısı) |
| <aside> | Kenar içeriği (örneğin reklamlar, yan notlar) |
| <footer> | Sayfanın veya bölümün alt kısmı. (örneğin iletişim, telif hakkı) |
| <h1>-<h6> | Başlık etiketleridir. Anlam sırasına göre kullanılır. |
| <figure> & <figcaption> | Görsel ve onun açıklaması için kullanılır. |

---

### **🎯**

### **Neden Semantik HTML Kullanmalıyız?**

✅ **Erişilebilirlik (Accessibility):** Ekran okuyucular içerikleri daha kolay anlar.

✅ **SEO (Arama Motoru Optimizasyonu):** Google gibi arama motorları neyin ne olduğunu daha iyi anlar.

✅ **Kodun okunabilirliği artar:** Başka bir geliştirici kodu daha kolay okur ve anlar.

✅ **Bakımı kolay olur:** Yapı belli olduğunda düzenleme yapmak da kolay olur.

---

### **🧠 Örnek Karşılaştırma**

### **❌ Anlamsız HTML:**

```
<div id="header">
  <div id="menu">...</div>
</div>
<div id="content">...</div>
<div id="footer">...</div>
```

### **✅ Semantik HTML:**

```
<header>
  <nav>...</nav>
</header>
<main>
  <section>...</section>
</main>
<footer>
  ...
</footer>
```

---

İşte bu yüzden **semantik HTML**, web sayfalarının “sadece görsel değil, anlamlı” olmasını sağlar.

İstersen seninle alıştırmalar da yapabiliriz.