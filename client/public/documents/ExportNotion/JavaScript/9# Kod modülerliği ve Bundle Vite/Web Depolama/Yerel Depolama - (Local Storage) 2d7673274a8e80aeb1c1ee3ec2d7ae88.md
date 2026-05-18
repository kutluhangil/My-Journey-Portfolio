# Yerel Depolama - (Local Storage)

Yerel depolamadaki veriler, belirli bir **anahtar** altında **JSON formatında** saklanır.

Bu anahtar yalnızca bir **dize (string)** olabilir ve değer olarak JSON formatında izin verilen herhangi bir veri türü kullanılabilir.

Yerel depolama, yaklaşık **5 MB ile 10 MB** arasında veri saklayabilir. Bu değer tarayıcıya göre değişiklik gösterebilir, ancak çerezlerin sunduğu 4 KB’lık kapasiteye kıyasla oldukça fazladır.

Varsayılan olarak, yerel depolamadaki verilerin bir **son kullanma süresi (expiration)**yoktur.

Bu veriler yalnızca:

- Tarayıcı ayarlarından,
- JavaScript kodu kullanılarak,
- veya kullanıcı tarafından manuel olarak

**silinmediği sürece** tarayıcıda kalmaya devam eder.

Bu da demektir ki yerel depolamadaki veriler, sekme veya pencere kapatılsa bile **saklanmaya devam eder**.

```
Her sitenin kendi yerel depolama alanı bulunduğundan, siteler arası veri karışıklığı yaşanmaz.

```

Yerel depolamaya, `window` nesnesi aracılığıyla erişilebilir:

```
console.log(window.localStorage);
// Storage {length: 0}
```

Ayrıca `window` global olduğu için doğrudan da erişebilirsiniz:

```
console.log(localStorage);
// Storage {length: 0}
```

İlk kullanımda yerel depo boş olduğundan `length` değeri `0` olarak görünür.

**Ne Zaman Kullanılır?**

Yerel depolamanın süresiz veri saklama özelliği, onu birçok kullanım senaryosu için uygun hâle getirir. Özellikle **kullanıcı arayüzü durumları** gibi tekrar eden verilerin saklanması için idealdir.

Örnek Kullanım Senaryoları:

- Açık / koyu tema tercihi
- Video izlenme durumu
- Sepete eklenen ürünler
- Kenar çubuğunun açık/kapalı durumu
- Kullanıcının varsayılan ödeme yöntemi
- Gönderim adresi tercihleri

Bu tür veriler, bir sonraki kullanıcı ziyaretinde geri yüklenerek **kişiselleştirilmiş bir deneyim** sunar.