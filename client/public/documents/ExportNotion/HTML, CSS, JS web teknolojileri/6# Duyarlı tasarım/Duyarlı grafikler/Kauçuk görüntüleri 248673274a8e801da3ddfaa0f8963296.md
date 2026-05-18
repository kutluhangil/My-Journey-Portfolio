# Kauçuk görüntüleri

Örneğin, `1200x600` piksel boyutunda bir görüntü düşünün. Geniş bir ekranda mükemmel görünüyor olabilir. Ancak, bu görüntüyü bir telefon veya tablette açarsanız ne olur?

İyi olmaz.

Görüntü `1200` piksel genişliğinde kalır, bu da yatay kaydırma çubuğuna neden olur. Ve görüntü daha yüksek piksel yoğunluğuna sahip ekranlarda bulanık görünecektir.

**Kauçuk görüntüleri**, içerik ve arka plan görüntülerinin farklı ekran boyutları ve yoğunluklarına sahip cihazlarda eşit derecede iyi görünmesini sağlamak için HTML ve CSS'de kullanılan bir dizi teknik için kullanılan bir terimdir.

Bir görüntüyü kauçuk yapmak, yani tüm cihazlarda tek bir görüntü kullanarak uygun şekilde ölçeklenmesini sağlamak, duyarlı (responsive) tasarımın en kolay yollarından biridir. Bu, CSS ile belirli ayarlar yapılarak gerçekleştirilir. Aşağıdaki örnek, bu tekniğin nasıl uygulandığını gösterir:

`img {
  display: block;
  max-width: 100%;
}`

- Satır öğesinin alt “boşluğunu” kaldırmak için görüntü blok haline getirilmelidir.
- Maksimum `%100` genişlik, görüntünün gerektiğinde küçülmesini sağlar. Ancak, kaliteyi kaybetmemek için orijinal genişliğinin `%100`ünden daha fazla esnemeyecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/53dd1adf-2767-4076-908c-46acf5d5b7a2image%20%2871%29.png)

Basit lastik görüntü tekniği bu şekilde çalışır - tüm cihazlar için ana öğenin mevcut genişliğine göre ayarlanan tek bir görüntü.

Şimdi `div.thumb` görseli için bir kutu oluşturalım ve minimum ve maksimum genişliğini ayarlayalım. Görüntüye duyarlı özellikler verin. Artık görüntü her zaman “thumb ”ı güzel bir şekilde dolduracak ve boyutunu üst öğenin genişliğine bağlı olarak değiştirecektir.

Örnek sayfaya gidin ve sonuç alanının genişliğini değiştirerek nasıl çalıştığını görün.

![Screen Shot 2025-08-07 at 23.17.56 PM.png](Kau%C3%A7uk%20g%C3%B6r%C3%BCnt%C3%BCleri/Screen_Shot_2025-08-07_at_23.17.56_PM.png)

# **Sonuç alanının genişliğini nasıl değiştirebilirim?**

[Bağlantıyı](https://codepen.io/goit-academy/full/RwrKzoE) takip edin ve goit sayfası örneğinde gösterildiği gibi duyarlı düzen için geliştirici araçlarını kullanın:

- geliştirici araçlarını açın (Windows ve Linux için **Ctrl + Shift + I**, macOS için cmd + **Shift + I**).
- Toggle device araç çubuğunu etkinleştirmek için `1` simgesine tıklayın (yukarıdaki şemaya bakın). Bu moddan çıkmak için `1` simgesine tekrar tıklayın.
- Görüntü alanının genişliğini basitçe esneterek değiştirin. Bunu yapmak için `2` kontrolünü kullanın. Etki, tarayıcı penceresinin gerilmesi veya sıkıştırılması ve böylece görüntü alanının genişliğinin değiştirilmesi gibidir.

Belgenin tüm resimlerine, CSS düzenleyicisinde bir kural ekleyerek seçici uygulayın. Resimlerin köşelerini yuvarlamak için gerekli özellikleri belirtin.

- Kodda `img` seçicisine ilişkin bir kural bulunmalıdır.
- `img` seçicisi, `display` özelliği `block` değeriyle birlikte bulunmalıdır.
- `img` seçicisiyle birlikte `max-width` özelliği `100%` değeriyle belirtilmelidir.

![Screen Shot 2025-08-07 at 23.21.40 PM.png](Kau%C3%A7uk%20g%C3%B6r%C3%BCnt%C3%BCleri/Screen_Shot_2025-08-07_at_23.21.40_PM.png)