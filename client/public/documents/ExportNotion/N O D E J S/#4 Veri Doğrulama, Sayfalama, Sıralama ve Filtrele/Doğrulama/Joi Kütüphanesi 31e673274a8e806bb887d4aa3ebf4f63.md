# Joi Kütüphanesi

**`Joi`**, JavaScript ortamında, özellikle Node.js uygulamalarında veri doğrulama işlemleri için kullanılan popüler bir kütüphanedir.

Veri nesnelerinin belirlenen şemalarla uyumlu olup olmadığını kontrol etmenizi sağlar. Joi'yu şu komutla kurabilirsiniz:

`npm i joi`

**`Joi`**'nun temel özellikleri:

**1. Şema tanımı (Schema definition):** Doğrulamak istediğiniz nesneler için tamamen şemalar tanımlayabilirsiniz. Bunun için **`Joi.object()`** ve **`Joi.array()`** yöntemlerini kullanarak yapıları ve sayılar, dizeler, boolean değerler gibi primitifler için yöntemler kullanabilirsiniz. Joi şemaları anlamlıdır ve her bir kuralın ne iş yaptığını anlamayı kolaylaştırır. Mevcut kuralların tam listesini [resmi belgede](https://joi.dev/api/) bulabilirsiniz. Yeni bir öğrenci oluştururken bir doğrulama şeması oluşturalım:

```
// src/validation/students.js

import Joi from 'joi';

export const createStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(6).max(16).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  avgMark: Joi.number().min(2).max(12).required(),
  onDuty: Joi.boolean(),
});
```

**2. Doğrulama yöntemlerinin kullanımı:** Şemayı tanımladıktan sonra, bu şemaya uygun veri nesnelerini kontrol etmek için **`validate`** veya **`validateAsync`** gibi doğrulama yöntemlerini kullanabilirsiniz.

```
const dataToValidate = {
  name: 'John Doe',
  age: 12,
  gender: 'male',
  avgMark: 10.2,
};

const validationResult = createStudentSchema.validate(dataToValidate);
if (validationResult.error) {
  console.error(validationResult.error.message);
} else {
  console.log('Data is valid!');
}
```

**3. Genişletilebilirlik:`Joi`**, birçok yerleşik doğrulama yöntemi sunmanın yanı sıra, kendi özel doğrulama kurallarınızı oluşturmanıza olanak tanır.

**4. Özel hata mesajları:** Kullanıcılarınıza daha anlaşılır hata mesajları sunmak için doğrulama kurallarına özel yerelleştirilmiş mesajlar ayarlayabilirsiniz.