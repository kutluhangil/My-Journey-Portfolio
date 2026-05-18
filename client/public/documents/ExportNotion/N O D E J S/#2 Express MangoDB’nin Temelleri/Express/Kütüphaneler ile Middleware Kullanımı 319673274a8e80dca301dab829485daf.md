# Kütüphaneler ile Middleware Kullanımı

Web uygulamalarında sıkça karşılaşılan sorunları çözmek için belirli kütüphaneler mevcuttur. Bu kütüphaneleri kullanarak iş akışınızı hızlandırabilir ve daha güvenilir uygulamalar geliştirebilirsiniz. Şimdi bazı pratik örnekleri inceleyelim.

**İsteklerin Kaydedilmesi**

Kaydetme, herhangi bir web uygulaması için çok önemlidir, çünkü sistemin nasıl çalıştığını takip etmenizi sağlar, özellikle de sorunlar yaşandığında.

Modern ve popüler bir kayıt aracı olan [**pino**](https://github.com/pinojs/pino-http)'yu kullanacağız.

`npm install pino-http`

Günlüklerin (logların) terminalde daha anlaşılır olması için [**pino-pretty**](https://www.npmjs.com/package/pino-pretty) eklentisini eklememiz gerekiyor.

`npm i --save-dev pino-pretty`

Pino, bize **middleware** ve logger'ı özellikler nesnesi aracılığıyla ek yapılandırma imkanı sunar.

```
// src/index.js

import pino from 'pino-http';

/* Dosyanın geri kalanı */

app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);
```

Bu tür ayarlar, terminaldeki isteklerin loglanmasını biçimlendirilmiş ve daha anlaşılır hale getirecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/5bcd7018-d2fa-4491-b7bb-60065c2ab0c0Screenshot%202024-04-08%20at%2009.15.12.png)

```
Not: pino-http gibi loglama araçları, gelen istekleri ve yanıtlardaki hataları eksiksiz bir şekilde kaydedebilmek için middleware zincirinin en başında tanımlanmalıdır. Bu, pino'nun app örneğinize eklediğiniz ilk middleware'lerden biri olması gerektiği anlamına gelir.
```