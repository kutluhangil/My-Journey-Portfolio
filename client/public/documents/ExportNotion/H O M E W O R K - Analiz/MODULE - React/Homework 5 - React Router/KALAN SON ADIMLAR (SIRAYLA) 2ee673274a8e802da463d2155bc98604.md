# KALAN SON ADIMLAR (SIRAYLA)

1. **MoviesPage – search + query string davranışını son kez kontrol**
2. **Go back davranışının doğru çalıştığını doğrulama**
3. **NotFoundPage kontrolü**
4. **README.md (HTML formatında)**
5. **Final checklist (ödev teslim kriterleri)**

Şimdi **ADIM ADIM** gidelim.

---

# **🔹 ADIM 9 — MoviesPage (SON KONTROL)**

Eğer sende farklıysa, aşağıdaki **referans doğru versiyon** ile karşılaştır.

### **src/pages/MoviesPage/MoviesPage.jsx**

```
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/tmdb-api";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    async function loadMovies() {
      try {
        setLoading(true);
        const data = await searchMovies(query);
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    if (!value) return;

    setSearchParams({ query: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="search" defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong 😢</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
```

✔ URL şu şekilde olmalı:

```
/movies?query=batman
```

✔ Sayfa refresh olunca sonuçlar kaybolmamalı

---

# **🔹 ADIM 10 — Go Back DAVRANIŞI (ZATEN DOĞRU 👍)**

Senin çözdüğün yöntem **doğru ve ödev kriterlerine uygun**:

- location.state varsa → oraya dön
- Yoksa → /movies

Bu kısım artık **tamam** ✅

---

# **🔹 ADIM 11 — NotFoundPage**

### **src/pages/NotFoundPage/NotFoundPage.jsx**

```
export default function NotFoundPage() {
  return <p>Page not found 😢</p>;
}
```

✔ /asdasdasd → Home’a değil, bu sayfaya düşmeli

---

# **🔹 ADIM 12 — README.md (HTML FORMATINDA)**

Şimdi **HW-05 için README** yazıyoruz.

Aşağıdaki dosyayı **README.md** olarak kaydet ⬇️

---

## **📄 README.md (HTML)**

```
<h1>🎬 React Homework 05 — Movie Search Application</h1>

<p>
This project is a movie search application built with React.
The main goal of this homework is to practice working with
<strong>React Router</strong>, <strong>HTTP requests</strong>,
<strong>query parameters</strong>, and <strong>lazy-loaded routes</strong>.
</p>

<hr />

<h2>🔗 Project Links</h2>

<ul>
  <li>
    <strong>GitHub Repository:</strong>
    <a href="https://github.com/YOUR_USERNAME/goit-react-hw-05" target="_blank">
      https://github.com/YOUR_USERNAME/goit-react-hw-05
    </a>
  </li>
  <li>
    <strong>Live Demo (Vercel):</strong>
    <a href="https://YOUR_PROJECT.vercel.app" target="_blank">
      https://YOUR_PROJECT.vercel.app
    </a>
  </li>
</ul>

<hr />

<h2>🛠️ Technologies Used</h2>

<ul>
  <li>React</li>
  <li>Vite</li>
  <li>React Router DOM</li>
  <li>Axios</li>
  <li>TMDB API</li>
  <li>CSS Modules</li>
</ul>

<hr />

<h2>📌 Application Description</h2>

<p>
The application allows users to search for movies and view detailed information
about each movie. Data is fetched from the
<a href="https://www.themoviedb.org/" target="_blank">TMDB API</a>.
</p>

<p>Main features include:</p>

<ul>
  <li>Trending movies on the home page</li>
  <li>Movie search with query parameters</li>
  <li>Movie details page</li>
  <li>Nested routes for cast and reviews</li>
  <li>Go back navigation preserving previous location</li>
  <li>Lazy-loaded routes using React.lazy and Suspense</li>
</ul>

<hr />

<h2>🧭 Routing Structure</h2>

<ul>
  <li><code>/</code> — Home page with trending movies</li>
  <li><code>/movies</code> — Movie search page</li>
  <li><code>/movies/:movieId</code> — Movie details page</li>
  <li><code>/movies/:movieId/cast</code> — Movie cast</li>
  <li><code>/movies/:movieId/reviews</code> — Movie reviews</li>
  <li><code>*</code> — Not found page</li>
</ul>

<hr />

<h2>📂 Project Structure</h2>

<pre>
src/
├── components/
│   ├── MovieCast
│   ├── MovieList
│   ├── MovieReviews
│   └── Navigation
├── pages/
│   ├── HomePage
│   ├── MoviesPage
│   ├── MovieDetailsPage
│   └── NotFoundPage
├── services/
│   └── tmdb-api.js
├── App.jsx
└── main.jsx
</pre>

<hr />

<h2>✅ Final Notes</h2>

<p>
This homework focuses on understanding client-side routing,
working with URL search parameters, nested routes,
and handling asynchronous API requests in React.
</p>

<p>
The project fully meets all homework requirements and runs
without console errors or warnings.
</p>

<p><strong>Happy coding! 🚀</strong></p>
```

---

# **🔹 ADIM 13 — FINAL CHECKLIST ✅**

✔ npm run dev çalışıyor

✔ Vercel çalışıyor

✔ Console error yok

✔ React Router kullanıldı

✔ Lazy loading var

✔ Query string çalışıyor

✔ Nested routes çalışıyor

✔ README HTML formatında

---

## **🏁 SON**

🎉 **goit-react-hw-05 TAMAMLANDI**

İstersen:

- Repo son kontrol
- README linklerini birlikte dolduralım
- Bir sonraki ödeve geçelim (HW-06 Redux / HW-07 Auth vs.)

Ne yapmak istiyorsun? 👇