# ADIM 6 src/redux/auth/operations.js

## **1️⃣ Dosya yolunu oluştur**

```
src/redux/auth/operations.js
```

---

## **2️⃣ KOPYALA – YAPIŞTIR (TAM VE DOĞRU HALİ)**

```
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
  AUTH API BASE URL
  Bu backend hazır geliyor (goit backend)
*/
axios.defaults.baseURL = "https://connections-api.goit.global";

/*
  TOKEN HELPER
  Token varsa → axios header’a ekle
  Logout olunca → header’dan sil
*/
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/* =====================================================
   REGISTER — Yeni kullanıcı kaydı
   Kullanım: RegistrationForm
   Action type: auth/register
===================================================== */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);

      // Gelen token header’a yazılır
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* =====================================================
   LOGIN — Kullanıcı giriş
   Kullanım: LoginForm
   Action type: auth/login
===================================================== */
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);

      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* =====================================================
   LOGOUT — Kullanıcı çıkış
   Kullanım: UserMenu
   Action type: auth/logout
===================================================== */
export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* =====================================================
   REFRESH USER — Sayfa yenilenince kullanıcıyı geri yükle
   Kullanım: App.jsx (useEffect)
   Action type: auth/refresh
===================================================== */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    // Token yoksa refresh yapma
    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }

    try {
      setAuthHeader(token);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
```

---

## **🧠 BU DOSYADA NE OLUYOR? (ÇOK ÖNEMLİ)**

### **🔹 register**

- /users/signup
- Token alır
- Token → axios header
- Redux’a user + token döner

---

### **🔹 logIn**

- /users/login
- Aynı mantık
- Giriş yaptıktan sonra:
    - isLoggedIn → true

---

### **🔹 logOut**

- /users/logout
- Header temizlenir
- Redux’ta auth resetlenir (slice’ta)

---

### **🔹 refreshUser (EN KRİTİK)**

- Sayfa yenilenince çalışır
- LocalStorage’daki token alınır
- /users/current çağrılır
- Kullanıcı **login kalır**

👉 **Bu olmazsa /contacts refresh’te login ister**

---

## **✅ CHECKLIST KONTROL**

✔ createAsyncThunk kullanıldı

✔ 4 operasyon var

✔ axios baseURL doğru

✔ try/catch + rejectWithValue var

✔ Token header set / clear var

---

## **❌ EN SIK YAPILAN HATALAR**

❌ refreshUser’da token kontrolü yok

❌ setAuthHeader unutulmuş

❌ logout’ta header silinmemiş

❌ baseURL yanlış

---

## **🎯 ŞU AN DURUM**

✔ authSlice

✔ authSelectors

✔ authOperations ✅

---

##