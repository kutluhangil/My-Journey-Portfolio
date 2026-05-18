# Etiketlerin iç içe geçmesi. Resim bağlantıları

Bağlantıların sadece metinle sınırlı olmadığını bilmelisiniz. Özellikle çevrimiçi mağazalarda, ürün listesindeki bir ürün görseline tıklamak kullanıcıyı ürün sayfasına gönderir.

Bir resim bağlantısı oluşturmak için `<a>` bağlantısının içine `<img>` etiketini yerleştirin. Bu, metin içeriği yerine bir görsel kullanmanızı sağlar. Ayrıca, resimle ilgili herhangi bir sorun olması durumunda açıklayıcı bir metin sağlamak için `alt` niteliğini eklediğinizden emin olun. `Alt` kullanımı, hem yardımcı teknolojilerin doğru çalışmasını hem de arama motorlarında sıralamanızın yükselmesini sağlar.

`<a href="<https://www.pexels.com/photo/animals-sweet-cat-kitty-57416/>">
  <img
    src="<https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?w=640>"
    alt="Kırmızı kedi"
    width="640"
  />
</a>`

Nasıl çalışır?

1. Fareyi bir resmin üzerine getirdiğinizde, imleç fare imlecinden bağlantı imlecine dönüşür.
2. Resme tıkladığınızda, kullanıcı bağlantının `href` niteliğinde belirtilen adrese gider. Varsayılan olarak, bağlantı geçerli sekmede açılır. Yeni bir sekmede açmak için `target="_blank"` niteliğini ekleyebilirsiniz.