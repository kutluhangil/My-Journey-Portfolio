# ADIM 4 — Kişi Silme Mantığı

Bu adım **3 parçadan** oluşur:

1️⃣ **App.jsx** → silme fonksiyonu

2️⃣ **ContactList.jsx** → fonksiyonu aşağıya iletme

3️⃣ **Contact.jsx** → Delete butonu + tıklama

---

## **1️⃣ App.jsx — silme fonksiyonu ekle**

📍 Mantık:

- Hangi kişi silinecek? → **id**
- Ne yapacağız? → filter ile listeden çıkaracağız

### **🔹 App.jsx’te EKLE (addContact’ın ALTINA)**

```
// 5️⃣ Kişi silme fonksiyonu
const deleteContact = (contactId) => {
  setContacts((prev) =>
    prev.filter((contact) => contact.id !== contactId)
  );
};
```

---

### **🔹 ContactList çağrısını GÜNCELLE**

**ESKİ:**

```
<ContactList contacts={filteredContacts} />
```

**YENİ:**

```
<ContactList
  contacts={filteredContacts}
  onDeleteContact={deleteContact}
/>
```

✅ App.jsx bitti.

---

## **2️⃣ ContactList.jsx — delete fonksiyonunu Contact’a aktar**

📍 Dosya:

src/components/ContactList/ContactList.jsx

### **🔹 ContactList.jsx (TAM VE DOĞRU)**

```
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}
```

🧠 Burada olan şey:

- Contact’a **id** gönderiyoruz
- Delete fonksiyonunu prop olarak iletiyoruz

---

## **3️⃣ Contact.jsx — Delete butonu ekle**

📍 Dosya:

src/components/Contact/Contact.jsx

### **🔹 Contact.jsx (TAM HALİ)**

```
export default function Contact({ id, name, number, onDelete }) {
  return (
    <div>
      <span>
        {name}: {number}
      </span>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
```

🧠 Kritik nokta:

```
onClick={() => onDelete(id)}
```

- **Fonksiyonu çağırıyoruz**
- Hangi kişi? → **id**

---

## **✅ ŞU ANDA NE OLMALI?**

✔️ Her kişinin yanında **Delete** butonu

✔️ Tıklayınca sadece o kişi siliniyor

✔️ Filtre açıkken de doğru kişi siliniyor

✔️ Konsolda **hiç hata yok**

---

## **❌ En sık yapılan hatalar (sende yok ama bil)**

- onClick={onDelete(id)} ❌
- filter yerine splice kullanmak ❌
- id’yi prop olarak göndermemek ❌

---