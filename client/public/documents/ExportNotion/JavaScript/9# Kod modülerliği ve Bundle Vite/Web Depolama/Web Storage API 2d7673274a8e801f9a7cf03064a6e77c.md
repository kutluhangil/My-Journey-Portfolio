# Web Storage API

Çerezler, web siteleri ile etkileşim sırasında kullanıcı tarafında bilgi saklama sorununa çözüm sunar. Ancak bazı önemli kısıtlamaları da beraberinde getirir.

Öncelikle, çerezlerin veri saklama kapasiteleri oldukça sınırlıdır — genellikle sadece birkaç kilobayt. Modern web uygulamaları daha karmaşık hale geldikçe, tarayıcıda daha büyük ve yapısal verilerin saklanması gereksinimi doğmuştur.

HTML5’in gelişiyle birlikte, tarayıcıda kullanıcıya ait verilerin daha verimli şekilde yönetilebilmesini sağlayan **Web Storage API** ortaya çıktı. Bu API sayesinde tarayıcıda çalışan herhangi bir JavaScript kodu kolaylıkla veri depolayabilir ve bu verilere erişebilir.

Temel fark şudur:

Web Storage API, daha büyük veri saklama kapasitesi sunar ve yalnızca **istemci tarafında çalışan JavaScript** tarafından erişilebilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/03f3ac29-35ed-49fc-9207-8344c6878c70Frame%2048670.jpg)

**Web Storage**, web tarayıcılarında web uygulamalarının **istemci tarafında** (yani kullanıcının bilgisayarında) veri saklamasına ve bu verilere erişmesine olanak tanıyan bir mekanizmadır.

Bu sayede kullanıcı:

- Tarayıcıyı kapatıp açsa bile bazı bilgiler korunabilir,
- Video izleme veya alışveriş sepetine ürün ekleme gibi işlemler sırasında arayüzün durumu hatırlanabilir,
- Bir sonraki ziyarette kaldığı yerden devam edebilir.

```
 Web Storage, şifreler, banka kartı numaraları gibi hassas bilgileri saklamak için   güvenli bir alan değildir. Kötü niyetli bir script sayfaya erişim sağlarsa bu verilere ulaşabilir.

```

**Web Storage Türleri**

Web Storage iki ana bölümden oluşur:

1. **Yerel Depolama (Local Storage)**

- Her web uygulaması için benzersizdir.
- Aynı uygulama farklı sekmelerde açık olsa bile veriler ortaktır.
- Tarayıcı veya bilgisayar kapatılsa bile veriler silinmez.
- Silmek için JavaScript ile manuel olarak müdahale gerekir.
- Verilere, veriyi oluşturan **alan adıyla ilişkili** herhangi bir sekmeden ya da pencereden erişilebilir.

2. **Oturum Depolama (Session Storage)**

- Yerel depolamadan farklı olarak, veriler **sadece bir tarayıcı oturumu** boyunca saklanır.
- Kullanıcı sekmeyi veya tarayıcıyı kapattığında bu veriler **otomatik olarak silinir**.
- Geçici veriler ya da uzun süre saklanması gerekmeyen bilgiler için idealdir.
- Her sekme için ayrı bir oturum depolama alanı vardır; farklı sekmeler arasında veri paylaşılmaz.