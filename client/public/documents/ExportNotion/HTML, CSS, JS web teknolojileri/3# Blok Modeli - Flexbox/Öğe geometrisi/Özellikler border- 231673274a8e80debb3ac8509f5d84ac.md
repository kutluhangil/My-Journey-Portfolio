# Özellikler border-*

Kenarlık değerini ayrı olarak ayarlayan özellikler de vardır. Bunlar, kenarlık özelliğine alternatif olarak veya yalnızca bir kenarlık değerini değiştirirken diğer özellikleri yinelemekten kaçınmak için kullanılabilir.

`border-width: değer;
border-style: value;
border-color: value;`

Örneğin, fareyle üzerine gelindiğinde yalnızca öğenin kenarlığının rengi değişiyorsa.

`.box {
  width: 200px;
  height: 200px;
  border: 5px solid orangered;
}

.box:hover {
  border-color: cyan;
}`

Aşağıdaki canlı kod örneğine bakalım.

- Fareyle üzerine gelindiğinde kenarlık renginin nasıl değiştiğini görmek için fareyi öğenin üzerine getirin.
- Farklı görünüm durumları için öğenin dolgu özelliklerinin değerlerini **CSS** sekmesinde bulabilirsiniz.