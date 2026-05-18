# HTML & CSS - Formlar ve Veri Görselleştirme 1

**Ders Notu: HTML Formlar ve Erişilebilirlik**

---

### **1. Formların Amacı**

- **Formlar**, kullanıcıdan veri toplamak için kullanılır.
- Toplanan veriler:
    - Veritabanına kaydedilebilir.
    - Farklı bir sunucuya gönderilebilir.
    - Mevcut sunucuda işlenebilir.
- Her bir veri giriş alanı **input elemanı** olarak adlandırılır.
- Formlar bir **gönderme (submit) butonu** ile çalışır.
- Form alanları boş bırakıldığında tarayıcı veya ek kodlar ile kullanıcı uyarılabilir.

**Örnek:**

Bir web sitesinde “Ad Soyad, Telefon, Email” alanlarının doldurulup “Gönder” butonuna basılması.

---

### **2. Form Etiketleri ve Yapısı**

- Temel yapı:

```
<form action="hedef-url" method="post">
  <input type="text" name="adsoyad">
  <button type="submit">Gönder</button>
</form>
```

- 
- **<form> etiketi** inputlar ve butonların aynı form içinde çalışmasını sağlar.
- **action**: Verinin gönderileceği adres.
- **method**: Gönderim yöntemi (GET / POST).

> Not:
> 

---

### **3. Input Elemanları ve Ortak Özellikler**

- **type**: Alanın veri tipini belirler.
- **name**: Gönderilen veriye backend tarafında verilen etiket.
- **value**: Alanın varsayılan değeri (kalıcıdır).
- **placeholder**: Kullanıcıya ne girmesi gerektiğini gösteren geçici metin.
- **required**: Alanı zorunlu yapar.
- **min, max, minlength, maxlength**: Sayısal veya metin alanlarında veri sınırı belirler.

**Örnek:**

```
<input type="text" name="adsoyad" placeholder="Ad Soyad" required>
```

---

### **4. Input Tipleri**

| **Type** | **Açıklama** | **Örnek Kullanım** |
| --- | --- | --- |
| text | Serbest metin girişi. | Ad Soyad |
| number | Sadece sayı girişi (tarayıcı desteğine dikkat). | Telefon, TC No |
| password | Girilen değeri gizler. | Şifre |
| email | Email format kontrolü yapar. | example@mail.com |
| date | Takvimden tarih seçtirir. | Doğum tarihi |
| datetime-local | Tarih ve saat seçimi. | Randevu zamanı |
| file | Dosya yükleme alanı. | Profil resmi |
| submit | Formu gönderir. | Gönder butonu |
| reset | Form alanlarını temizler. | Sıfırla butonu |
| checkbox | Çoklu seçim yapılabilen kutucuk. | Hobiler |
| radio | Tek seçim yapılabilen seçenek. | Cinsiyet |
| search | Arama kutusu (tarayıcı optimizasyonu ile). | Site içi arama |

---

### **5. Label ile Input İlişkilendirme**

- **<label> etiketi** input alanını tanımlar ve tıklanabilir hale getirir.
- **for** özelliği input’un **id** değeri ile eşleşmelidir.

**Örnek:**

```
<label for="username">Kullanıcı Adı:</label>
<input type="text" id="username" name="username">
```

---

### **6. Textarea**

- Çok satırlı metin girişi için kullanılır.
- Mesaj, yorum gibi uzun içerikler için uygundur.

**Örnek:**

```
<textarea name="mesaj" rows="4" cols="30"></textarea>
```

---

### **7. Checkbox ve Radio Kullanımı**

- **Checkbox**: Çoklu seçim.

```
<label><input type="checkbox" name="hobi" value="kitap"> Kitap Okumak</label>
```

- 
- **Radio**: Tek seçim (aynı name olmalı).

```
<label><input type="radio" name="cinsiyet" value="erkek"> Erkek</label>
```

---

### **8. Select - Option**

- Açılır liste oluşturur.
- **value**: Backend’e gönderilecek gerçek değer.
- **selected**: Varsayılan seçili seçenek.

**Örnek:**

```
<select name="sehir">
  <option value="">Şehir Seç</option>
  <option value="34">İstanbul</option>
  <option value="06">Ankara</option>
</select>
```

---

### **9. Validasyon (Doğrulama)**

- HTML5 özellikleri (required, type, min, max) basit doğrulama sağlar.
- **Güvenlik ve doğruluk için mutlaka:**
    - Frontend (JavaScript) kontrolü
    - Backend kontrolü yapılmalıdır.

**Örnek JS Kontrolü:**

```
if (input.value.length < 3) {
  alert("En az 3 karakter girin!");
}
```

---

### **10. Gerçek Hayat Analojisi**

- Form = Boş A4 kağıdı (bilgi girişi yapılacak alan).
- Inputlar = Kağıttaki boş kutucuklar.
- Gönder butonu = Doldurulmuş kağıdı teslim etmek.
- Action/Method = Kağıdın nereye ve nasıl gönderileceği.

---

Örnek HTML için:

---

```
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Elemanları Örneği</title>
</head>
<body>

  <h1>Form Elemanları Örneği</h1>

  <form action="#" method="post">

    <!-- Text Input -->
    <label for="adsoyad">Ad Soyad:</label>
    <input type="text" id="adsoyad" name="adsoyad" placeholder="Adınızı girin" required>
    <br><br>

    <!-- Number Input -->
    <label for="yas">Yaş:</label>
    <input type="number" id="yas" name="yas" min="1" max="100">
    <br><br>

    <!-- Password Input -->
    <label for="sifre">Şifre:</label>
    <input type="password" id="sifre" name="sifre" required>
    <br><br>

    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="ornek@mail.com" required>
    <br><br>

    <!-- Date Input -->
    <label for="dogumtarihi">Doğum Tarihi:</label>
    <input type="date" id="dogumtarihi" name="dogumtarihi">
    <br><br>

    <!-- File Upload -->
    <label for="dosya">Dosya Yükle:</label>
    <input type="file" id="dosya" name="dosya">
    <br><br>

    <!-- Textarea -->
    <label for="mesaj">Mesajınız:</label>
    <textarea id="mesaj" name="mesaj" rows="4" cols="30" placeholder="Mesajınızı yazın..."></textarea>
    <br><br>

    <!-- Checkbox -->
    <p>Hobileriniz:</p>
    <label><input type="checkbox" name="hobi" value="kitap"> Kitap Okumak</label>
    <label><input type="checkbox" name="hobi" value="yuruyus"> Yürüyüş</label>
    <label><input type="checkbox" name="hobi" value="yuzme"> Yüzme</label>
    <br><br>

    <!-- Radio -->
    <p>Cinsiyet:</p>
    <label><input type="radio" name="cinsiyet" value="erkek" required> Erkek</label>
    <label><input type="radio" name="cinsiyet" value="kadin"> Kadın</label>
    <br><br>

    <!-- Select -->
    <label for="sehir">Şehir:</label>
    <select id="sehir" name="sehir">
      <option value="">Şehir Seçiniz</option>
      <option value="34">İstanbul</option>
      <option value="06">Ankara</option>
      <option value="35">İzmir</option>
    </select>
    <br><br>

    <!-- Submit ve Reset Butonları -->
    <button type="submit">Gönder</button>
    <button type="reset">Temizle</button>

  </form>

</body>
</html>
```

---

Bu şablonun içinde şunlar var:

✅ **Tüm önemli input tipleri** (text, number, password, email, date, file)

✅ **Textarea, checkbox, radio, select** kullanımı

✅ **Label ile ilişkilendirme**

✅ **required, min, max, placeholder** örnekleri

✅ **Submit ve Reset butonları**

CSS için

---

## **📄 HTML + CSS Tam Örnek**

```
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Elemanları Örneği</title>
  <style>
    /* Sayfa genel stilleri */
    body {
      font-family: Arial, sans-serif;
      background-color: #f3f4f6;
      margin: 0;
      padding: 20px;
    }

    h1 {
      text-align: center;
      color: #333;
    }

    /* Form kutusu */
    form {
      max-width: 500px;
      margin: 20px auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    /* Etiketler */
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #444;
    }

    /* Input, textarea ve select */
    input[type="text"],
    input[type="number"],
    input[type="password"],
    input[type="email"],
    input[type="date"],
    input[type="file"],
    textarea,
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      font-size: 14px;
    }

    /* Checkbox ve radio satır düzeni */
    .checkbox-group,
    .radio-group {
      margin-bottom: 15px;
    }

    .checkbox-group label,
    .radio-group label {
      display: inline-block;
      margin-right: 15px;
      font-weight: normal;
    }

    /* Butonlar */
    button {
      padding: 10px 15px;
      font-size: 14px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
    }

    button[type="submit"] {
      background-color: #4CAF50;
      color: white;
    }

    button[type="reset"] {
      background-color: #f44336;
      color: white;
    }

    /* Hover efekti */
    button:hover {
      opacity: 0.9;
    }

    /* Responsive ayar */
    @media (max-width: 600px) {
      form {
        padding: 15px;
      }
    }
  </style>
</head>
<body>

  <h1>Form Elemanları Örneği</h1>

  <form action="#" method="post">

    <!-- Text Input -->
    <label for="adsoyad">Ad Soyad:</label>
    <input type="text" id="adsoyad" name="adsoyad" placeholder="Adınızı girin" required>

    <!-- Number Input -->
    <label for="yas">Yaş:</label>
    <input type="number" id="yas" name="yas" min="1" max="100">

    <!-- Password Input -->
    <label for="sifre">Şifre:</label>
    <input type="password" id="sifre" name="sifre" required>

    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="ornek@mail.com" required>

    <!-- Date Input -->
    <label for="dogumtarihi">Doğum Tarihi:</label>
    <input type="date" id="dogumtarihi" name="dogumtarihi">

    <!-- File Upload -->
    <label for="dosya">Dosya Yükle:</label>
    <input type="file" id="dosya" name="dosya">

    <!-- Textarea -->
    <label for="mesaj">Mesajınız:</label>
    <textarea id="mesaj" name="mesaj" rows="4" placeholder="Mesajınızı yazın..."></textarea>

    <!-- Checkbox -->
    <p>Hobileriniz:</p>
    <div class="checkbox-group">
      <label><input type="checkbox" name="hobi" value="kitap"> Kitap Okumak</label>
      <label><input type="checkbox" name="hobi" value="yuruyus"> Yürüyüş</label>
      <label><input type="checkbox" name="hobi" value="yuzme"> Yüzme</label>
    </div>

    <!-- Radio -->
    <p>Cinsiyet:</p>
    <div class="radio-group">
      <label><input type="radio" name="cinsiyet" value="erkek" required> Erkek</label>
      <label><input type="radio" name="cinsiyet" value="kadin"> Kadın</label>
    </div>

    <!-- Select -->
    <label for="sehir">Şehir:</label>
    <select id="sehir" name="sehir">
      <option value="">Şehir Seçiniz</option>
      <option value="34">İstanbul</option>
      <option value="06">Ankara</option>
      <option value="35">İzmir</option>
    </select>

    <!-- Submit ve Reset Butonları -->
    <button type="submit">Gönder</button>
    <button type="reset">Temizle</button>

  </form>

</body>
</html>
```

---

💡 **Bu CSS ile:**

- Form kutusu ortalanıyor, gölge ve köşe yuvarlatma ile modern görünüyor.
- Inputlar, textarea ve select **tam genişlikte** ve eşit boyda.
- Checkbox ve radio butonlar yan yana düzenleniyor.
- Butonlara renk ve hover efekti ekleniyor.
- Mobil cihazlarda otomatik olarak **responsive** oluyor.

---