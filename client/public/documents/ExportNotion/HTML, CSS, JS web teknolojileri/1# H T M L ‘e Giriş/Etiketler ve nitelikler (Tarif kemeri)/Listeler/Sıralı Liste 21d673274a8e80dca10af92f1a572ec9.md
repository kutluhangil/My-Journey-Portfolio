# Sıralı Liste

`<ol>` etiketi numaralı (sıralı) bir liste oluşturur, yani listedeki her öğe numaralandırılmıştır. Tarayıcı otomatik olarak öğeleri sırayla numaralandırır ve bu listeden bir veya birkaç öğe kaldırılırsa, diğer numaralar otomatik olarak yeniden numaralandırılır.

Genellikle numaralı liste, belirli bir sırayla yapılması gereken eylemleri sıralamak için kullanılır. Örneğin, bir tarifte adımların sıralaması şu şekilde olabilir:

`<h1>Çay Nasıl Demlenir</h1>
<p>Çay yapma kılavuzu adım adım. Sadece takip et, her şey yolunda gidecek!</p>

<ol>
	<li>Su kaynatın</li>
	<li>Demliğe çayı koyun</li>
	<li>Demliğe su dökün</li>
	<li>10 dakika bekleyin, ardından içmeye hazır hale gelir.</li>
</ol>`

```
<ul> ve<ol> etiketlerine yalnızca liste öğeleri yani<li> etiketleri yerleştirilebilir.<li> etiketlerinin içine diğer etiketler de yerleştirilebilir. Daha fazla detayı bir sonraki bölümde ele alacağız.
```

ÖRNEK:

Malzeme listesine ek olarak, yemeği hazırlamak için ne yapacağınızı ve hangi sırayla yapacağınızı bilmeniz gerekir. Pişirme sürecinin genel bir tanımını içeren bir paragraf ekledik. Göreviniz, yemeği hazırlamak için bir adımlar listesi eklemektir. Adımların sırası çok önemlidir, bu nedenle numaralandırılmış bir liste kullanmalısınız.

İşte toplamda altı adet olan adımların metni.

```
- Beat eggs, salt and sugar together in a bowl until smooth.
- Add flour and farmer's cheese. Mix well until the dough is thick and sticky.
- Heat a skillet over medium heat, add 2-3 tablespoon oil.
- Divide dough into portions, form into balls and coat with some flour. With well-floured hands, flatten slightly to form into discs.
- Once the oil is hot, place the discs and fry until golden brown, 3-5 minutes each side.
- Serve with your favorite toppings - jam, sour cream, or fruits and berries.

```

- Kod `<ol>` etiketini içermelidir.
- `<ol>` etiketi, pişirme sürecini anlatan paragraftan sonra yerleştirilmelidir.
- `<ol>` etiketinin içinde altı adet `<li>` etiketi bulunmalıdır.
- `<li>` etiketlerinin içindeki metin, adımların metniyle eşleşmelidir.

<ol>
<li>Beat eggs, salt and sugar together in a bowl until smooth.</li>
<li>Add flour and farmer's cheese. Mix well until the dough is thick and sticky.</li>
<li>Heat a skillet over medium heat, add 2-3 tablespoon oil.</li>
<li>Divide dough into portions, form into balls and coat with some flour. With well-floured hands, flatten slightly to form into discs.</li>
<li>Once the oil is hot, place the discs and fry until golden brown, 3-5 minutes each side.</li>
<li>Serve with your favorite toppings - jam, sour cream, or fruits and berries.</li>
</ol>