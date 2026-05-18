# <img> etiketi ve src niteliği

Web sayfalarını görsel olarak çekici hale getirmek için grafik kullanımı önemlidir. Görüntüler, bir belgenin özünü ve içeriğini daha iyi aktarmaya yardımcı olur.

**Raster grafikler (raster, bitmap)**, her pikselin koordinatlarını ve bu pikselin renginin bir açıklamasını içeren bir dizi biçimindeki bir grafik dosyasının açıklamasıdır. Bu format, sabit boyutlu bir renk haritasına benzer.

En yaygın kullanılan iki görüntü formatı şunlardır:

- **JPEG** - Şeffaf arka plan veya animasyon gerektirmeyen büyük dosyalar için idealdir. Bu format, canlı ve gerçekçi fotoğraflar için mükemmeldir çünkü milyonlarca renk barındırabilir.
- **PNG** - JPEG'den farklı olarak, bu format şeffaf veya tek renkli arka plan gerektiren görüntüler için uygundur. Simgeler ve dekoratif öğeler için kullanılır. Bu format aynı zamanda yüksek hassasiyetli görüntüler için de kullanılır(örneğin, ekran görüntüleri, çizimler, grafikler vb.)

`<img>` etiketi, çeşitli grafik formatlarındaki görüntüleri işaretlemek için kullanılır.

`<img src="<https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg>" />`

Görüntünün adresini belirtmek için `src="path"` zorunlu niteliğini kullanmanız gerekir.

Örnek: 

`<img>` etiketini kullanın ve sayfa başlığı ile tarif açıklaması arasına son yemeğin bir resmini ekleyin.

- Kod `<img>` etiketini içermelidir.
- `<img>` etiketi, sayfa başlığı ile tarif açıklaması arasına yerleştirilmelidir.
- `<img>` etiketi `src` niteliğine sahip olmalıdır.
- `src` özniteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg` şeklinde olmalıdır.

CEVAP: <img src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/pancakes.jpg)" />