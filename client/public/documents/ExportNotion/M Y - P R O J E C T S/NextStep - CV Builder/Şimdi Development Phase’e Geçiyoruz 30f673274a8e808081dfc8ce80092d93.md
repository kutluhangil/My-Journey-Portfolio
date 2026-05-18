# Şimdi Development Phase’e Geçiyoruz

Artık tasarım düşünmeyeceğiz.

Artık sistem kuracağız.

Kutluhan, buradan sonra iş ciddileşiyor.

---

# **🏗️ ADIM 1 — GitHub Repo Setup Plan**

Repo adı önerim:

```
remote-tech-resume-optimizer
```

Structure:

```
remote-tech-resume-optimizer/
│
├── client/        (React frontend)
├── server/        (Node.js backend)
├── README.md
└── .gitignore
```

Monorepo yapıyoruz. Daha temiz.

---

# **⚛️ Frontend Architecture (React + Vite)**

Inside /client:

```
src/
│
├── app/
│   ├── routes/
│   ├── layouts/
│   └── providers/
│
├── components/
│   ├── ui/          (Button, Card, Input, Badge)
│   ├── dashboard/
│   ├── optimize/
│   ├── results/
│   └── pricing/
│
├── pages/
│   ├── Landing.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Optimize.jsx
│   ├── Results.jsx
│   ├── History.jsx
│   ├── Pricing.jsx
│   └── Profile.jsx
│
├── services/
│   ├── api.js
│   ├── authService.js
│   └── optimizeService.js
│
├── store/ (Zustand)
│   ├── authStore.js
│   ├── creditStore.js
│   └── optimizationStore.js
│
├── i18n/
│
└── styles/
```

---

# **🎨 UI Component Strategy**

Önce global UI atomlarını yapacağız:

- Button
- Card
- Input
- TextArea
- Badge
- ScoreDisplay

Design system zaten hazır.

Bu yüzden Tailwind config’e renkleri tanımlayacağız.

---

# **🧠 Backend Architecture**

Inside /server:

```
src/
│
├── routes/
│   ├── auth.js
│   ├── optimize.js
│   ├── history.js
│   └── payment.js
│
├── controllers/
│
├── services/
│   ├── openaiService.js
│   ├── atsService.js
│   ├── creditService.js
│   └── stripeService.js
│
├── models/
│   ├── User.js
│   └── Optimization.js
│
└── middleware/
    └── authMiddleware.js
```

DB: MongoDB (MVP için hızlı)

---

# **🔥 Development Sprint Plan**

## **Sprint 1 (Frontend Skeleton)**

- Routing
- Layout system
- Global UI components
- Static pages (design to code)

## **Sprint 2 (Core Feature)**

- Optimize API
- ATS simulation
- OpenAI integration
- Results rendering

## **Sprint 3 (Auth + Credits)**

- Register/Login
- JWT
- Credit decrement logic
- History save

## **Sprint 4 (Stripe)**

- Subscription
- Webhook
- Plan upgrade logic

---

# **⚡ Şimdi Sana Soru**

Antigravity’de kodlayacağın için şunu netleştirelim:

Frontend için:

1️⃣ Vite + React

2️⃣ Next.js

Benim önerim:

👉 Vite + React (backend ayrı olacak zaten)

Net karar verelim.

Sonra ilk commit planını adım adım çıkarıyorum.

Artık tasarım değil, mühendislik zamanı.