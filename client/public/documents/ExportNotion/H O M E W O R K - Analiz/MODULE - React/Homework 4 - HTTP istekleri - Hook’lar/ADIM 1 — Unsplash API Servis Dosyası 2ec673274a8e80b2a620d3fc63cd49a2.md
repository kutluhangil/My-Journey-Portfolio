# ADIM 1 — Unsplash API Servis Dosyası

Bu adımda **hiç JSX, hiç bileşen yok**.

Sadece **HTTP mantığını** tek bir yerde toplayacağız.

Amaç:

👉 App bileşeni **URL, header, access key bilmesin**

👉 Sadece “bana görselleri getir” desin

---

## **1️⃣ NEDEN AYRI BİR DOSYA?**

Çünkü:

- API URL’si değişirse → tek yerden değişir
- Başka bileşenler de kullanabilir
- App daha **temiz ve okunabilir** olur

📌 Bu yaklaşıma **“separation of concerns”** denir.

---

## **2️⃣ KLASÖR ve DOSYA OLUŞTUR**

src altında şunu oluştur:

```
src/
 └── services/
      └── unsplash-api.js
```

⚠️ **components içine koyma**

⚠️ API = servis katmanı

---

## **3️⃣ UNSPLASH API MANTIĞI (ÖNCE ANLA)**

Unsplash’te arama endpoint’i:

```
https://api.unsplash.com/search/photos
```

Gerekenler:

- query (arama kelimesi)
- page (sayfa)
- per_page (kaç resim)
- Authorization header (Access Key)

---

## **4️⃣ unsplash-api.js — TAM KOD**

👉 **Birebir aynısını yaz**

```
// src/services/unsplash-api.js
import axios from "axios";

// 🔐 Unsplash temel ayarları
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common.Authorization =
  "Client-ID YOUR_UNSPLASH_ACCESS_KEY";

// 🔍 Görsel arama fonksiyonu
export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return response.data;
};
```

⚠️ **YOUR_UNSPLASH_ACCESS_KEY** kısmına

Unsplash’ten aldığın **Access Key’i** yaz

---

## **5️⃣ BU FONKSİYON NE DÖNDÜRÜR?**

response.data şuna benzer:

```
{
  total: 1000,
  total_pages: 84,
  results: [
    {
      id,
      urls: {
        small,
        regular
      },
      user,
      likes,
      alt_description
    }
  ]
}
```

📌 Biz ileride:

- Galeri için → urls.small
- Modal için → urls.regular

kullanacağız.

---

## **6️⃣ BU ADIMDA NE YAPMADIK?**

❌ useEffect yazmadık

❌ state oluşturmadık

❌ JSX kullanmadık

❌ bileşen oluşturmadık

✔ Sadece **backend erişim katmanı** yazdık

---

## **✅ ADIM 1 TAMAM MI KONTROL ET**

- src/services/unsplash-api.js var
- axios kurulmuş (npm install axios)
- Access Key doğru
- Export edilen fonksiyon var

---