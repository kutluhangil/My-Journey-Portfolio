# ADIM 10 — App.jsx & Routing

## **🎯 Bu adımda ne yapıyoruz?**

- refreshUser çalıştırıyoruz (sayfa yenilenince token ile login kalması için)
- isRefreshing kontrolü yapıyoruz
- **Layout + AppBar** her sayfada görünüyor
- Public / Private rotaları ayırıyoruz

---

## **1️⃣ Dosya yolu**

```
src/components/App/App.jsx
```

> ⚠️ App
> 
> 
> **components içinde**
> 

---

## **2️⃣ KOPYALA – YAPIŞTIR (TAM HALİ)**

```
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Contacts from "../../pages/Contacts/Contacts";

import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // 🔄 Sayfa yenilenince token varsa kullanıcıyı yenile
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // ⏳ Token kontrolü bitene kadar bekle
  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Layout>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />

        {/* Restricted */}
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Registration />} />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

        {/* Private */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </Layout>
  );
}
```

---

## **🧠 SATIR SATIR NE OLUYOR?**

### **🔹**

### **refreshUser()**

```
useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);
```

✔ localStorage’daki token backend’e gönderilir

✔ token geçerliyse → user bilgisi alınır

✔ login durumu geri yüklenir

---

### **🔹**

### **isRefreshing**

```
if (isRefreshing) {
  return <p>Refreshing user...</p>;
}
```

➡️ **ÇOK ÖNEMLİ**

Token kontrolü bitmeden UI çizilmez

Yoksa /contacts patlar

---

## **🔐 ROUTE MANTIKLARI (AKILDA KALSIN)**

### **🟢 Public**

| **Route** | **Kim girer** |
| --- | --- |
| / | Herkes |

---

### **🟡 RestrictedRoute**

| **Route** | **Kim girer** |
| --- | --- |
| /login | Giriş yapmamış |
| /register | Giriş yapmamış |

➡️ Login olmuş kullanıcı → **/contacts**

---

### **🔴 PrivateRoute**

| **Route** | **Kim girer** |
| --- | --- |
| /contacts | Sadece login olan |

➡️ Login değilse → **/login**

---

## **❌ SIK YAPILAN HATALAR**

❌ refreshUser App dışında çağırmak

❌ isRefreshing kontrolü koymamak

❌ Layout’u Route içine almak

❌ component prop’una <Component /> yerine Component vermek

---

## **✅ CHECKLIST (App.jsx)**

✔ useDispatch var

✔ refreshUser çağrılıyor

✔ isRefreshing kontrolü var

✔ RestrictedRoute doğru

✔ PrivateRoute doğru

✔ Routes Layout içinde

---

## **🎯 ŞU AN DURUM**

✔ authSlice

✔ authSelectors

✔ authOps

✔ store.js

✔ main.jsx

✔ **App.jsx & routing ✅**

---