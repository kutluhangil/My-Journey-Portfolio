# Yönlendirme (Routing)

Web uygulamalarının masaüstü uygulamalara göre en büyük avantajı, kullanıcıların belirli bir program bölümüne erişmesini sağlayan URL'lerin varlığıdır. Bu özellik sayesinde bir sayfa yer imi olarak kaydedilebilir veya başka bir kullanıcıya bağlantı gönderilebilir. Bu durumda, kullanıcı aynı arayüze (kişisel veriler hariç) erişebilir.

Yönlendirme, uygulama geliştirme sürecinde göz ardı edilebilecek bir detay değil, aksine, navigasyon yapısını ve sayfa düzenini tasarlarken ilk düşünülen unsurlardan biri olmalıdır.

# **URL Yapısı**

URL yapısını, yaşadığınız adres gibi düşünebilirsiniz: sokak, bina, daire numarası gibi. Arayüzdeki her farklı durum, kendine özgü bir adres yani URL'ye sahip olmalıdır. Kullanıcının gördüğü arayüzdeki durumu, URL yansıtmalıdır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/9449fe91-abcd-4a85-983b-897a94a212caimage%20%2833%29.jpg)

Herhangi bir URL'nin hangi parçalardan oluşabileceğini inceleyelim.

- `https://` - protokol
- `mysite.com/` - ana makine (host)
- `books/e3q76gm9lzk` - yol, uygulamada bulunduğumuz yer
- `e3q76gm9lzk` - URL parametresi. Parametreler dinamik veya statik olabilir
- `?` - sorgu dizesinin başlangıç sembolü
- `?category=adventure&status=unread` - sorgu dizesi
- `category=adventure` - parametre=değer çifti
- `&` - parametreleri ayıran "ve" sembolü
- `#comments` - ankraj (hash), sayfadaki konumu belirler

# **Navigasyon Geçmişi**

Navigasyon geçmişi, tarayıcıda mevcut sekmedeki uygulama bağlantıları (yollar) arasında nasıl geçiş yaptığımızı ve bu geçişlerin nasıl saklandığını ve işlendiğini açıklar. Her bağlantıya geçtiğimizde, yeni bir sayfa üst üste ekleniyormuş gibi bir tarih yığını (history stack) oluşur. HTML5 History API özellikleri ve yöntemleri sayesinde, kullanıcılar geçmişte ileri ve geri geçiş yapabilir ve geçmişin içeriği üzerinde değişiklikler yapılabilir.

React Router'ı daha derinlemesine anlamak istiyorsanız, temel kavramlarla tanıştıktan sonra [A Little Bit of History](https://blog.pshrmn.com/a-little-bit-of-history/) makalesine geri dönmenizi öneririz.

# **React'ta Yönlendirme**

React içerisinde yerleşik bir yönlendirme modülü bulunmaz. Bu nedenle, React uygulamalarında [React Router](https://reactrouter.com/) kütüphanesi kullanılır. React Router, kullanıcı navigasyon geçmişini yönetmek ve tarayıcı adres çubuğundaki URL'ye göre farklı bileşenleri görüntülemek için bir dizi bileşen ve fonksiyon sağlar.

`npm install react-router-dom`