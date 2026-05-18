# Windows Üzerinde Yetki Gereksinimlerini Anlama

# **Sayfa seçenekleri**

Bu sayfa, Windows üzerinde Docker Desktop çalıştırma ve kurma için gerekli yetki gereksinimleri, ayrıcalıklı yardımcı süreç **`com.docker.service`** işlevselliği ve bu yaklaşımın mantığı hakkında bilgi içerir.

Ayrıca, konteynerlerin **`root`** olarak çalıştırılması ile host üzerinde **`Administrator`**erişimi sağlanması arasındaki farkı ve Windows Docker motoru ile Windows konteynerlerinin ayrıcalıklarını açıklar.

Windows üzerinde Docker Desktop güvenlik odaklı tasarlanmıştır. Yönetici hakları yalnızca kesinlikle gerekli olduğunda gereklidir.

**Yetki Gereksinimleri**

Windows üzerinde Docker Desktop, **`Administrator`** ayrıcalıklarına sahip olmadan çalıştırılabilir, ancak kurulum sırasında bu haklara ihtiyaç duyar. Kurulum sırasında, ayrıcalıklı bir yardımcı hizmetin yüklenmesini sağlayan bir UAC (User Account Control) istemi alırsınız. Bundan sonra Docker Desktop, yönetici ayrıcalıkları olmadan çalıştırılabilir.

Ayrıcalıklı yardımcı olmadan Docker Desktop çalıştırmak, kullanıcıların **`docker-users`** grubuna üye olmasını gerektirmez. Ancak, ayrıcalıklı işlemler gerektiren bazı özellikler bu gruba üyeliği şart koşar.

Kurulumu siz yaptıysanız, otomatik olarak bu gruba eklenirsiniz; diğer kullanıcılar ise manuel olarak eklenmelidir. Bu, yöneticinin Hyper-V VM oluşturma ve yönetme veya Windows konteyner kullanımı gibi yüksek ayrıcalık gerektiren özelliklere kimlerin erişebileceğini kontrol etmesini sağlar.

Docker Desktop başlatıldığında, yalnızca aşağıdaki kullanıcıların erişebileceği tüm ayrıcalıksız adlandırılmış pipe’lar oluşturulur:

- Docker Desktop’ı başlatan kullanıcı
- Yerel **`Administrators`** grubunun üyeleri
- **`LOCALSYSTEM`** hesabı

**Ayrıcalıklı Yardımcı (Privileged Helper)**

Docker Desktop, ayrıcalıklı işlemlerin sınırlı bir kümesini gerçekleştirmek için ayrıcalıklı yardımcı süreç **`com.docker.service`** kullanır. Bu yaklaşım, en az ayrıcalık prensibini takip ederek **`Administrator`** erişiminin yalnızca gerekli işlemler için kullanılmasını sağlar ve Docker Desktop’un ayrıcalıksız bir kullanıcı olarak çalıştırılmasına izin verir.

Ayrıcalıklı yardımcı **`com.docker.service`**, **`SYSTEM`** ayrıcalıklarıyla arka planda çalışan bir Windows servisidir. **`//./pipe/dockerBackendV2`** adlandırılmış pipe’ını dinler. Geliştirici Docker Desktop uygulamasını çalıştırır, uygulama adlandırılmış pipe’a bağlanır ve servise komutlar gönderir. Bu pipe korunur ve yalnızca **`docker-users`**grubunun üyeleri erişebilir.

Servisin gerçekleştirdiği işlevler:

- **`kubernetes.docker.internal`** DNS adının Win32 hosts dosyasında tanımlı olmasını sağlamak. Bu, Docker’ın Kubernetes context’lerini konteynerlerle paylaşmasına olanak tanır.
- **`host.docker.internal`** ve **`gateway.docker.internal`** adreslerinin Win32 hosts dosyasında tanımlı olmasını sağlamak. Bu adresler host’un yerel IP’sine işaret eder ve bir uygulamanın host IP’sini host veya konteynerden aynı isimle çözmesine olanak tanır.
- Registry Access Management politikalarını güvenli bir şekilde önbelleğe almak (geliştirici için salt okunur).
- Hyper-V VM **`"DockerDesktopVM"`** oluşturmak ve yaşam döngüsünü yönetmek (başlatma, durdurma, silme). VM adı servis kodunda sabittir, başka VM’leri oluşturmak veya değiştirmek için kullanılamaz.
- VHDX dosyası veya klasörünü taşımak.
- Windows Docker motorunu başlatmak/durdurmak ve çalışıp çalışmadığını sorgulamak.
- Tüm Windows konteyner veri dosyalarını silmek.
- Hyper-V’nin etkin olup olmadığını kontrol etmek.
- Bootloader’ın Hyper-V’yi etkinleştirip etkinleştirmediğini kontrol etmek.
- Gerekli Windows özelliklerinin hem kurulu hem etkin olup olmadığını kontrol etmek.
- Sağlık kontrolleri yapmak ve servisin kendi sürümünü almak.

Servisin başlatma modu seçilen container motoruna ve WSL için Win32 hosts dosyasında **`host.docker.internal`** ve **`gateway.docker.internal`** tutulmasına ihtiyaç olup olmadığına bağlıdır. Bu, ayarlar sayfasındaki **`Use the WSL 2 based engine`**seçeneği ile kontrol edilir. Bu ayar etkinleştirildiğinde, WSL motoru Hyper-V ile aynı şekilde davranır:

- Windows konteynerler veya Hyper-V Linux konteynerleri ile servis, sistem açıldığında başlatılır ve Docker Desktop çalışmasa bile sürekli çalışır. Bu, Docker Desktop’ı yönetici ayrıcalıkları olmadan başlatabilmeniz için gereklidir.
- WSL2 Linux konteynerleri ile servis gerekli değildir ve sistem açılışında otomatik olarak çalışmaz. Windows konteynerlere veya Hyper-V Linux konteynerlere geçiş yaptığınızda ya da **`host.docker.internal`** ve **`gateway.docker.internal`** değerlerini Win32 hosts dosyasında korumayı seçtiğinizde, servis başlatmak için ayrıcalıklı işlemi kabul etmeniz isteyen bir UAC istemi görüntülenir. Kabul ederseniz, servis başlatılır ve sonraki Windows açılışında otomatik başlatılacak şekilde ayarlanır.

**Linux VM İçinde Root Olarak Çalışan Konteynerler**

Linux Docker daemon ve konteynerler, Docker tarafından yönetilen minimal, özel amaçlı bir Linux VM içinde çalışır. Bu VM değiştirilemez; kurulu yazılımı genişletemez veya değiştiremezsiniz.

Bu, konteynerler varsayılan olarak **`root`** olarak çalışsa bile, VM üzerinde değişiklik yapamayacağınız ve Windows host üzerinde **`Administrator`** erişimi elde edemeyeceğiniz anlamına gelir. Linux VM, güvenlik sınırı olarak görev yapar ve host kaynaklarına erişimi sınırlar. Dosya paylaşımı kullanıcı alanında oluşturulmuş bir dosya sunucusu kullanır ve host’tan Docker konteynerlerine bind edilen dizinler orijinal izinlerini korur. Konteynerler, açıkça paylaşılan dosyalar dışında host dosyalarına erişemez.

**Gelişmiş Konteyner İzolasyonu (Enhanced Container Isolation)**

Docker Desktop ayrıca yalnızca Business müşterilerine sunulan Gelişmiş Konteyner İzolasyonu (ECI) modunu destekler. Bu, geliştirici iş akışlarını etkilemeden konteynerleri daha güvenli hale getirir.

ECI, tüm konteynerleri otomatik olarak bir Linux kullanıcı ad alanında çalıştırır; konteyner içindeki root, Docker Desktop VM içindeki ayrıcalıksız bir kullanıcıya eşlenir. ECI ve diğer ileri teknikler, Docker Desktop Linux VM içindeki konteynerleri Docker daemon ve VM içindeki diğer servislerden daha fazla izole edecek şekilde güvenliği artırır.

**Windows Konteynerler**

```
Uyarı
Windows konteynerlerini etkinleştirmenin önemli güvenlik etkileri vardır.
```

Linux Docker Engine ve konteynerler VM içinde çalışırken, Windows konteynerler işletim sistemi özelliklerini kullanır ve doğrudan Windows host üzerinde çalışır. Kurulum sırasında Windows konteynerleri etkinleştirirseniz, konteyner içinde yönetim için kullanılan **`ContainerAdministrator`** kullanıcısı host makinede yerel yönetici olur. Kurulum sırasında Windows konteynerleri etkinleştirmek, **`docker-users`** grubunun üyelerinin host üzerinde yönetici ayrıcalıklarını yükseltebilmesini sağlar. Geliştiricilerin Windows konteyner çalıştırmasını istemeyen organizasyonlar, kurulum sırasında **`--no-windows-containers`** yükleyici bayrağı ile bunu devre dışı bırakabilir.

**Ağ (Networking)**

Ağ bağlantısı için Docker Desktop, kullanıcı alanı süreci (**`vpnkit`**) kullanır. Bu süreç, başlatan kullanıcının sahip olduğu kısıtlamaları (firewall kuralları, VPN, HTTP proxy özellikleri vb.) devralır.