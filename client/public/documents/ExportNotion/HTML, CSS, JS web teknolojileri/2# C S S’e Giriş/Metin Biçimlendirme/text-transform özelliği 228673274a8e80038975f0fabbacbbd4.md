# text-transform özelliği

`text-transform` özelliği, metindeki karakterlerin büyük/küçük harf durumunu belirtir ve metni tümüyle büyük harfli, küçük harfli veya baş harfleri büyük yapabilir. Biçimlendirme, metnin dil kurallarına göre yazılmasıyla başlar ve ardından `text-transform` özelliği kullanılarak istenilen görünüm elde edilir. Sonuç olarak, tüm bu tasarım ayarları CSS’de yapılmalıdır.

`text-transform: none | uppercase | lowercase | capitalize`

Örneğin, bir navigasyon menüsünün düzenini oluşturalım. Menü öğelerinin metinleri büyük harflerle yazılmalıdır. Bu metinler dil kurallarına göre yazıldıktan sonra, CSS ile tüm harfleri büyük yapacağız.

`<ul class="site-nav">
  <li><a href="" class="link">Blog</a></li>
  <li><a href="" class="link">Workshops</a></li>
  <li><a href="" class="link">Podcasts</a></li>
  <li><a href="" class="link">About</a></li>
</ul>`

Bundan sonra, stillerde, bağlantı metninin tüm harflerini büyük yaparız.

`.site-nav .link {
  text-transform: uppercase;
}`

Navigasyon bağlantılarına bir göz atalım. Bağlantıların tüm metni büyük harflerle yazılmalı ve yazı tipi boyutu `14px` olmalıdır.

Mevcut CSS kurallarını kullanın.

- Stil sayfasında `.page-nav .link` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-nav .link` seçicisine sahip CSS kuralının `text-transform`özelliği `uppercase` değerine sahip olmalıdır.
- `.page-nav .link` seçicisine sahip CSS kuralının değeri `font-size`özelliği `14px` olmalıdır.

![Screen Shot 2025-07-07 at 01.29.22 AM.png](text-transform%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-07_at_01.29.22_AM.png)