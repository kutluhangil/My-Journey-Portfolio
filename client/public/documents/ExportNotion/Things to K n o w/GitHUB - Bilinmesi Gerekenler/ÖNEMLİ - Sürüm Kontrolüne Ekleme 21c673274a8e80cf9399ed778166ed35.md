# ÖNEMLİ - Sürüm Kontrolüne Ekleme

Geliştirici yeni dosyalar ve klasörler oluşturduğunda veya mevcut dosyaların içeriğini değiştirdiğinde, değişiklikleri Git kontrolüne eklemek için `git add` komutunu kullanması gerekmektedir.

Proje klasöründeki tüm yeni dosyaları ve mevcut dosyalardaki değişiklikleri kontrol altına almak için `git add` komutu `--all` bayrağı ile kullanılır.

`git add *--all*`

```
-all bayrağı,git add komutunu tamamlar ve projedeki tüm olası değişiklikler kontrol altına alınır. Komutu girerken iki tire işaretine dikkat et.

```

Eğer kontrol altına alındıktan sonra depo durumunu kontrol ederseniz, bildirimde **Changes to be committed** bölümü görünecektir, yani kaydedilmeye ve uzak depo ile senkronize etmeye hazır değişiklikler.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/140866c7-d10d-44f2-b90d-3d48e332e13cScreenshot%202023-11-23%20at%2016.17.06.png)

Proje dosyalarının durumunu ne sıklıkla kontrol etmeli ve değişiklikleri kontrol altına almalıyız?

Yeni başlayanlar için bu çok önemli değil, uzaktaki depo ile senkronize etmeden önce bu işlemi yapmayı unutmamak yeterlidir. Projeyi bitirmeden önce, yani bilgisayardan ayrılmadan hemen önce değişiklikleri kontrol altına almanızı öneriyoruz.