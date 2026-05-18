# Content-Type: Multipart/form-data

`multipart/form-data`, HTTP üzerinden dosya ve çok parçalı verilerin iletilmesini sağlayan içerik türlerinden biridir. Bu içerik türü, dosyaların ve metin verilerinin tek bir istekte birleştirilerek gönderilmesine olanak tanır.

`multipart/form-data`'nın temel özellikleri:

- **Çok parçalı yapı (multipart):**

`multipart/form-data` ile yapılan bir istek, her biri kendi veri parçasını içeren birden fazla bölümden oluşur. Bu, metinler, dosyalar veya görseller gibi farklı türde verilerin aynı anda iletilmesini sağlar.

- **Dosya gönderimi:**

`multipart/form-data`'nın temel özelliği, dosyaların HTTP protokolü üzerinden gönderilme imkanıdır. Kullanıcı, bilgisayarındaki dosyaları seçebilir ve bunları bir web formu aracılığıyla sunucuya gönderebilir.

- **Veri kodlaması:**

`multipart/form-data` içindeki veriler, HTTP protokolü üzerinden iletilmek üzere kodlanabilir. Genellikle, her veri parçası için ayırıcılar ve meta veriler içeren `multipart/form-data` kodlaması kullanılır.

- **Amaç:**

Bu içerik türü, kullanıcıların fotoğraf, video, belge gibi dosyaları taleplerine ekleyebildiği web sayfalarındaki formlardan veri göndermek için sıkça kullanılır.

- **Parametreleme:**

`multipart/form-data` ile yapılan istekler, dosyalarla birlikte ek parametreler veya meta veriler içerebilir. Bu, dosya adı, içerik türü, dosya boyutu gibi bilgiler olabilir.

`multipart/form-data` kullanımı, dosyaların ve çok parçalı verilerin HTTP protokolü üzerinden iletilmesi için standart bir yöntemdir. Bu içerik türü, çeşitli verilerin etkili bir şekilde iletilmesine olanak tanır ve çok sayıda dosya veya form ile çalışan web uygulama geliştiricileri için özellikle faydalıdır.