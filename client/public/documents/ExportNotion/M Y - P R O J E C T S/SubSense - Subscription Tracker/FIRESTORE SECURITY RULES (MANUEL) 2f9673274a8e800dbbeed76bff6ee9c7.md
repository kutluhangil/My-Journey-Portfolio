# FIRESTORE SECURITY RULES (MANUEL)

Bu adımı yapmadan **gerçek kullanıcıya açılmaz**.

Ama merak etme, çok net ve kısa.

---

## **1️⃣ Firebase Console’a Gir**

1. Tarayıcıdan şuraya git:
    
    👉 https://console.firebase.google.com
    
2. Projeni seç (SubscriptionHub olan)

---

## **2️⃣ Firestore’a Gir**

Sol menüden:

**Build → Firestore Database**

> Eğer “Create database” diyorsa:
> 
- **Production mode** seç
- Location: *Europe (eur3)* veya *us-central* (fark etmez)
- Continue

---

## **3️⃣ Rules Sekmesine Geç**

Firestore ekranında üstte şunlar var:

- Data
- Indexes
- **Rules** ← buna tıkla ✅

---

## **4️⃣ VAR OLAN RULE’LARI SİL**

Ekranda muhtemelen şuna benzer bir şey göreceksin:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

👉 **Hepsini sil.**

---

## **5️⃣ AŞAĞIDAKİ RULE’U AYNEN YAPIŞTIR**

⚠️ **Hiç değiştirme**

⚠️ **Aynen kopyala–yapıştır**

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // User profile document
    match /users/{userId} {
      allow read, write: if request.auth != null
                         && request.auth.uid == userId;
    }

    // Subscriptions collection (nested or flat)
    match /subscriptions/{subscriptionId} {
      allow read, write: if request.auth != null
                         && request.auth.uid == resource.data.userId;
    }

    // Allow creation if userId matches auth
    match /subscriptions/{subscriptionId} {
      allow create: if request.auth != null
                    && request.auth.uid == request.resource.data.userId;
    }
  }
}
```

---

## **6️⃣ PUBLISH DE**

Sağ üstte:

👉 **Publish** butonuna bas ✅

Firebase sana “Rules published” gibi bir şey gösterecek.

---

# **✅ BU ADIMDAN SONRA NE OLDU?**

✔️ Artık:

- Her kullanıcı **SADECE kendi verisini** görebilir
- Başkasının aboneliğini okuyamaz
- Auth olmadan Firestore’a erişilemez
- Gerçek prod güvenliği var

Bu adım **EN KRİTİK ADIMDI** ve bitti 🎉

---

## **🧠 ŞİMDİ SIRADA NE VAR?**

Bundan sonra **%100 PROMPT MODUNA** geri dönüyoruz.

Önerdiğim sıraya göre:

### **🔜 AŞAMA 2 (Prompt ile)**

**Authentication UI → Firestore’a gerçekten bağlama**

Yani:

- Signup → kullanıcı oluşsun
- Login → kullanıcı gelsin
- Refresh → kullanıcı düşmesin
- Logout → state temizlensin

👉 Bunu **tek bir master prompt** ile yaptıracağız.

---

###