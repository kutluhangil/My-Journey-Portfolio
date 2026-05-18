# ADIM 5 — auth/selectors.js

## **1️⃣ Dosyayı oluştur**

**YOL (birebir):**

```
src/redux/auth/selectors.js
```

---

## **2️⃣ KOPYALA – YAPIŞTIR (TAM HALİ)**

```
/*
  AUTH SELECTORS
  Redux state içinden auth bilgilerini okumak için kullanılır
*/

// Kullanıcının login olup olmadığını döner
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// Kullanıcı bilgilerini (name, email) döner
export const selectUser = state => state.auth.user;

// Token ile kullanıcı yenileniyor mu bilgisini döner
export const selectIsRefreshing = state => state.auth.isRefreshing;
```

---

## **🧠 BU SELECTOR’LAR NE İŞE YARIYOR?**

### **🔹**

### **selectIsLoggedIn**

Kullanım yerleri:

- Navigation
- AppBar
- PrivateRoute
- RestrictedRoute

👉 **Kullanıcı login mi değil mi?**

---

### **🔹**

### **selectUser**

Kullanım yerleri:

- UserMenu

👉 **“Welcome, John” gibi yerlerde**

---

### **🔹**

### **selectIsRefreshing**

Kullanım yerleri:

- App.jsx

👉 Sayfa yenilenirken:

- Token kontrol edilir
- Kullanıcı yüklenene kadar ekran bekletilir

---

## **📌 ÖRNEK KULLANIM (Sadece mantık)**

```
const isLoggedIn = useSelector(selectIsLoggedIn);
const user = useSelector(selectUser);
```

UI **Redux state’e dokunmaz**, sadece selector kullanır ✔️

---

## **✅ CHECKLIST UYUMLULUK**

✔ Dosya adı doğru

✔ 3 selector mevcut

✔ Hepsi export ediliyor

✔ Ödev kriterleriyle birebir

---

## **❌ EN SIK HATALAR**

❌ state.user yazmak (yanlış)

❌ selector yazmadan state.auth.xxx kullanmak

❌ isRefreshing’i unutmak

---

## **🎯 ŞU AN DURUM**

✔ authSlice ✅

✔ authSelectors ✅

Sıradaki en büyük parça geliyor 👇

---