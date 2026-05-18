# Linux Üzerinde Docker Desktop Kurulumu

```
Docker Desktop şartları
Büyük ölçekli işletmelerde (250’den fazla çalışan veya yıllık geliri 10 milyon USD’dan fazla olan) Docker Desktop’un ticari kullanımı için ücretli abonelik gereklidir.
```

Bu sayfa, genel sistem gereksinimleri, desteklenen platformlar ve Linux için Docker Desktop’un nasıl kurulacağına dair talimatlar içerir.

```
Önemli
Linux üzerinde Docker Desktop, başlatıldığında özel bir docker context’i olan desktop-linux ile çalışan bir Virtual Machine (VM) çalıştırır.
Bu, Linux Docker Engine üzerinde dağıtılmış olan (kurulum öncesi) imaj ve konteynerlerin Docker Desktop for Linux içinde kullanılamayacağı anlamına gelir.
```

**Desteklenen Platformlar**

Docker, aşağıdaki Linux dağıtımları ve mimarileri için **`.deb`** ve **`.rpm`** paketleri sağlar:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8cf992f1-1469-4b24-922d-ee4622c86fc5image.png)

Arch tabanlı dağıtımlar için deneysel bir paket mevcuttur. Docker, bu kurulumları test etmemiş veya doğrulamamıştır.

Docker, belirtilen dağıtımların mevcut LTS sürümleri ve en güncel sürümleri için Docker Desktop’u destekler. Yeni sürümler yayımlandıkça Docker, en eski sürümü desteklemeyi durdurur ve en yeni sürümü destekler.

**Genel Sistem Gereksinimleri**

Docker Desktop’u başarılı bir şekilde kurmak için Linux host’unuz aşağıdaki gereksinimleri karşılamalıdır:

- 64-bit kernel ve CPU sanallaştırma desteği
- KVM sanallaştırma desteği. KVM kernel modüllerinin etkin olup olmadığını kontrol etmek ve KVM cihazına erişim sağlamak için [KVM sanallaştırma desteği talimatlarını](https://www.linux-kvm.org/) takip edin.
- QEMU sürümü 5.2 veya daha yeni olmalıdır. En güncel sürüme yükseltme önerilir.
- systemd init sistemi
- GNOME, KDE veya MATE masaüstü ortamları desteklenir; diğer ortamlar da çalışabilir.
- Birçok Linux dağıtımında GNOME ortamı tray ikonlarını desteklemez. Tray ikon desteği eklemek için bir GNOME uzantısı yüklemeniz gerekir. Örneğin: [AppIndicator](https://extensions.gnome.org/extension/615/appindicator-support/).
- En az 4 GB RAM
- Kullanıcı namespace’lerinde ID eşleştirmeyi yapılandırma etkinleştirme. Detaylar için [Dosya paylaşımı](https://docs.docker.com/desktop/troubleshoot-and-support/faqs/linuxfaqs/#how-do-i-enable-file-sharing) bölümüne bakın. Docker Desktop sürüm 4.35 ve sonrası için artık gerekli değildir.
- Önerilen: Kimlik bilgisi yönetimi için `pass`’i başlatmak

Linux için Docker Desktop bir Virtual Machine (VM) çalıştırır. Nedenini öğrenmek için [Why Docker Desktop for Linux runs a VM](https://docs.docker.com/desktop/) bölümüne bakabilirsiniz.

```
Not
Docker, nested virtualization (iç içe sanallaştırma) senaryolarında Linux üzerinde Docker Desktop çalıştırmayı desteklemez. Docker Desktop for Linux’u desteklenen dağıtımlar üzerinde native olarak çalıştırmanız önerilir.
```

**KVM Sanallaştırma Desteği**

Docker Desktop, [KVM desteği](https://www.linux-kvm.org/) gerektiren bir VM çalıştırır.

Host sanallaştırma desteğine sahipse, **`kvm`** modülü otomatik yüklenmelidir. Modülü manuel yüklemek için:

`modprobe kvm`

Host makinenin işlemcisine bağlı olarak ilgili modül yüklenmelidir:

`modprobe kvm_intel  # Intel işlemciler
modprobe kvm_amd    # AMD işlemciler`

Yukarıdaki komutlar başarısız olursa, tanı bilgilerini görmek için:

`kvm-ok`

KVM modüllerinin etkin olup olmadığını kontrol etmek için:

`lsmod | grep kvm
kvm_amd               167936  0
ccp                   126976  1 kvm_amd
kvm                  1089536  1 kvm_amd
irqbypass              16384  1 kvm`

**KVM Cihazı Kullanıcı İzinlerini Ayarlama**

**`/dev/kvm`** sahipliğini kontrol etmek için:

`ls -al /dev/kvm`

KVM cihazına erişim sağlamak için kullanıcıyı kvm grubuna ekleyin:

`sudo usermod -aG kvm $USER`

Grup üyeliğinizin güncellenmesi için çıkış yapın ve tekrar giriş yapın.