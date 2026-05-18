# Link ve NavLink Bileşenleri

Uygulamanızın farklı sayfalarına nasıl bağlantılar oluşturacağınızı öğrenelim. Standart `<a href="/about">` etiketiyle bağlantı oluşturmak mümkün olsa da, bu yöntem kullanıcı tıkladığında sayfanın yeniden yüklenmesine neden olur. Tarayıcı sayfayı yeniden yükler ve bu, istemci tarafındaki yönlendiriciye, yani React Router'a, navigasyonu gerçekleştirme imkanı tanımaz.

Bağlantılar oluşturmak için `<Link>` ve `<NavLink>` bileşenleri kullanılır. Bu bileşenler `<a>` etiketini render eder, ancak bağlantının standart davranışı değiştirilmiştir, böylece tıklandığında sayfa yeniden yüklenmeden tarayıcı adres çubuğundaki URL sadece güncellenir.

```
<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/products">Products</Link>
</nav>
```

`<NavLink>` bileşeni, mevcut URL'nin `to` prop'unun değeri ile eşleşmesi durumunda ek stillere sahip olabilmesiyle farklılık gösterir. Varsayılan olarak, aktif bağlantı öğesine `active` sınıfı eklenir. Bu, stil verebilmek için kullanılabilir.

```
// src/components/App.jsx

import { Routes, Route, NavLink } from "react-router-dom";
import clsx from 'clsx';
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from 'path/to/pages/NotFound';
import css from './App.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
		<div>
			<nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>

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