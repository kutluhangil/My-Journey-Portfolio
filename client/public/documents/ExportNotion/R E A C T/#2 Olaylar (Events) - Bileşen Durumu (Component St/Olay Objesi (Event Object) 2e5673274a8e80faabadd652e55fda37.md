# Olay Objesi (Event Object)

React'te olay işleyicisi olarak iletilen geri çağırma fonksiyonu, olayın türü ne olursa olsun, varsayılan olarak bir argüman alır — bu argüman, tarayıcı tarafından oluşturulan olay nesnesidir.

```
const App = () => {
	const handleClick = (evt) => {
		console.log(evt);
	};

	return (
		<>
			<button onClick={handleClick}>First button</button>
			<button onClick={evt => console.log(evt)}>Second button</button>
		</>
	);
};
```

```
React, tarayıcı olayları için SyntheticEvent adı verilen sarıcı bir nesne oluşturur. Bu, çapraz tarayıcı uyumluluk sorunlarını önlemek için tasarlanmıştır. Geliştirici açısından bakıldığında, SyntheticEvent ile çalışmak, yerel olay nesneleriyle çalışmaya çok benzer.
SyntheticEvent sayesinde, farklı tarayıcıların farklı olay işleme biçimlerinden etkilenmeden, tutarlı ve tarayıcıdan bağımsız bir kod yazabilirsiniz. Bu da olay işleme işlemlerini daha güvenilir ve yönetilebilir hale getirir.
```