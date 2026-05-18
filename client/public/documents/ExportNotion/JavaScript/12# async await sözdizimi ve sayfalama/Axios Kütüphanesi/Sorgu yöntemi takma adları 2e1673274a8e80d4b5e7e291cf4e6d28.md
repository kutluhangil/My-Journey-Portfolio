# Sorgu yöntemi takma adları

Axios kütüphanesi, sorgu sözdizimini basitleştirmek ve standart ayarlar eklemek için desteklenen tüm sorgu yöntemleri için takma adlar (aynı ada sahip yöntemler) sağlar.

Zaten bildiğimiz GET istek kodunu ele alalım.

```
import axios from "axios";

axios({
  method: 'get',
  url: '<https://jsonplaceholder.typicode.com/users>'
})
	.then(response => console.log(response))
	.catch(error => console.log(error))
```

`axios.get(url[, config])` yöntemi bir GET isteğini yürütmenin basitleştirilmiş bir yoludur.

Köşeli parantezler, dokümantasyonda isteğe bağlı bir argümanı gösterir ve kodun bir parçası değildir.

```
import axios from "axios";

axios.get('<https://jsonplaceholder.typicode.com/users>')
	.then(response => console.log(response))
	.catch(error => console.log(error))
```

Bu nedenle, `axios.get` yöntemi yalnızca istek adresine ihtiyaç duyar ve GET yöntemi isteği otomatik olarak doldurur. Buna ek olarak `Axios`, sunucudan çoğunlukla JSON beklediğimiz için isteğe application/json belirten `Accept` gibi standart HTTP üstbilgileri ekler.