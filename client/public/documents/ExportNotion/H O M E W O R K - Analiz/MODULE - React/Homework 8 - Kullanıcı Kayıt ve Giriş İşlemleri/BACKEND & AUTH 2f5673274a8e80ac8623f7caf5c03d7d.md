# BACKEND & AUTH

## **ADIM ADIM BAŞLIYORUZ (ADIM 1)**

Şu an durumun:

- ✅ Vite + Vercel hazır
- ✅ Redux Toolkit kurulu
- ✅ contacts + filters önceki ödevden taşındı
- ❌ Backend (connections-api) **henüz yok**
- ❌ Auth (register / login / token) **yok**

Biz **önce auth altyapısını** kuracağız.

**Contacts’a dokunmuyoruz.**

---

## **🧠 Büyük Resim (ÖNCE BUNU ANLA)**

Bu backend şunları yapıyor:

```
User registers → backend JWT verir
User logs in   → backend JWT verir
JWT frontend'de saklanır
JWT her istekte Authorization header ile gönderilir
Sadece kendi contact'larını görür
```

---

# **✅ ADIM 1 — BACKEND URL & AXIOS INSTANCE**

### **1️⃣**

### **src/redux/api.js**

### **dosyasını oluştur**

📁 **src/redux/api.js**

```
import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});
```

📌 **Ne yaptık?**

- Backend adresini **tek yerden** yöneteceğiz
- Tüm istekler buradan geçecek

---

## **🔑 TOKEN EKLEME (ÇOK ÖNEMLİ)**

Aynı dosyaya **altına** ekle:

```
export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};
```

📌 **Bu ne işe yarar?**

- Login olunca → token header’a eklenir
- Logout olunca → token silinir

---

# **✅ ADIM 2 — AUTH OPERASYONLARI (REGISTER / LOGIN)**

### **2️⃣**

### **src/redux/auth/authOps.js**

### **oluştur**

📁 **src/redux/auth/authOps.js**

```
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader, clearAuthHeader } from "../api";
```

---

### **🧾 REGISTER**

```
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
```

📌 Backend endpoint:

```
POST /users/signup
{
  name,
  email,
  password
}
```

---

### **🔐 LOGIN**

```
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
```

---

### **🚪 LOGOUT**

```
export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await api.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
```

---

## **📌 ŞU AN NE VAR?**

| **Dosya** | **Durum** |
| --- | --- |
| api.js | ✅ |
| authOps.js | ✅ |
| Redux auth slice | ❌ (bir sonraki adım) |
| UI | ❌ |

---

# **⛔ BURADA DURUYORUZ**

👉 **Burada kesiyoruz**, çünkü:

- Bu adım **%100 backend + auth altyapısı**
- Bir hata varsa burada çıkar
- Devam etmeden önce netleşmeli

---

## **🔍 KONTROL LİSTESİ**

Şunlar var mı?

```
src/redux/api.js
src/redux/auth/authOps.js
```

Kodları aynen kopyaladın mı?

---