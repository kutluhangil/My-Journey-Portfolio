# Dekoratif Kaplama

Offset ve `hidden` değerine sahip `overflow` özelliği, bloğun dışından görünen gizli içerikle dekoratif efektler oluşturmak için kullanılır.

Bu efekti nasıl oluşturabileceğinizi görmek için canlı örneğe göz atabilirsiniz.

Bu efekt birkaç basit adımda elde edilebilir. Efekti oluşturmak için stillere bakalım. Canlı örnekteki kodun tamamını görün.

![Screen Shot 2025-07-26 at 17.53.19 PM.png](Dekoratif%20Kaplama/Screen_Shot_2025-07-26_at_17.53.19_PM.png)

`<div class="box">
  <div class="overlay"></div>
</div>`

1. İlk olarak, `div.overlay`'i kesinlikle `div.box`'a göre konumlandırın ve `div.box`'ın tam genişliğine ve yüksekliğine kadar uzatın.

`.box {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`

2. `transform` ve `translateY` özelliklerini kullanarak `div.overlay`'i yüksekliğinin %100'ü kadar aşağı taşıyoruz.

`.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform: translateY(100%);
}`

3. `div.box`'ın üzerine gelindiğinde, `transform` ve `translateY` kullanarak `div.overlay`'i orijinal konumuna döndürün.

`.box:hover .overlay {
  transform: translateY(0);
}`

4. `overflow` özelliğini `div.box`'ın dışına taşındığında kaplama `div`'ini görsel olarak gizlemek için `hidden` değeriyle `div.box`'a ayarlıyoruz.

`.box {
  position: relative;
  overflow: hidden;
}`

5. `transform` özelliğini canlandırmak için bir `div.overlay` geçişi ekleyin ve böylece kaplamanın görünümünü canlandırın.

`.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform: translateY(100%);
  transition: transform 250ms ease-in-out;
}`

CSS kodu ekleyin, böylece `overlay` sınıfına sahip öğe, fare imleci üzerine getirildiğinde kartın alt kısmında görünür. Dekoratif kaplama tekniğini kullanın. CSS kaplamasının görünümünü `ease-in-out` dağıtım fonksiyonu ile `250ms` sonra bir geçişle canlandırın.

- Stil sayfasında `.gallery-item` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.gallery-item` seçicisine sahip CSS kuralının `position` özelliği `relative` değerine sahip olmalıdır.
- `.gallery-item` seçicisine sahip CSS kuralının `overflow` özelliği `hidden` değerine sahip olmalıdır.
- Stil sayfasında `.overlay` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.overlay` seçicisine sahip CSS kuralının `position` özelliği `absolute` değerine sahip olmalıdır.
- `.overlay` seçicisine sahip CSS kuralının `top` değeri `0` olmalıdır.
- `.overlay` seçicisine sahip CSS kuralının `left` değeri `0` olmalıdır.
- `.overlay` seçicisine sahip CSS kuralının `width` değeri `100%` olmalıdır.
- `.overlay` seçicisine sahip CSS kuralının `height` değeri `100%` olmalıdır.
- `.overlay` seçicisine sahip CSS kuralının `transform` özelliği `translateY(100%)`değerine sahip olmalıdır.
- `.overlay` seçicisine sahip CSS kuralının `transition` özelliği `transform 250ms ease-in-out` değerine sahip olmalıdır.
- Stil sayfasında `.gallery-item:hover .overlay` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.gallery-item:hover .overlay` seçicisine sahip CSS kuralının `transform` özelliği `translateY(0)` değerine sahip olmalıdır.

`{
box-sizing: border-box;
}`

`img {
display: block;
max-width: 100%;
}`

`.gallery {
margin: 0;
padding: 0;
list-style: none;
display: flex;
gap: 8px;
}`

`.gallery-item {
border: 1px solid #212121;
border-radius: 4px;
position: relative;
overflow: hidden;
}`

`.overlay {
padding: 8px;
background-color: #3f51b5;
color: #fff;
font-family: sans-serif;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
transform: translateY(100%);
transition: transform 250ms ease-in-out;
}`

`.gallery-item:hover .overlay {
transform: translateY(0);
}`