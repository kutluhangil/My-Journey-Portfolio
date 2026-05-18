# Kontrolörde Doğrulama

Kontrolörün içinde doğrudan **`req.body`** doğrulamasını çağırabiliriz:

```
//...
app.post(
  '/students',
  async (req, res, next) => {
    try {
      await createStudentSchema.validateAsync(req.body, { abortEarly: false });
      //..
    } catch (validationError) {
      next(validationError);
    }
  },
);
```

`validateAsync metodunun kullanımına dikkat edin. Bu metot, doğrulama işlemini asenkron olarak gerçekleştirmemizi sağlar. Özellikle, doğrulamanın harici kaynaklara başvurduğu veya gelecekte ek asenkron kontrollerin eklenebileceği senaryolarda faydalıdır.`

Ancak bu yöntem, kontrolörün içinde fazla mantık barındırdığı için kodun karmaşıklaşmasına neden olabilir. Bu nedenle doğrulamayı ayrı bir middleware olan `validateBody`'ye taşımak iyi bir çözüm olacaktır. Bunun için `middlewares` klasöründe ayrı bir dosya oluştur:

```
// src/middlewares/validateBody.js

import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const error = createHttpError(400, 'Bad Request', {
      errors: err.details,
    });
    next(error);
  }
};
```

Bu durumda, bu middleware'i oluşturma yaklaşımı, hata işleme için oluşturduğumuz sarmalayıcıya oldukça benzer.
Artık böyle bir middleware'e sahip olduğumuza göre, bunu ayrı bir route'a şu şekilde uygulayabiliriz:

```
// src/routers/students.js

import { validateBody } from '../middlewares/validateBody.js';
import { createStudentSchema } from '../validation/students.js';

/* Dosyanın geri kalan kodu */

router.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);
```

Yukarıdaki örnekte, **`validateBody`** middleware'i ile istek gövdesini (**`req.body`**) doğrulamak için **`createStudentSchema`** kullanılmıştır. Ayrıca, kontrolör fonksiyonu bir hata işleme sarmalayıcısıyla (**`ctrlWrapper`**) çevrelenmiştir.

Middleware kullanarak istek gövdesi üzerinde doğrulama yapmamız, rotalarımızın güvenliğini ve tutarlılığını artırır. Şimdi, bir öğrenciyi güncellerken gerekli olan nesne doğrulamasını gerçekleştirecek bir **Joi** şeması oluşturalım:

```
// src/validation/students.js

/* Dosyanın geri kalanı */

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  age: Joi.number().integer().min(6).max(16),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
});
```

Bu şema, kullanıcı güncelleme işlemleri sırasında tüm alanların isteğe bağlı olduğu bir yapıyı temsil eder. Bu durum, tüm alanların zorunlu olduğu kullanıcı oluşturma şemasından farklıdır.

Şimdi, oluşturduğumuz **`validateBody`** middleware'ini rotalarımıza entegre edelim:

```
// src/routers/students.js

import { updateStudentSchema } from '../validation/students.js';

/* Dosyanın geri kalanı */

router.put(
  '/students/:studentId',
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/students/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);
```

Veri doğrulama, **Node.js** tabanlı uygulamalar geliştirilirken kritik bir unsurdur. **Joi**kütüphanesi, uygulamalarımızdaki verilerin doğruluğunu kolayca kontrol etmemize olanak tanır.

Doğrulama işlemlerini kontrolcülere eklemek yerine bir **middleware** aracılığıyla yapmak, kodun modülerliğini, okunabilirliğini ve yeniden kullanılabilirliğini artırır. Bu araçlar bir araya geldiğinde, uygulamalarımızın hem güvenilirliğini hem de etkili bir şekilde çalışmasını sağlamaya yardımcı olur.