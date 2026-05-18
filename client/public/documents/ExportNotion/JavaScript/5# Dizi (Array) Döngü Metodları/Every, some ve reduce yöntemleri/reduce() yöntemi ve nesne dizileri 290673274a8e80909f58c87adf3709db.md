# reduce() yöntemi ve nesne dizileri

Obje dizileriyle çalışırken belirli bir özelliğin değerine göre indirgeme işlemi gerçekleştirilir. Örneğin, test notlarına sahip bir öğrenci dizimiz var. Ortalama notu almak gerekiyor.

```
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Total adı isteğe bağlı olabilir, bu sadece bir işlev parametresidirconst totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;
```

Yukarıdaki örnekte, `reduce()` yöntemi, `students` dizisinin tüm nesneleri için `score`özelliğinin toplamını hesaplamak için kullanılır.

`0` değeriyle başlayarak, callback fonksiyonu her bir `students` dizisi nesnesinin `score`özelliğinin toplamını hesaplar. Sonuç (toplam), `totalScore` değişkeninde saklanır.

`const averageScore`, tüm `students` dizisi nesneleri için `score` özelliğinin ortalamasını hesaplar, tüm puanların öğrenci sayısına bölünmesiyle yapılır.

# **Görev**

Servisimizin her oyuncunun bir oyun içinde geçirdiği ortalamayı hesaplaması ve bu zaman değerlerinin toplamını alması gerekmektedir.

Her bir oyuncunun zamanını (`playtime` özelliği) oynadığı oyun sayısına (`gamesPlayed`özelliği) bölerek her oyunda geçirilen ortalama zamanı hesaplayabilirsiniz.

İpucu:

- Toplam ortalama oyun süresi için dizi üzerinde döngü yapmak ve `reduce()`yöntemini kullanın.
- `reduce()` fonksiyonu içinde, oyuncunun `playtime` değerini `gamesPlayed`değerine bölerek bir oyun için harcanan ortalama süreyi alın.
- Her döngüde sonucu `acc` değişkeninde biriktirin ve her döngünün sonunda geri döndürün.
- `reduce()` fonksiyonunun `acc` parametresini başlangıç değeri olarak `0` ile başlatın, hesaplamalar yaparken `NaN` alınmasını önleyin.
- Tamamlandıktan sonra `totalAveragePlaytimePerGame` değişkeni tüm oyuncuların bir oyun için ortalama oynama süresinin toplamını içerecektir.

# **Testler**

- Tanımlı `players` değişkeni
- `players` değişkeninin değeri oyuncuların nesnelerinden oluşan bir dizidir
- Tanımlı `totalAveragePlaytimePerGame` değişkeni
- `totalAveragePlaytimePerGame` değişkeninin değeri `1023` sayısıdır
- `players` dizisini döngüye almak için `reduce()` yöntemi kullanılmaktadır.

---

## **🧩 Verilen veri yapısı:**

Her oyuncu bir nesneyle temsil ediliyor 👇

```
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },  // kişi 1
  { name: "Poly",  playtime: 469,  gamesPlayed: 2 },  // kişi 2
  { name: "Ajax",  playtime: 690,  gamesPlayed: 3 },  // kişi 3
  { name: "Kiwi",  playtime: 241,  gamesPlayed: 1 },  // kişi 4
];
```

---

## **🎯 Hedefimiz:**

Her oyuncu için **oyun başına ortalama süreyi** bulmak:

Formül:

```
ortalama = playtime / gamesPlayed
```

Ve sonra bu ortalamaları **toplayacağız** → totalAveragePlaytimePerGame.

---

## **✅ Çözüm:**

```
const totalAveragePlaytimePerGame = players.reduce(
  (total, player) => total + player.playtime / player.gamesPlayed,
  0
);
```

---

## **🔍 Adım adım açıklama:**

### **1️⃣ reduce() ne yapıyor?**

reduce() metodu, her oyuncu (player) için bir işlem yapıyor ve sonucu total içinde biriktiriyor.

```
(total, player) => total + player.playtime / player.gamesPlayed
```

- total → birikimci (accumulator)
- player → şu anda işlenen oyuncu
- player.playtime / player.gamesPlayed → bu oyuncunun **bir oyun için ortalama süresi**

### **2️⃣ Başlangıç değeri:**

```
, 0
```

Başlangıçta total = 0 olarak başlatıyoruz (yoksa NaN alabiliriz).

---

## **🧮 Hesaplama adımları:**

| **Oyuncu** | **Hesaplama** | **Sonuç** |
| --- | --- | --- |
| Mango | 1270 / 4 | 317.5 |
| Poly | 469 / 2 | 234.5 |
| Ajax | 690 / 3 | 230 |
| Kiwi | 241 / 1 | 241 |
| **Toplam** | 317.5 + 234.5 + 230 + 241 | **1023** ✅ |

---

## **📘 Tam kod:**

```
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce(
  (total, player) => total + player.playtime / player.gamesPlayed,
  0
);

console.log(totalAveragePlaytimePerGame); // 1023
```

---

## **💡 Özet:**

- reduce() ile tüm oyuncular üzerinde tek tek gezdik.
- Her oyuncunun **ortalama oyun süresini** hesapladık.
- Bunları topladık.
- Sonuç: 🎯 1023

> 🔁 “reduce” kelimesi burada gerçekten anlamlı:
> 

> Dört oyuncunun verisini →
> 
> 
> **tek bir toplam değere indirgedik.**
>