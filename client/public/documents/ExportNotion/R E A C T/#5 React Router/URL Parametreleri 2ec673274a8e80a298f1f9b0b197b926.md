# URL Parametreleri

Dinamik parametreler, işlev parametreleriyle benzer şekilde çalışır; her zaman bir isme sahiptirler ancak farklı değerlere sahip olabilirler. Bu parametreler, bir adres şablonu tanımlamamıza olanak sağlar ve şablonun bazı kısımları farklı değerler alabilir. Örneğin, her blog gönderisi için ayrı bir rota tanımlamak pratik değildir, çünkü bu gönderiler binlerce olabilir. İçerik yapısı açısından bu tür sayfalar benzerlik gösterirken yalnızca başlık, görsel, yazar, metin vb. farklı olacaktır. Her makale için bir rota tanımlamak yerine, hangi gönderiyi o anda görüntüleyeceğimizi belirleyeceğimiz dinamik bir parametreye sahip tek bir rota tanımlayabiliriz. Bir adresin bir parçasının URL parametresi olduğunu belirtmek için, parametre adının önüne iki nokta (`:`) konulur.

`<Route path="/blog/:postId" element={<BlogPost />} />`

Bir kullanıcı, `"/blog/:postId"` yapısındaki bir URL’yi ziyaret ettiğinde, örneğin `"/blog/react-fundamentals"` veya `"/blog/top-5-css-tricks"` gibi, ilgili blog gönderisinin sayfası görüntülenecektir.

```
💡 PARAMETRE ADI
URL parametre adı herhangi bir şey olabilir, ancak anlamlı ve açıklayıcı olması önemlidir. URL parametre değerini nasıl alacağımızı inceleyeceğiz. Spoiler - adıyla.

```

Uygulamamızın rota tanımına `/products/:productId` adresine sahip olan bir ürün sayfası ekleyeceğiz. Bu, tüm ürünleri gösteren `/products` sayfasıyla hiçbir bağı olmayan ayrı bir sayfadır.

```
// src/components/App.jsx

import { Routes, Route, Link } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound";
import ProductDetails from "path/to/pages/ProductDetails";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
```

```
💡 PARAMETRE DEĞERİ
URL parametresinin değeri benzersiz olmalıdır. Bu nedenle genellikle veritabanında yer alan nesne kimlikleri (ID’ler) kullanılır. Örneğin, adresler "/products/1" veya "/products/2" şeklinde olabilir.

```

# **useParams Hook’u**

`useParams` hook'u, geçerli URL'deki tüm dinamik parametreleri içeren bir nesneyi döndürür. Parametre adları bu nesnedeki özellik adları olurken, URL'deki mevcut değerler de bu özelliklerin değerleri olacaktır. Örneğin, aşağıdaki rota `"/books/:genreId/:authorName"` olarak tanımlanmışsa ve kullanıcı `"/books/adventure/herman-melville"` adresini ziyaret ediyorsa:

```
const { genreId, authorName } = useParams();
console.log(genreId, authorName);// adventure, herman-melville
```

Bu hook'u, dinamik URL parçasının (bu durumda ürün kimliği) değerini almak için ürün sayfası bileşeninde kullanıyoruz.

**src/pages/ProductDetails.jsx**

```
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>Now showing product with id - {productId}</div>;
};
```

```
💡 SONRA NE OLACAK?
Parametreyi aldıktan sonra, bu kimlikle arka uca bir istek gönderebilir ve ürünle ilgili tüm bilgileri alabilirsiniz. Sonrasında, sayfa düzenini bu verilere göre işleyebilirsiniz.
```