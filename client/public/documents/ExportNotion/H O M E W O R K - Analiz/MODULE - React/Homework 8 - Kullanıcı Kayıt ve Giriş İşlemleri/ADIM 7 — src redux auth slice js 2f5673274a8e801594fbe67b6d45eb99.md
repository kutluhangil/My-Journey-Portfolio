# ADIM 7 —  src/redux/auth/slice.js

## **1️⃣ Dosya yolunu oluştur**

```
src/redux/auth/slice.js
```

---

## **2️⃣ KOPYALA – YAPIŞTIR (TAM VE DOĞRU HALİ)**

```
import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

/*
  AUTH STATE
  - user: giriş yapan kullanıcının bilgileri
  - token: JWT
  - isLoggedIn: login durumu
  - isRefreshing: sayfa yenilenirken auth kontrolü
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
  reducers: {},

  /*
    extraReducers
    Async işlemler burada yakalanır
  */
  extraReducers: builder => {
    builder

      /* ================= REGISTER ================= */
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

      /* ================= LOGIN ================= */
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

      /* ================= LOGOUT ================= */
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      /* ================= REFRESH USER ================= */
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

## **🧠 BU DOSYADA NE OLUYOR?**

### **🔹 NEDEN**

### **reducers: {}**

### **BOŞ?**

Çünkü:

- Tüm işlemler **async**
- register / login / logout / refresh
    
    → **extraReducers** kullanılır
    

---

### **🔹 register & login**

✔ Kullanıcıyı set eder

✔ Token’ı saklar

✔ isLoggedIn = true

---

### **🔹 logOut**

✔ user temizlenir

✔ token null

✔ isLoggedIn = false

📌 **Önemli:**

Contacts slice’ta da logOut yakalanacak (birazdan)

---

### **🔹 refreshUser**

✔ Sayfa yenilendiğinde çalışır

✔ Token geçerliyse user geri gelir

✔ Login bozulmaz

---

## **✅ CHECKLIST UYUMLULUK**

✔ initialState doğru

✔ 4 async action var

✔ isRefreshing kullanıldı

✔ reducers alanı yok

✔ export authReducer var

---

## **❌ EN SIK YAPILAN HATALAR**

❌ refreshUser.fulfilled’de isLoggedIn = true unutmak

❌ logOut’ta user temizlememek

❌ reducers kullanmak (yasak)

---

## **🎯 ŞU AN DURUM**

✔ authSelectors

✔ authOperations

✔ authSlice ✅

---