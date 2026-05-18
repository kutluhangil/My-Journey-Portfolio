# Yapışkan Konumlandırma

Yapışkan konumlandırma (`position: sticky`) — `relative` ve `fixed` özelliklerin bir kombinasyonudur. Yapışkan konumlandırmanın nasıl çalıştığını anlamak için aşağıdaki GIF'e göz atabilirsiniz:

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3efe12ae-a5a4-41b1-ba63-487c450e231aimage%20%282%29.gif)

1. Eleman, kapsayıcısının içinde olduğu ve dikey olarak kaydırıldığında görünümden çıkmadığı sürece, `relative` konumlandırma gibi davranır.
2. Ana konteynerin bir kısmı görüş alanından çıkar çıkmaz, konteynerin en azından bir kısmı ekranda mevcut olduğu sürece eleman sayfada sabitlenir.
3. Konteynerin tamamı görüş alanının dışındaysa, göreli konumlandırma davranışı yeniden etkinleştirilir - eleman konteynerin arkasındaki ekrandan kaybolur.

Yapışkan konumlandırmayı uygulamak için yalnızca üç koşul gereklidir:

- Yapışkan öğe `position: sticky` olarak ayarlanmalıdır.
- Yapışkan öğe belirli bir konuma sahip olmalıdır, örneğin, `top: 0`.
- Konteyner elemanı yapışkan elemandan daha yüksekte olmalıdır.

Örnekteki bölüm başlıkları yapışkan hale getirilmiştir, böylece sayfayı kaydırdığınızda, bölümlerinin bir kısmı görünene kadar görüntü alanının üst kısmına "yapışırlar”.

![Screen Shot 2025-07-26 at 00.54.10 AM.png](Yap%C4%B1%C5%9Fkan%20Konumland%C4%B1rma/Screen_Shot_2025-07-26_at_00.54.10_AM.png)