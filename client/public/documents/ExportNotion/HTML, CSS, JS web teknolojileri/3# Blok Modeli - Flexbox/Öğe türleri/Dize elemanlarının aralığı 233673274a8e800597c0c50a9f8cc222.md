# Dize elemanlarının aralığı

Dize (inline) ve satır içi blok (inline-block) öğeleri arasında bir sağ kenar boşluğu bulunur. Bu boşluk, `margin` veya `padding` değil, kelimenin tam anlamıyla boş bir alandır ve tarayıcının satır içeriğini düzenleme şeklinin bir özelliğidir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f8b6a6f1-7863-4fc0-8da7-6cc85bce61b7Frame%2048031%20%283%29.png)

Bu boşluğun büyüklüğü şu şekilde belirlenir:

- En yakın üst öğenin tanımlı yazı tipi boyutu

Veya

- Üst öğe yoksa, tarayıcının varsayılan yazı tipi boyutu kullanılır (`16px`).

Bu nedenle, butonlar, bağlantılar, resimler, açıklıklar ve diğer satır içi öğeler varsayılan olarak en yakın üst öğenin yazı tipi boyutunun 1/4'ü olan 4px boşluğa sahip olacaktır.

- Satır içi öğelerin nasıl düzenlendiğini görün.
- Ayarları keşfetmek için **CSS** sekmesine tıklayın.

Canlı örnekte, **body** öğesini 32px olarak ayarladık, bu nedenle satır öğeleri arasında 8px mesafe var - mevcut yazı tipi boyutunun 1/4'ü.

---

### **🌐 Ne anlatıyor?**

HTML’de bazı öğeler (örneğin <a>, <span>, <img>, <button> gibi inline ya da inline-block olanlar), yan yana geldiklerinde **arada boşluk bırakıyormuş gibi görünür**.

Bu boşluk:

- **CSS’te margin veya padding ile verilmiş bir boşluk değil**,
- **Tarayıcının satır içeriğini (inline content) yerleştirirken otomatik olarak koyduğu bir boşluk**.

---

### **📐 Boşluk Nasıl Belirleniyor?**

Bu boşluğun genişliği, genellikle:

- En yakın **üst öğenin yazı tipi boyutunun dörtte biri (1/4)** kadar oluyor.
- Eğer üst öğede yazı tipi tanımlı değilse, tarayıcı genelde **varsayılan 16px** üzerinden hesap yapıyor.
    - Yani 16px / 4 = **4px boşluk** olur.

---

### **📌 Neden Önemli?**

Bu durum, özellikle:

- Yan yana butonlar
- Menü öğeleri
- Yan yana resimler
    
    gibi tasarımlarda **istenmeyen boşluklar** oluşmasına sebep olur.
    

---

### **🔧 Nasıl Önlenir?**

Bu boşluğu ortadan kaldırmak için bazı yaygın yöntemler:

1. **HTML’deki satır sonlarını temizlemek** (örneğin <button></button><button></button> şeklinde bitişik yazmak)
2. **font-size: 0** vererek üst öğenin yazı tipi etkisini sıfırlamak ve çocuk öğelere kendi font-size’ını vermek.
3. **Flexbox veya Grid kullanmak** (tarayıcının bu boşluğu uygulamadığı düzen sistemleri).Harika! Aşağıda, dize (inline) ve satır içi blok (inline-block) öğeler arasındaki **görünmeyen boşluk problemi** için hem örnek hem çözüm sundum:

---

---

### **🔧**

### **Örnek Sorunlu Durum**

```
<div>
  <button>Kaydet</button>
  <button>Sil</button>
</div>
```

### **🔍 Ne Olur?**

İki buton **yan yana gelir** ama **aralarında 4px kadar boşluk** olur. Sebebi, HTML’de satır sonu (veya boşluk karakteri) tarayıcı tarafından **gerçek bir boşluk gibi algılanmasıdır** — çünkü bu öğeler inline-block olarak işlenir.

Tarayıcı, <button> ve <button> arasında bir **boşluk karakteri (newline, space)** olduğunu varsayar ve bu boşluk, **üst öğenin yazı tipi boyutunun 1/4’ü kadar** olur. Genellikle bu da 4px’dir (16px / 4).

---

### **✅ Çözüm 1: HTML öğelerini bitişik yazmak**

```
<div>
  <button>Kaydet</button><button>Sil</button>
</div>
```

👆 Böylece araya hiç boşluk karakteri girmez, 4px boşluk görünmez.

---

### **✅ Çözüm 2: font-size: 0 kullanmak**

```
<style>
  .wrapper {
    font-size: 0;
  }
  .wrapper button {
    font-size: 16px;
  }
</style>

<div class="wrapper">
  <button>Kaydet</button>
  <button>Sil</button>
</div>
```

👆 Burada wrapper adlı üst div’e font-size: 0 veriyoruz. Böylece **tarayıcı boşluğu hesaplayacak bir yazı tipi boyutu bulamaz**, yani boşluk sıfır olur. Butonlara kendi font-size’larını tekrar veriyoruz.

---

### **✅ Çözüm 3: Flexbox kullanmak (modern yaklaşım)**

```
<style>
  .wrapper {
    display: flex;
    gap: 0;
  }
</style>

<div class="wrapper">
  <button>Kaydet</button>
  <button>Sil</button>
</div>
```

👆 Flexbox yapısında **inline boşluklar geçerli olmaz**, bu nedenle 4px gibi boşluklar oluşmaz. Daha esnektir, aynı zamanda gap ile kontrollü boşluk eklemek de çok kolay olur.

---

### **🧠 Özet**

- Görünmeyen 4px boşluk, tarayıcının inline öğeleri yerleştirirken yazı tipi boyutunu referans almasıyla ilgilidir.
- Bunu çözmek için boşluk karakterlerinden kaçınabilir, font-size: 0 tekniğini kullanabilir ya da modern olarak Flexbox/Grid’e geçebilirsin.