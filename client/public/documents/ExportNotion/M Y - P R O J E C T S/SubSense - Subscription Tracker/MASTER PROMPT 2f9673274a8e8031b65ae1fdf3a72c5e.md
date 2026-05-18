# MASTER PROMPT

## **Auth (Login / Signup) → Firestore’a Gerçek Bağlantı**

```
You are now implementing a REAL Firebase Authentication + Firestore integration.
This is no longer a demo or mock.

Context:
- Frontend: React + Vite + TypeScript
- State management: React Context
- Backend: Firebase Authentication (Email/Password) + Firestore
- Firestore rules are already production-safe:
  - Users can only read/write their own documents
- Environment variables are already configured via VITE_FIREBASE_*

GOAL:
Make Login / Signup fully functional, persistent, and production-ready.

--------------------------------
REQUIREMENTS (VERY IMPORTANT)
--------------------------------

1. AUTHENTICATION FLOW (CORE)
- Implement real signup with Firebase Auth (email + password)
- Implement real login with Firebase Auth
- Implement logout
- Persist auth state across refresh using Firebase onAuthStateChanged
- Never rely on fake users, hardcoded credentials, or mock logic

--------------------------------
2. SIGNUP FLOW (CRITICAL)
--------------------------------
When a user signs up:

A. Create Firebase Auth user with:
   - email
   - password

B. Immediately after successful signup:
   - Create a Firestore document at:
     collection: `users`
     documentId: auth.uid

C. The user document MUST be initialized with this structure:

{
  uid: string,
  email: string,
  displayName: string | null,
  createdAt: serverTimestamp(),

  preferences: {
    language: "en" | "tr",
    theme: "light" | "dark" | "system",
    baseCurrency: "USD" | "TRY" | "EUR" | etc,
    region: "US" | "TR" | etc
  },

  stats: {
    totalSubscriptions: 0,
    monthlySpend: 0,
    annualSpend: 0
  }
}

D. This Firestore document must be created ONLY ONCE.
   - Never overwrite it on future logins.

--------------------------------
3. LOGIN FLOW
--------------------------------
- Login must authenticate with Firebase Auth
- After login:
  - Load the user's Firestore document
  - Hydrate global app state from Firestore
    (language, theme, currency, region)

--------------------------------
4. AUTH CONTEXT (ARCHITECTURE)
--------------------------------
Update / create a proper AuthContext:

AuthContext must expose:
- user (Firebase user or null)
- userProfile (Firestore user document or null)
- loading (boolean)
- signup(email, password)
- login(email, password)
- logout()

Rules:
- App must NOT render protected pages until auth state is resolved
- Use onAuthStateChanged to restore session on refresh
- Show loading state while auth is initializing

--------------------------------
5. UI BEHAVIOR
--------------------------------
- Login screen:
  - If user is already authenticated → redirect to Dashboard
- Signup screen:
  - On success → auto-login + redirect to Dashboard
- Logout:
  - Clear all user-related state
  - Redirect to Login

--------------------------------
6. FIRESTORE UTILITIES
--------------------------------
- Create reusable helpers:
  - createUserDocument(uid, data)
  - getUserDocument(uid)
- Use serverTimestamp() for createdAt
- Never store sensitive data in Firestore

--------------------------------
7. STRICT RULES
--------------------------------
- DO NOT add fake delays
- DO NOT add placeholder users
- DO NOT bypass Firebase Auth
- DO NOT hardcode credentials
- DO NOT weaken Firestore rules

--------------------------------
8. FINAL VERIFICATION (SELF CHECK)
--------------------------------
After implementation, verify:

- Signup creates:
  ✅ Firebase Auth user
  ✅ Firestore /users/{uid} document

- Login:
  ✅ Restores session after refresh
  ✅ Loads user preferences correctly

- Logout:
  ✅ Clears session
  ✅ Prevents Firestore access

--------------------------------
OUTPUT EXPECTATION
--------------------------------
- Update existing files if present
- Create missing files if needed
- Keep code clean, typed, and readable
- Do NOT explain concepts
- Just implement correctly

This is production-ready auth. Act accordingly.
```

---

## **🧠 BU PROMPT NE YAPAR?**

Bu prompt:

✔️ Gerçek Firebase Auth bağlar

✔️ Signup → Firestore user doc oluşturur

✔️ Login → Firestore’dan kullanıcıyı çeker

✔️ Refresh’te login düşmez

✔️ Sahte kullanıcıyı **tamamen bitirir**

✔️ MVP → gerçek ürün seviyesine çıkarır

---

##