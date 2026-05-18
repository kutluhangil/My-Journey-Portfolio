# ::before ::after sözde elemanları

Pseudo-elemanlar, işaretlemede ek boş etiketler oluşturmadan dekoratif efektler eklemek için kullanılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8ff9cd51-9db9-44e6-95c5-4a85112547c2Frame%2048370.png)

- `::before` — öğenin tüm içeriğinden **önce** (başlangıçta) bir sözde eleman oluşturur.
- `::after` — öğenin tüm içeriğinden **sonra** (sonunda) bir sözde öğe oluşturur.

`.box {
  */* eleman stilleri */*
}

.box::before {
  */* before sözde elemanının stilleri */*
}

.box::after {
  */* after sözde elemanının stilleri */*
}`

```
Varsayılan olarak — sözde elemanlar dize elemanlarıdır. Bir sözde öğe için dikey bir geometri ayarlamak için, türünü blok veya çizgi blok olarak değiştirmeniz gerekir.
```

### **::before ve ::after**

### **Pseudo (Sözde) Elemanlar**

Haydi düşünelim: Bir kutun var (<div class="box"> gibi düşün). Bu kutunun **önüne** veya **arkasına** süsler eklemek istiyorsun. Ama kutunun HTML’ine dokunmadan! İşte burada **pseudo-elemanlar** devreye giriyor.

---

### **🎨 Ne işe yarar?**

Bunlar **görsel süslemeler** için kullanılır. Mesela:

- Kutunun önüne küçük bir nokta koymak
- Bir yazının başına tırnak işareti eklemek
- Butonun sonuna bir ok sembolü koymak

Ama bu süsleri **HTML’e yeni etiket eklemeden** yaparız. Çünkü sadece CSS ile halledilir. İşte bunun için ::before ve ::after kullanılır.

---

### **🧱 Nasıl çalışır?**

CSS, kutunun başına ve sonuna **hayali kutular** yerleştirir.

```
.box::before {
  content: "★"; /* Yıldız simgesi gibi bir şey */
}
```

Bu kod, .box isimli kutunun **başına** bir yıldız ekler (HTML’e dokunmadan!).

Aynı şekilde:

```
.box::after {
  content: "✓"; /* Onay işareti gibi bir şey */
}
```

Bu da kutunun **sonuna** bir işaret koyar.

> Ama unutma: ::before ve ::after
> 
> 
> **görünür hale gelmek için content özelliğini**
> 

---

### **⚠️ Küçük Not:**

Bu sözde öğeler, **varsayılan olarak inline’dır**, yani satırın içinde davranır. Ama eğer onlara yükseklik, genişlik gibi kutusal özellikler vermek istiyorsan display: block; ya da display: inline-block; yapman gerekir.

---

### **🧠 Ne zaman işine yarar?**

- Yazıya tırnak işareti eklemek (alıntılar için)
- Liste başına özel bir ikon koymak
- Butonun sağına küçük bir ok eklemek
- Kartların üstüne “Yeni” etiketi yapıştırmak
- CSS ile konuşma balonları, etiketler yapmak

---

### **💡 Örnek:**

```
<p class="quote">Hayat kısa, kuşlar uçuyor.</p>
```

```
.quote::before {
  content: "“";
  color: gray;
}

.quote::after {
  content: "”";
  color: gray;
}
```

Bu kod sayesinde paragraf şöyle görünür:

> “Hayat kısa, kuşlar uçuyor.”
> 

---

Harika bir noktaya değindin! Evet, **tırnak işaretini doğrudan HTML’de yazmak mümkün**:

```
<p>“Hayat kısa, kuşlar uçuyor.”</p>
```

Ama ::before ve ::after kullanmanın **farklı ve önemli avantajları** var. Sana neden gerek duyulduğunu açıklayayım:

---

### **🎯 Neden ::before v ::after Kullanayım ki?**

### **1. Aynı görünümü otomatik olarak her yerde sağlamak**

Diyelim ki sitede onlarca alıntı var. Her birine " " yazmak yerine, CSS ile **tek seferde** her alıntıya tırnak işareti ekleyebilirsin:

```
.quote::before {
  content: "“";
}
.quote::after {
  content: "”";
}
```

> ✅ Böylece tüm alıntılar aynı biçimde görünür. Tek tek yazmana gerek kalmaz.
> 

---

### **2. Tasarımcıların işine yarar**

Grafik tasarımcı tırnakları daha büyük, renksiz, gri veya farklı fontla isterse, HTML’i değiştirmeden sadece CSS’le bunu yaparsın.

```
.quote::before,
.quote::after {
  font-size: 2rem;
  color: lightgray;
}
```

---

### **3. Kodun temiz kalır (HTML sade olur)**

İçeriğe değil, **tasarıma** ait bir şey eklemek istiyorsan bunu CSS’te yaparsın. Çünkü HTML içerik içindir, CSS görünüm içindir. Bu da temiz ve düzenli kod demek.

---

### **4. Süsleme yaparken HTML’i bozmamak**

Tırnak işareti basit bir örnek. Ama daha karmaşık süslemeler de olabilir:

- ✅ Sol üst köşeye “Yeni!” etiketi
- ✅ Kartın köşesine bir ikon
- ✅ Görselin altına açıklama

Bunların hepsini ::before ve ::after ile HTML’e dokunmadan yapabilirsin.

---

### **📌 Özetle:**

> Eğer süsleme yapıyorsan ve bu süsleme gerçek içeriğin bir parçası değilse, bunu ::before ve ::after ile yapmak
> 
> 
> **daha doğrudur ve daha esnektir.**
>