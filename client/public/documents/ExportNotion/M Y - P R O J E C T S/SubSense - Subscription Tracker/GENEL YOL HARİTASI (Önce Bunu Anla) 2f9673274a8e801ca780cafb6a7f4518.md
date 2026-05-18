# GENEL YOL HARİTASI (Önce Bunu Anla)

Backend’i **4 net fazda** kuracağız:

1️⃣ Firebase App Initialization

2️⃣ Firebase Authentication (Login / Signup / Logout)

3️⃣ Firestore Database (User & Subscription Data)

4️⃣ App’i Firebase state’e bağlama (AuthContext)

Her faz:

- 🔹 **Ne yapıyoruz**
- 🔹 **Nereye tıklıyorsun**
- 🔹 **Hangi dosyayı oluşturuyorsun**
- 🔹 **Copy–Paste kod**
    
    şeklinde olacak.
    

---

# **🔥 FAZ 1 — FIREBASE APP INITIALIZATION**

## **🎯 Amaç**

Firebase’i **uygulamaya tanıtmak**

(Bu olmadan Auth / Firestore çalışmaz)

---

## **✅ ADIM 1 — Firebase SDK zaten yüklü mü?**

Sen zaten şunu yapmışsın:

```
npm install firebase
```

✔️ Doğru

✔️ Tekrar yapmana gerek yok

---

## **✅ ADIM 2 — Firebase klasör yapısını oluştur**

### **📁 Android Studio / VS Code içinde:**

```
src/
 └── firebase/
      └── firebase.ts
```

> Eğer firebase klasörü yoksa:
> 
- Sağ tık → New Folder → firebase
- İçine firebase.ts

---

## **✅ ADIM 3 — firebase.ts DOSYASINI OLUŞTUR (COPY–PASTE)**

👉 **src/firebase/firebase.ts**

```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔐 Firebase Config (ENV’den okunur)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// 🧠 Güvenlik: Eksik ENV varsa crash etme
if (!firebaseConfig.apiKey) {
  console.warn(
    "[Firebase] Missing ENV variables. Auth will not work until .env is configured."
  );
}

// 🚀 Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// 🔑 Services
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
```

📌 **Bu dosya Firebase’in kalbi.**

---

## **✅ ADIM 4 — .env DOSYANI KONTROL ET**

👉 **Proje root’unda .env**

Şuna BENZER olmalı (sen zaten yapmışsın):

```
VITE_FIREBASE_API_KEY=AIzaSy....
VITE_FIREBASE_AUTH_DOMAIN=subscriptionhub-xxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=subscriptionhub-xxxx
VITE_FIREBASE_STORAGE_BUCKET=subscriptionhub-xxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

⚠️ **VITE_ prefix’i ÇOK ÖNEMLİ**

> Vite yalnızca VITE_ ile başlayan env’leri okur
> 

---

## **🧪 BU FAZIN BAŞARILI OLDUĞUNU NASIL ANLARSIN?**

- App açılıyor (UI)
- Console’da:
    - ❌ auth/invalid-api-key **yok**
    - ⚠️ Sadece warning olabilir (normal)

---

## **🟢 FAZ 1 TAMAMLANDI 🎉**

✔️ Firebase app initialize edildi

✔️ Auth ve Firestore erişilebilir

✔️ Crash-safe yapı kuruldu

---

# **⏭️ SIRADAKİ FAZ (FAZ 2)**

### **🔐**

### **Firebase Authentication Entegrasyonu**

Şunları yapacağız:

- AuthContext’i Firebase’e bağlayacağız
- signUp(email, password)
- login(email, password)
- logout()
- onAuthStateChanged

---

## **❓ DEVAM EDELİM Mİ?**

Bana sadece şunu yaz:

> “FAZ 2’ye geçelim (Firebase Auth)”
> 

Bunu dediğin anda:

- Yine **adım adım**
- Yine **copy–paste**
- Yine **neden yaptığını anlatarak**

devam edeceğim 💪