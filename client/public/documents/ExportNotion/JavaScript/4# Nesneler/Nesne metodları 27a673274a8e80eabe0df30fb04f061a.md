# Nesne metodları

Şimdiye kadar, nesneleri yalnızca ilgili verilerin (örneğin, bir kitap hakkındaki veriler) depoları olarak ele aldık. **Depolama nesneleri** genellikle benzer nesnelerden oluşan bir dizi içinde yer alır. Bu dizi, aynı tipteki elemanların bir koleksiyonudur.

Bir veri dizisi üzerinde işlem yapmak için fonksiyonlar oluşturmamız gerekirse ne olur? Örneğin, bir kitap eklemek veya silmek gibi. Ve bu fonksiyonların birçok kez çalıştırmak gerektiğinde ne yapmalıyız?.

```
// ❌ Zayıf bağlantılı, bağımsız varlıklarconst books = ["The Last Kingdom", "Dream Guardian"];
function getBooks() {}
function addBook() {}
```

Bir seçenek `books` değişkenini ve iki `getBooks()` ve `addBook(bookName)` fonksiyonunu tanımlamaktır.

Bu yöntemin dezavantajları vardır. Birbirinden bağımsız hareket edebilen üç yapı var edilmiş oluyor, böyle bir durum bizim için ideal değil. Daha iyi bir çözümümüz neyseki var.

Nesneler yalnızca verileri değil, aynı zamanda bu verilerle çalışmak için fonksiyonları da depolayabilir. Eğer bir özelliğin değeri bir fonksiyon ise, böyle bir özelliğe **nesne metodu** denir.

```jsx
const obj = {
	method(value) {
		console.log(`I'm a method with ${value}!`);
	}
};

obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"
```

- Metod , ayrı bir değişken olarak değil (bu bölümdeki ilk örneğe bakın), bir nesnenin özelliği olarak tanımlanan normal bir fonksiyondur (yukarıdaki örneğe bakın).
- Bir nesnenin metoduna erişmek için standart nokta sözdizimini kullanırsınız.

Verileri ve bu verilerle çalışacak yöntemleri birbirine bağlayan nesneler "model" olarak adlandırılabilir.

Kitap koleksiyonu `books` için bir `bookShelf` nesnesi ve koleksiyonla etkileşim için `getBooks` ve `addBook` metodlarını oluşturalım.

```jsx
// ✅ Mantıksal ve sözdizimsel olarak gruplandırılmış varlıklarconst bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
// Bu bir nesne yöntemidirgetBooks() {
    return "Returning all books";
  },
// Bu bir nesne yöntemidiraddBook(bookName) {
		return `Adding book ${bookName}`;
  },
};

bookShelf.getBooks();// return "Returning all books"
bookShelf.addBook("New book 1");// return "Adding book New book 1"
bookShelf.addBook("New book 2");// return "Adding book New book 2"
```

# **Görev**

"The Old Frog" iksir dükkanının sahibi bize başvurdu ve envanter tutmak için bir program sipariş etti. Program iksirleri eklemeli, silmeli, aramalı ve güncellemelidir.

Aşağıdaki özelliklere sahip bir `atTheOldToad` nesnesi tanımlayın:

- `potions` - iksirlerin saklanacağı bir dizi. Şimdi boş olsun
- `getPotions()` - `"List of all available potions"` dizesini döndüren bir yöntem
- `addPotion(potionName)` - `"Adding <potionName>"` dizesini döndüren bir yöntemdir; burada `potionName`, `potionName` parametresinin değeridir

# **Testler**

- `atTheOldToad` değişkeni tanımlanır
- `atTheOldToad` değişkeninin değeri bir nesnedir
- `potions` özelliğinin değeri bir `[]` dizisidir
- `getPotions` özelliğinin değeri bir nesne metodudur
- `atTheOldToad.getPotions()` metoduna yapılan bir çağrı `"List of all available potions"` dizesini döndürür
- `addPotion` özelliğinin değeri bir nesne metodudur
- `atTheOldToad.addPotion("Invisibility")` metodu çağrıldığında `"Adding «Invisibility»"` dizesi döndürülür
- `atTheOldToad.addPotion("Güç iksiri")` metodu çağrıldığında `"Adding «Power potion»"` dizesi döndürülür.

```jsx
const atTheOldToad = {
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotion(potionName) {
    return `Adding «${potionName}»`;
  },
};
```

[**Nesne özelliklerine erişim**](Nesne%20metodlar%C4%B1/Nesne%20%C3%B6zelliklerine%20eri%C5%9Fim%2027a673274a8e80218f47e937633f3553.md)

[**Bağlantıyı takip ederek değiştirin**](Nesne%20metodlar%C4%B1/Ba%C4%9Flant%C4%B1y%C4%B1%20takip%20ederek%20de%C4%9Fi%C5%9Ftirin%2027a673274a8e80298667e493309a2c66.md)

[**Nesne dizisi**](Nesne%20metodlar%C4%B1/Nesne%20dizisi%2027a673274a8e8070847ece22cb7554f6.md)

[**Dizideki bir nesneyi değiştirme**](Nesne%20metodlar%C4%B1/Dizideki%20bir%20nesneyi%20de%C4%9Fi%C5%9Ftirme%2027a673274a8e805c86a9d2cdc7096497.md)