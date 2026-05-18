# Kütüphaneyi kurun ve bağlayın

Çoğu resmi kütüphane belgesinde, projeye kurulum ve bağlantı talimatları genellikle **"Get Started"**, **"Quick Start"**, **"Installation"**, **"Setup"** gibi başlıklar altında yer alır. Bu, geliştiricilerin ihtiyaç duydukları bilgilere hızlıca ulaşabilmesi için yaygın olarak kullanılan bir uygulamadır.

Örneğin, **basicLightbox** kütüphanesinde bu bölüm **"Setup"** olarak adlandırılmıştır. Bu kısımda, (ileride öğreneceğiniz) **paket yöneticileri** kullanılarak basicLightbox'ın nasıl kurulacağı açıklanır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/5a8f6f9e-d388-4b19-a784-18316487729cUntitled%20%281%29.png)

Kütüphaneye CDN üzerinden bağlanmanız gerekiyorsa, bu kütüphaneyi jsdelivr [CDN hizmetinde bulabilir](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) ve HTML'nize eklemeniz gereken hazır komut dosyası ve stil bağlantı etiketlerini alabilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d28c8034-ff70-4055-b258-7f9dd70a4590Untitled%20%282%29.png)

Ancak bazı durumlarda yalnızca dosyanın yolu gösterilir. Bu durumda, yolun yanındaki ilgili düğmeye tıklayarak tamamlanmış etiketi kolayca kopyalayabilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8658688c-ff20-4528-adc4-0717e709b8b6Untitled%20%283%29.png)

# **Kullanım**

Kütüphanenizi projeye bağladıktan sonra, **nasıl kullanıldığını anlamak** önemlidir. Çoğu kütüphane belgesi, farklı kullanım senaryoları sunar ve bunlar genellikle `"Usage"`, `"Examples"`, `"API"` veya `"Demo"` gibi bölümlerde yer alır.

[basicLightbox](https://basiclightbox.electerious.com/)'ın resmi belgelerinde ve GitHub sayfasındaki [API](https://github.com/electerious/basicLightbox#api) bölümünde, kütüphanenin nasıl çalıştığını anlamanıza yardımcı olacak çeşitli kullanım örnekleri bulabilirsiniz. Bu örnekler genellikle kütüphanenin temel özelliklerini ve yeteneklerini nasıl uygulayacağınızı gösterir.

Ancak kendinizi sadece dokümantasyondaki örneklerle sınırlamayın. Farklı özellikleri birleştirmeyi deneyin ve bunları kendi ihtiyaçlarınıza ve projenizin gereksinimlerine göre uyarlayın.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a4c11a7e-099b-4847-a57a-18ca752144f4Untitled%20%284%29.png)

Örneğin, `create()` yöntemi **basicLightbox** kütüphanesinin yeni bir örneğini oluşturur. Bu yöntem iki parametre alır:

1. **Modal pencerenin içeriği** – Gerekli parametredir. Bir **DOM öğesi** veya **dize (string)** türünde olabilir (`{Node | String}`).
2. **Ayarlar nesnesi** – İsteğe bağlı parametredir. Bir **nesne** olarak tanımlanır (`{?Object}`).

`create()` yöntemi çağrıldığında, dönen değer bir **basicLightbox örneğidir** ve genellikle bir değişkene atanır. örneğin, `instance` .

`const instance = basicLightbox.create(`
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`, {
	closable: false
})`

Lütfen unutmayın: Örneğin (örnek nesnenin), belgelerde kendisine ait yöntemleri açıklayan ayrı bir **Instance API** bölümü bulunur.

Bu bölümde, oluşturulan örnek üzerinden kullanılabilecek işlevler ve özellikler ayrıntılı olarak açıklanır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/6e72a6f0-3c41-42a7-be50-05fce5761154Untitled%20%285%29.png)

Örneğin, `instance.show()` yöntemi çağrıldığında modal pencere görüntülenir.

Benzer şekilde, `instance.close()` yöntemi ise modal pencereyi gizler.

# **Özellikler ve gelişmiş ayarlar**

Her kütüphane dokümantasyonunda önemli bölümlerden biri, **özelliklerini ve gelişmiş ayarlarını** açıklayan kısımdır. Bu bölüm farklı kütüphanelerde farklı başlıklarla yer alabilir. Genellikle `"Options"`, `"Advanced Settings"`, `"Configuration Options"`, `"Advanced Usage"` veya `"Advanced Configuration"` gibi adlarla anılır.

**basicLightbox** kütüphanesinde bu bölüm, `create()` yöntemiyle birlikte kullanılabilen **ayarlar nesnesi** hakkında bilgi verir. Bu ayarlar, modal pencerenin davranışını özelleştirmenize olanak tanır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f51e63d4-b3bd-4b73-8646-b5f1d7470d8cUntitled%20%286%29.png)

Örneğin:

- `className` seçeneği, modal pencerenin ana konteynerine **ek CSS sınıfları**eklemenizi sağlar. Bu, temel kütüphane stillerini değiştirmeden modal pencereyi kendi tasarımınıza uygun şekilde özelleştirmek için oldukça yararlıdır.
- `onShow` seçeneği, modal pencere açıldığında bir **fonksiyon çalıştırmanıza**olanak tanır. Örneğin, modal açıldığında belirli bir olay dinleyicisi eklemek gibi işlemler için kullanışlıdır.

Belgeleri dikkatlice okuduktan sonra, kütüphane geliştiricisi tarafından sağlanan örnekleri anlamak ve takip etmek çok daha kolay olacaktır.

Şimdi, kendi görevinize uygun işlevleri belirleyin ve örneklerdeki kodu temel alarak ihtiyacınız olan işlevselliği projeye dahil etmeye çalışın.