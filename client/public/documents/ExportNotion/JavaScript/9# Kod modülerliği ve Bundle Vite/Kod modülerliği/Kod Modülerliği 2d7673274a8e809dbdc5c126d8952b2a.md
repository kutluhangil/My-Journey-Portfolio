# Kod Modülerliği

Modül kavramı, kodun düzenlenmesi için bir yöntem olarak uzun süredir var olan bir yaklaşımdır. Bir projenin ve kod tabanının büyümesiyle birlikte, kod parçaları belirli işlevleri tanımlayacak şekilde bölünmeye çalışılır. Modüler kod, organizasyon, bakım, test ve en önemlisi bağımlılıkların yönetimi konusunda kolaylık sağlar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/dfb125d2-6f69-41f1-b189-06b3acbebb5cFrame%2048671.jpg)

Modüllerin en önemli avantajları:

- **Destek** – İyi geliştirilmiş bir modül, kodun diğer bölümlerine olan bağımlılığı en aza indirgemeyi hedefler. Modüllerin kullanımı, uygulamanın işleyişini genişletmeyi kolaylaştırır ve bu süreçte genellikle minimum riskle sistemin işleyişini sürdürmesini sağlar. Kendi başına yeterli olan bir modülün güncellenmesi çok daha kolaydır.
- **Namespace** – Fonksiyonun görünür kapsamına girmeyen değişkenler geniş kapsamlı olabilir. Bu nedenle, genellikle tamamen ilgisiz kodlar global değişkenleri paylaşarak namespace'i kirletir. Modüller, değişkenler için ayrı bir görünürlük alanı (scope) oluşturarak namespace’in kirlenmesini engeller.
- **Tekrar Kullanım** – Geliştiriciler sıklıkla hazır kodu yeni projelere kopyalayarak, projenin ihtiyaçlarına göre yeniden düzenler. Ancak bu büyük bir zaman kaybıdır. Tekrar tekrar kullanılabilen bir modül bulundurmak, kullanıldığı ortam hakkında bilgi sahibi olmaya gerek kalmadan yeniden kullanım sağlar ve bu çok daha verimlidir.