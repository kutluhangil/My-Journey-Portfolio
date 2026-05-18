# letter-spacing özelliği

`letter-spacing` özelliği karakterler arasındaki aralığı tanımlar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/5fde1585-038c-4096-aa61-1dee0137d653Untitled%20%2832%29.jpeg)

Varsayılan olarak, karakter aralığı yazı tipinin türüne ve tipine, boyutuna ve işletim sistemi ayarlarına bağlı olarak ayarlanır.

`letter-spacing: değer | normal | inherit`

Bazen tasarımcılar karakter aralığı için standart olmayan bir değer belirler. `letter-spacing` özelliği de bu yüzden vardır.

`<section class="post">
  <h1 class="post-title">Lorem ipsum dolor sit amet</h1>
  <p class="post-text">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.Obcaecati
    commodi, veritatis nihil alias iste odit similique sit eius optio veniam,
    impedit cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
</section>`

Netlik açısından, başlık ve paragraf metni için büyük `letter-spacing` değerleri belirleyelim.

`.post-title {
  letter-spacing: 10px;
}

.post-text {
  letter-spacing: 5px;
}`

Ana sayfa başlığını `3px` ve bölüm başlıklarını `1px` karakter aralığına sahip olacak şekilde ayarlayın. Mevcut CSS kurallarını kullanın.

- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `letter-spacing` değeri `3px` olmalıdır.
- Stil sayfasında `.section-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.section-title` seçicisine sahip CSS kuralının `letter-spacing`değeri `1px` olmalıdır.

![Screen Shot 2025-07-07 at 23.07.30 PM.png](letter-spacing%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-07_at_23.07.30_PM.png)