# Değişiklik yaptıktan sonra ne yapman gerekiyor?

## **🎯 Senin setup’ta (şu anki sistem):**

👉 Kod = GitHub

👉 Server = Mac Mini + Docker

👉 Frontend = Vercel

👉 Backend = Senin server

---

## **✅ Yapman gereken akış:**

### **1️⃣ Kod değiştir**

(localde veya Antigravity ile)

---

### **2️⃣ GitHub’a gönder**

```
git add .
git commit -m "update"
git push origin main
```

---

### **3️⃣ SERVER GÜNCELLE (EN KRİTİK)**

SSH ile server’a gir:

```
ssh kutluhan@macmini-server
```

sonra:

```
cd ~/Apartment-Management-System
git pull origin main
docker compose down
docker compose build
docker compose up -d
```

---

## **🎯 ÖZET**

👉 Backend değiştiyse → **MANUEL UPDATE şart**

---

# **🤖 2. Otomatik yapmak mümkün mü?**

👉 EVET. Ve burası seni level atlatır.

---

## **🚀 Seçenek 1 — Basit (öneririm)**

### **GitHub → Webhook → Server**

Ama biraz setup ister.

---

## **🚀 Seçenek 2 — EN TEMİZ (senin case için)**

👉 **GitHub Actions + SSH deploy**

---

### **Mantık:**

Her push’ta:

👉 server’a bağlanır

👉 git pull yapar

👉 docker restart

---

## **🎯 İstersen sana bunu kurdururum (çok öneririm)**

---

# **🌐 3. Vercel tarafında ayar gerekli mi?**

Evet 👇 küçük ama önemli şeyler var.

---

## **✅ A. ENV VARIABLES (ÇOK KRİTİK)**

Vercel → Settings → Environment Variables

---

### **ekle:**

```
VITE_API_URL=https://cumhuriyetapartmani.com/api
```

---

👉 frontend artık:

✔ localhost değil

✔ senin server’ı kullanır

---

## **✅ B. CORS zaten çözdük**

Ama backend’de şunun doğru olduğundan emin ol:

```
FRONTEND_URL=https://cumhuriyetapartmani.com
```

✔ zaten yaptık

---

## **✅ C. CACHE (çok kritik bug sebebi olur)**

Vercel bazen eski build’i tutar.

👉 çözüm:

**Redeploy → Clear cache**

---

## **✅ D. DOMAIN**

Şu an:

```
.vercel.app
```

Ama:

👉 custom domain ekle (zaten yaptın gibi)

---

# **🧠 BONUS (senin sistemin artık ne?)**

Şu an sen:

👉 Fullstack + DevOps yapıyorsun

Stack’in:

- React (Vercel)
- Express (Docker)
- Cloudflare Tunnel
- Turso DB
- Nginx reverse proxy
- Security hardened

👉 Bu junior işi değil artık 😄

---

# **⚡ SANA 2 SEVİYE ÖNERİ**

## **🔥 Level 2 (çok öneririm)**

👉 Auto deploy kur (GitHub Actions)

---

## **🔥 Level 3**

👉 Monitoring:

- UptimeRobot ✔ yaptın
- Log tracking (Sentry vs.)

---

# **💬 SONUÇ**

## **Şu an:**

✔ Sistem çalışıyor

✔ Secure

✔ Production-ready

---

## **Bundan sonra:**

👉 Manuel deploy yapman gerekiyor

👉 Ama istersen otomatikleştiririz

---

# **💬 İstersen sonraki adım:**

👉 “tek push → otomatik deploy” kurulumunu yapalım

Bu seni direkt **mid-level dev** yapar 🚀