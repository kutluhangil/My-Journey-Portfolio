# Yanıt nesnesi

İstek yanıtı nesnesi aşağıdaki bilgileri içerir.

```
{
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  request: {}
}
```

- `data` — sunucu tarafından sağlanan cevap
- `status` — sunucu yanıtından alınan HTTP durum kodu
- `statusText` — sunucu yanıtından HTTP durum mesajları
- `headers` — sunucunun yanıt verdiği HTTP üstbilgileri
- `config` — istek için Axios'a sağlanan yapılandırma
- `request` — bu yanıtı oluşturan sorgu

`then` yönteminde, yanıt nesnesinde aşağıdaki özellikleri alırsınız.

```
import axios from "axios";

axios.get('<https://jsonplaceholder.typicode.com/users>')
	.then(response => {
		console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
	})
	.catch(error => {
		console.log(error);
	})
```

Yanıt verilerini saklayan `data` özelliğine dikkat edin.

`fetch`'in aksine, `response.json()` ile yanıt verilerini ayrıştırmamız gerekmez. Bu otomatik olarak yapılır ve `data` özelliğine eklenir. Ek olarak, `response.ok` özelliğinde yanıt durumunu kontrol etmeye gerek yoktur. Axios kütüphanesi bunu otomatik olarak yapar ve 404'ler de dahil olmak üzere herhangi bir başarısız HTTP yanıt kodu için isteği bir hata ile reddeder.