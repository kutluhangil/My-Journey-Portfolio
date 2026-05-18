# Sorumluluğun Dağılımı

HTTP isteklerini doğrudan bir bileşen içinde tanımlamak genellikle iyi bir uygulama değildir. Uygulamanızda backend'e yapılacak birçok farklı istek olabilir ve bu istekler çeşitli bileşenlerde kullanılabilir. Ayrıca, HTTP istekleriyle ilgili kodlar genellikle karmaşık ve uzun olabilir.

Bileşen dosyalarını daha yönetilebilir hale getirmek ve gelecekteki yeniden yapılandırmayı kolaylaştırmak için, **`src`** klasörü içinde **`articles-api.js`** adlı ek bir dosya oluşturalım. Bu dosyada, backend'den makaleleri almak için kullanılacak HTTP istek fonksiyonlarını saklayacağız.

```
// src/articles-api.js
import axios from "axios";

axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";

export const fetchArticlesWithTopic = async topic => {
  const response = axios.get(`/search?query=${topic}`);
  return response.data.hits;
};
```

- Belirli bir konuya ait makaleleri almak için `async/await` kullanarak bir fonksiyon tanımlarız.
- Fonksiyon, bir HTTP isteği gönderir ve doğrudan verileri (`response.data.hits`) döndürür.
- Hata yönetimi bu fonksiyon içinde değil, çağrıldığı bileşende yapılır.

**`fetchArticlesWithTopic`** fonksiyonunu **`articles-api.js`** dosyasından bileşenimize aktararak, efekt içerisinde kullanacağız.

```
// 1. Bir HTTP işlevini içe aktarma
import { fetchArticlesWithTopic } from "../articles-api.js";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
				// 2. HTTP işlevini kullanırız
				const data = await fetchArticlesWithTopic("react");
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

	return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
```

Bu basit örnekte bile, bileşenden isteğin URL'sini ve yanıtın spesifik ayrıntılarını gizledik. Bileşen yalnızca fonksiyonu çağırır, makale arama anahtar kelimesini iletir ve sonucu kullanır.

---

## **🔹 Burada anlatılan ana fikir ne?**

> HTTP isteklerini bileşenlerin içinden çıkart,
> 

> ayrı bir “API dosyasında” topla.
> 

Buna **sorumluluğun dağılımı (separation of concerns)** denir.

---

## **🔹 Neden böyle yapıyoruz?**

### **❌ Kötü yaklaşım**

- Her bileşenin içinde axios.get(...)
- URL’ler her yere dağılmış
- Kod uzar, karmaşıklaşır
- Değişiklik yapması zor olur

### **✅ İyi yaklaşım**

- HTTP istekleri **tek bir dosyada**
- Bileşenler sadece:
    - “Veriyi getir”
    - “Göster”
        
        der
        

---

## **🔹 articles-api.js ne işe yarıyor?**

```
export const fetchArticlesWithTopic = async topic => {
  const response = axios.get(`/search?query=${topic}`);
  return response.data.hits;
};
```

Bu dosya şunu yapar:

- Axios ayarlarını saklar
- URL detaylarını gizler
- Sadece **hazır veri döndürür**

👉 Bileşen:

- URL bilmiyor
- Axios bilmiyor
- Sadece fonksiyonu çağırıyor

---

## **🔹 App bileşeni artık ne yapıyor?**

App şunlarla ilgileniyor:

- Loading durumu
- Error durumu
- Gelen veriyi state’e yazma
- Ekranda ne gösterileceğine karar verme

👉 **İş mantığı burada**

👉 **Network detayı API dosyasında**

---

## **🔹 Hata neden API dosyasında değil?**

Çünkü:

> API dosyası = “veri getir”
> 

> 
> 

> Bileşen = “ne olursa ne göstereyim?”
> 

Yani:

- API hata fırlatır
- Bileşen nasıl tepki vereceğine karar verir

Bu daha esnek bir yapı.

---

## **🔹 Bu yapı sana ne kazandırır?**

- Kod daha temiz
- Tekrar kullanılabilir
- Test etmesi kolay
- Gerçek projelere uygun
- Backend değişirse sadece **1 dosya** değişir

---

## **🔹 Tek cümlelik ÖZET**

> HTTP isteklerini bileşenden ayır,
> 

> API dosyasında topla,
> 

> bileşen sadece çağırıp sonucu kullansın.
> 

---