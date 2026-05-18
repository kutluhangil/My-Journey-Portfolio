# Özellikler: <a> etiketi ve href özniteliği

Öznitelikler, elemanların özelliklerini ve davranışını değiştirmek için kullanılan ek ayarlardır.

Etiketler zorunlu veya isteğe bağlı özniteliklere sahip olabilir ve birden fazla öznitelik taşıyabilir veya hiç taşımayabilir.

Öznitelikler açılış etiketinin içine yazılır ve değerleri çift tırnak içinde belirtilir. Birden fazla öznitelik boşluklarla ayrılır.

`<a href="<https://google.com>" class="link">...</a>
<img src="cat.jpg" alt="cute cat" />
<input type="text" name="user_name" />
<button type="submit">...</button>`

```
Yararlı Bilgi!
Bir etiket için hangi niteliklerin mevcut olduğunu ve niteliklerin nasıl atanacağını öğrenmek için belgelere veyahtmlreference.io gibi bir referans kaynağına başvurabilirsiniz.

```

Şimdi `<a>` etiketi örneğini kullanarak nitelikleri olan bir etiketin yapısına bakalım. Bağlantı veya metin oluşturmak için kullanılır. Bağlantıya tıklayarak başka bir sayfaya yönlendirilebilir, bir dosya indirilebilir vb. Bağlantının metni, tarayıcıda mavi renkte ve altı çizili olarak görüntülenir. Bir bağlantının üzerine geldiğinizde, fare imleci görünümünü değiştirir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/c5cf9377-4648-46e3-b8ab-d4db03ad8762Frame%2047611.png)

Bağlantının adresi zorunlu `href="adres"` niteliğinde belirtilir; burada adres bir sayfaya, dosyaya veya herhangi bir kaynağa işaret eden bir URL'dir.

`<a href="<https://google.com>">Google ana sayfasına bağlantı</a>`

URL (*Uniform Resource Locator'ın kısaltması)*, bir İnternet kaynağının sayfasına giden yolu gösteren benzersiz bir karakter kümesidir, örneğin [https://goit.global](https://goit.global/tr/).

```
Özniteliklerin temel özelliklerini hatırlayın:
— Öznitelikler etiketleri değiştirir veya etiketlere ek özellikler ekler.
— Bir etiket içindeki birden fazla öznitelik bir boşlukla ayrılır.
— Öznitelikler ve değerleri açılış etiketinin içinde yer alır.
— "=" işareti bir nitelik ile değeri arasına yerleştirilir.
```

Örnek:

<!-- Recipe page markup -->
<h1>Sweet cheese pancakes</h1>
<p>
A light and gently sweet breakfast dish or a dessert for picky eaters. With
crispy coating and the light and soft inside, you get a lovely balance of
flavors and textures.These delicious pancakes pair perfectly with sour cream
and fruit in pretty much any form.
</p>

Sitedeki her tarifin bir yazarı var. Tarif sayfasına, açıklamanın hemen altına yazarın profiline bir bağlantı ekleyin.

- `<a>` açılış etiketi olmalıdır
- `</a>` kapanış etiketi olmalıdır
- Bağlantı etiketinin içeriği `Author's profile` olmalıdır.
- Bağlantı `href` niteliğine sahiptir
- `href` niteliğinin değeri `https://instagram.com/goitclub` şeklindedir
- Yazarın profiline giden bağlantı tarif açıklamasından sonra yer almalıdır.

CEVAP: <a href="[https://instagram.com/goitclub](https://instagram.com/goitclub)">Author's profile</a>

# **Bağlantı: target özniteliği**

Bir bağlantının yönlendirdiği web sayfasının tarayıcıda yeni bir sekmede açılmasını istiyorsak, `<a>` etiketine `target="_blank"` özelliğini eklememiz gerekir.

Bağlantılar varsayılan olarak mevcut sekmede açılır ve `target` özelliğinin varsayılan değeri `target="_self"`tir.

`*<!-- Harici kaynağın bağlantısı geçerli sekmede açılacaktır -->*<a href="<https://goit.global/>">GoIT</a>

*<!-- Harici kaynağın bağlantısı yeni bir sekmede açılacaktır -->*<a href="<https://goit.global/>" target="_blank">
  GoIT
</a>`

Örnek: <a href="[https://instagram.com/goitclub](https://instagram.com/goitclub)" target="_blank">Author's profile</a>