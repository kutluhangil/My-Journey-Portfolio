# clsx Kütüphanesi

Birden fazla koşula bağlı olarak belirlenen sınıfları yönetmek için [**clsx**](https://www.npmjs.com/package/clsx) kütüphanesi sıkça kullanılmaktadır. JavaScript, sınıfların dinamik olarak belirlenmesi için zengin bir sözdizimi sunsa da, bu tür işlemler bazen karmaşık ve zor anlaşılır kodlara neden olabilir. `clsx`, bu süreci standartlaştırarak, daha sade ve okunabilir bir sözdizimi sağlar.

`npm install clsx`

`clsx` fonksiyonuna bir dizi ifade, bir argüman seti olarak verilebilir. `true` değerine dönüştürülen, sonucu bir dize ya da sayı olan ifadeler, son sınıf listesine eklenir.

```
import clsx from "clsx";

const className = clsx(
  "first",
  10,
  undefined && "second",
  true && "third",
  false ? "fourth" : "fifth"
);
console.log(className); // "first 10 third fifth"
```

`clsx` kullanılarak oluşturulmuş `Alert` bileşeni şu şekilde görünecektir. Bu gibi basit durumlarda bile, kod daha temiz ve okunabilir bir yapıya kavuşur.

```
// src/components/Alert.jsx

import clsx from "clsx";
import "./Alert.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        "alert",
        variant,
        outlined && "is-outlined",
        elevated && "is-elevated"
      )}
    >
      {children}
    </p>
  );
};
```

`clsx` fonksiyonunun değişken ve nesne biçimlerini birleştirmek mümkündür. İlk olarak, her zaman var olacak sınıflar belirtilir; ardından ayar nesnesinde, bazı hesaplamalara bağlı olarak dinamik sınıf değerleri sıralanır. Bu kayıt biçiminin daha açıklayıcı ve anlaşılır olduğunu düşünüyoruz, bu yüzden özellikle bu yöntemi kullanmanızı öneririz.

```
// src/components/Alert.jsx

import clsx from "clsx";
import "./Alert.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
};
```

Son olarak, burada ele aldığımız tüm materyali içeren canlı bir örneği inceleyebilirsiniz.

[https://codesandbox.io/p/sandbox/goit-react-textbook-lesson-2-vanilla-css-clsx-tmd9ht?file=%2Fsrc%2FAlert.js](https://codesandbox.io/p/sandbox/goit-react-textbook-lesson-2-vanilla-css-clsx-tmd9ht?file=%2Fsrc%2FAlert.js)

[https://stackblitz.com/edit/vitejs-vite-rzwktrij?file=src%2FAlert.jsx](https://stackblitz.com/edit/vitejs-vite-rzwktrij?file=src%2FAlert.jsx)