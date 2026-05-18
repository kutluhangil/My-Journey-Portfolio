# Kimlik Doğrulama

Bir API'nin güvenli ve istikrarlı bir şekilde çalışmasını sağlamak için, istek parametreleri aracılığıyla iletilen kimliklerin doğruluğunu kontrol etmek kritik önem taşır. Bu işlem, hatalı veya kötü amaçlı isteklerin neden olabileceği güvenlik açıklarını ve sistem kararsızlıklarını önler.

Bu amaca yönelik olarak, bir **`isValidId`** middleware'i oluşturarak kimlik doğrulama işlemlerini merkezi ve etkili bir şekilde yönetebiliriz:

```
// src/middlewares/isValidId.js

import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { studentId } = req.params;
  if (!isValidObjectId(studentId)) {
    throw createHttpError(404, 'Not found');
  }

  next();
};
```

Bu middleware'i, öğrenci kimliğini içeren tüm rotalarda kullanmalıyız. Örneğin:

```
// src/routers/students.js

import { isValidId } from '../middlewares/isValidId.js';

/* Dosyanın geri kalan kodu */

router.get(
  '/:studentId',
  isValidId,
  ctrlWrapper(getStudentByIdController),
);
```