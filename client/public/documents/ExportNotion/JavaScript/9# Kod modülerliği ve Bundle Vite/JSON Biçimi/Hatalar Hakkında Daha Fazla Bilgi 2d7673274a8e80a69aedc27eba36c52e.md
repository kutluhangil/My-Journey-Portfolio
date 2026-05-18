# Hatalar Hakkında Daha Fazla Bilgi

JavaScript’te kodlar hemen çalıştırılmaz.

İlk olarak, yorumlayıcının (interpreter) kodu okuyup genel olarak çalıştırılabilir olup olmadığını belirlemesi gerekir.

**Derleme Zamanı (Compile Time) / Değerlendirme Zamanı (Evaluation Time):**

- Bu, kodun çalıştırılmasından önceki hazırlık aşamasıdır. Yorumlayıcı bu aşamada sözdizimsel hataları, yazım hatalarını veya tanımsız yapıları tespit eder. Yani, kod henüz çalıştırılmaz; sadece incelenir ve değerlendirilir.

Bu aşama başarıyla geçilirse, kodun en azından sözdizimi açısından doğru olduğu ve çalıştırmaya hazır olduğu kabul edilir.

**Çalışma Zamanı (Runtime):**

- Bu aşamada script çalışmaya başlar. Fonksiyon çağrıları gerçekleştirilir, ifadeler değerlendirilir ve uygun değişkenler, tanımlayıcılar gibi yapılar görünürlük (scope) kuralları çerçevesinde aranır.

Eğer bu aşama da hatasız geçilirse, script beklendiği gibi çalışır. Ancak çalışma zamanında tür dönüşümü hataları, tanımsız değişkenler, erişilemeyen özellikler gibi hatalar oluşabilir.

Örnek:

Aşağıdaki kodu çalıştırmayı deneyin:

```
console.log('This message will not appear in the console');

cos value = 5;
```

Burada bilerek yapılmış bir hata var: `const` yerine yanlışlıkla `cos` yazılmış. Bu hata, **değerlendirme aşamasında** tespit edilir. Bu nedenle çalışma aşamasına bile geçilmez ve konsolda doğrudan bir sözdizim hatası mesajı görünür.

**Önemli Not:**

`try...catch` yapısı **yalnızca çalışma zamanı hatalarını** yakalayabilir.

Bu da demektir ki, kodun sözdizimsel olarak doğru olması gerekir; aksi hâlde çalıştırma aşaması hiç başlatılamaz.

Değerlendirme (parse) aşamasında meydana gelen hatalar, **ayrıştırma hataları**(parse errors) olarak adlandırılır ve `try...catch` bloğu tarafından yakalanamaz.