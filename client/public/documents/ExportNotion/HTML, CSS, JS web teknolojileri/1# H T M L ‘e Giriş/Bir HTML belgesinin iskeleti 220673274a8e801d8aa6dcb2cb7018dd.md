# Bir HTML belgesinin iskeleti

*Çocukların elmaları saymayı neden öğrendiklerini biliyor musunuz?*

*Görülebilen ya da dokunulabilen şeylerin anlaşılması soyut kavramlara kıyasla* daha kolaydır. HTML'de de sonuçları açıkça görülebilen basit etiketlerden daha genel etiketlere doğru öğreniriz. Örneğin, bir metni `<p>` etiketi ile biçimlendirirseniz, anında bir paragraf görürsünüz. Bir tablo başlığı eklerseniz, farkı fark edip etmeyeceğiniz bir sorudur. Ama robotlar ve arama motorları fark eder!*

*Şimdi, bir HTML belgesinin yapısını analiz edelim. Tarayıcıda neredeyse görünmez olan bu yapıyı anlamak, web sayfanızın düzgün çalışması için kritik öneme sahiptir. Bu yapı, HTML belgesinin temel iskeletidir ve asla unutulmamalıdır!*

# **Bir HTML belgesinin iskeleti**

Bir HTML belgesindeki kod bir web sayfasında görüntülenmeden önce, tarayıcının birkaç standart sorunun yanıtını bulması gerekir. Bu sorular şunlardır: Hangi HTML sürümü kullanılıyor? Bilgi nerede başlıyor ve nerede bitiyor? Sayfa hangi dilde? vb. Bu standart soruların standart yanıtları vardır ve bunlar olmadan ilerleyemezsiniz. Ağaçların kökleri gibi, onları göremezsiniz ama kesinlikle gereklidirler.

Tarayıcı kodu yukarıdan aşağıya doğru okur, bu yüzden bu önemli bilgileri en üste yazarız.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1d20f7ed-bda2-40b4-99fd-c2e7d4503820Untitled%20%2815%29.jpeg)

Bir web sayfasının tamamı, kökünde `<html>` etiketi olmak üzere, iç içe geçmiş etiketlerden oluşan bir "ağaçtan" gibidir.

Aşağıda, herhangi bir HTML belgesinin temelini oluşturan minimum gerekli etiket kümesi verilmiştir.

`<!DOCTYPE html>
<html>
  <head>
    *<!-- Servis bilgileri -->*</head>
  <body>
    *<!-- İçerik -->*</body>
</html>`

Yukarıdaki ilk kod satırında, belge türünün bildirimini görüyoruz. Örnekteki etiketlerin geri kalanı, web sayfasının temel yapısını oluşturmak üzere tasarlanmış üst düzey öğelerdir. Bunlar şunları tanımlar

- **Başlık bilgilerini içeren** `<head>` etiketi
- **Sayfanın tüm içeriğini içeren** `<body>` etiketi

Daha sonra her bir etikete ayrı ayrı bakacağız.

### **<!DOCTYPE html>**

Bu, “Merhaba tarayıcı! Bu bir HTML5 sayfası!” demektir. Tarayıcı bu satırı görmeden sayfayı düzgün yorumlayamaz.

### **<html>**

Bu etiket, “Şimdi HTML kodları başlıyor” demek. Her şey bu etiketin içinde olacak. Tüm bina bunun içinde.

### **<head>**

Bu, görünmeyen ama çok önemli bilgiler için. Mesela sayfanın başlığı, kullandığın alfabe, CSS dosyası gibi şeyler buraya yazılır. Yani tarayıcının anlayacağı teknik ayarlar.

### **<body>**

İşte burası sihirli kutu! Sayfanın gözüken kısmı burada yer alır. Resimler, yazılar, butonlar hep <body> içine yazılır.

---

### **🧠 Neden Bu Yapı Önemli?**

Sen bazı şeyleri görmüyor olabilirsin ama tarayıcı ve arama motorları (mesela Google) bu yapıya çok dikkat eder. Yanlış kurarsan sayfa bozuk çalışabilir veya arama sonuçlarında çıkmaz.

---

### **Özetle:**

HTML belgesinin iskeleti olmazsa olmazdır.

Tıpkı bir evin temelini atmak gibi önce bu yapıyı kurarsın, sonra süslemeye başlarsın.

Yani:

- <!DOCTYPE html> → Bu HTML5.
- <html> → Her şey bunun içinde.
- <head> → Arka plan bilgileri.
- <body> → Gözüken her şey burada.

İlk olarak, tarayıcı için HTML belgesinin yapısını tanımlarız. Bu yapı, tarayıcı için talimatlar içeren `<head>` etiketini ve sitenin tüm içeriğini içeren `<body>` etiketini içerir. Sitenin yapısını `<body>` içinde yeniden üretmek önemlidir: site başlığı (`<header>` etiketi), ana içerik (`<main>` etiketi) ve altbilgi (`<footer>` etiketi). Bu, kapağına öğretmen için adınızı ve grubunuzu yazdığınız (hizmet bilgileri) ve defterin sayfalarına çalışmanızı yazdığınız (siteniz) bir deftere benzetilebilir.

[**Bir belge türü bildirme**](Bir%20HTML%20belgesinin%20iskeleti/Bir%20belge%20t%C3%BCr%C3%BC%20bildirme%20221673274a8e80e1974fd3823c90ec40.md)

[**Üst düzey öğeler: <html> etiketi**](Bir%20HTML%20belgesinin%20iskeleti/%C3%9Cst%20d%C3%BCzey%20%C3%B6%C4%9Feler%20html%20etiketi%20221673274a8e80f8bf0de8f83f25406e.md)

[**Üst düzey öğeler: <head> etiketi**](Bir%20HTML%20belgesinin%20iskeleti/%C3%9Cst%20d%C3%BCzey%20%C3%B6%C4%9Feler%20head%20etiketi%20221673274a8e80b1b509cf634c920440.md)

[**Belge başlığı etiketleri: sayfa başlığı**](Bir%20HTML%20belgesinin%20iskeleti/Belge%20ba%C5%9Fl%C4%B1%C4%9F%C4%B1%20etiketleri%20sayfa%20ba%C5%9Fl%C4%B1%C4%9F%C4%B1%20221673274a8e80a6b5e3c3ad2ede3e29.md)

[**Belge başlık etiketleri: hizmet bilgileri. Sayfa kodlama meta charset kümesi**](Bir%20HTML%20belgesinin%20iskeleti/Belge%20ba%C5%9Fl%C4%B1k%20etiketleri%20hizmet%20bilgileri%20Sayfa%20kod%20221673274a8e80fd8b23f9a8114a3883.md)

[**Doküman başlık etiketleri: içerik açıklama meta name description**](Bir%20HTML%20belgesinin%20iskeleti/Dok%C3%BCman%20ba%C5%9Fl%C4%B1k%20etiketleri%20i%C3%A7erik%20a%C3%A7%C4%B1klama%20meta%20nam%20221673274a8e807f9874eea946097ec9.md)

[**Üst düzey öğeler: <body> etiketi**](Bir%20HTML%20belgesinin%20iskeleti/%C3%9Cst%20d%C3%BCzey%20%C3%B6%C4%9Feler%20body%20etiketi%20221673274a8e802aa11af9bf4b154a5f.md)