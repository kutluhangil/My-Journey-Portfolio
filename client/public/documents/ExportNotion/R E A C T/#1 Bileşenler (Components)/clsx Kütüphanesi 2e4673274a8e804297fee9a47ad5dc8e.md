# clsx Kütüphanesi

Daha dinamik stil yönetimi gerektiğinde, `clsx` kütüphanesi kullanılarak birden fazla sınıfın birleştirilmesi sağlanabilir. Örneğin, `outlined` ve `elevated` gibi prop'lar için CSS sınıflarını dinamik olarak ekleyebiliriz. Birden fazla kelimeden oluşan sınıf adları camelCase (yılan yazımı) ile yazılır; aksi takdirde, bu sınıflara nesne özellikleri olarak erişmek zorunda kalırsınız. Örneğin `css["is-outlined"]`, bu da daha az pratiktir.

```
/* src/components/Alert.module.css */

/* Tüm önceki CSS kodu */

.alert.isOutlined {
  outline: 1px solid black;
}

.alert.isElevated {
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
}
```

Şimdi `clsx` kütüphanesini, `className` özelliğinin nihai değerini oluşturmak için yeniden kullanıyoruz.

```
// src/components/Alert.jsx

import clsx from "clsx";
import css from "./Alert.module.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};
```