# Olay İşleyicisi (Event Handler)

React, JSX'e olay işleyicileri eklemenize olanak tanır. Olay işleyicileri, kullanıcı etkileşimlerine (örneğin tıklama, fareyle üzerine gelme, form alanlarına odaklanma) yanıt olarak tetiklenen özel işlevlerdir.

```
React'te addEventListener() kullanarak olay işleyicisi eklemek genellikle gerekmez. Ancak belirli özel durumlar için bu yönteme başvurulabilir; bu konuyu daha sonra ele alacağız.

```

JSX öğesine olay işleyicisi eklemek için, ona olay türünü tanımlayan bir prop iletmeniz gerekir. Prop'un değeri, olay meydana geldiğinde çağrılacak bir geri çağırma işlevine referans olmalıdır. Örneğin, şu anda hiçbir işlevi olmayan bir buton:

```
const App = () => {
	return <button>Click me!</button>;
};
```

Kullanıcı tıkladığında bir mesaj göstermesi için şu şekilde düzenleyelim:

- Bileşenin içinde `handleClick` adlı bir fonksiyon tanımlayalım.
- Fonksiyonun içinde, örneğin mesaj göstermek için `alert` kullanarak bir mantık kuralım.
- JSX koduna `<button>` için `onClick={handleClick}` ekleyelim.

```
const App = () => {
	const handleClick = () => {
		alert("I'm a button!");
	};

	return <button onClick={handleClick}>Click me!</button>;
};
```

Yukarıdaki örnekte, `handleClick` fonksiyonu tanımlandı ve bu işlev, buton bileşenine bir prop olarak iletildi.

- React'te olay prop'ları camelCase formatında tanımlanır ve genellikle `on` ön eki ile başlar. Örnekler: `onClick`, `onSubmit`, `onChange`.
- Olay işleyici fonksiyonları, `handleClick` gibi, bileşenler içinde tanımlanır.
- Geleneksel olarak, bir olay işleyicisinin adı `handle` ile başlar ve ardından olayın adı gelir. Genellikle `onClick={handleClick}`, `onSubmit={handleSubmit}` gibi ifadelerle sıkça karşılaşırsınız.

Olay işleyicileri ayrıca anonim fonksiyonlar olarak doğrudan JSX içinde tanımlanabilir:

```
const App = () => {
	return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
};
```

Bu yöntem, küçük işlevler için uygundur ve hızlı çözümler sunar. Ancak, daha karmaşık veya uzun işlevlerde anonim fonksiyonlar bileşenin okunabilirliğini zorlaştırabilir. Bu durumda, olay işleyicilerini bileşenlerin dışında tanımlamak daha iyi bir uygulama olarak kabul edilir.