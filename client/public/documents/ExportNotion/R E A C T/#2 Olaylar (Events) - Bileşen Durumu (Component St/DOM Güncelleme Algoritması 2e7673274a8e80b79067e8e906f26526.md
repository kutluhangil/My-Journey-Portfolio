# DOM Güncelleme Algoritması

React'te her kullanıcı arayüzü bileşeni, props veya state değişimlerine göre kendini günceller. Bu güncellemeler, Virtual DOM yapısındaki düğümler aracılığıyla temsil edilir. Kullanıcının arayüzle yaptığı her etkileşim, uygulamanın durumunu değiştirir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8185c3ed-dc7a-4506-a537-e5a04556b8d4image%20-%202024-10-09T194501.337.png)

Bir bileşen değiştiğinde, React arayüzün güncellenmiş hâlini temsil eden yeni bir Virtual DOM ağacı oluşturur. Daha sonra önceki Virtual DOM ile yenisi karşılaştırılır. Bu işleme **“diffing”** denir. React, bu karşılaştırma sonucunda yalnızca değişen kısımları tespit eder ve gerçek DOM’da yalnızca gerekli güncellemeleri yapar.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a39cc324-df6b-442a-b3b0-4b33c6953f5fimage%20-%202024-10-09T194445.469.png)

(Örneğin bir görselde, kırmızıyla işaretlenmiş düğümler değişmesi gereken alanları gösterebilir.)

Bu süreç sayesinde, Virtual DOM performansı artırır ve gerçek DOM'da minimum işlemle maksimum verim elde edilmesini sağlar.