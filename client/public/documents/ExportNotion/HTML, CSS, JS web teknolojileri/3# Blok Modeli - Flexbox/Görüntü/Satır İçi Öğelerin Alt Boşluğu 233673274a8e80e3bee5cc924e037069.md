# Satır İçi Öğelerin Alt Boşluğu

Bir görüntü satır içi bir elemandır. Bu nedenle, iki görüntü veya bir görüntü ile başka bir satır içi öğe arasında yatay bir mesafe olacaktır. Bu durumu zaten biliyoruz ve yakında nasıl aşılacağını öğreneceğiz.

Bir resim özel bir öğedir çünkü sağ kenar boşluğuna ek olarak, yatay kenar boşluğu ile aynı boyutta olan bir alt kenar boşluğuna sahiptir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/eed7ef47-8905-4165-8582-eda291b00f40Frame%2048032.png)

Pratikte bu boşluğa hiçbir zaman ihtiyaç duyulmaz ve sadece engel olur. Bunu kaldırmak çok kolaydır. Sadece görüntüyü bir blok öğesi yapın!

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8d801aed-c29a-4e08-b74a-8c14fddf6dd4Frame%2048033%20%281%29.png)

Canlı örnekte, `div.card` öğesi kırmızı bir arka plan rengine sahiptir.

Kart 1, resim ve başlık arasında bu renkte bir arka plana sahip bir şeride sahiptir.

Kart 2'de bu şerit yoktur. Bunun nedeni, ikinci kart için öğe türünün blok olarak değiştirilmiş olmasıdır. Sonuç olarak, alttaki boşluk kaybolmuştur.

- **CSS** sekmesinde, kart 2'nin görüntü için öğe türünü değiştirecek ayarlara sahip olup olmadığını kontrol edin.

`.card-image.no-gap {
  display: block;
}`