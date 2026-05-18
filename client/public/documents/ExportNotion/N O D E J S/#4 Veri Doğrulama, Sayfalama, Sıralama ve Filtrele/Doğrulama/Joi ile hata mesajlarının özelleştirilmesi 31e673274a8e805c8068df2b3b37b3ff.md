# Joi ile hata mesajlarının özelleştirilmesi

**`Joi`** ile her doğrulama kuralı ve belirli koşullar için hata mesajlarını özelleştirebilirsiniz. Bu, kullanıcılarınıza veya bu hataları işleyen geliştiricilere daha bilgilendirici mesajlar sunmanıza olanak tanır.

İşte şemadaki farklı koşullar için hata mesajlarının özelleştirilmesine bir örnek:

```
import Joi from 'joi';

// Özelleştirilmiş mesajlarla şemanın tanımlanması
const createStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Username should be a string', // "string" türü için özelleştirilmiş mesaj
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  age: Joi.number().integer().min(6).max(16).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  avgMark: Joi.number().min(2).max(12).required(),
  onDuty: Joi.boolean(),
});
```

Bu örnekte, **`.messages()`** yöntemi kullanılarak her doğrulama kuralı için özelleştirilmiş hata mesajları tanımlanmıştır. Örneğin, **`string.base`** kuralı **`.string()`**ile, **`string.min`** kuralı **`.min()`** ile ilişkilidir.

Doğrulama yöntemi çağrılırken **`{ abortEarly: false }`** parametresi kullanmak önemlidir. Bu, ilk hatayı değil, tüm doğrulama hatalarını almak için gereklidir:

```
const validationResult = createStudentSchema.validate(userData, {
  abortEarly: false,
});
```

Bu şekilde, hata mesajlarını daha anlamlı ve kullanıcı dostu hale getirerek doğrulama işlemini daha etkili bir şekilde yönetebilirsiniz.

Şemalarımızı oluşturduktan sonra, bu şemaları uygulama kodumuzda nasıl kullanacağımızı öğrenmemiz gerekiyor. Şema doğrulama işlemlerini birkaç farklı yöntemle gerçekleştirebiliriz.