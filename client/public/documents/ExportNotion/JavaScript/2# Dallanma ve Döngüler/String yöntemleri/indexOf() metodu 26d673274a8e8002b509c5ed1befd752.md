# indexOf() metodu

`indexOf()` metodu, bir dizede bir alt dizenin ilk oluşumunu bulmak için kullanılır. Asagidakilerden birini geri döndürür:

- bulunursa, alt dizenin ilk oluşumunun (ilk karakterin dizini) indisini
- hiçbir alt dize algılanmazsa, `1`

Sözdizimi:

`str.indexOf(substr)`

- `str` — içinde arama yapmak istediğiniz kaynak dizesi
- `substr` — kaynak dizede bulunacak dize

Örnek:

`const message = "Welcome to Bahamas!"*;*
const index = message.indexOf("to")*;*
console.log(index)*; // 8*`

Bu örnekte, elimizde `message` dizesi var. `to` alt dizesinin ilk oluşumunu bulmak istiyoruz. `indexOf()` yöntemi dizeyi arar ve `to` sözcüğünün ilk geçtiği dizenin indeksi olan 8 — değerini döndürür.

Alt dize bulunamazsa, `indexOf()` metodu`-1` döndürür:

`const message = "Welcome to Bahamas!"*;*
const index = message.indexOf("hello")*;*
console.log(index)*; // -1*`

`indexOf()` metodu, bir dizenin belirli bir alt dizeyi içerip içermediğini kontrol etmek ve bulunursa bu alt dizenin konumunu elde etmek için kullanışlıdır. Bu yöntem bağımsız değişken olarak bir dize veya sayı alabilir. Sayısal değerler otomatik olarak dizeye dönüştürülür. Hiçbir argüman iletilmezse, sonuç `-1` olur.

# **Hedefler**

# **Böyleydi**

`getFileName(file)` fonksiyonu bir parametre alır `file` — dosya adını içeren bir dize. Dosya adı, örneğin `styles.css` veya `app.js` gibi addan nokta ile ayrılmış bir uzantıya sahip olabilir veya `styles`, `app` gibi bir uzantıya sahip olmayabilir. İşlev — uzantısız dosya adı olan bir dize döndürmelidir.

# **Böyle olacak**

`getFileName(file)` fonksiyonu bir parametre alır `file` — dosya adını içeren bir dize. Dosya adı, adından nokta ile ayrılmış bir uzantıya sahip olabilir, örneğin: `styles.css`, `app.js` veya bir uzantı olmadan, örneğin: `styles`, `app`.

Dosya adında bir uzantı olup olmadığını kontrol etmek için `indexOf` yöntemini kullanın. Fonksiyon kodunu şu şekilde tamamlayın:

- Dosya adı bir uzantı içermiyorsa, işlev dosya adını değiştirmeden bir alt dize döndürmelidir.
- Aksi takdirde, fonksiyon uzantısız dosya adını içeren bir alt dize döndürür. Bunu yapmak için `slice` yöntemini kullanın.

# **Testler**

- `getFileName(dosya)` işlevi şöyle bildirilir
- `getFileName("styles.css")` işlevi çağrıldığında `"styles"` döndürülür
- `getFileName("app.js")` işlevi çağrıldığında `"app"` döndürülür
- `getFileName("app")` işlevi çağrıldığında `"app"` döndürülür
- `getFileName("index.js")` işlevi çağrıldığında `"index"` döndürülür
- `getFileName("index.html")` işlevi çağrıldığında `"index"` döndürülür
- `getFileName("index.css")` işlevi çağrıldığında `"index"` döndürülür
- `getFileName("index")` işlevi çağrıldığında `"index"` döndürülür

`function getFileName(file) *{
}*`

`function getFileName(file) {
  const index = file.indexOf(".");
  return index === -1 ? file : file.slice(0, index);
}`