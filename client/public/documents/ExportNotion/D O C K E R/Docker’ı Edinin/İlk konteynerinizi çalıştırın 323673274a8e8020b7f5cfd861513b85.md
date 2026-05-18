# İlk konteynerinizi çalıştırın

CLI terminalinizi açın ve bir konteyner başlatmak için **`docker run`** komutunu çalıştırın:

`docker run -d -p 8080:80 docker/welcome-to-docker`

**Frontend’e erişim**

Bu konteyner için frontend, **`8080`** portundan erişilebilir. Web sitesini açmak için tarayıcınızda [http://localhost:8080](http://localhost:8080/) adresini ziyaret edin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a557a6d5-3fd9-43a5-9a55-dfd69cfc5cb4image.png)

**Docker Desktop ile konteyner yönetimi**

1. Docker Desktop’u açın ve sol sidebar’daki **Containers** alanını seçin.
2. Konteynerinizle ilgili loglar, dosyalar ve hatta shell erişimi gibi bilgileri **Exec**sekmesini seçerek görebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/766c42af-a3ae-46a4-a09a-135ec6264272image.png)

1. Konteyner hakkında detaylı bilgi almak için **Inspect** alanını seçin. Konteynerleri duraklatma, başlatma, durdurma veya **Logs**, **Bind mounts**, **Exec**, **Files**, **Stats** sekmelerini inceleme gibi çeşitli işlemler yapabilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/bf53901a-ac10-4c8b-9d5c-bb2a9dcd29d2image.png)

Docker Desktop, geliştiriciler için konteyner yönetimini basitleştirir; uygulamaların farklı ortamlar arasında kurulumu, yapılandırması ve uyumluluğunu kolaylaştırarak ortam tutarsızlıkları ve dağıtım zorluklarını ortadan kaldırır.

# **Konteynerlerle geliştirme**

# **Projeyi başlatın**

1. Başlamak için projeyi klonlayın veya [ZIP olarak indirin](https://github.com/docker/getting-started-todo-app/archive/refs/heads/main.zip):

`git clone <https://github.com/docker/getting-started-todo-app>`

Proje klonlandıktan sonra oluşturulan dizine geçin:

`cd getting-started-todo-app`

1. Projeyi aldıktan sonra, Docker Compose kullanarak geliştirme ortamını başlatın.

CLI ile başlatmak için:

`docker compose watch`

Bu komut, konteyner imajlarının çekildiğini, konteynerlerin başlatıldığını ve diğer çıktıları gösterir. İlk başta hepsini anlamasanız da kısa süre içinde ortam stabil hale gelir.

1. Tarayıcınızdan [http://localhost](http://localhost/) adresini açarak uygulamanın çalıştığını görün. Uygulamanın çalışması birkaç dakika sürebilir. Bu basit bir to-do uygulamasıdır, bir veya iki öğe ekleyebilir, bazılarını tamamlandı olarak işaretleyebilir veya silebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f02f2daf-6fab-4522-8124-dcf93bdbf11cimage.png)

**Ortamda neler var?**

Ortam çalışır hale geldiğine göre, içinde neler olduğunu inceleyelim. Yüksek seviyede, uygulamanın ihtiyaçlarını karşılayan birkaç konteyner/proses bulunur:

- **React frontend** – React dev server’ı çalıştıran bir Node konteyner, [Vite](https://vitejs.dev/)kullanıyor.
- **Node backend** – API sağlayan backend; to-do öğelerini alma, oluşturma ve silme işlemlerini sağlar.
- **MySQL database** – Öğelerin listesini depolamak için bir veritabanı.
- **phpMyAdmin** – Veritabanıyla etkileşim için web tabanlı arayüz; [http://db.localhost](http://db.localhost/) üzerinden erişilebilir.
- **Traefik proxy** – [Traefik](https://traefik.io/traefik/) uygulama proxy’si, istekleri doğru servise yönlendirir. **`localhost/api/*`** istekleri backend’e, **`localhost/*`** istekleri frontend’e, **`db.localhost`** istekleri phpMyAdmin’e gider. Böylece tüm uygulamalara port 80 üzerinden erişim sağlanır.

Bu ortam sayesinde geliştirici olarak hiçbir servis yüklemenize, veritabanı şeması oluşturmanıza veya kimlik bilgilerini yapılandırmanıza gerek yoktur. Tek ihtiyacınız Docker Desktop ve bir kod editörüdür.

**Uygulamada değişiklik yapma**

Ortam çalışır durumda olduğuna göre, uygulamada değişiklik yapabilir ve Docker’ın hızlı geri bildirim döngüsü sağladığını görebilirsiniz.

**Selamlamayı değiştirin**

Sayfanın üst kısmındaki selamlama, **`/api/greeting`** endpoint’i ile sağlanır. Şu anda her zaman "Hello world!" döndürür. Bunu, üç rastgele mesajdan birini döndürecek şekilde değiştireceksiniz.

1. **`backend/src/routes/getGreeting.js`** dosyasını açın. Bu dosya API endpoint handler’ını içerir.
2. Üstteki değişkeni bir selamlamalar dizisine değiştirin ve endpoint’in rastgele bir selam göndermesini sağlayın:

`const GREETINGS = [
    "Whalecome!",
    "All hands on deck!",
    "Charting the course ahead!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};`

1. Dosyayı kaydedin ve tarayıcınızı yenileyin. Yeni selamlamayı görmelisiniz. Yenilemeye devam ederseniz tüm mesajları görebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d00fae07-2b30-4319-b654-e9b161350b86image.png)

**Placeholder metnini değiştirin**

Uygulamayı açtığınızda, placeholder metni "New Item" olarak gözükür. Bunu daha açıklayıcı ve eğlenceli hale getireceksiniz. Ayrıca uygulamanın stilinde bazı değişiklikler yapacaksınız.

1. **`client/src/components/AddNewItemForm.jsx`** dosyasını açın. Bu, yeni öğe eklemek için kullanılan bileşendir.
2. **`Form.Control`** elementinin **`placeholder`** özelliğini istediğiniz metinle değiştirin:

`<Form.Control
    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
    type="text"
    placeholder="What do you need to do?"
    aria-label="New item"
/>`

1. Dosyayı kaydedin ve tarayıcınızı kontrol edin. Değişiklik anında hot-reload ile görünmelidir. Beğenmezseniz metni dilediğiniz gibi düzenleyin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a05705e9-17d2-4e19-9ff3-80b4b3f35cacimage.png)

**Arka plan rengini değiştirin**

Uygulamayı tamamlamadan önce renkleri daha iyi yapmanız gerekiyor.

1. **`client/src/index.scss`** dosyasını açın.
2. **`background-color`** özelliğini istediğiniz renge ayarlayın. Örnek olarak Docker’ın denizcilik temasına uygun yumuşak bir mavi verilmiştir.

`body {
    background-color: #99bbff;
    margin-top: 50px;
    font-family: 'Lato';
}`

Her kaydettikten sonra tarayıcıda değişiklik görünmelidir. Renkleri kendinize uygun şekilde ayarlayın.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/359b460b-d89d-4d13-bacb-adc1fe56633dimage.png)

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/fb7a9460-f3f9-4b20-9026-438fc42403d6image.png)

**Özet**

Bir dakikanızı ayırın ve neler olduğuna bakın. Kısa sürede şunları başardınız:

- Hiç kurulum yapmadan tam bir geliştirme projesini başlattınız. Konteyner tabanlı ortam, gerekli tüm geliştirme ortamını sağladı. Node, MySQL veya diğer bağımlılıkları direkt makinenize kurmanıza gerek yoktu. Tek ihtiyacınız Docker Desktop ve bir kod editörüydü.
- Değişiklik yaptınız ve anında görebildiniz. Bu, 1) her konteyner içindeki proseslerin dosya değişikliklerini izlemesi ve yanıtlaması, 2) dosyaların konteynerle paylaşılıyor olması sayesinde mümkün oldu.

Docker Desktop tüm bunları ve daha fazlasını sağlar. Konteynerlerle düşünmeye başladığınızda, neredeyse her ortamı oluşturabilir ve ekibinizle kolayca paylaşabilirsiniz.