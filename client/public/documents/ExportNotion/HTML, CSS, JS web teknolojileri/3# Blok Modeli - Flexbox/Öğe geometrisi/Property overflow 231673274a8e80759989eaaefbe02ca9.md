# Property overflow

Bir elemanın boyutları:

1. İçindeki içerik tarafından belirlenir veya
2. Açıkça ayarlanır.

Elemanın içindeki içerik değiştiğinde ne olur?

İlk durumda, elemanın yüksekliği açıkça ayarlanmadığında, tüm içerik sığana kadar yükseklik artar.

İkinci durumda, genişlik ve yükseklik açıkça ayarlanır. Sonuç olarak, blok büyüyemez ve içerik taşar, yani sınırlarının ötesine geçer.

`overflow` özelliği, elemanın boyutlarını aştığında içeriğin nasıl davranacağını kontrol eder.

`overflow: visible | hidden | scroll | auto`

```
Ayrıca, sadece yatay veya dikey taşmayı kontrol edenoverflow-x veoverflow-y özellikleri de vardır.
```

[**Özellik overflow: visible;**](Property%20overflow/%C3%96zellik%20overflow%20visible;%20231673274a8e801985aeff374a1bb723.md)

[**Özellik overflow: hidden;**](Property%20overflow/%C3%96zellik%20overflow%20hidden;%20231673274a8e809a9425c5baeb2b6d37.md)

[**Özellik overflow: scroll;**](Property%20overflow/%C3%96zellik%20overflow%20scroll;%20231673274a8e80ceb144d4b119781fec.md)

[**Özellik overflow: auto;**](Property%20overflow/%C3%96zellik%20overflow%20auto;%20231673274a8e80f891bfc5a3b1d4b2c2.md)

| **Değer** | **Anlamı** |
| --- | --- |
| visible | Taşan içerik kutunun dışına çıkar ve **görünür olmaya devam eder**. Ancak **kaydırma çubuğu çıkmaz**. |
| hidden | Taşan içerik tamamen **gizlenir**. Görünmez olur. Kaydırma da yoktur. |
| scroll | İçerik taşsa da taşmasa da **her zaman kaydırma çubuğu gösterilir**. |
| auto | **Eğer içerik taşarsa**, kaydırma çubuğu otomatik olarak çıkar. |