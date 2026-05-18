# AUTH SİSTEMİ — BÜYÜK RESİM DİYAGRAMI

## **🧠 Aktörler**

- 👤 User (Tarayıcı)
- ⚛️ React App (Frontend)
- 🌐 API (Backend)
- 🗄️ Database

---

## **1️⃣ LOGIN AKIŞI (İlk Giriş)**

```
👤 USER
   |
   |  email + password
   v
⚛️ FRONTEND (Login Form)
   |
   |  POST /login
   v
🌐 BACKEND
   |
   |  credentials doğrula
   v
🗄️ DATABASE
   |
   |  ✔️ kullanıcı geçerli
   v
🌐 BACKEND
   |
   |  accessToken (15 dk)
   |  refreshToken (7 gün)
   v
⚛️ FRONTEND
   |
   |  store.auth içine kaydet
   v
👤 USER (LOGIN OLDU ✅)
```

📌 **Önemli**

- Şifre **frontend’de saklanmaz**
- Token **backend üretir**

---

## **2️⃣ NORMAL API İSTEĞİ (TOKEN GEÇERLİ)**

```
⚛️ FRONTEND
   |
   |  GET /tasks
   |  Authorization: Bearer accessToken
   v
🌐 BACKEND
   |
   |  token geçerli mi?
   v
🗄️ DATABASE
   |
   |  veriler
   v
🌐 BACKEND
   |
   v
⚛️ FRONTEND
```

📌 Kullanıcı hiçbir şey fark etmez

📌 Her şey sorunsuz

---

## **3️⃣ TOKEN SÜRESİ BİTER (KRİTİK AN)**

```
⚛️ FRONTEND
   |
   |  GET /tasks
   |  Authorization: Bearer ❌expiredToken
   v
🌐 BACKEND
   |
   |  401 Unauthorized ❌
   v
⚛️ FRONTEND (AXIOS INTERCEPTOR)
```

🔥 **İşte gerçek hayat burada başlar**

---

## **4️⃣ REFRESH TOKEN DEVREYE GİRER (OTOMATİK)**

```
⚛️ FRONTEND
   |
   |  POST /refresh
   |  refreshToken
   v
🌐 BACKEND
   |
   |  refreshToken geçerli mi?
   v
🗄️ DATABASE
   |
   |  ✔️
   v
🌐 BACKEND
   |
   |  NEW accessToken
   v
⚛️ FRONTEND
   |
   |  accessToken güncelle
   v
⚛️ FRONTEND
   |
   |  ESKİ isteği TEKRARLA
   v
🌐 BACKEND
```

📌 Kullanıcı **hiç logout olmaz**

📌 Profesyonel uygulamalar böyle çalışır

---

## **5️⃣ REFRESH TOKEN DE BİTERSE (LOGOUT)**

```
🌐 BACKEND
   |
   |  refresh token invalid
   v
⚛️ FRONTEND
   |
   |  auth state temizle
   |  redirect /login
   v
👤 USER (Login sayfası)
```

---

# **🛡️ PROTECTED ROUTE DİYAGRAMI**

```
User → /dashboard
        |
        v
   isLoggedIn ?
     /     \
   yes     no
    |       |
    v       v
 Dashboard  /login
```

---

# **👮 ROLE BASED AUTH (ADMIN / USER)**

```
User → /admin
        |
        v
   role === "admin" ?
     /         \
   yes         no
    |           |
    v           v
 AdminPanel   Access Denied
```

---

# **🧠 TEK SAYFALIK EZBER**

```
LOGIN → access + refresh
API → accessToken
401 → refreshToken
refresh OK → devam
refresh FAIL → logout
```

---

# **🎯 SEN ŞU AN NEYİ ÖĞRENDİN?**

| **Konu** | **Seviye** |
| --- | --- |
| JWT | ✔️ |
| Refresh Token | ✔️ |
| Interceptor | ✔️ |
| Protected Route | ✔️ |
| Role-based auth | ✔️ |
| Gerçek mimari | 🔥 |

---