# Vercel + React (Vite) – Doğru Çalışma Rehberi

---

---

## **❗ En Temel Kural (Bunu Ezberle)**

> Vercel SADECE gerçek bir proje deploy eder.
> 

> Yani repo içinde
> 
> 
> **package.json yoksa → deploy YOK.**
> 

---

## **🧱 Doğru Sıra (ASLA değiştirme)**

### **1️⃣ GitHub Repo Oluştur**

- Repo adı: goit-react-hw-02
- Boş repo olabilir ✔

⚠️ **Burada durma. Repo tek başına yetmez.**

---

### **2️⃣ Repo’yu Bilgisayara Klonla**

```
git clone https://github.com/kutluhangil/goit-react-hw-02.git
cd goit-react-hw-02
```

---

### **3️⃣ Vite + React Projesini O REPOYA Kur**

🔥 En kritik adım 🔥

```
npm create vite@latest .
```

Seçimler:

- Framework → **React**
- Variant → **JavaScript**

Bu adım şunları oluşturur:

- package.json ✅
- vite.config.js
- src/
- index.html

---

### **4️⃣ Bağımlılıkları Kur**

```
npm install
```

---

### **5️⃣ Projenin Çalıştığını Kontrol Et**

```
npm run dev
```

Tarayıcı açılıyorsa → **her şey yolunda** ✅

---

### **6️⃣ components Yapısını Oluştur (Ödev Standardı)**

```
mkdir src/components
```

Her bileşen için:

```
src/components/Profile/
 ├─ Profile.jsx
 └─ Profile.module.css
```

---

### **7️⃣ GitHub’a Gönder (ÇOK ÖNEMLİ)**

⚠️ Vercel **bilgisayarını değil**, **GitHub’ı okur**.

```
git add .
git commit -m "init: vite react project"
git push
```

---

## **🌍 ŞİMDİ Vercel AŞAMASI**

### **8️⃣ Vercel → New Project**

- Repo’yu seç
- Framework: **Vite**

Vercel genelde otomatik doldurur ama kontrol et:

| **Ayar** | **Değer** |
| --- | --- |
| Build Command | npm run build |
| Output Directory | dist |
| Install Command | npm install |

---

### **9️⃣ Deploy 🎉**

Eğer:

- package.json varsa
- npm run build lokal çalışıyorsa

➡️ **Deploy %99 sorunsuz olur**

---

## **❌ En Sık Yapılan HATALAR**

❌ Sadece repo oluşturup Vercel’e gitmek

❌ Vite kurmadan deploy etmeye çalışmak

❌ git push yapmadan Vercel’e bakmak

❌ package.json’ın GitHub’da olduğunu sanmak

---

## **✅ KONTROL LİSTESİ (Deploy Öncesi)**

Deploy’den önce kendine sor:

- Repo içinde package.json var mı?
- npm run dev çalışıyor mu?
- npm run build hata vermiyor mu?
- Son değişiklikleri **git push** yaptım mı?

Hepsi **Evet** → Deploy et ✅

---