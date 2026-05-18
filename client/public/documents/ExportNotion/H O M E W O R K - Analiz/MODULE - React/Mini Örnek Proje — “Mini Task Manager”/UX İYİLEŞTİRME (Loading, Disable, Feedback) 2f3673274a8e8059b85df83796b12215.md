# UX İYİLEŞTİRME (Loading, Disable, Feedback)

Bu adımda **kullanıcı deneyimini profesyonel seviyeye** çıkarıyoruz.

## **🎯 Amaç**

- Kullanıcı ne olduğunu **anlasın**
- Aynı anda 10 kere butona basamasın
- Uygulama “dondu” hissi vermesin

---

## **6.1 Loading sırasında butonları kilitleme**

### **🔴 Problem**

Kullanıcı:

- “Add” → 5 kere basıyor
- Aynı task 5 kere ekleniyor ❌

### **✅ Çözüm**

Redux’taki isLoading state’ini UI’da kullanacağız.

### **📌 Nereden geliyor?**

```
const { items, isLoading, error } = useSelector(state => state.tasks);
```

---

### **🧩 TaskList.jsx → Delete butonu disable**

```
<button
  disabled={isLoading}
  onClick={() => dispatch(deleteTask(task.id))}
>
  {isLoading ? "Deleting..." : "❌"}
</button>
```

📌 Ne oldu?

- API çalışırken buton kilitli
- Kullanıcı tekrar tıklayamaz

---

### **🧩 Add Task butonu (örnek)**

```
<button type="submit" disabled={isLoading}>
  {isLoading ? "Adding..." : "Add Task"}
</button>
```

---

## **6.2 Global loading göstergesi**

```
{isLoading && <p>⏳ Please wait...</p>}
```

👉 Gerçek projelerde:

- Spinner
- Skeleton
- Progress bar

---

## **6.3 Error mesajlarını kullanıcı dostu gösterme**

❌ Kötü:

```
Error: Network Error
```

✅ İyi:

```
{error && <p style={{ color: "red" }}>
  Something went wrong. Please try again.
</p>}
```

📌 Backend hatası kullanıcıya **ham şekilde gösterilmez**

---

## **🧠 6. Adım Özeti**

| **Şey** | **Neden** |
| --- | --- |
| disabled | Çift işlem engeli |
| loading text | Kullanıcı bilgilendirme |
| error UI | Güven hissi |
| UX | Senior farkı |

---

# **7️⃣ useMemo & SELECTOR OPTİMİZASYONU**

Bu adım **performans + mimari** adımıdır.

Mülakatlarda **çok puan kazandırır**.

---

## **🔴 Problem**

Redux state’in şöyle:

```
{
  items: [],
  isLoading: false,
  error: null,
  filter: ""
}
```

Her loading değiştiğinde:

```
items.filter(...)
```

tekrar çalışır ❌

---

## **✅ Çözüm: Memoized Selector (createSelector)**

Redux Toolkit’in **altın silahı**.

---

## **7.1 Selector nedir?**

Selector:

- Redux state’ten veri okur
- Hesaplama yapar
- Gereksiz tekrarları önler

---

## **7.2 tasksSlice.js → selector yaz**

```
import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = state => state.tasks.items;
export const selectFilter = state => state.tasks.filter;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) =>
    tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase())
    )
);
```

📌 createSelector:

- inputs değişmezse **hesaplama yapmaz**
- CPU dostu
- Büyük listelerde şart

---

## **7.3 UI’da kullanım**

❌ Yanlış:

```
const tasks = useSelector(state =>
  state.tasks.items.filter(...)
);
```

✅ Doğru:

```
const tasks = useSelector(selectFilteredTasks);
```

---

## **🧠 7. Adım Özeti**

| **Kavram** | **Ne kazandırır** |
| --- | --- |
| createSelector | Performans |
| Memoization | Gereksiz render yok |
| Clean UI | Okunabilir kod |
| Mülakat | ⭐⭐⭐ |

---

# **8️⃣ AUTH (Login, Protected Route, JWT mantığı)**

Bu adım **gerçek uygulama dünyasıdır**.

---

## **8.1 Authentication vs Authorization**

### **🔐 Authentication**

> “Sen kimsin?”
> 
- Email / password
- Login
- Register

### **🔑 Authorization**

> “Ne yapabilirsin?”
> 
- Bu route’a girebilir mi?
- Bu veriyi görebilir mi?

---

## **8.2 JWT nedir? (çok net)**

JWT = **kimlik kartı**

Backend:

- Login olunca token üretir
- İçinde user id, email vardır
- Gizli anahtarla imzalanır

Frontend:

- Token’ı saklar
- Her istekte gönderir

---

## **8.3 Auth slice (örnek yapı)**

```
{
  auth: {
    user: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null
  }
}
```

---

## **8.4 Login thunk örneği**

```
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/login", credentials);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

---

## **8.5 Token’ı axios’a ekleme**

```
axios.defaults.headers.common.Authorization =
  `Bearer ${token}`;
```

📌 Bundan sonra:

- Her request authenticated
- Backend seni tanır

---

## **8.6 Protected Route (çok sorulur)**

```
function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
}
```

Kullanım:

```
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

---

## **🧠 8. Adım Özeti**

| **Konu** | **Gerçek Hayat** |
| --- | --- |
| JWT | Güvenli API |
| Protected Route | Yetkisiz erişim engeli |
| Auth slice | Kullanıcı yönetimi |
| Token | Kimlik |

---

# **🧠 GENEL BÜYÜK RESİM**

```
UI → dispatch
dispatch → thunk
thunk → backend
backend → response
response → reducer
reducer → store
store → selector
selector → UI
```

Sen şu an **gerçek bir frontend mimarisini** öğrendin.

---

##