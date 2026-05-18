# ADIM 5 — Kişileri LocalStorage’da Saklama

## **🎯 Amaç**

- Sayfa yenilense bile kişiler **kaybolmasın**
- Kişi **eklenince / silinince** otomatik kaydedilsin
- Uygulama açılınca **localStorage’dan okunsun**

Bunu **sadece App.jsx** içinde yapacağız ✅

Başka bileşenlere dokunmuyoruz.

---

## **🧠 Mantık (önce bunu anla)**

### **1️⃣ Sayfa ilk açıldığında:**

- localStorage’da contacts var mı?
    - ✔️ varsa → state’e yaz
    - ❌ yoksa → varsayılan kişilerle başla

### **2️⃣ contacts state’i HER değiştiğinde:**

- localStorage’a güncel halini kaydet

Bunu yapmak için:

- useEffect
- localStorage.getItem
- localStorage.setItem

---

## **1️⃣ App.jsx — state’i localStorage’dan başlat**

### **🔹 EN ÜSTE**

### **useEffect**

### **ekle**

```
import { useEffect, useState } from "react";
```

---

### **🔹 contacts state’ini DEĞİŞTİR (çok önemli)**

**ESKİ (yanlış artık):**

```
const [contacts, setContacts] = useState([
  ...
]);
```

**YENİ (DOĞRU):**

```
const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts
    ? JSON.parse(savedContacts)
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
});
```

🧠 Bu ne yapıyor?

- İlk render’da **bir kere** çalışır
- localStorage varsa → onu alır
- yoksa → demo verilerle başlar

---

## **2️⃣ contacts değişince localStorage’a yaz**

### **🔹 App.jsx içine EKLE (state’lerin ALTINA)**

```
useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);
```

🧠 Ne oluyor?

- contacts **eklenince**
- contacts **silinince**
- otomatik kaydediliyor

---

## **✅ ADIM 5 TEST LİSTESİ**

Bunları tek tek dene:

✔️ Yeni kişi ekle

✔️ Sayfayı yenile → **hala duruyor**

✔️ Kişi sil

✔️ Yenile → **silinmiş halde**

✔️ Console’da hata ❌

Eğer bunlar çalışıyorsa → **ADIM 5 TAMAM** 🎉

---

# **🎨 TASARIM (CSS) — Görsele Yaklaştırma**

Şimdi **basit ama düzgün** bir görünüm yapalım.

Aşırı süs yok → ödev uyumlu.

---

## **1️⃣ App için basit container**

📁 src/App.module.css (yoksa oluştur)

```
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}
```

### **App.jsx’te kullan:**

```
import styles from "./App.module.css";

<div className={styles.container}>
```

---

## **2️⃣ Contact kartı (en önemlisi)**

📁 src/components/Contact/Contact.module.css

```
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 12px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

button {
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
```

### **Contact.jsx güncelle:**

```
import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>👤 {name}</span>
        <span>📞 {number}</span>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
```

---

## **3️⃣ ContactList (listeyi toparla)**

📁 ContactList.module.css

```
.list {
  list-style: none;
  padding: 0;
}
```

```
<ul className={styles.list}>
```

---

## **🎯 ŞU ANDA UYGULAMAN:**

✅ Tüm adımlar bitmiş

✅ LocalStorage var

✅ Formik + Yup var

✅ Delete çalışıyor

✅ Filtre çalışıyor

✅ Görsel ödeve çok yakın

---