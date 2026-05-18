# Mac’te Docker Desktop için izin gereksinimlerini anlama

Bu sayfa, Mac üzerinde Docker Desktop’u çalıştırmak ve kurmak için gereken izinler hakkında bilgi içerir.

Ayrıca, container’ları **`root`** olarak çalıştırmakla host üzerinde **`root`** erişimine sahip olmak arasındaki farkı da açıklar.

Mac için Docker Desktop, güvenlik göz önünde bulundurularak tasarlanmıştır. Yönetici yetkileri yalnızca kesinlikle gerekli olduğunda istenir.

**İzin gereksinimleri**

Mac için Docker Desktop, ayrıcalıksız (unprivileged) bir kullanıcı olarak çalışır. Ancak Docker Desktop, aşağıdaki sınırlı ayrıcalıklı yapılandırmaları gerçekleştirmek için bazı yetkilere ihtiyaç duyar:

- **`/usr/local/bin`** dizinine symlink’ler oluşturmak
- 1024’ten küçük **privileged port**’lara bağlanmak. Privileged port’lar (1024 altındaki portlar) genellikle güvenlik sınırı olarak kullanılmasa da, işletim sistemleri ayrıcalıksız süreçlerin bu portlara bağlanmasını engeller. Bu durum, **`docker run -p 127.0.0.1:80:80 docker/getting-started`** gibi komutların çalışmamasına neden olur.
- **`/etc/hosts`** içinde `localhost` ve `kubernetes.docker.internal` tanımlarının mevcut olduğundan emin olmak. Bazı eski macOS sürümlerinde **`localhost`**tanımlı değildir, bu da Docker’ın hata vermesine yol açar. **`kubernetes.docker.internal`** DNS adının tanımlanması, Kubernetes context’lerinin container’larla paylaşılmasını sağlar.
- Registry Access Management politikasını güvenli şekilde cache’lemek (developer için yalnızca read-only erişimlidir).

Bu ayrıcalıklı erişimler kurulum sırasında verilir.

Mac için Docker Desktop ilk kez başlatıldığında, size iki seçenek sunan bir kurulum penceresi açılır:

Varsayılan ayarları kullanmak (çoğu geliştirici için uygundur ve ayrıcalıklı erişim verilmesini gerektirir) veya **advanced settings** kullanmak.

Yüksek güvenlik gereksinimlerinin olduğu bir ortamda çalışıyorsanız (örneğin, yerel yönetici erişiminin yasak olduğu durumlar), advanced settings seçeneğini kullanarak ayrıcalıklı erişim izni verme gerekliliğini kaldırabilirsiniz. Aşağıdaki ayarları yapılandırabilirsiniz:

- Docker CLI araçlarının konumu (system veya user directory)
- Varsayılan Docker socket
- Privileged port mapping

Hangi advanced settings ayarlarını yapılandırdığınıza bağlı olarak, seçiminizi onaylamak için şifrenizi girmeniz gerekebilir.

Bu ayarları daha sonra **Settings → Advanced** sekmesinden değiştirebilirsiniz.

**Symlink’lerin kurulumu**

Docker binary’leri varsayılan olarak **`/Applications/Docker.app/Contents/Resources/bin`** dizinine kurulur. Docker Desktop, bu binary’ler için **`/usr/local/bin`** dizininde symlink’ler oluşturur; böylece çoğu sistemde otomatik olarak **`PATH`** değişkenine dahil edilirler.

Docker Desktop kurulumu sırasında symlink’lerin **`/usr/local/bin`** veya **`$HOME/.docker/bin`** dizinlerinden hangisine kurulacağını seçebilirsiniz.

Eğer **`/usr/local/bin`** seçilirse ve bu dizin ayrıcalıksız kullanıcılar tarafından yazılabilir değilse, Docker Desktop symlink’leri oluşturmak için yetkilendirme ister.

Eğer **`$HOME/.docker/bin`** seçilirse, yetkilendirme gerekmez ancak **`$HOME/.docker/bin`** dizinini elle **PATH**’e eklemeniz gerekir.

Ayrıca **`/var/run/docker.sock`** symlink’inin kurulumu da etkinleştirilebilir. Bu symlink, varsayılan Docker socket yoluna güvenen farklı Docker client’larının ek yapılandırma gerektirmeden çalışmasını sağlar.

**`/var/run`** dizini **tmpfs** olarak mount edildiğinden, içeriği (Docker socket symlink’i dahil) yeniden başlatma sonrası silinir. Docker Desktop, yeniden başlatma sonrasında bu symlink’in yeniden oluşturulmasını sağlamak için **`launchd`** başlatma görevi tanımlar ve şu komutu çalıştırır:

**`ln -s -f /Users/<user>/.docker/run/docker.sock /var/run/docker.sock`**

Bu, her başlatmada symlink oluşturma uyarısı almamanızı sağlar. Eğer bu seçenek kurulurken etkinleştirilmezse, symlink ve başlatma görevi oluşturulmaz ve client’larınızda **`DOCKER_HOST`** ortam değişkenini **`/Users/<user>/.docker/run/docker.sock`** olarak manuel ayarlamanız gerekir.

Docker CLI, socket yolunu mevcut context’ten alır ve Docker Desktop başlatıldığında mevcut context **`desktop-linux`** olarak ayarlanır.

**Privileged port’lara bağlanma**

Privileged port mapping’i kurulum sırasında veya kurulumdan sonra **Settings → Advanced** sekmesinden etkinleştirebilirsiniz. Docker Desktop bu durumda yetkilendirme ister.

**`localhost` ve `kubernetes.docker.internal` tanımlamalarını sağlama**

`localhost`’un **`127.0.0.1`**’e çözümlendiğinden ve Kubernetes kullanılıyorsa `kubernetes.docker.internal`’ın da **`127.0.0.1`**’e çözümlendiğinden emin olmak sizin sorumluluğunuzdadır.

**Komut satırından kurulum**

Privileged yapılandırmalar, [install command](https://docs.docker.com/desktop/setup/install/mac-install/#install-from-the-command-line) üzerindeki **`--user`** flag’i ile kurulum sırasında uygulanır.

Bu durumda Docker Desktop ilk kez çalıştırıldığında root yetkisi verme isteği gösterilmez.

- **`user`** flag’i şunları yapar:
- Varsa önceki **`com.docker.vmnetd`** servislerini kaldırır
- Symlink’leri kurar
- **`localhost`**’un **`127.0.0.1`**’e çözümlendiğinden emin olur

Bu yöntemin sınırlaması, Docker Desktop’un yalnızca **`--user`** flag’inde belirtilen kullanıcı hesabı tarafından çalıştırılabilmesidir.

**Privileged helper**

Privileged helper yalnızca belirli durumlarda (örneğin privileged port’lara bağlanmak veya Registry Access Management politikasını cache’lemek gibi) gereklidir.

Privileged helper, **`launchd`** tarafından başlatılır ve devre dışı bırakılmadığı sürece arka planda çalışır.

Docker Desktop backend, privileged helper ile **`/var/run/com.docker.vmnetd.sock`**UNIX domain socket üzerinden iletişim kurar.

Bu yardımcı araç şu işlevleri yerine getirir:

- 1024’ten küçük privileged port’lara bağlanmak
- Registry Access Management politikasını güvenli şekilde cache’lemek
- Privileged helper’ı kaldırmak

Helper süreci, diğer **`launchd`** süreçlerinin kaldırılmasıyla aynı şekilde kaldırılır:

```
ps aux | grep vmnetd
root   28739   0.0  0.0 34859128    228   ??  Ss   6:03PM   0:00.06 /Library/PrivilegedHelperTools/com.docker.vmnetd
user   32222   0.0  0.0 34122828    808 s000  R+  12:55PM   0:00.00 grep vmnetd

sudo launchctl unload -w /Library/LaunchDaemons/com.docker.vmnetd.plist
Password:

ps aux | grep vmnetd
user   32242   0.0  0.0 34122828    716 s000  R+  12:55PM   0:00.00 grep vmnetd

rm /Library/LaunchDaemons/com.docker.vmnetd.plist
rm /Library/PrivilegedHelperTools/com.docker.vmnetd
```