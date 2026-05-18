# Kimlik doğrulama (authentication)

Bir kullanıcı veya sistemin, belirli kaynaklara ya da işlevlere erişim sağlamak için kimliğini doğrulama sürecidir. Bu işlem, kullanıcının veya sistemin iddia ettiği kişi ya da yapı olduğunu kanıtlaması için kimlik bilgilerini (örneğin, kullanıcı adı ve şifre) sunmasını gerektirir. Kimlik doğrulama, sisteme erişim talebinin gerçekten o kullanıcıya ait olup olmadığını kontrol etme sorumluluğuna sahiptir.

Kimlik doğrulama süreci şu temel adımlardan oluşur:

**1. Kimlik Belirtme (Identification):**

- Kullanıcı veya sistem, kendini tanıtmak için bir kimlik belirtir. Bu genellikle bir **kullanıcı adı**, **e-posta adresi** ya da başka bir benzersiz tanımlayıcı olabilir. Örneğin, uygulamamızda, kullanıcıyı benzersiz bir şekilde tanımlamak için **e-posta adresi** kullanılacaktır. Bu genellikle sistemde aynı e-posta adresine sahip iki kullanıcı olamayacağı anlamına gelir ve bazı sistemlerde daha sonra güncellenmesi yasaklanabilir.

**2. Kimlik Bilgilerini Sunma(Credential Submission):**

- Kimlik belirtmenin yanı sıra, kullanıcı veya sistem, bu kimlik altında sistemdeki kaydın gerçekten kendilerine ait olduğunu doğrulamalıdır. Bu, bir şifre, fiziksel veya elektronik anahtar (ssh anahtarı), seed ifadesi (birkaç kelimeden oluşan bir matris; kripto cüzdanı ile ilgilenenler bununla karşılaşmışlardır) olabilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/711794e2-e7d5-4886-9d74-4a9768099e9fUntitled%20-%202024-12-29T233924.915.png)

*seed ifadesi*

**3. Kimlik Doğrulama (Authentication):**

- Sistem, sunulan kimlik ve kimlik bilgilerini, kendi veritabanında sakladığı bilgilerle karşılaştırır. Eğer bu bilgiler eşleşirse, kimlik doğrulama başarılı kabul edilir.

**4. Erişim Sağlama (Access Granting):**

- Başarılı bir kimlik doğrulamanın ardından, kullanıcıya belirlenen kaynaklara veya işlevselliğe erişim sağlanır. Bu, erişim belirteci, oturum kimliği çerezlerinde vb. kullanarak bir oturum oluşturma yoluyla veya durum bilgisi taşımayan (stateless) jwt belirteci aracılığıyla yapılabilir.

**5. Oturum Yönetimi (isteğe bağlı):**

- Bazı sistemlerde, oturumun geçerlilik süresini yönetmek için oturum zaman aşımı uygulanır. Bu, kullanıcı kimlik doğrulamasının belirli bir süre sonra yeniden yapılmasını gerektirir.

**Kimlik doğrulama**, sistemlerin güvenliğini sağlamak ve yetkisiz erişimi önlemek için kritik bir süreçtir. Güçlü bir kimlik doğrulama mekanizması, yalnızca yetkili kullanıcıların veya sistemlerin erişim talebine olumlu yanıt verilmesini garanti eder.