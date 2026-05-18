# HTML Etiket Açıklamaları

`<h1>`.…….`</h1>` - Başlık anlamına gelmektedir.

`<p>`.…….`</p>` - Paragraf başı yapılmaktadır.

<!-- --> - Yorum etiketi. Tarayıcı da bu gözükmez. Sadece Kodu bakanlar görmektedir.

<a> - Bağlantı veya metin oluşturmak için kullanılır. Bağlantıya tıklayarak başka bir sayfaya yönlendirilebilir, bir dosya indirilebilir vb. Bağlantının metni, tarayıcıda mavi renkte ve altı çizili olarak görüntülenir. Bir bağlantının üzerine geldiğinizde, fare imleci görünümünü değiştirir.

href="adres” - URL yer almaktadır.

target="_blank" - Bir bağlantının yönlendirdiği web sayfasının tarayıcıda yeni bir sekmede açılmasını istiyorsak, `<a>` etiketine `target="_blank"` özelliğini eklememiz gerekir. Bağlantılar varsayılan olarak mevcut sekmede açılır ve `target` özelliğinin varsayılan değeri `target="_self"`tir.

**Örnek**: <a href="[https://www.wikipedia.org](https://www.wikipedia.org/)" target="_blank">Wikipedia'yı yeni sekmede aç</a>

target=”_self” - özelliğinin varsayılan değeri `target="_self"`tir.

src="path” - Görselin yolu

`<img src` - Görsel göstermek için
`<img src="<https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg>" />`

`<ul>` (unordered list) etiketi, her bir öğesi küçük bir simgeyle (işaretçi) başlayan işaretli (düzensiz) bir liste oluşturur.

`<ol>` etiketi numaralı (sıralı) bir liste oluşturur, yani listedeki her öğe numaralandırılmıştır. Tarayıcı otomatik olarak öğeleri sırayla numaralandırır ve bu listeden bir veya birkaç öğe kaldırılırsa, diğer numaralar otomatik olarak yeniden numaralandırılır.

<br> etiketi HTML’de “break” yani “satır sonu” anlamına gelir. Bu etiket bir paragrafı ya da metin bloğunu bölmeden, sadece yazının bir sonraki satıra geçmesini sağlar.

href -  özelliği sayesinde bir bağlantıya tıklandığında kullanıcı başka bir sayfaya, dosyaya, e-posta adresine veya bir konum bağlantısına yönlendirilir.

`<header>` etiketi bir konteyner etiketidir, yani bir açılış etiketi, içerik ve bir kapanış etiketi içerir. Bir sayfanın başlığı, tüm sayfanın giriş kısmını vurgular. Karmaşık bir bölümün veya makalenin giriş kısmını vurgulamak için de bir başlık kullanabilirsiniz - modülün ilerleyen bölümlerinde bu tür örneklere bakacağız.

**<nav> etiketi**, bir web sayfasındaki **ana gezinme (navigasyon) bağlantılarını** gruplamak için kullanılır.

`<main>` etiketi, bir HTML belgesinin (web sayfası) ana içeriği için tasarlanmıştır. Bir sayfanın ana içeriği, sitenin diğer sayfalarında tekrarlanmayan ve belgenin ana konusuyla doğrudan ilgili olan benzersiz içeriktir.

`<title>` etiketi, HTML belgesinin başlık bilgilerini tanımlamak için kullanılır.

`<title>` etiketinin içindeki metin, tarayıcı sekmesinin adı olarak görüntülenir.

`<meta>` etiketi, tarayıcı ve arama motorlarına yönelik bilgileri saklamak için kullanılır:

- belge kodlamasının tanımlanması,
- arama motorlarına bilgi aktarımı vb.

Birden fazla meta etiketi olabilir, çünkü kullanılan niteliklere bağlı olarak farklı bilgiler taşırlar. `<meta>` etiketleri her zaman `<head>` öğesinin içinde yer alır.

```
<!DOCTYPE html>
<html lang="en"></html> - HTML kodu yazdığın bunları yazman gerekli. Biri hangi HTML sürümü diğeri de dili anlamına gelir.
```

```
<button type="button">Open sidebar</button>

```

![Screen Shot 2025-06-25 at 13.18.07 PM.png](HTML%20Etiket%20A%C3%A7%C4%B1klamalar%C4%B1/Screen_Shot_2025-06-25_at_13.18.07_PM.png)