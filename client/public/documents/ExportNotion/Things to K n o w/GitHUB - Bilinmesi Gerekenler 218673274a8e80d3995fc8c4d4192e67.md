# GitHUB - Bilinmesi Gerekenler

# **Uzak depolar (remote repository)**

Uzak depo, İnternet üzerinde bir sunucuda (bilgisayarda) bulunan bir proje (klasör)dir. Geliştiriciler burada proje kodunu depolar ve paylaşırlar. Projeler çok çeşitli olabilir, bu nedenle her proje için ayrı bir depo ayrılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/95fed0e2-7eaa-4987-9a59-2bf53bafa22bScreenshot%202023-11-23%20at%2012.03.59.png)

Uzak depolamanın temel avantajlarından biri işbirliği imkanıdır. Birçok kişi, herkesin en son dosya sürümlerine erişimi olduğu için birbirlerine müdahale etmeden aynı projede çalışabilir. Örneğin, kodunu uzak bir depoda bir mentorun görmesi için gösterebilir ve kalitesini değerlendirmesini ve gerektiğinde önerilerde bulunmasını sağlayabilirsin.

# **Yerel Depolar (locale repository)**

Uzak depolar, projenin en son sürümünü saklamak ve üzerinde işbirliği yapmak için kullanılır. Ancak bir projede kod yazabilmek için onu kendi bilgisayarında bulundurman gerekir.

Yerel depo, doğrudan kendi bilgisayarında bulunan uzak depo (bir klasör) kopyasıdır. İstediğin tüm değişiklikleri yapabilir ve ardından bunları uzak depo ile senkronize edebilirsin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ed803632-a38e-4af1-8ae9-08676f5b46a0Screenshot%202023-11-23%20at%2012.33.19.png)

Uzak depo, takımın birlikte çalışabileceği merkezi bir yer olarak hizmet verir, kodun depolanması, erişilmesi ve yönetilmesi için. Yerel depo, bilgisayarındaki tüm verilerin tam bir kopyasını verir ve bağımsız, verimli ve güvenli bir şekilde çalışmanı sağlar.

Şu anda GitHub platformuna kullanıcı adı ve şifrenle giriş yapabilir ve web arayüzünde projelerle çalışabilirsin. Ancak GitHub projeleriyle bilgisayarından etkileşimde bulunmak için SSH anahtarına ihtiyacın var.
SSH anahtarı, GitHub hesabına erişim sağlayan benzersiz bir anahtar gibidir. Bu, terminal aracılığıyla GitHub projeleriyle güvenli bir şekilde etkileşimde bulunmanı sağlar.

# **SSH Anahtarı Oluşturma**

İşte SSH anahtarı oluşturmak için adım adım bir video.

Videoyu izle, ardından her komutu açıklayacağız.

1. Bilgisayarınızda terminali (Git Bash) açın.

2. Aşağıdaki komutu girin, burada `your_email@example.com` yerine GitHub hesabınızın kayıtlı olduğu e-posta adresinizi yazın:

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

Bu komut yeni bir SSH anahtarı oluşturacak ve onu e-posta adresinle ilişkilendirecektir.

Daha sonra anahtarın kaydedileceği yeri belirtmen istenecek. Önerilen yolu kullanmanı tavsiye ederiz.

3. Adresi onaylamak için **Enter** tuşuna bas.

4. Ardından bir kod parolası (passphrase) girmen istenecek, bu SSH anahtarının şifresiyle aynı işlevi görecektir. Hiçbir şey girmemeni ve sadece **Enter** tuşuna basmanı öneririz.

```
Anahtarın şifresini eklersen,GitHub ile çalışırken her seferinde bunu girmen gerekecek, bu pek kullanışlı değil.
```

5. Hata yapmamak için kod parolasını (passphrase) tekrar gir. Eğer anahtar için bir şifre oluşturmadıysan, sadece **`Enter`** tuşuna bas.

# **SSH anahtarını ssh-agent'a ekleme**

İşte SSH anahtarını eklemenin adım adım videosu.

Videoyu izle, ardından her bir komutu açıklayacağız.

1. **`ssh-agent`** programını aşağıdaki komutla başlatın:

`eval "$(ssh-agent -s)"`

2. SSH anahtarınızı **`ssh-agent`**'a aşağıdaki komutla ekleyin: **`ssh-add`**.

`*# Windows kullanıcıları için*

ssh-add ~/.ssh/id_rsa 

*# macOS kullanıcıları için. Parola ifadesini Keychain'e aynı anda kaydeder*

ssh-add --apple-use-keychain ~/.ssh/id_rsa`

```
SSH anahtarına olan yolun~/.ssh/id_rsa olduğuna dikkat et, eğer SSH anahtarının oluşturulması sırasında adı değiştirildiyse, tüm komutlarda kendi adını kullanman gerekecek, "SSH Anahtarı Oluşturma" adımındaki adımlarda eklenen SSH anahtarını görüntülemek için, anahtarın kaydedildiği yere olan yol ilecat komutunu kullan. Bu komut aşağıdaki gibi olacaktır:

```

`cat ~/.ssh/id_rsa.pub`

# **GitHub hesabınıza bir SSH anahtarı eklemek için adımlar**

SSH anahtarını eklemek için adımları içeren bir videoya buradan erişebilirsiniz.

Videoyu izleyin, ardından her adımı açıklayacağız.

1. SSH anahtarının içeriğini kopyalayın. Bu, içeriğini görüntülerken yukarıdaki komutu kullanarak yapılabilir (`cat ~/.ssh/id_rsa.pub`) ve `Ctrl` + `C` tuşlarına basarak (Windows için) veya `Command` + `C` tuşlarına basarak (macOS için).

1. GitHub profilinizdeki [SSH ve GPG anahtarlarını yapılandırma bağlantısına](https://github.com/settings/keys) gidin.
2. **New SSH key** düğmesine tıklayın, ardından adını verin ve **New SSH key** düğmesine basarak 1. adımda kopyalanan anahtarı ekleyin.

Artık eklenmiş SSH anahtarı ile GitHub üzerindeki projelerinizle terminal aracılığıyla daha güvenli ve kullanışlı bir şekilde çalışabilirsiniz.

```
Bir GitHub hesabına birden fazla SSH anahtarı ekleyebilirsiniz. Bu nedenle birden fazla cihazla çalışıyorsanız, GitHub ayarlarına ihtiyacınız kadar SSH anahtarı ekleyin. Gelecekte gereksiz bir SSH anahtarını her zaman ayarlardan silebilirsiniz.
```

# **Uzak depo klonlama**

Klonlama, uzak bir depodan yerel bir kopya oluşturma işlemidir. Yani bu işlem sayesinde, projenin bir klasörü ve içeriği bilgisayarınıza indirilmiş olur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/2ee37c9c-3c8b-4ee0-86e2-7230dc45bda1Untitled%20%2854%29.png)

**Peki bu neden gereklidir?**

Projeniz üzerinde çalışmak, denemeler yapmak veya değişiklikleri test etmek için bu işlemi gerçekleştirirsiniz. Bu sayede ana depoya herhangi bir etki etmeden, güvenli şekilde geliştirme yapabilirsiniz.

# **macOS Kullanıcıları İçin**

Aşağıda, macOS kullanıcıları için klonlama adımlarının video anlatımı yer almakta. Videonun ardından yazılı açıklamalarla destekleyeceğiz.

GitHub'dan bir depoyu klonlamak için şunları yapman gerekiyor:

- GitHub'da ilgili depo sayfasına git ve **SSH** sekmesinden depo adresini kopyala.
- Terminali aç ve `Projects` dizinine geç.
- Terminalde `git clone` komutunu yaz, ardından bir boşluk bırakıp kopyaladığın adresi yapıştır (`Command + V`).
- `Return` (Enter) tuşuna bas.

Bu işlemin ardından bilgisayarında proje adıyla bir klasör oluşacak ve bu klasör, projenin tüm dosyalarını içerecek şekilde yerel olarak hazırlanmış olacak. Artık geliştirmeye başlayabilirsin.

Oluşturdum: 

Warning: Permanently added '[github.com](http://github.com/)' (ED25519) to the list of known hosts.
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (4/4), done.

# **macOS kullanıcıları için**

1. Terminali açın ve **Projects** klasörüne gidin.
2. **Projects** klasöründen proje klasörüne girin ve `code .` komutunu çalıştırın, nokta ile birlikte.

`code .`

Nokta, "mevcut dizin" anlamına gelir ve VSCode mevcut dizinde, yani proje klasöründe açılacaktır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/50cba871-9d30-46f3-bc29-97a82037df0cUntitled%20%2854%29.png)

Projenizi açtıktan sonra, projenizin klasör yapısını sol taraftaki yan panelde göreceksiniz ve düzenleme yapmak, terminali başlatmak ve projenizi geliştirmek için VSCode'un sunduğu diğer araçları kullanabilirsiniz.

**Bunu yapamadım. Code . olmadı**

# **Depo durumu kontrolü**

Bir geliştirici bir projeye değişiklik yaptığında, bu değişiklikler hemen uzak depoya yansımaz. Bunun için geliştiricinin öncelikle değişiklikleri yerel depoya eklemesi gerekir, ardından bu değişiklikler uzak depoya gönderilebilir.

Yerel depo dosyaları iki durumda olabilir:

- **İzleniyor**

veya

- **İzlenmiyor**

Bir geliştirici projeye yeni bir dosya eklediğinde, Git bu dosyanın varlığından haberdar değildir. Geliştiricinin bu dosyayı **izlemeye alması** gerekecektir. Dosya en az bir kez izlemeye alındıktan sonra, Git dosyadaki değişiklikleri izler.

# **Mevcut dosya ve klasör durumunun belirlenmesi**

Proje klasöründe mevcut dosyaların ve klasörlerin mevcut durumunu öğrenmek için terminalde şu Git komutu kullanılır:

`git status`

Depo klasöründe henüz hiçbir değişiklik yapılmadığı için `git status` komutundan sonra `nothing to commit, working tree clean` mesajını göreceksin. Bu, kaydedilecek herhangi bir değişiklik olmadığı anlamına gelir ve yerel depo durumunun tamamen uzak durumla eşleştiği anlamına gelir.

[README.md](http://readme.md/) dosyasını değiştirerek herhangi bir metin ekleyip kaydedelim.

Ardından depo durumu kontrol etmek için `git status` komutunu tekrar çalıştıralım.

Dosyanın [README.md](http://readme.md/) değiştirildiğine dair bir bildirim olacak.

Her komutun uygulanmasından sonra geliştirici için terminalde İngilizce olarak uygulamanın sonucuna dair bilgiler görüntülenecektir.

Kontrol altında olan dosyaların değiştirilmesi durumunda, `Changes not staged for commit` bölümünde değiştirilmiş dosyalara dair bildirimler görüntülenecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/b7560eb6-9172-4373-a246-8b1971d62cd3Screenshot%202023-11-23%20at%2015.37.50.png)

# **Dosya durumunun belirlenmesi: Yeni dosyalar ve klasörler**

1. Projeye boş bir dosya olan `todo.md` oluşturalım.
2. Şimdi depo durumunu tekrar kontrol edelim.

Durum kontrolü sonucunda, [README.md](http://readme.md/) dosyasının değiştirildiği yönünde bir bildirim alacaksınız (bu adımı önceden yaptık).

Ayrıca, `Untracked files` adında yeni bir bölüm eklenir; bu bölümde Git'in henüz bilmediği yeni dosya ve klasörler listelenir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1544c7ab-f787-4557-9f97-7b0c1bd77cffScreenshot%202023-11-23%20at%2015.40.23.png)

Git kontrol versiyon sisteminde `git status` komutu en önemli komutlardan biridir. Mevcut depo durumu hakkında bilgi vererek hangi dosyaların değiştirildiğini, hangi dosyaların kaydedilmeye hazır olduğunu ve hangi dosyaların izlenmediğini gösterir.

# **Sürüm Kontrolüne Ekleme**

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

[**ÖNEMLİ - Sürüm Kontrolüne Ekleme** ](GitHUB%20-%20Bilinmesi%20Gerekenler/%C3%96NEML%C4%B0%20-%20S%C3%BCr%C3%BCm%20Kontrol%C3%BCne%20Ekleme%2021c673274a8e80cf9399ed778166ed35.md)

# **Kontrolden Kaldırma**

Çalışma sırasında, bir dosyanın yanlışlıkla Git kontrolüne eklendiği ancak orada olmaması gerektiği durumlar olabilir. Bu, özel bilgiler içeren bir dosya veya büyük bir video dosyası olabilir; bu tür dosyaların depoda saklanması önerilmez. Bu durumlarda dosyayı kaydetmeden önce kontrol altından çıkarmak gerekir.

`secret.md` adında bir dosya oluşturalım ve onu "kazara" kontrol altına alalım.

Yani, bir sorun ortaya çıktı: kontrol altında olmaması gereken bir dosya ekledik.

Ne yapmalı?

`git status` komutundan sonra gelen ileti bize dosyayı kontrol dışına çıkarmak için nasıl bir ipucu verecektir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/b69f4a5d-bee5-41b5-a2e6-ccc691c9bb7bScreenshot%202023-11-23%20at%2017.35.05.png)

`Git restore` komutu, izlenen dosyalardan istenilen bir dosyanın kontrol dışı listesinden çıkarılmasını sağlar.

`git restore --staged secret.md` komutu, `secret.md` dosyasıyla ilgili değişiklikleri kontrol dışı bırakırken, projedeki diğer tüm değişiklikleri korur.

Sorun, her `git add --all` komutu çalıştığında bu dosyanın kontrol altına alınacak olmasıdır.

[ÖNEMLİ - Kontrolden Kaldırma](GitHUB%20-%20Bilinmesi%20Gerekenler/%C3%96NEML%C4%B0%20-%20Kontrolden%20Kald%C4%B1rma%2021c673274a8e803eaaa9f370716177df.md)

# **.gitignore Dosyası**

`.gitignore` dosyası, **Git'in tamamen görmezden gelmesi gereken dosya veya dizinleri belirtir.** Bu geçici dosyalar, parolalar gibi gizli bilgiler veya depoda saklanması gerekmeyen büyük veri dosyaları olabilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/f258c854-99d0-43f0-9b85-5ab8beea94beScreenshot%202023-11-23%20at%2017.44.29.png)

GitHub'da bir depo oluştururken `.gitignore` dosyasını eklemek daha iyidir.

Bir şablon seçebilirsiniz, örneğin **Node** şablonu. Bu, dosyayı otomatik olarak oluşturacak ve bazı standart hariç tutmalarla dolduracaktır.

Eğer **hariç tutulacak dosyaları eklemek istiyorsanız**, `.gitignore` dosyasını kullanmak için temel adımlar şunlardır:

1. VSCode'da `.gitignore` dosyasını açın.

2. Hariç tutmak istediğiniz dosyayı veya klasörü ekleyin.

Örneğin:

`Tüm .txt dosyalarını yoksay
*.txt

Belirli bir dosyayı yoksay
my-passwords.txt

Belirli bir klasördeki tüm dosyaları yoksay
drafts/*

Tüm .txt dosyalarını yoksay, plans.txt hariç
*.txt
!plans.txt`

3. Değişiklikleri kaydedin ve dosyayı kapatın.

`secret.md` dosyasını istisnalar listesine ekleyelim ve bakalım neler olacak.

`.gitignore` dosyasını değiştirdikten sonra `git status` komutu artık `secret.md` dosyasının durumunu göstermeyecek, çünkü artık onun kontrol listesine dahil değil ve hiçbir zaman kontrol altına alınmayacak. VSCode proje dosya ve klasör yapısı panelinde, Git tarafından yoksayılan dosyalar gri renkte gösterilir.

# **Proje Değişikliklerini Saklama**

**Commit (Taahhüt)** — Bu, Git'e mevcut dosya durumunu projede sabitlemek istediğini söylemenin bir yoludur. Bu, oyun içinde bir kontrol noktası oluşturmakla benzerdir, tek farkı oyun dünyasının değil, proje dosyalarının durumunun sabitlenmesidir. Tüm commit'ler depo geçmişinde saklanır.

Bir commit'in nasıl göründüğünü inceleyelim:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/fc630675-25f5-4dc2-bf4c-12c16f0053e2Screenshot%202023-11-24%20at%2010.26.02.png)

Her bir taahhüt,

- benzersiz bir numaradan (kimlik) oluşur,
- geliştirici bilgileri alanı,
- taahhüt oluşturma tarihi,
- kısa bir ileti içerir.

Geliştirici, her taahhüte kısa bir ileti ekler. Bu, kaydedilen değişikliklerin açıklaması olarak hizmet eder ve bu taahhütte neyin yapıldığını ve neden yapıldığını anlamamıza yardımcı olur.

Proje dosyalarındaki değişiklikleri saklamak için `git commit` komutu kullanılır ve `-m` bayrağı, kısa bir iletiyi doğrudan komut satırına eklememizi sağlar.

`git commit -m "commit message"`

```
Git commit kullanmadan önce, projedeki tüm değişiklikleringit add --all komutu ile kontrol altına alındığından emin olmak çok önemlidir. Bu adımı atlamamak, projenin bütünlüğünü korumak için hayati öneme sahiptir.

```

Projemizde ilk commit'i yapalım.

Git commit işleminden sonra `git status` komutu, son kayıttan bu yana projede yeni değişiklikler olmadığını bildiren bir mesaj verir.

`todo.md` dosyasını değiştirelim, proje durumunu kontrol edelim, ardından yeni değişiklikleri izleme altına alıp onları kaydetmek için bir commit işlemi gerçekleştirelim.

**Commit İletileri İçin En İyi Uygulamalar:**

- İngilizce yazın.
- İletinizin yapılan değişiklikleri net bir şekilde yansıtması gerekir.
- "Added", "Fixed", "Updated" yerine "Add", "Fix", "Update" gibi bir emir olarak ileti formüle edin.
- Commit ileti kısa olmalı, ancak bilgilendirici olmalıdır.

Ne sıklıkta değişiklikleri kaydetmek (commit) mantıklıdır?

Her seferinde `git add --all` komutunu çalıştırmaya karar verdiğinizde, yani değişiklikleri kontrol altına almak istediğinizde yaparsınız. Başlangıçta muhtemelen bunu her çalışma oturumunun sonunda, bilgisayardan ayrılmadan önce yapacaksınız.

[ÖNEMLİ - **Proje Değişikliklerini Saklama**](GitHUB%20-%20Bilinmesi%20Gerekenler/%C3%96NEML%C4%B0%20-%20Proje%20De%C4%9Fi%C5%9Fikliklerini%20Saklama%2021d673274a8e804cb462fc3a56ea88a6.md)

# **Commit Geçmişini Görüntüleme**

Biliyorsun ki bir commit, proje dosyalarının durumunun kaydedilmesidir ve bu commit'ler depo geçmişinde saklanır.

Depo geçmişini görüntülemek için `git log` komutunu kullanabilirsin, bu komut yerel depodaki tüm commit'lerin listesini gösterir.

- Projemizde `git log` komutunu çalıştırıp sonucu görelim.
- Commit geçmişi görüntüleme modundan çıkmak ve terminalde çalışmaya devam etmek için `q` tuşuna bas.

Terminalde üç commit hakkında bilgi göreceğiz.

Her commit, geliştiricinin bilgilerini, oluşturulma tarihini ve test açıklamasını içerir. Commit listesi ters kronolojik sırayla sıralanmıştır, yani en yeni commit en üstte, en eski olan ise en altta yer alır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/6a34395c-4460-42fb-808a-bff1b1bd0a6fScreenshot%202023-11-24%20at%2010.53.57.png)

İki commit yaptık, ama üçüncü nereden geldi?

İlk commit, GitHub'da depo oluşturulurken otomatik olarak oluşturuldu, projeyi bilgisayarımıza klonlamadan önce. Onu kırmızı dikdörtgenle belirttik.

```
Eğer parantez içindeki etiketler seni ilgilendiriyorsa, bazı commit kimlikleri yanındaki parantezleri daha sonra biraz inceleyeceğiz. Onlar orada boşuna durmuyor.
```

# **GitHub'da değişiklikleri gönderme**

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/51e0e9c2-3a84-4e24-8fa5-5e8dc54e8dd2Untitled%20%2855%29.png)

# 

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

[**GitHub'da değişiklikleri gönderme**](GitHUB%20-%20Bilinmesi%20Gerekenler/GitHub'da%20de%C4%9Fi%C5%9Fiklikleri%20g%C3%B6nderme%2021d673274a8e8035875cdff650d29cd0.md)

---

### **Projeye Değişiklikler Ekle**

- Proje kökünde index.html dosyası oluştur.
- HTML belgesi başlığı eklemek için index.html dosyasının ilk satırına ! (ünlem işareti) yaz ve sistem tarafından önerilen satıra tıkla.
- Sistem tarafından görüntülenmesi için <body> ve </body> etiketleri arasına,
    
    <h1>This is an example project</h1> satırını ekle.
    

---

### **Yerel ve uzak depoda değişiklikleri kaydet**

- Yerel depo durumunu kontrol etmek için git status komutunu kullan.
- Tüm değişiklikleri Git kontrolüne eklemek için git add --all komutunu gir.
- Değişikliklerin kontrol altında olduğundan emin olmak için git status komutunu tekrarla.
- Değişiklikleri geçmişe kaydetmek için git commit -m "index dosyası eklendi" komutunu gir.
- Değişiklikleri GitHub’a göndermek için git push komutunu kullan.

---

[**Projeye Değişiklikler Ekle**](GitHUB%20-%20Bilinmesi%20Gerekenler/Projeye%20De%C4%9Fi%C5%9Fiklikler%20Ekle%2021d673274a8e80a08353eec476d80372.md)