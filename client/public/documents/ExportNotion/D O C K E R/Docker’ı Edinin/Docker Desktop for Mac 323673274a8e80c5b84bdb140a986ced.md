# Docker Desktop for Mac

macOS sandbox güvenlik modelini kullanan ve tüm Docker araçlarını Mac’inize getiren yerel bir uygulamadır.

Bu sayfa, Mac üzerinde Docker Desktop için indirme bağlantılarını, sistem gereksinimlerini ve adım adım kurulum talimatlarını içerir.

[Docker Desktop for Mac with Apple silicon](https://desktop.docker.com/mac/main/arm64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-arm64)

[Docker Desktop for Mac with Intel chip](https://desktop.docker.com/mac/main/amd64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-amd64)

**Sistem Gereksinimleri**

Mac with Intel chip

Mac with Apple silicon

- Desteklenen bir macOS sürümü.

```
Önemli
Docker Desktop, mevcut macOS ana sürümü ve ondan önceki iki büyük sürümde desteklenir. macOS’in yeni bir büyük sürümü genel kullanıma sunulduğunda, Docker en eski sürümün desteğini bırakır ve en yeni sürümü (önceki iki sürümle birlikte) destekler.
```

- En az 4 GB RAM.

```
Kurulumdan veya güncellemeden önce
Arka planda Docker’ı çağırabilecek araçları kapatın (Visual Studio Code, terminal uygulamaları, agent uygulamaları).
Eğer büyük bir cihaz filosunu yönetiyorsanız veya MDM aracılığıyla kurulum yapıyorsanız, PKG installer kullanın.
Kurulum tamamlanana kadar installer volume’unu bağlı tutun.
Eğer “Docker.app is damaged” uyarısı alırsanız, Fix "Docker.app is damaged" on macOS sayfasına bakın.
```

**Mac Üzerinde Docker Desktop’ı Kurma ve Çalıştırma**

**Etkileşimli Kurulum**

1. Sayfanın üst kısmındaki indirme düğmelerinden veya release notes bölümünden installer’ı indirin.
2. **`Docker.dmg`** dosyasına çift tıklayarak installer’ı açın, ardından Docker ikonunu **Applications** klasörüne sürükleyin. Varsayılan olarak Docker Desktop, **`/Applications/Docker.app`** konumuna kurulur.
3. **Applications** klasöründeki **`Docker.app`** dosyasına çift tıklayarak Docker’ı başlatın.
4. Docker menüsü, Docker Subscription Service Agreement’ı gösterir.
5. Önemli maddelerin özeti:
- Docker Desktop, küçük işletmeler (250’den az çalışan VE yıllık geliri 10 milyon USD’den az), kişisel kullanım, eğitim ve ticari olmayan open-source projeler için ücretsizdir.
- Profesyonel kullanım için ücretli abonelik gereklidir.
- Devlet kurumları için de ücretli abonelik gerekir.
- Docker Pro, Team ve Business abonelikleri Docker Desktop’ın ticari kullanımını içerir.
1. **Accept** seçeneğini tıklayarak devam edin.
2. Docker Desktop, koşulları kabul etmediğiniz sürece çalışmaz. İsterseniz koşulları daha sonra Docker Desktop’ı açarak kabul edebilirsiniz.
3. Daha fazla bilgi için [Docker Desktop Subscription Service Agreement](https://www.docker.com/legal/docker-subscription-service-agreement) sayfasına bakın. Ayrıca [FAQs](https://www.docker.com/pricing/faq) bölümünü okumanız önerilir.
4. Kurulum penceresinden şu seçeneklerden birini belirleyin:
- **Use recommended settings (Requires password)**: Docker Desktop gerekli yapılandırma ayarlarını otomatik olarak yapar.
- **Use advanced settings**: Bu seçenekte Docker CLI araçlarının konumunu (sistem veya kullanıcı dizini), varsayılan Docker socket’ini ve privileged port mapping ayarlarını belirleyebilirsiniz. Daha fazla bilgi için [Settings](https://docs.docker.com/desktop/settings-and-maintenance/settings/#advanced) sayfasına bakın.
1. **Finish**’e tıklayın. 6. adımda parola gerektiren bir ayar seçtiyseniz, parolanızı girerek onaylayın.

**Komut Satırından Kurulum**

Sayfanın üst kısmındaki düğmelerden veya [release notes](https://docs.docker.com/desktop/release-notes/) bölümünden **`Docker.dmg`**dosyasını indirdikten sonra, aşağıdaki komutları terminalde çalıştırarak Docker Desktop’ı **Applications** klasörüne kurun:

`sudo hdiutil attach Docker.dmg
sudo /Volumes/Docker/Docker.app/Contents/MacOS/install
sudo hdiutil detach /Volumes/Docker`

Varsayılan olarak Docker Desktop, **`/Applications/Docker.app`** konumuna kurulur. macOS, bir uygulama ilk kez çalıştırıldığında güvenlik kontrolleri yaptığı için **`install`** komutu birkaç dakika sürebilir.

**Installer Flags**

**`install`** komutu aşağıdaki flag’leri destekler:

**Kurulum Davranışı**

- **`accept-license`**: [Docker Subscription Service Agreement](https://www.docker.com/legal/docker-subscription-service-agreement) koşullarını uygulama ilk kez çalıştırılmadan önce kabul eder.
- **`user=<username>`**: Kurulum sırasında privileged konfigürasyonları bir kez gerçekleştirir. Böylece kullanıcı, ilk çalıştırmada root izni vermek zorunda kalmaz. Daha fazla bilgi için Privileged helper permission requirements bölümüne bakın. Kullanıcı adını bulmak için CLI’da **`ls /Users`** komutunu çalıştırabilirsiniz.

**Güvenlik ve Erişim**

- **`allowed-org=<org name>`**: Uygulamayı çalıştırırken kullanıcının belirtilen Docker Hub organizasyonuna üye olmasını ve giriş yapmasını zorunlu kılar.
- **`user=<username>`**: (Yukarıda belirtildiği gibi) privileged konfigürasyonları kurulum sırasında uygular.
- **`admin-settings`**: Kuruluş içindeki istemci makinelerde belirli Docker Desktop ayarlarını kontrol etmek için yöneticiler tarafından kullanılan bir **`admin-settings.json`** dosyası oluşturur. Daha fazla bilgi için Settings Management sayfasına bakın.
- Bu flag, **`allowed-org=<org name>`** flag’iyle birlikte kullanılmalıdır.
- Örnek:
- **`allowed-org=<org name> --admin-settings="{'configurationFileVersion': 2, 'enhancedContainerIsolation': {'value': true, 'locked': false}}"`**

**Proxy Yapılandırması**

- **`proxy-http-mode=<mode>`**: HTTP Proxy modunu ayarlar. İki mod vardır: **`system`**(varsayılan) veya **`manual`**.
- **`override-proxy-http=<URL>`**: HTTP istekleri için kullanılacak proxy URL’sini belirler. **`proxy-http-mode`** değeri **`manual`** olmalıdır.
- **`override-proxy-https=<URL>`**: HTTPS istekleri için kullanılacak proxy URL’sini belirler. **`proxy-http-mode`** değeri **`manual`** olmalıdır.
- **`override-proxy-exclude=<hosts/domains>`**: Belirtilen host ve domain’ler için proxy’yi devre dışı bırakır (virgülle ayrılmış liste).
- **`override-proxy-pac=<PAC file URL>`**: PAC dosyasının URL’sini ayarlar. Bu ayar yalnızca **`manual`** proxy modunda geçerlidir.
- **`override-proxy-embedded-pac=<PAC script>`**: Gömülü bir PAC (Proxy Auto-Config) script’i tanımlar. Bu ayar yalnızca **`manual`** proxy modunda geçerlidir ve **`override-proxy-pac`** flag’ine göre önceliklidir.

**PAC Dosyası Belirtme Örneği**

`sudo /Applications/Docker.app/Contents/MacOS/install --user testuser --proxy-http-mode="manual" --override-proxy-pac="<http://localhost:8080/myproxy.pac>"`

**PAC Script Belirtme Örneği**

`sudo /Applications/Docker.app/Contents/MacOS/install --user testuser --proxy-http-mode="manual" --override-proxy-embedded-pac="function FindProxyForURL(url, host) { return \\"DIRECT\\"; }"`

```
İpucu
Bir IT yöneticisi olarak, ortamınızdaki Docker Desktop örneklerinin ve sürümlerinin sayısını belirlemek için endpoint management (MDM) yazılımını kullanabilirsiniz. Bu, lisans raporlamasını doğru yapmanızı, makinelerinizin Docker Desktop’ın en son sürümünü kullanmasını sağlamanızı ve giriş zorunluluğunu uygulamanızı mümkün kılar.
Intune
Jamf
Kandji
Kolide
Workspace One
```