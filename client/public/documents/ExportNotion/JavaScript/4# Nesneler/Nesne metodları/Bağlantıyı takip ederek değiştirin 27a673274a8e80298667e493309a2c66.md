# Bağlantıyı takip ederek değiştirin

`bookShelf` nesnesinin `books` özelliği bir diziyi saklar.

Dolayısıyla, diziye bir referans olduğu için `bookShelf.books` özelliğine başvurarak diziyi referansla değiştirebiliriz.

```
const bookShelf = {
  books: ["The Last Kingdom"],
};

bookShelf.books.push("The Mist");
console.log(bookShelf.books);// ["The Last Kingdom", "The Mist"]
```

Aşağıdaki örnekte, `this` anahtar sözcüğü, ilgili yöntemi çağıran nesneye bir referans saklar.

Yöntemin içinde `this.books` öğesine başvururken, `books` özelliğinde saklanan diziye başvururuz. Bu, örneğin yeni bir öğe eklemek için `push()` dizi yöntemi kullanılarak referansla değiştirilebileceği anlamına gelir.

```
const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  }
};

console.log(bookShelf.getBooks());// ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks());// ["The Last Kingdom", "The Mist", "Dream Guardian"]
```

Aynı zamanda, görev gerektirmediği sürece `addBook` metodundan herhangi bir şey döndürmenize gerek yoktur. Bu metod çağrıldığında, sadece referans olarak dizinin değerini değiştiririz - ve `potions` özelliğindeki dizi elemanları değişir.

# **Hedefler**

`addPotion(potionName)` metodunun kodunu, `potions` özelliğindeki dizinin sonuna `potionName` iksirini ekleyecek şekilde değiştirin.

`addPotion(potionName)` metodunun kodunu, `potions` özelliğindeki dizinin sonuna `potionName` iksirini ekleyecek şekilde değiştirin.

# **Testler**

- `atTheOldToad` değişkeni tanımlanır
- `atTheOldToad` değişkeninin değeri bir nesnedir
- `potions` özelliğinin değeri bir dizidir `["Hız iksiri", "Taş derisi"]`
- `getPotions` özelliğinin değeri bir nesne metodtur
- `addPotion` özelliğinin değeri bir nesne metodtur
- `atTheOldToad.getPotions()` metodu çağrıldığında `potions` özelliğinin geçerli değeri döndürülür
- `atTheOldToad.addPotion("Invisibility")` metodu çağrıldıktan sonra, `potions` özelliği bir dizi `["Speed potion", "Stone skin", "Invisibility"]` içerecektir.
- `atTheOldToad.addPotion("Power potion")` metodu çağrıldıktan sonra, `potions` özelliği `["Speed potion", "Stone skin", "Invisibility", "Power potion"]` dizisini içerecektir.

```jsx
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};
```