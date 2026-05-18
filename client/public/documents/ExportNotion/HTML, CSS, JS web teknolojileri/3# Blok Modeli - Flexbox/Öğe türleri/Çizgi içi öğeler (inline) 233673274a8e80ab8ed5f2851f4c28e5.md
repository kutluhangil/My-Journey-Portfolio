# Çizgi içi öğeler (inline)

Şimdiye kadar blok öğelerinin geometrisini inceledik.
Ancak, başka bir öğe türü de var: çizgi içi (inline) öğeler. Bu bölümde, çizgi içi öğeleri yatay geometri kullanarak nasıl şekillendirebileceğimizi [öğrenelim.ma](http://xn--renelim-80a38a.ma/) başka bir öğe türü daha var, değil mi? Öyleyse yatay geometriyi kullanarak çizgi öğelerini nasıl şekillendireceğimizi öğrenelim.

Satır içi öğeler görsel olarak satırın tüm uzunluğu boyunca birbiri ardına yerleştirilir. Yeterli alan olmadığında, bu öğeler bir sonraki satıra taşınır ve onu doldurur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/cd56bc27-b09b-4a46-b544-1400eb7c0286Group%202234.png)

- Satır içi öğeler için `display: inline` özelliği ayarlanır.
- Genişlikleri ve yükseklikleri yalnızca içeriğe bağlıdır, bunları açıkça ayarlayamazsınız. Yani, `width` ve `height` özelliklerinin hiçbir etkisi yoktur.
- Yeterli alan olduğu sürece bir satıra yerleştirilirler, bundan sonra yeni öğeler bir sonraki satıra taşınır.
- Yalnızca yatay geometriyi ayarlayabilirler: sol ve sağ kenar boşlukları, dolgu ve kenarlıklar. Yani, üst ve alt `margin`, `padding` ve `border` değerlerini yok sayarlar.

`<a class="link" href="">Bağlantı</a>`

Bağlantı, inline öğedir. Ona farklı bir geometri uygulayalım ve sonucu görelim.

`.link {
  background-color: tomato;
  color: white;

  */* ✅ İşe yarıyor */*padding-left: 20px;
  padding-right: 20px;
  margin-right: 50px;
  margin-left: 50px;

  */* ❌ Etkisi yok */*width: 1000px;
  height: 1000px;
  margin-top: 100px;
  margin-bottom: 100px;
}`

```
İnline öğeler yalnızca metin, medya içeriği ve diğer rastgele öğeler içerebilir. İstisna olarak,<a> öğesi paragrafları, listeleri, tabloları, başlıkları ve tam bölümleri sarmalayabilir; ancak diğer etkileşimli öğeler, bağlantılar ve düğmeler içermemelidir.
```