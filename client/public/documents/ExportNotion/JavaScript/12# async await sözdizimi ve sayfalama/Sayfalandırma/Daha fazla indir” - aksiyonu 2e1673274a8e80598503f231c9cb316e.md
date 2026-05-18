# "Daha fazla indir” - aksiyonu

Takip eden her talepte grup numarasını dinamik olarak değiştirmek için aşağıdaki eylem dizisi kullanılır.

1. Başka bir global değişken tanımlayalım, adını **`page`** koyalım ve başlangıç değerini 1 olarak ayarlayalım — ilk öğe grubu.
2. `then()` yöntem işleyicisindeki her başarılı istekten sonra, `page` değerini bir artıracağız. Daha sonra istek parametrelerini oluştururken bu değeri kullanırız.

İlk öğe grubu yüklendikten sonra, düğmedeki metin değişecek ve düğme gönderi listesinin altına düşecektir. Kullanıcı sayfayı aşağı kaydırıp Daha Fazla Yükle düğmesine tekrar tıkladığında, ikinci öğe grubu talep edilecek ve mevcut gönderi listesine eklenecektir.