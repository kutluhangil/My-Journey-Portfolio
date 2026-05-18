# Sorgu dizesi parametreleri - Query string parametreleri

Bir sorguya sorgu dizesi parametreleri eklemenin birkaç yolu vardır.

1. Elbette bunları URL'ye dahil edebilirsiniz.
`axios.get("<https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name>");`

2. Veya `URLSearchParams` sınıfını kullanın.

```
const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

axios.get(`https://jsonplaceholder.typicode.com/users?${searchParams}`);
```

3. Ancak Axios bize daha kullanışlı bir yol sunar. Bir yapılandırma nesnesinde (`config`parametresi), `params` özelliğinde bir parametre nesnesi belirtebilirsiniz.

```
axios.get("<https://jsonplaceholder.typicode.com/users>", {
	params: {
		_limit: 7,
		_sort: "name"
	}
});
```

Axios, `URLSearchParams` kullanarak adrese parametreli bir sorgu dizesi eklemek için bu nesneyi kullanır.