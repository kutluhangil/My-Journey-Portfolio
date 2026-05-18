# Olay tetikleyicileri

Bu bölümde **baloncuk aşamasına** odaklanacağız; pratikte geliştiricilerin en sık çalıştığı aşama genellikle budur.

Bir olay gerçekleştiğinde işleyiciler önce en içteki (en derine gömülü) öğede tetiklenir; ardından sırasıyla üst öğede, onun da üstündeki öğede ve böylece hiyerarşi boyunca yukarı doğru devam eder. Bu sürece **olay baloncuğu** (*event bubbling*) denir; çünkü olaylar, sudaki bir hava kabarcığı gibi, iç öğeden başlayarak tüm ata öğeler üzerinden `window`’a doğru “yükselir”.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d7061599-d92c-40be-9749-009120f4c8bfFrame%2048664.jpg)

Bunu görmek için, her birinde `click` işleyicisi bulunan iç içe üç `<div>` etiketi içeren aşağıdaki örneği ele alalım:

```
<div id="parent">
  Parent
  <div id="child">
    Child
    <div id="descendant">Descendant</div>
  </div>
</div>
```

Baloncuk aşaması, `#descendant` öğesine yapılan bir tıklamanın işleyicilerini şu sırayla çalıştırır:

1. Önce **`#descendant`** öğesinin kendisinde
2. Sonra **`#child`** öğesinde
3. Ardından **`#parent`** öğesinde
4. Son olarak ata zinciri boyunca `window`’a kadar

Dolayısıyla örnekte `#descendant`’a tıklarsanız, konsolda **descendant → child → parent** şeklinde iletiler (`console.log`) görürsünüz.