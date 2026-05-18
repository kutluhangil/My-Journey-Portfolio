# Durum Yönetimi (State Management)

Uygulamaların işlevsel gereksinimleri arttıkça, yönetilmesi gereken durum sayısı da artmaktadır: asenkron veri yükleme, yükleme göstergeleri, filtreleme ve sıralama gibi durumlar daha karmaşık hale gelir. Durum yönetim kütüphaneleri, uygulamanın durumunu saklama ve yönetme süreçlerini standartlaştırarak geliştirmeyi kolaylaştırır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/37a311a4-3af2-48a4-aabb-d389deec8821image%20-%202024-10-15T131920.139.png)

Redux – program durumunu yönetmek için en popüler kütüphanelerden biridir.

- **Öngörülebilir Sonuçlar**: Tek bir doğru kaynak (store), programın durumunu saklar ve onunla çalışmak için yöntemler sunar.
- **Bakım kolaylığı**: Kod yapısını düzenleyen kurallar ve uygulamalar, kodun anlaşılır ve tutarlı olmasına katkıda bulunur.
- **Geliştirici araçları**: Gerçek zamanlı olarak uygulama durumunu görselleştiren tarayıcı uzantıları mevcuttur.

# **Veri Akışı**

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/9bcb45ae-5809-4bdc-bcc9-f74c57d2c9c4image%20-%202024-10-15T131934.913.png)

Kütüphane olmadan veri güncelleme durumu şu şekilde gerçekleşir:

- Durum, en yakın ortak üst bileşende saklanır.
- İç içe bileşen, durum değişikliğini bir yöntem-prop aracılığıyla başlatır.
- Güncellenen durum, bileşen ağacında aşağı doğru props ile iletilir.

Aşağıdaki animasyon, programın çeşitli bileşenlerinde gerçekleşen durum değişikliklerine bir örnek sunmaktadır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/53864fa0-1003-4d54-97cb-2ac1d84e7be2image%20%286%29.gif)

Bazı bileşenler, yalnızca gerçekten ihtiyaç duyan bileşenlere ulaşması için props olarak veri alır. Redux, merkezi bir durum deposu (**store**) oluşturarak ve durumu yönetmek için kurallar belirleyerek bu süreci daha sistematik hale getirir. Bileşenler, verileri güncellemek için store’daki fonksiyonları çağırır ve durum değişikliklerini almak için store’a abone olur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e1e437c6-e729-4327-b025-986163c949d3image%20%287%29.gif)

Redux'taki veri akışı her zaman tek yönlüdür: bileşenlerden store'a ve store'dan bileşenlere. Bu sayede uygulama mantığı daha öngörülebilir ve anlaşılır hale gelir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ddc39dd3-8e72-4633-8450-5c2bd60ee519image.png)

- Kullanıcı arayüzle etkileşime geçtiğinde bir **action** (eylem) başlatır.
- **Depo** (store), belirtilen tüm **reducer** (reducers) işlevlerini çağırarak mevcut **durum** (state) ve **hareket** (action) bilgilerini iletir.
- **Depo** (store), **reducer** (reducers) tarafından döndürülen güncellenmiş **durum**(state) değerini saklar.
- State(durum) güncellendiğinde, ona bağlı bileşenler yeniden render edilir.

# **Avantajlar ve Dezavantajlar**

Redux, program durumunu yönetmek için güçlü bir araçtır ve belirli bir durumun ne zaman ve nasıl değiştiğini takip etmeyi kolaylaştırır. Eğer uygulamanızda durum yönetimi ile ilgili büyük bir karmaşa yaşamıyorsanız, React’in kendi state yapısı genellikle yeterlidir.

Ancak, uygulamanız karmaşık hale geldiğinde ve durumu nerede saklayacağınız veya nasıl güncelleyeceğiniz konusunda netlik kaybolduğunda, Redux kullanmanın zamanı gelmiş demektir.

Bununla birlikte, Redux kullanımı bazı ödünleri gerektirir. En kısa veya en hızlı kod yazma yöntemi olmak için tasarlanmamıştır. Redux, durumu merkezi bir depo (store) olarak saklama, değişiklikleri action nesneleri ile tanımlama ve bu değişiklikleri saf fonksiyonlar (reducers) aracılığıyla işleme gibi belirli kurallar gerektirir.