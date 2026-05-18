# Nesnelerin (State) Güncellenmesi

React uygulamalarında durum (state), herhangi bir veri tipi içerebilir, buna nesneler de dahildir.

```
const App = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

	const updateX = () => {};

	const updateY = () => {};

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
};
```

React'ta durum güncellemeleri **mutasyon** (değiştirme) yoluyla yapılmamalıdır. Bir durumu doğrudan değiştirirseniz, React bu değişikliği algılamaz ve bileşen yeniden render edilmez. Bu, arayüzde güncellemelerin doğru şekilde görünmemesine neden olur.

```
const updateX = () => {
	// ❌ Bu bir mutasyon, böyle yapılamaz!
	values.x += 1;
};
```

`Başka bir deyişle, durumu yalnızca okunabilir (immutable) bir veri yapısı olarak düşünmeliyiz. Durum üzerinde doğrudan değişiklik yapılmamalıdır!`

Nesneler de diğer durumlar gibi, yalnızca setter fonksiyonu kullanılarak güncellenmelidir.

```
const updateX = () => {
	setValues({
		x: values.x + 1
	});
};
```

Ancak bu yöntemi kullanırken dikkat edilmesi gereken bir nokta var: Eğer durumu bu şekilde güncellemeye çalışırsanız, **`values`** nesnesindeki **`y`** değerini kaybedersiniz. Çünkü `setValues` fonksiyonu durumu tamamen yeniden yazar ve sadece **`{x: 1}`** şeklinde bir nesne kalır. Yani **`{x: 1, y: 0}`** yerine **`{x: 1}`** olur.

Bu nedenle, bir nesneyi güncellerken mevcut durumu kaybetmemek için eski durumun bir kopyasını alarak çalışmak gerekir.

```
const updateX = () => {
	setValues({
		...values,
		x: values.x + 1
	});
};
```

Bu kodda, mevcut durumu **spread operator** (`...values`) ile kopyalıyoruz ve ardından yalnızca **`x`** değerini güncelliyoruz. Böylece nesnenin diğer özellikleri korunuyor.

Aşağıda, durumu doğru bir şekilde güncelleyen tamamlanmış örneği bulabilirsiniz:

```
const App = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
	  });

	const updateX = () => {
			setValues({
			...values,
			x: values.x + 1
		});
	};

	const updateY = () => {
		setValues({
			...values,
			y: values.y + 1
		});
	};

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );
};
```