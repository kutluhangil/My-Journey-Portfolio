# Bir medya isteğinin anatomisi

Bir medya isteği `@media` yönergesi ile bildirilir ve bunu şu yönerge izleyebilir:

- media-type
- medya özelliği türü (media-feature)

Medya türü ve medya özelliği, bir cihazın özelliklerini (örneğin, görüntüleme alanının genişliği) kontrol eden ifadelerdir.

`@media media-type and (media-feature) {
  /*
  * Uygulanacak bir CSS kuralları kümesi,
  * medya türü ve işlevi kontrol koşulu doğruysa
  */
}`

Bir medya türü ve bir medya işlevi, doğru veya yanlış döndüren mantıksal ifadelerdir. Örneğin, görüntü alanının genişliği `900px` veya daha fazla olduğunda `<body>` arka planını turuncu yapmak istiyorsanız, aşağıdaki medya sorgusunu yazmanız gerekir.

`@media screen and (min-width: 900px) {
  body {
    background-color: orange;
  }
}`

İnsan dilinde bu şu şekilde okunabilir: "sayfa en az **900 piksel genişliğinde** bir **ekranda** görüntüleniyorsa, belirtilen **CSS kuralını** **uygulamanız** gerekir".

Canlı örnek sayfasına gidin ve sonuçla birlikte alanın genişliğini değiştirin. `<body>` arka plan rengi, 600 ve 900 piksel kesme noktalarına sahip medya sorgularında belirtilen görüntü alanının genişliğine bağlı olarak değişecektir.