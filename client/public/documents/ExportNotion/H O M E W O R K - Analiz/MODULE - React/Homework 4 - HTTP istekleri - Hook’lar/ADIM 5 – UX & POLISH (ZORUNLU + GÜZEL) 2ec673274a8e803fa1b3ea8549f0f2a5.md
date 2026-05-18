# ADIM 5 – UX & POLISH (ZORUNLU + GÜZEL)

Bu adımda şunları yapacağız:

1. 🔽 **Load More tıklanınca otomatik aşağı scroll**
2. ⏳ **Loader sadece altta görünsün**
3. 🚨 **Boş aramada Toast uyarısı**
4. ❌ **API hata mesajı**
5. 🎨 **Grid ve hizalama düzeltmesi (final hali)**

---

## **1️⃣ Scroll otomatik aşağı insin**

📌 **App.jsx → TAMAMINI bununla değiştir**

```
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import { fetchImages } from "./services/unsplash-api";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  // 🔍 SEARCH
  const handleSearch = async searchQuery => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  // 🌐 FETCH
  useEffect(() => {
    if (!query) return;

    async function loadImages() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchImages(query, page);

        if (data.results.length === 0) {
          toast("No images found 🤷‍♂️");
        }

        setImages(prev => [...prev, ...data.results]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [query, page]);

  // ⬇️ AUTO SCROLL
  useEffect(() => {
    if (page > 1) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [images]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={setSelectedImage} />
      )}

      {loading && <Loader />}

      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
      )}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

export default App;
```

---

## **2️⃣ ImageGallery – grid düzgün olsun**

📌 **components/ImageGallery/ImageGallery.jsx – TAMAMI**

```
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id} className={css.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
```

📌 **ImageGallery.module.css – TAMAMI**

```
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;

  padding: 20px;
  margin: 0;
  list-style: none;
}

.item {
  display: flex;
  justify-content: center;
}
```

---

## **3️⃣ ImageCard – hover + düzgün crop**

📌 **ImageCard.jsx – TAMAMI**

```
import css from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <div className={css.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
}
```

📌 **ImageCard.module.css – TAMAMI**

```
.card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
}

.card:hover img {
  transform: scale(1.05);
}

.image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}
```

---

## **4️⃣ Loader – sadece altta**

📌 **Loader.jsx – TAMAMI**

```
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Oval height={40} width={40} color="#000" />
    </div>
  );
}
```

---

## **5️⃣ ErrorMessage – basit ama yeterli**

📌 **ErrorMessage.jsx – TAMAMI**

```
export default function ErrorMessage() {
  return (
    <p style={{ textAlign: "center", color: "red" }}>
      Something went wrong. Please try again later.
    </p>
  );
}
```

---

# **✅ BU ADIM BİTTİ Mİ?**

✔ Scroll otomatik

✔ Modal düzgün

✔ Loader doğru yerde

✔ Hatalar yakalanıyor

✔ Toast çalışıyor

✔ Grid temiz

🎉 **Bu haliyle ödev %100 TAM**.

---