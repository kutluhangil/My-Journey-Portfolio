# HTTP İstekleri

React uygulamalarında HTTP istekleri yapmak için yerleşik bir modül mevcut değildir. Bu nedenle, genellikle [Axios](https://axios-http.com/) gibi kütüphaneler kullanılmaktadır.

`npm install axios`

HTTP isteklerini, kullanıcı etkileşimleri (örneğin, bir öğeye tıklama veya form gönderme) ya da bileşenin montajı sırasında gerçekleştirebiliriz. Montaj sırasında, bir bileşen DOM'da görüntülendikten ve durumu güncellemeye hazır olduktan sonra, etkiler (effects) kullanılarak istekler yapılır.

Örneğin, montaj aşamasında [Hacker News API](https://hn.algolia.com/api) ile istekler yapabilir ve makalelere ait bağlantıların listesini görüntüleyebiliriz:

```
import { useEffect } from "react";
import axios from "axios";

const App = () => {

  useEffect(() => {
    // Burada bir HTTP isteği yürüteceğiz
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};
```

Async/await sözdizimini kullanacağız, ancak bir sorun var: **`useEffect`**'e geçirdiğimiz callback fonksiyonu asenkron olamaz.

```
// ❌ Bunu yapamazsın!
useEffect(async () => {

}, []);
```

Bu tür bir kod, **ESLint** tarafından işaretlenecek ve üzerine geldiğinizde doğru uygulama yöntemine dair bir açıklama ve örnek göreceksiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e983b0c6-3bba-4f8a-88b9-5bcb5c9fd8fbScreenshot%202024-01-08%20at%2013.26.08.png)

Bu nedenle, callback fonksiyonu içinde başka bir asenkron fonksiyon tanımlayıp onu hemen çağırmamız gerekecektir. HTTP isteklerini bu fonksiyon içinde gerçekleştireceğiz. Bu yöntemi kodumuzda kullanacağız.

```
const App = () => {

  useEffect(() => {
		// 1. Eşzamansız bir işlev bildirme
    async function fetchArticles() {
      // Burada bir HTTP isteği yürüteceğiz
    }

		// 2. Duyurudan hemen sonra onu aradık
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};
```

HTTP istek kodunu asenkron fonksiyonun içine ekleyin.

```
const App = () => {

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );
			console.log(response);
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

Yani, `App` bileşeni montaj sırasında etkide HTTP isteği gerçekleştirilecektir. Ayrıca, kullanıcı eylemlerine bağlı olarak da istekler yapabiliriz, ancak bu durumda etki değil, olay işleyicileri (örneğin, tıklama veya form gönderme) kullanacağız. İsteklerin sonucunda dönen verileri nasıl saklayıp kullanacağımızı ise daha sonra inceleyeceğiz.