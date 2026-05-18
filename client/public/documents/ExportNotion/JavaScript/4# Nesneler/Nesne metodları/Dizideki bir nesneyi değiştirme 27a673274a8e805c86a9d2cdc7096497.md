# Dizideki bir nesneyi değiştirme

Bir dizi içerisindeki belirli bir nesnenin bir özelliğinin değerini değiştirmek, sık karşılaşılan bir görevdir. Örneğin, bir kitabın derecelendirmesini değiştirmek gibi. Bu işlem, genellikle dizideki nesneyi benzersiz bir özellik (örneğin `title`) üzerinden bularak yapılır.

```
const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
	}
};
```

`changeRating` metodu, değiştirilmesi gereken kitabın adını ve yeni derecelendirme değerini parametre olarak alır.

Bir dizideki nesnenin özelliğini değiştirmek için şu adımlar izlenir:

1. Dizi üzerinde `for...of` döngüsü kurulur.
2. Her bir nesnede, istenen özelliğin değeri kontrol edilir.
3. Eşleşme bulunduğunda, nesneye referansla erişildiği için doğrudan ilgili özellik güncellenebilir.

```
const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
// Kitap başlığına göre gerekli nesneyi bulun
			}
		}
	}
};
```

`if` deyimini çalıştırırken, nesneler referansla aktarıldığından, bu yinelemede `book` değişkeninin ihtiyacımız olan nesneye bir referans içerdiğinden emin olabiliriz. Şimdi bu nesnenin özelliğine erişmek ve ona yeni bir değer atamak yeterlidir.

```
const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
				book.rating = newRating;
			}
		}
	}
};

changeRating("The Mist", 9);
changeRating("The Last Kingdom", 4);
```

`changeRating` metodu çağrıldığında, `bookName` ile eşleşen nesnenin `rating` özelliği `newRating` ile güncellenmiş olur. Çünkü `for...of` döngüsündeki `book` değişkeni, doğrudan dizideki nesneye referans verir.

# **Amaç**

`updatePotionName(oldName, newName)` metodunu, `potions` özelliğindeki iksir dizisinde iksirin adını `oldName`den `newName`e güncelleyecek şekilde genişletin.

# **Testler**

- `atTheOldToad` değişkeni tanımlanır
- `atTheOldToad` değişkeninin değeri bir nesnedir
- `atTheOldToad.potions` özelliğinin değeri bir dizidir
- `atTheOldToad.updatePotionName` özelliğinin değeri bir nesne yöntemidir
- `atTheOldToad.updatePotionName("Stone skin", "Invisibility")` yöntemine yapılan ilk çağrıdan sonra, `potions` özelliği bir dizi içerecektir `[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]`
- `atTheOldToad.updatePotionName("Speed potion", "Polymorth")` metoduna yapılan ikinci çağrıdan sonra, `potions` özelliği bir dizi içerecektir `[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]`

```jsx
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
};
```