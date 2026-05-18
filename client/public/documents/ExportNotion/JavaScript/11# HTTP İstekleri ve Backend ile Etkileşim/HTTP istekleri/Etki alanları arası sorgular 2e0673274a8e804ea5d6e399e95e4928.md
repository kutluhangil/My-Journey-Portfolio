# Etki alanları arası sorgular

Varsayılan olarak, bir HTTP isteği yalnızca geçerli site içinde yapılabilir. Başka bir etki alanına, bağlantı noktasına veya protokole istekte bulunmaya çalıştığınızda (yani, etki alanları arası bir istekte bulunmaya çalıştığınızda), tarayıcı bir hata verir. Bu, güvenlik nedeniyle uygulanır ve erişim izinleri arka uç tarafında yapılandırılır. Eğer arka uç çapraz etki alanı isteklerini desteklemiyorsa, ön uç geliştiricisi bu konuda kodla herhangi bir çözüm üretemez.

Bu tarayıcı politikasına **CORS** adı verilir ve Kökeni bir etki alanı, bağlantı noktası veya protokol olan Çapraz Kaynak Paylaşımı anlamına gelir. Birebir çevirisi "farklı kaynaklar arasında kaynak paylaşımı" şeklindedir.

Her istek için, tarayıcının kendisi, HTTP isteği yapmak isteyen web sayfasının adresini belirten HTTP başlığı `Origin` ekler. Örneğin, `https://my-site.com/about` web sayfasından `https://my-api.com/users` adresine bir getirme isteği yaparsak, başlıklar aşağıdaki gibi olacaktır:

```
GET /users
Host: my-api.com
Origin: <https://my-site.com>
```

Sunucu `Origin` başlığını kontrol eder ve etki alanları arası istekleri destekliyorsa yanıta özel bir HTTP başlığı olan `Access-Control-Allow-Origin` ekler.

```
# Private API
Access-Control-Allow-Origin: <https://my-site.com>

# Public API
Access-Control-Allow-Origin: *
```

**`Access-Control-Allow-Origin`** başlığı, etki alanları arası isteklere yanıt almasına izin verilen kaynakları tanımlar. Özel arka uç için bu başlığın değeri **`https://my-site.com`** ve genel arka uç için herkesin erişimine izin veren özel karakter olan `*`ifadesidir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/639891ff-3120-4a0d-af2e-7ae61994ffe2Frame%20771536.jpg)

Yani tarayıcı, JavaScript kodu ile arka uç arasında bir tür aracıdır. Her isteğe doğru değere sahip `Origin` başlığını ekler ve yanıtta `Access-Control-Allow-Origin` başlığını kontrol eder. Başlık mevcutsa ve değeri uygunsa, orijinal istek yürütülür ve JavaScript kodu sonucunu alır, aksi takdirde bir CORS hatası oluşturulur.