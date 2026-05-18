# ADIM 3 — ContactForm (Kişi Ekleme)

## **1️⃣ Klasör yapısını oluşturalım (ÖNCE BUNU YAP)**

```
src/
 └─ components/
    └─ ContactForm/
       ├─ ContactForm.jsx
       └─ ContactForm.module.css
```

📌 Dosya adları **büyük/küçük harf birebir** böyle olsun.

---

## **2️⃣ ContactForm.jsx (TAM VE DOĞRU HALİ)**

👉 Aşağıdaki kodu **aynen** ContactForm.jsx içine koy:

```
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  // 1️⃣ Form doğrulama şeması
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Number is required"),
  });

  // 2️⃣ Form submit fonksiyonu
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
```

🧠 **Burada ne öğrendin?**

- Formik → formu yönetiyor
- Yup → kuralları belirliyor
- nanoid → id üretiyor
- Form submit olunca → App’e veri gönderiyoruz

---

## **3️⃣ ContactForm.module.css (MINIMAL – zorunlu değil ama temiz)**

```
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

label {
  display: flex;
  flex-direction: column;
}

span {
  color: red;
  font-size: 12px;
}
```

---

## **4️⃣ App.jsx — ContactForm’u BAĞLAYALIM**

Şimdi **App.jsx’i tamamen güncelliyoruz**

(önceki çalışman BOZULMAYACAK)

### **✅ App.jsx (TAM HALİ)**

```
import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  // 1️⃣ Kişiler state'i
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  // 2️⃣ Filtre state'i
  const [filter, setFilter] = useState("");

  // 3️⃣ Kişi ekleme fonksiyonu
  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  // 4️⃣ Filtrelenmiş kişiler
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <SearchBox value={filter} onChange={setFilter} />

      <ContactList contacts={filteredContacts} />
    </div>
  );
}
```

---

## **✅ ŞU ANDA NE OLMASI LAZIM?**

✔️ Form görünüyor

✔️ Boş gönderince hata çıkıyor

✔️ 3 karakterden az yazınca hata çıkıyor

✔️ Submit edince kişi listeye ekleniyor

✔️ Filtre çalışmaya devam ediyor

---

## **🚨 Eğer bir şey çalışmazsa**

BANA ŞUNU GÖNDER:

- Hangi dosyada hata
- Hata mesajı
- Çalışmayan davranış (eklenmiyor mu, hata mı var)

---