# ADIM 3 — Unsplash API ile Görsel Arama (Temel)

## **Bu adımın AMACI ne?**

Kullanıcı arama yaptığında:

1. Unsplash API’ye HTTP isteği atacağız
2. Gelen görselleri state’e yazacağız
3. ImageGallery’de listeleyeceğiz

---

## **1️⃣ Unsplash Access Key’i hazır mı?**

(Daha önce söyledin ama netleştirelim)

- Unsplash → **Your apps**
- **Access Key** aldın ✅

⚠️ **Access Key’i JSX içine yazmayacağız**, env kullanacağız.

---

## **2️⃣**

## **.env**

## **dosyasını oluştur**

Proje kök dizininde:

```
touch .env
```

İçine şunu yaz:

```
VITE_UNSPLASH_ACCESS_KEY=BURAYA_ACCESS_KEY
```

⚠️ ÖNEMLİ:

- Değişken **VITE_** ile başlamalı
- Kaydettikten sonra **npm run dev’i yeniden başlat**

---

## **3️⃣ Unsplash API dosyasını ayıralım (çok önemli)**

📁 src/ altında dosya oluştur:

```
src/
 └── services/
     └── unsplash-api.js
```

### **unsplash-api.js**

```
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
    },
  });

  return response.data;
};
```

📌 Burada ne yaptık?

- axios baseURL ayarladık
- query, page gönderdik
- **Unsplash’e uygun parametrelerle** istek attık
- Sadece data döndürdük

---

## **4️⃣ App.jsx’i temizleyelim (Vite default’u SİL)**

### **❌ Sil**

- reactLogo
- viteLogo
- count
- default Vite JSX

---

## **5️⃣ App.jsx – ADIM 3 versiyonu**

Şu an **SearchBar → API → ImageGallery** bağlayacağız.

### **src/App.jsx**

```
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/unsplash-api";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async searchQuery => {
    if (searchQuery === query) return;

    setQuery(searchQuery);
    setImages([]);
  };

  useEffect(() => {
    if (!query) return;

    async function loadImages() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchImages(query);
        setImages(data.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {error && <p>Something went wrong 😢</p>}

      {images.length > 0 && <ImageGallery images={images} />}

      {loading && <p>Loading...</p>}
    </>
  );
}

export default App;
```

---

## **6️⃣ ImageGallery (şimdilik BASİT)**

📁 src/components/ImageGallery/ImageGallery.jsx

```
const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
```

---

## **7️⃣ Şu anda NE OLMALI?**

✅ SearchBar’dan arama yapınca

✅ Unsplash’e istek gider

✅ Görseller listelenir

✅ Sayfa yenilenmeden çalışır

Henüz:

- ❌ Load more yok
- ❌ Modal yok
- ❌ Loader component yok
    
    (Bunlar sonraki adımlar)
    

---

## **8️⃣ Test checklist**

Şunları kontrol et:

- .env doğru mu?
- Dev server restart edildi mi?
- Network → Unsplash request geliyor mu?
- Console error yok mu?

---

Şu ana kadar:

- Arama çalışıyor
- Unsplash’tan görseller geliyor

👉 **Şimdi ADIM 3: “Load More (Sayfalama) + Loader + Error” yapıyoruz.**

Bu adımda:

- İlk aramada 1. sayfa gelecek
- **Load More** butonuna basınca **2, 3, 4… sayfalar** eklenecek
- Yüklenirken **Loader** görünecek
- Hata olursa **ErrorMessage** görünecek

---

## **1️⃣**

## **src/services/unsplash-api.js**

📌 **TAM HALİ (eskisini sil, bunu koy)**

```
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });

  return response.data;
};
```

---

## **2️⃣**

## **src/components/Loader/Loader.jsx**

📁 klasör oluştur: components/Loader

```
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      <TailSpin height={50} width={50} color="#3f51b5" />
    </div>
  );
}
```

📦 Gerekli paket:

```
npm install react-loader-spinner
```

---

## **3️⃣**

## **src/components/ErrorMessage/ErrorMessage.jsx**

📁 klasör oluştur: components/ErrorMessage

```
export default function ErrorMessage() {
  return <p style={{ color: "red", textAlign: "center" }}>Something went wrong 😢</p>;
}
```

---

## **4️⃣**

## **src/components/LoadMoreBtn/LoadMoreBtn.jsx**

📁 klasör oluştur: components/LoadMoreBtn

```
export default function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
}
```

---

## **5️⃣**

## **src/components/ImageGallery/ImageGallery.jsx**

📌 **TAM HALİ**

```
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
```

---

## **6️⃣**

## **src/components/ImageCard/ImageCard.jsx**

📌 **TAM HALİ**

```
export default function ImageCard({ image, onClick }) {
  return (
    <div onClick={() => onClick(image)} style={{ cursor: "pointer" }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
    </div>
  );
}
```

---

## **7️⃣ 🔥**

## **src/App.jsx**

## **(EN ÖNEMLİ KISIM)**

📌 **TAM HALİ – ESKİSİNİ SİL**

```
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchImages } from "./services/unsplash-api";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    async function loadImages() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchImages(query, page);

        setImages(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={() => {}} />
      )}

      {loading && <Loader />}

      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={loadMore} />
      )}
    </div>
  );
}
```

---

## **✅ BU ADIMDAN SONRA NE OLMALI?**

✔ Arama yap

✔ Görseller gelsin

✔ **Load more** → yeni görseller **alta eklensin**

✔ Yüklenirken spinner çıksın

✔ Hata olursa mesaj görünsün

---