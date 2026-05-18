# Düzensiz liste. Etiketlerin iç içe geçmesi

`<ul>` (unordered list) etiketi, her bir öğesi küçük bir simgeyle (işaretçi) başlayan işaretli (düzensiz) bir liste oluşturur. CSS ile işaretçiyi kaldırmak veya değiştirmek mümkündür.

Düzensiz liste, bir grup öğeyi isteğe bağlı sırayla listelemek için kullanılır. Örneğin, tatil beldeleri listesi:

`<h1>En sıcak tatil köyleri</h1>
<p>Bu yıl uzmanlar aşağıdaki yerleri ziyaret etmenizi öneriyor.</p>

<ul>
  <li>Tunus</li>
  <li>Türkiye</li>
  <li>Yunanistan</li>
  <li>Mısır</li>
</ul>`

```
Kod Düzenleme
Dikkat etmeniz gereken bir nokta, iç içe geçmiş<li> öğelerinin<ul> etiketinin hemen altında değil, bir boşlukla hizalanmış olmalarıdır. Standart boşluk genellikle 2 ya da 4 boşluk karakteridir. Önemli olan, proje genelinde boşluğun tutarlı olmasıdır. Bu "ağaç" görsel olarak öğelerin iç içeliğini yansıtır ve kodun okunabilirliğini artırır.
```

ÖRNEK:

Web sitesinde zaten ihtiyacınız olan ürünlerin genel bir tanımını içeren bir paragraf var, ancak aynı zamanda bir içerik listesine de ihtiyacınız var. Göreviniz bu paragrafın altına `<ul>` şeklinde sırasız bir liste eklemektir. İşte toplamda yedi adet olan içeriklerin metni. Her bileşen bir liste öğesi ile temsil edilmelidir — `<li>` etiketi

```
- 2 cups farmer's cheese, homemade
- 3 large eggs
- 3 cups all-purpose flour, plus about 1/2 cup more for dredging
- 3 tablespoons white sugar
- half teaspoon salt
- 2-3 tablespoons extra light olive oil for each batch
- fresh fruit, jam, or sour cream for topping

```

- Kod `<ul>` etiketini içermelidir.
- `<ul>` etiketi, bileşenleri açıklayan paragraftan sonra yerleştirilmelidir.
- `<ul>` etiketinin içinde yedi adet `<li>` etiketi bulunmalıdır.
- `<li>` etiketinin içindeki metin, bileşenlerin metniyle eşleşmelidir.

<p>
The right choice of cheese is extremely important for this dish. Farmer's
cheese will suit best. Another alternative is using ricotta or cottage cheese.
In this case, the taste and flavor will be slightly different.
</p>

<ul>
<li>2 cups farmer's cheese, homemade</li>
<li>3 large eggs</li>
<li>3 cups all-purpose flour, plus about 1/2 cup more for dredging</li>
<li>3 tablespoons white sugar</li>
<li>half teaspoon salt</li>
<li>2-3 tablespoons extra light olive oil for each batch</li>
<li>fresh fruit, jam, or sour cream for topping</li>
</ul>