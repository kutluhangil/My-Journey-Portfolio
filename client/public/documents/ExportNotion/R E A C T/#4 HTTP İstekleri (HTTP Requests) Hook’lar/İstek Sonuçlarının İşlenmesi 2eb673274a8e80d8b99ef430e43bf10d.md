# İstek Sonuçlarının İşlenmesi

HTTP isteğinin sonucunu görüntüleyebilmek için, bu veriyi bileşenin durumunda (state) saklamamız gerekir; bunun başka bir yolu yoktur. **`articles`** adında bir durum değişkeni tanımlayarak, HTTP isteğinin sonucunu burada saklayacağız. Backend'den bir veri dizisi döneceği için, durumun başlangıç değeri boş bir dizi olarak ayarlanmalıdır.

```
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
	// 1. Son teknolojinin duyurulması
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );
			// 2. Duruma veri yazma
      setArticles(response.data.hits);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};
```