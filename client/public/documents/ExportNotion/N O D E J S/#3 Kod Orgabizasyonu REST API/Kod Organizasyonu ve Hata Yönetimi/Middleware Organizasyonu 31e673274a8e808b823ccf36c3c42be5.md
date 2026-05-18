# Middleware Organizasyonu

Hata işleme ve var olmayan rotaları ele alan **middleware**'leri ayrı dosyalara taşıyarak uygulama organizasyonunu iyileştirelim.

- Özel middleware'leri saklamak için `src/middlewares` klasörünü ekleyelim.
- `middlewares` klasöründe `errorHandler.js` dosyasını oluşturalım.
- Hata işleme middleware kodunu `server.ts` dosyasından `errorHandler.js`dosyasına taşıyalım.

```
// src/middlewares/errorHandler.js

export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
};
```

İstemcinin var olmayan bir rotaya erişim sağladığı durumları yönetmek için ayrı bir middleware dosyası oluşturacağız:

- `middlewares` klasöründe `notFoundHandler.js` dosyasını oluşturalım.
- Hata işleme middleware kodunu `server.js` dosyasından `notFoundHandler.js`dosyasına taşıyalım

```
// src/middlewares/notFoundHandler.js

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Route not found',
  });
};
```

Son olarak, oluşturduğumuz middleware'leri `server.js` dosyasına import ederek `app.use` aracılığıyla uygulamamıza ekleyelim.

```
// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import studentsRouter from './routers/students.js';
import { env } from './utils/env.js';
// Імпортуємо middleware
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
  });

  app.use(studentsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
```