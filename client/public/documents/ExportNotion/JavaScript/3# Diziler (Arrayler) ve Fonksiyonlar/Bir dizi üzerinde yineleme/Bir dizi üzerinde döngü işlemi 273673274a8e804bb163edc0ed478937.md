# Bir dizi üzerinde döngü işlemi

Bir **`for`** döngüsü kullanarak bir dizi içinde yineleme yapmak, bir dizinin öğeleri arasında yineleme yapmanıza ve her öğe üzerinde belirli bir eylem gerçekleştirmenize olanak tanır.

Aşağıdaki örnekte, **`planets`** dizisi gezegenlerin adlarını içerir ve **`for`** döngüsü her bir öğeyi konsola yazdırmak için kullanılır.

`const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}`

- Sayacın başlangıç değeri `i = 0` olarak ayarlanır ve `i` değeri `planets.length`'ten küçük olduğu sürece döngü devam eder.
- Döngünün her yinelemesinde, `planets[i]` ifadesi, dizi öğelerine indeksleri aracılığıyla erişmek için kullanılır.
- Sayacın değeri i her yinelemede 1 artırılır (i += 1 ifadesi)
- `i < planets.length` koşulu, sayaç değerleri 0, 1 ve 2 olduğunda `true` döner. `i` değeri 3’e ulaştığında koşul `false` olur ve döngü sona erer.

Böylece, döngünün her yinelemesinde, `planets[i]` dizisinin geçerli öğesini konsola yazdırdığımız küme parantezlerinin içinde bir kod bloğu yürütülecektir. Döngünün sonucu, gezegenlerin isimlerinin tek tek çıktısı olacaktır.

# **Hedefler**

`calculateTotalPrice(order)` fonksiyonu bir `order` parametresi alır - bir sayı dizisi.

Fonksiyonu, sayı dizisindeki elemanların toplamını döndürecek şekilde tamamlayın.

# **Testler**

- `calculateTotalPrice(order)` fonksiyonu tanımlanır
- `calculateTotalPrice([12, 85, 37, 4])` fonksiyonuna yapılan bir çağrı `138` değerini döndürür.
- `calculateTotalPrice([164, 48, 291])` fonksiyonunun çağrılması `503` döndürür.
- `calculateTotalPrice([412, 371, 94, 63, 176])` işlevi çağrıldığında `1116` döndürülür.
- Rastgele bir dizi ile `calculateTotalPrice()` işlevini çağırmak doğru değeri döndürür

Fonksiyon calculateTotalPrice

`function calculateTotalPrice(order) *{}*`

`function calculateTotalPrice(order) {
  let total = 0;
 
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  return total;
}`