# Vektörel Grafikler

**SVG (Scalable Vector Graphics)** — vektör görüntülerini tanımlamak için kullanılan bir grafik formatı ve dilidir. Dosyanın içinde ikili değil, nesneleri, etkilerini ve davranışlarını açıklayan düz metin (XML) bulunur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/33df726d-3eb6-40de-be25-28443071a2fcFrame%2048365.png)

Vektör grafiklerinin bir dizi avantajı vardır.

- **Ölçeklendirme** — Raster grafiklerin aksine SVG ölçeklendirildiğinde kalite kaybı yaşamaz.
- **Dosya boyutu** — simgeler veya diğer soyut grafikler için kullanıldığında vektör görüntüleri raster görüntülerden çok daha hafiftir. Gerçekçi görüntüler için vektör kullanmak ise tam tersine büyük bir dosya boyutuna yol açar.
- **Dinamiklik** — CSS ve JavaScript kullanarak, renk veya kenarlıklar gibi bir vektör görüntüsünün parametrelerini değiştirebilirsiniz.

Vektör grafiklerinin, tıpkı raster görüntüler gibi, `img` öğesi kullanılarak eklenebileceğini zaten biliyoruz. Şunları belirtmek yeterlidir:

- görüntüye giden yol;
- metnin açıklaması;
- diğer nitelikler (gerekirse).

`<img src="path/to/image.svg" alt="Description" />`

Aynı SVG simgesini kullanarak farklı boyutlarda üç `img` öğesi oluşturalım.

![Screen Shot 2025-07-25 at 01.08.39 AM.png](Vekt%C3%B6rel%20Grafikler/Screen_Shot_2025-07-25_at_01.08.39_AM.png)

Web sayfası maksimum ölçeklendirilse bile pikselleşme olmaz, çünkü `<img>` öğesinde, SVG dosyası içinde belirtilen formüller kullanılarak vektör de tarayıcı tarafından çizilir.

Bir vektör görüntüsü, `background-image` özelliğindeki bir öğenin arka planı olarak da kullanılabilir.

![Screen Shot 2025-07-25 at 01.08.42 AM.png](Vekt%C3%B6rel%20Grafikler/Screen_Shot_2025-07-25_at_01.08.42_AM.png)

Tıpkı raster grafiklerde olduğu gibi vektör arka planlarıyla da her türlü manipülasyonu gerçekleştirebilirsiniz.