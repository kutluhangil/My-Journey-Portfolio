# Nesne özelliklerine erişim

Metodlar, bir nesnenin özellikleriyle çalışmak ve bunları değiştirmek için kullanılır.

Bir nesneye **erişmek** için, metod bu nesnenin değişken adı yerine `this` anahtar sözcüğünü kullanır, örneğin `bookShelf`.

`this` anahtar sözcüğü fonksiyonun bağlamıdır.

```
const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    console.log(this);
  },
};

bookShelf.getBooks();// {books: ["The Last Kingdom", "The Mist"], getBooks: f}
```

`this` değeri, noktadan önceki nesneye, yani bu metodu çağıran nesneye, bizim durumumuzda `bookShelf` nesnesine bir referans olacaktır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/9721b0b4-3903-476e-82b5-d05774a3b574Frame%2048604%20%281%29.jpg)

Metotlarda bir **nesnenin özelliklerine** erişmek için, nesneye `this` aracılığıyla başvururuz ve ardından her zamanki gibi "nokta aracılığıyla" özelliklere gideriz.

```
const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  }
};

console.log(bookShelf.getBooks());// ["The Last Kingdom", "The Mist"]
```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/31928c54-a503-4c6a-9d7b-b2301eb849cfFrame%2048605%20%281%29.jpg)

Özelliklere atıfta bulunurken neden nesnenin adını kullanmayalım diye düşünmek mantıklıdır.

Sonuçta, bunu değiştirmeyeceğimiz açıktır.

Mesele şu ki, bir nesne adı güvenilir bir şey değildir. Bir nesnenin metotları başka bir nesneye (farklı bir isimle) kopyalanabilir ve gelecekte bir nesne oluşturduğumuzda genellikle ismini önceden bilmediğimizi fark edeceğiz. `this` kullanmak, metodun onu çağıran nesne ile çalışmasını garanti eder.

# **Hedefler**

`getPotions()` nesne metodunun kodunu, `potions` özelliğinin değerini döndürecek şekilde değiştirin.

`atTheOldToad` nesnesi aşağıdaki özelliklere sahiptir:

- `potions` - iksirlerin depolandığı bir dizi.
- `getPotions()` - `"List of all available potions”` dizesini döndüren bir yöntem.

`getPotions()` nesne metodunun kodunu, `potions` özelliğinin değerini döndürecek şekilde değiştirin.

# **Testler**

- `atTheOldToad` değişkeni tanımlanır
- `atTheOldToad` değişkeninin değeri bir nesnedir
- `potions` özelliğinin değeri bir dizidir `["Hız iksiri", "Taş derisi"]`
- `getPotions` özelliğinin değeri bir nesne metodudur
- `atTheOldToad.getPotions()` metodu çağrıldığında `potions` özelliğinin geçerli değeri döndürülür

`const atTheOldToad = {
potions: ["Speed potion", "Stone skin"],`

`getPotions() {
return this.potions;
}
};`

`// Test
console.log(atTheOldToad.getPotions());
// ["Speed potion", "Stone skin"]`