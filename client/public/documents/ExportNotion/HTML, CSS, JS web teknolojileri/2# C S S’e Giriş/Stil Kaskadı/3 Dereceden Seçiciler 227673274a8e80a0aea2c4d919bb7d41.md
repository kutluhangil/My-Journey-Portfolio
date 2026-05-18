# 3. Dereceden Seçiciler

1. derece seçiciler şunlardır:
- sınıf seçicileri **(.X)**;
- nitelik seçicileri;
- sözde sınıf seçiciler (:hover, :active, :focus vs.)**.**

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/40921da9-4e6c-4fb1-9c0a-9302fa9daba8Untitled%20%2827%29.jpeg)

Her sınıf, nitelik ve sözde sınıf seçici üçüncü sıraya bir tane ekler.

`<div class="post">
  <h1 class="post-title">Lorem ipsum dolor sit amet</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
  <a href="" class="post-link">Devamı...</a>
</div>`

Başlık metninin rengi turuncu olacaktır, çünkü üçüncü kuralın özgüllüğü daha yüksektir.

`*/* Özgüllük - 0 0 1 0 */*.post-title {
  color: green;
}

*/* Özgüllük - 0 0 1 1 */*.post > h1 {
  color: red;
}

*/* ✅ Özgüllük - 0 0 2 0 */*.post > .post-title {
  color: orange;
}`

Beşinci kuralın özgüllüğü daha yüksek olduğu için bağlantı metninin rengi kahverengi olacaktır.

`*/* Özgüllük - 0 0 0 1 */*a {
  color: green;
}

*/* Özgüllük - 0 0 1 0 */*.post-link {
  color: orange;
}

*/* Özgüllük - 0 0 1 1 */*a.post-link {
  color: blue;
}

*/* Özgüllük - 0 0 2 0 */*.post > .post-link {
  color: red;
}

*/* ✅ Özgüllük - 0 0 2 1 */*.post > a.post-link {
  color: brown;
}`