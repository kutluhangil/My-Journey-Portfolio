# Bileşen Kaldırma Aşaması

`React.StrictMode`, geliştirme modunda her bileşenin **iki kez monte edilmesine**neden olur (montaj > sökme > tekrar montaj).

Şimdi, monte edildiğinde her iki saniyede bir mesaj gösterecek bir bileşen oluşturalım:

```
const App = () => {

  useEffect(() => {
    setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);
  }, []);

  return <div>App</div>;
};
```

**İkili montaj** nedeniyle, bu kodda bir yerine **iki zamanlayıcı** başlatılır:

1. `App` bileşeni DOM’a ilk kez monte edilir.
2. `useEffect` çalışır ve zamanlayıcı başlatılır.
3. `App` bileşeni DOM’dan kaldırılır.
4. `App` bileşeni ikinci kez monte edilir.
5. `useEffect` tekrar çalışır, ikinci bir zamanlayıcı başlatılır.
6. Bileşen DOM’da kalır ve güncellemeye hazır hâle gelir.

Bu durumda `StrictMode`, zamanlayıcıyı **temizlemediğimizi** (durdurmadığımızı) ortaya koyar. Bu da, her tekrar montajda yeni bir zamanlayıcının başlamasına ve **bellek sızıntısı** oluşmasına neden olur. Özellikle bu zamanlayıcı bir modal pencere açıldığında başlıyorsa, bu sorun daha belirgin hâle gelir.

**MODAL BİLEŞEN ÖRNEĞİ**

Montaj sırasında zamanlayıcı başlatan bir `Modal` bileşeni oluşturalım. `App`bileşeninde, `Modal` bileşeninin görünürlüğünü kontrol eden bir durum (state) ekleyelim:

```
const Modal = () => {
  useEffect(() => {
    setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);
  }, []);

  return <div>Modal</div>;
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
    </div>
  );
};
```

Her seferinde modal pencere açıldığında yeni bir zamanlayıcı başlatılır. Konsola **her iki saniyede bir** değil, çok daha sık mesaj yazıldığını göreceksiniz. Bunun nedeni, `Modal` bileşeni **söküldüğünde zamanlayıcının durdurulmamasıdır**. Bu da bellek sızıntısına yol açar.