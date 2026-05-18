# Kod Bölme: Performansı Artırma Yöntemleri

Varsayılan olarak, proje bağımlılıkları tek bir dosyada toplanır. Kodun miktarı arttıkça, kullanıcı tarayıcısında yüklenmesi, işlenmesi ve çalıştırılması daha yavaş hale gelir. Zayıf bilgisayarlarda veya telefonlarda, kötü bir internet bağlantısı ile bu süre onlara kadar çıkabilir.

Yerel bir sunucuda (`localhost`) geliştirme yaparken, tüm dosyalar bilgisayarımızdan dağıtılır. Bu durumda, internet bağlantı hızı önemli değildir ve dolayısıyla proje dosyaları oldukça hızlı yüklenir. Ancak, üretim aşamasında büyük dosyaların yüklenmesi sorun oluşturabilir; çünkü herkesin yüksek hızlı internet erişimi veya güçlü bilgisayarları olmayabilir.

Bu sorunun çözümü, projeyi daha küçük dosyalara ayırmak ve bu dosyaları yalnızca ihtiyaç duyulduğunda yüklemektir. Bu yaklaşım, "kod bölme" (code splitting) konsepti olarak adlandırılmaktadır. Örneğin, kullanıcı giriş sayfasına girdiğinde, uygulamanın tüm kodunun yüklenmesi gerekmez; yalnızca o sayfanın bileşenlerinin render edilmesinden sorumlu kısım yüklenir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d36e02ad-b4db-4425-92ef-59f3d15e34a2image%20%2834%29.jpg)

Program kodunu rotalara göre ayırmak ve ihtiyaç duyuldukça yüklemek oldukça önemlidir. Bu, çoğu uygulama için yeterli bir yaklaşımdır. Yeni bir sayfaya geçtiğimizde, o sayfanın bileşenlerini gösteren gerekli kod yüklenir. Bu yaklaşım, rota merkezli kod bölme olarak adlandırılmaktadır (route-centric).

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7901ee91-8b86-4e48-963b-59f5296c299bimage%20-%202024-10-15T131100.421.png)

Arayüzler karmaşık hale geldiğinde, kullanıcı tarafından belirli bir eylem gerçekleştirilmeden önce gereksiz olan büyük sayfa bileşenlerinin yüklenmesini optimize etme imkanı vardır. Örneğin, büyük bir metin düzenleyici kütüphanesinin kullanıldığı bir modal pencere bileşeni bu duruma örnek gösterilebilir. Bu yaklaşım "bileşen temelli kod bölme" (component-centric code splitting) olarak adlandırılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/54458b6b-5e8d-43ac-abab-d9e66bc60951image%20-%202024-10-15T131110.239.png)

```
💡 NE KULLANMALI?
Geliştirici, neyi, nasıl ve nerede paylaşacağına karar verir. Ancak, burada dikkate alınması gereken bazı en iyi uygulamalar şunlardır:
— Kodun rotalara dayalı olarak bölünmesi, herhangi bir uygulamada zorunludur.
— Bileşenlere dayalı kod bölünmesi, yalnızca yüzlerce bileşen ve büyük kütüphanelere sahip büyük, karmaşık arayüzlerde yapılmalıdır.
— Aşırı kod bölünmesi de en iyi fikir değildir. Bir dosya için yapılan HTTP isteği, ilk yüklemedeki ek yükten daha uzun sürebilir.
```