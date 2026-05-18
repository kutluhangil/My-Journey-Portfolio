# NPM Paket Yöneticisi

Node.js'in çeşitli araçlarını kullanabilmek için bunları yükleyip yönetme yeteneğine ihtiyacımız var. Bu amaçla oluşturulan NPM (Node Package Manager) — Node.js'in paket yöneticisidir. Gerekli araçları yükler ve bunlarla çalışma için kullanıcı dostu bir arayüz sunar.

NPM otomatik olarak Node.js'in yüklenmesiyle birlikte yüklenir. Başarılı bir kurulumdan sonra terminalde `npm` komutu kullanılabilir hâle gelir. NPM'in başarılı bir şekilde yüklendiğinden emin olmak için sürümünü kontrol edin; aşağıdaki komutu konsolda çalıştırın ve Enter tuşuna basın:

`npm --version`

Komutun çalıştırılması sonucunda mevcut yüklü NPM sürümü görüntülenecektir. Sürümünüz farklı olabilir çünkü sürekli güncellemeler yapılmaktadır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a5eeb8a2-64e3-4b5f-a8ed-02d44b96ca75Screenshot%202023-09-13%20at%2015.43.33.png)

Şimdi, npm'in başlangıç yapılandırmasını gerçekleştirmeniz gerekiyor. Gelecekteki projelerin yazarının adını ve e-postasını ayarlayarak yani kendi bilgilerinizi girerek bu yapılandırmayı tamamlayabilirsiniz.

Adınızı ayarlamak için terminalde şu komutu çalıştırın. `"YOUR_NAME"` yerine kendi adınızı yazın ve tırnak işaretlerini unutmayın:

`npm config set init.author.name "YOUR_NAME"`

İşte böyle görünecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/85638ca0-b407-4926-a800-df8b1d3d61e2Screenshot%202023-09-13%20at%2015.48.51.png)

E-posta adresini tanıtmak için aşağıdaki komutu terminalde çalıştırın. `"YOUR_EMAIL"`yerine kendi e-posta adresinizi yazın. GitHub’a kaydolduğunuz e-postayı belirtin:

`npm config set init.author.email "YOUR_EMAIL"`

İşte böyle görünecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/c5311ae1-f6be-4867-a610-74931010d3c8Screenshot%202023-09-13%20at%2015.49.54.png)