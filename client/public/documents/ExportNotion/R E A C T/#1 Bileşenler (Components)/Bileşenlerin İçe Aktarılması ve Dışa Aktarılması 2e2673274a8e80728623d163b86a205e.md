# Bileşenlerin İçe Aktarılması ve Dışa Aktarılması

Pratikte birçok bileşen olacak ve hepsini tek bir dosyada tutmak uygun değildir. Her bir bileşen için ayrı bir dosya oluşturulduğundan, bileşeni kendi dosyasından dışa aktarmak gerekmektedir.

**`src`** klasöründe **`Product.jsx`** adında bir dosya oluşturalım ve burada **`Product`**bileşeninin tanımını taşıyalım. Bileşeni dosyasından dışa aktarmayı unutmayın.

```
// src/Product.jsx

const Product = () => {
  return (
    <div>
      <h2>Tacos</h2>
	  <p>Price: 999 credits</p>
    </div>
  );
};

export default Product;
```

```
Dikkat edin ki, bileşen dosyasının adıProduct.jsx bileşenin kendisiyle aynıProduct ismiyle örtüşmektedir. Bu, uyulması gereken gayri resmi bir standarttır.

```

**`Product`** bileşenini **`App`** bileşeninde, yani onu kullanmak istediğimiz yerde içe aktarıyoruz.

```
// src/App.jsx

import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product />
      <Product />
      <Product />
    </div>
  );
}
```

```
Modüllerde varsayılan dışa aktarma (export default) veya adlandırılmış dışa aktarma (export const) kullanabilirsiniz. Bileşen ana varlık olduğundan, onun için varsayılan dışa aktarmayı (export default) kullanmaya karar verelim.

```

Pratikte, tüm bileşenleri ve gelecekte onlarla ilgili stil dosyalarını **`components`** adlı bir klasörde saklayacağız, bu klasörü `src` klasörünün içine oluşturacağız Bu, React projemizin dosyalarını ve klasörlerini yapılandırma yönündeki ilk adımımız olacak.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0d26ff74-fd18-40dc-bc1a-fe959f52cf8dScreenshot%202023-12-11%20at%2013.27.25.png)

**`App.jsx`**, **`App.css`** ve **`Product.jsx`** dosyalarını **`components`** klasörüne taşıyacağız ve **`main.jsx`** dosyasında **`App`** bileşeninin içe aktarımını düzelteceğiz.

```
// src/main.jsx

// Önce
import App from './App'

// Şimdi
import App from './components/App'
```