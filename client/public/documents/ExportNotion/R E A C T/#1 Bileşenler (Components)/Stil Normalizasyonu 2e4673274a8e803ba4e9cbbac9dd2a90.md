# Stil Normalizasyonu

Tarayıcılar, HTML elementlerini varsayılan olarak farklı stillerle işleyebilir, bu da projelerinizde tutarsız görünümlere yol açabilir. Bu durumu önlemek ve tüm tarayıcılarda tutarlı bir stil elde etmek için stil normalizasyonu yapılması gerekir.

Projeye stil normalizasyonu eklemek için [**modern-normalize**](https://www.npmjs.com/package/modern-normalize?activeTab=readme) kütüphanesi kullanılacaktır. Bu kütüphane, yaygın tarayıcı farklarını düzeltmeye yardımcı olan güncel bir çözüm sunar. Aşağıdaki komutla projenize modern-normalize bağımlılığını ekleyebilirsiniz:

`npm install modern-normalize`

Normalizasyon stillerini uygulamak için bu dosyayı projenize dahil etmeniz gerekmektedir. **`main.jsx`** dosyasında aşağıdaki gibi içe aktararak projeye dahil edebilirsiniz:

```
import React from "react";
import ReactDOM from "react-dom/client";
// Normalizasyon stillerinin içe aktarımı
import "modern-normalize";
import App from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Bu işlem, tüm sayfa genelinde geçerli olacak şekilde tarayıcılar arası stil farklarını ortadan kaldırır ve stil uyumluluğu sağlar.

Bunun yanı sıra, bazı küresel stil kurallarını da projenize eklemek faydalı olabilir. Örneğin, başlıklar, listeler ve görüntüler için varsayılan boşlukları sıfırlayabilir ve **`<body>`** etiketine genel stil tanımları ekleyebilirsiniz. Bu tür düzenlemeler için **`index.css`** dosyanızda aşağıdaki gibi global stil kurallarını tanımlayabilirsiniz:

```
/* src/index.css */

body {
  font-family: sans-serif;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
}
```