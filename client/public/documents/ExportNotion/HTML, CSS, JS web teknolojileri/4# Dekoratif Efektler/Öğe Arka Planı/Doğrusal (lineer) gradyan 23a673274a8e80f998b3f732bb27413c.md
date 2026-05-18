# Doğrusal (lineer) gradyan

Gradyan — bir renkten diğerine geçişi ifade eder. CSS'de gradyan — arka plan görüntüsüdür, bu nedenle `background-image` özelliğinin değeri olarak ayarlanır. Doğrusal bir gradyan, aynı yönde yayılacak şekilde ayarlanmış iki veya daha fazla renk kullanılarak oluşturulur.

Renk değerleri şu biçimlerde olabilir: anahtar kelimeler, rgb, rgba veya hex ve bu biçimler karıştırılabilir.

`background-image: linear-gradient(
	<yön>, 
	<renk-1>, 
	<renk-2>, 
	<renk-3>, 
	...
)`

Gradyanın yönü `to top`, `to right`, `to bottom`, `to left` anahtar kelimeleri ve bunların kombinasyonları ile belirlenir. Yön belirtilmezse — varsayılan değer kullanılır (`to bottom`). Yön bir çift anahtar kelime ile belirtilirse, örneğin `to top left`, degradenin başlangıç noktası sağ alt köşede, yani ters köşede yer alacaktır.

Yön, derece cinsinden eğim açısı ile de belirtilebilir — birim `deg`'dir. `0deg` değeri `to top` ile aynıdır. Açının artırılması gradyan çizgisinin yönünü tersine çevirir. Gradyan çizgisi — bloğun merkezinden geçen ve renklerin saat yönünde dağıtıldığı bir çizgidir.

```
Bu animasyonda, açı 10 derecelik artışlarla 0'dan 360 dereceye yükselir. Düşük çözünürlük, farklı renklerin degrade çizgisine her zaman dik olan "çizgiler" olarak nasıl göründüğünü daha iyi görmenizi sağlar.

```

Degrade bir arka plan görüntüsü olduğundan — görüntünün üzerine şeffaf bir renk katmanı yerleştirildiğinde çift arka plan tekniğini kullanabiliriz.

`background-image: linear-gradient(
	to bottom, 
	rgba(255, 0, 0, 0.3), 
	rgba(255, 0, 0, 0.3)
	),
	url(görüntü yolu);`

1. İlk üst katman şeffaflığı olan bir gradyandır ve aynı ilk ve son renk değerini kullanırız.

Gradyanın rengi tasarıma bağlıdır, bu yüzden %30 şeffaflıkta kırmızı olarak ayarlayabiliriz. Gradyan yönünü yukarıdan aşağıya doğru belirleyin.

2. İkinci katman olarak bir arka plan resmi ekleyin.