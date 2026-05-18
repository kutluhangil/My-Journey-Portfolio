# Sayfalama

```
💡Sayfalama, büyük veri setlerini düzenlemek ve kullanıcıya sunmak için kullanılan yaygın bir tekniktir. Veriler küçük parçalara (sayfalara) ayrılır ve kullanıcılar bu sayfalarda rahatça gezinerek veriye erişir.
```

Tüm verileri aynı anda göstermek yerine, veri seti küçük bloklara (sayfalara) bölünür. Bu, kullanıcılara daha verimli bir gezinme deneyimi sunar ve bilgiyi daha yönetilebilir hale getirir.

Sayfalamanın temel amacı, kullanıcıya sunulan bilgi miktarını sınırlayarak algılamayı daha kolay ve anlamlı hale getirmektir. Her sayfa genellikle sabit sayıda veri içerir ve bu da sayfanın kullanıcıya daha hızlı ve etkili bir şekilde yüklenmesine olanak tanır. Ayrıca sayfalama, ağ ve sunucu üzerindeki yükü azaltarak sistem performansını iyileştirir.

Arka uçta sayfalama uygularken, her sayfada sınırlı bir veri miktarını etkili bir şekilde işleyip iletebilmek için bazı faktörleri göz önünde bulundurmak gerekir. Uygulamanın özelliklerine ve kullanılan veritabanına göre yapılandırma farklılık gösterebilir, bu nedenle esnek bir yaklaşım benimsemek önemlidir.

**İşte bazı genel özellikler:**

- `perPage`: Her sayfada görüntülenecek kayıt sayısı.
- `page`: Kullanıcının görüntülemekte olduğu sayfa numarası.
- `totalItems`: Veri kümesindeki toplam kayıt sayısı.
- `totalPages`: `Math.ceil(totalItems / perPage)` formülü ile belirlenen toplam sayfa sayısı.
- `hasPreviousPage`: Kullanıcının bulunduğu sayfadan önce bir sayfa olup olmadığını gösterir.
- `hasNextPage`: Kullanıcının bulunduğu sayfadan sonra bir sayfa olup olmadığını gösterir.

Bu özellikler, sayfalama uygularken arka uca yapılan istek parametreleri nesnesinin bir parçası olabilir. Verilerin sayfada görüntülenmesini etkili bir şekilde yönetmek ve veritabanından doğru veri seçimi yapmak için hesaplamalar yapmakta yardımcı olacaktır.

İstemciden `perPage` ve `page` parametrelerini alacağız; bu sayede arka uç, istenen sayfa için belirli sayıda veri döndürebilecek. Arka uçtan gelen yanıtta ise `perPage`, `page`, `totalItems`, `totalPages`, `hasPreviousPage` ve `hasNextPage` gibi bilgileri döndürerek istemcide daha kullanıcı dostu bir sayfalama deneyimi sağlanabilecektir.