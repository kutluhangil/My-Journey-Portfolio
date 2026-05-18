# ADIM 8 — src/redux/store.js

## **1️⃣ Gerekli paketler (kontrol et)**

Terminalde **proje kökünde** şunlar kurulu olmalı:

```
npm install redux-persist
```

(react-redux ve @reduxjs/toolkit zaten kurulu olmalı)

---

## **2️⃣ Dosya yolu**

```
src/redux/store.js
```

---

## **3️⃣ KOPYALA – YAPIŞTIR (TAM VE DOĞRU HALİ)**

```
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

/* reducers */
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";

/*
  AUTH PERSIST CONFIG
  Sadece token localStorage'a yazılır
*/
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

/*
  STORE
*/
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },

  /*
    Redux Persist için gerekli middleware ayarları
    (serializable hatalarını engeller)
  */
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

/*
  PERSISTOR
*/
export const persistor = persistStore(store);
```

---

## **🧠 BU DOSYADA NE OLUYOR?**

### **🔹**

### **authPersistConfig**

```
whitelist: ["token"]
```

✔ Sadece **token** saklanır

❌ user bilgileri saklanmaz (backend’den refresh ile gelir)

---

### **🔹**

### **persistReducer**

```
auth: persistReducer(authPersistConfig, authReducer)
```

✔ auth slice **persisted**

✔ contacts & filters **persist değil**

---

### **🔹**

### **persistor**

```
export const persistor = persistStore(store);
```

➡️ main.jsx’te PersistGate içinde kullanacağız

---

## **❌ EN SIK YAPILAN HATALAR**

❌ persistReducer’ı iki argümanla çağırmamak

❌ whitelist’e user eklemek

❌ PersistGate eklemeyi unutmak

❌ middleware serializableCheck eklememek

---

## **✅ CHECKLIST (HW-08)**

✔ authPersistConfig var

✔ key / storage / whitelist doğru

✔ persistReducer iki argüman

✔ configureStore kullanıldı

✔ persistor export edildi

---

## **🎯 ŞU AN DURUM**

✔ authSlice

✔ authSelectors

✔ authOperations

✔ store.js ✅

---