# position özelliği

Varsayılan olarak, bir sayfadaki öğeler soldan sağa ve yukarıdan aşağıya doğru düzenlenir.

Bir öğeyi diğerinin üzerine yerleştirmek istiyorsanız `position` özelliğini kullanın. Bir öğeyi tam anlamıyla kaldırmanıza ve başka bir öğenin üzerine yerleştirmenize olanak tanır.

`position` özelliği, öğenin konumlandırma türünü değiştirir.

`position` özelliği için birkaç temel değer vardır:

`position: static | relative | absolute | fixed | sticky`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/15b5857a-9546-4bd3-814b-f97ea57dcf47Frame%2048375.png)

Varsayılan değer `static`.

Statik konumlandırma (`static`), bir web sayfasındaki tüm öğelerin ilk durumudur. Blok modeli ve flexbox bu statik sayfa akışında öğelere sahiptir.

```
Öğelerin büyük çoğunluğu standart statik sayfa akışına göre konumlandırılmalıdır. Diğer konumlandırma şemaları, başka bir şekilde konumlandırılmaları mümkün olmadığında dekoratif efektler için kullanılır.

```

`position` özelliği değeri `static`’ten farklı olan bir öğeye "konumlandırılmış öğe" denir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/d8ce1ebf-845d-4fab-bb35-2e7591c672f1Frame%2048376.png)

Göreceli (`relative`), mutlak (`absolute`) ve sabit (`fixed`) konumlandırma, bir öğeyi sayfa akışının üzerine yükseltmenize ve bir koordinat sistemi kullanarak manuel olarak konumlandırmanıza olanak tanır. Bu koordinat sisteminin başlangıcı konumlandırma türüne bağlıdır. İlerleyen bölümlerde her bir türü ayrı ayrı inceleyeceğiz.

Bir öğenin konumunu belirtmek için, `position` olmayan öğelere uygulanamayan `top`, `left`, `bottom` veya `right` özelliklerini kullanmanız gerekir.