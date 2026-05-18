# Navigasyon: <nav> etiketi

Navigasyon, aşağıdaki bağlantıların sıralanmamış bir listesidir:

- site çok sayfalıysa web sitesinin diğer sayfaları,
- Site tek bir sayfaysa, geçerli sayfanın bölümlerine.

Ana navigasyon menüsü, tasarıma bağlı olarak logo ve diğer bloklarla birlikte başlıkta yer alır.

`<header>
	<a href="">Website logo</a>

	<ul>
	  <li><a href="">First link</a></li>
	  <li><a href="">Second link</a></li>
	  <li><a href="">Third link</a></li>
	</ul>
</header>`

Bir web sayfasının ana navigasyon menüsünü vurgulamak için `<nav>` (navigasyon) semantik etiketini kullanırsınız. Bu etiket, diğer sayfalara ya da geçerli sayfanın ayrı bölümlerine bağlantılar içeren ana navigasyonun bir bölümünü tanımlar. `<nav>` etiketi, belgedeki herhangi bir bağlantı grubu için değil, yalnızca ana navigasyon için kullanılır.

`<header>
	<a href="">Website logo</a>

	<nav>
		<ul>
		  <li><a href="">First link</a></li>
		  <li><a href="">Second link</a></li>
		  <li><a href="">THird link</a></li>
		</ul>
	</nav>
</header>`

---

### **🔹 1.**

### **Ne işe yarar?**

<nav> etiketi, **navigasyon (gezinme) bağlantılarını** tanımlamak için kullanılır. Kullanıcının sayfada veya sitede kolayca gezinebilmesi için oluşturulan menüler bu etiketin içine yerleştirilir.

---

### **🔹 2.**

### **Neleri içine alır?**

Genellikle şu öğeler <nav> içine konur:

- Ana menü bağlantıları
- Kategori listeleri
- Alt sayfa bağlantıları
- Breadcrumb (kırıntı) linkleri
    
    💡 En yaygın içerik: <ul> + <li> + <a> kullanımıdır.
    

---

### **🔹 3.**

### **Nereye yerleştirilir?**

- En sık <header> içinde görülür (ana menü).
- Ama aynı zamanda <footer>, <aside> veya sayfanın herhangi bir bölümünde kullanılabilir.
- Sayfada **birden fazla** <nav> etiketi olabilir (örneğin bir üst menü, bir de alt menü).

---

### **🔹 4.**

### **Semantik HTML açısından önemi**

<nav> etiketi **arama motorları (Google)** ve **ekran okuyucular** için sayfanın yapısını anlamada yardımcı olur. Bu, erişilebilirlik (accessibility) ve SEO açısından önemlidir.

---

### **🔹 5.**

### **Kullanım örneği**

```
<nav>
  <ul>
    <li><a href="/">Ana Sayfa</a></li>
    <li><a href="/urunler">Ürünler</a></li>
    <li><a href="/iletisim">İletişim</a></li>
  </ul>
</nav>
```

---

İpucu: <nav> sadece **gerçekten önemli** gezinme bağlantıları için kullanılmalıdır. Sayfa içi küçük linkler veya alt açıklamalar için gerekmez.

Ana gezinme menüsünü logodan sonra, bağlantıları olan üç öğeden oluşan sırasız bir liste şeklinde üstbilgiye ekleyin. Şimdilik `href` niteliğinin değerini boş bırakın ve yalnızca bağlantıların metnini ekleyin.

```
Bağlantı metni 1: Our Clubs
Bağlantı metni 2: PF Benefits
Bağlantı metni 3: Tips and Programs

```

- Başlığın içinde `<nav>` etiketi bulunmalıdır.
- `<nav>` etiketi bir liste içermelidir.
- Liste üç öğeden oluşmalıdır.
- Listedeki her öğenin bir bağlantısı bulunmalıdır.
- İlk bağlantının metni `Our Clubs` şeklinde olmalıdır.
- İkinci bağlantının metni `PF Benefits` şeklinde olmalıdır.
- Üçüncü bağlantının metni `Tips and Programs` şeklinde olmaldıır.

![Screen Shot 2025-06-27 at 21.48.48 PM.png](Navigasyon%20nav%20etiketi/Screen_Shot_2025-06-27_at_21.48.48_PM.png)