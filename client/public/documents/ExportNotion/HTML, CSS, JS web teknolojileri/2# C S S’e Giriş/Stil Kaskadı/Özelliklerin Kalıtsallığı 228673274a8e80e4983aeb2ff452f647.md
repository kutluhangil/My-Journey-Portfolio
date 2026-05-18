# Özelliklerin Kalıtsallığı

Genetik kalıtım yaşamda yaygındır. Örneğin, uzun boylu ebeveynlerin genellikle uzun boylu çocukları olur, saç rengi genellikle kalıtsaldır, vb. CSS'te de benzer bir durum söz konusudur. Bir ebeveyn öğenin metin rengini yeşil olarak ayarlarsanız, bu değer geçersiz kılınmadıkça tüm alt öğeleri de yeşil olacaktır.

**Kalıtsallık** — belirli özelliklerin bir üst öğeden alt öğelere aktarılmasını sağlayan bir mekanizmadır. Kalıtım genellikle metin tasarımı gibi özellikler için kullanılır ve bu, her bir alt öğe için stilleri ayrı ayrı belirtmek zorunda kalmadan stil uygulamanızı sağlar.

`<div class="post">
  <h1>Bu ayın popülerleri</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
  <a href="">Devamını oku...</a>
</div>`

Yazı metninin tamamını yeşil yapın.

`.post {
  color: green;
}`

Geliştirici araçlarında, en alttaki `Styles` sekmesinde paragraf ve başlık için kalıtım göreceksiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f977d480-f7c9-44ff-b7fa-b31958c47eacGroup%202233.png)

Hayatta, ebeveynlerin tüm özellikleri çocuklara tam olarak aktarılmaz. Benzer şekilde, CSS'de de her özellik varsayılan olarak çocuklar tarafından devralınmaz.

Aslında, tüm özellikler miras alınsaydı, etkisi hiç miras alınmaması ile aynı olurdu. Bu davranışı geçersiz kılmak için ebeveynden miras alınan stilleri geçersiz kılacak çok sayıda CSS yazmanız gerekir.