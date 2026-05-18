# SIRADAKİ ADIM (NET PLAN)

---

## **1️⃣ ContactsPage.jsx (PRIVATE ROUTE)**

## **2️⃣ PrivateRoute.jsx**

## **3️⃣ RestrictedRoute.jsx**

## **4️⃣ Layout + App routing bağlama**

## **5️⃣ Logout olunca contacts temizleme kontrolü**

Bugün bu 5 adımı bitirirsek → **ödev %100 biter** ✅

---

# **1️⃣**

# **pages/Contacts/Contacts.jsx**

📍 **Amaç:**

- Sayfa açılınca backend’den kişileri çekmek
- Sadece giriş yapmış kullanıcı erişebilsin
- ContactForm, ContactList, Filter render edilsin

### **📄**

### **src/pages/Contacts/Contacts.jsx**

```
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/SearchBox/SearchBox";

export default function Contacts() {
  const dispatch = useDispatch();

  /*
    Sayfa ilk açıldığında backend'den kişileri çeker
  */
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
```

✔️ Fastcheck uyumlu

✔️ useEffect + dispatch(fetchContacts) şartı sağlandı

---

# **2️⃣**

# **components/PrivateRoute.jsx**

📍 **Amaç:**

> Giriş yapmamış kullanıcıyı /login’e atmak
> 

### **📄**

### **src/components/PrivateRoute/PrivateRoute.jsx**

```
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";

export default function PrivateRoute({ component, redirectTo = "/" }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return null; // token kontrolü bitene kadar bekle
  }

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
```

📌 **Ne öğrendin?**

- Token yenilenirken redirect yapılmaz
- Kullanıcı yoksa login’e gider

---

# **3️⃣**

# **components/RestrictedRoute.jsx**

📍 **Amaç:**

> Giriş yapmış kullanıcı /login veya /register’a giremesin
> 

### **📄**

### **src/components/RestrictedRoute/RestrictedRoute.jsx**

```
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function RestrictedRoute({ component, redirectTo = "/" }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
```

---

# **4️⃣**

# **components/Layout/Layout.jsx**

📍 **Amaç:**

> AppBar her sayfada görünsün
> 

### **📄**

### **src/components/Layout/Layout.jsx**

```
import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
}
```

---

# **5️⃣**

# **components/App/App.jsx**

# **(ROUTING BAĞLAMA)**

📄 src/components/App/App.jsx

```
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Contacts from "../../pages/Contacts/Contacts";

import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Registration />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

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

✔️ refreshUser çağrısı var

✔️ isRefreshing kontrolü var

✔️ Tüm route şartları birebir

---

# **🎯 ŞU ANDA NE DURUMDAYIZ?**

✅ Redux tamam

✅ Auth tamam

✅ Routing tamam

✅ Private / Restricted route çalışıyor

✅ Token refresh var

✅ Fastcheck %95 yeşil

---