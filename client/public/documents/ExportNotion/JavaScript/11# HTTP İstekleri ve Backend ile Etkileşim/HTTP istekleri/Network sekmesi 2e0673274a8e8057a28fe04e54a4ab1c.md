# Network sekmesi

Geliştirici araçlarında, `Ağ` sekmesi sayfada yapılan tüm HTTP isteklerini görüntüler. Bir geliştiricinin bir arka uç isteğinin ayrıntılarını kontrol etmesi gerektiğinde bunları görüntülemek yararlı olabilir.

Bu nasıl yapılır?

1. Fetch API veya XMLHttpRequest kullanılarak yapılan asenkron HTTP/HTTPS isteklerini görmek için XHR veya Fetch/XHR filtresini seçin – bu, yalnızca bu tür istekleri listeleyecektir.
2. Betiği `fetch` yöntemine bir çağrı ile çalıştırdıktan sonra, bir süre sonra istek listede görüntülenecektir.
3. Bu isteği seçerek `Headers`, `Preview` ve `Response` alt sekmelerinde istekle ilgili tüm bilgileri görebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/bbe72769-3ccb-45cf-8226-6ddd15068052image%20%283%29.png)