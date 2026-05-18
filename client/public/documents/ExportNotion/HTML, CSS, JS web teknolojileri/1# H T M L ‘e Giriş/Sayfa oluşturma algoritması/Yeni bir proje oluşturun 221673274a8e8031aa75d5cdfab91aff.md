# Yeni bir proje oluşturun

Çoğu projenin evrensel bir yapısı vardır, yani kod düzenleyicideki standart klasörler ve dosyalar. Ödev 1 ile çalışırken kullanışlı olacak olanlara bir göz atalım.

Bir depo oluşturarak başlayalım.

- GitHub sayfanıza gidin
- `goit-markup-hw-01` deposunu oluşturun ve klonlayın

```
Depo oluşturma ve klonlama işlemleriyle ilgili olarak kurs öncesi materyallere bakabilirsiniz.

```

- Depoyu klonladıktan sonra VS Code'da açın. Bunu yapmak için GitHub Desktop'ta **Open in Visual Studio Code** düğmesine tıklayın

Şimdi VS Code'da oluşturacağız:

- HTML dosyası `index.html` olarak adlandırılmıştır. HTML işaretlemesi içerecektir.
- `İmages` klasörü. Proje için gerekli tüm görüntüleri içerecektir.

```
Projenin başka evrensel öğeleri de vardır: stilleri içeren bir css dosyası, yazı tipleri için bir fonts klasörü vb. Ancak ikinci ev ödevine kadar bunlarla çalışmayacaksınız.

```

# **HTML belge yapısı ekleme**

HTML sayfa işaretlemesi oluşturmaya nasıl başlarsınız?

Elbette, HTML belgesinin yapısını yansıtan bir HTML belge yapısı ekleyerek. Şimdi belge iskeleti hakkında bildiğiniz her şeye ihtiyacınız olacak.

**Bir HTML belge yapısı şunları içerir:**

- Bir dosya türü bildirimi
- Kök etiket `<html>`
- Kök etiket `<html>` içine yerleştirilmiş:

— Sayfa hakkında servis bilgilerini içeren `<head>` etiketi

— Gelecekteki web sayfasının tüm içeriğini saklayan `<body>` etiketi

```
İpucu:
Bir HTML belgesinin temel yapısını hızlıca oluşturabilirsiniz:
— Aynı andaShift 1 düğmesine basın
— Görüntülenen açılır menüde ilk seçeneği seçin -!
Editör otomatik olarak temel yapıyı ekleyecektir ve<body> etiketi içine içerik eklemeye devam edebilirsiniz

```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3fe9881d-0906-41b7-9641-4c7d0ef30f2aUntitled%20-%202024-03-25T113110.015.png)

# **Yerleşim analizinin ana aşamaları:**

1. Yerleşimi açın ve dışarıdan içeriye doğru inceleyin.
2. Sitenin yapısını analiz edin ve uygun etiketleri ekleyin: `<header>`, `<main>` ve `<footer>`.
3. Bölümlerin sayısını ve başlıkların hiyerarşisini belirleyin. `<h1>` etiketinin yalnızca 1 kez kullanıldığından ve bölüm başlıklarının iç içe geçme düzeyine bağlı olarak `<h2><h6>` etiketiyle işaretlendiğinden emin olun.

# **Bireysel bölümlerin düzeni:**

- Hangi unsurların gruplandığını inceleyin.
- Anlamsal içeriklerine göre hangi etiketlerin kullanılacağını belirleyin.
- Benzer öğelerden oluşan grupların `<ul>` listelerinde toplandığından emin olun.

```
İşaretlemeyi yaparken, düzenli aralıklarla commit yapmayı ve değişikliklerinizi uzak depoya kaydetmeyi unutmayın. Ödeviniz tamamlandığında, commit ve push yapın, GitHub deposuna gidin ve GitHub Pages ayarlayın.
```