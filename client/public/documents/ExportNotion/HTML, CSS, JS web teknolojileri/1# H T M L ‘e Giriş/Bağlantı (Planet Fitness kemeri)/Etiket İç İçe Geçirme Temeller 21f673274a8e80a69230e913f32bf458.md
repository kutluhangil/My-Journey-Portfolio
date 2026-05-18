# Etiket İç İçe Geçirme. Temeller.

HTML'de etiketleri iç içe yerleştirirken belirli kurallara uymanız gerekir. İç içe geçiş yaparken etiketlerin doğru kapatılması önemlidir. Aşağıdaki örnekte, etiketlerin iç içe geçiş düzenini ve kapanış sırasını görebilirsiniz:

`<etiket1>
  <etiket2>
    <etiket4>...</etiket4>
    <etiket5>...</etiket5>
  </etiket2>
  <etiket3>
    <etiket6>...</etiket6>
  </etiket3>
</etiket1>`

Bu yapıyı, küçük parçaları büyük parçaların içine yerleştirip, en küçükten başlayarak en büyüğe doğru kapatma şeklinde düşünebilirsiniz.

Aşağıdaki örnekte, geçerli bir paragraf işaretlemesi ve bir liste gösterilmektedir:

`<p><a href="squoosh.app">Squoosh</a> — görüntü optimizasyon hizmeti.</p>

<p>Avantajlarımızın listesi</p>
<ul>
  <li>Tarayıcıda çalışır</li>
  <li>Sistem yüklenmiyor</li>
  <li>Kullanıcı dostu arayüz</li>
</ul>`

Ve bu versiyonda 2. ve 6. satırlarda oldukça tipik hatalar vardır.

`*<!-- Kapanış etiketlerinin sırası takip edilmiyor -->*<p><a href="squoosh.app">Squoosh — görüntü </a>optimizasyonu</p> hizmeti.

*<!-- Etiketleri yerleştirmek için belirli kurallara uymamak -->*<ul>
  <p>Avantajlarımızın listesi</p>
  <li>Tarayıcıda çalışır</li>
  <li>Sistem yüklenmiyor</li>
  <li>Kullanıcı dostu arayüz</li>
</ul>`

```
HTML'yi birkaç gün kullandıktan sonra, temel etiketlere aşina olduğunuzda iç içe yerleştirme kuralları sezgisel hale geleceğinden, öğeleri doğru şekilde iç içe yerleştirmeye alışacaksınız.
```