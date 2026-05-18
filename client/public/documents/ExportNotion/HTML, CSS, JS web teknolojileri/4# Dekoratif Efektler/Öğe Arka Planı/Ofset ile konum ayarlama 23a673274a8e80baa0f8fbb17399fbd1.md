# Ofset ile konum ayarlama

Öğenin boyutuna bağlı kalmamak ve arka plan konumunu katı bir şekilde ayarlamamak için ofset konumu sözdizimini kullanabilirsiniz.

`backrgound-position: x yer değiştirme-x y yer değiştirme-y`

Örneğin, isteğe bağlı boyutlardaki bir öğenin sağ alt köşesine bir arka plan yerleştirmek istiyorsanız, arka plan sağdaki kenarlıktan `30px` ve alttan `20px` uzakta olur.

`backrgound-position: right 30px bottom 20px;`

Tebrik bölümümüz aşağıdaki arka plan resmini kullanır, ancak bu resim aşağıdaki arka plan resminden daha uzun ve daha geniştir. Örnekte, üst kısmını görüyoruz, çünkü varsayılan olarak sol üst köşeye göre konumlandırılmıştır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/69034f17-3997-4b71-af11-276843d4a014Screenshot%202023-03-30%20at%2014.39.00.png)

Pratikte, çoğu zaman arka plan görüntüleri merkeze yerleştirilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/fa437b5e-a19b-4766-a4a0-b0f61bd86077Screenshot%202023-03-30%20at%2014.39.51.png)

Canlı bir örnekte konumlandırmayı karşılaştırın.

1. Varsayılan olarak ilk konumlandırma bloğunda.
2. İkincisinde — merkezde

Bloğun genişliğine ve yüksekliğine bağlı olarak, görüntünün görünür kısmı değişecektir.