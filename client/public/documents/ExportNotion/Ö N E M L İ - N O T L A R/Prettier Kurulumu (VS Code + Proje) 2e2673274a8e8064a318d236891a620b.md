# Prettier Kurulumu (VS Code + Proje)

### **🎯 Amaç**

Kodun **otomatik ve standart biçimde** formatlanmasını sağlamak.

---

## **1️⃣ VS Code’a Prettier Eklentisi**

- **Extensions** → Prettier - Code formatter
- **Yüklü olmalı** ✅

---

## **2️⃣ VS Code Ayarları**

### **Açma Yolu**

- ⚙️ (sol alt) → **Settings**

### **Yapılması Gerekenler**

- ✅ **Editor: Format On Save** → **Açık**
- ✅ **Editor: Default Formatter** →
    
    **Prettier - Code formatter**
    

📌 Bu ayar, “Kaydedince Prettier çalışsın” demektir.

---

## **3️⃣ Proje İçin Prettier Ayar Dosyası**

📍 **Kök dizine** (package.json ile aynı yere):

### **Dosya adı:**

```
.prettierrc
```

### **İçeriği:**

```
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

📌 Bu dosya **proje format kurallarını** belirler

📌 Mentorlar özellikle buna bakar

---

## **4️⃣ Çalıştığını Test Et**

### **Önce:**

```
const user={name:"Ali",age:20}
```

### **Kaydet (**

### **Cmd + S**

### **) → Sonra:**

```
const user = { name: 'Ali', age: 20 };
```

✅ Otomatik düzeliyorsa **her şey tamamdır**

---

## **🧠 Kısa Mantık Özeti**

- **Prettier eklentisi** → VS Code’a formatlama yeteneği verir
- **Default Formatter** → Hangi araç formatlayacak, onu seçer
- **Format on Save** → Kaydederken çalıştırır
- **.prettierrc** → Projeye özel kurallar (asıl önemli olan)

---

## **✅ Sonuç**

✔ Prettier kurulu

✔ Kaydedince otomatik formatlıyor

✔ Proje kuralları tanımlı

✔ Mentor kriterleri karşılandı

---