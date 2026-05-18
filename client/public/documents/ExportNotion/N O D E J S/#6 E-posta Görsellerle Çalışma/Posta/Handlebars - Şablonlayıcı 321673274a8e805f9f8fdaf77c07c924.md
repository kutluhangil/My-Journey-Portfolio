# Handlebars - Şablonlayıcı

Örneğimizde e-posta göndermek için HTML alanında bir şablon dizesi kullandık. Ancak bu yöntem her zaman pratik olmayabilir. HTML e-postaları, çok daha büyük boyutlara sahip olabilir ve belirli koşul mantıkları, döngüler gibi özellikler içerebilir. Bu tür durumları çözmek için şablonlayıcılar oldukça faydalıdır.

Şablonlayıcılar, şablona iletilen verilere dayanarak HTML kodu oluşturmak için kullanılan araçlardır. Değişkenlerin belirtilen değerlerini yerleştirerek veya koşulları ve döngüleri işleyerek HTML kodunda dinamik içerik oluşturmayı sağlarlar. Biz de şablonlarla çalışmak için [handlebars](https://handlebarsjs.com/) kullanacağız; bu, JavaScript için popüler bir şablonlayıcıdır.

`npm i handlebars`

Şablonlayıcıların ve Handlebars'ın temel özellikleri:

**1. Gömülü sözdizimi:**

- Şablonlayıcılar, değişkenlerin, fonksiyon çağrılarının, koşul ifadelerinin ve döngülerin doğrudan HTML koduna yerleştirilmesi için kullanışlı bir sözdizimi sunar.

**2. Mantık ve sunumun ayrılması:**

- Programın mantığını HTML sunum kodundan ayırarak kodun geliştirilmesini ve bakımını kolaylaştırır.

**3. Şablonlar:**

- Handlebars, programın farklı bölümlerinden çağrılabilen şablonlar kullanmayı sağlar; bu, aynı veya benzer içeriğin üretilmesine olanak tanır.

**4. Koşul ve döngü desteği:**

- Handlebars da dahil olmak üzere şablonlayıcılar, koşul ifadeleri (if-else) ve döngüler (for, each) destekler; bu, koşullara veya verilere bağlı olarak farklı içerikler üretmeyi mümkün kılar.

**5. Güvenlik:**

- Handlebars, şablondaki HTML kodu eklemelerini otomatik olarak kaçırarak XSS (Cross-Site Scripting) saldırılarına karşı koruma sağlar.

**6. Popülerlik ve destek:**

- Handlebars, aktif bir kullanıcı topluluğuna ve geniş bir belgeler dizisine sahip, JavaScript için en popüler şablonlayıcılardan biridir.

Şimdi şablonlayıcıyı HTML e-posta oluşturma sürecine ekleyelim:

```
// src/templates/reset-password-email.html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset password email</title>
</head>

<body>
  <h1 style="color: blue;">Hello, {{name}}!</h1>
  <p>Click <a href="{{link}}">here</a> to reset your password!</p>
</body>

</html>
// src/constants/index.js

import path from 'node:path';

/* Diğer dosya kodları */

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

// src/services/auth.js

import handlebars from 'handlebars';
import path from 'node:path';
import fs from 'node:fs/promises';

/* Diğer dosya kodları */

export const requestResetToken = async (email) => {
  const user = await UsersCollection.findOne({ email });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }
  const resetToken = jwt.sign(
    {
      sub: user._id,
      email,
    },
    env('JWT_SECRET'),
    {
      expiresIn: '15m',
    },
  );

  const resetPasswordTemplatePath = path.join(
    TEMPLATES_DIR,
    'reset-password-email.html',
  );

  const templateSource = (
    await fs.readFile(resetPasswordTemplatePath)
  ).toString();

  const template = handlebars.compile(templateSource);
  const html = template({
    name: user.name,
    link: `${env('APP_DOMAIN')}/reset-password?token=${resetToken}`,
  });

  await sendEmail({
    from: env(SMTP.SMTP_FROM),
    to: email,
    subject: 'Reset your password',
    html,
  });
};
```

`APP_DOMAIN` ortam değişkeninde şu anda `http://localhost:3000` dizesini saklayabiliriz.

HTML kodunda **`{{}}`** literali ile hangi değerlerin yerleştirileceğini belirtiyoruz. Şablonu almak için, içeriğini dosyadan okumamız, ardından **`handlebars.compile()`**fonksiyonuna iletmemiz gerekiyor. Bu fonksiyonun çıktısına, şablonda kullanmak istediğimiz değerleri ilettikten sonra, e-posta göndermek için kullanılabilecek HTML'yi elde ederiz.

Şimdi, kullanıcının e-posta adresine gelen token'ı kullanarak yeni bir şifre belirleme işlevselliğini eklememiz kaldı:

```
// src/validation/auth.js

/* Dosyanın diğer kodları */

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});
```

```
// src/services/auth.js

export const resetPassword = async (payload) => {
  let entries;

  try {
    entries = jwt.verify(payload.token, env('JWT_SECRET'));
  } catch (err) {
    if (err instanceof Error) throw createHttpError(401, err.message);
    throw err;
  }

  const user = await UsersCollection.findOne({
    email: entries.email,
    _id: entries.sub,
  });

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  await UsersCollection.updateOne(
    { _id: user._id },
    { password: encryptedPassword },
  );
};
```

```
// src/controllers/auth.js

import { resetPassword } from '../services/auth.js';

/* Dosyanın diğer kodları */

export const resetPasswordController = async (req, res) => {
  await resetPassword(req.body);
  res.json({
    message: 'Password was successfully reset!',
    status: 200,
    data: {},
  });
};
```

```
// src/routers/auth.js

import { resetPasswordSchema } from '../validation/auth.js';
import { resetPasswordController } from '../controllers/auth.js';

/* Dosyanın diğer kodları */

router.post(
  '/reset-password',
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);
```