# Çok katmanlı arka plan

Bir öğe için aynı anda birden fazla arka plan görüntüsü ayarlayabilirsiniz. Bunları virgülle ayırarak `background-image` özelliğinde listelemek yeterlidir. Her görüntü için, her özellikte virgülle ayrılmış diğer arka plan özellikleri için de değerler ayarlayabilirsiniz.

`background-image: url(görüntü 1 yolu), url(görüntü 2 yolu);
background-size: 100px, cover;
background-position: top right, center;
background-repeat: repeat-x, no-repeat;`

Bu yaklaşım, birkaç görüntüden oluşan bir tür katmanlı pasta oluşturur. Listede önde olan görüntü, diğerlerinin üzerinde yer alacaktır (yukarıdaki kodda 1. görüntü).

Arka planı canlı bir örnekte görebilirsiniz. Yıldızlı gökyüzü, domuz, kuyruklu yıldız, uzay gemisi ve gezegen — 5 farklı arka plan görüntüsü.

![Screen Shot 2025-07-24 at 23.53.26 PM.png](%C3%87ok%20katmanl%C4%B1%20arka%20plan/Screen_Shot_2025-07-24_at_23.53.26_PM.png)

```
İpucu
Çoğu durumda, çok katmanlı bir arka plan, diğerlerinin özel bir düzenleyicide birleştirildiği tek bir görüntü ile değiştirilebilir. Böyle bir dosyanın boyutu, tek tek görüntülerin toplam boyutundan daha az olacaktır ve tarayıcının beş yerine yalnızca bir istekte bulunması gerekecektir; bu da sayfa yükleme ve görüntüleme hızını artıracaktır.
```