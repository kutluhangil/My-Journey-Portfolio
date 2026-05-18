# Kendi fonksiyonunuzla diziyi sıralama

`toSorted(karsilastirmaFonksiyonu)` yönteminde kendi sıralama düzeninizi belirtmek için iki parametreli bir callback fonksiyonu oluşturmalısınız.

Bu bir karşılaştırma fonksiyonudur (compare function), sıralama düzeni sonucuna bağlıdır. `toSorted()` yöntemi, iki rastgele eleman için bu fonksiyonu çağıracaktır.

```
array.toSorted((a, b) => {
// callback fonksiyonu gövdesi
});
```

- `a` - karşılaştırma için ilk öğe.
- `b` - karşılaştırma için ikinci öğe

**Artan Sıralama**

Eğer `compareFunction(a, b)` çağrısı **herhangi bir negatif değer** döndürürse, yani `a` , `b` den küçükse, sıralama `a` yı `b` den önde yerleştirir.

```
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b);
console.log(ascendingScores);// [19, 35, 56, 61, 74, 92]
```

**Azalan Sıralama**

Eğer `compareFunction(a, b)` çağrısı herhangi bir pozitif değer döndürürse, yani `b`, `a`'dan büyükse, sıralama `b`'yi `a`'nın önüne koyacaktır.

```
const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores);// [92, 74, 61, 56, 35, 19]
```

Eğer `compareFunction(a, b)` çağrısı `0` değerini döndürürse, `a` ve `b` birbirlerine göre değişmez kalacak ancak diğer tüm öğelere göre sıralanacaklar.

Dikkat etmek gerekir ki, sayı dizilerini sıralarken ve toSorted() yöntemine geri çağrı fonksiyonu **verildiğinde**, sayılar artık dizelere dönüştürülmeyecek, dolayısıyla sıralama beklenen ve alışılmış şekilde olacaktır.

---

## **✅ Çözüm:**

```
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// Artan sıraya göre (küçükten büyüğe)
const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// Azalan sıraya göre (büyükten küçüğe)
const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
```

---

## **🧠 Açıklama:**

### **toSorted() nedir?**

- toSorted() metodu, sort() ile aynıdır ama **orijinal diziyi değiştirmez**.
- Her zaman **yeni bir dizi döndürür**.
- Yani releaseDates değişmeden kalır.
    
    (Bu, “saf fonksiyon” mantığına uygun çalışır.)
    

---

### **(a, b) => a - b**

Bu sıralama fonksiyonu sayıları **artan sıraya** dizer:

- Küçük sayılar başa gelir.
- Örnek: [1967, 1973, 1984, 1997, 2008, 2012, 2016]

### **(a, b) => b - a**

Bu sıralama fonksiyonu sayıları **azalan sıraya** dizer:

- Büyük sayılar başa gelir.
- Örnek: [2016, 2012, 2008, 1997, 1984, 1973, 1967]

---

## **🧾 Tam Kod:**

```
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

console.log(ascendingReleaseDates);
// [1967, 1973, 1984, 1997, 2008, 2012, 2016]

console.log(descendingReleaseDates);
// [2016, 2012, 2008, 1997, 1984, 1973, 1967]
```

---

## **💡 Özet:**

| **Değişken** | **Amaç** | **Kod** | **Sonuç** |
| --- | --- | --- | --- |
| ascendingReleaseDates | Artan sıra | .toSorted((a, b) => a - b) | [1967, 1973, 1984, 1997, 2008, 2012, 2016] |
| descendingReleaseDates | Azalan sıra | .toSorted((a, b) => b - a) | [2016, 2012, 2008, 1997, 1984, 1973, 1967] |

---

> 🔁 toSorted() modern JavaScript’te sort()’un güvenli, orijinal diziyi
> 
> 
> **bozmayan**
> 

> Bu yüzden bu tür sıralamalarda toSorted() tercih edilir. ✅
>