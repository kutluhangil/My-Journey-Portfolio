# Bağlantı: download özelliği

Ağ, ziyaretçilerine yeni başlayanlar için bir eğitim programı sunuyor.

Hepimiz yeni bir şeye başlamanın ne kadar zor olduğunu biliyoruz, bu yüzden programı indirmek çok kolay olmalı. Bu, tereddütle geçirilen zamanı azaltacaktır!

Program PDF formatındadır. Dosya bağlantıya tıklanarak indirilebilir.

# **Bağlantı: download özelliği**

`<a>` bağlantısında, `href` niteliğinin değeri, aşağıdaki örnekte olduğu gibi dosyanın yolunu gösterebilir. Bu durumda, tarayıcı bu tür dosyaları nasıl işleyeceğini biliyorsa geçerli sekmede açmaya çalışacaktır. Bu durum genellikle resimler ve PDF dosyaları için geçerlidir.

`<a href="/path/to/cv.pdf">CV İndir</a>`

`Download` niteliği, tarayıcıya belirtilen kaynağın açılmaması gerektiğini, ancak kullanıcı bağlantıya tıklarsa indirileceğini söyler.

`<a href="/path/to/cv.pdf" download>CV İndir</a>`

`Download` niteliği boş bırakılabilir. Bu durumda, dosya adı indirme sırasında `href` niteliğinde belirtilen adla aynı olacaktır.

`Download` niteliğinin değeri, indirildikten sonra yeni dosya adını belirler. Geçerli değerler üzerinde herhangi bir kısıtlama yoktur: tarayıcı doğru dosya uzantısını otomatik olarak algılar ve yüklenen dosyaya ekler - .img, .pdf, .txt, .html, vb.

`<a href="/path/to/cv.pdf" download="cat-resume">CV İndir</a>`

Harika Kutluhan, şimdi her şey netleşti. Elindeki HTML örneği şu bölümü içeriyor:

```
<h2>How to stop doubting and start exercising regularly</h2>
<p>
  Thousands of people dream about having a nice body...
</p>
```

Senin görevin:

Bu **paragrafın altına**, PDF dosyasını indirmek için bir bağlantı eklemek.

Ayrıca:

- href değeri: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/Build-Muscles.pdf
- download değeri: build-muscles-plan
- Bağlantı metni: Download «Build Muscles» training plan

---

## **✅ Doğru ve Tamamlanmış HTML**

```
<h2>How to stop doubting and start exercising regularly</h2>
<p>
  Thousands of people dream about having a nice body. They start doing sport,
  face challenges and quit it in a few weeks or even days. Why does it happen?
  The problem is that people often do too much physical activity when their body
  is not ready for this load. Without allowing any recovery time between
  exercise sessions, they get tired quickly and lose motivation. We believe that
  you should have a smooth start and focus on developing a habit of doing sport
  regularly. So, we offer you a few training programs for beginners.
</p>

<a
  href="https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/Build-Muscles.pdf"
  download="build-muscles-plan"
>
  Download «Build Muscles» training plan
</a>
```

---

### **🧠 Neden Bu Doğru?**

| **Özellik** | **Açıklama** |
| --- | --- |
| <a> etiketi | İndirme bağlantısı oluşturur. |
| href="..." | Bağlantı verilen PDF dosyasının adresi. Doğru şekilde eklendi. |
| download="..." | Kullanıcı dosyayı indirdiğinde **dosya adı** build-muscles-plan olacak. |
| Bağlantı metni | Tam olarak istenilen metin: Download «Build Muscles» training plan |
| Yerleştirme | Paragrafın **altına** yerleştirildi. Görevle tamamen uyumlu. |

---

Örnek olarak:

Pazarlamacı daha geniş bir müşteri kitlesini kapsamayı ve iki eğitim planı daha eklemeyi talep eder. Listeden bir bağlantı yerine, üç bağlantıdan oluşan sırasız bir liste oluşturn. Aşağıdaki tüm değerleri alın.

```
Dosya 1'in bağlantısı: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/Build-Muscles.pdf
İndirme sonrası dosya adı 1: build-muscles-plan
Bağlantı metni 1: Download «Build Muscles» training plan

Dosya 2'ye bağlantı: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/Burn-Fat.pdf
İndirme sonrası dosya adı 2: burn-fat-plan
Bağlantı metni 2: Download «Burn Fat» training plan

Dosya 3'ün bağlantısı: https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/Build-Strength&Mass.pdf
İndirme sonrası dosya adı 3: strength-and-mass-plan
Bağlantı metni 3: Download «Build Strength and Mass» training plan

```

- Dosya indirme bağlantılarının listesi, yeni başlayanlar için ipuçları bölümündeki paragrafın altında yer almalıdır.
- Liste üç öğeden oluşmalıdır.
- Listedeki her öğenin içinde bir bağlantı bulunmalıdır.
- İlk bağlantının `href` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/Build-Muscles.pdf` şeklinde olmalıdır.
- İlk bağlantının `download` niteliğinin değeri `build-muscles-plan`şeklindedir
- Bağlantıdaki ilk bağlantının metni `Download «Build Muscles» training plan` şeklinde olmalıdır.
- İkinci bağlantının `href` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/Burn-Fat.pdf` şeklinde olmalıdır.
- İkinci bağlantının `download` niteliğinin değeri `burn-fat-plan`şeklinde olmalıdır.
- İkinci bağlantının metni `Download «Burn Fat» training plan` şeklinde olmalıdır.
- Üçüncü bağlantının `href` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/Build-Strength&Mass.pdf` şeklindedir
- Üçüncü bağlantının `download` niteliğinin değeri `strength-and-mass-plan` şeklinde olmalıdır.
- Üçüncü bağlantının metni `Download "Build Strength and Mass" training plan` şeklinde olmalıdır.

![Screen Shot 2025-06-27 at 15.20.01 PM.png](Ba%C4%9Flant%C4%B1%20download%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-06-27_at_15.20.01_PM.png)

*Yöneticiler geri bildirim aldı.*

- *Müşteriler, ağın spor kulüpleri hakkındaki bölümde yeterli bilgiye sahip olmadıklarını belirtti.*
- *Arayüz ile nasıl etkileşim kurulacağı da net değil. Herkes bir spor kulübüne giden bir bağlantıyı takip etmek için bir resme nasıl tıklayacağını bilemeyebilir.*

*Müşteri değişiklik talebinde bulunduğunda, bu genellikle geliştiricilerin karşılaştığı yaygın bir zorluktur.*

*Elbette, bir web sitesinde bir şeyi değiştirmek, onu sıfırdan inşa etmekten daha zordur. Ama bunu yapabilirsiniz. Önemli olan, görevleri birkaç adıma bölmektir.*

*Görev 1: Resim bağlantısını "Google Haritalar'da Aç" metnini içeren bir bağlantıyla değiştirin. Bunu yapmak için gereken adımlar:*

*Bunu yapmak için yapmanız gerekenler:*

- Kodda ağın spor kulüpleriyle ilgili bölümü bulun. Kod ne kadar iyi tasarlanmışsa, doğru bölümü o kadar hızlı bulursunuz.
- Etiketlerin iç içe geçme düzeylerini değiştirin. Şu anda: liste öğelerinde `<li>` etiketleri içinde `<a>` etiketleri yer alıyor ve `<a>` etiketlerinde `<img>` etiketleri bulunuyor. `<a>` ve `<img>` etiketlerinin `<li>` öğelerinde kalmasını istiyoruz, ancak `<a>` ve `<img>` arasında komşu olmaları gerekiyor.
- Bağlantı etiketlerinin listede olduğundan, ancak resimden sonra geldiğinden emin olun.
- Tüm bağlantı etiketlerine Google Haritalar'da Aç metnini ekleyin.

*2. Müşterinin arama talep edebilmesi için bir buton ekleyin. Odanın adını ve açıklamasını içeren bir başlık ekleyin.*

# **Spor salonu bölümü düzeninin iki versiyonunu karşılaştırın**

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/eeca16fa-a7ab-482d-a212-8f81e76d6042Group%202229%20%282%29.png)

# 

Salon listesinin kodunu, görüntünün artık bir bağlantı olmaması için değiştirin. Bunun yerine, her görselin altına `Open in Google Maps` metnini içeren bir bağlantı ekleyin. Bağlantılar ayrıca yeni bir tarayıcı sekmesinde açılmalıdır.

- Ağın spor kulüpleri bölümünün paragrafından sonra sırasız bir listede yer almalıdır.
- Liste üç öğeden oluşmaklıdır.
- Her liste öğesinin bir resmi bulunmalıdır.
- Listedeki her öğenin bir bağlantısı olmalıdır.
- Bağlantılar resimlerin altında yer almalıdır.
- Görüntüler bağlantıya gömülü olmamalıdır.
- Görüntülerin genişliği `320` piksel olmalıdır.
- Bağlantı metni `Open in Google Maps` olmalıdır.
- Tıklandığında, bağlantı yeni bir tarayıcı sekmesinde açılmalıdır.
- İlk bağlantının `href` niteliğinin değeri `https://goo.gl/maps/qBnEfK5AingPLZgb9` şeklinde olmalıdır.
- İlk bağlantının metni `Open in Google Maps` şeklinde olmalıdır.
- İlk görüntünün `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B031.jpg`şeklinde olmalıdır.
- İlk görselin alternatif metni `PF Power Zone'dur. A modern gym equipped with treadmills.` olmalıdır.
- İkinci bağlantının `href` niteliğinin değeri `https://goo.gl/maps/WZ4K6XMvHU7FkgWB7` şeklinde olmalıdır.
- İkinci bağlantının metni `Open in Google Maps` şeklinde olmalıdır.
- İkinci görüntünün `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B032.jpg`şeklinde olmalıdır.
- İkinci görselin alternatif metni `PF Fit and Fast'tir. A gym with indoor bikes behind a glass door.` olmalıdır.
- Üçüncü bağlantının `href` niteliğinin değeri `https://goo.gl/maps/UZqkiUqS6eWL5DJd7` şeklinde olmalıdır.
- Üçüncü bağlantının metni `Open in Google Maps` şeklinde olmalıdır.
- Üçüncü resmin `src` niteliğinin değeri `https://ac.goit.global/fullstack/html-css-v2/module-1/autocheck/B033.jpg`şeklinde olmalıdır.
- Üçüncü görselin alternatif metni `PF Body Sculpting'dir. A studio with fitness balls and trx straps.` şeklinde olmalıdır.

![Screen Shot 2025-06-27 at 15.20.39 PM.png](Ba%C4%9Flant%C4%B1%20download%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-06-27_at_15.20.39_PM.png)

Tabii! Bu kısmı sade ve özet şekilde şöyle açıklayabilirsin:

---

**Açıklama (Not):**

Her görselin hemen *altında*, “Open in Google Maps” yazılı bir **bağlantı (anchor tag)** yer almalıdır.

Bu bağlantı:

- Görsele **gömülü olmamalı**, ayrı bir öğe olarak yer almalıdır.
- target="_blank" özelliği ile ayarlanmalı ki, **yeni bir sekmede** açılsın.

---

İstersen kısa kod örneğiyle de not alabilirsin:

```
<img src="..." alt="..." width="320">
<a href="..." target="_blank">Open in Google Maps</a>
```

Yani, <a> etiketi sadece yazıyı sarmalı, <img>’i değil.