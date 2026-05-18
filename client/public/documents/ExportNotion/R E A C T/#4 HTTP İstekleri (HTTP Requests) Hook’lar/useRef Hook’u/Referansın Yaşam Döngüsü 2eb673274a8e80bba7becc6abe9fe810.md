# Referansın Yaşam Döngüsü

React, `useRef` ile oluşturulan referansı `current` özelliği aracılığıyla DOM elementine bağlar. Bileşen ilk yüklendiğinde (montaj sırasında) bu referans henüz tanımsız (`undefined`) olur. Ancak bileşen tamamen yüklendikten sonra, referans DOM elementini gösterir. Bileşen kaldırıldığında referans yeniden `undefined` olur.

```
import { useState, useRef } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

	// İlk render işleminde undefined olacaktır
	// ve sonraki tüm işlemler için DOM öğesine bir referans
  console.log("App: ", btnRef.current);

  useEffect(() => {
		// Efekt montajdan sonra gerçekleştirilir,
		// böylece her zaman bir DOM öğesine referans olacaktır
    console.log("useEffect: ", btnRef.current);
  });

  const handleClick = () => {
		// Tıklamalar montajdan sonra olacaktır,
		// böylece her zaman bir DOM öğesine referans olacaktır
    console.log("handleClick: ", btnRef.current);
  };

  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
};
```