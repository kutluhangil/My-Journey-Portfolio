# Bağlantı (Planet Fitness kemeri)

Yeni bir müşteri, yeni bir sipariş demektir. Bir spor salonu zinciri için web sitesi tasarlamanız gerekiyor.

Bir yemek tarifi sayfasına benziyor, değil mi? Bu, etiketleri ve nitelikleri kullanma pratiği yapmak için harika bir fırsat.

Aynı zamanda birçok yeni şey öğrenmek için de bir fırsat: müşterinin farklı bağlantı türleri için birçok talebi var. Ve bağlantılar mizanpajda çok yaygındır!

Ve her yeni proje, deneyimli geliştiricilerin düşünce tarzını şekillendirir ve size düzeni nasıl analiz edeceğinizi öğretir.

[**İçerik analizi**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/%C4%B0%C3%A7erik%20analizi%2021d673274a8e80f3a4f7e9822132423c.md)

[**Nasıl bir hiyerarşi oluşturabilirim?**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Nas%C4%B1l%20bir%20hiyerar%C5%9Fi%20olu%C5%9Fturabilirim%2021d673274a8e8081b5e3d2601600e87e.md)

[**Bağlantıların listesi**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Ba%C4%9Flant%C4%B1lar%C4%B1n%20listesi%2021d673274a8e807baaaded84102d76d0.md)

[**Etiketlerin iç içe geçmesi. Resim bağlantıları**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Etiketlerin%20i%C3%A7%20i%C3%A7e%20ge%C3%A7mesi%20Resim%20ba%C4%9Flant%C4%B1lar%C4%B1%2021e673274a8e809f9cf6d3ccfee79e5d.md)

[**Listedeki resimleri bağlama**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Listedeki%20resimleri%20ba%C4%9Flama%2021e673274a8e80348d06da25b829fb17.md)

Markanın salonlarının Google haritasına giden bağlantıyı, metin yerine bağlantıya görseller yerleştirerek görsel bağlantılarla değiştirin. Görüntülerin genişliği 320 piksel olsun. Aşağıdaki `href`, `src` ve `alt` nitelikleri için değerleri alın.

```
Google görsellerine bağlantı 1: https://goo.gl/maps/qBnEfK5AingPLZgb9
Resim 1'in bağlantısı: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B031.jpg
Alternatif metin 1: PF Power Zone. A modern gym equipped with treadmills.

Google görsellerine bağlantı 2: https://goo.gl/maps/WZ4K6XMvHU7FkgWB7
Resim 2'ye bağlantı: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B032.jpg
Alternatif metin 2: PF Fit and Fast. A gym with indoor bikes behind a glass door.

Google görsellerine bağlantı 3: https://goo.gl/maps/UZqkiUqS6eWL5DJd7
Resim 3'ün bağlantısı: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B033.jpg
Alternatif metin 3: PF Body Sculpting. A studio with fitness balls and trx straps.

```

- Ağın spor kulüpleri bölümünün paragrafından sonra sırasız bir liste yer almalıdır.
- Liste üç öğeden oluşmalıdır.
- Listedeki her öğe bir bağlantı içermelidir.
- Her bağlantı bir resim içermelidir.
- Görüntülerin genişliği `320` piksel olmalıdır
- Bağlantılar metin içermemeli, sadece resim eklenmelidir.
- Resme tıkladığınızda, bağlantı yeni bir tarayıcı sekmesinde açılmalıdır.
- İlk bağlantının `href` niteliğinin değeri `https://goo.gl/maps/qBnEfK5AingPLZgb9` şeklinde olmalıdır.
- İlk görüntünün `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B031.jpg`şeklinde olmalıdır.
- İlk görselin alternatif metni `PF Power Zone'dur. A modern gym equipped with treadmills.` olmalıdır.
- İkinci bağlantının `href` niteliğinin değeri `https://goo.gl/maps/WZ4K6XMvHU7FkgWB7` şeklinde olmalıdır.
- İkinci görüntünün `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B032.jpg`şeklinde olmalıdır.
- İkinci görselin alternatif metni `PF Fit and Fast'tir. A gym with indoor bikes behind a glass door.` olmalıdır.
- Üçüncü bağlantının `href` niteliğinin değeri `https://goo.gl/maps/UZqkiUqS6eWL5DJd7` şeklinde olmalıdır.
- Üçüncü resmin `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B033.jpg`şeklinde olmalıdır.
- Üçüncü görselin alternatif metni `PF Body Sculpting'dir. A studio with fitness balls and trx straps.` olmalıdır.

<ul>
<li>
<a href="[https://goo.gl/maps/qBnEfK5AingPLZgb9](https://goo.gl/maps/qBnEfK5AingPLZgb9)" target="_blank">
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B031.jpg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B031.jpg)"
alt="PF Power Zone. A modern gym equipped with treadmills."
width="320"
>
</a>
</li>
<li>
<a href="[https://goo.gl/maps/WZ4K6XMvHU7FkgWB7](https://goo.gl/maps/WZ4K6XMvHU7FkgWB7)" target="_blank">
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B032.jpg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B032.jpg)"
alt="PF Fit and Fast. A gym with indoor bikes behind a glass door."
width="320"
>
</a>
</li>
<li>
<a href="[https://goo.gl/maps/UZqkiUqS6eWL5DJd7](https://goo.gl/maps/UZqkiUqS6eWL5DJd7)" target="_blank">
<img
src="[https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B033.jpg](https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B033.jpg)"
alt="PF Body Sculpting. A studio with fitness balls and trx straps."
width="320"
>
</a>
</li>
</ul>

[**Etiket İç İçe Geçirme. Temeller.**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Etiket%20%C4%B0%C3%A7%20%C4%B0%C3%A7e%20Ge%C3%A7irme%20Temeller%2021f673274a8e80a69230e913f32bf458.md)

[**İç içe yerleştirme: neyin nereye yerleştirilebileceği nasıl belirlenir**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/%C4%B0%C3%A7%20i%C3%A7e%20yerle%C5%9Ftirme%20neyin%20nereye%20yerle%C5%9Ftirilebilece%2021f673274a8e800e86e5e9552df32e60.md)

[**Kod düzeni: bölümler arasında girinti**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Kod%20d%C3%BCzeni%20b%C3%B6l%C3%BCmler%20aras%C4%B1nda%20girinti%2021f673274a8e8069bbebe10d507904be.md)

[**Address etiketi**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Address%20etiketi%2021f673274a8e80ceaf00f6b083729f50.md)

[**Bağlantılar: href tel ve mailto özniteliğinin değerleri**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Ba%C4%9Flant%C4%B1lar%20href%20tel%20ve%20mailto%20%C3%B6zniteli%C4%9Finin%20de%C4%9Fer%2021f673274a8e806c9e8dd99e56cce0d0.md)

[**Bağlantı: download özelliği**](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Ba%C4%9Flant%C4%B1%20download%20%C3%B6zelli%C4%9Fi%2021f673274a8e802a9d49d3b9284bba3e.md)

[Liste Oluşturma SIRALI - SIRASIZ](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Liste%20Olu%C5%9Fturma%20SIRALI%20-%20SIRASIZ%2021f673274a8e80c8b4e0fd8584895055.md)

[Buton Oluşturma -Bağlantı ve Buton arasında ki FARK?](Ba%C4%9Flant%C4%B1%20(Planet%20Fitness%20kemeri)/Buton%20Olu%C5%9Fturma%20-Ba%C4%9Flant%C4%B1%20ve%20Buton%20aras%C4%B1nda%20ki%20FAR%2021f673274a8e80cc86e6f33dfd1bf8c5.md)