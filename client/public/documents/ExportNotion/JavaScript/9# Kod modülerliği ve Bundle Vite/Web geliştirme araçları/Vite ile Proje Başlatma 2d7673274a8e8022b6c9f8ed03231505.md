# Vite ile Proje Başlatma

Tüm projelerin bulunduğu klasöre gitmek için terminalde, örneğin, adı `projeler`olan bir klasöre git. Bunun için `cd` (Change Directory) komutunu kullanabilirsin.

1. Terminali aç.
2. **`cd`** komutunu kullanarak **`projeler`** klasörüne git. Örneğin:

`cd C:/dizin/yol/projects   // Windows için
cd /dizin/yol/projects     // macOS için`

Eğer **`projects`** klasörü ev dizininizde (kullanıcı klasörü) bulunuyorsa:

`cd ~/projects`

```
Dikkat! İşletim sistemi ve terminal türüne bağlı olarak, ayırıcı olarak hem backslash (\\) hem de forward slash (/) işaretleri kullanılabilir, bu nedenle koşullarına göre seçim yap.

```

Şu anda **`projeler`** klasöründesin ve burada bulunan dosya ve klasörlerle çalışabilirsin.

- Windows kullanıcıları için, bu klasörün C veya D gibi bir disk kökünde olmasını önerilir.
- MacOS kullanıcıları için klasörün konumu önemli değildir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/9a5645ac-a63c-4cdf-8c3a-c34920dbaaebScreenshot%202023-09-13%20at%2016.10.18.png)

Bu klasörde terminalde Vite tabanlı bir proje oluşturma komutunu çalıştırın.

`npm create vite@latest`

Video projesi oluşturma sürecinin nasıl göründüğü işte böyle.

- Projenin oluşturulmasına başlama komutunu giriyoruz ve **Enter** tuşuna basıyoruz.
- Sonraki adımda sistem, `create-vite@latest` paketinin yüklenip yüklenmeyeceğini sormuş olabilir, `y` (“yes”anlamına gelen kelimenin harfi) simgesini giriyoruz ve **Enter** tuşuna basıyoruz.
- Daha sonra projemizin klasör adını giriyoruz, bu herhangi bir şey olabilir; örneğin, `my-vite-project`.
- Şimdi projenin teknoloji yığını seçimini yukarı/aşağı ok tuşlarıyla yapıyoruz, `Vanilla` gereklidir, seçimi onaylıyoruz ve **Enter** tuşuna basıyoruz.
- Son olarak, projenin dilini seçiyoruz; örneğimizde bu JavaScript, seçimi onaylıyoruz ve **Enter** tuşuna basıyoruz.

Bu adımlar sonucunda, bir proje adıyla klasör oluşturulur ve içinde bazı dosyalar bulunur.

Terminalde proje klasörüne geçiyoruz ve onu VSCode'da açıyoruz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4d7820cb-2d76-4c3f-8b12-6fb4ed3c4b0aScreenshot%202023-09-13%20at%2016.30.43.png)

VSCode'da `index.html`, `main.js`, `style.css` ve `npm` ve Git için birkaç dosya görüyoruz, yani web projenizin iskeletini.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0d4a2c85-c1b0-4888-8820-d412f6debd8fScreenshot%202023-09-13%20at%2016.31.46.png)

**VITE** v7.3.0  ready in **251** ms

➜  **Local**:   http://localhost:**5173**/

➜  **Network**: use **--host** to expose

➜  press **h + enter** to show help