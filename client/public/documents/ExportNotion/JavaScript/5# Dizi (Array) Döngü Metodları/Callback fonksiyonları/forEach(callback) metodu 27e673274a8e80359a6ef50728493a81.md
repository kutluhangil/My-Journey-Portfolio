# forEach(callback) metodu

**`forEach(callback)`** **metodu**— bir dizi (array) ile çalışırken `for` ve `for...of` döngülerinin yerine kullanılan bir dizi yineleme yöntemidir.

```
array.forEach(function callback(element, index, array){
  // Callback fonksiyonunun gövdesi
});
```

- Bir `dizi` dizisi üzerinde eleman yineler
- Dizinin her elemanı için bir callback fonksiyonu çağırır
- `return` öğesinden sonra açıkça bir ifade belirtseniz bile tanımsız döndürür.

forEach() yönteminin callback fonksiyonu her zaman şu parametreleri alır: `element` dizisinin geçerli öğesinin değeri, `index` dizini ve orijinal `array` dizisinin gerçek referansı. Lütfen parametrelerin isimlerinin keyfi olduğunu, ancak sıralarının(!) çok önemli olduğunu unutmayın. Ayrıca, tüm parametrelerin tanımlanması gerekmez. Yalnızca ilk parametre `element` (bu en yaygın durumdur) gerekiyorsa, sonraki `index` ve `array` parametreleri atlanabilir.

```
const numbers = [5, 10, 15, 20, 25];

// Klasik forfor (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// forEach ile döngü
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});
```

Bir dizi üzerinde döngü yapmak için `for` veya `for...of` döngülerini kullanmanız gereken tek durum, döngüyü yarıda kesmenizdir. `forEach` metodunun yürütülmesini yarıda kesemezsiniz, her zaman sonuna kadar diziyi yineler.

# **Görev**

`calculateTotalPrice(orderedItems)` fonksiyonu bir sayı dizisi olan `orderedItems` parametresini alır ve elemanlarının toplamını hesaplar. Bu toplam `totalPrice` değişkeninde saklanır ve fonksiyonun sonucu olarak döndürülür.

Her döngüde `orderedItems` dizisinin geçerli öğesinin değerini `totalPrice` öğesine ekleyen bir geri çağırma işlevi geçirerek `forEach` metoduna yapılan çağrıyı tamamlayın.

# **Testler**

- `calculateTotalPrice(orderedItems)` fonksiyonu tanımlanır
- `calculateTotalPrice([12, 85, 37, 4])` fonksiyonuna yapılan bir çağrı `138` döndürür.
- `calculateTotalPrice([164, 48, 291])` fonksiyonunun çağrılması `503` döndürür.
- `calculateTotalPrice([412, 371, 94, 63, 176])` işlevi çağrıldığında `1116` döndürülür.
- Bir işlevi rastgele ancak geçerli bağımsız değişkenlerle çağırmak doğru değeri döndürür

```
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}
```