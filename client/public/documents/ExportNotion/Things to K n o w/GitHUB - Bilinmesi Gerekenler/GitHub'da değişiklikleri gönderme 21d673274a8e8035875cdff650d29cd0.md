# GitHub'da değişiklikleri gönderme

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/51e0e9c2-3a84-4e24-8fa5-5e8dc54e8dd2Untitled%20%2855%29.png)

Proje üzerinde çalışırken yalnızca bilgisayarınızdaki yerel depo kopyasında değişiklikler yaparsınız. GitHub'daki uzak depo geçmişiyle bilgisayarınızdaki geçmiş farklılık gösterir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/53e888c6-b8c4-4b9a-906b-57ae9e6a27a9Screenshot%202023-11-24%20at%2011.07.14.png)

Depo klonlandığında yalnızca bir işlem vardı.

`(origin/main, origin/HEAD)` etiketi, uzak depo tarihindeki son işlemi gösterir. Bundan sonraki her şey, yerel değişikliklerindir.

`(HEAD → main)` etiketi, yerel depodaki şu anki işlemi yani en son işlemi gösterir.

Eğer `git status` komutunu çalıştırırsak, terminalde yerel deponun, uzak deponun 2 işlem önünde olduğunu ve senkronize etmek için `git push` komutunu kullanmanı öneren bir bildirim görüntülenir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/549d554a-f433-4de5-be3e-a4fa8f60c69eScreenshot%202023-11-24%20at%2011.18.26.png)

`git push` komutu, yerel taahhütlerinizi uzak depoya gönderir (push). Bu, yerel ve uzak depolar arasında veri senkronizasyonunu sağlar.

1. Yerel depo durumunu kontrol ediyoruz, yerel depo geçmişinin uzak depoyu geçtiğini görüyoruz.
2. `git push` komutunu çalıştırarak GitHub'taki uzak depoya değişiklikleri gönderiyor ve bu şekilde geçmişleri senkronize ediyoruz.
3. Yerel depo durumunu kontrol ediyoruz, yerel ve uzak depo geçmişlerinin aynı olduğuna dair bir bildirim görüyoruz.

```
Önemli!git push komutuyla yalnızca commit'lerde kaydedilen değişiklikleri uzak depoya gönderebilirsiniz.

```

Depo geçmişlerini ne sıklıkta senkronize etmek gerekir? Yeni başlayanlar, bilgisayardan uzaklaşmadan önce çalışma oturumunun sonunda bunu yapmaları önerilir.