# Değerleri atlama

Adlandırılmış nesne özelliklerinin aksine, dizi öğeleri dizinlenmiş bir değerler kümesidir. Örneğin yalnızca üçüncü öğeyi ayıklamak istiyorsanız, ilk iki öğeyi atlamanız gerekir.

`color` dizisinden yalnızca son değeri almak istediğinizi varsayalım. Bunu yapmak için, yeniden yapılandırma sırasında atlanacak öğeleri sadece virgül ile ayırmanız yeterlidir:

```
const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`); // "Blue: 255"
```

Pratikte bu özellik dizilerde nadiren kullanılır, ancak yapılabileceğini bilmek faydalıdır.