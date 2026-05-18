# Betik bağlantısı → Script Dosyası Bağlantısı

JavaScript kodunu bir HTML sayfasına bağlamak için `<script>` etiketi kullanılır.

Bunu yapmanın birkaç farklı yolu vardır:

**Inline script**

JavaScript kodu doğrudan `<head>` etiketi içerisinde yer alan bir `<script>` bloğunun içine yazılabilir.

`<!DOCTYPE html>
<html>
<head>
    <title>My HTML-page</title>
    <script>
        *<!--JavaScript kodun burada-->*
        console.log("Hello, world");
    </script>
</head>
<body>
    *<!-- Sayfa içeriği -->*</body>
</html>`

**External script**

İlk olarak, JavaScript kodunu içeren `.js` uzantılı ayrı bir dosya oluşturmanız gerekir.

Daha sonra bu dosyayı, `<script>` etiketi aracılığıyla HTML sayfasına eklemelisiniz. Dosya yolunu `src` özniteliği (attribute) içinde belirtmeniz yeterlidir.

`<!DOCTYPE html>
<html>
<head>
    <title>My HTML-page</title>
    <script src="my-script.js" defer></script>
</head>
<body>
    *<!-- Sayfa içeriği -->*</body>
</html>`

Defer özelliğine sahip `<script>` etiketi hem `<head>` hem de `<body>` içine yerleştirilebilir ve bu kullanım arasında herhangi bir fark yoktur.

Bu örnekte, `my-script.js` dosyası sayfada çalıştırılacak JavaScript kodlarını içerir.

`defer` özniteliği, tarayıcıya HTML belgesi tamamen yüklendikten sonra bu betiğin çalıştırılması gerektiğini bildirir. Bu sayede sayfa içeriğinin görüntülenmesinde herhangi bir gecikme yaşanmaz.

Çoğu durumda, kodun daha okunabilir, desteklenebilir ve yeniden kullanılabilir olması için harici script dosyaları kullanmak daha iyi bir yaklaşımdır.

```
Kodunuzu VSCode editöründe yazarken ve içinde yüklü olan Live Server eklentisini kullanırken, script dosyasında yaptığınız değişiklikler kaydedildiğinde web sayfasının her seferinde otomatik olarak yeniden yükleneceğini unutmayın.
```