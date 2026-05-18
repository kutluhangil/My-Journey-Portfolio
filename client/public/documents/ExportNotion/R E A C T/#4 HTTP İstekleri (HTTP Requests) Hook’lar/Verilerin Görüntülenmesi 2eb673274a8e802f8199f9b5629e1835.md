# Verilerin Görüntülenmesi

Durum değiştiğinde bileşen güncelleneceği için, JSX içerisinde verileri görüntülemek için durumu kullanabiliriz. Koşullu render yöntemiyle, dizide en az bir öğe varsa makalelere ait bağlantıların listesini görüntüleyecek işaretlemeyi ekleyeceğiz.

```
const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );
      setArticles(response.data.hits);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>

      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

Makaleler listesini ayrı bir **`ArticleList`** bileşenine ayırmak ve HTTP isteğinin yapıldığı bileşende kullanmak mantıklı olacaktır. Üst bileşenin durumundaki makaleler dizisini, **`items`** props'u olarak bu bileşene aktaracağız.

```
import { useEffect, useState } from "react";
import axios from "axios";

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );
      setArticles(response.data.hits);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
```

```
Unutmayın, koşullu render işlemi App bileşeninde gerçekleşir. ArticleList bileşeni, ne zaman görüntüleneceğini bilmez; bu karar, onu çağıran bileşene aittir. ArticleList bileşeni ya render edilir ya da edilmez; bu kararı App bileşeni verir.

```

# **Sonuç**

Bu örnekte, makalelere ait bağlantılar listesini kullanarak React'ta HTTP isteği yapmanın standart tekniğini inceledik. Bu teknik, aşağıdaki adımlardan oluşmaktadır:

- HTTP isteğini gerçekleştirmek : İsteği, bir efekt içinde veya bir olay tetiklendiğinde yapabilirsiniz
- **`Network`** sekmesinde kontrol : İsteğin başarılı olduğunu ve yanıt olarak veri aldığımızı doğrulamak için `Network` sekmesini kullanın.
- **Bileşen içinde durum tanımlama:** İsteğin sonucunu saklamak için bileşen içinde bir durum değişkeni tanımlayın.
- **Sonucu duruma kaydetme:** HTTP isteğinin sonucunu tanımladığınız duruma kaydedin.
- **JSX işaretlemesi ile görüntüleme:** Oluşan durumu kullanarak JSX işaretlemesini görüntüleyin.