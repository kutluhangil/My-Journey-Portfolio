# text-align özelliği

`text-align` özelliği, metin içeriğinin yatay hizalamasını kontrol eder.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f53571cd-3cd1-48f4-a6b0-f9b38b97cd5fUntitled%20%2831%29.jpeg)

`text-align: left | right | center | justify`

Varsayılan olarak, metin `left` olarak (sola) hizalanır.

`<section class="post">
  <h1 class="post-title">Lorem ipsum dolor sit amet</h1>
  <p class="align-right">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
  <p class="align-justify">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
</section>`

Başlık metnini ortalayın ve paragraf metnini sağa ve eşit olarak hizalayın.

`.post-title {
  text-align: center;
}

.align-right {
  text-align: right;
}

.align-justify {
  text-align: justify;
}`

```
justify değeri, metni hem sağa hem de sola eşit şekilde hizalar, ancak bu yöntemin okunabilirliği azaltabileceğini unutmayın. Çünkü kelimeler arasındaki boşluklar farklı uzunluklara sahip olabilir, bu da metnin algılanmasını olumsuz etkiler.
```

Birinci ve üçüncü seviye başlıkların metnini ortalayın. Mevcut CSS kurallarını uygulayın.

- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `text-align` özelliği `center` değerine sahip olmalıdır.
- Stil sayfasında `.club-list .title` seçicisine sahip bir CSS kuralı vardır
- `.club-list .title` seçicisine sahip CSS kuralının `text-align`özelliği `center` değerine sahip olmalıdır.

![Screen Shot 2025-07-07 at 22.57.16 PM.png](text-align%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-07_at_22.57.16_PM.png)