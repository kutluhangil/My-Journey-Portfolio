# Reaktif Olmama

Referanslar bir `state` değildir, yani reaktif değildir. Referansın güncellenmesi bileşeni yeniden render etmez.

```
import { useEffect, useRef } from "react";

const App = () => {
  const valueRef = useRef(0);

  useEffect(() => {
		// Kurulum sırasında yalnızca bir kez çalıştırılacaktır.
		// Ref değerinde sonraki güncellemeler yapılmayacaktır
		// bileşenin güncellenmesine neden olmaz
    console.log(valueRef.current);
  });

  const handleClick = () => {
    valueRef.current += 1;
  };

  return <button onClick={handleClick}>Click to update ref value</button>;
};
```

Ref'ler ayrıca bileşen render'ları arasında değişmeyen, ancak bileşeni etkilemeyen keyfi değerlerin depolanması için kullanılabilir. Örneğin, `useRef` hook'unda, `current`niteliği başlangıç değeri olarak 0'a ayarlanmıştır. Bu özellik, daha karmaşık bileşenlerde, değerlerin bileşen ömrü boyunca sabit kalmasını sağlar.