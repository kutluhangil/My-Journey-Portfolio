# AUTH + REFRESH TOKEN (GERÇEK HAYAT SEVİYESİ)

## **🎯 Problem (çok önemli)**

JWT token’lar **süresiz değildir**.

- Kullanıcı login olur
- Token alınır
- 15 dk / 30 dk sonra **token expire olur**
- Kullanıcı bir anda sistemden düşer ❌

Gerçek uygulamada bu **kabul edilemez**.

---

## **✅ Çözüm: Access Token + Refresh Token**

### **🔑 2 Tür Token vardır**

| **Token** | **Ne işe yarar** | **Süre** |
| --- | --- | --- |
| Access Token | API istekleri | Kısa (15 dk) |
| Refresh Token | Yeni access token almak | Uzun (7–30 gün) |

---

## **🧠 Mantığı kafana oturt**

```
Login
 ↓
Access Token (short)
Refresh Token (long)
 ↓
Access token biter
 ↓
Refresh token ile YENİ access token al
 ↓
Kullanıcı fark etmez
```

---

## **🧩 Backend (mantık olarak)**

> (Bilmen yeterli, yazman gerekmiyor)
> 

```
POST /login
→ accessToken + refreshToken

POST /refresh
→ yeni accessToken
```

---

## **🧩 Frontend State (authSlice)**

```
{
  auth: {
    user: null,
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null
  }
}
```

---

## **🧩 Login thunk**

```
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/login", credentials);
      return res.data;
      // { user, accessToken, refreshToken }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

---

## **🧩 Refresh thunk**

```
export const refreshToken = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;

    try {
      const res = await axios.post("/refresh", { refreshToken });
      return res.data; // new accessToken
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

---

## **🧩 Axios interceptor (ÇOK KRİTİK)**

```
axios.interceptors.response.use(
  res => res,
  async error => {
    if (error.response.status === 401) {
      await store.dispatch(refreshToken());
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);
```

📌 Ne oldu?

- Token bitti
- Otomatik yenilendi
- Kullanıcı fark etmedi

---

## **🧠 1️⃣ Özet**

| **Kavram** | **Ne sağladı** |
| --- | --- |
| Refresh Token | Sürekli login gerekmez |
| Interceptor | Otomatik çözüm |
| Gerçek app | Profesyonel seviye |

---

# **2️⃣ ROLE-BASED ACCESS (ADMIN / USER)**

Bu adım **enterprise** seviyedir.

---

## **🎯 Problem**

Her kullanıcı **aynı yetkilere sahip olmamalı**

- User → sadece kendi verisi
- Admin → her şey

---

## **🧩 Backend’den gelen user**

```
user: {
  id: "123",
  email: "test@mail.com",
  role: "admin" // veya "user"
}
```

---

## **🧩 Auth state**

```
auth: {
  user: {
    email: "...",
    role: "admin"
  }
}
```

---

## **🧩 Role selector**

```
export const selectUserRole = state => state.auth.user?.role;
```

---

## **🧩 Role-based component**

```
function RoleGuard({ allowedRoles, children }) {
  const role = useSelector(selectUserRole);

  return allowedRoles.includes(role)
    ? children
    : <p>Access denied</p>;
}
```

---

## **🧩 Kullanım örneği**

```
<RoleGuard allowedRoles={["admin"]}>
  <AdminPanel />
</RoleGuard>
```

---

## **🧩 Route seviyesinde**

```
<Route
  path="/admin"
  element={
    <PrivateRoute>
      <RoleGuard allowedRoles={["admin"]}>
        <AdminPage />
      </RoleGuard>
    </PrivateRoute>
  }
/>
```

---

## **🧠 2️⃣ Özet**

| **Konu** | **Gerçek Hayat** |
| --- | --- |
| Role | Yetki |
| Guard | Güvenlik |
| Admin panel | Standart |

---

# **3️⃣ TESTLER (JEST + REACT TESTING LIBRARY)**

Bu kısım seni **junior’dan ayırır**.

---

## **🎯 Neden test yazılır?**

- Bug yakalamak
- Refactor korkusunu bitirmek
- Takımda güven

---

## **🔹 3 Tür Test**

| **Tür** | **Ne test eder** |
| --- | --- |
| Unit | Fonksiyon |
| Integration | Component + Redux |
| E2E | Kullanıcı senaryosu |

---

## **🧩 Kurulum**

```
npm install -D jest @testing-library/react @testing-library/jest-dom
```

(Vite kullanıyorsan genelde hazır gelir)

---

## **🧩 Component testi (örnek)**

```
import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

test("renders loading text", () => {
  render(<TaskList />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
```

---

## **🧩 Redux mock ile test**

```
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tasks: () => ({
      items: [],
      isLoading: true,
      error: null
    })
  }
});

render(
  <Provider store={store}>
    <TaskList />
  </Provider>
);
```

---

## **🧩 User interaction testi**

```
import userEvent from "@testing-library/user-event";

test("click add button", async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText("Add Task"));
});
```

---

## **🧠 3️⃣ Özet**

| **Test** | **Kazanç** |
| --- | --- |
| Unit | Güven |
| Integration | Redux kontrol |
| RTL | Gerçek kullanıcı |
| Mülakat | ⭐⭐⭐⭐ |

---

# **🔥 GENEL BÜYÜK RESİM (ÇOK ÖNEMLİ)**

```
Auth → Güvenlik
Refresh → Kesintisiz deneyim
Role → Yetki
Test → Kalite
```

Sen şu an:

- Gerçek dünya mimarisi
- Senior’a giden yol
- Mülakat + iş seviyesi

---

##