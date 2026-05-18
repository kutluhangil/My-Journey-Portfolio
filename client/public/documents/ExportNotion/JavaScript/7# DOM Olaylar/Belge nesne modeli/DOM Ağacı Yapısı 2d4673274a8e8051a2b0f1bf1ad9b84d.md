# DOM Ağacı Yapısı

HTML belgesinin ağacı görselleştirmek için bir [DOM ağacı oluşturucu](https://software.hixie.ch/utilities/js/live-dom-viewer/) hizmeti kullanılır:

- Üstteki pencereye düzeni kopyalayın.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Document title</title>
  </head>
  <body>
    <h1>Page title</h1>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </body>
</html>
```

- Aşağıdaki pencerede ağaç benzeri bir hiyerarşi görünüyor.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/872a6590-37cc-4c75-ab6a-e77941ec3b13image.png)

Bu ağaçta iki tür düğüm belirlenmiştir:

**Eleman düğümleri** (element node), genellikle birbirine gömülü olan tek bir öğe ile oluşturulan etiketlerden oluşur. Ağacın yapısı tamamen bunlar tarafından oluşturulur.

**Metin düğümleri** (text node), öğelerin içindeki metinlerle oluşturulur. Metin düğümü yalnızca metin satırını içerir ve çocuk düğümlere sahip olamaz; bu nedenle her zaman hiyerarşinin en altında yer alır. Boşluklar ve satır sonu karakterleri de metin düğümleridir. Bu nedenle, metin düğümlerinin sayısı şemada eleman düğümlerinden daha fazla olabilir. Eleman düğümleri (etiketler) arasındaki tüm paragrafları/boşlukları kaldırırsanız, şema daha tanıdık görünecektir.

Bu kuralın istisnaları vardır:

- `head` öğesinden önceki boşluklar yoksayılır.
- `body` öğesinden sonra yer alan herhangi bir içerik bir eleman oluşturmaz; bu içerik otomatik olarak `body` öğesinin sonuna taşınır.