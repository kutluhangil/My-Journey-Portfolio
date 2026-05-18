# Yönlendirme Organizasyonu

Bu noktaya kadar, `server.js` ana dosyasında istekleri işlemek için işleyiciler (handler'lar) yazdık. Bu yaklaşım, yalnızca birkaç yönlendirme olduğunda uygun olabilir. Ancak büyük uygulamalarda daha fazla yönlendirme bulunabileceğinden, yönlendirmeleri mantıksal parçalara ayırmak için Express Router işlevselliğinden yararlanabiliriz.

import { Router } from 'express';

**Router** (Yönlendirici), yönlendirmeleri ve işleyicilerini (middleware) mantıksal gruplar halinde gruplamayı sağlayan bir nesnedir.

Yönlendirme için `src/routers` adında bir klasör oluşturulacak ve her koleksiyon için ayrı bir yönlendirme dosyası oluşturulacaktır. `students` koleksiyonu ile etkileşim için yönlendirme ayarlarını saklayacağımız `students.js` dosyasını `src/routers` klasörüne ekleyelim.

`Router`'ı **Express**'ten içe aktararak `router` adında bir yönlendirici nesnesi oluşturuyoruz ve hemen ardından bunu dışa aktarıyoruz.

```
// src/routers/students.js

import { Router } from "express";

const router = Router();

export default router;
```

Sonrasında, `server.js` dosyasından `/students` ve `/students/:studentId`yönlendirmelerini işleyen işleyicileri `students.js` yönlendirme dosyasına taşıyoruz, ancak bunları tanımlarken `app` yerine oluşturduğumuz `router`'ı kullanıyoruz.

```
// src/routers/students.js

import { Router } from 'express';
import { getAllStudents, getStudentById } from '../services/students.js';

const router = Router();

router.get('/students', async (req, res) => {
  const students = await getAllStudents();

  res.status(200).json({
    data: students,
  });
});

router.get('/students/:studentId', async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  // Öğrenci bulunamazsa yanıt
  if (!student) {
    res.status(404).json({
	    message: 'Student not found'
    });
    return;
  }

	// Öğrenci bulunursa yanıt
  res.status(200).json({
    data: student,
  });
});

export default router;
```

Artık oluşturduğumuz yönlendiriciyi `server.js` dosyasına içe aktaralım ve bunu `app`'e **middleware** olarak ekleyelim, `app.use()` metodunu kullanarak.

```
// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import studentsRouter from './routers/students.js'; // Імпортуємо роутер
import { env } from './utils/env.js';

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

  app.use(studentsRouter); // Yönlendiriciyi app'e middleware olarak ekliyoruz

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
```