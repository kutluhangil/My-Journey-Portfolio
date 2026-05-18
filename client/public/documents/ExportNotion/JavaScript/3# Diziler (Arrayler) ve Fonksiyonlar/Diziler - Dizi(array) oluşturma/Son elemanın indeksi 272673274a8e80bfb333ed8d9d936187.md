# Son elemanın indeksi

Bir dizinin son elemanının değerini bulmak için dizinin indeksini bilmemiz gerekir. Son elemanın indeksi `length - 1` formülü kullanılarak belirlenebilir.

Dizi elemanlarının indekslenmesi 0'dan başladığından ve dizinin uzunluğu toplam eleman sayısını tuttuğundan, dizinin uzunluğundan 1'i çıkarmak bize son elemanın indeksini verir.

`const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]); *// "Venus"*`

Bu örnekte, üç elemanlı bir `planets` dizisine sahibiz. Dizinin son elemanının indeksini almak için,`lastElementIndex` değişkenine `planets.length - 1` değeri atanır. Bu indeksi kullanarak `planets[lastElementIndex]` ifadesiyle son elemanın değerine ulaşabiliriz.

Bu yaklaşım, bir dizinin uzunluğundan bağımsız olarak son elemanını almanızı sağlar. Bu, özellikle bir dizinin kaç eleman içereceğini önceden bilmediğimiz durumlarda kullanışlıdır.

# **Amaçlar**

`getLastElementMeta(array)` fonksiyonu bir `array` parametresi alır — rastgele değerlerden oluşan bir dizi. Fonksiyon kodunu, iki elemanlı yeni bir dizi döndürecek şekilde değiştirin:

- ilk eleman — `array`'deki son elemanın indisidir
- ikinci eleman — `array`’deki son elemanın değeridir

# **Testler**

- `getLastElementMeta(array)` işlevi şöyle tanımlanır
- `getLastElementMeta(["apple", "peach", "pear", "banana"])` fonksiyonu `[3, "banana"]` sonucunu verir
- `getLastElementMeta(["apple", "peach", "pear"])` fonksiyonu `[2, "pear"]` sonucunu verir
- `getLastElementMeta(["apple", "peach"])` fonksiyonu `[1, "peach"]` sonucunu verir
- `getLastElementMeta(["apple"])` fonksiyonu `[0, "apple"]` sonucunu verir

`function getLastElementMeta(array) *{}*`

`function getLastElementMeta(array) {
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return [lastElementIndex, lastElement];
}`

✅ Mantık:

- length - 1 bize son elemanın **indeksini** verir.
- array[length - 1] son **değeri** verir.
- Sonuç [indeks, değer] dizisi olur.

# **Hedefler**

`getExtremeElements(array)` fonksiyonu bir `array` parametresi alır — rastgele uzunlukta elemanlardan oluşan bir dizi. Fonksiyon kodunu, `array` parametresinin ilk ve son elemanları olmak üzere — iki elemanlı bir dizi döndürecek şekilde tamamlayın.

# **Testler**

- `getExtremeElements(dizi)` işlevi tanımlanır
- `getExtremeElements([1, 2, 3, 4, 5])` fonksiyonu `[1, 5]` sonucunu verir
- `getExtremeElements(["Earth", "Mars", "Venus"])` fonksiyonu `["Earth", "Venus"]` sonucunu verir
- `getExtremeElements(["apple", "peach", "pear", "banana"])` fonksiyonu `["apple", "banana"]` sonucunu verir

`function getExtremeElements(array) *{
}*`

`function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  return [firstElement, lastElement];
}`

✅ Mantık:

- array[0] → dizinin ilk elemanını verir.
- array[array.length - 1] → dizinin son elemanını verir.
- Bunları yeni bir diziye koyup return ediyoruz.