# Durum Yönetimi

Bileşende ihtiyaç duyulduğu kadar etki (`effect`) tanımlanabilir. Bu, her bir işlemi bağımsız olarak gruplandırarak mantıksal olarak daha okunabilir bir yapı oluşturmayı sağlar.

Aşağıdaki örnekte, bileşene daha önce ele alınan tüm etkiler eklenmiştir. Her bir etki, kendi görevini yerine getirir, belirtilen bağımlılıklara göre tetiklenir ve diğerlerinden bağımsız olarak çalışır:

```
import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
};
```

Bileşende birden fazla durum (state) bulunduğunda, farklı değer kombinasyonlarındaki değişikliklere tepki vermek ve belirli kodları yürütmek için birden fazla `useEffect` kullanılabilir. Burada önemli olan, her etkinin bağımlılıklarını doğru şekilde belirtmektir. Bu sayede yalnızca belirli değerler değiştiğinde tetiklenen etkiler elde ederiz:

```
const App = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("First updated: ", first);
  }, [first]);

  useEffect(() => {
    console.log("Second updated: ", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated: ", first + second);
  }, [first, second]);

  return (
    <>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
    </>
  );
};
```

`Unutmayalım ki, her bir etki, bileşen **ilk kez monte edildiğinde** de çalışır. Bu da, henüz herhangi bir durum güncellemesi olmadan önce bile konsolda tüm ilgili mesajların görüntüleneceği anlamına gelir.`