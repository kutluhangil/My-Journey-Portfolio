# CORS(Cross-Origin Resource Sharing)

**CORS**, farklı alan adlarından web kaynakları arasında veri alışverişi yapılmasına olanak tanıyan bir güvenlik mekanizmasıdır. Örneğin, bir web uygulaması `vercel.com` alan adında çalışırken, sunucu `herokuapp.com` alan adında olabilir. Böyle durumlarda tarayıcı, güvenlik nedeniyle çapraz kökenli istekleri engelleyebilir.

**Alan adı**, web sitelerine, e-postalara ve diğer kaynaklara erişim için kullanılan internetteki benzersiz bir isimdir. Örneğin, "[https://goit.global/tr](https://goit.global/tr)" URL'sinde alan adı "[goit.global](https://goit.global/tr/)"dır.

CORS olmadan tarayıcılar, güvenlik politikaları nedeniyle çapraz alan adlarından kaynaklara erişime izin vermez. Sunucuda CORS'u kullanmak için, hangi kaynakların erişim iznine sahip olduğunu belirten uygun HTTP başlıklarını ayarlamak gerekir. **`Access-Control-Allow-Origin`** başlığı `*` değeri ile, kaynağa herhangi bir kaynaktan erişime izin verir:

`Access-Control-Allow-Origin: *`

Express'te bunun için [NPM paketi **`cors`**](https://www.npmjs.com/package/cors) kullanılır. CORS paketini aşağıdaki komutla yükleyin:

`npm i cors   // cors paketini kurar`

CORS'u **Express** uygulamanıza middleware olarak şu şekilde ekleyebilirsiniz:

```
// src/index.js

import cors from 'cors';

/* Dosyanın geri kalan kodu */

app.use(cors());
```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1f528160-29fa-4e35-b17e-b029eab89a46Group%208.png)