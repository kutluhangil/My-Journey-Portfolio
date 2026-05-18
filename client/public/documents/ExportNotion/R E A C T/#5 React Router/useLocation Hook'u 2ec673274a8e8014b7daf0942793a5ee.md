# useLocation Hook'u

Mevcut URL'yi temsil eden bir konum objesi döndüren bu hook, her yeni rotaya geçtiğimizde veya mevcut URL'nin bir kısmını güncellediğimizde çalışır. Mevcut konum değiştiğinde belirli bir etki yaratmak gerektiğinde kullanılabilir. Örneğin, verileri bir analiz servisine göndermek gibi durumlar için idealdir.

```
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Analytics from "path/to/analytics-service";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    Analytics.send(location);
  }, [location]);

  return <div>...</div>;
};
```

# **location.state Özelliği**

Bir mağaza uygulamamızda aşağıdaki senaryoyu ele alalım: Kullanıcı ürünler listesindedir ve isimle arama yapmıştır; mevcut URL `products?name=hoodie` olsun. Ardından bir ürün kartına tıklayarak ürün detay sayfasına geçer; mevcut URL `products/h-1` olur.

Ürün sayfasına bir "Geri" butonu eklememiz gerekiyor. Bu butona tıklandığında, kullanıcı tüm ürünler sayfasına yönlendirilmelidir, ancak sorgu dizesinin durumu korunmalıdır. Yani, tıklandığında kullanıcıyı `products` değil, bizim durumumuzda `products?name=hoodie` adresine yönlendirmeliyiz; bu, ürün sayfasına geçiş yapılan URL'dir.

```
{
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
}
```

`state` propunun değeri, navigasyonun gerçekleştiği rotanın konum nesnesinde erişilebilir olacaktır. Yapmanız gereken tek şey, `useLocation` hook'unu kullanarak `location` nesnesini almak ve onun `state` özelliğine başvurmaktır.

```
// src/pages/Products.jsx

const Products = () => {
  return (
    <Link to="/products/h-1" state="/dashboard?name=hoodie">
      Navigate to product h-1
    </Link>
  );
};
```

Aslında `state` değerini oluşturmak için mevcut URL'yi hesaplamaya gerek yok. `location` nesnesi, mevcut rotanın URL'sinin tüm parçalarını tanımlar, bu nedenle bunu `state` prop'unda iletmek mümkündür.

```
// **src/pages/Products.jsx**

const Products = () => {
  const location = useLocation();

  return (
    <Link to="/product/h-1" state={location}>
      Navigate to product h-1
    </Link>
  );
};
```

`location.state` özelliği, navigasyonun yapıldığı rotanın `location` nesnesine bir referans içerecektir. `Link` bileşeninin `to` prop'una yalnızca gelecekteki bağlantının `href`'ini tanımlayan bir dize değil, aynı zamanda bir bütün olarak `location` nesnesi de aktarılabilir.

```
// src/pages/ProductDetails.jsx
****
const ProductDetails = () => {
  const location = useLocation();
  console.log(location.state);

// /products -> products/h-1
// { pathname: "/products", search: "" }

// /products?name=hoodie -> products/h-1
// { pathname: "/products", search: "?name=hoodie" }

  return <Link to={location.state}>Back to products</Link>;
};
```

Son olarak dikkate alınması gereken durum, kullanıcının tüm ürünler sayfasından değil, daha önce kaydedilmiş bir ürün bağlantısına yeni bir tarayıcı sekmesinde tıkladığı zamandır. Bu durumda `location.state` değeri `null` olacaktır. Bu nedenle, `to` prop’u için varsayılan değeri sağlamaya dikkat edilmelidir.

```
// src/pages/ProductDetails.jsx

const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state ?? "/products";

  return <Link to={backLinkHref}>Back to products</Link>;
};
```

Tam sayfada ürün detaylarından dönüş fonksiyonu eklenmiş bir giyim mağazası örneğinin tamamını inceleyin. `ProductList` ve `ProductDetails` bileşenlerinin kodları güncellenmiştir.

[https://stackblitz.com/edit/vitejs-vite-zpkmrske?file=src%2Fpages%2FProductDetails.jsx](https://stackblitz.com/edit/vitejs-vite-zpkmrske?file=src%2Fpages%2FProductDetails.jsx)