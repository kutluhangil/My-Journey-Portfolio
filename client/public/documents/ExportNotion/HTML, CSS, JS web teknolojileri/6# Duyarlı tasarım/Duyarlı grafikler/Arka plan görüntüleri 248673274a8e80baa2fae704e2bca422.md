# Arka plan görüntüleri

Bitmap arka planların da yüksek yoğunluklu ekranlar için hazırlanması gerekir. Arka plan görüntüsünü retina ekranlara uyumlu hale getirmek için, öğenin arka plan boyutunu öğenin kendisiyle aynı boyuta ayarlamak gereklidir.

`.box {
  width: 200px;
  height: 300px;
  background-image: url('photo.png');
  background-size: 200px 300px;
}`

Eğer elemanın sabit bir genişliği ve yüksekliği yoksa, yani boyutları ebeveyn öğeye bağlıysa, arka plan boyutu `cover` olarak ayarlanabilir. Bu ayar, arka plan görüntüsünün öğeyi tamamen kaplamasını sağlar.

`.box {
  background-image: url('photo.png');
  background-size: cover;
}`

**Ekran Piksel Yoğunluğu**

Arka planın görüntü kalitesi, **ekranın piksel yoğunluğuna** da bağlıdır ve bu yoğunluk **medya sorguları** ile kontrol edilebilir. **`resolution`** medya fonksiyonu **belirli bir piksel yoğunluğunu** test ederken, **`min-resolution`** ve **`max-resolution`** ise **alt** ve **üst** sınırları belirler. Bu, yüksek çözünürlüklü (Retina) arka plan görüntülerini destekleyen cihazlara yüklemek için kullanılabilir.

```
Medya sorguları, üç farklı ölçüm birimiyle sayısal değerler alır: dpi (inç başına nokta), dpcm (santimetre başına nokta) veya dppx (piksel başına nokta).
CSS’de 1 piksel her zaman 96dpi’ye eşittir, bu nedenle1dppxstandart ekran anlamına gelirken,2dppxRetina ekran anlamına gelir.

```

`dppx` yerine sadece `x` kullanılabilir, böylece CSS kodunuz şu şekilde görünebilir:

`.box {
  */* Standart arka plan */*
}

@media (min-resolution: 2x) {
  .box {
	  */* Retina ekranlar için arka plan */*
	}
}`

Tam kod örneği:

`*/* Temel stiller ve 1x görüntü */*.box {
  width: 200px;
  height: 300px;
  background-image: url('photo.png');
  background-size: 200px 300px;
}

*/* Eğer ekran yoğunluğu en az 2x ise,
   görüntü yolunu değiştiriyoruz */*@media (min-resolution: 2x) {
  .box {
    background-image: url('photo@2x.png');
  }
}`

Örnekte, aynı arka plan görüntüsü standart (`1x`) ve çift (`2x`) piksel yoğunluğuna sahip ekranlar için farklı boyutlarda ayarlanmıştır.

![Screen Shot 2025-08-07 at 23.30.52 PM.png](Arka%20plan%20g%C3%B6r%C3%BCnt%C3%BCleri/Screen_Shot_2025-08-07_at_23.30.52_PM.png)

Geliştirici araçlarını açar ve `Network` sekmesine giderseniz, yalnızca bir görüntünün yüklendiğini göreceksiniz. Bu, web sayfasının açık olduğu ekranın yoğunluğuyla eşleşen görüntü olacaktır. Piksel yoğunluğu yüksek bir ekrana sahip bir cihazdan giriş yapıyorsanız, tarayıcı standart görüntünün iki katı büyüklüğünde bir görüntü yükleyecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/75d10f1f-2d20-471e-be29-153e0726f97aimage%20%286%29.jpg)