# #4 HTTP İstekleri (HTTP Requests). Hook’lar

[**HTTP İstekleri**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/HTTP%20%C4%B0stekleri%202eb673274a8e80ef8bb2d0816f4934c9.md)

[**İstek Sonuçlarının İşlenmesi**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/%C4%B0stek%20Sonu%C3%A7lar%C4%B1n%C4%B1n%20%C4%B0%C5%9Flenmesi%202eb673274a8e80d8b99ef430e43bf10d.md)

[**Verilerin Görüntülenmesi**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/Verilerin%20G%C3%B6r%C3%BCnt%C3%BClenmesi%202eb673274a8e802f8199f9b5629e1835.md)

---

## **🔹 Bu konunun AMACI ne?**

> React uygulamasında internetten (API’den) veri alıp
> 

> bu veriyi ekranda göstermek.
> 

Yani:

- Backend’den veri çek
- React içinde sakla
- Kullanıcıya göster

---

## **🔹 Neden Axios + useEffect kullanıyoruz?**

### **1️⃣ React kendi başına veri çekemez**

→ Axios gibi bir kütüphane gerekir

### **2️⃣ Veri**

### **sayfa açılır açılmaz**

### **alınacaksa**

→ useEffect kullanılır

> useEffect =
> 

> “Bileşen ekrana geldikten sonra bu kodu çalıştır”
> 

---

## **🔹 useEffect neden async olamaz?**

- useEffect async olamaz ❌
- Bu yüzden içinde **ayrı bir async fonksiyon** yazılır ✔️
- O fonksiyon **hemen çağrılır**

Sebep: React’in yaşam döngüsü kuralları

---

## **🔹 HTTP isteği tek başına yeterli mi?**

❌ Hayır

Çünkü:

- React, ekranda sadece **state değişirse** güncellenir

Bu yüzden:

1. API’den veri gelir
2. Bu veri **state’e yazılır**
3. State değişince React yeniden render eder

---

## **🔹 useState burada ne işe yarıyor?**

```
const [articles, setArticles] = useState([]);
```

Bu şu demek:

> “API’den gelecek verileri burada saklayacağım”
> 

---

## **🔹 Akış (EN ÖNEMLİ KISIM)**

Uygulama açıldığında:

1️⃣ App bileşeni ekrana gelir

2️⃣ useEffect çalışır

3️⃣ Axios API’ye istek atar

4️⃣ Gelen veri setArticles ile state’e yazılır

5️⃣ State değişir

6️⃣ React otomatik yeniden render eder

7️⃣ JSX içinde liste ekrana basılır

---

## **🔹 Neden koşullu render var?**

```
{articles.length > 0 && <ArticleList items={articles} />}
```

Çünkü:

- Veri gelmeden önce articles boştur
- Boşken liste göstermeye çalışmak hata yaratabilir

👉 “Veri varsa göster” demek için

---

## **🔹 Neden ArticleList ayrı bileşen?**

**Mantık ayrımı için**

- App → veriyi çeker, state yönetir
- ArticleList → sadece gelen veriyi ekrana basar

> Kural:
> 

> Veri çekme üst bileşende
> 

> Gösterim alt bileşende
> 

---

## **🔹 Kısacık ÖZET (tek bakışta)**

> 🔸 useEffect → sayfa açılınca çalışır
> 

> 🔸 Axios → API’den veri çeker
> 

> 🔸 useState → gelen veriyi saklar
> 

> 🔸 State değişince React render eder
> 

> 🔸 JSX → state’i ekrana basar
> 

---

## **🔹 Bu ne işe yarıyor?**

Gerçek hayatta:

- Kullanıcı listesi
- Ürün listesi
- Haberler
- Yorumlar
- Telefon rehberi
- Sosyal medya feed’i

**Hepsi bu mantıkla yapılır.**

---

[**Yükleme Göstergesi**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/Y%C3%BCkleme%20G%C3%B6stergesi%202eb673274a8e808b8135fe8cd855f409.md)

[**Hata Yönetimi**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/Hata%20Y%C3%B6netimi%202eb673274a8e807996e5c06efe9d5726.md)

[**Sorumluluğun Dağılımı**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/Sorumlulu%C4%9Fun%20Da%C4%9F%C4%B1l%C4%B1m%C4%B1%202eb673274a8e8023be22e0d802e776e6.md)

[**Arama Formu**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/Arama%20Formu%202eb673274a8e80b1a02acfb00540e9c9.md)

[**useMemo Hook’u**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/useMemo%20Hook%E2%80%99u%202eb673274a8e8014bd86c435491eb654.md)

[**useRef Hook’u**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/useRef%20Hook%E2%80%99u%202eb673274a8e8033ba05c402917896bc.md)

[**Özel Hooklar**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/%C3%96zel%20Hooklar%202eb673274a8e80349cf2f31c5062c267.md)

[**Bağlam (Context)**](#4%20HTTP%20%C4%B0stekleri%20(HTTP%20Requests)%20Hook%E2%80%99lar/Ba%C4%9Flam%20(Context)%202eb673274a8e80e5b3dbfb08c938f19e.md)