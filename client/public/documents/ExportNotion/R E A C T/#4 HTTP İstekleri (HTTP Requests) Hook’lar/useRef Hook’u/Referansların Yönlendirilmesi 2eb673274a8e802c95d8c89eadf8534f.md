# Referansların Yönlendirilmesi

Bir bileşen içinde `ref` kullanıldığında, bu özellik otomatik olarak alt bileşenlere iletilmez. Yani, bir bileşenin içindeki DOM öğesine dışarıdan referans verilemez. Bu durumda `forwardRef` fonksiyonu kullanılır:

```
import { forwardRef, useRef, useEffect } from "react";

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

const App = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
};
```

Bu yöntemle, üst bileşenden alt bileşendeki DOM öğesine doğrudan erişim sağlanabilir. Bu teknik özellikle galeri, modal veya özel input gibi bileşenlerde faydalıdır.