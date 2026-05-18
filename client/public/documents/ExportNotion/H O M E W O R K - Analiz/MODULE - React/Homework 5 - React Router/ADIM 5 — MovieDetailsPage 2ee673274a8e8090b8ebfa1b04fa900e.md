# ADIM 5 — MovieDetailsPage

## **🎯 Bu adımda ne yapıyoruz?**

- URL’den **movieId** alıyoruz
- TMDB’den **film detaylarını** çekiyoruz
- **Go back** link’i ekliyoruz (çok önemli)
- **Cast** ve **Reviews** için **nested routing** hazırlıyoruz
- Outlet kullanıyoruz

---

## **1️⃣ Dosya yapısını kontrol et**

Şu yapı **zorunlu**:

```
src/
 └─ pages/
    └─ MovieDetailsPage/
       ├─ MovieDetailsPage.jsx
       └─ MovieDetailsPage.module.css
```

---

## **2️⃣ MovieDetailsPage.jsx — TAM KOD**

📄 **src/pages/MovieDetailsPage/MovieDetailsPage.jsx**

> ⚠️
> 
> 
> **Birebir kopyala**
> 

```
import { useEffect, useState, useRef } from "react";
import { NavLink, Outlet, useParams, useLocation, Link } from "react-router-dom";
import { fetchMovieDetails } from "../../services/tmdb-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();

  // 🔙 Geri dönüş linki (state yoksa /movies)
  const backLinkRef = useRef(location.state ?? "/movies");

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadMovie() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch {
        setError(true);
      }
    }

    loadMovie();
  }, [movieId]);

  if (error) {
    return <p>Something went wrong 😢</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <div>
      {/* 🔙 Go back */}
      <Link to={backLinkRef.current}>← Go back</Link>

      <div>
        <img src={posterUrl} alt={movie.title} width={250} />
        <h2>{movie.title}</h2>
        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>

        <h3>Genres</h3>
        <p>{movie.genres.map(g => g.name).join(", ")}</p>
      </div>

      <hr />

      {/* 🔗 Nested navigation */}
      <nav>
        <NavLink to="cast">Cast</NavLink> |{" "}
        <NavLink to="reviews">Reviews</NavLink>
      </nav>

      {/* 🔽 Nested routes render here */}
      <Outlet />
    </div>
  );
}
```

---

## **3️⃣ Bu dosyada NELERİ karşıladık? ✅**

✔ useParams → movieId

✔ useEffect → movieId değişince istek

✔ useLocation → geldiği sayfayı bilmek için

✔ useRef → **sayfa yenilense bile Go back çalışsın**

✔ NavLink → cast / reviews

✔ Outlet → alt sayfalar burada render edilir

✔ Poster URL → **TMDB image docs doğru kullanıldı**

---

## **4️⃣ App.jsx içinde route TANIMI (kontrol)**

📄 **src/App.jsx** içinde **şu yapı olmalı**:

```
<Route path="/movies/:movieId" element={<MovieDetailsPage />}>
  <Route path="cast" element={<MovieCast />} />
  <Route path="reviews" element={<MovieReviews />} />
</Route>
```

> Eğer bu yoksa → Cast & Reviews ASLA görünmez ❗
> 

---

## **5️⃣ Şu an ne çalışıyor olmalı?**

- /movies/:movieId → film detayları
- Go back → geldiğin yere dönüyor
- Cast / Reviews linkleri çalışıyor (ama içerik henüz yok)

🎯 **Bir sonraki adımda bu linklerin içini dolduracağız**

---

##