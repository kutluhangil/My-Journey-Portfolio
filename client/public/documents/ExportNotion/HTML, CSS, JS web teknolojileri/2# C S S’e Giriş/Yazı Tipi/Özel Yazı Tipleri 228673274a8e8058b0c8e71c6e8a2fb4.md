# Özel Yazı Tipleri

Yazı tipi, bir web sitesini benzersiz kılmaya yardımcı olur. Aynı Times New Roman yazı tipine sahip milyonlarca web sitesi muhtemelen çok sıkıcı olacaktır. Bu nedenle tasarımcılar kendi yazı tiplerini oluşturur ve geliştiriciler bunları projelerde kullanabilir.

```
Yazı tipleriücretli veücretsiz yazı tipleri olarak ikiye ayrılır. Ücretli bir yazı tipini kullanmak için lisans satın almanız gerekir ve lisans olmadan bir yazı tipini kullanmak telif hakkı ihlaline yol açabilir. Kamu malı olan birçok güzel ücretsiz yazı tipi vardır.

```

[**Google Fonts](https://fonts.google.com/) —** birçok ücretsiz yazı tipi içeren bir depodur. Tek yapmanız gereken:

- Beğendiğiniz bir yazı tipi bulmak;
- Yazı tipinin bağlantısını almak.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/abdf2bef-64c6-4f30-b41d-7655ab045f29Untitled%20-%202024-03-31T224513.499.png)

- Bu bağlantıyı HTML dosyanıza eklemek.

Aşağıdaki HTML kodunu biçimlendirme dosyanıza yapıştırın ve sayfayı tarayıcınızda açın.

`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<link href="<https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap>" rel="stylesheet" />
		<link href="./css/styles.css" rel="stylesheet" />
		<title>Document title</title>
	</head>
	<body>
		<h1>Making the Web Beautiful!</h1>
	</body>
	</html>`

Ardından, bu kodu CSS dosyanıza ekleyin:

`body {
	font-family: 'Tangerine', cursive;
}`

Özel bir yazı tipinde görüntülenen metnin görünüm dışında hiçbir farkı yoktur, bu nedenle onu tasarlamak için herhangi bir CSS özelliğini kullanabilirsiniz.

Chat GBT tarafından:

### **Neden özel yazı tipi kullanılır?**

- Web sitesinin **görsel olarak öne çıkmasını** sağlar.
- Aynı yazı tiplerini kullanan siteler **tekdüze** görünür.
- **Tasarım özgünlüğü** sağlar.

### **📂 Yazı tipi türleri:**

- **Ücretli:** Lisans gerektirir. İzinsiz kullanmak **telif hakkı ihlali** olur.
- **Ücretsiz:** Kamu malı veya açık lisanslıdır.
    
    (🔹 *Google Fonts* en popüler ücretsiz font kaynağıdır.)
    

### **🛠️ Google Fonts nasıl kullanılır?**

1. Beğendiğin fontu [https://fonts.google.com](https://fonts.google.com/) üzerinden seç.
2. HTML dosyasının <head> kısmına link olarak ekle:

```
<link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap" rel="stylesheet" />
```

1. CSS dosyanda font-family olarak kullan:

```
body {
  font-family: 'Tangerine', cursive;
}
```

### **❗ Önemli not:**

- Özel yazı tipleri sadece **görsel fark** yaratır. Fonksiyonel olarak farkı yoktur.
- Font ile birlikte diğer tüm CSS özellikleri de normal şekilde kullanılabilir.

---

### **🎯 Sınav Sorusu Özetleri**

**❓ Neden standart olmayan fontlar kullanılır?**

✅ Sayfanın kalabalıktan sıyrılmasını sağlamak için.

**❓ Hangi dosyalar değiştirilir?**

✅ **HTML dosyası + CSS dosyası** (ikisi de)

---

`head` etiketi iki yazı tipi içerir: `Poppins`, bu belgenin ana yazı tipi, ve "Oswald", başlıkların yazı tipi olacaktır. `body` etiketi için `font-family`değerini Poppins, sans-serif olarak değiştirin ve tüm başlıkları "Oswald", `sans-serif\` olarak ayarlayın. Mevcut CSS kurallarını kullanın.

- Stil sayfasında `body` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `body` seçicisine sahip CSS kuralının `"Poppins", sans-serif`değerinin `font-family` özelliği olmalıdır.
- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `font-family` özelliği `"Oswald", sans-serif` değerine sahip olmalıdır.
- Stil sayfasında `.section-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.section-title` seçicisine sahip CSS kuralının `font-family`özelliği `"Oswald", sans-serif` değerine sahip olmalıdır.
- Stil sayfasında `.club-list .title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .title` seçicisine sahip CSS kuralının `font-family`özelliği `"Oswald", sans-serif` değerine sahip olmalıdır.
    
    ![Screen Shot 2025-07-07 at 00.18.55 AM.png](%C3%96zel%20Yaz%C4%B1%20Tipleri/Screen_Shot_2025-07-07_at_00.18.55_AM.png)