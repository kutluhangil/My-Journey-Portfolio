# Listeler (Koleksiyonlar)

Bir dizi veri ve **`map()`** metodu kullanılarak, liste öğeleri işlenir. **`map()`** metodu, listedeki her bir öğe için bir JSX yapısı döner.

```
[1, 2, 3].map(item => {
	return <p>{item}</p>;
})
```

Bu kod, render edilebilir bir React öğeleri dizisi oluşturur. JSX içinde bu ifadeyi süslü parantezler **`{}`** ile sararak kullanırız.

```
<div>
{[1, 2, 3].map(item => {
		return <div>{item}</div>;
	})}
</div>
```

Artık kitaplar dizisini bir liste olarak görüntülemek için kullanabiliriz. Örnekleri burada dosyalara ayırmıyoruz, böylece bilgiyi daha iyi kavrayabilirsiniz. Ancak bu kodları projelerinizde ayrı bileşen dosyalarına ayırarak tekrar etmenizi öneririz.

```
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li>{book.name}</li>;
      })}
    </ul>
  );
};

const App = () => {
  return (
    <>
			<h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};
```