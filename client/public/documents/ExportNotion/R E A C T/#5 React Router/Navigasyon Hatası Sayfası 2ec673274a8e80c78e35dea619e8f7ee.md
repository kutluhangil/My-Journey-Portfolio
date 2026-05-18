# Navigasyon Hatası Sayfası

Kullanıcı, örneğin `/non-existing-route` gibi uygulamada bulunmayan bir bağlantıya tıkladığında ne olur? Bu durumda, tarayıcıda boş bir sayfa görüntülenir çünkü tanımladığımız `<Route>` bileşenlerinden hiçbiri bu URL ile eşleşmez.

Bu durumu önlemek için rota listesinin sonuna, herhangi bir URL ile eşleşecek bir `<Route>` eklememiz gerekir. Ancak bu rota, yalnızca diğer tüm rotalar uygun olmadığında seçilecektir.

```
import { Routes, Route } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from "path/to/pages/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
```

Burada, `path` özelliğindeki `*` sembolü, bu rotanın herhangi bir URL ile eşleşebileceğini belirtir. Böylece, eğer önceki rotalardan hiçbiri uygun olmazsa, bu rota devreye girerek kullanıcının gittiği sayfanın mevcut olmadığını belirten bir hata sayfası görüntüler.