# font-style özelliği

`font-style` özelliği, metnin yazı tipinin stilini belirler. Bu özellik, metni italik yapmak için kullanılabilir.

`font-style: normal | italic | oblique | initial | inherit`

Ancak, tüm değerlerden sadece ikisi yaygın olarak kullanılır:

- `normal` - çoğu etikette varsayılan değerdir;
- `italic` - metin italik olarak (eğik).

`<h1 сlass="title">Iste odit similique sit</h1>
<p class="text">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
  veritatis nihil alias iste odit similique sit eius optio veniam, impedit
  cumque fuga facere labore quo id necessitatibus quaerat rerum.
</p>`

Başlık metnini italik yapmak için şu CSS kuralını ekleyelim:

`.title {
  font-style: italic;
}`

`h1` başlığını italik yazı tipi olarak ayarlayın.

- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `font-style` özelliği `italic` değerine sahip olmalıdır.
    
    ![Screen Shot 2025-07-06 at 23.59.06 PM.png](font-style%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-06_at_23.59.06_PM.png)