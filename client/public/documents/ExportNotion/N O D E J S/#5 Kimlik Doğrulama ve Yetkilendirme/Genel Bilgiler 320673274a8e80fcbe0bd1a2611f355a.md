# Genel Bilgiler

Merhaba!

Bu modülde, web uygulamalarının güvenliğiyle ilgili temel unsurları detaylı bir şekilde inceleyecek ve özellikle kullanıcı kimlik doğrulama ve yetkilendirme süreçlerine odaklanacağız. Uygulamanız için güvenilir kayıt ve giriş sistemleri oluşturmayı, Node.js'ın güçlü araçlarını kullanarak öğreneceksiniz. Bu kapsamda kullanıcı kaydı, şifrelerin güvenli saklanması, oturum yönetimi ve erişim token'ı gibi teknikleri ele alacak ve uygulamanızı potansiyel tehditlere karşı koruyacak önemli güvenlik uygulamalarını öğreneceksiniz. O halde, **Hadi başlayalım!**

Modern dünyada mülkiyet olmadan herhangi bir şeyi hayal etmek zordur. Çocukluğumuzdan itibaren, bir şeyin bize ya da başkasına ait olduğunun farkında oluruz. Örneğin, bir oyuncak bizimse bunu söyleriz ve diğerleri de bu durumu kabul eder. Ancak yetişkinlikte, mülkiyet çoğunlukla belgeyle kanıtlanır.

Mülkiyetin korunması için bir mekanizma gerekir. Çocukken bu ebeveynlerimizken, yetişkinlikte bu mekanizma devlet olur. Ek olarak, mülklerimize erişimimizi sağlayan anahtarlarımız vardır. Bu anahtarlar, hem bizim hem de izin verdiğimiz kişilerin bu mülkleri kullanmasına olanak tanır. Dijital dünyada da benzer kurallar geçerlidir.

# **Kullanıcı (User)**

Bilgi sistemlerinde kullanıcılar yalnızca insanlar değil, aynı zamanda diğer sistemler de olabilir. Örneğin, API anahtarları kullanarak uygulamalar geliştirdiyseniz, bu bir sistemin diğer bir sistemi kullanmasına örnek olabilir. Daha yakın bir örnek, sunucumuzun MongoDB ile etkileşimidir; bu, iki sistem arasındaki bir etkileşimdir.

# **Yetkilendirme Mekanizması (authority)**

Bir kullanıcının kimliğini doğrulamak ve ona uygun bilgilere erişim sağlamak önemlidir. Gerçek dünyada bu devlet olabilirken, dijital dünyada bu bizim arka uç sistemimizdir. Uygulamalarımız, kullanıcıların kişisel verilerini emanet ettiği yerler olduğu için, yetkilendirme ve kimlik doğrulama süreçlerini son derece güvenilir bir şekilde tasarlamak büyük önem taşır.

# **Kaynaklara Erişim Hakkı (Access Rights)**

Mülklerimize erişimi sınırlandıran anahtarlarımız gibi, dijital dünyada da şifreler, seed ifadeleri ve elektronik anahtarlar gibi erişim kontrolleri bulunur. Bu sistemler, mülkiyetimizin yetkisiz erişimlere karşı korunmasını sağlar.

# **Kimlik Belirleme (Authentication)**

Aracımız çalınsa bile, pasaportun varlığı mülkiyet haklarını belirlemeye yardımcı olabilir. IT dünyasında bunun iyi bir analojisi, kaybolan bir şifreyi e-posta veya cep telefonu kullanarak geri kazanma imkanıdır. Bu süreç, çok faktörlü kimlik doğrulama (MFA) gibi güvenlik önlemlerini de içerir ve kullanıcı güvenliğini üst seviyeye taşır.

[**Kimlik doğrulama (authentication)**](Genel%20Bilgiler/Kimlik%20do%C4%9Frulama%20(authentication)%20320673274a8e80f4b3ddd4eea5dcff3a.md)

[**Yetkilendirme (authorization)**](Genel%20Bilgiler/Yetkilendirme%20(authorization)%20320673274a8e8073b002dbcad37fa8d6.md)