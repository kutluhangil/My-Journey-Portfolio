# MongoDB Atlas

Bir **veritabanı**, verilerinizi sakladığınız büyük bir depodur. [**MongoDB**](https://www.mongodb.com/) — bilgilerin belge biçiminde, **JSON** nesnelerine benzer bir formatta saklandığı bir veritabanıdır; Bu yapı, JavaScript nesnelerine oldukça benzediği için kullanımı ve anlaşılması oldukça pratiktir.

**MongoDB**, **MongoDB Atlas** hizmeti aracılığıyla uzaktan (bulut) bir veritabanı kullanma imkanı sunar. **MongoDB Atlas**, karmaşık bir altyapıya başvurmadan kümeleri oluşturmanıza, yapılandırmanıza ve yönetmenize olanak tanır. Kümeyi bir web portalı arayüzü üzerinden izleyebilir ve yönetebilir, veritabanının durumu hakkında bildirimler alabilir ve hatta yük durumuna bağlı olarak kümeyi otomatik olarak ölçeklendirebilirsiniz.

**Küme** (cluster), veritabanının güvenilirliğini artırmak ve bilgilere hızlı erişim sağlamak için birlikte çalışan bir grup sunucudur. **MongoDB Atlas** üzerinde oluşturduğunuz küme, tüm bu özellikleri sunan bir depolama sistemidir.

Bu veritabanıyla çalışmayı kolaylaştırmak ve hızlandırmak için önce [MongoDB Atlas](https://www.mongodb.com/)üzerinde bir hesap oluşturacağız.

[https://goitlmsstorage.b-cdn.net/bb9570ab-e00e-46e1-975a-80fb76333973MongoDB__The_Developer_Data_Platform___MongoDB_-_1_April_2024.mp4](https://goitlmsstorage.b-cdn.net/bb9570ab-e00e-46e1-975a-80fb76333973MongoDB__The_Developer_Data_Platform___MongoDB_-_1_April_2024.mp4)

Veritabanı oluşturduktan sonra, ona bağlanmak için gerekli bilgileri `.env` dosyasında saklamamız gerekiyor. Bu, hassas verilerin güvenliğini sağlamak ve uygulamamızı farklı geliştirme ortamlarına kolayca uyarlamak için önemlidir. Böylece, gizli bilgileri doğrudan koda dahil etmekten kaçınabilir ve yapılandırma yönetimini kolaylaştırabiliriz.

Eğer şu şekilde bir **connection string**'imiz varsa:

`mongodb+srv://borismeshkovaws:12345678@cluster0.xpxkilq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

o zaman `.env` dosyası şöyle görünecektir:

```
 // .env

   PORT=3000
   MONGODB_USER=borismeshkovaws
   MONGODB_PASSWORD=12345678
   MONGODB_URL=cluster0.xpxkilq.mongodb.net
   MONGODB_DB=students // yukarıdaki bağlantıda yok, ama kullanacağımız belirli bir veritabanını belirtebiliriz.
// Bu, MONGODB_URL'den sonra "/" ile "?" arasında belirtilir.
```

`.env dosyasına eklenen yeni değişkenleri **.env.example** dosyasına da eklemeyi unutmayın. Bu dosya, projenin ihtiyacı olan çevresel değişkenlerin adlarını gerçek değerler olmadan içerir. Böylece diğer geliştiriciler yapılandırma gereksinimlerini anlayabilirler.`