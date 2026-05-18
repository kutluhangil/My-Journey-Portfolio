# Semantik işaretleme

**Semantik işaretleme**, HTML işaretleme oluşturma yaklaşımıdır. Bu yaklaşımda etiket seçimi şu unsurlara bağlıdır:

- etiketin belirli bir amaca sahip olması;
- içeriğin türü.

Yaygın uygulamalar gerektiren durumlar dışında (örneğin resimler için `<img>`), daha karmaşık durumlar da vardır. Örneğin, iki geliştirici restoran sayfasına menü bölümü eklemek için farklı yaklaşımlar kullanabilir.

`*<!-- Geliştirici Petro -->*<h3>Şeften yemekler</h3>
<p>
  En taze yerel ürünlerin bir kombinasyonu 
  ürünler ve yazarın vizyonu.
</p>
<ul>
    <li>Kremalı balkabağı çorbası</li>
    <li>Tavada dana eti</li>
</ul>`

Peter sayfaya baktı ve restoranın adının `<h1>`, menünün `<h2>` ve özel tekliflerin `<h2>` olduğunu gördü. İlk yemekler, *Tatlılar* gibi farklı menü öğeleri `<h3>` içinde yer almıştır. Peter içeriğin türünü ve etiketlerin amacını analiz etti ve `<h3>` etiketiyle *Şeften yemekler* başlıklı bir bölüm ekledi. Ve yemeklerin bir listesini yaptı. Bu semantik işaretlemeye bir örnektir.

Matthew ise etiketleri tarayıcıda nasıl göründüklerine göre seçmiştir: başlık için kısa bir paragraf, açıklama için başka bir paragraf ve yemekler için üç ayrı paragraf daha kullanmıştır. Ve sayfası da çalışıyor. Ancak müşteri memnun değil.