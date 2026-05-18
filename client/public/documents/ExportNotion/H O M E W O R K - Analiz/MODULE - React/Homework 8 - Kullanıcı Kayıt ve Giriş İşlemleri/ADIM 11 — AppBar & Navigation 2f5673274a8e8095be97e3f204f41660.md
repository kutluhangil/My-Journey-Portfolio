# ADIM 11 — AppBar & Navigation

## **🎯 Bu adımda ne yapıyoruz?**

- Üst bar (header) oluşturuyoruz
- Login/Register – Contacts linklerini ayarlıyoruz
- Kullanıcı giriş durumuna göre menüyü değiştiriyoruz

---

# **1️⃣ AppBar Bileşeni**

## **📁 Dosya yolu**

```
src/components/AppBar/AppBar.jsx
```

### **🔽 KOPYALA – YAPIŞTIR**

```
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
```

---

### **🧠 Ne oluyor?**

| **Kod** | **Açıklama** |
| --- | --- |
| Navigation | Home / Contacts |
| AuthNav | Login + Register |
| UserMenu | Username + Logout |
| isLoggedIn | Hangisi gösterilecek karar verir |

---

## **📄**

## **AppBar.module.css**

```
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  border-bottom: 1px solid #ddd;
}
```

---

# **2️⃣ Navigation Bileşeni**

## **📁 Dosya yolu**

```
src/components/Navigation/Navigation.jsx
```

### **🔽 KOPYALA – YAPIŞTIR**

```
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
```

---

## **📄**

## **Navigation.module.css**

```
.nav {
  display: flex;
  gap: 20px;
}

.link {
  text-decoration: none;
  font-weight: 500;
  color: #333;
}

.link.active {
  color: #1976d2;
}
```

---

## **🧠 Mantık (ÇOK ÖNEMLİ)**

| **Kullanıcı** | **Görür** |
| --- | --- |
| Giriş yapmamış | Home |
| Giriş yapmış | Home + Contacts |

---

# **3️⃣ AuthNav (Login / Register)**

## **📁 Dosya yolu**

```
src/components/AuthNav/AuthNav.jsx
```

### **🔽 KOPYALA – YAPIŞTIR**

```
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={styles.authNav}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Log In
      </NavLink>
    </div>
  );
}
```

### **📄**

### **AuthNav.module.css**

```
.authNav {
  display: flex;
  gap: 16px;
}

.link {
  text-decoration: none;
  font-weight: 500;
}
```

---

# **4️⃣ UserMenu (Username + Logout)**

## **📁 Dosya yolu**

```
src/components/UserMenu/UserMenu.jsx
```

### **🔽 KOPYALA – YAPIŞTIR**

```
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.menu}>
      <span className={styles.name}>Welcome, {user.name}</span>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
}
```

### **📄**

### **UserMenu.module.css**

```
.menu {
  display: flex;
  align-items: center;
  gap: 16px;
}

.name {
  font-weight: 500;
}

.button {
  padding: 6px 12px;
  cursor: pointer;
}
```

---

# **5️⃣ Layout Bileşeni (AppBar’ı saran)**

## **📁 Dosya yolu**

```
src/components/Layout/Layout.jsx
```

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

# **✅ CHECKLIST (BU ADIM)**

✔ AppBar var

✔ Navigation var

✔ AuthNav var

✔ UserMenu var

✔ isLoggedIn’e göre değişiyor

✔ Logout çalışıyor

---

# **🎯 ŞU AN UYGULAMA NE YAPIYOR?**

| **Durum** | **Üst Menü** |
| --- | --- |
| Giriş yok | Home + Login/Register |
| Giriş var | Home + Contacts + Username + Logout |

---