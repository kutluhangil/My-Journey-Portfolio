# @font-face yönergesi

Bir önceki adımda HTML belgesine tam olarak ne eklediğimizi görelim.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3e9159da-d7d9-45e2-9f6e-56cafad0206aimage%20%2816%29.png)

1. Geliştirici araçlarını açın ve **Network** sekmesine gidin.
2. Yalnızca stil dosyalarını görüntülemek için **CSS** filtresini seçin.
3. **Google Fonts**'tan dosyaya tıklayın.
4. Dosyanın içeriğini görüntüleyen **Preview** sekmesini seçin.

`*/* latin */*@font-face {
  font-family: 'Tangerine';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Tangerine Bold'), local('Tangerine-Bold'),
    url(<https://fonts.gstatic.com/s/tangerine/v12/Iurd6Y5j_oScZZow4VO5srNZi5FNym499g.woff2>)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}`

Yani, **Google Fonts** bize düz bir CSS dosyası döndürdü, içinde `@font-face` direktifi - bir yazı tipi tanımı bulunmaktadır. Bu direktif, yazı tipi dahil edilirken tarayıcıya yazı tipi parametrelerini belirtme olanağı sağlar.

- `font-family` — CSS kodumuzda kullanmak için yerel bir ad.
- `font-style` — kontur türü (normal, italik, vb.).
- `font-weight` — bağlanacak yazı tipinin kalınlığı.
- `font-display` — bir yazı tipi yüklenirken metnin görüntülenmesini kontrol eder.
- `src` — yazı tipi dosyasının kendisine bir bağlantı ve genellikle `woff` veya `woff2` olan türünün bir belirtimi. Bizim durumumuzda, yazı tipi dosyası Google'ın sunucularında barındırılıyor, ancak proje dosyalarında depolanan yerel bir yazı tipi de olabilir.
- `unicode-range` — [Unicode karakter tablosundan](https://symbl.cc/en/unicode/table/) yazı tipindeki gerekli karakter kümesini belirtir. Tüm karakterleri yüklemeniz gerekmez, ne kadar az olursa yazı tipi o kadar hızlı yüklenir.

```
İnsanlık tarafından bilinen tüm semboller (harfler, matematiksel işaretler, vb.), her karakterin bir adının olduğuUnicode standardı tarafından toplanır ve tanımlanır (örneğin, "latin büyük harf a") ve (code point) kodu -0 ila10FFFF arasında bir sayı.
```