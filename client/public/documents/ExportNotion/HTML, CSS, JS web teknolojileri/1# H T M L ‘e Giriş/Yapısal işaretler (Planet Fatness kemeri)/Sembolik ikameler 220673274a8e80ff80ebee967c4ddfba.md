# Sembolik ikameler

```
Unicode kodlama standardı, neredeyse tüm dillerden karakterleri ve özel karakterleri içerir. Web sayfalarında belirli karakterleri doğru şekilde göstermek için, sembolik ikameler kullanılır. Bu, tarayıcıların doğru karakteri görüntülemesini sağlar.

```

Joker karakterler, tarayıcıların karakterlere dönüştürdüğü özel dizelerdir. Joker karakterleri çeşitli şekillerde kullanabilirsiniz.

- `&mnemocode` — bir karakteri anımsatıcısına veya adına göre ekler
- `&COD10` — bir karakteri ondalık koduna göre ekler
- `ODE16;` — bir karakteri onaltılık koduna göre ekler

Örneğin, telif hakkı sembolü © aşağıdaki gibi eklenebilir:

`<p>Tüm hakları saklıdır &copy; Lex, 2020</p>
<p>Tüm hakları saklıdır &#169; Lex, 2020</p>
<p>Tüm hakları saklıdır &#xa9; Lex, 2020</p>`

Herhangi bir karakter için anımsatıcı bulabileceğiniz [resmi W3C sayfası](https://html.spec.whatwg.org/multipage/named-characters.html) ve [Toptal'dan bir hizmet](https://www.toptal.com/designers/htmlarrows/symbols/) vardır.

```
Anımsatıcısı olmayan özel karakterler bazı tarayıcılarda hiç görüntülenmeyebilir veya doğru görüntülenmeyebilir. Bunlar geliştirme sırasında simgelerle (resimlerle) değiştirilir.
```