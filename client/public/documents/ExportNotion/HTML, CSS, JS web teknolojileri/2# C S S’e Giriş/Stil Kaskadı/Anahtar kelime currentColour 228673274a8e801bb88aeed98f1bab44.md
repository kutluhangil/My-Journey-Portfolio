# Anahtar kelime currentColour

Metin rengi (`color` özelliği) genellikle `inherit` değeri ile devralınır. Ancak, referanslar için `currentColor` (geçerli renk) anahtar kelimesi kullanılır. Bu özellik, mevcut metin rengini devralmak için kullanışlıdır. Şimdi, bu özelliği önceki örneğimize ekleyelim. Amacımız, bağlantı metninin rengini bölümden miras almak olacaktır.

`<section class="post">
  <h1>Lorem ipsum dolor sit</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
  <a href="" class="post-link">Read more...</a>
</section>
.post {
  color: green;
}

.post-link {
  color: currentColor;
}`

`currentColor` anahtar sözcüğünü kullanmadan önce ve kullandıktan sonra bağlantı metninin tarayıcıdaki görüntüsünü karşılaştırın.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/bf5244ec-4587-4d82-a3be-02b5ba6c0a17Untitled%20-%202024-03-28T144109.931.png)

Ayrıca, tekrarı azaltmak için `currentColor` öğenin rengiyle ilgili diğer öğe özellikleri için de kullanılabilir. Örneğin, bir bağlantı çerçevesinin rengi, metninin geçerli rengiyle aynı olmalıdır.

`<a href="" class="link">Lorem ipsum dolor sit amet</a>`

`.link {
  color: orangered;
	border: 1px solid currentcolor;
}`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ebec74c2-c7bd-4768-874c-08dbb4521eedScreenshot%202023-02-24%20at%2013.46.28.png)