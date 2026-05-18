# ADIM 2 — PROJE YAPISINI DOĞRU KURMA (EN KRİTİK ADIM)

GOIT bu ödevde en çok **şuna bakar**:

- Dosyalar doğru yerde mi?
- Pages / Components ayrımı doğru mu?
- Router mantığı temiz mi?

Bu yüzden bu adımı **kusursuz** yapıyoruz.

---

## **1️⃣**

## **src**

## **KLASÖRÜNÜN SON HALİ**

Şu yapıyı **birebir** oluşturuyorsun:

```
src/
├── components/
│   ├── Navigation/
│   │   ├── Navigation.jsx
│   │   └── Navigation.module.css
│   ├── MovieList/
│   │   ├── MovieList.jsx
│   │   └── MovieList.module.css
│   ├── MovieCast/
│   │   ├── MovieCast.jsx
│   │   └── MovieCast.module.css
│   └── MovieReviews/
│       ├── MovieReviews.jsx
│       └── MovieReviews.module.css
│
├── pages/
│   ├── HomePage/
│   │   ├── HomePage.jsx
│   │   └── HomePage.module.css
│   ├── MoviesPage/
│   │   ├── MoviesPage.jsx
│   │   └── MoviesPage.module.css
│   ├── MovieDetailsPage/
│   │   ├── MovieDetailsPage.jsx
│   │   └── MovieDetailsPage.module.css
│   └── NotFoundPage/
│       ├── NotFoundPage.jsx
│       └── NotFoundPage.module.css
│
├── services/
│   └── tmdb-api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

📌 **ÖNEMLİ**

- MovieCast ve MovieReviews **page değildir**
- Bu yüzden **components içinde durur**
- GOIT bunu özellikle ister

---

## **2️⃣ Navigation Bileşeni (sadece menü)**

### **components/Navigation/Navigation.jsx**

```
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.link}>
        Movies
      </NavLink>
    </nav>
  );
}
```

📌 Henüz stil önemli değil

📌 Sadece **NavLink** kullanılması önemli

---

## **3️⃣ Page Bileşenleri (ŞİMDİLİK BOŞ)**

### **pages/HomePage/HomePage.jsx**

```
export default function HomePage() {
  return <h1>Trending today</h1>;
}
```

---

### **pages/MoviesPage/MoviesPage.jsx**

```
export default function MoviesPage() {
  return <h1>Search movies</h1>;
}
```

---

### **pages/MovieDetailsPage/MovieDetailsPage.jsx**

```
export default function MovieDetailsPage() {
  return <h1>Movie details</h1>;
}
```

---

### **pages/NotFoundPage/NotFoundPage.jsx**

```
export default function NotFoundPage() {
  return <h1>Page not found</h1>;
}
```

---

## **4️⃣ MovieList Bileşeni (şimdilik sadece iskelet)**

### **components/MovieList/MovieList.jsx**

```
export default function MovieList() {
  return <ul></ul>;
}
```

📌 Bunu **HomePage** ve **MoviesPage**’te kullanacağız

📌 Ama **şimdi bağlamıyoruz**

---

## **5️⃣ App.jsx → ROUTER KURULUMU**

### **App.jsx**

### **(ÇOK ÖNEMLİ)**

```
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
```

📌 Alt rotalar (cast, reviews) **henüz yok**

📌 Doğru zamanı var

---

## **6️⃣ main.jsx — BrowserRouter KONTROLÜ**

### **main.jsx**

```
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

# **✅ ADIM 2 BİTTİ Mİ KONTROL LİSTESİ**

Tarayıcıda:

- / → Trending today
- /movies → Search movies
- /movies/123 → Movie details
- /asdasd → Page not found
- Menü çalışıyor mu? → Home / Movies

Bunlar **çalışıyorsa**:

✔️ Router OK

✔️ Yapı OK

✔️ GOIT kriteri OK

---