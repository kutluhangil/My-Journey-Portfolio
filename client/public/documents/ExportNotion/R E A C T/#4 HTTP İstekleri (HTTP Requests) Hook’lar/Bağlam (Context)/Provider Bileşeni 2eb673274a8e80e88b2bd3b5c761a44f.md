# <Provider> Bileşeni

Context nesnesinin **`Provider`** özelliği - context'i sağlayan ve bileşenlerin context değerine erişmesini sağlayan bileşendir.

```
import { createContext } from "react";
import ReactDOM from "react-dom/client";

const myContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <myContext.Provider value={{ username: "Mango" }}>
    <App />
  </myContext.Provider>
);
```

**`Provider`** bileşeni:

- Uygulamanın tüm bileşenlerini sarar; bu bileşen içine **`App`** yerleştirilir.
- **`value`** prop'unu alır - context değeri, bileşenler için erişilebilir olacak.
- Bileşenlerin context değişikliklerine, iç içe geçmişlikten bağımsız olarak abone olmalarını sağlar.