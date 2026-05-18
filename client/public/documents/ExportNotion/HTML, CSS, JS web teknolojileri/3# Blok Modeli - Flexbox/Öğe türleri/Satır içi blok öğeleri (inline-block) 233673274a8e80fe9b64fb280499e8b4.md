# Satır içi blok öğeleri (inline-block)

**inline-block öğeleri**, blok ve satır içi öğeler arasında bir köprü görevi gören hibrit öğelerdir.

- Bunlar `display: inline-block` özelliği ile tanımlanır.
- Genişlikleri ve yükseklikleri içeriğe bağlıdır, ancak `width` ve `height` özelliklerini doğrudan ayarlayabilirsiniz.
- Yeterli alan mevcut olduğunda aynı satıra yerleştirilirler; alan kalmadığında yeni öğeler bir sonraki satıra taşınır.
- Genişlik, yükseklik, kenar boşlukları, kenarlıklar ve dolgu gibi geometri özellikleri ayarlanabilir.

**Inline-block öğeleri**, satır içi öğelere dekoratif etkiler eklemek istediğinizde kullanışlıdır.

Örnek kullanım senaryoları:

- Bir bağlantı için dikey dolgu, kenar boşlukları veya yükseklik ile genişlik ayarlayarak görsel olarak bir butona dönüştürün;
- Bir `span>` öğesini sabit boyutlara sahip bir simgeye dönüştürme.

`<a href="" class="link">Daha fazla bilgi</a>`

`display` özelliğini kullanarak öğe türünü değiştirebilir ve bağlantının dikey dolgu ve diğer geometrik özelliklerini ayarlayabilirsiniz (varsayılan olarak bir satır içi öğedir).

`.link {
  display: inline-block;
  padding: 16px 32px;

  border-radius: 3px;
  background-color: teal;
  color: white;

  font-family: sans-serif;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
}`