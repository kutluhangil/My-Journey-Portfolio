# Dosya Bazlı Teknik Görev Dağılımı (7 Kişi)

---

## **🧠 Temel Kural (Önce Kabul Edin)**

- **Bir dosya = bir sorumlu**
- Kimse başkasının dosyasına **doğrudan müdahale etmez**
- Ortak kullanılan dosyalar **yalnızca sorumlusu tarafından düzenlenir**
- Geliştirme süreci: **Branch → PR → Review → Merge**

---

## **1️⃣ HEADER · MENU · THEME**

👤 **Sorumlu: Kişi 1**

**Klasör Yapısı**

```
partials/
  └── header.html
css/
  └── header.css
js/
  └── header.js
```

**Görevler**

- Header layout (logo + navigation)
- Mobile slide menu (soldan açılan)
- Dark / Light theme switch
- Tema bilgisinin localStorage’da saklanması
- Home / Catalog / My Library yönlendirmeleri

**✅ Teslim Kriteri**

Header tüm sayfalarda çalışır, tema tercihi kalıcıdır.

---

## **2️⃣ FOOTER · TEAM MODAL**

👤 **Sorumlu: Kişi 2**

**Klasör Yapısı**

```
partials/
  └── footer.html
css/
  └── footer.css
js/
  └── footer.js
```

**Görevler**

- Footer tasarımı
- “GoIT Students” tıklanınca açılan ekip modalı
- Modal açma / kapama (overlay, ESC, close button)

**✅ Teslim Kriteri**

Footer sabit çalışır, ekip modalı sorunsuz açılıp kapanır.

---

## **3️⃣ HERO (GÜNÜN FİLMİ)**

👤 **Sorumlu: Kişi 3**

**Klasör Yapısı**

```
partials/
  ├── hero.html
  └── my-library-hero.html
css/
  ├── hero.css
  └── my-library-hero.css
js/
  ├── hero.js
  └── heroTmdb.js
```

**Görevler**

- Günün trend filmlerinden **random hero**
- Film yoksa default hero
- “More details” → movie detail modal
- “Watch trailer” → trailer modal
- My Library için ayrı hero varyasyonu

**✅ Teslim Kriteri**

Hero bölümü Home / Catalog / My Library sayfalarında doğru çalışır.

---

## **4️⃣ WEEKLY TRENDS (HAFTANIN TRENDLERİ)**

👤 **Sorumlu: Kişi 4**

**Klasör Yapısı**

```
partials/
  └── weekly-trends.html
css/
  └── weekly-trends.css
js/
  └── weekly-trends.js
```

**Görevler**

- Haftanın trend filmlerini API’den çekme
- Film kartlarının render edilmesi
- Kart tıklanınca detail modal açılması
- “See all” → Catalog yönlendirmesi

**✅ Teslim Kriteri**

Weekly Trends bloğu API’den dinamik olarak doluyor.

---

## **5️⃣ UPCOMING THIS MONTH**

👤 **Sorumlu: Kişi 5**

**Klasör Yapısı**

```
partials/
  └── upcoming-this-month.html
css/
  └── upcoming-this-month.css
js/
  └── upcoming-this-month.js
```

**Görevler**

- Bu ay çıkacak filmlerden random seçim
- Film bilgilerini render etme
- “Add / Remove My Library” butonu
- localStorage entegrasyonu

**✅ Teslim Kriteri**

Upcoming bölümü tek başına, bağımsız şekilde çalışır.

---

## **6️⃣ CATALOG · SEARCH · PAGINATION**

👤 **Sorumlu: Kişi 6**

**Klasör Yapısı**

```
partials/
  └── catalog.html
css/
  └── catalog.css
js/
  └── catalog.js
```

**Görevler**

- Catalog sayfa layout’u
- Search form (keyword + clear button)
- (Opsiyonel) Year filter
- Pagination (server-side page parametresi)
- Default içerik: haftanın trendleri

**✅ Teslim Kriteri**

Catalog sayfası tek başına çalışabilir durumda.

---

## **7️⃣ MY LIBRARY · MODALS · API (KRİTİK ROL)**

👤 **Sorumlu: Kişi 7**

**Klasör Yapısı**

```
partials/
  ├── favorite-movies.html
  ├── pop-up-movie-card.html
  └── pop-up-trailer-card.html
css/
  ├── favorite-movies.css
  ├── pop-up-movie-card.css
  └── pop-up-trailer-card.css
js/
  ├── favorite-movies.js
  ├── pop-up-movie-card.js
  ├── pop-up-trailer-card.js
  └── fetchMovies.js ⚠️
```

**Görevler**

- My Library sayfası
- localStorage add / remove işlemleri
- Movie detail modal
- Trailer modal
- TMDB API fonksiyonları (fetchMovies.js)

**✅ Teslim Kriteri**

Modal + API + My Library sistemi eksiksiz çalışır.

---

## **🧩 Ortak Teknik Anlaşmalar (ÇOK ÖNEMLİ)**

- fetchMovies.js → **tek ve merkezi API dosyası**
- Modal açma/kapama mantığı **tek yerde**
- Film kartı HTML şablonu **kopyalanmaz**
- Herkes yalnızca **kendi klasöründen sorumludur**
- Merge süreci mutlaka **PR + review** ile yapılır

---