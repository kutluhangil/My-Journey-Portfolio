# Kütüphaneyi bağlama

Bir kütüphaneyi projede kullanabilmek için onu **bağlamanız**, yani kütüphane dosyalarını projeye dahil etmeniz gerekir.

Örneğin, [Lodash](https://lodash.com/) kütüphanesini bir **CDN** aracılığıyla projeye bağlayalım. Bir JavaScript kütüphanesini CDN üzerinden eklemek birkaç basit adımdan oluşur.

**Adım 1:**

**Öncelikle,** [https://www.jsdelivr.com/](https://www.jsdelivr.com/) adresindeki CDN hizmeti web sitesine gidin ve kullanmak istediğiniz kütüphaneyi **adıyla aratarak** bulun.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8d732b3d-0317-4731-a0a0-47424ac45fa1Screenshot%202023-08-23%20at%2014.06.08.png)

**Adım 2:**

Sonuç listesinden ilgili kütüphaneye tıklayarak seçin. Bağlantıya tıkladığınızda, kütüphane hakkında bilgi içeren bir sayfaya yönlendirilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8a1d361f-2118-411b-8690-fb83d82c9460Screenshot%202023-08-23%20at%2014.08.44.png)

**Adım 3:**

`<script>` etiketini içeren HTML kodunu kopyalayın. Ardından HTML dosyanızı açın ve örnekte gösterildiği gibi, belgenin sonuna — kapanış `</body>` etiketinden hemen önce — kütüphaneye ait script bağlantısını ekleyin.

```
<!DOCTYPE html>
<html lang="en">
  <head>
	 <!-- head tags -->
  </head>
  <body>
    <!-- HTML-markup -->

    <!-- Lodash library script file -->
		<script async src="<https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js>"></script>
    <!-- Your script file -->
    <script defer src="path/to/script.js"></script>
  </body>
</html>
```

Kütüphane kodu, ana JavaScript dosyanızdan **önce** HTML'e bağlanmalıdır.

Ayrıca, kütüphaneye ait `<script>` etiketine `async` niteliğini eklemeyi unutmayın. Bu, kütüphane dosyasının mümkün olan en kısa sürede yüklenmesini sağlar.

Artık kodunuzda kütüphaneye erişebilirsiniz.

Kütüphaneleri bir CDN aracılığıyla bağladığınızda, tarayıcıda `window` nesnesine kütüphanenin sunduğu içerikleri temsil eden bir özellik eklenir. Bu özellik, kütüphaneye özgü bir isimle tanımlanır ve genellikle belgelerinde belirtilir.

**Lodash** kütüphanesi için bu özellik **`_`** (alt çizgi) karakteridir.

`console.log(_); // Lodash kütüphane nesnesinin tamamı`

Kütüphanenin çalışıp çalışmadığını kontrol etmek için şu işlevleri kullanabilirsiniz:

- [`sum`](https://lodash.com/docs/4.17.15#sum), — bir dizideki sayıların toplamını hesaplar
- [`shuffle`](https://lodash.com/docs/4.17.15#shuffle) — dizideki elemanları karıştırarak yeni bir dizi oluşturur

```
console.log(_.sum([4, 2, 8, 6])); // 20
console.log(_.sum([5, 10])); // 15

console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]
```

```
Lütfen dikkat!
 Kütüphanelere nasıl bağlanacağınız ve onları nasıl kullanacağınız, kütüphanenin yapısına ve belgelerine bağlı olarak değişiklik gösterebilir.

```

Tüm modern kütüphaneler, resmi web sitelerinde yer alan belgeler ve kullanım örnekleriyle işlevlerini daha ayrıntılı olarak anlamanıza yardımcı olur.

[Önemli Not](K%C3%BCt%C3%BCphaneyi%20ba%C4%9Flama/%C3%96nemli%20Not%202d6673274a8e80529885f69b82d5feb4.md)