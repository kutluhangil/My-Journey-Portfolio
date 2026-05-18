# React.lazy() ve React.Suspense

Artık ES modüllerinin (ECMAScript modülleri) statik olduğunu biliyorsunuz. Bu, **ithalat (import)** ve **ihracat (export)** işlemlerinin derleme zamanında gerçekleştirildiği, kod çalıştırılırken değil anlamına gelir. İthalatlar, dosyanın en üstünde tanımlanmalıdır; aksi takdirde derleme hatası meydana gelir. Bu durum, belirli bir koşula dayalı olarak dinamik olarak bir bağımlılığı ithal edemeyeceğiniz anlamına gelir.

```
// Kod ayrımı olmadan

import MyComponent from "path/to/MyComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/some-path" element={<MyComponent />} />
      {/* Diğer rotala */}
    </Routes>
  );
};
```

ES2020 spesifikasyonunda, modüllerin dinamik olarak içe aktarılması imkanı sağlanmıştır. Bunun farkı, sıradan statik `import` yerine `import()` fonksiyonunun kullanılmasıdır; bu fonksiyon bir **promise** döndürür ve değer olarak modül dosyasını alır.
`import("path/to/MyComponent").then(module => console.log(module));`

React, kodun ayrı bir dosyaya ayırılması ve yalnızca gerektiğinde yüklenip görüntülenmesi için bir API sağlar. `React.lazy()` fonksiyonu, bileşenin asenkron olarak yüklenmesinden sorumludur ve `Suspense`, yükleme tamamlanana kadar görüntülenmesini durdurur.

```
// Kodun bölünmesi

import { lazy, Suspense } from "react";

const MyComponent = lazy(() => import("path/to/MyComponent"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/some-path" element={<MyComponent />} />
        {/* Diğer rotala */}
      </Routes>
    </Suspense>
  );
};
```

`lazy()` metodu, dinamik ithalatın sonucunu döndüren bir yükleme fonksiyonu bekler; bu fonksiyonun döndürdüğü değer, **varsayılan ihracat (default export)**olmalıdır. Eğer `MyComponent` bileşeni render edilirken henüz yüklenmemişse, bir yer tutucu gösterilmelidir. Bunun için `Suspense` bileşeni kullanılır. `fallback` prop'u, herhangi bir React elemanı veya bileşeni kabul eder. `Suspense`, asenkron bileşenin veya bileşen grubunun üzerinde herhangi bir yere yerleştirilebilir.

Son örnekte `MyComponent`'in statik ithalatının bulunmadığına dikkat edin. Bunun yerine `import()` fonksiyonu kullanılmaktadır. Statik ithalat bırakılırsa, Vite kod bölme işlemini gerçekleştirmeyecek ve `MyComponent`'in tüm kodunu projenin ana JavaScript dosyasına ekleyecektir.

Rotalara dayalı olarak kod bölme ile bir mağaza uygulamasının tam kodunu inceleyin. `App` ve `About` bileşenlerinin kodu değişti ve tüm yüklenen bileşenler **varsayılan ihracatlar** haline geldi.

[https://safari-fix.staticblitz.com/?https://stackblitz.com/edit/vitejs-vite-pirigskr?file=src%2Fcomponents%2FApp.jsx](https://safari-fix.staticblitz.com/?https://stackblitz.com/edit/vitejs-vite-pirigskr?file=src%2Fcomponents%2FApp.jsx)

Sayfa bileşeni About'ta Suspense bileşeninin kullanımına dikkat edin. Alt sayfalar yüklenirken, tüm sayfa yeniden çizilmeyecek, yalnızca alt sayfanın işaretleme kısmı güncellenecektir. SharedLayout ve About'taki Suspense bileşenleri birbirini engellemez; aksine, React, yüklenen bileşene en yakın olan en uygun bileşeni kullanır.