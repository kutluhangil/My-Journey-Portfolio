# Göreceli Konumlandırma

*Tüm konumlandırılmış öğelerin ortak noktasını bulduk. Ancak bu, position özelliği için uygun değeri seçmek için yeterli değildir. Nasıl farklı olduklarını bilmeniz gerekir!*

Göreceli konumlandırmada, öğe sayfa akışında yerini korur, yani etrafındaki diğer öğeler onun yerini almaz. Ancak, öğeyi görsel olarak orijinal konumundan kaydırabilirsiniz. Bu kaydırma işlemi, diğer öğelerle örtüşmesine neden olabilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/bd38b468-8bdf-4d50-a28f-f2718e42100cFrame%2048378.png)

`top`, `left`, `bottom` ve `right` özellikleri, bir öğenin orijinal konumuna göre görsel bir ofset belirlemenizi sağlar. Bu değerler negatif olabilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0e5a2a3d-0cf8-479b-912f-71f608cfbe0bFrame%2048379%20%281%29.png)

```
Göreceli konumlandırma, tek başına kullanıldığında öğeyi sayfa akışından kaldırmaz ve dolayısıyla yer kaplamaya devam eder. Bu nedenle, göreceli konumlandırma genellikle mutlak konumlandırma ile birlikte kullanılır.

```

Üç blok oluşturalım.

Ortadaki `div.relative` öğesini göreceli bir konuma ayarlayacağız ve görsel olarak ilk konuma göre sağa ve aşağı kaydıracağız.

![Screen Shot 2025-07-25 at 22.16.57 PM.png](G%C3%B6receli%20Konumland%C4%B1rma/Screen_Shot_2025-07-25_at_22.16.57_PM.png)