# ADIM 12 — LoginForm

## **🎯 Bu adımda ne yapıyoruz?**

- Login formu oluşturuyoruz
- Formik kullanıyoruz
- Redux logIn operasyonunu çağırıyoruz
- Hiç prop almıyoruz ❗ (kritik)

---

# **1️⃣ Gerekli Dosya Yapısı**

```
src/components/LoginForm/
├── LoginForm.jsx
└── LoginForm.module.css
```

---

# **2️⃣ LoginForm.jsx**

## **📄 Dosya yolu**

```
src/components/LoginForm/LoginForm.jsx
```

### **🔽 KOPYALA – YAPIŞTIR**

```
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  // 👇 Form submit olduğunda çalışır
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label}>
          Email
          <Field type="email" name="email" className={styles.input} required />
        </label>

        <label className={styles.label}>
          Password
          <Field
            type="password"
            name="password"
            className={styles.input}
            required
          />
        </label>

        <button type="submit" className={styles.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
```

---

## **🧠 Burada ne oluyor?**

| **Kod** | **Ne işe yarıyor** |
| --- | --- |
| Formik | Form state yönetimi |
| Field | Controlled input |
| handleSubmit | Form gönderilince çalışır |
| dispatch(logIn(values)) | Backend’e login isteği |
| resetForm() | Formu temizler |

⚠️ **Formik validation şart değil**, opsiyonel.

---

# **3️⃣ LoginForm.module.css**

## **📄 Dosya yolu**

```
src/components/LoginForm/LoginForm.module.css
```

```
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
}

.label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
}

.input {
  padding: 8px;
  margin-top: 4px;
}

.button {
  padding: 10px;
  cursor: pointer;
}
```

---

# **4️⃣ LoginPage (Sayfa Bileşeni)**

## **📁 Dosya yolu**

```
src/pages/Login/Login.jsx
```

### **🔽 KOPYALA – YAPIŞTIR**

```
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm />
    </div>
  );
}
```

---

## **⚠️ KRİTİK KONTROLLER (FASTCHECK)**

✅ LoginForm **prop almıyor**

✅ useDispatch() kullanılıyor

✅ logIn(values) çağrılıyor

✅ /login sayfasında render ediliyor

✅ Formik kullanılıyor

---

# **🔐 Login Akışı (Zihninde Otursun)**

```
Kullanıcı formu doldurur
↓
Formik submit
↓
dispatch(logIn({ email, password }))
↓
Backend JWT döner
↓
authSlice → token + user set edilir
↓
isLoggedIn = true
↓
PrivateRoute açılır
```

---

# **🧪 Test İçin (Backend)**

Kayıtlı bir kullanıcıyla dene:

- Email
- Password

Giriş sonrası:

- AppBar değişmeli
- Contacts görünmeli
- Login/Register kaybolmalı

---