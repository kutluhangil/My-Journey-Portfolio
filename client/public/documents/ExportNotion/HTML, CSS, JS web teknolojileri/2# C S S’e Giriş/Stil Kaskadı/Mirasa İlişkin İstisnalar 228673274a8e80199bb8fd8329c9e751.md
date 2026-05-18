# Mirasa İlişkin İstisnalar

Tüm öğeler ata özelliklerinin değerlerini miras almaz. Örneğin, bir bağlantı metnin rengini miras almaz.

`<section class="post">
  <h1>Bu ayın popülerleri</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
  <a href="" class="post-link">Devamını oku...</a>
</section>`

Eğer bağlantının metninin geri kalanıyla aynı renkte olmasını istiyorsanız, `color` özelliği için `inherit` değerini kullanabilirsiniz. Bu şekilde, rengi iki yerde tekrar belirtmek zorunda kalmazsınız.

`.post {
  color: green;
}

.post-link {
  color: inherit;
}`

```
inherit değeri tarayıcıya, öğenin özellik değerini üst öğeden devralması gerektiğini söyler.
```