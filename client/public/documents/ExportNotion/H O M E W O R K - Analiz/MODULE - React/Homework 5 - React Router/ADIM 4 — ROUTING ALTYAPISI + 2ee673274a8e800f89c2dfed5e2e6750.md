# ADIM 4 — ROUTING ALTYAPISI +

# **React.lazy**

Bu adımda **şunları yapacağız**:

✔ Navigation bileşeni

✔ App.jsx → Routes / Route

✔ React.lazy + Suspense

✔ Zorunlu sayfaların iskeleti

✔ Hiç API yok (sadece yapı)

---

## **4.1 Navigation bileşeni**

### **Klasör oluştur**

```
src/components/Navigation
```

### **Dosyalar**

```
Navigation.jsx
Navigation.module.css
```

---

### **📄**

### **Navigation.jsx**

### **(birebir kopyala)**

```
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>{" "}
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
}
```

---

### **📄**

### **Navigation.module.css**

```
/* Basit bırakıyoruz */
```

---

## **4.2 Zorunlu Pages klasörünü oluştur**

```
src/pages/
 ├─ HomePage/
 ├─ MoviesPage/
 ├─ MovieDetailsPage/
 └─ NotFoundPage/
```

Her klasörde **2 dosya olacak**.

---

## **4.3 MoviesPage (şimdilik boş iskelet)**

### **📄**

### **src/pages/MoviesPage/MoviesPage.jsx**

```
export default function MoviesPage() {
  return (
    <div>
      <h1>Search movies</h1>
    </div>
  );
}
```

### **📄**

### **MoviesPage.module.css**

```

```

---

## **4.4 MovieDetailsPage (şimdilik iskelet)**

### **📄**

### **src/pages/MovieDetailsPage/MovieDetailsPage.jsx**

```
export default function MovieDetailsPage() {
  return (
    <div>
      <h1>Movie details</h1>
    </div>
  );
}
```

### **📄**

### **MovieDetailsPage.module.css**

```

```

---

## **4.5 NotFoundPage**

### **📄**

### **src/pages/NotFoundPage/NotFoundPage.jsx**

```
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Go home</Link>
    </div>
  );
}
```

### **📄**

### **NotFoundPage.module.css**

```

```

---

## **4.6 App.jsx → Lazy Routing (EN ÖNEMLİ KISIM)**

### **📄**

### **src/App.jsx**

**TAMAMEN bununla değiştir**

```
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
```

---

## **4.7 Kontrol listesi (DUR ve KONTROL ET)**

Tarayıcıda tek tek kontrol et:

| **URL** | **Beklenen** |
| --- | --- |
| / | Trending today |
| /movies | “Search movies” |
| /movies/123 | “Movie details” |
| /asdasd | NotFoundPage |
| Navbar | Home / Movies çalışıyor |

❗ Console **HİÇ HATA VERMEMELİ**

---

## **🎯 Bu adımda ne kazandık?**

✔ React Router kurulumu tamam

✔ Lazy loading zorunluluğu sağlandı

✔ Navigation kriteri tamam

✔ Pages yapısı **tam LMS uyumlu**

✔ Kritik hata ihtimali sıfırlandı

---