# background-position özelliği

`background-position` özelliği, iki koordinat kullanarak arka plan görüntüsünün öğe çerçevesine göre konumunu kontrol eder — Bu konumlandırma, yatay (`x`) ve dikey (`y`) koordinatlarla belirlenir.

`background-position: x y;`

Değer olarak mutlak (`px`) veya göreli (`%`) birimler ve hatta anahtar kelimeler (top, bottom, right, left, center).

Varsayılan değerler x için `left` ve y için `top`, yani arka plan öğenin sol üst köşesine göre konumlandırılır.

`*/* Arka plan resmini ortaya yerleştirin */*
background-position: 50% 50%;

*/* Arka plan görüntüsünü sol kenardan 100 piksel ve üstten 200 piksel olacak şekilde ayarlayın */*
background-position: 100px 200px;

*/* Arka plan resmini sağ alt köşeye yerleştirin */*
background-position: right bottom;

*/* Arka plan resmini sol üst köşeye yerleştirin */*
background-position: left top;`

Canlı örnekte arka plan konumlandırmasının nasıl değiştiğini görmek için `x` ve `y` eksenlerindeki değerleri ayarlamak üzere kaydırıcıları kullanın.

![Screen Shot 2025-07-24 at 23.37.53 PM.png](background-position%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-24_at_23.37.53_PM.png)