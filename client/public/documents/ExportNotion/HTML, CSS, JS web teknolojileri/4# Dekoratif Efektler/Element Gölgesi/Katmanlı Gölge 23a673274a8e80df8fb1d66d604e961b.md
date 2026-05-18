# Katmanlı Gölge

Bir öğeye birden fazla gölge eklemek için değerleri virgülle ayırarak belirtebilirsiniz.

`box-shadow: <x-offset> <y-offset> <blur> <spread> <color>,
            <x-offset> <y-offset> <blur> <spread> <color>,
            <x-offset> <y-offset> <blur> <spread> <color>,
            ...`

Sonuç, çok katmanlı bir pasta gibi görünür. Listedeki ilk gölge en üstte, son gölge ise en altta yer alır. Yani, listedeki her bir önceki gölge daha yüksek bir katmana yerleştirilir ve görsel olarak sonraki tüm gölgelerle örtüşür.

Bu yaklaşım çok yumuşak ve güzel gölgeler oluşturmanızı sağlar.

![Screen Shot 2025-07-25 at 01.02.56 AM.png](Katmanl%C4%B1%20G%C3%B6lge/Screen_Shot_2025-07-25_at_01.02.56_AM.png)

Netleştirmek için, önceki örnekteki gölge katmanları için farklı renkler ayarlayalım.

Öğenin nasıl görüntülendiğine bakın ve hangi rengin önce gösterildiğini belirleyin. CSS sekmesini açın ve kendinizi kontrol edin.

![Screen Shot 2025-07-25 at 01.03.00 AM.png](Katmanl%C4%B1%20G%C3%B6lge/Screen_Shot_2025-07-25_at_01.03.00_AM.png)

Kodunuzdaki hata, **ikinci ve üçüncü gölge tanımlarında renk değerlerinin eksik olmasıdır**. `rgba()` renk formatını kullanırken, red, green, blue ve alpha (saydamlık) olmak üzere **dört değerin de belirtilmesi gerekir**.

Siz `rgba(0, 0, 0.14)` ve `rgba(0, 0, 0.12)` şeklinde yazmışsınız. Burada **'blue' (mavi) değeri eksik** ve **'alpha' (saydamlık) değeri de olması gerektiği gibi değil**. `0.14` ve `0.12` doğrudan alpha değeri olarak algılanıyor, oysa bunlar muhtemelen `rgba(0, 0, 0, 0.14)` ve `rgba(0, 0, 0, 0.12)` olmalıydı. Yani siyah rengin (0,0,0) belirli bir saydamlıkta olmasını istiyorsunuz.

**Doğru hali şöyle olmalı:**

CSS

`.club-list .item {
  flex-basis: calc((100% - 32px) / 3);
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0px 3px 3px -2px rgba(0, 0, 0, 0.2), /* İlk gölge doğru */
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), /* Düzeltildi: rgba(0, 0, 0, 0.14) olmalıydı */
    0px 1px 8px 0px rgba(0, 0, 0, 0.12); /* Düzeltildi: rgba(0, 0, 0, 0.12) olmalıydı */
}`

**Düzeltilmiş kod:**

CSS

`.club-list .item {
  flex-basis: calc((100% - 32px) / 3);
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), /* Rengi `rgba(0, 0, 0, 0.14)` olarak güncellendi */
    0px 1px 8px 0px rgba(0, 0, 0, 0.12); /* Rengi `rgba(0, 0, 0, 0.12)` olarak güncellendi */
}`