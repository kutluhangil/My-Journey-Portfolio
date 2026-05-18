# ADIM 13 — RegistrationForm

## **🎯 Bu adımda ne yapıyoruz?**

- Kullanıcı **kayıt formu** oluşturuyoruz
- Formik kullanıyoruz
- auth/register operasyonunu çağırıyoruz
- JWT token backend’den geliyor
- Kullanıcı otomatik login oluyor

---

# **1️⃣ Dosya Yapısı**

```
src/components/RegistrationForm/
├── RegistrationForm.jsx
└── RegistrationForm.module.css
```

---

# **2️⃣ RegistrationForm.jsx**

## **📄 Dosya yolu**

```
src/components/RegistrationForm/RegistrationForm.jsx
```

### **🔽 KOPYALA – YAPIŞTIR**

```
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  // 👇 Form submit olduğunda çalışır
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field type="text" name="name" className={styles.input} required />
        </label>

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
          Register
        </button>
      </Form>
    </Formik>
  );
}
```

---

## **🧠 Burada ne oluyor?**

| **Kod** | **Açıklama** |
| --- | --- |
| Formik | Form state yönetimi |
| initialValues | name + email + password |
| dispatch(register(values)) | Backend’e kayıt isteği |
| resetForm() | Formu temizler |
| export default | Görev gereği |

---

# **3️⃣ RegistrationForm.module.css**

## **📄 Dosya yolu**

```
src/components/RegistrationForm/RegistrationForm.module.css
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

# **4️⃣ RegistrationPage (Sayfa)**

## **📄 Dosya yolu**

```
src/pages/Registration/Registration.jsx
```

### **🔽 KOPYALA – YAPIŞTIR**

```
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function Registration() {
  return (
    <div>
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
}
```

---

## **⚠️ KRİTİK FASTCHECK**

✅ RegistrationForm **prop almıyor**

✅ useDispatch() var

✅ register(values) çağrılıyor

✅ /register route’unda render ediliyor

✅ Formik kullanılıyor

---

# **🔐 Register Akışı (Net Özet)**

```
Kullanıcı kayıt formunu doldurur
↓
dispatch(register({ name, email, password }))
↓
Backend:
- kullanıcıyı oluşturur
- JWT token döner
↓
authSlice:
- user set edilir
- token set edilir
- isLoggedIn = true
↓
RestrictedRoute:
- /contacts’e yönlendirir
```

---

# **🧪 Test Et**

1. /register sayfasına git
2. Yeni email + password gir
3. Submit
4. Otomatik:
    - Login olur
    - Contacts sayfasına gider
    - AppBar değişir

---