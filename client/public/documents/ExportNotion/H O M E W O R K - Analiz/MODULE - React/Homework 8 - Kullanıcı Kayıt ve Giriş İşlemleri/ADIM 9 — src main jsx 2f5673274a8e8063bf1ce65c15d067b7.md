# ADIM 9 — src/main.jsx

## **1️⃣ Dosya yolu**

```
src/main.jsx
```

---

## **2️⃣ KOPYALA – YAPIŞTIR (TAM HALİ)**

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import { store, persistor } from "./redux/store";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Redux Store */}
    <Provider store={store}>
      {/* Persist (token localStorage'dan yüklenirken bekler) */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Router */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
```

---

## **🧠 BU DOSYADA NE OLUYOR?**

### **🔹**

### **<Provider store={store}>**

➡️ Redux’u tüm uygulamaya açar

➡️ useDispatch / useSelector çalışır

---

### **🔹**

### **<PersistGate>**

➡️ Sayfa yenilendiğinde:

- token localStorage’dan okunur
- auth state geri yüklenir
- refreshUser çalışabilir

```
<PersistGate loading={null} persistor={persistor}>
```

> loading={null} → beklerken boş ekran (istersen loader koyabilirsin)
> 

---

### **🔹**

### **<BrowserRouter>**

➡️ Routing çalışması için zorunlu

➡️ PrivateRoute / RestrictedRoute buna bağlı

---

## **❌ SIK YAPILAN HATALAR**

❌ PersistGate’i Provider dışında kullanmak

❌ BrowserRouter’ı App içinde tekrar sarmak

❌ persistor import etmeyi unutmak

❌ PersistGate eklememek (**kritik hata**)

---

## **✅ HW-08 CHECKLIST (main.jsx)**

✔ Provider var

✔ PersistGate var

✔ BrowserRouter var

✔ App Provider içinde

✔ PersistGate Provider içinde

---

## **🎯 ŞU AN DURUM**

✔ authSlice

✔ authSelectors

✔ authOps

✔ store.js

✔ **main.jsx ✅**

---