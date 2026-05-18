# Varsayılan yapılandırma

Aynı temel sunucu adresine sahip, ancak farklı kaynaklara yönelik birkaç isteğinizin olduğu bir durum düşünün. Geliştirici, her isteğin kodunda temel adresi ([`https://jsonplaceholder.typicode.com`](https://jsonplaceholder.typicode.com/)) tekrarlamak zorundadır ki bu pek uygun değildir.

```
axios.get('<https://jsonplaceholder.typicode.com/users>')
	.then()
	.catch();

axios.get('<https://jsonplaceholder.typicode.com/posts>')
	.then()
	.catch();

axios.get('<https://jsonplaceholder.typicode.com/images>')
	.then()
	.catch();
```

Her isteğe uygulanacak varsayılan yapılandırma ayarlarını `axios.defaults`özelliğinde belirtebilirsiniz. `axios.defaults.baseURL` özelliği, tüm HTTP istekleri için temel adresin saklanmasından sorumludur.

```
import axios from "axios";

axios.defaults.baseURL = '<https://jsonplaceholder.typicode.com>';
```

Şimdi, istek kodunu aşağıdaki örnekte gördüğünüz gibi yeniden yazabilirsiniz — temel adresten sonra adresin yalnızca bir kısmını belirterek. Sorguları çalıştırırken, Axios her sorguya otomatik olarak `baseURL` değerini ekleyecektir.

```
import axios from "axios";

axios.defaults.baseURL = '<https://jsonplaceholder.typicode.com>';

axios.get('/users')
	.then()
	.catch();

axios.get('/posts')
	.then()
	.catch();

axios.get('/images')
	.then()
	.catch();
```