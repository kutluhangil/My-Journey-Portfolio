# Express Nasıl Çalışır

**Express**'in çalışma prensibi, bir üretim hattı sistemine benzer. Bu sistemde her biri belirli görevleri yerine getiren "çalışanlar" vardır. Örneğin, bir çalışan ürünün ağırlığını kontrol ederken, diğer bir çalışan ürünün kusurlu olup olmadığını denetler. **Express**'te bu "çalışanlar" **middleware** (ara yazılım) olarak adlandırılır. Bu zincirin sonunda, tüm **middleware**'lerin ardından bir **controller** (istek işleyici fonksiyonu) yer alır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/21a9ae9e-aa2a-47b7-a607-3c50683167ecGroup%201949.png)

**Middleware** — sunucuya gelen istekleri, istek işleyicilerinize ulaşmadan önce işleyen fonksiyonlardır. Bu, her istek için belirli eylemleri gerçekleştirmenizi sağlar; örneğin, günlük tutma (loglama), yetkilendirme kontrolü, hata işleme ve daha fazlası.

**Express.js middleware** iki şekilde tanımlanabilir. Genel **(CommonMiddleware)** veya hata işleme için özel **(ErrorMiddleware)** olabilirler. Aralarındaki fark, argüman sayısıdır:

- **CommonMiddleware**, üç argüman alan bir fonksiyondur:
1. **`req`** (request)— istek nesnesi
2. **`res`** (response)— yanıt nesnesi
3. **`next`** — bir sonraki middleware'e geçiş yapmak için çağrılan fonksiyon
- **ErrorMiddleware**, hata işlemek için özel bir fonksiyondur ve dört argüman alır:
1. **`err`** — hata nesnesi
2. **`req`** — istek nesnesi
3. **`res`** — yanıt nesnesi
4. **`next`** — hata sonrasında bir sonraki middleware'e geçişi sağlar.

```
Not : Middleware fonksiyonunun aldığı argüman sayısı, Express tarafından bu fonksiyonun hata işleme mi yoksa genel middleware mi olduğunu belirlemek için kullanılır.
```

**Middleware**'i uygulamamıza dahil etmek için sunucuda `use` metodunu çağırmamız gerekir ve bu metoda:

- Birinci parametre olarak middleware'in uygulanacağı yolları (**paths**),
- ikinci argüman olarak ise kendisi olan `middleware`'i geçmemiz gerekir.

`app.use(paths, middleware)`

Eğer `app.use` çağrısına birinci argüman olarak bir yol verilmezse veya `'*'` dizesi verilirse, bu durumda **middleware** sunucudaki tüm olası rotalara (yollar) uygulanır.

`app.use(middleware)
app.use('*', middleware)`

```
Dikkat! Karmaşık yol kombinasyonlarını tanımlamak için düzenli ifadeler (RegEx) kullanılabilir. Bu konu kendi başına oldukça karmaşık olup, bu kurs kapsamında derinlemesine incelemeyeceğiz. Kurs boyunca ele alacağımız rotalar, anlaşılması yeterince basit olup düzenli ifadelere ihtiyaç duymamaktadır.
```

`index.js` dosyasında istek zamanını günlüğe kaydetmek için **middleware**tanımlayalım ve bunu sunucumuza ekleyelim:

```
// src/index.js

import express from 'express';

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

Artık **GET isteği aldığında (bunu Postman ile yapabilirsin)** sunucu, isteğin zamanını ve tarihini konsola kaydedecek:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/50f221e6-526d-42a9-8ff6-707d265b198cScreenshot%202024-05-07%20at%2014.24.06.png)

Express, gelen bir isteği middleware'ler aracılığıyla bir zincir şeklinde işler. Middleware'ler, eklendikleri sıraya göre çalışır. Bir middleware'in işleyişi şu şekilde devam eder:

- **`next()` çağrısı:** İstek bir sonraki middleware'e aktarılır.
- **Hata iletimi:** `next(err)` çağrısı ile hata bir sonraki hata yönetim middleware'ine aktarılır.

```
Dikkat! Eğer mevcut middleware isteğin işlenmesini tamamlamıyorsa — yani, response metodlarından json(), send(), text() vb. çağrısını yapmıyorsa, kontrolü bir sonraki ara işleme fonksiyonuna iletmek için next() çağrısını yapmalıdır. Aksi takdirde, isteğin işlenmesi “takılacaktır”.
```

**Express** içinde bir isteğin **middleware** üzerinden geçişi, **middleware**'lerin eklenme sırasına göre gerçekleşir. İşte birkaç **middleware** kullanımına dair bir örnek:

```
// src/index.js

import express from 'express';

const PORT = 3000;

const app = express();

// İstek zamanını günlüğe kaydetmek için middleware
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

// JSON verilerini isteklerde işlemek (parse etmek) için express'e entegre edilmiş middleware
// örneğin, POST veya PATCH isteklerinde
app.use(express.json());

// '/' adresine gelen GET isteklerini işlemek için rota
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

// Hata işleme middleware'i (4 argüman alır)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

```
Bu middleware'de, res nesnesinin status metodunu çağırarak yanıtın HTTP durum kodunu belirledik ve json metoduyla bir nesneyi JSON formatında döndürdük. res nesnesinin diğer metodları ve kullanımları hakkında detaylı bilgiye ilerleyen bölümlerde değineceğiz.
```

Bu örnekte, isteğin işlenmesi şu aşamalardan oluşur **(pipeline):**

1. **İstek zamanının kaydedilmesi:** İlk middleware, isteğin sunucuya ulaştığı zamanı kaydeder.
2. **JSON verilerinin işlenmesi:** İkinci middleware, sunucuya gelen verilerin JSON formatında olup olmadığını kontrol eder ve uygunsa bu verileri işler.
3. **‘/’ rotasında GET isteği işleyici:** Bu rota isteği işlediğinde, sunucu ‘Hello, World!’ mesajını JSON formatında yanıt olarak gönderir.

**Middleware**, her zaman diğer tüm **middleware** ve rotalardan sonra en son eklenir, çünkü bu, isteklerin işlenmesi ve diğer **middleware** veya rota işleyicileri sırasında meydana gelen hataları ele almak için tasarlanmıştır.