# Stillerin Normalleştirilmesi

HTML öğelerinin tarayıcıdan bağımsız olarak aynı görünmesini isteriz. Ne yazık ki durum böyle değildir. Öğeler farklı tarayıcılarda biraz farklı görünebilir. Bir tarayıcı bir web sayfasını oluştururken, önce temel kullanıcı aracısı stil sayfasını kullanır ve bu sayfanın değerleri diğer tarayıcılarınkinden farklı olabilir. Bu, öğelerin görünümünde küçük farklılıklara yol açar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/48cb59e3-7347-448e-9142-367e280986a7image%20%2817%29.png)

Stillerin normalleştirilmesi, farklı tarayıcıların stil sayfaları arasındaki tüm olası tutarsızlıkları düzelten başka bir stil sayfası ekleyerek bu sorunu çözme girişimidir. Başka bir deyişle, bir web sayfasının tarayıcılar arası uyumluluğunu geliştirmeye yönelik bir tekniktir - sitenin farklı tarayıcılarda aynı şekilde görüntülenmesi ve çalışması.

Bunu yapmak için, hazır bir normalleştirilmiş stil dosyası sağlayan [Modern Normalise](https://github.com/sindresorhus/modern-normalize#readme) kütüphanesini kullanabilirsiniz. Tek yapmanız gereken — bu stil dosyasını tüm stillerinizden önce eklemektir.

`<head>
  *<!-- İlk olarak, normalleştirici -->*<link rel="stylesheet" href="<https://cdn.jsdelivr.net/npm/modern-normalize@2.0.0/modern-normalize.min.css>">
  *<!-- Sonra stilleriniz -->*<link rel="stylesheet" href="./css/styles.css" />
</head>`

```
Normalleştirme kitaplığı stil sayfası — projenizin harici bir bağımlılığıdır. Bu nedenle — dosyasına bağlantı, stil sayfasının bulunduğu sunucuya giden mutlak yoldur. Bir HTML belgesi yüklediğinizde, tarayıcı geçerli sayfa için bu stil sayfasını yükleyecektir.
```