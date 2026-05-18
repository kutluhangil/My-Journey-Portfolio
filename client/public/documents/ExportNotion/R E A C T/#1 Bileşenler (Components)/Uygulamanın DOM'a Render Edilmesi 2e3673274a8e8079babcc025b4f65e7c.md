# Uygulamanın DOM'a Render Edilmesi

React uygulamasının tüm bileşenlerini DOM’a render etmek için, `react-dom`paketinde bulunan `createRoot(container)` ve `render(element)` metotları birlikte çalışır. Bu işlem genellikle uygulamanın giriş noktası olan `main.jsx` dosyasında gerçekleştirilir.

```
// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

- `createRoot` metodu, mevcut bir DOM öğesi referansını alır; bu örnekte `index.html` dosyasındaki `div#root` öğesi kullanılmakta ve bu öğe, uygulamanın render edileceği kök noktayı oluşturur.
- `render` metodu ise, ekranda gösterilecek olan React bileşenini alır. Bu bileşen genellikle uygulamanın kök bileşeni olan `App`’tir.

```
En üst düzey bileşeni (App) render etmek için yalnızca bir render çağrısı yapmak yeterlidir; bu işlem, uygulamanın diğer tüm bileşenlerinin de render edilmesine olanak tanır.
```

# **Strict Mode (Katı Mod)**

Kodda `<React.StrictMode>` bileşeninin kullanıldığını ve neden `App` bileşenini sarmaladığını merak edebilirsiniz:

```
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`StrictMode`, geliştirme sırasında potansiyel sorunları tespit etmek ve bunlar hakkında uyarılarda bulunmak için kullanılan bir yardımcı bileşendir. Bu özellik, üretim ortamında uygulamanın performansını veya çalışmasını etkilemez; ancak geliştiricilere daha sağlam ve hatasız bir uygulama oluşturmaları için yol gösterir.

**StrictMode’un başlıca işlevleri şunlardır:**

- Gelecek sürümlerde kaldırılabilecek, React’te kullanımdan kalkmış yöntem ve fonksiyonlar hakkında bildirimde bulunmak.
- Bileşenlerin render süreçlerinde olası yan etkileri tespit etmek.
- Render işlemi sırasında saf olmayan (impure) fonksiyon çağrılarına karşı uyarılarda bulunmak.
- Olay işleyicilerinde ve yaşam döngüsü aşamalarında oluşabilecek hataları belirlemek.

Bu nedenle `StrictMode`, özellikle geliştirme aşamasında, temiz ve güvenilir bir uygulama mimarisi oluşturmak için son derece faydalıdır.

[**📖 StrictMode Dokümantasyonu**](https://react.dev/reference/react/StrictMode)