# Google Authentication

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3097c374-bac2-4a3f-8f65-e45c18c2ad4bScreenshot%202024-03-28%20at%2021.46.23.png)

Günümüzde, geleneksel kullanıcı adı ve şifre ile yapılan kimlik doğrulama yöntemlerinin kullanım oranı giderek azalmakta. Bunun yerine, çok daha hızlı ve pratik bir çözüm olan sosyal medya tabanlı kimlik doğrulama (Google, Apple ID, Facebook, GitHub, GitLab vb.) giderek daha yaygın hale gelmektedir. Bu teknolojiye uyum sağlamak amacıyla, bu yazıda Google OAuth2 tabanlı kimlik doğrulama yöntemini inceleyeceğiz.

Google OAuth 2.0, üçüncü taraf uygulamaların kullanıcı verilerine güvenli bir şekilde erişmesini sağlayan yaygın olarak kullanılan bir kimlik doğrulama ve yetkilendirme protokolüdür. Bu, kullanıcıların şifrelerini bilmeden Google hizmetleri aracılığıyla gerçekleştirilir. OAuth 2.0, birçok önde gelen teknoloji şirketi tarafından kullanıcıların kimlik doğrulama ve yetkilendirilmesi için kullanılan standart bir protokoldür.

Google OAuth 2.0’ın nasıl çalıştığına dair temel adımlar şu şekildedir:

1. **Kayıt**: Google OAuth 2.0'ı uygulamanıza entegre etmeden önce, uygulamanızı Google API konsolunda kaydetmeniz gerekir. Bu işlem sırasında, uygulamanızı Google kimlik doğrulama sunucularında tanımlayan bir istemci kimliği ve istemci sırrı edineceksiniz.
2. **Kimlik doğrulama isteği**: Kullanıcı, Google hesabıyla uygulamanıza giriş yapmaya çalıştığında, uygulamanız onu belirli bir kimlik doğrulama isteği ile Google kimlik doğrulama sunucusuna yönlendirir. Bu istek, istemci kimliğinizi, talep edilen erişim kapsamını ve Google'ın kimlik doğrulama işleminden sonra kullanıcıyı yönlendireceği URI'yi içerir.
3. **Kullanıcı onayı**: Kimlik doğrulama isteği alındığında, Google, kullanıcılara uygulamanızın hangi verilere erişim talep ettiğini gösteren bir onay ekranı sunar ve kullanıcıdan bu erişimi onaylamasını ister.
4. **Yetkilendirme kodu**: Kullanıcı onay verdiğinde, Google bir yetkilendirme kodu oluşturur ve kullanıcıyı uygulamanızda belirtilen URI’ye geri yönlendirir. Bu yönlendirme ile birlikte yetkilendirme kodu da gönderilir.
5. **Token değişimi**: Uygulamanız, yetkilendirme kodunu bir erişim token'ı ve isteğe bağlı olarak bir yenileme token'ı ile değiştirir. Erişim token'ı, kullanıcı adına API isteklerini kimlik doğrulamak için kullanılırken, yenileme token'ı mevcut token süresi dolduğunda yeni bir erişim token'ı almak için kullanılabilir.
6. **Google API'ye erişim**: Erişim token'ı ile uygulamanız, kullanıcı adına Google API'ye yetkilendirilmiş istekler yapabilir. Erişim kapsamı, kimlik doğrulama sürecinde talep edilen izinlere bağlıdır.
7. **Token yenileme**: Erişim token'larının genellikle sınırlı bir geçerlilik süresi vardır (genellikle bir saat), bu süreden sonra geçerliliği sona erer. Kullanıcı adına Google API'ye erişimi sürdürmek için uygulamanız, kullanıcıyı yeniden kimlik doğrulamadan yeni bir erişim token'ı almak için yenileme token'ını kullanabilir.

Google OAuth 2.0, kullanıcıların kimlik bilgilerini doğrudan paylaşmadan üçüncü taraf uygulamalara güvenli bir şekilde Google hesaplarına erişim imkanı sunar. Bu, Gmail, Google Drive ve Google Takvim gibi Google hizmetleriyle entegre olan web ve mobil uygulamalarda yaygın olarak kullanılmaktadır.

Uygulamamızda, yalnızca yukarıda bahsedilen ilk 5 maddeyi kullanacağız. Çünkü Google OAuth’ı, sadece uygulamamızda kullanıcı girişi veya kaydı için ek bir seçenek olarak kullanacağız. Diğer Google hizmetlerine erişim ve token yenileme işlemlerini uygulamamızda kullanmayacağız. Yetkilendirme işlemleri için, daha önce oluşturduğumuz oturum yönetim sistemini kullanmaya devam edeceğiz.

[Google OAuth eklemek](Google%20Authentication/Google%20OAuth%20eklemek%20322673274a8e8030959ac8359560df18.md)