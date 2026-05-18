# Belge nesne modeli

[**Tarayıcıda JavaScript**](Belge%20nesne%20modeli/Taray%C4%B1c%C4%B1da%20JavaScript%202d4673274a8e80ebac05dc24ef5afc50.md)

[**HTML belgesi ve DOM**](Belge%20nesne%20modeli/HTML%20belgesi%20ve%20DOM%202d4673274a8e80a38f6dd56c7d01cad1.md)

**AI TARAFINDAN**

**JavaScript tarayıcıda çalışırken sadece “dil” değildir; HTML sayfasını ve tarayıcıyı kontrol edebilmek için DOM ve BOM adlı iki ek sisteme sahiptir.**

---

## **🧠 Büyük resim (mantık)**

Tarayıcıda çalışan JavaScript **3 şeyle birlikte çalışır**:

### **1️⃣ ECMAScript (JS’nin kendisi)**

Bu **JavaScript’in kurallarıdır**:

- Değişkenler
- Fonksiyonlar
- Döngüler
- Array, Object, Date vs.

👉 **Tek başına ECMAScript HTML’yi değiştiremez.**

---

### **2️⃣ DOM (Document Object Model)**

DOM şunu sağlar:

👉 **JavaScript, HTML’i görebilsin ve değiştirebilsin diye vardır.**

- HTML → **JavaScript nesnelerine çevrilir**
- Her etiket → bir **nesne**
- Bu nesneler → **ağaç yapısı** halinde tutulur

Örnek:

```
<body>
  <h1>Merhaba</h1>
  <p>Yazı</p>
</body>
```

DOM’da bu şuna dönüşür:

```
document
 └── html
     └── body
         ├── h1
         │   └── "Merhaba"
         └── p
             └── "Yazı"
```

👉 İşte bu yüzden:

```
document.querySelector("h1").textContent = "Selam";
```

çalışır.

---

### **3️⃣ BOM (Browser Object Model)**

BOM, **sayfa değil tarayıcı ile ilgilenir**.

BOM sayesinde:

- Sayfanın adresini alırsın (location)
- Geçmişte gezersin (history)
- Ekran boyutunu öğrenirsin (window)
- Alert, confirm açarsın

Örnek:

```
alert("Merhaba");
console.log(window.innerWidth);
```

---

## **🌳 DOM neden “ağaç” olarak anlatılıyor?**

Çünkü HTML:

- İç içe yazılır
- Her etiketin **tek bir ebeveyni** vardır

Bu yüzden DOM:

- **Parent → Child** ilişkisi tutar
- Hiyerarşik (ağaç) yapıdadır

👉 Bu yapı sayesinde:

- Yukarı çıkabilirsin
- Aşağı inebilirsin
- Kardeş elementlere ulaşabilirsin

---

## **🏗️ DOM ağacı nasıl oluşur?**

Metnin anlattığı kritik süreç:

1. Tarayıcı HTML dosyasını alır
2. **HTML parser** (ayrıştırıcı) çalışır
3. HTML satır satır okunur
4. Her etiket → DOM düğümüne çevrilir
5. Ağaç yavaş yavaş oluşturulur

⚠️ Bu yüzden:

```
document.querySelector("h1");
```

HTML yüklenmeden önce çalıştırılırsa **null** dönebilir.

---

## **🧩 Metnin asıl vermek istediği mesaj**

Bu metin sana şunu öğretmek istiyor:

> JavaScript, HTML ve tarayıcıyı kontrol edebilmek için DOM ve BOM’u kullanır.
> 

> HTML, tarayıcıda “canlı” bir nesne ağacına (DOM) dönüştürülür.
> 

> JavaScript bu ağacı okuyabilir, değiştirebilir ve kullanıcı etkileşimlerine tepki verebilir.
> 

---

## **🧒 ELI5 (5 yaşındaki çocuğa anlatır gibi)**

- HTML = Lego parçaları
- DOM = Legoların kurulmuş hali
- JavaScript = Legolarla oynayan çocuk
- BOM = Odanın ışığı, kapısı, penceresi

👉 JavaScript:

- Legoyu (DOM) söker, takar
- Odayı (tarayıcıyı) kontrol eder

---

## **✨ Tek cümlelik ezber**

**DOM, JavaScript’in HTML ile konuşma yoludur.**

**BOM, JavaScript’in tarayıcı ile konuşma yoludur.**

**ECMAScript ise JavaScript’in dilbilgisidir.**

İstersen bir sonraki adımda:

- DOM seçicileri (querySelector)
- DOM node türleri
- DOM ile event (click vs.)
    
    konularını da **çok net ve sade** anlatabilirim 👌
    

[**DOM Ağacı Yapısı**](Belge%20nesne%20modeli/DOM%20A%C4%9Fac%C4%B1%20Yap%C4%B1s%C4%B1%202d4673274a8e8051a2b0f1bf1ad9b84d.md)

[**Öğelerin Aranması**](Belge%20nesne%20modeli/%C3%96%C4%9Felerin%20Aranmas%C4%B1%202d4673274a8e806baae7e6e98da30cad.md)

[**DOM Navigasyonu**](Belge%20nesne%20modeli/DOM%20Navigasyonu%202d4673274a8e808ca0c9ccf73ad4aa10.md)