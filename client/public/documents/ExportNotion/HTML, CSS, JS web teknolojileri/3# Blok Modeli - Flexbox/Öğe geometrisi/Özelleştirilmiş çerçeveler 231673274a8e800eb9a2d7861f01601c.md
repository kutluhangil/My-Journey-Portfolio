# Özelleştirilmiş çerçeveler

Bir öğenin her tarafına farklı stiller vermek mümkündür. Genellikle bunu yapmazsınız, çünkü çok renkli kenarlıklar ve çeşitli stiller standart bir uygulama değildir. Ancak, bir öğenin sadece bir tarafına kenarlık eklemek istediğinizde bu özellikler kullanışlı hale gelir.

`border-top: genişlik stili renk;
border-right: genişlik stil rengi;
border-bottom: genişlik stil rengi;
border-left: genişlik stil rengi;`

Şimdi, her bir taraf için farklı kenarlık stilleri ayarlayalım:

`.box {
	width: 200px;
  height: 200px;

  border-top: 3px solid blue;
  border-right: 5px dotted black;
  border-bottom: 7px dashed palevioletred;
  border-left: 9px double green;
}`

Sonucun nasıl göründüğüne bakalım:

- **Result** sekmesinde, şimdiye kadar gördüğünüz en sıra dışı çerçeveyi göreceksiniz.
- Nasıl düzenlendiğini görmek için **CSS** sekmesine tıklayın.

```
.box {
  width: 200px;
  height: 200px;

  border-top: 3px solid blue;
  border-right: 5px dotted black;
  border-bottom: 7px double palevioletred;
  border-left: 9px dashed green;
}
```

![Screen Shot 2025-07-15 at 17.35.46 PM.png](%C3%96zelle%C5%9Ftirilmi%C5%9F%20%C3%A7er%C3%A7eveler/Screen_Shot_2025-07-15_at_17.35.46_PM.png)