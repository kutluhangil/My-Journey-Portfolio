# Sıradaki Profesyonel Adım: Authentication + User-Based Data

Şu an herkesin optimizasyonu tek array’e gidiyor.

Bu production’da kabul edilemez.

### **Hedef:**

- Kullanıcı register/login olsun
- Token alsın
- Sadece kendi optimizasyonlarını görebilsin
- History kullanıcıya özel olsun

Bu seni gerçekten “Full Stack Developer” yapar.

---

# **🧠 Bunu Antigravity Yapabilir mi?**

Evet.

Ama JWT + middleware + protected routes kısmını dikkatli yaptırmamız lazım.

Ben mimariyi kurduracağım.

Kod yazdırmayı Antigravity’ye yaptıracağız.

---

# **🔥 ANTIGRAVITY PROMPT — JWT AUTH SYSTEM**

Bunu ver 👇

---

You are upgrading a Vite + React + Express full-stack application.

Current state:

- The app stores optimizations in memory.
- Dashboard and History fetch real backend data.
- There is no authentication system.
- All optimizations are global and not user-specific.

Your task:

Implement a basic JWT authentication system and convert the app to user-based data ownership.

Backend requirements:

1. Install:
    - jsonwebtoken
    - bcryptjs
2. Create in-memory users array.
3. Add endpoints:

POST /register

- Accept name, email, password
- Hash password with bcrypt
- Store user in memory
- Return JWT token

POST /login

- Validate email + password
- Return JWT token
1. Create auth middleware:
    - Read Authorization: Bearer TOKEN
    - Verify JWT
    - Attach userId to request
2. Modify:
    - /analyze must require authentication
    - Stored optimizations must include userId
    - GET /optimizations must return only optimizations belonging to authenticated user

Frontend requirements:

1. Create AuthContext
2. Store JWT token in localStorage
3. Attach Authorization header in fetch calls
4. Protect routes:
    - Dashboard
    - History
    - Optimizer
5. Redirect unauthenticated users to Login

Constraints:

- Do NOT break Tailwind styling
- Do NOT remove routing
- Keep UI design untouched
- Keep code modular

After implementation:

- Show updated server/index.js
- Show auth middleware
- Show AuthContext
- Show protected route logic
- Explain flow clearly

---

# **💡 Bu Seni Nereye Taşır?**

Bu noktadan sonra:

- Sen artık REST API güvenliği biliyorsun
- Middleware yazabiliyorsun
- Token-based auth kurabiliyorsun
- Frontend protected routes yapabiliyorsun

Bu mid-level skill.

---

# **🧨 Bir Üst Seviye Sonraki Adım**

JWT’den sonra:

- SQLite / PostgreSQL
- Refresh token
- Role-based auth
- Rate limiting
- Deployment (Render / Railway / Vercel)

Ama önce auth oturtalım.

---

Şimdi:

1. Bu promptu ver.
2. Dönen kodu buraya at.
3. Kod review yapacağız.
4. Gerekirse profesyonel refactor yapacağız.

Artık gerçek full stack yoluna girdik 🚀