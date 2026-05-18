# POP3 (Post Office Protocol 3):

**POP3**, bir posta sunucusundan kullanıcının yerel bilgisayarına e-posta almak için kullanılan bir protokoldür.

**POP3 Nasıl Çalışır:**

- Kullanıcı, POP3 kullanarak posta sunucusuyla bağlantı kurar.
- Sunucudaki mesajlar, kullanıcının yerel bilgisayarına indirilir.
- Genellikle, mesajlar sunucudan silinir, ancak bu kullanıcı tarafından ayarlanabilir.

Her iki protokolde de veri aktarımı sırasında gizliliği korumak için TLS veya SSL şifrelemesi kullanılabilir. (HTTP için HTTPS benzeri).

Önemli Farklılıklar:

- **Mesajların Saklanması:SMTP:** Gönderen mesajları saklamaz.
- **POP3:** Alıcı mesajları yerel olarak saklayabilir.
- **Protokol Türü:SMTP:** Posta gönderimi.
- **POP3:** Posta alımı.
- **Yönlendirme:SMTP:** Gönderen-sunucu-alıcı.
- **POP3:** Alıcı-sunucu-müşteri.

Bu iki protokol, e-postanın gönderiminden alımına kadar olan tam yaşam döngüsünü sağlamak için birlikte çalışır.

Biz, uygulamamızda SMTP protokolü aracılığıyla e-posta gönderimini inceleyeceğiz, çünkü bu, e-posta ile çalışma açısından en yaygın kullanım durumudur. Node.js kullanarak gelen postaları okumak ise, bu teknolojinin daha nadir bir kullanım şeklidir.

Parola sıfırlama işlevini gerçekleştirelim. Kayıp bir parolada, kullanıcının kimliğini yalnızca sistemimize güvenerek belirleyemeyeceğimiz için, güvenebileceğimiz bir dış kaynağa ihtiyacımız var. Bu tür bir kaynak genellikle e-posta olur. Kullanıcı, e-posta hesabına erişim sağlıyorsa, kendisinin iddia ettiği kişi olduğunu doğrulayabiliriz ve ona erişimini geri verebiliriz.

Bu nedenle, parola sıfırlama mesajlarını göndermek için yeni bir POST **`/auth/request-reset-email`** uç noktası oluşturmalıyız.

Peki, kullanıcının kimliğini doğrulamak için ne kullanabiliriz? Bir seçenek, kullanıcının doğrulama için bir kod almasıdır. Örneğin, OTP (tek kullanımlık şifre) gönderebiliriz ve kullanıcıdan bu kodu yeni parolasıyla birlikte girmesini isteyebiliriz.

Ancak bu yöntem, kullanıcı için pratik olmayabilir çünkü ek işlemler gerektirir. Biz, e-posta üzerinden tıklanabilir bir bağlantı göndermeyi öneriyoruz; bu bağlantıya tıklandığında, parola girme sayfası açılacak ve başka bir bilgi girmesi gerekmeyecek. Gerekli verileri, bu bağlantının sorgu parametrelerinde taşıyabiliriz. Bunun için kullanıcıyı tanımlamak amacıyla jwt token kullanmayı öneriyoruz.