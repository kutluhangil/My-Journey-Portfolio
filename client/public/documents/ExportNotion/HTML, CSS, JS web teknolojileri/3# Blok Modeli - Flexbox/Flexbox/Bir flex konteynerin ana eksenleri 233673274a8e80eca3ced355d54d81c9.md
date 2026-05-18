# Bir flex konteynerin ana eksenleri

Öğelerin normal sırası belge akışı ve türleri (blok veya satır) tarafından belirlenir. Ancak Flexbox'ta durumun böyle olmadığını zaten biliyorsunuz.

**Flexbox** modelinde, öğelerin yönü, öğelerin sıralandığı kapsayıcının **yön eksenleri** tarafından belirlenir.

Kapsayıcının ana eksenlerini göz önünde bulundurun. Bu, bir sonraki bölümde inceleyeceğimiz özelliklerden nelerin etkileneceğini anlamak için kesinlikle gereklidir.

# **Main axis**

`main axis` - flex-container öğelerinin yerleştirildiği ana eksen. Ana eksenin yönü `flex-direction` özelliği tarafından kontrol edilir. Bu özellik şu şekilde olabilir

- yatay (örnek A)
- dikey (örnek B)

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/509a107b-6d53-48fb-96fc-dcfa766a1d59Frame%2048076%20%281%29.png)

# **Cross axis**

`cross axis` - her zaman ana eksene (`main axis`) dik olan enine eksen. Yönü açıkça ayarlanmamıştır, çünkü

her zaman bağlıdır

- eğer `main axis` yatay ise, `cross axis` dikeydir (örnek A)
- eğer `main axis` dikey ise, `cross axis` yataydır (örnek B)

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a27f6c81-b854-4596-b037-9bbd0ddf877cFrame%2048077%20%281%29.png)