# Verilerin Eklenmesi

Yerel depolamaya bir **anahtar-değer çifti** eklemek için `setItem(key, value)`yöntemi kullanılır.

Bu yöntem, `localStorage` nesnesi üzerinde tanımlıdır.

`localStorage.setItem("ui-theme", "light");`

Yukarıdaki kod, `"ui-theme"` anahtarıyla `"light"` değerini eşleştirerek yerel depolamaya kaydeder.

Artık bu anahtar altında saklanan verilere erişilebilir durumdadır.

`console.log(localStorage); // Storage {ui-theme: "light", length: 1}`

Aynı veriyi tarayıcı geliştirici araçlarında da görebilirsiniz:

- Geliştirici araçlarını (`F12`) açın.
- **Application (Uygulama)** sekmesine geçin.
- Sol menüden **Local Storage** altındaki alan adını seçin.
- `"ui-theme"` anahtarını ve `"light"` değerini listede göreceksiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7c1ad4e7-c9aa-4389-9274-da5346b51086Screenshot%202023-08-24%20at%2018.12.27.png)

```
Eğer "ui-theme" anahtarı daha önce zaten tanımlanmışsa, setItem(key, value) metodu eski değerin üzerine yazar.
```

---

## **🗂️ localStorage.setItem() — Kısa Notlar**

### **🔹 localStorage.setItem() hangi argümanları alır?**

**Cevap:**

✅ **Anahtar (key) ve saklanacak değer (value)**

```
localStorage.setItem(key, value);
```

📌

- **key** → Veriye ulaşmak için kullanılan isim
- **value** → Saklanacak veri (**sadece string olarak saklanır**)

---

### **🔹 localStorage.setItem(key, value) ne yapar?**

**Cevap:**

✅ **localStorage içinde verilen anahtar için bir değer atar**

📌 Açıklama:

- Eğer anahtar **yoksa** → yeni kayıt oluşturur
- Eğer anahtar **varsa** → mevcut değeri **günceller (üzerine yazar)**

---

### **🔹 Aynı anahtar tekrar kullanılırsa ne olur?**

```
localStorage.setItem("userData", "old_data");
localStorage.setItem("userData", "new_data");
```

**Sonuç:**

✅ "userData" anahtarının değeri **“new_data”** olur

📌 **localStorage hata vermez**, değeri günceller.

---

## **🧠 Önemli Bilgiler (Ezberlik)**

- localStorage **kalıcıdır**
    
    → Tarayıcı kapansa bile veri silinmez
    
- Anahtarlar **benzersizdir**
- Değerler **string olarak saklanır**

📌 Nesne veya dizi saklayacaksan:

```
localStorage.setItem("user", JSON.stringify({ name: "Ali", age: 25 }));
```

---

## **📍 Nerelerde Kullanılır?**

### **✅ 1. Kullanıcı bilgilerini saklamak**

```
localStorage.setItem("username", "jacob");
```

### **✅ 2. Tema / ayar tercihleri**

```
localStorage.setItem("theme", "dark");
```

### **✅ 3. Form verilerini geçici olarak tutmak**

```
localStorage.setItem("email", emailInput.value);
```

### **✅ 4. Sayfa yenilense bile verinin korunması gereken durumlar**

- Dil seçimi 🌍
- Giriş durumu 🔐
- Sepet bilgisi 🛒

---