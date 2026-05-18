# Swagger UI - Rota Oluşturma

Önceki adımlarda birkaç uç nokta için belgeler oluşturduk ve bu belgelerin derlenmesini tek bir dosya olarak **`/docs/swagger.json`** konumunda ayarladık. Şimdi, belgeleri yalnızca önizleme modunda görmek yerine, uygulama içerisinde **Swagger UI**'yi sunan ayrı bir rota oluşturalım.

`npm i swagger-ui-express`

Şimdi, `swaggerDocs` adında bir fonksiyon yazalım; bu fonksiyon ya Swagger için bir rotayı döndürecek ya da herhangi bir nedenle `swagger.json` mevcut değilse veya bozuksa 500 hatası verecek.

Bunun için `src/constants/index.js` dosyasında `SWAGGER_PATH` sabitini oluşturacağız:

```
// src/constants/index.js

/* Dosyanın diğer kodları */

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
```

`src/middlewares/swaggerDocs.js` dosyasında `swaggerDocs` fonksiyonunu tanımlayalım:

```
// src/middlewares/swaggerDocs.js

import createHttpError from 'http-errors';
import swaggerUI from 'swagger-ui-express';
import fs from 'node:fs';

import { SWAGGER_PATH } from '../constants/index.js';

export const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString());
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (err) {
    return (req, res, next) =>
      next(createHttpError(500, "Can't load swagger docs"));
  }
};
```

Bu fonksiyonu **`/api-docs`** rotasına uygulayalım:

```
// src/server.js

import { swaggerDocs } from './middlewares/swaggerDocs.js';

/* Dosyanın diğer kodları */

  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use('/api-docs', swaggerDocs());

/* Dosyanın diğer kodları */
```

Artık, daha önce `package.json` dosyasında tanımladığımız **`npm run build-docs`**komutunu terminalde çalıştırarak Swagger belgelerini derleyebiliriz. Tarayıcınızda [http://localhost:3000/api-docs](http://localhost:3000/api-docs**) adresine giderek Swagger belgelerinizi görüntüleyebilirsiniz.