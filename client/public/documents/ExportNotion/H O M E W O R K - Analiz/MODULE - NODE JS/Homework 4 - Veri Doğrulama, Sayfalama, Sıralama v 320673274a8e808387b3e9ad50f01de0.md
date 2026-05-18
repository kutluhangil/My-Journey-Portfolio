# Homework 4 - Veri Doğrulama, Sayfalama, Sıralama ve Filtreleme

Merhaba!

Bu, **Node.js** kursunuzdaki dördüncü ev ödeviniz. Pratik görevlerde iyi gidiyorsunuz! ve Bu görevde de başarılı olacağınızdan eminiz.

Bu görevi yerine getirirken:

- **Sayfalandırma** uygulamayı öğrenecek ve büyük veri hacimlerini etkili bir şekilde yöneterek uygulamanızın hızını artıracaksınız.
- Belirli bir özelliğe göre **veri sıralama** yöntemlerini kavrayacak ve daha karmaşık sıralama algoritmaları geliştirerek bunların performans üzerindeki etkilerini anlayacaksınız.
- **Veri filtreleme** tekniklerini öğreneceksiniz, bu da hızlı arama ve filtreleme imkanı sunan daha dinamik ve kullanıcı dostu bir arayüz oluşturmanıza yardımcı olacak.
- **Giriş verilerinin doğrulaması** konusunda derinlemesine bilgi edinecek, böylece verilerle güvenli bir şekilde çalışacak ve olası hataları önleyeceksiniz.

Bu beceriler, profesyonel gelişiminize önemli bir katkı sağlayacak ve web geliştirme alanında daha yetkin ve güvenli bir yazılımcı olmanıza yardımcı olacaktır.

O halde, **Öğrenmeye başlayın!** 🚀

# **Görev**

İletişim koleksiyonu ile çalışan uygulamanız üzerinde geliştirmeler yapmanız isteniyor. Sayfalandırma, isim sıralaması, iletişim koleksiyonu için filtreleme ve giriş verilerinin doğrulamasını ekleyin.

Kabul Kriterleri

- Görev, **`hw4-validation`** dalında tamamlanmış olmalıdır.
- Ev ödevini teslim ederken, `Github` üzerindeki kaynak dosyalarına ve bu ev ödevinin (dal **`hw4-validation`**) dağıtılmış projesine [render.com](https://render.com/) üzerinden bağlantı sağlanmalıdır.
- Görev kodu çalıştırıldığında herhangi bir hata olmamalıdır.
- Görev gerçekleştirilirken, kurs materyallerinde belirtilen uygulama dosya yapısına uyulmalıdır.

# **Görevi Adım Adım Tamamlama**

**Adım 1**

`hw3-crud` dalından `hw4-validation` dalını oluşturun ve bu görevi **`hw4-validation`** dalında gerçekleştirin.

**Adım 2**

Uygulamanızda giriş verilerinin işlenmesini (doğrulama) geliştirin. Bunun için:

1. Doğrulama şemasını argüman olarak alacak ve isteğin body’sinin doğrulaması için middleware döndürecek `validateBody` fonksiyonunu oluşturun.
2. POST `/contacts` ve PATCH `/contacts/:contactId` rotalarına doğrulama ekleyin. MongoDB modelinin özelliklerini `/db/models/contact.js` dosyasında tanımladığınız şekilde doğrulama şemalarını oluşturun. Ayrıca, string türündeki alanlar için minimum uzunluk kuralı - 3 karakter ve maksimum uzunluk kuralı - 20 karakter ekleyin.
3. ID’nin geçerliliğini kontrol etmek için `isValidId` middleware’ini ekleyin ve bunu ID ile çalışan tüm rotalarda uygulayın.

**Adım 3**

GET `/contacts` rotasına sayfalandırma ekleyin. Bunun için aşağıdaki sorgu parametrelerini kullanın:

- `page` — isteğin sayfa numarası (varsayılan 1)
- `perPage` — sayfadaki öğe sayısı (varsayılan 10)

Sunucu yanıtında **`data`** özelliği aşağıdaki özellikleri içermelidir:

- `data` — mevcut sayfadaki iletişimlerin dizisi
- `page` — mevcut sayfa numarası
- `perPage` — sayfadaki öğe sayısı
- `totalItems` — koleksiyondaki toplam öğe sayısı
- `totalPages` — toplam sayfa sayısı
- `hasPreviousPage` — önceki sayfanın olup olmadığını gösterir
- `hasNextPage` — sonraki sayfanın olup olmadığını gösterir

Sunucu yanıtı aşağıdaki formatta olmalıdır:

`{
    "status": 200,
    "message": "Successfully found contacts!",
    "data": {
        "data": [/* contacts */],
        "page": 2,
        "perPage": 4,
        "totalItems": 6,
        "totalPages": 2,
        "hasPreviousPage": true,
        "hasNextPage": false
    }
}`

**Adım 4**

**GET `/contacts`** rotası için, iletişim öğelerinin isimlerine göre sıralama yapma imkanı ekleyin. Bunun için aşağıdaki sorgu parametrelerini kullanın:

- `sortBy` — sıralamanın hangi özelliğe göre yapılacağını belirler
- `sortOrder` — sıralama düzenini belirler (**`asc`** — artan sıralama düzeni (varsayılan değer) veya **`desc`** — azalan sıralama düzeni)

**Adım 5 (isteğe bağlı)**

**GET `/contacts`** rotası için yanıt içinde, `isFavourite` özelliğine göre iletişimleri filtreleme imkanı ekleyin. Bunun için aşağıdaki sorgu parametrelerini kullanın:

- `type` — iletişim türünü gösterir, `contactType` özelliğinin değeri
- `isFavourite` — iletişimin favori olup olmadığını gösterir

**Adım 6**

Projenizin şu anda [render.com](https://render.com/) üzerinde dağıtıldığı dalı `hw4-validation` olarak değiştirin. Değişikliklerin başarıyla kaydedildiğinden emin olun.

```
Ev ödevinizi mentorunuza teslim etmeden önce, dağıtılmış uygulamanızın render.com üzerinde çalıştığını doğrulamak önemlidir. Dağıtım sırasında çevresel değişkenleri (env) eklemeyi unutmadığınızdan ve tüm arka uç rotalarının beklendiği gibi çalıştığından emin olun.
```