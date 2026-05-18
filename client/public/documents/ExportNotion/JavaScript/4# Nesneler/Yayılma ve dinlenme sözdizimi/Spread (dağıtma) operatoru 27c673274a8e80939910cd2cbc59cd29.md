# Spread (dağıtma) operatoru

Bir argüman listesinden bir dizi oluşturmayı daha önce öğrendik.

Bazen bunun tersine ihtiyaç duyarız — bir diziyi, çağrılan bir fonksiyona **tek tek elemanlar** olarak aktarmak gerekebilir. Örneğin, JavaScript’te yerleşik bir `Math.max()` fonksiyonu vardır. Bu fonksiyon bir **dizi** değil, **rastgele sayıda ayrı sayı** argümanı bekler.

`Math.max(14, -4, 25, 8, 11);`

Elinizde `[14, -4, 25, 8, 11]` sayıları şeklinde bir sıcaklık dizisi olduğunu düşünün.

Bunun için `Math.max`ı nasıl çağırırsınız? Sadece bir dizi değil, bir sayı listesi almayı bekler.

```
const temps = [14, -4, 25, 8, 11];

console.log(temps);// [14, -4, 25, 8, 11]// ❌ Bu işe yaramaz, çünkü bütün bir diziyi geçiriyoruzconsole.log(Math.max(temps));// NaN
```

Bu durumda **spread (dağıtma)** operatörünün kullanılması gerekir.

Rest (kalan) parametrelere benzer şekilde `...` ile yazılır, ancak **tam tersini yapar**. Spread operatörü, bir diziyi **tek tek bağımsız argümanlara** dönüştürür.

```
const temps = [14, -4, 25, 8, 11];

console.log(...temps);// 14 -4 25 8 11  bir dizi bireysel sayı// ✅ Bir öğe koleksiyonunu ayrı bağımsız değişkenler olarak iletirconsole.log(Math.max(...temps));// 25
```

# **Görev**

`getExtremeScores(scores)` fonksiyonu `scores` parametresinde bir dizi puan (sayı) alır.

Fonksiyon kodunu iki özelliğe sahip bir nesne döndürecek şekilde tamamlayın:

- `best` özelliği `scores` dizisindeki en büyük sayıyı içermelidir.
- `worst` özelliği `scores` dizisindeki en küçük sayıyı içermelidir.

(`...spread`) operatörünü ve `Math.max()` ve `Math.min()` yöntemlerini kullanın.

# **Testler**

- `getExtremeScores(scores)` işlevi bildirilmiştir
- `getExtremeScores([89, 64, 42, 17, 93, 51, 26])` fonksiyonu çağrıldığında `{ best: 93, worst: 17 }`
- `getExtremeScores([19, 7, 4, 17, 81, 24])` fonksiyonuna yapılan bir çağrı `{ best: 81, worst: 4 }` nesnesini döndürür.
- `Math.max()` ve `Math.min()` yöntemlerine argüman iletmek için, `scores` dizisi üzerinde `...` sözdizimini kullanın

```
function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };
}
```