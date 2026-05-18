# Login Oluşturma

Şimdi, giriş (login) işlevselliğini oluşturalım.

Kimlik doğrulama işlemi için genel yaklaşım olarak oturum bazlı bir sistem kullanacağız. Ayrıca, **refresh** ve **access** token çifti ile kullanıcı oturumlarını güvenli bir şekilde yöneteceğiz.

1. Giriş için bir fonksiyon oluşturalım:

```
// src/services/auth.js

import createHttpError from 'http-errors';

/* Dosyanın diğer kodları */

export const loginUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }
  const isEqual = await bcrypt.compare(payload.password, user.password); // Порівнюємо хеші паролів

  if (!isEqual) {
    throw createHttpError(401, 'Unauthorized');
  }

  // Daha sonra bu servisi tamamlayacağız
};
```

2. Bir kontrolör oluşturalım:

```
// src/controllers/auth.js

import { loginUser } from '../services/auth.js';

/* Dosyanın diğer kodları */

export const loginUserController = async (req, res) => {
  await loginUser(req.body);

  // Daha sonra bu kontrolörü tamamlayacağız
};
```

3. Doğrulama için bir şema oluşturalım:

```
// src/validation/auth.js

/* Dosyanın diğer kodları */

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
```

4. Giriş için ayrı bir yönlendirici oluşturalım:

```
// src/routers/auth.js

import { loginUserSchema} from '../validation/auth.js';
import { loginUserController } from '../controllers/auth.js';

/* Dosyanın diğer kodları */

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
```

Daha önce belirttiğimiz gibi, uygulamamızdaki kimlik doğrulama oturumlar temelinde inşa edilecektir.