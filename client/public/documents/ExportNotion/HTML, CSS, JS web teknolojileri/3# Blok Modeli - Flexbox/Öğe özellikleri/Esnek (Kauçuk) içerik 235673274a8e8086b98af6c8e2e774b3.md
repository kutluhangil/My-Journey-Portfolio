# Esnek (Kauçuk) içerik

Bu özelliğin kullanıldığı tipik bir durum, sabit genişlikte bir kenar çubuğu ve satırda kalan tüm alanı kaplayan "kauçuk" içeriktir.

`<div class="container">
  <aside class="sidebar">Sidebar</aside>
  <main class="content">Main content</main>
</div>`

Eğer `main` içeriği yeterli büyüklükteyse, sayfa şu şekilde görünebilir: üstte başlık, ardından ana içerik ve sayfanın altında altbilgi.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/76b7e62a-ec06-43b6-b975-7e79b866e496Frame%2048258.png)

Tek yapmanız gereken `main.content` özelliğini `flex-grow: 1` özelliğine ayarlayarak konteynerin satırdaki tüm kullanılabilir alanı kaplamasını sağlamaktır.

- Bunun nasıl uygulandığını görmek için örneğe göz atın.
    
    ![Screen Shot 2025-07-20 at 14.22.46 PM.png](Esnek%20(Kau%C3%A7uk)%20i%C3%A7erik/Screen_Shot_2025-07-20_at_14.22.46_PM.png)
    

### **Problem Nedir?**

HTML yapımız şu şekilde diyelim:

```
<header>Page header</header>
<main>Main content</main>
<footer>Page footer</footer>
```

Eğer main içeriği **kısa** ise (örneğin sadece bir cümle varsa), sayfa şöyle görünür:

```
Page header
Main content
Page footer
-------------------- (boşluk)
```

Yani **footer sayfanın ortasında gibi** görünür çünkü içerik kısa olduğu için tüm sayfa dolmaz.

---

### **Amaç Ne?**

Biz isteriz ki, içerik kısa da olsa **footer her zaman sayfanın en altına yapışık** olsun.

---

### **Çözüm: Flex ve flex-grow kullanmak**

Bunu yapmak için, tüm sayfayı kapsayan yapıya display: flex uygularız ve main öğesine flex-grow: 1 veririz.

---

### **Örnek Kod:**

```
<body>
  <div class="wrapper">
    <header>Page header</header>
    <main>Main content</main>
    <footer>Page footer</footer>
  </div>
</body>
```

```
html, body {
  height: 100%; /* sayfanın tam boyda olması gerekir */
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

main {
  flex-grow: 1;
}
```

---

### **🔍**

### **Ne Oluyor Burada?**

- .wrapper tüm sayfayı kaplar ve flex-container olur.
- flex-direction: column olduğu için öğeler yukarıdan aşağı sıralanır: header → main → footer.
- main’e flex-grow: 1 verince:
    
    ➤ Eğer içerik kısaysa bile main boş alanı doldurur.
    
    ➤ Bu sayede footer hep sayfanın **en altında kalır**.
    

---

### **📌**

### **flex-grow burada ne işe yaradı?**

main alanına, içerik az olduğunda bile, **boş kalan yüksekliği doldurma görevi** verdi.

---

### **🧠 Kısaca Hatırla:**

- flex-grow, dikeyde kalan boşluğu main’e verir.
- Böylece footer’ı aşağıya iter.
- Bu yönteme “**sticky footer**” veya “**pinned footer**” denir.

---