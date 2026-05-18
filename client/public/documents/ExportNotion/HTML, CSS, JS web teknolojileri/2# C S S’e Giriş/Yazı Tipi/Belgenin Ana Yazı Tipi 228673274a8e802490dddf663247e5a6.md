# Belgenin Ana Yazı Tipi

Bir web sayfası genellikle tek bir stilde tasarlanır. Genellikle şunlar bulunur:

- **ana yazı tipi** — metnin büyük çoğunluğu için geçerlidir;
- **yardımcı yazı tipleri** — dekorasyon amacıyla, örneğin başlıklar ve/veya bağlantılar sayfanın ana metninden farklı bir yazı tipinde görüntülenebilir.

`font-family` özelliği çoğu öğe tarafından miras alınır, bu nedenle `body` öğesine ayarlanır. Yazı tipi kalıtımının istisnalarına daha sonra bakacağız.

`body {
  font-family: 'Helvetica Neue', 'Roboto', 'Verdana', sans-serif;
}`

`body` seçicisi her zaman bir dizi olası yazı tipini listeler. Eğer listedeki yazı tiplerinden hiçbiri bulunamazsa, en son belirtilen yazı tipi ailesi kullanılır. Bu durumda, kullanıcının sisteminde mevcut olan bu aileden standart yazı tipi kullanılır.

Eğer bir öğeyi ana yazı tipinden farklı bir yazı tipinde görüntülemek istiyorsanız:

- Bir HTML belgesinde, ayrı bir yazı tipine sahip olacak bir öğe tanımlayın;
- CSS kuralında, `font-family` özelliğinin değerini geçersiz kılın.

`<h1 class="page-title">Super cool page title</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias reiciendis,
dignissimos, placeat eius repellat earum est ea cum id voluptatum quo. Expedita
suscipit quis quidem, placeat voluptatum ducimus nisi dolores!</p>`

`.page-title {
	font-family: 'Tahoma';
}`

Belgenin yazı tipini `body` seçicisiyle bir CSS kuralında ayarlayın. İşte kullanılabilecek olası yazı tiplerinin bir listesi:

```
"Helvetica Neue", "Roboto", "Verdana", sans-serif

```

- Stil sayfasında `body` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `body` seçicisine sahip CSS kuralının `font-family` özelliği `"Helvetica Neue", "Roboto", "Verdana", sans-serif` değerine sahip olmalıdır.

.page-title {
font-family: "Georgia", serif;
}
body {
font-family: "Helvetica Neue", "Roboto", "Verdana", sans-serif;
}