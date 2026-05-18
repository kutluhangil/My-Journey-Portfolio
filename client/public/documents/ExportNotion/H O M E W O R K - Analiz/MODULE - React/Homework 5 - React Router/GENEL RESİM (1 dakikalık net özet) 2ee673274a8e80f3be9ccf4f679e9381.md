# GENEL RESİM (1 dakikalık net özet)

Bu ödevde şunları yapacağız:

- TMDB’den film verisi çekeceğiz
- React Router ile **çok sayfalı SPA** yapacağız
- Film listesi → film detayı → cast & reviews
- Görseller **manuel URL birleştirme** ile gösterilecek
- “Go back” mantığı **location.state** ile kurulacak

Ama **önce temel altyapı**.

---

# **✅ ADIM 1 — TMDB Görsel URL Mantığını Netleştirelim (ÇOK ÖNEMLİ)**

## **Problem ne?**

TMDB **asla** sana tam resim linki vermez.

Sadece şunu verir:

```
/1E5baAaEse26fej7uHcjOgEE2t2.jpg
```

Bu **tek başına işe yaramaz**.

---

## **Çözüm (dokümantasyondan aldığımız net bilgi)**

TMDB diyor ki:

> Bir görsel URL oluşturmak için:
> 
- base_url
- size
- file_path
    
    > gerekir
    > 

Ama biz **configuration API çağırmayacağız** (ödevde gerek yok).

Bunun yerine **sabit bir base URL kullanacağız** 👇

```
https://image.tmdb.org/t/p/
```

Ve en yaygın boyut:

```
w500
```

---

## **✅ DOĞRU GÖRSEL URL FORMÜLÜ**

```
const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
```

Örnek:

```
poster_path = "/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
```

Sonuç:

```
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
```

📌 **Bu mantığı her yerde kullanacağız**:

- HomePage film listesi
- MoviesPage arama sonuçları
- MovieDetailsPage afişi
- Cast profil fotoğrafları (varsa)

---

## **⚠️ KRİTİK KURAL (GOIT bunu kontrol eder)**

Eğer poster_path === null ise:

- **Boş img basma**
- Yerine text göster:
    - "No image available"

Bunu ileride ekleyeceğiz.

---

# **🛑 ŞİMDİ DURUYORUZ**

Bu mesajda **kod yazmanı istemiyorum**.

Sadece şunu netleştirdik:

✅ Görsel URL nasıl oluşturulur

✅ Dokümantasyondaki görsel ne işe yarıyor

✅ Nerede kullanılacak

---