# Değiştirici tuşlar

Tabii ki, popüler tuş kombinasyonları olan **Ctrl + S**, **Ctrl + D** veya **Command + D** gibi kısayollarla tanışık olmalısınız.

Ancak bazı tuş kombinasyonları, **varsayılan tarayıcı davranışlarıyla çakışabilir**.

Örneğin, **Ctrl + D** veya **Command + D**, genellikle sayfayı **yer imlerine ekler**.

Bu nedenle, sayfa üzerinde kullanılacak tuş kombinasyonlarını, tarayıcı kısayollarıyla çakışmayacak şekilde tasarlamak önemlidir.

Olay nesnesinde tuş kombinasyonlarını algılamak için şu özellikler kullanılır:

- `ctrlKey`
- `altKey`
- `shiftKey`
- `metaKey`

Bu özellikler, ilgili düzenleyici (modifier) tuşun **basılı olup olmadığını** belirten bir **boole** değeri tutar.

```
document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    console.log("«Ctrl + s» or «Command + s» combo");
  }
});
```

```
Son zamanlara kadar, klavye kombinasyonlarını işlemek için keyCode özelliği yaygın olarak kullanılıyordu. Forumlarda ve blog yazılarında hâlâ bu özelliğe rastlayabilirsiniz.
Ancak unutmayın: keyCode artık eski (deprecated) bir özelliktir. Bunun yerine, key ve code özelliklerini kullanmak daha doğru ve güncel bir yaklaşımdır.
```