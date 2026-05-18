# useEffect Hook'u

React bileşenlerinde **yan etkileri (side effects)** yönetmek için kullanılan `useEffect`hook’unu inceleyelim. Aşağıdaki örnekte, butona tıklanma sayısını `state`’te saklayan basit bir bileşen oluşturuyoruz:

```
import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};
```

Bu kodda, `clicks` state’i her değiştiğinde bileşen yeniden render edilir. Böyle bir durumda, bileşenin güncellenmesine bağlı olarak gerçekleşmesi gereken **yan etkileri** yönetmek için `useEffect` kullanabiliriz. Örneğin, her tıklamada tarayıcı sekmesinin başlığını güncelleyebiliriz:

```
import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

// Etkiyi tanımlıyoruz
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};
```

`useEffect(callback, deps)` Açıklaması

`useEffect` iki parametre kabul eder:

- **`callback`**: Yan etkinin mantığını barındıran fonksiyondur. Sunucuya istek gönderme, DOM üzerinde değişiklik yapma ya da tarayıcı API’lerini kullanma gibi işlemler burada tanımlanır. Bu etkiler genellikle bileşenin eklenmesi (*mount*), güncellenmesi veya kaldırılması (*unmount*) sırasında tetiklenir.
- **`deps` (bağımlılıklar dizisi)**: `useEffect`’in ne zaman çalışacağını belirler. Bu dizideki herhangi bir değer (örneğin bir `state` veya `prop`) değiştiğinde, `callback` fonksiyonu yeniden çalıştırılır. Bağımlılıklar dizisi, `useEffect`’in gereksiz yere yeniden tetiklenmesini engelleyerek performans açısından optimize edilmesini sağlar.

```
Not: useEffect herhangi bir değer döndürmez. Amacı, bir yan etkiyi yürütmektir. Yani hesaplama sonucu üretmekten ziyade, bir işlemi gerçekleştirmek için kullanılır.

```

Aşağıdaki örnekte, `useEffect`’e bir bağımlılık dizisi verilmediği için, efekt **her render işleminde** çalışacaktır:

```
useEffect(() => {
	document.title = `You clicked ${clicks} times`;
})
```

Bağımlılık dizisi tanımlanmadığında, `useEffect` her bileşen güncellemesinde yeniden çalışır. Bu örnekte, her tıklamada sayfanın başlığı (`document.title`) tekrar güncellenir.