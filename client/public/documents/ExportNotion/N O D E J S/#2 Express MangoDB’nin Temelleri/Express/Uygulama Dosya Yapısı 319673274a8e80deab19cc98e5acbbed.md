# Uygulama Dosya Yapısı

Bir projeye başlarken dosya yapısını doğru planlamak, ilerleyen aşamalarda düzenli ve sürdürülebilir bir geliştirme süreci sağlar. Temel kuralları aşağıdaki gibi özetleyebiliriz:

- **Proje yapısını önceden planlayın:**

Projenin başlangıcında yapıyı belirlemek, ileride oluşabilecek karmaşıklığı önler.

- **Her modülün net bir amacı olmalı:**

Modüller, belirli bir işlevi yerine getirecek şekilde tasarlanmalı ve gerektiğinde yeniden kullanılabilir olmalıdır.

- **Mantığı merkezileştirin:**

Benzer işlevleri bir araya getirin ve üçüncü taraf servislerle olan entegrasyonları tek bir noktada toplayarak yönetilebilir hale getirin.

Bu kuralları ihlal etmeyin ve kod incelemesi yaparken veya meslektaşlarınıza tavsiyelerde bulunurken buna dikkat edin.

Aşağıda kullanacağımız dosya ve klasör yapısını bulabilirsiniz. Belirli klasörlerin amacını şu an tam olarak anlamasanız bile endişelenmeyin; kurs süresince detaylı bir şekilde ele alacağız. Gerektiğinde bu bölüme dönerek yapınızı gözden geçirebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/db03d7c2-af27-4a24-8f24-5807a85fb7c3Monosnap%20.env.example%20-%20nodejs-basics-without-ts%20-.png)

Tüm uygulamanın JS kodunu **`src`** klasöründe saklayacağız. Bu klasörde aşağıdaki klasörler ve dosyalar bulunacak:

- **constants** — Proje genelinde kullanılacak sabit değerler.
- **controllers** — İstekleri işleyen kontrolörler.
- **db** —Veritabanı bağlantıları ve işlemleri.
- **middlewares** — Özel middleware’ler (ara katmanlar).
- **routers** — Express yönlendirme mantığını içeren dosyalar.
- **services** — Uygulamanın iş mantığını barındıran servis katmanı.
- **templates** — E-posta veya diğer şablon dosyaları.
- **utils** — Genel amaçlı yardımcı fonksiyonlar.
- **validation** — Doğrulama şemalarını içeren dosyalar.
- **index.js** — Uygulamanın giriş noktası.
- **server.js** — express sunucumuzu tanımlayacağımız dosya

Ayrıca, bu materyallerde kullanacağımız kod parçalarında her zaman bu kodun bulunduğu dosyanın yolu belirtilecektir.

Örneğin:

```
Dosya yolu şöyle belirtilecektir
// src/constants/index.js

Sonrasında bu dosyadan kod gelecek
```

Yukarıda yapılandırmayı oluşturduğumuza göre, mevcut **Express uygulamamızın**dosya yapısını buna göre değiştirelim. Bunun için **`src`** klasöründe **`server.js`**dosyasını oluşturup, içerisine `startServer` fonksiyonu içinde sunucu oluşturma kodunu ekleyelim:

```
// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

const PORT = 3000;

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
```

Sunucu başlatma işlemi artık `src/server.js` dosyasında gerçekleştiği için, `src/index.js` dosyasının içeriği aşağıdaki gibi görünecektir:

```
// src/index.js

import { startServer } from './server.js';

startServer();
```