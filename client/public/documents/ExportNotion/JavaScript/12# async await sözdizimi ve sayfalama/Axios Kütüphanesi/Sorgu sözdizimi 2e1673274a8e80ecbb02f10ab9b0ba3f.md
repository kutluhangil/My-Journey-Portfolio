# Sorgu sözdizimi

İstekler `axios` çağrılarak ve uygun yapılandırma nesnesi geçirilerek yapılabilir. GET isteğini çalıştıran kodu yazalım.

```
import axios from "axios";

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>'
});
```

`Axios` işlevi çalıştırıldıktan sonra, standart `then` ve `catch` yöntemleriyle işlediğimiz bir promise elde ederiz.

```
import axios from "axios";

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>'
})
	.then(response => console.log(response))
	.catch(error => console.log(error));
```