# Yükleme Göstergesi

HTTP isteği sırasında kullanıcı, bileşen yerine boş bir arayüz bloğu görür. Bu durum bilgilendirici değildir. Bu nedenle, HTTP isteği yapılırken bir yükleme göstergesi görüntülenmelidir. Yükleme göstergesi istek devam ederken görünür olmalı ve istek tamamlandığında, gösterge gizlenmeli, yerine indirilen verilerle dolu bileşen gösterilmelidir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ecb53878-3efa-4cba-8d5e-23fa2cd7ef46image%20%2832%29.jpg)

Yükleme göstergesi, bileşenin durumunda saklanan reaktif bir değerdir ve yalnızca iki durum alabilir:

- `false`: İstek henüz başlamamış veya tamamlanmıştır.
- `true`: İstek yapılmaktadır.

Makalelerin yükleme göstergesini saklamak için **`loading`** durumunu ekleyecek ve bunu koşullu olarak JSX içinde bir paragraf ile göstereceğiz.

```
import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleList } from "./ArticleList"

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>Latest articles</h1>
			{loading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
```

HTTP isteğinden önce **`loading`** durumunu **`true`** olarak ayarlayıp, istek tamamlandığında **`false`** olarak geri döndürmemiz gerekir. Bunu asenkron fonksiyon içinde **`try...catch`** yapısını kullanarak gerçekleştireceğiz.

```
const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
				// 1. İstekten önce göstergeyi true olarak ayarlayın
        setLoading(true);
        const response = await axios.get(
          "<https://hn.algolia.com/api/v1/search?query=react>"
        );
        setArticles(response.data.hits);
      } catch (error) {
        // Burada hatayı ele alacağız
      } finally {
				// 2. İstekten sonra göstergeyi false olarak ayarlayın
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
```

HTTP isteğinin yanıtını beklerken, yükleme göstergesini gösteririz. Yanıt geldiğinde ise göstergeyi gizleriz. **`catch`** bloğu şu an için boş kalacak, ileride hataları ele almak için kullanacağız.

[https://goitlmsstorage.b-cdn.net/07ec763d-2be0-416e-b9ca-319db9a7afbf2024-01-10%2015-38-30.mp4](https://goitlmsstorage.b-cdn.net/07ec763d-2be0-416e-b9ca-319db9a7afbf2024-01-10%2015-38-30.mp4)

Yükleme göstergesi, basit bir metin olabileceği gibi vektör ikonları veya tam sayfa bileşenlerle de gösterilebilir. İşte yükleme göstergesi için hazır bileşenler sunan bazı popüler kütüphaneler:

- [React Spinners](https://www.davidhu.io/react-spinners/)
- [React Loader](https://www.npmjs.com/package/react-loader)
- [React Content Loader](https://skeletonreact.com/)