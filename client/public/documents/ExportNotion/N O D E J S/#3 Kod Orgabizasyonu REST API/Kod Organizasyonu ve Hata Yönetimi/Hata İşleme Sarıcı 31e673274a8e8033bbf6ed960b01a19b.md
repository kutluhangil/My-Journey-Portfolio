# Hata İşleme Sarıcı

Asenkron işlemler, özellikle veritabanı istekleri, hata durumlarında reddedilebilir. Bu tür işlemleri güvenli bir şekilde ele almak için `try...catch` bloğu kullanmak gereklidir. Asenkron bir işlem hata verirse ve bu hata yakalanmazsa, **`unhandledRejection`** (işlenmemiş vaadin reddi) hatası oluşur ve web sunucusunun çökmesine neden olabilir.

Bu tür hata yönetiminin en uygun yeri **kontrolörler**dir. Aşağıdaki örnekte bir kontrolörde `try...catch` bloğu kullanımı gösterilmiştir:

```
// src/controllers/students.js

export const getStudentsController = async (
  req,
  res,
	next,
) => {
	try {
	  const students = await getAllStudents();

	  res.json({
	    status: 200,
	    message: 'Successfully found students!',
	    data: students,
	  });
	} catch(err) {
		next(err);
	}
};
```

Hata ile `next` çağrısı, hataları işleyebilen **middleware**'e kontrolü aktarır. Bu, `server.js` içinde 4 parametre ile tanımlanan **middleware**'dir: `err`, `req`, `res` ve `next`**.**

Her kontrolörde `try...catch` kullanmak kod tekrarına (boilerplate code) yol açar ve uygulamanın okunabilirliğini azaltır. Bu sorunu çözmek için, kontrolör fonksiyonlarını **hata yönetimi** ile otomatik olarak saran bir yardımcı fonksiyon oluşturacağız.

Kod tekrarını önlemek ve hata yönetimini merkezi hale getirmek için `src/utils`klasöründe `ctrlWrapper.js` adında bir dosya oluşturacağız. Bu dosyada **`ctrlWrapper`** adında bir yardımcı sarıcı (wrapper) fonksiyonu tanımlayacağız:

```
// src/utils/ctrlWrapper.js

export const ctrlWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
```

Bundan sonra, bu fonksiyonu rotalarda kontrolörleri sarmak için kullanabiliriz.

```
// src/routers/students.js

import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
} from '../controllers/students';
import { ctrlWrapper } from '../utils/ctrlWrapper';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));

router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

export default router;
```

Bu sarıcı fonksiyon, bir kontrolör fonksiyonunu alır ve hata yönetimini ekleyerek geri döner. Böylece her kontrolörde `try...catch` bloğu eklemeye gerek kalmaz.