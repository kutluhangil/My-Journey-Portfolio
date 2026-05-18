# transition-timing-function özet

`transition-timing-function` özelliği zamanlama fonksiyonunu, yani animasyonun davranışını belirtir.

`.box {
  background-color: teal;
  transition-property: background-color;
  transition-duration: 1000ms;
  transition-timing-function: linear;
}

.box:hover {
  background-color: orange;
}`

Bir özelliğin değeri, `transition-duration`’da belirtilen süre boyunca özelliğin bir değerden diğerine geçiş hızını tanımlayan Bézier formülü aracılığıyla ayarlanır, CSS'de genellikle kullanılan temel Bézier fonksiyonlarını tanımlamak için birkaç anahtar kelime vardır.

Anahtar kelimeler:

- `ease` — geçiş yavaş başlar, hızla hızlanır ve sonunda tekrar yavaşlar.
- `linear` — geçiş tekdüze bir hıza sahiptir.
- `ease-in` — yavaş başlar, geçiş tamamlanana kadar geçiş hızı artar.
- `ease-out` — hızlı başlar ve geçiş sırasında yavaşlar.
- `ease-in-out` — yavaş başlar, hızlanır ve sonra tekrar yavaşlar.

Varsayılan değer `ease`'dir.

Canlı örneği inceleyin ve her bir eleman için `transition-timing-function` değerini belirleyin.

![Screen Shot 2025-07-26 at 13.02.30 PM.png](transition-timing-function%20%C3%B6zet/Screen_Shot_2025-07-26_at_13.02.30_PM.png)