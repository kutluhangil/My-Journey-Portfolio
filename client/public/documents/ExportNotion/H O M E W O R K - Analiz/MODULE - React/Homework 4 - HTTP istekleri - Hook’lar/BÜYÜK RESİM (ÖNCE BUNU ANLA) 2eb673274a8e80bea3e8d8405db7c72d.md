# BÜYÜK RESİM (ÖNCE BUNU ANLA)

---

Gönderdiğin şema **çok önemli**.

Bu şema bize şunu söylüyor:

👉 **TÜM AKIL (state, API, kontrol) = App bileşeni**

👉 Alt bileşenler **sadece gösterir veya haber verir**

Yani:

- App = **beyin**
- Diğerleri = **kol, göz, buton**

---

## **📦 BİLEŞENLERİN SORUMLULUKLARI (NET NET)**

Aşağıda her bileşeni **“Ne yapar / Ne yapmaz”** şeklinde anlatıyorum.

---

## **1️⃣ App (Kök Bileşen)**

### **✅ Ne yapar?**

- Unsplash API çağrısını yapar
- State’leri tutar:
    - images
    - loading
    - error
    - page
    - query
    - selectedImage (modal için)
- Koşullu render kararlarını verir

### **❌ Ne yapmaz?**

- Input’un içeriğini kontrol etmez
- Butonun stilini umursamaz
- Modal HTML’ini kendi yazmaz

📌 **Alt bileşenlere sadece prop gönderir**

---

## **2️⃣ SearchBar (Arama Formu)**

```
<header>
  <form>
    <input />
    <button>Search</button>
  </form>
</header>
```

### **✅ Ne yapar?**

- Kullanıcıdan metin alır
- Form submit edildiğinde:
    - Eğer input BOŞ → **toast gösterir**
    - DOLU → App’e **query gönderir**

### **❌ Ne yapmaz?**

- API çağrısı yapmaz
- State tutmaz
- Görselleri bilmez

📌 **onSubmit prop’u alır**

```
onSubmit(searchTerm)
```

---

## **3️⃣ ImageGallery (Liste)**

```
<ul>
  <li>ImageCard</li>
  <li>ImageCard</li>
</ul>
```

### **✅ Ne yapar?**

- images array’ini alır
- map ile ImageCard üretir
- <li> burada kalır (önemli!)

### **❌ Ne yapmaz?**

- Modal açmaz
- API bilmez
- State tutmaz

---

## **4️⃣ ImageCard (Tek Görsel)**

```
<div>
  <img />
</div>
```

### **✅ Ne yapar?**

- Küçük görseli gösterir
- Tıklanınca:
    - Seçilen görseli App’e bildirir

### **❌ Ne yapmaz?**

- Modal yönetmez
- Büyük görseli bilmez

📌 Tıklama → onClick(image)

---

## **5️⃣ Loader (Yükleniyor)**

### **✅ Ne yapar?**

- Sadece spinner gösterir

### **❌ Ne yapmaz?**

- images yerine geçmez
- Tek başına render edilmez

📌 **Resimler varken + loading true iken görünür**

---

## **6️⃣ ErrorMessage**

### **✅ Ne yapar?**

- API hatası varsa mesaj gösterir

### **❌ Ne yapmaz?**

- Hata yakalamaz
- Retry yapmaz

📌 **Sadece App karar verir**

---

## **7️⃣ LoadMoreBtn**

### **✅ Ne yapar?**

- “Load more” butonu gösterir
- Tıklanınca:
    - App’e “bir sonraki sayfayı yükle” der

### **❌ Ne yapmaz?**

- Sayfa artırmaz
- API çağrısı yapmaz

📌 Görünme koşulu:

```
images.length > 0
```

---

## **8️⃣ ImageModal (Büyük Görsel)**

### **✅ Ne yapar?**

- Büyük görseli gösterir
- ESC / dış tık → kapanır

### **❌ Ne yapmaz?**

- Açılma kararını vermez
- State tutmaz

📌 **React Modal kullanacağız**

---

# **🔁 VERİ AKIŞI (ÇOK ÖNEMLİ)**

```
SearchBar → App → API → App → ImageGallery → ImageCard
                                   ↓
                              LoadMoreBtn
                                   ↓
                                ImageModal
```

📌 **Veri yukarıdan aşağı iner**

📌 **Olaylar aşağıdan yukarı çıkar**

---

# **🧩 KÜTÜPHANELER (NERDE KULLANACAĞIZ?)**

| **Kütüphane** | **Nerede** | **Ne için** |
| --- | --- | --- |
| axios | App / api dosyası | HTTP istek |
| react-hot-toast | SearchBar | boş input uyarısı |
| react-loader-spinner | Loader | yükleniyor animasyonu |
| react-modal | ImageModal | modal pencere |

---

---