# Yetkilendirme (authorization)

Bir kullanıcı veya sistemin kimliğinin başarılı bir şekilde doğrulanmasının ardından, belirli kaynaklara ya da işlevlere erişim izni verme veya reddetme sürecidir. Basit bir ifadeyle, yetkilendirme, doğrulanan kimliğin hangi kaynaklara ya da işlemlere erişim hakkına sahip olduğunu belirler.

Yetkilendirmenin temel yönleri şunlardır:

- **Erişim haklarının belirlenmesi:**Kullanıcının kimlik doğrulamasından sonra hangi kaynakların veya işlevlerin erişilebilir olduğunu belirleme.
- **Rollerin ve ayrıcalıkların verilmesi:**Kullanıcıya erişim haklarını belirleyen belirli bir rol veya grup atama.
- **Hakların yönetimi:**Belirli koşullara veya sistem durumundaki değişikliklere bağlı olarak erişim haklarını dinamik bir şekilde değiştirme yeteneği.
- **Erişim reddi:**Kullanıcının yetkisi olmayan bir kaynağa erişmeye veya bir işlemi gerçekleştirmeye çalıştığında erişimi reddetmek için mekanizmalar.
- **Denetim ve izleme:**Kullanıcıların erişim haklarını kullanma biçimlerini belirlemek ve olası güvenlik tehditlerini tespit etmek için kullanıcı eylemleri hakkında bilgi toplama ve analiz etme.

**Örnek:** Yetkilendirme sistemine sahip bir web sitesini ele alalım. Kullanıcı kimlik doğrulamasını başarıyla geçtikten sonra (kimlik bilgilerini girerek), yetkilendirme sistemi hangi sayfalara veya işlevlere erişebileceğini belirler. Örneğin, bir yönetici yönetim paneline erişim hakkına sahipken, normal bir kullanıcı yalnızca bilgileri görüntüleyebilir ve yorum bırakabilir.

Yetkilendirmenin başarılı bir şekilde uygulanması, verilerin gizliliğini, bütünlüğünü ve erişilebilirliğini sağlamak için önemlidir; ayrıca yetkisiz erişimi ve izinsiz eylemleri önlemek için de gereklidir.

```
💡Yetkilendirme ve kimlik doğrulama genellikle karıştırılır, ancak farklı süreçlerdir. Şu mnemonik kuralı hatırlamak faydalı olabilir: Yetkilendirme (authorization)" kelimesi "yazar (author)" kelimesini içerir. Bu da bir kişinin belirli bir rolü veya görevi üstlenmesiyle ilgilidir. Yetkilendirme, hangi kaynaklara erişim hakkı olduğuyla ilgilenir; kimlik doğrulama (authentication) ise kullanıcının kim olduğunu doğrulamakla ilgilidir.
```