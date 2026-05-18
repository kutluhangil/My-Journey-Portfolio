# Temel Yetkilendirme

Temel yetkilendirme, belirli kaynaklara erişimin belirli koşullara bağlı olarak sınırlandırılması anlamına gelir. Bu koşullar, öğrencinin veritabanındaki bir ebeveynle olan bağlantısı ve kullanıcının rolü (ebeveyn veya öğretmen) üzerinden belirlenir.

Aşağıda, bu yetkilendirmeyi uygulamak için gerekli adımlar bulunmaktadır.

1. Öğrencinin, `users` ve `students` koleksiyonları arasındaki bağlantısını belirtmek için `createStudentSchema` ve `studentsSchema` şemalarına `parentId` özelliğini ekleyeceğiz.

```
// src/validation/students.js

export const createStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(6).max(16).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  avgMark: Joi.number().min(2).max(12).required(),
  onDuty: Joi.boolean(),
  parentId: Joi.string().required(),  // yeni özellik
});
// src/db/models/student.js

import { model, Schema } from 'mongoose';

const studentsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
    avgMark: {
      type: Number,
      required: true,
    },
    onDuty: {
      type: Boolean,
      required: true,
      default: false,
    },
    parentId: { type: Schema.Types.ObjectId, ref: 'users' },  // yeni özellik
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const StudentsCollection = model('students', studentsSchema);
```

2. Rollerle ilgili sabitleri tanımlayalım:

```
// src/constants/index.js

export const ROLES = {
  TEACHER: 'teacher',
  PARENT: 'parent',
};
```

3. Kullanıcı modelinde öğretmen veya ebeveyn rolüne sahip olma imkanı oluşturalım, varsayılan rol **`parent`** olacak şekilde:

```
// src/db/models/user.js

import { model, Schema } from 'mongoose';

import { ROLES } from '../../constants/index.js';

/* Diğer dosya kodları */

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: [ROLES.TEACHER, ROLES.PARENT],
      default: ROLES.PARENT,
    },
  },
  { timestamps: true, versionKey: false },
);
```

4. Artık `checkRoles` adlı bir middleware oluşturabiliriz:

```
// src/middlewares/checkRoles.js

import createHttpError from 'http-errors';

import { StudentsCollection } from '../db/models/student.js';
import { ROLES } from '../constants/index.js';

export const checkRoles =
  (...roles) =>
  async (req, res, next) => {
    const { user } = req;
    if (!user) {
      next(createHttpError(401));
      return;
    }

    const { role } = user;
    if (roles.includes(ROLES.TEACHER) && role === ROLES.TEACHER) {
      next();
      return;
    }

    if (roles.includes(ROLES.PARENT) && role === ROLES.PARENT) {
      const { studentId } = req.params;
      if (!studentId) {
        next(createHttpError(403));
        return;
      }

      const student = await StudentsCollection.findOne({
        _id: studentId,
        parentId: user._id,
      });

      if (student) {
        next();
        return;
      }
    }

    next(createHttpError(403));
  };
```

checkRoles middleware’i, kullanıcı rollerine bağlı olarak belirli kaynaklara veya işlemlere erişim yetkisini kontrol etmek için kullanılır. İşleyişinin detaylı açıklaması:

**1. Rollerin kabulü**:

- `checkRoles` fonksiyonu, bir veya daha fazla rol alır ve asenkron bir istek işleyici fonksiyonu döner.
- Alınan roller, **`roles`** dizisine aktarılır.

**2. Kullanıcının varlığının kontrolü**:

- İstek işleyici, istek (**`req`**), yanıt (**`res`**) ve sonraki fonksiyonu (**`next`**) alır.
- İstekten kullanıcı nesnesi (**`req.user`**) çıkarılır.
- Eğer kullanıcı yoksa, 401 kodlu bir hata oluşturulur ve sonraki fonksiyona iletilir.

**3. Kullanıcı rolünün kontrolü**:

- Kullanıcının rolü, kullanıcı nesnesinden çıkarılır (**`user.role`**).
- Eğer kullanıcının rolü, verilen rollerden birine karşılık geliyorsa, erişim izni verilir ve sonraki fonksiyon (**`next`**) çağrılır.
- Özellikle, kullanıcının rolü TEACHER ise ve bu rol, izin verilen roller arasında yer alıyorsa erişim izni verilir.

**4. Ebeveyn rolünün kontrolü (PARENT)**:

- Eğer kullanıcının rolü **`PARENT`** ise ve bu rol roller dizisinde varsa, istek parametrelerinde **`studentId`** varlığı kontrol edilir (**`req.params`**).
- Eğer **`studentId`** yoksa, 403 kodlu bir hata oluşturulur ve sonraki fonksiyona iletilir.
- Eğer **`studentId`** mevcutsa, fonksiyon **`StudentsCollection`** koleksiyonunda öğrenciyi bulmaya çalışır, öğrenci ve ebeveyn (kullanıcı) kimliklerinin eşleşip eşleşmediğini kontrol eder.
- Eğer öğrenci bulunursa, erişim izni verilir ve sonraki fonksiyon çağrılır.

**5. Erişim yasağı**:

- Eğer hiçbir kontrol geçerli değilse, 403 kodlu bir hata oluşturulur ve sonraki fonksiyona iletilir.

```
Veritabanı koleksiyonundaki verilere yalnızca yetkisi olanların erişmesini sağlamak için, Mongoose yöntemlerini kullanarak (findOne gibi) belirli bir koşul (özellik/özellikler belirli bir değere sahip) ile arama yapıyoruz.
```

Artık `checkRoles` middleware'ını öğrenci koleksiyonuna yönelik isteklerde kullanabiliriz:

```
// src/routers/students.js

/* Diğer dosya kodları */

import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

router.get('/', checkRoles(ROLES.TEACHER), ctrlWrapper(getStudentsController));

router.get(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  ctrlWrapper(getStudentByIdController),
);

router.post(
  '/',
  checkRoles(ROLES.TEACHER),
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.put(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

router.delete(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  isValidId,
  ctrlWrapper(deleteStudentController),
);

export default router;
```