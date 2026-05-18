# Windows Üzerine Docker Desktop Kurulumu

```
Docker Desktop kullanım şartları
Daha büyük işletmelerde (250’den fazla çalışanı veya yıllık 10 milyon USD’den fazla geliri olanlar) Docker Desktop’ın ticari kullanımı için bir ücretli abonelik gereklidir.
```

Bu sayfa, Windows üzerinde Docker Desktop için indirme bağlantılarını, sistem gereksinimlerini ve adım adım kurulum talimatlarını içerir.

[Docker Desktop for Windows - x86_64](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-win-amd64)

[Docker Desktop for Windows - x86_64 (Microsoft Store)](https://apps.microsoft.com/detail/xp8cbj40xlbwkx?hl=en-GB&gl=GB)

[Docker Desktop for Windows - Arm (Early Access)](https://desktop.docker.com/win/main/arm64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-win-arm64)

*Checksum’lar için [Release notes](https://docs.docker.com/desktop/release-notes/) sayfasına bakın.*

**Sistem Gereksinimleri**

```
İpucu
Hyper-V mi yoksa WSL mi kullanmalıyım?
Docker Desktop, WSL veya Hyper-V üzerinde aynı işlevselliği sağlar; bu nedenle belirli bir mimariye öncelik verilmez. Hyper-V ve WSL’in kendi avantajları ve dezavantajları vardır; bunlar sizin sistem yapılandırmanıza ve kullanım amacınıza göre değişir.
```

**WSL 2 backend, x86_64 | Hyper-V backend, x86_64 | WSL 2 backend, Arm (Early Access)**

- WSL versiyonu 2.1.5 veya üzeri olmalıdır.
- Windows 11 64-bit: Home veya Pro sürümü 22H2 veya üzeri, ya da Enterprise veya Education sürümü 22H2 veya üzeri.
- Windows 10 64-bit: Minimum gereksinim Home veya Pro 22H2 (build 19045) veya üzeri, ya da Enterprise veya Education 22H2 (build 19045) veya üzeri.
- Windows’ta WSL 2 özelliğini etkinleştirin. Ayrıntılı talimatlar için Microsoft dokümantasyonuna bakın.
- WSL 2’nin Windows 10 veya 11 üzerinde çalışabilmesi için aşağıdaki donanım gereksinimleri sağlanmalıdır:
- 64-bit işlemci, [Second Level Address Translation (SLAT)](https://en.wikipedia.org/wiki/Second_Level_Address_Translation) desteğiyle
- 4 GB sistem RAM
- BIOS/UEFI içinde donanım sanallaştırmasının etkinleştirilmesi. Daha fazla bilgi için bkz. **Virtualization**.

WSL 2’yi Docker Desktop ile kurma hakkında daha fazla bilgi için bkz. **WSL**.

```
Not
Docker yalnızca Microsoft’un servis süresi içinde olan Windows sürümlerinde Docker Desktop’ı destekler. Docker Desktop, Windows Server sürümlerinde (ör. Windows Server 2019 veya 2022) desteklenmez. Windows Server üzerinde container çalıştırma hakkında bilgi için bkz. Microsoft’un resmi dokümantasyonu.
Önemli
Windows container’larını çalıştırmak için Windows 10 veya Windows 11 Professional ya da Enterprise sürümüne ihtiyacınız vardır. Windows Home veya Education sürümleri yalnızca Linux container’larını çalıştırabilir.
```

Docker Desktop ile oluşturulan container ve image’lar, kurulu olduğu makinadaki tüm kullanıcı hesapları arasında paylaşılır. Bunun nedeni, tüm Windows hesaplarının container’ları oluşturmak ve çalıştırmak için aynı VM’i kullanmasıdır. Ancak Docker Desktop’un WSL 2 backend’i kullanıldığında, kullanıcı hesapları arasında container ve image paylaşımı mümkün değildir.

Docker Desktop’ın bir **VMware ESXi** veya **Azure VM** içinde çalıştırılması yalnızca **Docker Business** müşterileri için desteklenir. Bunun için hypervisor üzerinde “nested virtualization” özelliğinin etkinleştirilmesi gerekir. Daha fazla bilgi için bkz. **Running Docker Desktop in a VM or VDI environment**.

**Windows ve Linux container’ları arasında nasıl geçiş yapabilirim?**

**Yönetici Yetkileri ve Kurulum Gereksinimleri**

Docker Desktop’ı yüklemek için yönetici (administrator) yetkileri gereklidir. Ancak kurulum tamamlandıktan sonra, yazılım yönetici erişimi olmadan kullanılabilir. Yine de bazı işlemler yüksek ayrıcalıklar gerektirir. Daha fazla bilgi için bkz. **Understand permission requirements for Windows**.

Eğer kullanıcılarınızın yönetici hakları yoksa ve yönetici izinleri gerektiren işlemler yapacaklarsa, Docker Desktop’ı **`--always-run-service`** kurulum bayrağı ile yükleyin. Bu, UAC (User Account Control) izni istemeden bu işlemlerin yapılmasını sağlar. Ayrıntılar için bkz. **Installer Flags**.

**WSL: Doğrulama ve Kurulum**

WSL kullanmayı seçtiyseniz, önce sistem gereksinimlerini karşılayıp karşılamadığını doğrulamak için terminalinizde aşağıdaki komutu çalıştırın:

`wsl --version`

Eğer sürüm bilgisi görünmüyorsa, muhtemelen “inbox” WSL sürümünü kullanıyorsunuzdur. Bu sürüm modern özellikleri desteklemez ve güncellenmesi gerekir.

WSL’i aşağıdaki yöntemlerden biriyle güncelleyebilir veya yükleyebilirsiniz:

**Seçenek 1: Terminal üzerinden WSL’i yükleme veya güncelleme**

1. PowerShell veya Windows Komut İstemi’ni yönetici modunda açın.
2. Aşağıdaki komutlardan birini çalıştırın. Bilgisayarınızın yeniden başlatılması istenebilir. Daha fazla bilgi için bkz. [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

`wsl --install
wsl --update`

**Seçenek 2: MSI paketi üzerinden WSL kurulumu**

Eğer güvenlik politikaları nedeniyle Microsoft Store erişimi engellendiyse:

1. Resmi [WSL GitHub Releases sayfasına](https://github.com/microsoft/WSL/releases) gidin.
2. Son kararlı sürüm altındaki **`.msi`** yükleyicisini (Assets açılır menüsünden) indirin.
3. İndirilen yükleyiciyi çalıştırın ve kurulum talimatlarını izleyin.

# **Etkileşimli Kurulum (Interactive Installation)**

1. Sayfanın üstündeki indirme butonunu veya [release notes](https://docs.docker.com/desktop/release-notes/) sayfasını kullanarak yükleyiciyi indirin.
2. **`Docker Desktop Installer.exe`** üzerine çift tıklayarak yükleyiciyi çalıştırın. Varsayılan olarak Docker Desktop, **`C:\\Program Files\\Docker\\Docker`**dizinine kurulur.
3. Yükleme sırasında, backend tercihinize bağlı olarak **Use WSL 2 instead of Hyper-V** seçeneğinin yapılandırma sayfasında seçili olup olmadığını kontrol edin.
4. Sadece bir backend’i destekleyen sistemlerde Docker Desktop mevcut seçeneği otomatik olarak seçer.
5. Yükleme sihirbazındaki talimatları izleyerek yükleyiciye yetki verin ve kurulumu ilerletin.
6. Kurulum başarıyla tamamlandığında, işlemi bitirmek için **Close** seçeneğini tıklayın.
7. Docker Desktop’ı başlatın.

Eğer yönetici (administrator) hesabınız kullanıcı hesabınızdan farklıysa, Hyper-V VM oluşturma ve yönetme veya Windows container kullanımı gibi yüksek ayrıcalık gerektiren özelliklere erişebilmek için kullanıcıyı **docker-users** grubuna eklemeniz gerekir:

1. **Computer Management**’ı **administrator** olarak çalıştırın.
2. **Local Users and Groups** > **Groups** > **docker-users** yolunu izleyin.
3. Kullanıcıyı gruba eklemek için sağ tıklayın.
4. Değişikliklerin geçerli olabilmesi için çıkış yapın ve tekrar giriş yapın.

**Komut Satırından Kurulum (Command Line Installation)**

**`Docker Desktop Installer.exe`** indirildikten sonra terminalde aşağıdaki komutu çalıştırarak Docker Desktop’ı kurabilirsiniz:

`"Docker Desktop Installer.exe" install`

PowerShell kullanıyorsanız:

`Start-Process 'Docker Desktop Installer.exe' -Wait install`

Windows Command Prompt kullanıyorsanız:

`start /w "" "Docker Desktop Installer.exe" install`

Varsayılan kurulum dizini: **`C:\\Program Files\\Docker\\Docker`**.

**Yükleyici Bayrakları (Installer Flags)**

```
Not
PowerShell kullanıyorsanız, bayraklardan önce ArgumentList parametresini kullanmanız gerekir. Örnek:
Start-Process 'Docker Desktop Installer.exe' -Wait -ArgumentList 'install', '--accept-license'
```

Eğer admin hesabınız kullanıcı hesabınızdan farklıysa, **docker-users** grubuna ekleme yapmalısınız:

`net localgroup docker-users <user> /add`

**`install`** komutu aşağıdaki bayrakları kabul eder:

**Kurulum Davranışı (Installation Behavior)**

- **`quiet`**: Yükleyici çalışırken bilgi çıktısını bastırır.
- **`accept-license`**: Docker Subscription Service Agreement’i şimdi kabul eder, uygulama ilk çalıştırıldığında kabul etmeyi gerektirmez.
- **`installation-dir=<path>`**: Varsayılan kurulum dizinini değiştirir (**`C:\\Program Files\\Docker\\Docker`**).
- **`backend=<backend name>`**: Docker Desktop için varsayılan backend seçimi yapar: **`hyper-v`**, **`windows`** veya **`wsl-2`** (varsayılan).
- **`always-run-service`**: Kurulum tamamlandıktan sonra **`com.docker.service`**başlatılır ve hizmetin başlangıç türü Automatic olarak ayarlanır. Bu, aksi takdirde gerekli olan yönetici yetkisi ihtiyacını atlar. Windows container’ları ve Hyper-V backend için **`com.docker.service`** gereklidir.

**Güvenlik ve Erişim Kontrolü (Security and Access Control)**

- **`allowed-org=<org name>`**: Uygulama çalıştırılırken kullanıcının belirtilen Docker Hub organizasyonuna ait olmasını zorunlu kılar.
- **`admin-settings`**: Yönetici makinelerinde Docker Desktop ayarlarını kontrol etmek için otomatik olarak bir **`admin-settings.json`** dosyası oluşturur. Daha fazla bilgi için bkz. Settings Management.
- **`allowed-org=<org name>`** bayrağı ile birlikte kullanılmalıdır.
- Örnek:
- `allowed-org=<org name> -admin-settings="{'configurationFileVersion': 2, 'enhancedContainerIsolation': {'value': true, 'locked': false}}"`
- **`no-windows-containers`**: Windows container entegrasyonunu devre dışı bırakır, güvenliği artırabilir. Daha fazla bilgi için bkz. Windows containers.

**Proxy Yapılandırması (Proxy Configuration)**

- **`proxy-http-mode=<mode>`**: HTTP Proxy modunu ayarlar, **`system`** (varsayılan) veya **`manual`**.
- **`override-proxy-http=<URL>`**: Çıkış HTTP istekleri için kullanılacak proxy URL’sini ayarlar; **`proxy-http-mode`** **`manual`** olmalıdır.
- **`override-proxy-https=<URL>`**: Çıkış HTTPS istekleri için kullanılacak proxy URL’sini ayarlar; **`proxy-http-mode`** **`manual`** olmalıdır.
- **`override-proxy-exclude=<hosts/domains>`**: Belirtilen host ve domainler için proxy ayarlarını atlar, virgülle ayrılmış liste kullanılır.
- **`proxy-enable-kerberosntlm`**: Kerberos ve NTLM proxy kimlik doğrulamasını etkinleştirir (Docker Desktop 4.32+). Proxy sunucunuzun Kerberos/NTLM ile uyumlu yapılandırıldığından emin olun.
- **`override-proxy-pac=<PAC file URL>`**: PAC dosya URL’sini ayarlar, yalnızca **`manual`** proxy modunda geçerlidir.
- **`override-proxy-embedded-pac=<PAC script>`**: Gömülü PAC script’i belirtir, yalnızca **`manual`** proxy modunda geçerlidir ve **`override-proxy-pac`**bayrağından önceliklidir.

**PAC dosyası örneği:**

`"Docker Desktop Installer.exe" install --proxy-http-mode="manual" --override-proxy-pac="<http://localhost:8080/myproxy.pac>"`

**PAC script örneği:**

`"Docker Desktop Installer.exe" install --proxy-http-mode="manual" --override-proxy-embedded-pac="function FindProxyForURL(url, host) { return \\"DIRECT\\"; }"`

**Data Root ve Disk Konumu**

- **`hyper-v-default-data-root=<path>`**: Hyper-V VM diskleri için varsayılan konum.
- **`windows-containers-default-data-root=<path>`**: Windows container’lar için varsayılan konum.
- **`wsl-default-data-root=<path>`**: WSL dağıtım diskleri için varsayılan konum.