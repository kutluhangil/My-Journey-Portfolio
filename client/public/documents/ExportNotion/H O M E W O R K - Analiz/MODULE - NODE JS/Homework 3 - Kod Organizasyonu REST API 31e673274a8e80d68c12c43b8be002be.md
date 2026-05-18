# Homework 3 - Kod Organizasyonu. REST API

Merhaba!

Ustalık yolculuğunda yeni bir aşamaya hazır ol! Bu **Node.js** görevi, tam yığın geliştirme konusunda seni bir adım ileriye taşıyacak.

Bu sefer, mevcut bir iletişim koleksiyonu uygulamanı geliştirerek, yeni iletişimler ekleme, mevcutları silme ve düzenleme yetenekleri kazandıracaksın.

Bu görevde sadece **Node.js** ile pratik yapmakla kalmayacak, aynı zamanda yönlendirme, kontrolörler ve hata işleme gibi geliştirme alanındaki en iyi uygulamaları da öğreneceksin. Uygulaman, diğer sistemlerle HTTP isteklerine yanıt verecek ve onlarla etkileşimde bulunacak şekilde hazır olacak.

Değişikliklerini **GitHub**'da kaydetmeyi ve projeni [render.com](https://render.com/) üzerinde dağıtmayı unutma. Bu, becerilerini pratikte uygulama ve bunları gerçek dünyada görme fırsatı sunacak.

Adım adım talimatlar, bu görevin tüm yönlerini aşama aşama öğrenmene yardımcı olacak ve her başarılı adım, geliştirici kariyerinde sana daha fazla güven ve deneyim kazandıracak.

Zaman kaybetme — **Hadi pratik yap!** 🚀

# **Görev**

İletişim koleksiyonu ile çalışacak uygulamanın oluşturulmasına devam etmelisin. Yeni iletişimler ekleme, mevcutları silme ve düzenleme mantığını ekle.

# **Kabul Kriterleri**

- Görev **`hw3-crud`** dalında tamamlanmış olmalıdır.
- Ev ödevi tesliminde, `Github` üzerindeki kaynak dosyalarına ve bu ev ödevinin dağıtılmış projesine (dal **`hw3-crud`**) ait bağlantılara yer verilmelidir.
- Görev kodu çalıştırıldığında hata olmamalıdır.
- Görev gerçekleştirilirken, kurs materyallerinde belirtilen uygulama dosya yapısına uyulmalıdır.

# **Görevi Adım Adım Tamamlama**

**Adım 1**

**`hw2-mongodb`** dalından **`hw3-crud`** dalını oluştur ve bu görevi **`hw3-crud`** dalında gerçekleştir.

Uygulamanızda yönlendirmeyi organize edin:

- Yönlendirme kodunu `src/server.js` dosyasından **`src/routers/contacts.js`** dosyasına taşıyın.
- Kontrolör kodunu `src/server.js` dosyasından **`src/controllers/contacts.js`** dosyasına taşıyın.

**Adım 2**

Uygulamanızdaki hata işleme sürecini geliştirin. Bunun için:

1. Proje bağımlılıklarına [**http-errors**](https://www.npmjs.com/package/http-errors) paketini ekleyin, böylece farklı hataları işleyebilirsiniz.

2. `src/middlewares/errorHandler.js` dosyasında bir **`errorHandler`** middleware oluşturun ve bunu `src/server.js` dosyasında uygulayın. Bu middleware dört argüman almalıdır. **`errorHandler`**, bir hata tespit ettiğinde, istemciye 500 durum kodu ile bir yanıt göndermeli ve aşağıdaki özelliklere sahip bir nesne ile birlikte olmalıdır:

`{
		status: 500,
		message: "Something went wrong",
		data: 
		// hata nesnesinden alınan belirli hata mesajı
}`

3. `src/middlewares/notFoundHandler.js` dosyasında bir **`notFoundHandler`** middleware'i oluşturun ve bunu `src/server.js` dosyasında uygulayın. Bu middleware, istemcinin var olmayan bir yola başvurduğunda istekleri işlemek için tasarlanmıştır. **`notFoundHandler`**, bir hata tespit ettiğinde, [**http-errors**](https://www.npmjs.com/package/http-errors) kullanarak 404 durum kodu ve "Route not found" mesajı ile bir hata oluşturmalıdır.

`http-errors(404, "Route not found")`

4. `src/utils/ctrlWrapper.js` dosyasında bir `ctrlWrapper` fonksiyonu oluşturun ve bunu `src/routers/contacts.js` dosyasında uygulayın. Bu fonksiyon, Express uygulamanızdaki kontrolörler için bir sarmalayıcı olarak işlev görecek ve istekler sırasında oluşabilecek hataların otomatik olarak işlenmesini sağlayacaktır. Bu sarmalayıcıda bir hata oluştuğunda `next(err)` çağrısını yaparak `errorHandler`middleware'ini devreye alın.

5. GET `/contacts/:contactId` rotası için [**http-errors**](https://www.npmjs.com/package/http-errors) kullanarak 404 durum koduna sahip ve "Contact not found" mesajı içeren bir hata oluşturun.

`http-errors(404, "Contact not found")`

**Adım 3**

Yeni bir iletişim oluşturmak için **`/contacts`** POST rotasını oluşturun. İstek gövdesi aşağıdaki özellikleri içermelidir:

- `name` — zorunlu
- `phoneNumber` — zorunlu
- `email` — isteğe bağlı
- `isFavourite` — isteğe bağlı
- `contactType` — zorunlu

Bu rotanın işlenmesi şunları içermelidir:

1. Rotanın `src/routers/contacts.js` dosyasında kaydedilmesi
2. Bu rota için kontrolörün **`src/controllers/contacts.js`** dosyasında tanımlanması
3. **`src/services/contacts.js`** dosyasında bir hizmetin oluşturulması
4. Yeni bir iletişim başarıyla oluşturulduğunda, sunucunun yanıtı 201 durum kodu ile olmalı ve aşağıdaki özelliklere sahip bir nesne içermelidir:

`{
		status: 201,
		message: "Successfully created a contact!",
		data: 
		// oluşturulan iletişim bilgisinin verileri
}`

**Adım 4**

Mevcut bir iletişim kaydını güncellemek için **`/contacts/:contactId`** PATCH rotasını oluşturun. İstek gövdesi aşağıdaki özellikleri içermelidir:

- `name` — isteğe bağlı
- `phoneNumber` — isteğe bağlı
- `email` — isteğe bağlı
- `isFavourite` — isteğe bağlı
- `contactType` — isteğe bağlı

Bu rotanın işlenmesi şunları içermelidir:

1. Rotanın `src/routers/contacts.js` dosyasında kaydedilmesi
2. Bu rota için kontrolörün **`src/controllers/contacts.js`** dosyasında tanımlanması
3. **`src/services/contacts.js`** dosyasında bir hizmetin oluşturulması
4. İletişim verilerinin başarılı bir şekilde güncellenmesi durumunda sunucunun yanıtı 200 durum kodu ile olmalı ve aşağıdaki özelliklere sahip bir nesne içermelidir:

`{
	status: 200,
	message: "Successfully patched a contact!",
	data:
	// güncellenmiş iletişim bilgileri
}`

5. Eğer iletişim bulunamadıysa, [**http-errors**](https://www.npmjs.com/package/http-errors) kullanarak 404 durum kodu ve "Contact not found" mesajı ile bir hata oluşturun.

`http-errors(404, "Contact not found")`

**Adım 5**

Mevcut bir iletiyi silmek için `/contacts/:contactId` DELETE rotasını oluşturun.

Bu rotanın işlenmesi şunları içermelidir:

1. Rotanın `src/routers/contacts.js` dosyasında kaydedilmesi
2. Bu rota için kontrolörün **`src/controllers/contacts.js`** dosyasında tanımlanması
3. **`src/services/contacts.js`** dosyasında bir hizmetin oluşturulması
4. İletinin başarılı bir şekilde silinmesi durumunda, sunucunun 204 durum kodu ile yanıt vermesi ve yanıt gövdesinin olmaması
5. Eğer ileti bulunamazsa, [**http-errors**](https://www.npmjs.com/package/http-errors) kullanarak 404 durum kodu ve "Contact not found" mesajı ile bir hata oluşturulması.

`http-errors(404, "Contact not found")`

**Adım 6**

Projenizin şu anda [render.com](https://render.com/) üzerinden dağıtıldığı dalı değiştirin. Değişikliklerin başarıyla dağıtıldığından emin olun.

```
Ev ödevinizi mentorunuza teslim etmeden önce, dağıtılmış uygulamanızın render.com üzerinde çalıştığını doğrulamak önemlidir. Dağıtım sırasında çevresel değişkenleri (env) eklemeyi unutmadığınızdan ve tüm arka uç rotalarının beklendiği gibi çalıştığından emin olun.
```