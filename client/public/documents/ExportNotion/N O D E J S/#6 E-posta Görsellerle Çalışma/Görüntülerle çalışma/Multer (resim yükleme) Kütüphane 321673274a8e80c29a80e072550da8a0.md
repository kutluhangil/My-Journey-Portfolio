# Multer (resim yükleme) Kütüphane

Öncelikle, resim yüklemek için [multer](https://www.npmjs.com/package/multer) kütüphanesini kurmamız ve yapılandırmamız gerekiyor.

`npm i multer`

Depolama alanını yapılandırmak için **`diskStorage`** yöntemini kullanacağız. **`multer`**kütüphanesinin depolama yapılandırması iki ana parametre içerir: **`destination`** ve **`filename`**.

1. **`destination` (hedef)**: Bu parametre, yüklenen dosyaların hangi dizinde saklanacağını belirler. Üç argüman alan bir fonksiyon olarak uygulanır: istek (**`req`**), dosya (**`file`**) ve geri çağırma fonksiyonu (**`cb`**). Geri çağırma fonksiyonu, dosyanın saklanacağı dizini iletmek için kullanılır. Bu durumda, bu dizini önceden **`TEMP_UPLOAD_DIR`** sabitinde tanımlıyoruz; bu, yüklemeler için geçici bir dizini gösterir.
2. **`filename` (dosya adı)**: Bu parametre, yüklenen dosyaya verilecek ismi belirler. Bu da üç argüman alan bir geri çağırma fonksiyonu olarak uygulanır: istek (**`req`**), dosya (**`file`**) ve geri çağırma fonksiyonu (**`cb`**). Aynı isimdeki dosyalar arasında çakışmaları önlemek için, orijinal dosya adına benzersiz bir ek ekleyeceğiz. Bu ek, milisaniye cinsinden mevcut tarih ve saat kullanılarak oluşturulur; bu da her dosya adının benzersiz olmasını garanti eder.

Bu yapılandırmalar, yüklenen dosyaların belirlenen dizinde benzersiz isimlerle saklanmasını sağlar ve sunucuda dosyaların düzenli ve güvenli bir şekilde yönetilmesini temin eder.

```
// src/constants/index.js

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
// src/middlewares/multer.js

import multer from 'multer';
import { TEMP_UPLOAD_DIR } from '../constants/index.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, TEMP_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

export const upload = multer({ storage });
```

```
⚠️ Multer, yüklenen dosyaları bellek içinde tutma seçeneği de sunar; bu, memoryStorage yöntemiyle yapılır. Bu yaklaşım, dosyanın içeriğini bir Buffer olarak doğrudan kodumuzda alabilmemize olanak tanır ve dosyanın içeriğini ayrıca okumamıza gerek kalmaz. Ancak, bellek tüketimini artırabileceği için sunucunun daha güçlü donanıma ihtiyaç duymasına ya da beklenmedik "çökmelere" yol açabilir.
```

Dosyaları yerel olarak saklamak için, multer yapılandırmalarında belirttiğimiz dizinleri oluşturmalıyız. Bunu iki şekilde yapabiliriz:

1. Dizini manuel olarak oluşturup, içeriği olmayan bir `.gitkeep` dosyası eklemek (dosya **`.gitkeep`**, Git'te boş dizinlerin korunması için gereklidir; çünkü Git boş dizinleri saklamaz)
2. Uygulama başlatıldığında çalışacak otomatik bir betik yazmak.

İkinci yöntemi inceleyelim, çünkü bu bize dosya sistemi ile çalışma imkanı verecek.

**`createDirIfNotExists`** adında bir yardımcı fonksiyon oluşturacağız; bu fonksiyon, belirtilen yol (**`url`**) altında dizinin var olup olmadığını kontrol edecek. Eğer dizin yoksa, fonksiyon onu oluşturacak.

```
// src/utils/createDirIfNotExists.js

import fs from 'node:fs/promises';

export const createDirIfNotExists = async (url) => {
  try {
    await fs.access(url);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.mkdir(url);
    }
  }
};
```

Ve bunu `src/index.js` dosyasında kullanacağız:

```
// src/index.js

import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const bootstrap = async () => {
  await initMongoDB();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  startServer();
};

void bootstrap();
```

Multer'ın yapılandırma için birkaç yöntemi vardır:

- **`single(fieldname)`:** Tek bir dosyayı işlemek için tasarlanmıştır. Yüklenmesi gereken alanın ismini (`fieldname`) isteğin gövdesinde iletebilirsiniz ve Multer yalnızca bu alanda bir dosya bekleyecektir.

```
app.post('/students', upload.single('avatar'), function (req, res, next) {
  // Yüklenen dosyanın işlenmesi
});
```

• **`array(fieldname, maxCount)`:** Tek bir **`fieldname`** alanı üzerinden birden fazla dosya göndermek için kullanılır. Alanın ismini ve Multer'ın beklemesi gereken maksimum dosya sayısını (`maxCount`) belirtebilirsiniz.

```
app.post('/students', upload.array('photos', 10), function (req, res, next) {
  // Yüklenen dosyaların işlenmesi
});
```

• **`fields(fields)`:** İstek gövdesinde dosya içeren birden fazla farklı alanı işlemek için kullanılır. Alan isimleri ve her birinin maksimum dosya sayısını içeren bir nesne dizisi iletirsiniz ve Multer, bu alanların her birinde dosyaları bekleyecektir.

```
app.post('/students', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 8 }
]), function (req, res, next) {
  // Yüklenen dosyaların işlenmesi
});
```

- **any():** İstek gövdesinde hangi alanda olursa olsun herhangi bir dosyayı işlemeye olanak tanır. Hangi form alanlarının dosya içerdiğini önceden bilmiyorsanız bu parametreyi kullanabilirsiniz.

Uygulamamızda **`single`** yöntemini kullanacağız:

```
// src/routers/students.js

import { upload } from '../middlewares/multer.js';

/* Dosyanın diğer kodları */

router.post(
  '/',
  checkRoles(ROLES.TEACHER),
  isValidId,
  upload.single('photo'), // bu middleware'i ekliyoruz
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.put(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  isValidId,
  upload.single('photo'), // bu middleware'i ekliyoruz
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  upload.single('photo'), // bu middleware'i ekliyoruz
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);
```

Kontrolörde resim nesnesini alacağız:

```
// src/controllers/students.js

export const patchStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const photo = req.file;

	/* photo'da dosya nesnesi bulunur
		{
		  fieldname: 'photo',
		  originalname: 'download.jpeg',
		  encoding: '7bit',
		  mimetype: 'image/jpeg',
		  destination: '/Users/borysmeshkov/Projects/goit-study/students-app/temp',
		  filename: '1710709919677_download.jpeg',
		  path: '/Users/borysmeshkov/Projects/goit-study/students-app/temp/1710709919677_download.jpeg',
		  size: 7
	  }
	*/

	/* Kontrolörün diğer kodları */
};
```

Express uygulamamıza statik dosyaları dağıtma imkanı ekleyelim:

```
// src/server.js

  import { UPLOAD_DIR } from './constants/index.js';

  /* Dosyanın diğer kodları */

  app.use('/uploads', express.static(UPLOAD_DIR));
```

Sonrasında, dosyaları kalıcı bir klasöre kaydedecek ve geçici klasörden silecek olan `saveFileToUploadDir` fonksiyonunu oluşturacağız:

```
// src/utils/saveFileToUploadDir.js

import path from 'node:path';
import fs from 'node:fs/promises';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from '../constants/index.js';
import { env } from './env.js';

export const saveFileToUploadDir = async (file) => {
  await fs.rename(
    path.join(TEMP_UPLOAD_DIR, file.filename),
    path.join(UPLOAD_DIR, file.filename),
  );

  return `${env('APP_DOMAIN')}/uploads/${file.filename}`;
};
```

Öğrenci nesnesine `photo` özelliği ekleyebilmek için, `studentsSchema` mongoose şemasında gerekli değişiklikleri yapmamız gerekiyor:

```
// src/db/models/student.js

import { model, Schema } from 'mongoose';

const studentsSchema = new Schema(
  {
    /* Dosyanın diğer kodları */

    photo: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const StudentsCollection = model('students', studentsSchema);
```

Şimdi `saveFileToUploadDir` fonksiyonunu kontrolörde kullanalım:

```
// src/controllers/students.js

import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';

/* Dosyanın diğer kodları */

export const patchStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const photo = req.file;

  let photoUrl;

  if (photo) {
    photoUrl = await saveFileToUploadDir(photo);
  }

  const result = await updateStudent(studentId, {
    ...req.body,
    photo: photoUrl,
  });

  if (!result) {
    next(createHttpError(404, 'Student not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a student!`,
    data: result.student,
  });
};
```