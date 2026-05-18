# GoIT - MO N E Y -  G U A R D

**1. Görsel Kimlik ve Global Stiller Hazır** Uygulama adı **"Money Guard"** olarak güncellendi ve logomuz (favicon) eklendi.

- Figma'daki ana yazı tipi olan **Poppins** projeye dahil edildi.
- `src/styles/variables.css` dosyasına tüm renk paletini ve font ayarlarını ekledim. Stil yazarken lütfen buradaki değişkenleri (örneğin: `var(--color-accent-pink)`) kullanabilirsiniz.

**2. Redux ve Kalıcı Hafıza Yapılandırıldı**

- **Redux Store** kuruldu. `authSlice` üzerinden kullanıcı giriş durumlarını takip edebiliyoruz.

**Redux-Persist** entegrasyonu sayesinde, sayfayı yenileseniz bile kullanıcı oturumu (token) `localStorage` üzerinde güvenli bir şekilde saklanmaya devam edecek.

- Global bir `isLoading` state'i oluşturuldu; API istekleri sırasında loader göstermek için bunu kullanabiliriz.

**3. Backend ve API Bağlantıları Tamamlandı**

- **Axios** yapılandırması bitti. `baseURL` ve otomatik token gönderimi (interceptors) hazır.
- **Auth İşlemleri:** Kayıt olma (`register`), giriş yapma (`login`), çıkış yapma (`logout`) ve mevcut kullanıcıyı doğrulama (`refreshCurrentUser`) fonksiyonları yazıldı.
- Uygulama her açıldığında kullanıcı oturumu otomatik olarak kontrol ediliyor.

**Bundan Sonrası İçin:** Kendi branch'inize geçmeden önce lütfen `main` branch'indeki son değişiklikleri çekin (`git pull origin main`) ve `npm install` komutunu çalıştırın.Kendi sayfalarınızda/bileşenlerinizde `auth` verilerine veya login fonksiyonlarına ihtiyaç duyarsanız `authOperations` ve `authSlice` dosyalarını inceleyebilirsiniz.Ayrıca konsolda bazı hatalar çıkıyordu sayfa açıldığında, bunları düzelttim artık hata çıkmıyor olması lazım sayfa açılıyor olmalı.

[**Çalışmaya Başlamadan Önce (Branch Güncelleme)**](GoIT%20-%20MO%20N%20E%20Y%20-%20G%20U%20A%20R%20D/%C3%87al%C4%B1%C5%9Fmaya%20Ba%C5%9Flamadan%20%C3%96nce%20(Branch%20G%C3%BCncelleme)%2030c673274a8e80efa5affa6f8af9698f.md)

[Yapılacak Listem](GoIT%20-%20MO%20N%20E%20Y%20-%20G%20U%20A%20R%20D/Yap%C4%B1lacak%20Listem%2030c673274a8e80baaf1ffbe703a968a9.md)

[Geliştirici Ekip](GoIT%20-%20MO%20N%20E%20Y%20-%20G%20U%20A%20R%20D/Geli%C5%9Ftirici%20Ekip%20314673274a8e80bc9ff2f7e453aadc5c.md)

[Görev Dağılımı](GoIT%20-%20MO%20N%20E%20Y%20-%20G%20U%20A%20R%20D/G%C3%B6rev%20Da%C4%9F%C4%B1l%C4%B1m%C4%B1%20314673274a8e808193a1f08b4bbedec7.md)