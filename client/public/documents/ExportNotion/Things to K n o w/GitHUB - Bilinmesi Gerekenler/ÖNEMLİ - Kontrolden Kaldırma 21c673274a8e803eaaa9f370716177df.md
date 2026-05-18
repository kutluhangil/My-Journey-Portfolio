# ÖNEMLİ - Kontrolden Kaldırma

Çalışma sırasında, bir dosyanın yanlışlıkla Git kontrolüne eklendiği ancak orada olmaması gerektiği durumlar olabilir. Bu, özel bilgiler içeren bir dosya veya büyük bir video dosyası olabilir; bu tür dosyaların depoda saklanması önerilmez. Bu durumlarda dosyayı kaydetmeden önce kontrol altından çıkarmak gerekir.

`secret.md` adında bir dosya oluşturalım ve onu "kazara" kontrol altına alalım.

Yani, bir sorun ortaya çıktı: kontrol altında olmaması gereken bir dosya ekledik.

Ne yapmalı?

`git status` komutundan sonra gelen ileti bize dosyayı kontrol dışına çıkarmak için nasıl bir ipucu verecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/b69f4a5d-bee5-41b5-a2e6-ccc691c9bb7bScreenshot%202023-11-23%20at%2017.35.05.png)

`Git restore` komutu, izlenen dosyalardan istenilen bir dosyanın kontrol dışı listesinden çıkarılmasını sağlar.

`git restore --staged secret.md` komutu, `secret.md` dosyasıyla ilgili değişiklikleri kontrol dışı bırakırken, projedeki diğer tüm değişiklikleri korur.

Sorun, her `git add --all` komutu çalıştığında bu dosyanın kontrol altına alınacak olmasıdır.