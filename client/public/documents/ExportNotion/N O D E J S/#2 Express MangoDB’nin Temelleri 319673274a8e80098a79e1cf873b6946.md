# #2 Express. MangoDB’nin Temelleri

*Bir şehir ile onun en büyük otoyolu arasında ne benzerlik var?*

Her gün, birçok kişi şehirde hareket eder, sokaklardan geçer ve kavşakları kullanır. Ancak, çok az kişi bu yolların nasıl organize edildiğini ve nasıl çalıştığını bilir. Bu, mühendislik ve trafik planlaması ile ilgilidir.

**Web geliştirme dünyasında otoyolun karşılığı Express**'tir — **Node.js** ekosistemindeki en popüler web framework’ü. Her gün birçok web uygulaması Express üzerinden geçiyor, ancak herkes onun nasıl çalıştığını bilmiyor. Ama sen — geleceğin geliştiricisisin. Şimdi, bu temel web geliştirme aracına derinlemesine bakma ve temellerini öğrenme zamanı.

[Express (https://expressjs.com](https://expressjs.com/)) — web uygulamaları ve API'ler geliştirmek için tasarlanmış popüler bir **JavaScript kütüphanesi**dir. Express, **Node.js** üzerine inşa edilmiştir ve sunucu uygulamaları oluşturmanın basit ve etkili bir yolunu sunar.

Bazen **Express**, tam anlamıyla bir çerçeve (framework) olarak tanımlanır. Ancak, yalnızca yönlendirme (routing) işlevini yerine getirir ve tipik görevleri çözmek için yerleşik araçları (örneğin; loglama, veritabanı işlemleri, mimari yapılandırma, istek doğrulama vb.) barındırmaz. Yine de, Express ile uyumlu araçların ekosistemi oldukça geniştir ve çoğu işlev için hazır çözümler bulmak mümkündür.

# Express'in Çözdüğü Temel Görevler:

- **G/Ç (girdi/çıktı)**: Kullanıcılarla veya dış sistemlerle etkileşimde bulunan tüm programlar, veri girişi ve çıkışı gerçekleştirir. Web geliştirmede bu, istemcilerden gelen istekleri alma ve onlara yanıt gönderme anlamına gelir. Örneğin, bir kullanıcı web sitenizin sayfasını açtığında, tarayıcısı sunucuya bir istek gönderir ve sunucu kullanıcıya sayfayı veya **JSON verilerini** döner. **Express**, bu görevleri yerine getirirken istekleri işleyerek yanıtlar göndermeye yardımcı olur.
- **İstek Yönlendirme**: Web geliştirmede yönlendirme, sunucunun farklı **URL yollarına** ve **HTTP istek türlerine** (GET, POST, PUT, DELETE vb.) nasıl yanıt vermesi gerektiğini belirler. Örneğin, bir kullanıcı sitenizin ana sayfasını açtığında (örneğin, **`http://example.com/`**), bu, ana sayfanın içeriğini döndüren bir işleyiciyi tetikler. Kullanıcı sitenizde kayıt olmaya çalıştığında (örneğin, form verilerini gönderdiğinde), bu, yeni bir kullanıcıyı veritabanına ekleyen bir işleyiciyi tetikleyebilir. **Express**, bu yönlendirmeleri ve farklı istekler için **(request handler)** işleyicileri tanımlama olanağı sunar.

Aşağıdaki şemada, Express'in web uygulamasının önemli bir parçası olarak nasıl çalıştığına dair bir örnek gösterilmektedir:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/aca16355-dd65-4442-953f-11d63377d236Screenshot%202024-02-10%20at%2018.11.33.png)

Genel olarak, **Express** güçlü bir araçtır ve sunucu uygulamaları oluşturmayı daha verimli hale getirir. Geliştiricilerin uygulamalarının sunucu tarafını daha hızlı bir şekilde oluşturmasına olanak tanır ve temel **HTTP isteklerini** işlemek için zaman kaybetmeden iş mantığını geliştirmeye odaklanmalarını sağlar.

[Express](#2%20Express%20MangoDB%E2%80%99nin%20Temelleri/Express%20319673274a8e8056b055eeaf9b13dbb4.md)

[MangoDB Temelleri](#2%20Express%20MangoDB%E2%80%99nin%20Temelleri/MangoDB%20Temelleri%20319673274a8e80d3b17cccf61aadb74a.md)