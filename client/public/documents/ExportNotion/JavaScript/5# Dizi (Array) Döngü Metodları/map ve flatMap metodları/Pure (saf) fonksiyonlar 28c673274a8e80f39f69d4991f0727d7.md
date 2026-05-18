# Pure (saf) fonksiyonlar

**Yan etkili (side effect) fonksiyon**: Çalıştırıldığında aşağıdakileri yapabilen fonksiyonlardır:

- Global değişkenleri kullanabilir veya değiştirebilir,
- Referans türündeki bağımsız değişkenlerin (örneğin dizilerin) değerini değiştirebilir,
- Giriş/çıkış (I/O) işlemleri gerçekleştirebilir.

```
const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Orijinal array değerleri değişticonsole.log(numbers);// [2, 4, 6, 8, 10]
```

`dirtyMultiply(array, value)` fonksiyonu, `array` dizisinin her bir elemanını `value` ile çarpar ve orijinal diziyi değiştirir (mutasyona uğratır).

**Saf fonksiyon (pure function)**, sonucu yalnızca verilen argümanlara bağlı olan bir fonksiyondur. Aynı argümanlarla her zaman aynı çıktıyı üretir ve **hiçbir yan etkisi yoktur**; yani dış dünyayı ya da argümanları değiştirmez.

Orijinal diziyi bozmadan, yeni bir dizi döndüren saf bir çarpma fonksiyonu aşağıdaki gibi yazılabilir:

```
const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Orijinal array hâla aynı
console.log(numbers); // [1, 2, 3, 4, 5]
// Return edilen array modifiye edildi
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

```

| **Özellik** | **Yan Etkili (Dirty) Fonksiyon** | **Saf (Pure) Fonksiyon** |
| --- | --- | --- |
| Orijinal veriyi değiştirir mi? | ✅ Evet | ❌ Hayır |
| Aynı girdi → aynı çıktı mı? | 🔁 Değişebilir | 💯 Her zaman aynı |
| Dış dünyayı etkiler mi? | 🔥 Evet | 🌿 Hayır |
| Test etmesi kolay mı? | 😵 Zor | ✅ Kolay |
| Tavsiye edilir mi? | 🚫 Genelde hayır | 💪 Evet |

# **Görev**

`changeEven(numbers, value)` fonksiyonu bir `numbers` sayı dizisi alır ve değeri çift sayı olan her bir elemana `value` parametresinin değerini ekleyerek günceller.

Fonksiyonu temiz olacak şekilde yeniden düzenleyin - `numbers` sayı dizisini değiştirmez, ancak güncellenmiş değerlerle yeni bir dizi oluşturur, doldurur ve döndürür.

# **Testler**

- `changeEven(numbers, value)` fonksiyonu şöyle tanımlanır
- `changeEven` fonksiyonu `numbers` parametresinin değerini değiştirmez
- `changeEven([1, 2, 3, 4, 5], 10)` çağrısı yeni bir `[1, 12, 3, 14, 5]` dizisi döndürür
- `changeEven([2, 8, 3, 7, 4, 6], 10)` çağrısı yeni bir `[12, 18, 3, 7, 14, 16]`dizisi döndürür
- `changeEven([17, 24, 68, 31, 42], 100)` çağrısı yeni bir `[17, 124, 168, 31, 142]` dizisi döndürür
- `changeEven([44, 13, 81, 92, 36, 54], 100)` çağrısı yeni bir `[144, 13, 81, 192, 136, 154]` dizisi döndürür
- Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür

```
function changeEven(numbers, value) {
  const newArray = [];

  numbers.forEach((number) => {
    newArray.push(number % 2 === 0 ? number + value : number);
  });

  return newArray;
}
```