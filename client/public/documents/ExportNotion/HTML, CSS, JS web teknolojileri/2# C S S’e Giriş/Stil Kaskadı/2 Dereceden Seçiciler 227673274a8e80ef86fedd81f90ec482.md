# 2. Dereceden Seçiciler

2. sıra seçiciler, 3. sıra seçicilerden daha yüksek önceliğe sahiptir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/92a6e9bc-f000-4448-85a2-be51fed95b97Untitled%20%2828%29.jpeg)

Her tanımlayıcı seçici ikinci sıraya bir ekler.

`<div class="post">
  <h1 class="post-title" id="title">Lorem ipsum dolor sit amet</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
  <a href="" class="post-link">Devamı...</a>
</div>`

İkinci kuralın özgüllüğü daha yüksek olduğu için başlık metninin rengi turuncu olacaktır.

`*/* Özgüllük - 0 0 1 0 */*.post-title {
  color: green;
}

*/* ✅ Özgüllük - 0 1 0 0 */*#title {
  color: orange;
}`