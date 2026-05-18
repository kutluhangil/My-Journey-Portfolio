# Dinamik Stilller

Şimdi `Alert` bileşeninin arka plan rengini, bildirim türüne göre dinamik olarak değiştirelim. Bunun için bileşene bir `variant` prop'u ekleyerek, farklı türlerdeki bildirimler için uygun renkleri belirleyeceğiz.

```
// src/components/App.jsx

import { Alert } from "./Alert";

const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};
```

Renk seçiminin mantığını `getBgColor(variant)` fonksiyonuna aktaracağız. Bu fonksiyon, `variant` parametresinin değerine bağlı olarak arka plan rengini döndürecek.

```
// src/components/Alert.jsx

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  color: "white",
};

const getBgColor = variant => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alert = ({ variant, children }) => {
  return (
    <p
      style={{
        ...alertStyles,
        backgroundColor: getBgColor(variant),
      }}
    >
      {children}
    </p>
  );
};
```

```
Yukarıdaki örnekte, style niteliği, sabit alertStyles ile variant prop'una bağlı dinamik backgroundColor değerinin birleşiminden oluşur. Bu teknik, bir veya daha fazla stil özelliğinin prop'lar aracılığıyla dinamik olarak kontrol edildiği durumlarda faydalıdır. Örneğin, backgroundImage gibi özellikler, görsel URL'sini prop olarak alabilir.

```

[https://codesandbox.io/p/sandbox/goit-react-textbook-lesson-2-inline-css-lqoko3?file=%2Fsrc%2Findex.js%3A10%2C15](https://codesandbox.io/p/sandbox/goit-react-textbook-lesson-2-inline-css-lqoko3?file=%2Fsrc%2Findex.js%3A10%2C15)

[https://stackblitz.com/edit/vitejs-vite-eflqw9?ctl=1&embed=1&file=src%2FAlert.jsx&hideNavigation=1&view=editor](https://stackblitz.com/edit/vitejs-vite-eflqw9?ctl=1&embed=1&file=src%2FAlert.jsx&hideNavigation=1&view=editor)

# **Sonuç**

Gömülü stiller, kullanım kolaylığı sunduğu için cazip olabilir; ancak bazı önemli dezavantajlara sahiptir:

- Ölçeklenebilirlik ve stil tekrar kullanımı açısından oldukça sınırlıdır.
- Pseudo sınıflar, pseudo elementler ve duyarlı tasarım gibi ileri düzey stil özelliklerini desteklemez.
- Çok sayıda elemanın stilini yönetirken performans sorunları yaşanabilir.
- Geliştirici araçlarıyla entegre edilememesi (örneğin stil kontrolü ve hata ayıklama gibi).
- Autoprefixer gibi popüler araçlar tarafından desteklenmemesi.

```
Uygulamalarda inline stiller genellikle yalnızca dinamik olarak hesaplanan stil değerleri için, harici stil dosyalarıyla birlikte kullanılır. Ana stilizasyon yöntemi olarak tercih edilmez ve bu nedenle önerilmesi uygun değildir.
```