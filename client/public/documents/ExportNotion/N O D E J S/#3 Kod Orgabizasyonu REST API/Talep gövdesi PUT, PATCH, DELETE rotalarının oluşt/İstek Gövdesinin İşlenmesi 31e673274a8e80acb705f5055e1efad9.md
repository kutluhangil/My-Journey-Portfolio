# İstek Gövdesinin İşlenmesi

İstek gövdesine, kontrolörde `req` nesnesinden `body` özelliği aracılığıyla erişilebilir.

```
const controller = (req, res) => {
	const body = req.body;
}
```

Varsayılan olarak, `req.body` boş bir nesne olarak gelir. Ancak, istek gövdesini işleyebilmek (parse edebilmek) için **Express**'te ek bir yapılandırma yapılması gereklidir. Bu işlem, **middleware** kullanılarak gerçekleştirilir. Daha önce `server.js`dosyasında yapılandırmıştık:

```
import express from 'express';

const app = express();

app.use(express.json())
```

Bu middleware, Express’in istek gövdesini otomatik olarak ayrıştırmasını ve ayrıştırılan veriyi `req.body` içine yerleştirmesini sağlar. Ancak bu, yalnızca istekteki Content-Type başlığı `application/json` olarak ayarlandığında geçerlidir.

**`Not:** İnternette bu işlev için body-parser paketinin kullanıldığı örneklerle karşılaşabilirsiniz. Ancak body-parser, artık eski bir yöntemdir; bu işlevsellik artık Express’in yerleşik özellikleriyle sağlanmaktadır.`

İstek gövdesi JSON formatında olsa bile, `Content-Type` başlığı farklı bir değer içerebilir. Örneğin, **JSON:API** spesifikasyonu kullanıldığında, `Content-Type` başlığı `application/vnd.api+json` olarak ayarlanabilir. Bu gibi durumlar için **middleware**yapılandırmasına ek içerik türleri tanımlanmalıdır:

```
import express from 'express';

const app = express();

app.use(express.json({
	type: ['application/json', 'application/vnd.api+json'],
}))
```

Ayrıca ayarlarda, isteğin gövdesinin boyutunu sınırlayacak `limit` özelliğini de iletebilirsiniz; bu, bazı durumlarda faydalı olabilir. Limit aşıldığında, istek hata ile reddedilecektir.

```
import express from 'express';

const app = express();

app.use(
  express.json({
    type: ['application/json', 'application/vnd.api+json'],
    limit: '100kb',
  }),
);
```