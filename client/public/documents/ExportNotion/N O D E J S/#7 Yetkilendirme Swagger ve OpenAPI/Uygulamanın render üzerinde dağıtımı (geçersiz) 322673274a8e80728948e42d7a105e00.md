# Uygulamanın render üzerinde dağıtımı (geçersiz)

"Deploy" (veya "deploy etmek") terimi, yazılım geliştirme ve bilgi teknolojileri alanında, yazılımların veya uygulamaların sunuculara ya da diğer cihazlara dağıtılması anlamına gelir. Bu süreç, yazılımın kullanıcıların erişimine sunulmasını sağlar.

Deploy işlemi, program dosyalarının sunucuya kopyalanmasını, gerekli çalışma ortamlarının (örneğin, veritabanları, web sunucuları) ayarlanmasını, ek bağımlılıkların ve yapılandırma parametrelerinin kurulmasını ve programın çalışması için başlatılmasını içerebilir.

Daha geniş bir perspektiften deploy işlemi, yazılım güncellemelerinin, hata düzeltmelerinin veya yeni özelliklerin kullanıcılarla buluşmasını sağlar. Yazılım geliştirme yaşam döngüsünde kritik bir aşamadır ve son kullanıcıların yeni veya güncellenmiş özelliklere erişimini mümkün kılar.

Deploy işlemi, basit bir dosya aktarımından, karmaşık otomasyon adımlarını içeren büyük çaplı pipeline’lara kadar farklı seviyelerde gerçekleştirilebilir.

Biz, deploy işlemini kolaylaştırmak için [Render.com](https://render.com/) platformunu kullanacağız. [Render.com](http://render.com/), GitHub ile entegre çalışarak minimum çabayla dağıtım sürecini yönetme imkanı sunar. Ancak, deploy işlemine geçmeden önce kodumuzda bazı optimizasyonlar yapmamız gerekecek.

Projemizi gözden geçirelim ve bazı iyileştirmeler yapalım, böylece dağıtım sürecini daha kolay hale getirelim:

1. Hassas (gizli) bilgilerin saklanması için çevresel değişkenlerin kullanılması iyi bir uygulama olarak kabul edilir. Biz, `google-oauth.json` dosyasını Google hesabı anahtarlarını saklamak için kullanıyoruz. Bu, yerel geliştirme için pratik olsa da, dağıtım aşamasında bu işlevselliği iyileştirmemiz gerekiyor. Repositoriye dahil etmek istemediğimiz bazı verileri çevresel değişkenler aracılığıyla saklayabiliriz ve bu sayede ilgili dosyayı `.gitignore` dosyasında bırakabiliriz. Bu değişiklikleri yapmak için dosyalarımızda küçük düzenlemeler yapmamız gerekecek.

```
// src/utils/googleOAuth2.js

import { OAuth2Client, type LoginTicket } from 'google-auth-library';
import oauthConfig from '../../google-oauth.json';
import createHttpError from 'http-errors';
import { ENV_VARS, env } from './env';

const googleOAuthClient = new OAuth2Client({
  clientId: env(ENV_VARS.GOOGLE_AUTH_CLIENT_ID), // çevresel değişkenleri değiştiriyoruz
  clientSecret: env(ENV_VARS.GOOGLE_AUTH_CLIENT_SECRET), // çevresel değişkenleri değiştiriyoruz
  redirectUri: oauthConfig.web.redirect_uris[0],
});
// buna bağlı olarak, src/utils/env.ts dosyasına ilgili değerleri ENV_VARS'a eklememiz gerekiyor

export const generateAuthUrl = (): string =>
  googleOAuthClient.generateAuthUrl({
    scope: [
      '<https://www.googleapis.com/auth/userinfo.email>',
      '<https://www.googleapis.com/auth/userinfo.profile>',
    ],
  });

export const validateCode = async (code: string): Promise<LoginTicket> => {
  const response = await googleOAuthClient.getToken(code);
  if (!response.tokens.id_token) throw createHttpError(401, 'Unauthorized');
  const ticket = await googleOAuthClient.verifyIdToken({
    idToken: response.tokens.id_token,
  });
  return ticket;
};
```

2. [render.com](http://render.com/)'un bizden talep edeceği servis için build ve başlatma komutlarını hazırlamak:

```
{
	"scripts": {
		"build": "tsc && npm run build-docs",
    "start": "node dist/index.js",
    "dev": "nodemon ./src/index.ts | pino-pretty",
    "build-docs": "redocly bundle --ext json -o docs/swagger.json",
    "preview-docs": "redocly preview-docs",
	}
}
```

Başlatma komutunda yalnızca sunucunun başlatılmasını bıraktık, çünkü [render.com](http://render.com/)üzerinde her durumda ayrı bir build komutu belirtebiliriz.