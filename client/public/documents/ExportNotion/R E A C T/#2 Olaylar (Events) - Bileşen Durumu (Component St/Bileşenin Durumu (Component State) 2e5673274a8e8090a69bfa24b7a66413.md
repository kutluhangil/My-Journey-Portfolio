# Bileşenin Durumu (Component State)

Bileşenlerin, kullanıcı etkileşimleri nedeniyle ekranda gösterilen verileri sık sık değiştirmesi gerekebilir. Örneğin, bir formda veri girişi sırasında giriş alanının güncellenmesi, bir resim kaydırıcısında tıklamayla resmin değiştirilmesi veya "Satın Al" butonuna basıldığında ürünün sepete eklenmesi gibi durumlar söz konusu olabilir.

Bileşenlerin "hatırlaması gereken" çeşitli verileri vardır: mevcut giriş değeri, gösterilen resim ve alışveriş sepetindeki ürünler gibi. React'te, bileşene özgü bu tür bellek **durum (state)** olarak adlandırılır. `props`, bileşene dışarıdan iletilen verilerdir; **durum (state)** ise bileşenin iç dinamik verileridir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/619e7d20-2daf-4565-b21e-bc00f107c432Screenshot%202023-11-29%20at%2014.00.09.png)

Bir bileşenin durumu veya `props`'ları değiştiğinde, JSX'te güncelleme ve yeniden render işlemi gerçekleşir. Başka bir deyişle, **durum**, arayüzde neyin görüntüleneceğini kontrol eden reaktif verilerdir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e3db9b6d-3b8d-44e4-81e8-9011aeac8338image%20%2829%29.jpg)

- Durum, arayüzün render edilmesi için gerekli olan minimum veri kümesini saklar.
- Herhangi bir veri tipini depolayabilir.
- Kullanıcının eylemlerine göre değişiklik gösterebilir.
- Durum değiştiğinde, bileşen güncellenmiş bir yapı döndürür ve arayüz buna göre değiştirilir.
- Bileşenin durumundaki değişiklikler, üst (ebeveyn) veya komşu bileşenleri etkilemez; yalnızca alt (çocuk) bileşenleri etkiler.

Bu yapı, uygulamadaki verilerin bileşen ağacında yalnızca bir yönde — üstten alta — aktarılmasını sağlar. Bu mimari, **"tek yönlü veri akışı" (unidirectional data flow)**olarak adlandırılır ve bileşenler arasındaki veri tutarlılığını artırarak uygulamanın daha öngörülebilir ve yönetilebilir olmasına yardımcı olur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d587d7b6-9bf7-4333-aa42-f6c7315edd67image%20%2830%29.jpg)