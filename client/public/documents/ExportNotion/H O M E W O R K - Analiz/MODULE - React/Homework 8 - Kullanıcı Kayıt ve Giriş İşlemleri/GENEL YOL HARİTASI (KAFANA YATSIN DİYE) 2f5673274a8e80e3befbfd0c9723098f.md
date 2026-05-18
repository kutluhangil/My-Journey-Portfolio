# GENEL YOL HARİTASI (KAFANA YATSIN DİYE)

---

1️⃣ **authSlice** → kullanıcı state’i

2️⃣ **auth selectors** → state’i okumak

3️⃣ **store.js + persist** → token saklama

4️⃣ **refreshUser** → sayfa yenilenince login kalması

5️⃣ **Routing + Private / Restricted Route**

6️⃣ **UI (Login / Register / Contacts)**

Şimdi **1️⃣** yapıyoruz.

---

# **✅ ADIM 1 — authSlice.js**

## **📁 Klasör + dosya oluştur**

```
src/redux/auth/authSlice.js
```

> ❗ Dosya adı ve konumu
> 
> 
> **ÇOK ÖNEMLİ**
> 

> redux/auth/ altında olmalı
> 

---

## **✍️ KOPYALA – YAPIŞTIR (HİÇ DEĞİŞTİRME)**

```
import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authOps";

/*
  AUTH STATE (Ödevde istenen birebir yapı)
*/
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  /*
    reducers YOK ❌
    Çünkü tüm işlemler async (createAsyncThunk)
  */
  extraReducers: builder => {
    builder

      // 🔹 REGISTER
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, state => {
        state.isRefreshing = false;
      })

      // 🔹 LOGIN
      .addCase(logIn.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logIn.rejected, state => {
        state.isRefreshing = false;
      })

      // 🔹 LOGOUT
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      // 🔹 REFRESH USER
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
```

---

## **🧠 BU DOSYA NE YAPIYOR? (ÇOK ÖNEMLİ)**

| **Alan** | **Ne işe yarıyor** |
| --- | --- |
| user | Backend’den gelen kullanıcı |
| token | JWT (persist edilecek) |
| isLoggedIn | Login kontrolü |
| isRefreshing | Sayfa yenilenince bekleme |

---

## **❗ KRİTİK KURALLAR (ÖDEV CHECKER)**

✅ reducers: **YOK**

✅ extraReducers: **VAR**

✅ register / login / logout / refresh **VAR**

✅ initialState birebir

---

## **🔍 ŞİMDİ DUR**

Terminalde şunu çalıştır:

```
npm run dev
```

Eğer:

- ❌ kırmızı hata YOK
- ✅ proje ayakta

➡️ hazırsın.

---

## 

Sonra devam 💪