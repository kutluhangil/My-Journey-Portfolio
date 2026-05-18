# Şifrelerin Hashlenmesi

Şu anda, kullanıcı şifresi veritabanında düz metin olarak saklanıyor ve bu ciddi bir güvenlik açığı oluşturuyor. Birçok kullanıcı, farklı platformlarda aynı şifreyi kullanıyor. Eğer bir platformun şifreleri ifşa edilirse, diğer platformlardaki hesaplar da risk altında olabilir. Bu riski ortadan kaldırmak için şifreyi hashleyerek saklamamız gerekiyor.

Hashleme, herhangi bir boyuttaki verileri sabit uzunlukta bir dizeye dönüştürme sürecidir; bu genellikle hash değeri veya hash kodu olarak adlandırılır. Hash fonksiyonunun temel özelliklerinden biri, hızlı ve etkili bir şekilde hesaplanabilmesidir.

Hash fonksiyonlarının temel özellikleri şunlardır:

1. **Sabit çıkış uzunluğu:** Girdi verilerinin boyutundan bağımsız olarak, hash fonksiyonu sabit uzunlukta bir hash değeri döndürür.
2. **İçsel benzersizlik:** Farklı girdi verileri, farklı hash değerleri üretmelidir.
3. **Tersine çevrilemezlik:** Hash değerinden girdi verilerini geri almak zor veya imkansızdır.
4. **Büyük verilerin basitleştirilmesi:** Hash fonksiyonu, büyük girdi verileri için bile nispeten kısa hash değerleri üretebilir.
5. **Girdi verilerindeki değişikliklere karşı dayanıklılık:** Girdi verilerindeki küçük değişiklikler, hash değerinde büyük değişikliklere yol açmalıdır.

Hash fonksiyonları, kriptografi, veri bütünlüğünün sağlanması, imza oluşturma, hash tablolarıyla çalışma gibi çeşitli alanlarda kullanılır. Modern programlamada, hash fonksiyonları şifrelerin hash değerleri olarak saklanmasında yaygın olarak kullanılır; bu, şifrenin düz metin olarak saklanmasını önlemeye yardımcı olur.

Bu nedenle, şifreyi saklamak için hashlemeyi uygulayacağız ve **`bcrypt`**kütüphanesini kullanacağız. Bunu şu komutla kuracağız:

`npm i bcrypt`

Ve bunu `registerUser` servis fonksiyonuna ekleyeceğiz:

```
// src/services/auth.js

import bcrypt from 'bcrypt';

import { UsersCollection } from '../db/models/user.js';

export const registerUser = async (payload) => {
  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UsersCollection.create({
    ...payload,
    password: encryptedPassword,
  });
};
```

**`UsersCollection`** modelini oluştururken, kullanıcının e-posta adresinin benzersiz olması gerektiğini belirttik. Bu nedenle, kayıt sırasında e-posta adresinin benzersizliğini kontrol etmemiz ve bir çakışma durumunda 409 durum kodu ve uygun bir mesajla yanıt döndürmemiz gerekiyor. Bu nedenle, kayıt servisimizin koduna böyle bir kontrol ekleyeceğiz:

```
// src/services/auth.js

import bcrypt from 'bcrypt';

import { UsersCollection } from '../db/models/user.js';

export const registerUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });
  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UsersCollection.create({
    ...payload,
    password: encryptedPassword,
  });
};
```