# Bir öğeyi ortalamak

Mutlak olarak konumlandırılmış bir öğeyi, konumlandırıldığı bloğun tam ortasına yerleştirmenize olanak tanıyan bir tekniği ele alalım.

`<div class="parent">
  <div class="box"></div>
</div>`

Teknik çok basittir ve üç adımdan oluşur.

`.parent {
	position: relative;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`

1. Öğeyi, konumlandırıldığı üst bloğa göre mutlak olarak konumlandırırız
2. Öğenin `top` ve `left` özelliklerini `%50` olarak ayarlıyoruz, bu da öğenin sol üst köşesini tam olarak atanın ortasına yerleştirecektir.
3. Öğeye yüksekliğinin ve genişliğinin %50'si kadar negatif ofset (translate) verin. Bu, öğeyi yukarı ve sola kaydıracak ve atanın içinde ortalayacaktır.

Sayfada nasıl göründüğünü görmek için canlı örneğe göz atın.

![Screen Shot 2025-07-26 at 18.07.17 PM.png](Bir%20%C3%B6%C4%9Feyi%20ortalamak/Screen_Shot_2025-07-26_at_18.07.17_PM.png)