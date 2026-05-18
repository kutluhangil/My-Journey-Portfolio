# Seçiciler (Selectors)

Seçiciler, Redux durumundan (state) değerleri okuma işlemini gerçekleştiren fonksiyonlardır. En temel haliyle, mevcut Redux durumunu (state) alır ve belirli bir kısmını geri döndürürler.

`const valueSelector = state => state.some.value;`

Bileşenlerde `useSelector(selector)` hook’unu kullanarak bu seçici fonksiyonlarına referans veririz.

`const value = useSelector(valueSelector);`

Bu yaklaşım sayesinde bileşenler, Redux durumunun yapısını ve değerlerin nasıl hesaplandığını bilmek zorunda kalmaz. Durum yapısında bir değişiklik olduğunda, yalnızca seçiciler güncellenir; bu değişiklikler bileşenleri etkilemez. Bu durum, refaktoring sürecini hızlandırır ve uygulamanın dayanıklılığını artırır. Ayrıca, aynı seçici birden fazla bileşende kullanıldığında kod tekrarını azaltır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/b6fef5e2-b750-4290-808e-c4b2074706d5image%20-%202024-11-11T185849.810.png)

Özetle, seçiciler, bileşenler ile Redux store arasındaki bağı en aza indiren bir soyutlama katmanıdır.