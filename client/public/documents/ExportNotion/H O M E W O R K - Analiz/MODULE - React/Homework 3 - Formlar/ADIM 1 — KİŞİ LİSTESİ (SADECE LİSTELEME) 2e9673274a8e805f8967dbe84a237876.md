# ADIM 1 — KİŞİ LİSTESİ (SADECE LİSTELEME)

🎯 **Amaç (bu adımda ne yapıyoruz?)**

- App içinde **kişiler state’i** oluşturacağız
- ContactList ve Contact bileşenlerini yazacağız
- Ekranda **sadece mevcut kişileri** göstereceğiz
- **Ekleme / silme / arama yok**

---

## **1️⃣ App.jsx — kişiler için state oluşturma**

📍 src/App.jsx

Şu anki App’ini **tamamen bununla değiştir**:

```
import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  // 1️⃣ Kişiler state'i (statik test verisi)
  const [contacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  return (
    <div>
      <h1>Phonebook</h1>

      {/* Şimdilik SADECE liste */}
      <ContactList contacts={contacts} />
    </div>
  );
}
```

📌 **Neden böyle?**

- contacts App’te durur → **tek kaynak**
- Alt bileşenler sadece **props ile okur**
- Bu React’in temel felsefesi

---

## **2️⃣ ContactList bileşeni oluştur**

📁 Klasör:

```
src/components/ContactList/
```

📄 ContactList.jsx

```
import Contact from "../Contact/Contact";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}
```

📌 **Burada ne oluyor?**

- contacts dizisini dönüyoruz (map)
- Her kişi için bir <Contact /> render ediliyor
- key → React için **zorunlu**

---

## **3️⃣ Contact bileşeni oluştur**

📁 Klasör:

```
src/components/Contact/
```

📄 Contact.jsx

```
export default function Contact({ name, number }) {
  return (
    <div>
      <p>👤 {name}</p>
      <p>📞 {number}</p>
    </div>
  );
}
```

📌 **Şimdilik:**

- Stil yok
- Delete butonu yok
- Sadece veri gösteriyoruz

---

## **4️⃣ ŞU ANDA EKRANDA NE GÖRMELİSİN?**

Tarayıcıda şunu görmelisin:

```
Phonebook

👤 Rosie Simpson
📞 459-12-56

👤 Hermione Kline
📞 443-89-12

👤 Eden Clements
📞 645-17-79

👤 Annie Copeland
📞 227-91-26
```

🟢 Görüyorsan → **ADIM 1 TAMAM**

---

## **⛔ BURADA DURUYORUZ**

Bu adımda **bilerek yapmadık**:

- ❌ ContactForm
- ❌ SearchBox
- ❌ Delete
- ❌ Formik
- ❌ CSS

Hepsi **sonraki adımlar**

---