# Parametrelerin Çıkartılması

React Router'da sorgu dizesini okumak ve değiştirmek için, tarayıcının yerleşik [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams) sınıfının küçük bir sarmalayıcısı olan `useSearchParams` hook’u bulunmaktadır.

`const [searchParams, setSearchParams] = useSearchParams();`

Bu hook, mevcut URL için sorgu dizesi parametreleri nesnesi (URLSearchParams örneği) ve sorgu dizesini güncelleme fonksiyonu içeren iki değerden oluşan bir dizi döndürür. Parametre değerlerini almak için `URLSearchParams.get(key)` metodunu kullanırız; bu metod, parametre adını alır ve değerini döndürür; eğer sorgu dizesinde böyle bir parametre yoksa `null` döner.

```jsx
// src/pages/Products.jsx

import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const color = searchParams.get("color");
  const maxPrice = searchParams.get("maxPrice");

  return (
    <div>
      <p>Name: {name}</p>
      <p>Color: {color}</p>
      <p>Maximum price: {maxPrice}</p>
    </div>
  );
};
```