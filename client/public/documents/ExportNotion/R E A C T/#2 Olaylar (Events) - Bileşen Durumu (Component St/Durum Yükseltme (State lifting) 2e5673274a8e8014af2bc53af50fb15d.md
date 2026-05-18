# Durum Yükseltme (State lifting)

Peki ya tüm `ClickCounter` bileşenlerinin durumlarını senkronize etmek istersek ne yapmalıyız?

React'ta bu durum, **state lifting** olarak bilinir. Yani durumu alt bileşenlerden alıp en yakın ortak üst bileşene taşıyarak merkezi bir yerde yönetmek anlamına gelir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/990ac9dd-3410-4b9f-89f0-cbf29e3aaee5Screenshot%202023-12-11%20at%2021.31.38.png)

Bu örnekte, `clicks` durumunu `App` bileşenine taşıyalım:

```
const ClickCounter = () => {
	return <button onClick={handleClick}>Current: {clicks}</button>
};

const App = () => {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
			<ClickCounter />
			<ClickCounter />
    </>
  );
};
```

Bu kodda bir sorun var: `ClickCounter` bileşeni, ne `clicks` değerini biliyor ne de `handleClick` fonksiyonuna erişimi var; çünkü bu değerler artık `App` bileşeninde tanımlı.

Bu problemi çözmek için, durumu ve durumu değiştiren fonksiyonu **prop** olarak `ClickCounter` bileşenine iletebiliriz.

`value` adlı prop ile durumu, `onUpdate` adlı prop ile de güncelleme fonksiyonunu iletelim:

```
// ClickCounter, onClick olayı sırasında çağrılan onUpdate (prop adı) fonksiyonunu alır
const ClickCounter = ({ value, onUpdate }) => {
	return <button onClick={onUpdate}>Current: {value}</button>
};

const App = () => {
	const [clicks, setClicks] = useState(0);

  // ClickCounter'a ileteceğimiz fonksiyon
  // tıklama sırasında çağrılacak
	const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
			<ClickCounter value={clicks} onUpdate={handleClick} />
			<ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
};
```

Bu yapıda, butonlardan birine tıklandığında `App` bileşeninin durumu güncellenir. Ardından yeni `value` değeri, prop aracılığıyla `ClickCounter` bileşenlerine aktarılır ve her biri yeniden render edilir.

Bu süreçte şunu öğrendik:

Bir alt bileşenin etkileşimi sonucu üst bileşenin durumunu değiştirmek istiyorsak, **durum yükseltme (state lifting)** desenini kullanmamız gerekir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/097c8a5a-f195-4d64-abd3-8a83fa74da55image%20%284%29.gif)

**Durum yükseltme nasıl çalışır?**

- Ebeveyn bileşen durumu tutar ve bu durumu değiştirecek bir fonksiyon içerir.
- Bu fonksiyon, bir prop olarak alt bileşene aktarılır.
- Alt bileşen, bu fonksiyonu tetiklediğinde ebeveynin durumu güncellenir.
- Durum değişince, ebeveyn bileşen yeniden render olur ve alt bileşenler de güncellenmiş prop’larla tekrar render edilir.

Durum yükseltme, bileşenler arasında veri akışını yukarıdan aşağıya doğru düzenli bir şekilde kurmanıza yardımcı olur. Böylece uygulamanın tutarlılığı ve bakımı kolaylaşır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/25d54861-7800-433e-9929-7d26a2a4aefbimage%20%285%29.gif)