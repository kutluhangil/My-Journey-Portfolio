# ADIM 3 — TMDB API SERVİSİ + TRENDING FİLMLER

## **3.1 Gerekli paketleri kontrol edelim**

Terminal’de proje kökünde şunu çalıştır:

```
npm install axios
```

> axios yoksa API isteği atamayız.
> 

---

## **3.2 API servis klasörünü oluştur**

**src** altında yeni klasör aç:

```
src/
 └─ services/
     └─ tmdb-api.js
```

---

## **3.3**

## **tmdb-api.js**

## **TAM KOD (birebir kopyala)**

📄 **src/services/tmdb-api.js**

```
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// ⚠️ BURAYA kendi API READ ACCESS TOKEN'INI YAPIŞTIR
const API_TOKEN = "BURAYA_API_READ_ACCESS_TOKEN";

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

// 🔥 Trending movies (HomePage)
export const fetchTrendingMovies = async () => {
  const response = await api.get("/trending/movie/day");
  return response.data.results;
};

// 🔍 Search movies (MoviesPage – ileride)
export const searchMovies = async query => {
  const response = await api.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });

  return response.data.results;
};

// 🎬 Movie details
export const fetchMovieDetails = async movieId => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

// 🎭 Movie cast
export const fetchMovieCast = async movieId => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

// 📝 Movie reviews
export const fetchMovieReviews = async movieId => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
```

> ⚠️
> 
> 
> **ÇOK ÖNEMLİ**
> 

> 
> 

> Buradaki:
> 

```
const API_TOKEN = "BURAYA_API_READ_ACCESS_TOKEN";
```

> yerine
> 
> 
> **TMDB → “API Read Access Token”**
> 
> **uzun token**
> 

> (API Key değil!)
> 

---

## **3.4 HomePage’i gerçek veriyle bağlayalım**

### **Dosya yolu:**

```
src/pages/HomePage/HomePage.jsx
```

### **İçini**

### **tamamen**

### **bununla değiştir 👇**

```
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/tmdb-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadTrending() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (err) {
        setError(true);
      }
    }

    loadTrending();
  }, []);

  if (error) {
    return <p>Something went wrong 😢</p>;
  }

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
```

---

## **3.5 MovieList bileşenini oluştur**

### **Klasör:**

```
src/components/MovieList/
```

### **Dosyalar:**

```
MovieList.jsx
MovieList.module.css
```

---

### **📄**

### **MovieList.jsx**

```
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

> Şimdilik
> 
> 
> **sadece film ismi**
> 

> (poster birazdan gelecek)
> 

---

### **📄**

### **MovieList.module.css**

```
/* Şimdilik boş, tasarım istenmiyor */
```

---

## **3.6 Uygulamayı çalıştır**

```
npm run dev
```

### **/**

### **adresinde şunu görmelisin:**

- **Trending today** başlığı
- Altında **tıklanabilir film isimleri**
- Console’da **hata YOK**

---

## **🎯 Bu adımda NEYİ başardık?**

✅ TMDB API bağlandı

✅ Bearer Token doğru kullanıldı

✅ Axios servis yapısı kuruldu

✅ Trending filmler çekildi

✅ HomePage artık “canlı veri” alıyor

✅ MovieDetails için altyapı hazır

---