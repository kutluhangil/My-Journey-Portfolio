# ADIM 2 — SearchBar Bileşeni

## **Bu adımın amacı**

Kullanıcı:

- bir kelime yazacak
- **Search** butonuna basacak
- kelime **App bileşenine gönderilecek**
- **boşsa uyarı çıkacak**

📌 **API çağrısı bu adımda YAPILMIYOR**

Sadece kelimeyi yukarı taşımayı öğreniyoruz.

---

## **1️⃣ GEREKEN KÜTÜPHANE (toast)**

Bildirim için **React Hot Toast** kullanacağız.

Terminalde:

```
npm install react-hot-toast
```

---

## **2️⃣ KLASÖR YAPISI**

Şunu oluştur:

```
src/components/SearchBar/
 ├── SearchBar.jsx
 └── SearchBar.module.css
```

⚠️ İsimler **birebir böyle** olmalı

(SearchBar ≠ searchbar)

---

## **3️⃣ SearchBar.jsx — MANTIK**

SearchBar:

- **onSubmit** adında bir prop alır
- input’un değerini **local state’te** tutar
- form submit olunca:
    - boşsa → toast göster
    - doluysa → onSubmit(value) çağır

---

## **4️⃣ SearchBar.jsx — TAM KOD**

👉 **Aynen bunu yaz**

```
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }

    onSubmit(query.trim());
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
```

---

## **5️⃣ SearchBar.module.css (basit stil)**

```
.header {
  padding: 16px;
  background-color: #f5f5f5;
}

.form {
  display: flex;
  gap: 8px;
}

.input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
}
```

(Stil önemli değil, çalışması yeterli)

---

## **6️⃣ App.jsx — SearchBar’I BAĞLA**

Şimdi **SearchBar’ı App içinde render etmeliyiz**.

### **App.jsx (şimdilik minimal)**

```
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  const handleSearch = searchValue => {
    console.log("Search query:", searchValue);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-right" />
    </div>
  );
}
```

---

## **7️⃣ TEST ET (ÇOK ÖNEMLİ)**

Tarayıcıda:

### **✅ Beklenen davranış**

- Boş gönder → ❌ kırmızı toast
- Yazı yaz → console’da görünür

```
Search query: cats
```

📌 Eğer bunu görüyorsan → **ADIM 2 TAMAM**

---

## **❗️ BU ADIMDA NE YAPMADIK?**

❌ API çağrısı

❌ useEffect

❌ axios

❌ galeri

Sadece:

✔ form

✔ state

✔ prop ile veri yukarı taşıma

---