# "Parametre nesnesi" şablonu

Bir fonksiyon 2-3'ten fazla parametre kabul ediyorsa, neyin hangi sırayla aktarılacağı konusunda kafa karıştırmak çok kolaydır.

Bu, çağrıldığı noktada çok açık olmayan bir kodla sonuçlanır.

```
function doStuffWithBook(title, pages, downloads, rating, isPublic) {
  // Parametrelerle bir şeyler yapın
  console.log(title);
  console.log(numberOfPages);
  // ve benzer kullanımlar
}

// ❌ 736 nedir? 10283 nedir? Doğru olan nedir?
doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);
```

Parametre nesnesi şablonu bu sorunu çözmeye yardımcı olur.

Bir dizi parametreyi yalnızca bir tanesiyle değiştirir — adlandırılmış özelliklere sahip bir nesne.

```
function doStuffWithBook(book) {
  // Nesnenin özellikleriyle bir şeyler yapın
  console.log(book.title);
  console.log(book.pages);
  // Ve böyle devam eder.
}
```

Böylece, onu çağırırken gerekli özelliklere sahip tek bir nesne iletiriz.

```
// ✅ Her şey açık
doStuffWithBook({
  title: "The Last Kingdom",
  pages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});
```

Diğer bir avantajı ise `book` parametresinde nesneyi yeniden yapılandırabilmenizdir.

Bu, fonksiyonun gövdesinde yapılabilir.

```
function doStuffWithBook(book) {
  const { title, pages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(pages);
}
```

Ya da işlevin imzasında — hiçbir fark yoktur.

```
function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
  console.log(title);
  console.log(pages);
}
```