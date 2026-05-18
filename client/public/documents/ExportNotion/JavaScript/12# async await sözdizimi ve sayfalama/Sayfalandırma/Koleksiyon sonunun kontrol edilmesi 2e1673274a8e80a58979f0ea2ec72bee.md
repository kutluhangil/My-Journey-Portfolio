# Koleksiyon sonunun kontrol edilmesi

Kullanıcı Gönderileri getir düğmesine tıkladığında indirilecek gönderi yoksa, bu koleksiyonun sonuna ulaşıldığı anlamına gelir. Bu olduğunda, bir bildirim görüntülemelisiniz.

Bunu yapmak için [iziToast](https://www.notion.so/6e246f34ee2b48aaab3b71f14fe422c1?pvs=21) kütüphanesini kullanıyoruz.

Bir koleksiyonun sonunu kontrol etme işlevini eklediğimiz canlı bir örneğe göz atalım.

**JSONPlaceholder API**'si bu işlevi arka uçta uygulamadığından, koleksiyon sonu kontrolünü ön uçta ekledik. Bizim durumumuzda, koleksiyondaki toplam öğe sayısını (100) bir gruptaki öğe sayısına bölmek yeterlidir.

```
// Bir gruptaki öğe sayısını kontrol eder
let limit = 30;
// Koleksiyondaki grup sayısı
const totalPages = Math.ceil(100 / limit);
```

Bu, arka ucun mevcut sayfa sayısı yerine koleksiyondaki toplam öğe sayısını döndürdüğü duruma benzer.

Sonraki her istekten önce, mevcut grup sayısını toplam grup sayısıyla karşılaştırır ve HTTP isteği yapmadan bir bildirim görüntüleriz.

```
if (page > totalPages) {
  return iziToast.error({
    position: "topRight",
    message: "We're sorry, there are no more posts to load"
  });
}
```