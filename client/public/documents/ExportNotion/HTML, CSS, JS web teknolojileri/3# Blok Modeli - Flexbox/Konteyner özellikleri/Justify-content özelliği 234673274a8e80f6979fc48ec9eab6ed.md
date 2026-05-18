# Justify-content özelliği

`Justify-content` özelliği, `main-start` ile `main-end` arasındaki ana eksen üzerindeki öğelerin konumlandırılmasını kontrol eder.

`justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/90919adf-2a80-49f9-ac54-8859a33ec2f8Frame%2048105.png)

- `flex-start` — elemanlar ana eksenin `main-start` noktasına hizalanır. Bu varsayılan değerdir.
- `flex-end` — elemanlar ana eksenin `main-end` noktasına hizalanır.
- `center` — elemanlar eksen üzerinde ortalanır.
- `space-between` — elemanlar ana eksen üzerinde eşit olarak dağıtılır. İlk eleman eksenin başına, son eleman ise sonuna ayarlanır.
- `space-around` — Öğeler, eşit aralıklarla yerleştirilir. Ancak, kenar öğeler, konteyner sınırlarına diğer öğelerin yarısı kadar uzaklıkta bulunur.
- `space-evenly` — Öğeler, aralarındaki boşluk ve kenar boşlukları eşit olacak şekilde dağıtılır.

```
justify-content özelliğinin diğer değerleri de vardır, ancak bazı tarayıcılar tarafından desteklenmemekte veya farklı tarayıcılarda tutarsızlık gösterebilir.

```

Ana değer türlerini ve bunların tarayıcıda nasıl işlendiğini gösteren canlı bir örneği keşfedin.

![Screen Shot 2025-07-18 at 22.21.14 PM.png](Justify-content%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-18_at_22.21.14_PM.png)

Varsayılanlar da dahil olmak üzere örnekte gösterilen değerler en yaygın kullanılanlardır. Bunlar arasında içeriği sağa kaydırma (`flex-end`), ortalama (`center`) ve öğeleri eşit aralıklarla yerleştirme (`space-between`) yer alır.