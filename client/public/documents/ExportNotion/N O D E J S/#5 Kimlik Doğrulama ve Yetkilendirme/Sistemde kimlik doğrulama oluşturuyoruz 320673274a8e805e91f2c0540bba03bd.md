# Sistemde kimlik doğrulama oluşturuyoruz

Yetkilendirme ve kimlik doğrulama süreçlerinin temel başlangıç noktası, kullanıcıların kaydıdır. Uygulamamızda **Kullanıcı (User)** ayrı bir varlık olarak ele alınacak. Bu nedenle, öncelikle kullanıcı için bir şema tanımlamamız gerekir.

Örneğin, kullanıcının e-posta adresinin benzersiz olması gerektiğinden, şemaya **`unique: true`** özelliğini ekleyeceğiz.

```
// src/db/models/user.js
import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const UsersCollection = model('users', usersSchema);
```

Doğrulama için bir şema oluşturacağız:

```
// src/validation/auth.js
import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
```

Sonrasında, daha önce öğrendiğimiz Student modelini oluşturma sürecine oldukça benzer bir şekilde ilerleyeceğiz:

1. Kullanıcı kaydı için bir hizmet fonksiyonu tanımlayacağız.

```
// src/services/auth.js

import { UsersCollection } from '../db/models/user.js';

export const registerUser = async (payload) => {
  return await UsersCollection.create(payload);
};
```

2. Bir kontrolör oluşturacağız:

```
// src/controllers/auth.js

import { registerUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
```

3. Yetkilendirme için ayrı bir yönlendirici oluşturacağız:

```
// src/routers/auth.js

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

export default router;
```

Artık öğrenci koleksiyonu ve kullanıcı koleksiyonu ile etkileşim için 2 ayrı yönlendiricimiz olduğuna göre, bunların bağlantılarını ayrı bir dosyaya `src/routers/index.js` taşımak daha iyi olacaktır:

```
// src/routers/index.js

import { Router } from 'express';
import studentsRouter from './students.js';
import authRouter from './auth.js';

const router = Router();

router.use('/students', studentsRouter);
router.use('/auth', authRouter);

export default router;
```

"/students" yolunu ayrı bir yönlendiriciye taşıdıktan sonra, ana yönlendirici dosyasına (src/routers/index.js) eklemeyi unutmayın.

```
// src/routers/contacts.js

import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/students.js';

const router = Router();

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:studentId', isValidId, ctrlWrapper(getStudentByIdController));

router.post(
  '/register',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.delete('/:studentId', isValidId, ctrlWrapper(deleteStudentController));

router.put(
  '/:studentId',
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/:studentId',
  isValidId,
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

export default router;
```

Ayrıca, yönlendiricilerin sunucumuza bağlanmasını güncellememiz gerekiyor, bu `src/server.js` dosyasında yapılacak:

```
// src/server.js

/* Dosyadaki diğer kodlar */

// Bu import ve bağlantı yerine
import studentsRouter from './routers/students.js';
app.use(studentsRouter);

// Şu import ve bağlantıyı yapıyoruz
import router from './routers/index.js';
app.use(router);
```

Öncelikle, **`/auth/register`** POST rotasındaki yanıtı iyileştirmemiz gerekiyor. Şu anki durumda, kullanıcı bilgileriyle birlikte şifreyi de döndürüyoruz. Bu durum güvenli değil. Kullanıcı modelinde **`toJSON()`** metodunu yeniden yazarak bu sorunu çözebiliriz:

```
// src/db/models/user.js

import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

usersSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('users', usersSchema);
```

**`toJSON()`** metodu, bir nesne serileştirilirken (JSON'a dönüştürülürken) **`JSON.stringify()`** veya **`res.json()`** çağrıldığında tetiklenir.

[**Şifrelerin Hashlenmesi**](Sistemde%20kimlik%20do%C4%9Frulama%20olu%C5%9Fturuyoruz/%C5%9Eifrelerin%20Hashlenmesi%20320673274a8e80669032dd2b16561fe3.md)

[Login Oluşturma](Sistemde%20kimlik%20do%C4%9Frulama%20olu%C5%9Fturuyoruz/Login%20Olu%C5%9Fturma%20320673274a8e80ae9b22e0b7420ad9e6.md)

[Oturum (session)](Sistemde%20kimlik%20do%C4%9Frulama%20olu%C5%9Fturuyoruz/Oturum%20(session)%20320673274a8e80dbb53dd06836500fa1.md)

[Cookies (Çerezler):](Sistemde%20kimlik%20do%C4%9Frulama%20olu%C5%9Fturuyoruz/Cookies%20(%C3%87erezler)%20320673274a8e805db745cec15cffb964.md)

[Çıkış (LogOut)](Sistemde%20kimlik%20do%C4%9Frulama%20olu%C5%9Fturuyoruz/%C3%87%C4%B1k%C4%B1%C5%9F%20(LogOut)%20320673274a8e80b6acb8eadaa84990b2.md)

[logoutUser](Sistemde%20kimlik%20do%C4%9Frulama%20olu%C5%9Fturuyoruz/logoutUser%20320673274a8e80b4b012c119b0dbc121.md)