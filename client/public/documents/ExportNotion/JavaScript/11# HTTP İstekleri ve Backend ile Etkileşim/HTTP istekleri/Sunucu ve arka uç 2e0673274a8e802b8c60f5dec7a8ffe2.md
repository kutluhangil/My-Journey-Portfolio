# Sunucu ve arka uç

**Sunucu (Server)**, özel bir yazılıma sahip bir bilgisayardır.

**Arka uç (Backend)** , sunucu üzerinde bulunan, gelen HTTP isteklerini işleyebilen ve belirli istekler için bir dizi hazır eylemi olan bir uygulamadır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f5bced60-a170-4a7a-bb43-f918653e2103Frame_771532.jpg)

**API (uygulama programlama arayüzü)**, farklı yazılım bileşenleri arasındaki iletişim için açıkça tanımlanmış bir dizi kuraldır. Arayüz, bir programdan ne yapmasını isteyebileceğinizi ve sonuç olarak ne olacağını açıklar.

**REST (temsili durum aktarımı)** bir arka uç mimarisi tarzıdır. Ağ kaynaklarının nasıl tanımlandığını ve ele alındığını açıklayan bir dizi ilkeye dayanır.

**REST API** - REST prensibi üzerine inşa edilmiş bir arka uç. Web uygulaması ile veritabanı arasında bir katman görevi görür. Kaynaklara erişim için standart bir arayüze sahiptir. Bir web sitesi gibi çalışır: istemciden sunucuya bir HTTP isteği göndeririz ve yanıt olarak bir HTML sayfası yerine JSON formatında veri alırız.

Binlerce arka uç vardır ve her biri benzersizdir. Öte yandan, REST API'ler standart bir mimari üzerine inşa edilmiştir. Böylece, nasıl çalıştıklarını anlayabilirsiniz ve sonra tek yapmanız gereken kullanmak istediğiniz arka ucun belgelerini okumaktır.