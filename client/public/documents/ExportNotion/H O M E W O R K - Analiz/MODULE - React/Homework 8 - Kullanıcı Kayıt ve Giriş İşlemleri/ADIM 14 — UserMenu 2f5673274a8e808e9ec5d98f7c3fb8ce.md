# ADIM 14 — UserMenu

## **🎯 Bu adımda ne yapıyoruz?**

- Redux’tan **kullanıcı adını** alıyoruz
- Redux’tan **logout** işlemini dispatch ediyoruz
- AppBar’da sadece **login olmuş kullanıcıya** gösteriyoruz

---

# **1️⃣ Dosya Yapısı**

```
src/components/UserMenu/
├── UserMenu.jsx
└── UserMenu.module.css
```

---

# **2️⃣ UserMenu.jsx**

## **📄 Dosya yolu**

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

  // 👇 Redux'tan kullanıcı bilgisi al
  const user = useSelector(selectUser);

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Welcome, {user.name}</p>

      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
```

---

## **🧠 Burada ne oluyor?**

| **Kod** | **Açıklama** |
| --- | --- |
| selectUser | auth slice içindeki user bilgisini alır |
| dispatch(logOut()) | Backend + Redux logout |
| user.name | Kullanıcı adını gösterir |
| Prop YOK | (Fastcheck şartı ✅) |

---

# **3️⃣ UserMenu.module.css**

## **📄 Dosya yolu**

```
src/components/UserMenu/UserMenu.module.css
```

```
.wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.text {
  font-weight: 500;
}

.button {
  padding: 6px 12px;
  cursor: pointer;
}
```

---

# **4️⃣ Logout Olunca Ne Oluyor? (ÇOK ÖNEMLİ)**

Logout thunk çalışınca:

### **🔹 auth slice**

- user = { name: null, email: null }
- token = null
- isLoggedIn = false

### **🔹 persist**

- localStorage içindeki **auth.token silinir**

### **🔹 contacts slice**

Sen daha önce eklemiştin 👇

```
.addCase(logOut.fulfilled, state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
});
```

👉 Yani:

- Kişiler **tamamen temizlenir**
- Başka kullanıcı verisi kalmaz

---

# **5️⃣ AppBar ile Bağlantı (Hatırlatma)**

AppBar içinde:

```
const isLoggedIn = useSelector(selectIsLoggedIn);

{isLoggedIn ? <UserMenu /> : <AuthNav />}
```

👉 Login olmuş kullanıcı **AuthNav yerine UserMenu** görür.

---

# **✅ FASTCHECK (Bu adım)**

✔ useSelector kullanılıyor

✔ useDispatch kullanılıyor

✔ logOut dispatch ediliyor

✔ Kullanıcı adı render ediliyor

✔ Prop alınmıyor (kritik!)

---

# **🧪 Test Et**

1. Login ol
2. AppBar’da:

```
Welcome, Kutluhan   [Logout]
```

1. 
2. Logout’a bas
3. Otomatik:
    - /login veya / yönlendirme
    - Contacts temiz
    - Token silinmiş

---