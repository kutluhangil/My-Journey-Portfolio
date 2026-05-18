# startsWith() ve endsWith() metodu

`startsWith()` ve `endsWith()` metodu, sırasıyla bir dizenin başlangıcını ve sonunu kontrol etmek için kullanılır. Dizenin başlangıcının veya sonunun belirtilen değerle eşleşip eşleşmediğine bağlı olarak `true` veya `false` boolean değerini döndürürler.

# **startsWith() metodu**

`startsWith()` metodu, dizenin belirtilen alt dizeyle başlayıp başlamadığını denetler.

`str.startsWith(substr)`

`substr` — çıktı dizesinin başlaması gereken alt dizedir.

Örnek:

`const str = "Hello, world!";

console.log(str.startsWith("Hello")); *// true*
console.log(str.startsWith("hello")); *// false (yöntem büyük/küçük harfe duyarlıdır)*`

# **endsWith() metodu**

`endsWith()` metodu, dizenin belirtilen alt dizeyle bitip bitmediğini kontrol eder.

`str.endsWith(substr)`

endsWith() metodu, kontrol edilecek alt dizeyi bir bağımsız değişken olarak alır. Ayrıca isteğe bağlı olarak, dizede hangi karaktere kadar kontrol yapılacağını belirten bir ikinci parametre de kabul eder.

Örnek:

`const str = "Hello, world!";

console.log(str.endsWith("world!")); *// true*
console.log(str.endsWith("World!")); *// false (yöntem büyük/küçük harfe duyarlıdır)*`

```
Dikkat edin!
Her iki method de büyük/küçük harfe duyarlıdır. Bu, bir alt dizeyi orijinal dizeyle karşılaştırırken karakterlerin büyük/küçük harflerinin eşleşmesi gerektiği anlamına gelir. Bu yöntemlere geçerli bir argüman iletilmezse, sonuç genelliklefalse olur; ancak davranış, yöntemin varsayılan işleyişine bağlı olarak değişebilir.
```

# **Hedefler**

`checkFileExtension(fileName, ext)` fonksiyonu iki parametre alır:

- `fileName` — uzantılı dosya adı, örneğin `styles.css`, `hello.js`
- `ext` — uzantısı bir dize biçiminde, örneğin `.css`, `.js`, vb.

Fonksiyon kodunu şu şekilde tamamlayın:

- `fileName` dosya adı `ext` parametresinde belirtilen uzantıyla bitiyorsa, işlev "`File extension matches`" dizesini döndürür
- Aksi takdirde, işlev "`File extension does not match`" dizesini döndürür.

# **Testler**

- `checkFileExtension(fullname, name fileName, ext)` işlevi bildirilir
- `checkFileExtension("styles.css", ".css")` işlevinin çağrılması "`File extension matches`" sonucunu döndürür
- `checkFileExtension("styles.css", ".js")` işlevinin çağrılması "`File extension does not match`" sonucunu döndürür
- `checkFileExtension("app.js", ".js")` işlevinin çağrılması "`File extension matches`" sonucunu döndürür
- `checkFileExtension("app.js", ".html")` işlevinin çağrılması "`File extension does not match`" sonucunu döndürür
- `checkFileExtension("index.html", ".html")` işlevinin çağrılması "`File extension matches`" sonucunu döndürür
- `checkFileExtension("index.html", ".css")` işlevinin çağrılması "`File extension does not match`” sonucunu döndürür
- `checkFileExtension("index.html", ".js")` işlevinin çağrılması "`File extension does not match`" sonucunu döndürür

# **Doğru cevap**

`function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
}`