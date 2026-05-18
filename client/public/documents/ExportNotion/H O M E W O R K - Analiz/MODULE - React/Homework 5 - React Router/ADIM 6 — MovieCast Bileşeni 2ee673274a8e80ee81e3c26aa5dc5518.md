# ADIM 6 — MovieCast Bileşeni

Amaç:

/movies/:movieId/cast rotasında **filmin oyuncu kadrosunu** göstermek.

---

## **1️⃣ Dosya yapısını kontrol et**

Aşağıdaki yapı **birebir** olmalı:

```
src/components/MovieCast/
 ├─ MovieCast.jsx
 └─ MovieCast.module.css
```

---

## **2️⃣ TMDB servis fonksiyonunu ekle**

📄 **src/services/tmdb-api.js**

Dosyada şuna benzer fonksiyonlar var. **En alta bunu ekle:**

```
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization: "Bearer YOUR_API_READ_ACCESS_TOKEN",
  },
};

export async function fetchMovieCast(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return response.data.cast;
}
```

> ⚠️
> 
> 
> **Bearer token**
> 

> Aynı dosyada başka fonksiyonlar varsa sorun yok.
> 

---

## **3️⃣ MovieCast.jsx (ANA KOD)**

📄 **src/components/MovieCast/MovieCast.jsx**

👉 **TAMAMINI SİL – BUNU YAPIŞTIR**

```
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/tmdb-api";

export default function MovieCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCast() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadCast();
  }, [movieId]);

  if (loading) {
    return <p>Loading cast...</p>;
  }

  if (error) {
    return <p>Failed to load cast 😢</p>;
  }

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
```

---

## **4️⃣ MovieCast.module.css (şimdilik boş)**

📄 **src/components/MovieCast/MovieCast.module.css**

```
/* Basic styles (optional for now) */
```

> Bu ödevde tasarım önemli değil ✔️
> 

---

## **5️⃣ MovieDetailsPage’te Outlet VAR MI? (kritik)**

📄 **src/pages/MovieDetailsPage/MovieDetailsPage.jsx**

Bunun **mutlaka** içinde olması lazım:

```
import { Outlet } from "react-router-dom";
```

ve JSX içinde:

```
<Outlet />
```

👉 Yoksa **cast / reviews ASLA görünmez**

---

## **6️⃣ Tarayıcıda test et**

1. /movies → bir filme tıkla
2. Detay sayfasında **Cast** linkine tıkla
3. URL şu olmalı:

```
/movies/12345/cast
```

1. Oyuncu listesi gelmeli

---

## **✅ Bu adımda checklist**

✔ useParams kullanıldı

✔ movieId değişince fetch

✔ loading / error state var

✔ Veri yoksa mesaj var

✔ Nested route çalışıyor

---

##