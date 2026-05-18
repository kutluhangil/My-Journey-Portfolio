# Arama Formu

Kullanıcının makale aramak için anahtar kelime girebilmesi amacıyla uygulamaya bir arama formu eklenmesi gerekmektedir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4950ca6e-ca3d-4df1-a194-791a906a9435Screenshot%202024-01-15%20at%2020.29.17.png)

Makale arama uygulamasının bileşen yapısı şu şekildedir:

- `App`: Uygulamanın kök bileşeni
- `ArticleList`: Makale bağlantılarının listelendiği bileşen
- `Article`: Her biri bir makale bağlantısı içeren liste kartı bileşeni
- `Loader`: Yükleme işlemi sırasında gösterilen bileşen (ayrı bir bileşen olarak ayrılabilir)
- `Error`: Hata mesajını gösteren bileşen (ayrı bir bileşen olarak ayrılabilir)
- `SearchForm`: Anahtar kelime girişi sağlayan bir metin alanı içeren arama formu

[https://goitlmsstorage.b-cdn.net/27f18b71-a359-4c95-8d47-242b72f9caf72024-01-15%2022-33-53.mp4](https://goitlmsstorage.b-cdn.net/27f18b71-a359-4c95-8d47-242b72f9caf72024-01-15%2022-33-53.mp4)

**Arama formu bileşenini şu şekilde oluşturabiliriz:**

```
// src/components/SearchForm.jsx

export const SearchForm = ({ onSearch }) => {

	const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
		const topic = form.elements.topic.value;
    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
  );
};
```

- Bu örnekte, yalnızca form gönderildiğinde değeri alınan bir metin alanı içeren **kontrolsüz** bir form yapısı bulunur.
- Form, yalnızca `onSearch` prop’unu kabul eder. Bu prop, form gönderildiğinde arama terimini alarak işlem yapacak olan geri çağırma (callback) fonksiyonudur.

Kullanıcı, metin alanına bir şey yazmadan formu göndermeye çalışırsa bir uyarı gösterilir. Çünkü boş bir arama terimi ile HTTP isteği yapmak gereksizdir. Bu durumu önlemek için form gönderildiğinde metin alanı boşsa `onSearch` çağrılmaz.

```
// src/components/SearchForm.jsx

export const SearchForm = ({ onSearch }) => {

	const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
		const topic = form.elements.topic.value;

		// Metin alanı boşsa şu mesajı görüntüleyin
		// ve fonksiyonu sonlandırın.
		if(form.elements.topic.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}

		// Aksi takdirde, propları çağırın
		// ve ona alanın değerini aktarın
		onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
  );
};
```

Arama formu, `App` bileşeni içinde render edilir ve `handleSearch` fonksiyonu, form gönderildiğinde yapılması gereken işlemlerden sorumlu olacaktır.

```
// src/components/App.jsx

import { SearchForm } from "./SearchForm";

const App = () => {

	const handleSearch = topic => {
		// ...
	};

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
```

Kullanıcı artık bir anahtar kelime girerek makale arayabileceği için `useEffect`kullanımına gerek yoktur. HTTP isteği, `handleSearch` fonksiyonu içinde yapılacaktır ve bu fonksiyon **asenkron** olacaktır.

```
// src/components/App.jsx

const App = () => {
	const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

	const handleSearch = async (topic) => {
    try {
			setArticles([]);
			setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
```

**`handleSearch`** fonksiyonunda dikkat edilmesi gereken iki nokta vardır:

- `setArticles([])` ile önceki sonuçlar temizlenerek yeni arama için hazır bir görünüm sağlanır.
- `setError(false)` ile daha önceki bir hata durumu varsa sıfırlanır.