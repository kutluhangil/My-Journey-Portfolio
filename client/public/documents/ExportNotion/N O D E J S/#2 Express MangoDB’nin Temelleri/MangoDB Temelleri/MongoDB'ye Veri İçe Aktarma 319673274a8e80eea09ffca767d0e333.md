# MongoDB'ye Veri İçe Aktarma

**MongoDB** ile çalışmak için [**Mongo Compass**](https://www.mongodb.com/try/download/compass) uygulamasını indirmenizi öneririz — Bu uygulama, geliştiricilerin MongoDB veritabanlarıyla etkileşimde bulunmasını sağlayan bir grafik arayüz sunar. **Mongo Compass**, verilerle ilgili işlemleri (görüntüleme, düzenleme vb.) kolaylaştırmanın yanı sıra, karmaşık sorgular oluşturmanıza, sonuçları görselleştirmenize ve veritabanına güvenli bir şekilde erişim sağlamanıza olanak tanır.

```
Lütfen dikkat edin, birkaç indirme seçeneği bulunmaktadır; MongoDB Compass Download (GUI)'yi indirip kurmanız gerekmektedir.
```

**İşte kurulumuyla ilgili bir video talimatı:**

[https://goitlmsstorage.b-cdn.net/20a15656-9d59-4f60-8fb1-6d6fa61664ac%D0%92%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D1%82%D0%B0_%D0%B2%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%8F_MongoDB_Compass%20%281%29.mp4](https://goitlmsstorage.b-cdn.net/20a15656-9d59-4f60-8fb1-6d6fa61664ac%D0%92%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D1%82%D0%B0_%D0%B2%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%BD%D1%8F_MongoDB_Compass%20%281%29.mp4)

Veritabanı işlemi için çalışacağımız temel veri koleksiyonunu içe aktarmaya başlayalım. Bunun için ekli olan `students.json` dosyasını ve video talimatlarını kullanabilirsiniz:

`students.json` dosyası:

[students.json](https://drive.google.com/file/d/1KQOvq-cIdfX-mgUIGxtF_wADnwK3ugo3/view?usp=drive_link)

**Video Talimatı:**

[https://goitlmsstorage.b-cdn.net/5c0a44b4-170e-4b71-8241-dd0d93e5b9e7%D0%A1%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B1%D0%B0%D0%B7%D0%B8_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85__Students__%D0%B4%D0%BB%D1%8F_%D1%96%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D1%83_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85.mp4](https://goitlmsstorage.b-cdn.net/5c0a44b4-170e-4b71-8241-dd0d93e5b9e7%D0%A1%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B1%D0%B0%D0%B7%D0%B8_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85__Students__%D0%B4%D0%BB%D1%8F_%D1%96%D0%BC%D0%BF%D0%BE%D1%80%D1%82%D1%83_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85.mp4)