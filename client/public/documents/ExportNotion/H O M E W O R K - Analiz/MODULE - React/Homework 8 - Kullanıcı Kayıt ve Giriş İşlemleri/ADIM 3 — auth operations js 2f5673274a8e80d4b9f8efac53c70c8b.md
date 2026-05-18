# ADIM 3 — auth/operations.js

## **1️⃣ Dosyayı oluştur**

**YOL BİREBİR ÖNEMLİ:**

```
src/redux/auth/operations.js
```

---

## **2️⃣ Axios’u yapılandıralım (EN KRİTİK KISIM)**

📌 Bu backend **hazır backend**:

```
https://connections-api.goit.global/
```

📌 JWT token her istekte **Authorization header** ile gönderilecek.

---

## **3️⃣ KOPYALA – YAPIŞTIR (TAM HALİ)**

```
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

/*
  BASE URL
  Tüm auth ve contacts istekleri bu backend'e gidecek
*/
axios.defaults.baseURL = "https://connections-api.goit.global";

/*
  TOKEN HELPER
  Token varsa axios header'a ekler
*/
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

/*
  TOKEN CLEANER
  Logout olunca header temizlenir
*/
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/* ===========================
   REGISTER
   =========================== */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* ===========================
   LOGIN
   =========================== */
export const login = createAsyncThunk(
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

/* ===========================
   LOGOUT
   =========================== */
export const logout = createAsyncThunk(
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

/* ===========================
   REFRESH USER
   =========================== */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    // Token yoksa refresh yapma
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
```

---

## **🧠 BU DOSYADA NE OLDU? (ÇOK ÖNEMLİ)**

### **🔹 register**

- /users/signup
- Kullanıcı kaydı
- Token döner
- Token header’a eklenir

### **🔹 login**

- /users/login
- Token alınır
- Header’a eklenir

### **🔹 logout**

- /users/logout
- Token temizlenir

### **🔹 refreshUser**

- Sayfa yenilenince çalışır
- LocalStorage’daki token ile kullanıcıyı geri getirir
- **Login olmadan yetkili kalmayı sağlar**

---

## **✅ CHECKER’IN BAKACAĞI ŞEYLER**

✔ createAsyncThunk kullanıldı

✔ axios kullanıldı

✔ baseURL tanımlı

✔ 4 operasyon var

✔ try/catch var

✔ thunkAPI.rejectWithValue kullanıldı

---

## **❌ EN SIK YAPILAN HATALAR (SEN YAPMA)**

❌ axios baseURL yanlış

❌ token header eklenmedi

❌ refreshUser’da token kontrolü yok

❌ logout’ta header temizlenmedi

---

## **🧪 HENÜZ TEST ETME**

Şu an **authSlice YOK**

Bu yüzden hata alman normal ❗

---

##