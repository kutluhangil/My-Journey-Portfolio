# Rotalar için kimlik doğrulama ve yetkilendirme oluşturuyoruz

Temel işlevselliği geliştirdikten sonra, oturum yönetimi ve kaynaklara erişim kontrolü mekanizmalarını yazmamız gerekiyor. Bu aşamada, **yetkilendirme** ve **kimlik doğrulama** arasındaki farkı daha iyi anlayacağız.

Öncelikle, **kimlik doğrulama** işlemi için `authenticate` adlı bir middleware (ara katman yazılımı) oluşturalım:

```
// src/middlewares/authenticate.js

import createHttpError from 'http-errors';

import { SessionsCollection } from '../db/models/session.js';
import { UsersCollection } from '../db/models/user.js';

export const authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    next(createHttpError(401, 'Please provide Authorization header'));
    return;
  }

  const bearer = authHeader.split(' ')[0];
  const token = authHeader.split(' ')[1];

  if (bearer !== 'Bearer' || !token) {
    next(createHttpError(401, 'Auth header should be of type Bearer'));
    return;
  }

  const session = await SessionsCollection.findOne({ accessToken: token });

  if (!session) {
    next(createHttpError(401, 'Session not found'));
    return;
  }

  const isAccessTokenExpired =
    new Date() > new Date(session.accessTokenValidUntil);

  if (isAccessTokenExpired) {
    next(createHttpError(401, 'Access token expired'));
  }

  const user = await UsersCollection.findById(session.userId);

  if (!user) {
    next(createHttpError(401));
    return;
  }

  req.user = user;

  next();
};
```

**`authenticate`** middleware'ı, kullanıcı kimliğini doğrulamak için istek başlığında bulunan **erişim token**'ının geçerliliğini kontrol eder. İşleyişi şu adımlardan oluşur:

**1. Yetkilendirme başlığının kontrolü**:

- Fonksiyon, istek (**`req`**), yanıt (**`res`**) ve bir sonraki fonksiyon (**`next`**) nesnelerini alır.
- Yetkilendirme başlığını **`req.get('Authorization')`** ile alır.
- Eğer başlık sağlanmamışsa, fonksiyon 401 (Yetkisiz) hatası döndürür ve hata mesajı ile birlikte bir sonraki middleware'a yönlendirir.

**2. Başlık türü ve token varlığının kontrolü**:

- Fonksiyon, yetkilendirme başlığını iki parçaya ayırır: tür (Bearer olmalıdır) ve token.
- Eğer başlık türü "Bearer" değilse veya token eksikse, fonksiyon yine 401 hatası döndürür.

**3. Oturum varlığının kontrolü**:

- Fonksiyon, verilen token'ı kullanarak **SessionsCollection**'da bir oturum arar.
- Eğer oturum bulunamazsa, 401 hatası döndürülür.

**4. Erişim tokeninin geçerlilik süresinin kontrolü**:

- Fonksiyon, erişim tokeninin süresinin dolup dolmadığını, mevcut tarihi tokenin sona erme tarihi ile karşılaştırarak kontrol eder.
- Eğer token süresi dolmuşsa, fonksiyon 401 hatası ile geçerlilik süresi dolmuş olduğunu belirtir.

**5. Kullanıcı arama**:

- Fonksiyon, oturumda saklanan kullanıcı kimliği ile **`UsersCollection`**koleksiyonunda kullanıcıyı arar.
- Eğer kullanıcı bulunamazsa, 401 hatası döndürülür.

**6. Kullanıcının isteğe eklenmesi**:

- Tüm kontroller başarılı olursa, fonksiyon kullanıcı nesnesini isteğe ekler (**`req.user = user`**).
- İşlemin devam etmesi için **`next`** ile bir sonraki fonksiyon çağrılır.

Bu şekilde, **`authenticate`** fonksiyonu kimlik doğrulama isteğini işler, yetkilendirme başlığının ve erişim tokeninin varlığını ve geçerliliğini kontrol eder, uygun oturumu ve kullanıcıyı arar ve tüm kontroller başarılıysa kullanıcı nesnesini isteğe ekler.

Artık **`authenticate`** middleware'ini, öğrenci koleksiyonuna yapılan isteklerde yönlendiricide kullanabiliriz:

```
// src/routers/students.js

import { authenticate } from '../middlewares/authenticate.js';

/* Dosyanın diğer kodları */

router.use(authenticate);

router.get('/', ctrlWrapper(getStudentsController));
```

`💡 **Dikkat!** Bu şekilde (router.use(authenticate);) middleware'ı yönlendiriciye uyguladığımızda, **/students** gibi rotalarla başlayan tüm isteklerde geçerli olacaktır. Yani, bu middleware **students** rotasındaki her istek için çalışacaktır.`

[Temel Yetkilendirme](Rotalar%20i%C3%A7in%20kimlik%20do%C4%9Frulama%20ve%20yetkilendirme%20olu/Temel%20Yetkilendirme%20320673274a8e80bba8c2dc8724c24d60.md)