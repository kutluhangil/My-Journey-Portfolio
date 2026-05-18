# Ürün Konsepti (Netleştirilmiş)

## **DevResume AI – Tech Resume Optimizer**

Hedef kitle:

- Junior Developer
- Bootcamp student
- Freelance / AI contractor
- Remote job arayan developer

Problem:

> “Başvuruyorum ama geri dönüş alamıyorum.”
> 

Çözüm:

> CV’yi job description’a göre optimize eden ve ATS skor simülasyonu veren tool.
> 

---

# **🧠 MVP Özellik Seti (Para Kazanabilecek Minimum)**

### **1️⃣ Core Feature (Zorunlu)**

- CV paste alanı
- Job description paste alanı
- “Optimize” butonu
- AI output:
    - ATS match score (%)
    - Missing keywords
    - Improved CV version
    - Bullet suggestions

---

### **2️⃣ SaaS Feature (Para için şart)**

- Auth (Google login)
- Usage limit (3 free)
- Credit system
- Stripe ödeme
- Kullanıcı geçmişi (history)

---

# **🏗️ Architecture (İkisi Birden İçin Doğru Yapı)**

## **🔹 Frontend**

- React
- Tailwind
- Zustand (global state için hafif)
- React Router
- Axios

Structure:

```
/pages
  Dashboard
  Optimize
  History
/components
  ScoreCard
  KeywordList
  ImprovedCV
  PricingModal
```

---

## **🔹 Backend**

- Node.js
- Express
- MongoDB (simple & hızlı)
- JWT auth
- Stripe webhook endpoint

Structure:

```
/routes
  auth.js
  optimize.js
  payment.js
/services
  openaiService.js
  atsService.js
  creditService.js
```

---

# **🧮 ATS Score Algoritması (Gerçekçi Ama Basit)**

Gerçek ATS değil → simülasyon.

### **Adımlar:**

1. Job description’dan:
    - Hard skills çıkar
    - Tech keywords çıkar
2. CV içinde eşleşenleri say
3. Match oranı hesapla

Örnek pseudo logic:

```
match = matchedKeywords / totalKeywords * 100
```

Sonra AI ile:

> “Rewrite this resume tailored for this job description…”
> 

---

# **💰 Monetization Model (Gerçekçi)**

Başlangıç:

| **Plan** | **İçerik** | **Fiyat** |
| --- | --- | --- |
| Free | 3 optimize | $0 |
| Starter | 10 | $5 |
| Pro | 50 | $15 |

Sonra:

- Subscription modeli eklenebilir.

---

# **🧩 Portfolio Gücü Nasıl Artar?**

Bu projeyi CV’de böyle yazarsın:

> Built a SaaS platform using React, Node.js, Stripe, and OpenAI API that simulates ATS scoring and AI-powered resume optimization.
> 

Bu seni junior’dan çıkarır.

Bu gerçek product experience olur.

---

# **🚀 Development Roadmap (Gerçekçi 3 Hafta)**

## **Week 1**

- Frontend UI
- Optimize page
- OpenAI integration
- Basit ATS logic

## **Week 2**

- Auth
- Usage limit
- Credit system
- MongoDB

## **Week 3**

- Stripe
- Polish UI
- Landing page
- Deploy (Vercel + Render)

---

# **🔥 En Kritik Karar**

Bunu:

- Global mi yapıyoruz?
- Yoksa “EU / Remote dev jobs” niche mi?

Benim önerim:

👉 “Remote Tech Jobs Resume Optimizer”

Çünkü remote kitle ödeme yapmaya daha yatkın.

---

Şimdi sana net bir soru soracağım:

Bu ürünü tamamen İngilizce mi yapıyoruz

yoksa Türkiye pazarı için mi başlıyoruz?

Strateji burada değişir.