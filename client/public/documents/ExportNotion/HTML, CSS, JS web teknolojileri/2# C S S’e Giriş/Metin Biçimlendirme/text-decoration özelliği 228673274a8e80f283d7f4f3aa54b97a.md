# text-decoration özelliği

`text-decoration` özelliği çeşitli metin süsleme efektlerini ayarlar: altı çizili, üstü çizili ve üstü çizgili.

`text-decoration: none | underline | line-through | overline`

Tarayıcının stil sayfası çoğu öğeyi `none` olarak ayarlar. Ancak, örneğin, bağlantılar varsayılan olarak `underline` olarak ayarlanmıştır.

`<h1 class="title">Iste odit similique sit</h1>
<p class="text">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
  <a href="">veritatis nihil alias iste</a> odit similique sit eius optio veniam,
  impedit cumque fuga facere labore quo id necessitatibus quaerat rerum.
</p>
<a href="" class="link">Read more...</a>`

Bağlantılar için diğer özellikleri şu şekilde ayarlayabilirsiniz:

`.text > a {
  text-decoration: line-through;
}

.link {
  text-decoration: none;
}`

Şimdi `text-decoration` özelliğini kullanalım ve bağlantıyı şekillendirelim. Kulüp listesinin `club-list` bölümündeki bağlantıları başlangıçta altı çizili olmayacak, ancak üzerine geldiğinizde veya klavye ile odaklandığınızda altı çizili görünecek şekilde yapılandırın.

Mevcut CSS kurallarını kullanın.

- Stil sayfasında `.club-list .link` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .link` seçicisine sahip CSS kuralının `text-decoration`özelliği `none` değerine sahip olmalıdır.
- Stil sayfasında `.club-list .link:hover, .club-list .link:focus`seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.club-list .link:hover, .club-list .link:focus` seçicisine sahip CSS kuralının `text-decoration` özelliği `underline` değerine sahip olmalıdır.
    
    ![Screen Shot 2025-07-07 at 01.23.49 AM.png](text-decoration%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-07_at_01.23.49_AM.png)