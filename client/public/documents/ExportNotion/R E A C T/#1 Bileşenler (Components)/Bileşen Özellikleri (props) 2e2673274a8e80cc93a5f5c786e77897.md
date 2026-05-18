# Bileşen Özellikleri (props)

Bileşenler, herhangi bir özellik (ayar, prop) alabilir ve DOM'da render edilmesi gereken HTML yapısını döndürebilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f1807746-0d3b-4487-89dd-d13939a90302Screenshot%202023-12-06%20at%2018.29.32%20%281%29.png)

Props olmadan, bileşen her zaman aynı şemayı döndürür, örneğin bizim **`Product`**bileşenimiz gibi.

```
// src/components/Product.jsx

export const Product = () => {
  return (
    <div>
      <h2>Tacos</h2>
	  <img src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>" alt="Tacos With Lime" width="640" />
			<p>Price: 999 credits</p>
    </div>
  );
};
```

Props, buton metni, görsel, URL veya bileşen için herhangi bir veri olabilir. Props, stringler veya JS ifadesinin sonuçları şeklinde olabilir. Props, bileşenin kullanıldığı yerde, fonksiyonun argümanları gibi bileşene iletilir.

```
// src/components/App.jsx

import { Product } from './Product';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product name="Tacos With Lime" />
      <Product name="Fries and Burger" />
    </div>
  );
}
```

Herhangi bir bileşen, **`Product`** dahil, bir parametre olarak **`props`**'u tanımlar; bu her zaman iletilen tüm props'ları içeren bir nesne olacaktır.

```
// src/components/Product.jsx

export const Product = props => {
  return (
    <div>
      <h2>{props.name}</h2>
			<img src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>" alt="Tacos With Lime" width="480" />
			<p>Price: 999 credits</p>
    </div>
  );
};
```

```
Prop'lar, bileşen için dinamik değerlerin aktarımında kullanılır; örneğin, JSX şemasında {} sözdizimini kullanarak.

```

`Products` bileşenine birkaç başka özellik iletelim.

```
// src/components/App.jsx

import { Product } from "./Product";

export default function App() {
  return (
    <div>
<h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="<https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640>"
        price={14.29}
      />
    </div>
  );
}
```

**`Product`** bileşeninde, elde edilen prop'ları şemada kullanacağız.

```
// src/components/Product.jsx

export const Product = props => {
  return (
    <div>
      <h2>{props.name}</h2>
			<img src={props.imgUrl} alt={props.name} width="480" />
			<p>Price: {props.price} credits</p>
    </div>
  );
};
```

Hemen **`props`** ile çalışırken basit bir deseni kullanmaya başlayacağız. **`props`** bir nesne olduğu için, fonksiyon imzasında onu yapısal olarak ayırabiliriz. Bu, kodu daha temiz ve okunabilir hale getirir.

```
// src/components/Product.jsx

export const Product = ({ name, imgUrl, price }) => {
  return (
    <div>
      <h2>{name}</h2>
			<img src={imgUrl} alt={name} width="480" />
			<p>Price: {price} credits</p>
    </div>
  );
};

```

Artık web sayfası şu şekilde görünüyor. Aynı yapıyı koruyarak, farklı değerlere sahip iki ürün kartı oluşturduk.