# Web Servisi Oluşturma

*Web servisi oluşturmak, uygulamanın farklı bileşenleri arasında veri ve işlevsellik alışverişini mümkün kılan sanal kapıları açmaktır. Bu, uygulamanız için bir kamu posta kutusuna benzer; verileri gönderebilir ve alabilirsiniz.*

*Bir web servisi oluşturmak, uygulamanızın çeşitli bileşenleri arasında iletişim köprüleri kurmanın ilk adımıdır. Bu, bileşenlerin birbirleriyle etkileşimde bulunmasını sağlar. Bu sürecin nasıl işlediğini daha iyi anlayabilmek için, **Node.js** ve **Express** kullanarak basit bir web servisi oluşturmayı adım adım inceleyeceğiz.*

Node.js uygulamanıza Express eklemek için ilgili NPM paketini yüklemeniz gerekmektedir:

`npm install express`

Programlama dünyasında, yeni bir programlama dili veya teknoloji ile çalışmaya başladığımızda, ilk görevimiz basit bir mesajı **‘Hello world!’** yazan bir kod yazmaktır. Bu, yalnızca yeni bir araç setini öğrenmenin sembolik bir adımı değil, aynı zamanda geliştirme ortamımızın doğru şekilde yapılandırıldığını kontrol etmenin bir yoludur. Bu geleneği sürdürerek, kök yoluna yapılacak bir GET isteğine **“Hello world!”** mesajı ile yanıt veren bir sunucu oluşturalım.

**Bunun için şunları yapmamız gerekiyor:**

1. Projenin kökünde `src` adında bir klasör oluşturun (bunu daha önce oluşturmuştuk)

2. `src` klasöründe `index.js` adında bir dosya oluşturun (bunu daha önce oluşturmuştuk, içindeki önceki kodu silin)

3. Express kütüphanesinden `express` fonksiyonunu içe aktarın

4. Express uygulamasını (sunucusunu) express() fonksiyonunu çağırarak başlatın ve bunu `app` değişkeninde saklayın

```
// src/index.js

import express from 'express';

const app = express();
```

5. Sunucuyu başlatmak için, `listen` metodunu kullanmalısınız. Bu metoda şu iki argümanı iletmelisiniz:

- İlk argüman olarak, sunucuyu başlatmak istediğimiz port numarasını, örneğin 3000'i
- İİkinci argüman olarak, sunucu başarıyla başlatıldığında çalışacak bir geri çağırma fonksiyonu tanımlayın. Bu fonksiyon, sunucunun çalıştığını ve hangi portta istekleri dinlediğini belirten bir mesaj verebilir.

```
// src/index.js

import express from 'express';

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

Eğer şu anda `npm run dev` komutuyla uygulamanızı geliştirme modunda çalıştırıyorsanız, terminalde sunucunun çalıştığını belirten bir log görmelisiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/57035ddc-2eef-4d03-b6df-8d614b93b0fbScreenshot%202024-05-07%20at%2014.22.00.png)

**Port** — bir programın belirli bir cihazda veya ağda aldığı bağlantıları yöneten bir sayıdır; bu program bilgisayarda gelen bağlantıları kabul eder. Bir web uygulaması başlattığınızda, onun hangi portta erişilebilir olacağını belirtirsiniz.

Web sunucusu örneğinde olduğu gibi, 3000 numaralı port, uygulamanıza yapılacak tüm bağlantıları yönlendirir.

**Port**, diğer programların veya cihazların, internet veya yerel ağ üzerinden bilgisayarınıza bağlanabileceği bir adresdir.

Web sunucusunun, gelen istekleri doğru şekilde işleyebilmesi için, belirli rotalar ve bu rotalar için işleyiciler (handlers) tanımlanmalıdır. Rotalar, isteklerin hangi yollarla yapılacağını belirlerken, işleyiciler bu yollarla yapılan istekleri nasıl yanıtlayacağımızı belirler.

İlk **GET isteği** için bir rota ve onun için bir işleyici tanımlayalım. Bunun için sunucu `app` üzerinde `get` metodunu kullanarak şu iki parametreyi ileteceğiz:

- Birinci argüman olarak — kaynak yolunu, örneğin **`'/'`**, yani hizmetin kök rotasını temsil eden bir yol.
- İkinci argüman olarak — belirtilen yolda sunucu her **GET isteği** aldığında çalışacak olan işlev **(request handler)**.

```
// src/index.js

import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  // işleyici fonksiyonun gövdesi
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
```

```
app nesnesinde, herhangi bir HTTP yöntemi (sadece get değil) için işleyici kaydetmek üzere yöntemler bulunmaktadır; ilerleyen modüllerde bunları daha ayrıntılı inceleyeceğiz.
```

İşleyici fonksiyonu, **Express** tarafından çağrıldığında otomatik olarak kendisine iletilen iki parametre tanımlar:

- `req` — ilk parametre, bir istek nesnesidir ve isteğe dair tam bilgileri içerir. Buna daha sonra döneceğiz.
- `res` — ikinci parametre, yanıt oluşturmak için kullanılan bir nesnedir. Yanıta başlıklar, gövde ve daha fazlasını eklemek için gerekli tüm yöntemlere sahiptir.

**JSON** formatında bir yanıt göndermek için, işleyici fonksiyonu içinde `res.json`yöntemini çağırarak, yanıt olarak gönderilmesi gereken nesneyi argüman olarak iletebiliriz.

```
// src/index.js

import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
```

Artık [http://localhost:3000](http://localhost:3000/) adresine **GET isteği** gönderdiğimizde aşağıdaki bilgileri alacağız:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/68060b78-5735-42a7-8357-fe86996c80e1Screenshot%202024-03-13%20at%2018.52.41.png)

Ana dizine yapılan GET isteği ile “Hello world!” mesajı veren bir sunucu oluşturmayı başardınız. Şimdi öğrendiklerinizi uygulamaya koyarak, daha derinlemesine keşfe çıkabilir ve web geliştirme alanındaki yetkinliğinizi geliştirebilirsiniz. Her yeni adım, sizi başarıya daha da yakınlaştıracak. Zorluklardan kaçmayın ve her fırsatı değerlendirin — büyük başarıların anahtarı budur.