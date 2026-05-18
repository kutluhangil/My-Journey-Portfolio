# Cookies (Çerezler):

Cookies, web sitelerinin kullanıcıların cihazlarında (örneğin bilgisayar veya telefon) web tarayıcısı aracılığıyla depoladığı küçük veri dosyalarıdır. Bu dosyalar, kullanıcıyı tanımlamak, kullanıcı tercihlerini saklamak ve web sitesi üzerindeki etkileşimlerini izlemek gibi çeşitli amaçlarla kullanılır.

Çerezlerin temel özellikleri şunlardır:

**1. Kullanıcı Tanımlama:** Cookies, bir web sitesindeki belirli bir kullanıcıyı tanımlamak için kullanılır. Bu, ayarların, alışveriş sepetinin veya hesap girişinin saklanması gibi durumlar için önemli olabilir.

**2. Oturum Durumunu Saklama:** Cookies, kullanıcıların web sitesi sayfaları arasında geçiş yaparken verilerini kaybetmemesi için oturum durumunu saklamak amacıyla kullanılabilir.

**3. Analitik ve İzleme:**

- Analitik Çerezler: Kullanıcı davranışlarını analiz etmek için kullanılır. Örneğin, hangi sayfaların ziyaret edildiği veya hangi özelliklerin kullanıldığı gibi veriler toplanır.
- **Reklam Çerezleri:** Reklam kampanyalarının performansını değerlendirmek ve kullanıcıya daha uygun reklamlar göstermek için kullanılır.

**4. Ayarları Saklama:** Çerezler, kullanıcıların dil tercihleri, tema seçimi veya diğer özelleştirme ayarlarını saklayarak web sitesini daha kişiselleştirilmiş bir hale getirir. Ancak bu tür veriler için **`localStorage`** veya **`sessionStorage`** gibi alternatifler de kullanılabilir.

**5. Geçerlilik Süresi:** Cookies sınırlı bir geçerlilik süresi olabilir. Bazıları, kullanıcı cihazında yalnızca tarayıcı kapatılana kadar (oturum çerezleri) kalırken, diğerleri daha uzun süre saklanabilir (kalıcı çerezler).

Tarayıcı, yalnızca belirli bir alan adına (domain) ait isteklere ilgili çerezleri ekler. Ancak, farklı HTTP istemcileri (ör. **`axios`**, **`fetch`**) ile çalışırken ek ayarlar gerekebilir.(örneğin, **`withCredentials: true`** ayarları için **`axios`** veya **`credentials: 'include'`**için **`fetch`**).

Bazı çerezler, istemci tarafındaki JavaScript ile erişilebilir durumdadır. Ancak, kimlik doğrulama gibi hassas veriler için kullanılan çerezlerin güvenliği önemlidir. Bu durumda: **`httpOnly: true`** bayrağı, çerezin yalnızca HTTP istekleriyle erişilebilir olmasını sağlar ve kötü niyetli script’ler tarafından çalınmasını önler.

Node.js tabanlı projelerde çerez yönetimi için **`cookie-parser`** gibi bir paket kullanılır. Bu paketi yüklemek için:

`npm i cookie-parser`

Ardından, middleware olarak kullanımı:

```
// src/server.js

import cookieParser from 'cookie-parser';

/* Diğer dosya kodları */

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

/* Diğer dosya kodları */

}
```

Artık kontrolör kodumuzu yazabiliriz:

```
// src/controllers/auth.js

import { ONE_DAY } from '../constants/index.js';

/* Diğer dosya kodları */

export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};
```

Bu **`loginUserController`** fonksiyonu, kullanıcı giriş isteğini işleme sürecini ve istemci ile HTTP üzerinden etkileşimi gerçekleştirir. İşte işleyişinin detaylı açıklaması:

**1. Kimlik Doğrulama Fonksiyonunun Çağrılması:**

- Fonksiyon, istek (**`req`**) ve yanıt (**`res`**) nesnelerini alır.
- Giriş verilerini (e-posta ve şifre) içeren istek gövdesini (**`req.body`**) geçirerek **`loginUser`** fonksiyonunu çağırır.
- **`loginUser`**, kimlik doğrulama sürecini gerçekleştirir ve bir oturum nesnesi döner.

**2. Çerezlerin Ayarlanması:**

- Fonksiyon, **`refreshToken`** ve **`sessionId`** adında iki çerez ayarlar ve **`res.cookie`**metodunu kullanır.
- **`refreshToken`**, yalnızca HTTP istekleri aracılığıyla erişilebilen http-only cookie olarak saklanır. Geçerlilik süresi bir gündür.
- **`sessionId`** da benzer geçerlilik süresiyle http-only cookie olarak saklanır.

**3. İstemciye Yanıt Gönderme:**

- Fonksiyon, 200 durum kodu, kullanıcı girişinin başarılı olduğuna dair bir mesaj ve **`accessToken`** içeren verileri içeren bir JSON yanıtı oluşturur.
- İstemciye yanıt göndermek için **`res.json`** metodu kullanılır.

Böylece, **`loginUserController`** fonksiyonu, kullanıcı girişine yönelik HTTP isteğini işler, **`loginUser`** kimlik doğrulama fonksiyonunu çağırır, token ve oturum kimliğini saklamak için çerezleri ayarlar ve istemciye başarılı giriş ve erişim tokeni ile ilgili bilgi içeren bir yanıt gönderir.