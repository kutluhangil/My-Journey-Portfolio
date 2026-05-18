# Route ve Routes Bileşenleri

`<Route>` bileşeni, belirli bir URL'yi bir bileşenle ilişkilendirmeyi sağlar. Örneğin, kullanıcı `/about` yolunu ziyaret ettiğinde `<About>` bileşenini göstermek istiyorsak, bu yolu tanımlamamız gerekir:

`<Route path="/about" element={<About />} />`

`element` özelliği bir JSX ifadesi olabilir, ancak pratikte genellikle bileşenler kullanılır.

```
<Route> bileşeni her zaman bir şey render eder. Eğer belirtilenelement propununpath değeri tarayıcı adres çubuğundaki mevcutpathname segmentinin değeriyle eşleşiyorsa, o zaman render edilen şey işlev görür; aksi takdirde isenull döner.

```

Uygulamanızda istediğiniz sayıda rota tanımlayabilirsiniz, her sayfa için en az bir rota olması gerekir. Örneğin, bir giyim mağazası uygulaması oluşturduğumuzu düşünelim ve üç sayfa için rotaları şu şekilde tanımlayalım:

```
// src/components/App.jsx

import { Routes, Route } from "react-router-dom";
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
```

Her rotayı mutlaka `<Routes>` bileşeni ile sarmalamalısınız, rota yalnızca bir tane bile olsa. `<Routes>`, tarayıcı adres çubuğundaki URL'ye en uygun `<Route>` bileşenini seçmek için gerekli mantığı sağlar. Dolayısıyla, `<Route>`, `<Routes>` bileşeni olmadan kullanılamaz.

Son olarak, uygulamanızın dosya yapısında konvansiyon gereği tüm bileşenler `src/components` klasöründe saklanır. Sayfa bileşenleri ise, uygulamanızın her bir sayfasının yapısını barındıran basit React bileşenleridir ve düzeni korumak adına `src/pages` klasöründe saklanır.