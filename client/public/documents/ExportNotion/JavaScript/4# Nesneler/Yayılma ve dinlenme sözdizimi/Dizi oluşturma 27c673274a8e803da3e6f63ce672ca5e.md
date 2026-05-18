# Dizi oluşturma

`...spread` işlemi, bir dizinin kopyasını oluşturmanıza veya rastgele sayıda diziyi yeni bir diziye “yapıştırmanıza” olanak tanır. Şimdiye kadar bunun için `slice()` ve `concat()` metotlarını kullandık; ancak spread işlemi, aynı şeyi daha kısa ve okunabilir bir şekilde yapmanıza olanak tanır.

Dizinin bir kopyasının oluşturulduğu aşağıdaki örneği inceleyelim:

```
const temps = [14, -4, 25, 8, 11];

// Bu, temps dizisinin tam ama bağımsız bir kopyasıdırconst copyOfTemps = [...temps];
console.log(copyOfTemps);// [14, -4, 25, 8, 11]
```

Burada, `temps` bir kutu elma gibidir ve biz bunun tam bir kopyasını oluşturmak istiyoruz. Boş bir kutu alıyor, orijinal `temps` kutusundaki elmaları bu kutuya aktarıyoruz – yani başka bir koleksiyona dağıtıyoruz. Bu durumda `temps` değişmeyecek, hala elma içerecek; yeni kutu ise bunların tam kopyasını içerecektir.

Aşağıdaki örnekte, iki kutudaki elmaları yeni bir kutuya ekliyoruz.

Orijinal kutular (diziler) değişmez, yeni kutu ise tüm elemanların birleşimini içerir. Yazım sırası önemlidir; çünkü yeni koleksiyondaki öğelerin sırasını etkiler:

```
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]
```

# **Görev**

`firstGroupScores`, `secondGroupScores` ve `thirdGroupScores` değişkenleri her bir grubun test sonuçlarını saklamaktadır. Spread operatoru kullanarak kodu şu şekilde tamamlayın:

- `allScores` değişkeni birinci gruptan üçüncü gruba kadar tüm sonuçların bir dizisini saklar.
- `bestScore` değişkeni en yüksek puanı içerir.
- `worstScore` değişkeni en düşük puanı içerir.

# **Testler**

- `firstGroupScores` değişkeni tanımlanır
- `firstGroupScores` değişkeninin değeri bir `[64, 42, 93]` dizisidir.
- `secondGroupScores` değişkeni tanımlanır
- `decondGroupScores` değişkeninin değeri bir `[89, 14, 51, 26]` dizisidir.
- `thirdGroupScores` değişkeni tanımlanır
- `thirdGroupScores` değişkeninin değeri `[29, 47, 18, 97, 81]` dizisidir.
- `allScores` değişkeni tanımlanır
- `allScores` değişkeninin değeri bir `[64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]` dizisidir.
- `bestScore` değişkeni tanımlanır edilir
- `bestScore` değişkeninin değeri `97` sayısıdır
- `worstScore` değişkeni tanımlanır.
- `worstScore` değişkeninin değeri `14` sayısıdır
- `allScores` değişkenine bir değer atamak için, diziyi doldurmak üzere `...` sözdizimi kullanılmıştır
- `Math.max()` yöntemine argüman iletmek için `allScores` dizisinde `...` sözdizimi kullanılır
- `Math.min()` yöntemine argüman iletmek için `allScores` dizisinde `...` sözdizimini kullanın

```
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
```