# ADIM 2 — authSelectors.js

## **📁 Dosyayı oluştur**

```
src/redux/auth/authSelectors.js
```

> ❗ Yol
> 
> 
> **birebir**
> 

---

## **✍️ KOPYALA – YAPIŞTIR (AYNEN)**

```
/*
  AUTH SELECTORS
  Redux state içinden auth verilerini okumak için kullanılır
*/

// Kullanıcının giriş yapıp yapmadığını döner
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// Kullanıcı bilgilerini döner (name, email)
export const selectUser = state => state.auth.user;

// Sayfa yenilenirken kullanıcı doğrulanıyor mu?
export const selectIsRefreshing = state => state.auth.isRefreshing;
```

---

## **🧠 BU DOSYA NE İŞE YARIYOR?**

| **Selector** | **Nerede kullanılır** |
| --- | --- |
| selectIsLoggedIn | PrivateRoute / Navigation |
| selectUser | UserMenu |
| selectIsRefreshing | App.jsx (ilk yükleme) |

> ❗ useSelector(state => state.auth...)
> 
> 
> **yazmak YASAK değil**
> 

> ama
> 
> 
> **ödevde selector kullanılması ZORUNLU**
> 

---

## **✅ CHECKER KRİTERLERİ (BU ADIM)**

✔ auth/selectors.js var

✔ 3 selector export edilmiş

✔ İsimler birebir

---

## **🔍 HIZLI TEST**

Hiçbir yerde import etmesek bile:

```
npm run dev
```

çalışmalı.

---