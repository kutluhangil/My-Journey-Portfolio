# SIRADAKİ ADIMLAR (FINAL PATH)

## **6️⃣ Logout → Contacts temizleniyor mu?**

## **7️⃣ Contacts selectors (memoized)**

## **8️⃣ Filters selectors**

## **9️⃣ UX polish (loading / empty states)**

## **🔟 Final checklist + README**

---

## **6️⃣ LOGOUT OLUNCA CONTACTS TEMİZLEME (ÇOK KRİTİK)**

📍 **Fastcheck’in en çok baktığı yerlerden biri**

> Kullanıcı logout olunca → state.contacts.items
> 
> 
> **boşaltılmalı**
> 

### **📄**

### **src/redux/contacts/slice.js**

```
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: builder => {
    builder
      /* fetch */
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      /* add */
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      /* delete */
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })

      /* 🔥 LOGOUT */
      .addCase(logOut.fulfilled, () => initialState);
  },
});

export const contactsReducer = contactsSlice.reducer;
```

📌 **Neden bu şart?**

- Eski kullanıcının kişileri yeni kullanıcıya görünmesin
- Güvenlik + Fastcheck şartı

---

## **7️⃣ CONTACTS SELECTORS (MEMOIZATION)**

📍 **Amaç:**

Filtreleme **loading / error değişince** tekrar çalışmasın

### **📄**

### **src/redux/contacts/selectors.js**

```
import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
```

✔️ createSelector

✔️ Memoized

✔️ Fastcheck uyumlu

---

## **8️⃣ FILTERS SELECTORS**

📄 src/redux/filters/selectors.js

```
export const selectNameFilter = state => state.filters.name;
```

📌 **Basit ama zorunlu**

---

## **9️⃣ CONTACTLIST JSX GÜNCELLEME**

📍 **Artık filter yok → selector var**

### **📄**

### **src/components/ContactList/ContactList.jsx**

```
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";

import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!contacts.length) {
    return <p>No contacts yet</p>;
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
}
```

🚫 .filter() **YOK**

✔️ Selector var

---

## **🔟 HIZLI FASTCHECK ÖZETİ (KENDİN KONTROL ET)**

✅ redux/auth/slice.js

✅ redux/auth/operations.js

✅ redux/auth/selectors.js

✅ persist token

✅ logout temizliyor

✅ PrivateRoute / RestrictedRoute

✅ refreshUser App içinde

✅ selectors memoized

✅ console error yok

---