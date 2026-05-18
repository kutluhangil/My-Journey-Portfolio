# Bir örneğin nasıl oluşturulacağına dair açıklama

İşaretlememize logolu bir başlık ekleyin ve menüyü logo ile menü bitişik olacak şekilde başlığa yerleştirin.

`<header class="page-header">
  <a href="" class="logo">Logo</a>

  <ul class="menu">
    <li class="item"><a href="" class="link">Hpome page</a></li>
    <li class="item"><a href="" class="link">Blog</a></li>
    <li class="item"><a href="" class="link">Podcasts</a></li>
    <li class="item"><a href="" class="link">Contacts</a></li>
  </ul>
</header>`

- Yapmanız gereken ilk şey logo `a.logo` ve menü `ul.menu` satırına koymak, bunun için `header.page-header` bir flex-container haline getiriyoruz.

`.page-header {
  display: flex;
}`

- Menü (örnekteki tüm stillerle) logodan daha yüksektir. Ancak varsayılan olarak `align-items: stretch` özelliğine sahibiz. Bu, menü ve logonun enine eksenin tüm uzunluğu boyunca dikey olarak gerildiği anlamına gelir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a8e43200-890c-437a-be7b-ec038367f4ceUntitled%20-%202024-04-25T113618.418.png)

Bunu düzeltmek ve logo ile menüyü dikey olarak ortaya hizalamak için değeri `center` olarak ayarlayın.

`.page-header {
  display: flex;
  align-items: center;
}`

- Son adım, `justify-content` seçeneğini `space-between` olarak ayarlayarak logo ve menüyü başlığın köşelerine taşımaktır. Satırda yalnızca iki öğe olduğundan (logo ve menü), bunlar ana eksenin kenarlarına bastırılır ve tüm boş alan bunların arasındadır.

`.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}`

---

### **🔧 1. HTML Yapısı**

```
<header class="page-header">
  <a href="" class="logo">Logo</a>

  <ul class="menu">
    <li class="item"><a href="" class="link">Home page</a></li>
    <li class="item"><a href="" class="link">Blog</a></li>
    <li class="item"><a href="" class="link">Podcasts</a></li>
    <li class="item"><a href="" class="link">Contacts</a></li>
  </ul>
</header>
```

Bu kodda:

- <header> elementi, sayfanın en üst kısmındaki başlığı temsil eder.
- İçerisine bir **logo (a.logo)** ve bir **menü (ul.menu)** yerleştirilmiş.
- Menüde 4 tane bağlantı (li > a) var.

---

### **🎨 2. Flexbox ile Yerleşim**

Şimdi bu iki öğeyi (logo ve menü) yatay olarak yan yana ve düzenli biçimde yerleştirmek için **Flexbox** kullanıyoruz.

### **➤ Adım 1: Header’ı Flex Container yap**

```
.page-header {
  display: flex;
}
```

Bu satır sayesinde <header> artık bir **flex container** oldu. Yani içindeki öğeler (logo ve menü) yatay düzlemde dizilmeye başlar.

---

### **📏 3. Dikey Hizalama (align-items)**

Flexbox’ın varsayılan ayarı align-items: stretch olduğu için, çocuk öğeler (logo ve menü) konteynerin yüksekliğini tamamen kaplar. Bu, logonun dikeyde “ortada” gibi durmamasına neden olur.

Bunu düzeltmek için:

```
.page-header {
  display: flex;
  align-items: center;
}
```

Bu satır sayesinde, logo ve menü **dikeyde ortalanır**.

---

### **↔️ 4. Yatay Boşluk (justify-content)**

Şimdi logo ve menüyü sayfanın iki ucuna yani **biri sola**, **diğeri sağa** göndermek istiyoruz.

Bunu yapmak için justify-content: space-between kullanıyoruz:

```
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

- Bu özellik, logo ve menü arasında kalan tüm boşluğu yayar.
- Logo sola yaslanır, menü sağa yaslanır.
- Aralarında esnek boşluk olur.

---

### **🎯 Sonuç:**

- **Logo** solda
- **Menü** sağda
- **Her ikisi de dikey olarak ortalı**
- **Aralarında boşluk var**

---

### **Özet Görsel:**

```
| Logo                     Menü |
|------------------------------|
|          boşluk              |
```

---

Dilersen bu yapının CSS’ini biraz daha detaylandırabiliriz. Ama şu anda asıl anlatılmak istenen:

Flexbox kullanarak logo ve menüyü, header içinde hem yatayda düzgün bir şekilde dizmek hem de dikeyde ortalamak. Bu da üç temel CSS kuralıyla yapılmış: display: flex, align-items: center, justify-content: space-between.