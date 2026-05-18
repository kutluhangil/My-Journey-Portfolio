# String yöntemleri

# **Propertiler ve Metodlar**

Bir kahve otomatı düşünün. Müşteri, kahvesini şekerli ya da şekersiz; sütlü, çikolatalı ya da portakal sulu olarak seçebilir — bunların hepsi kahvenin **özellikleridir**.

Seçilen özelliğe bağlı olarak kahve, farklı yöntemlerle hazırlanacaktır. Bazı tarifler “şeker ekle” veya “süt ekle” gibi işlemleri gerektirirken, bazıları bu adımları **gerektirmez**. Bu, farklı seçimlere karşılık gelen farklı işlemlerin uygulanmasını ifade eder.

Programlamada da aynı şey geçerli.

Veriler, kod içinde erişilebilen bir dizi **özellik** ve **yönteme** (method) sahiptir. Bu özellik ve yöntemler topluluğuna **arayüz (interface)** adı verilir. Bu arayüz sayesinde, varlıklar hakkında bilgi alabilir ve bunlar üzerinde çeşitli işlemler gerçekleştirebiliriz.

# **Özellikler - Propertiler**

Önceki bölümlerde, özellikler hakkında bilgi edinmiştik.

Özellikler ve yöntemler arasında net bir ayrım yapabilmek için, özelliklerin bir varlığın tanımlayıcı nitelikleri olduğunu hatırlamakta fayda vardır. Kahve örneğinde bu özellikler: **renk**, **şeker miktarı** ve **sıcaklık** gibi niteliklerdir. Programlamada da benzer şekilde, örneğin bir **dize (string)**, içindeki karakter sayısını döndüren bir `length` özelliğine sahiptir. Bu özelliğe erişmek için **nokta sözdizimi** (`.`) kullanılır:

`javascript
KopyalaDüzenle`

`objectName.property`

Bir dizenin uzunluğunu elde etmek için **`length`** özelliğini kullanın:

`const message = "JavaScript is awesome";
console.log(message.length); *// 21*`

# **Metodlar**

**Metotlar**, bir değişken (variable) üzerinde gerçekleştirilebilen **şeker ekleme** veya **ısıtma** gibi eylemlere benzetilebilir.

Programlamada da benzer şekilde, veriler üzerinde çeşitli işlemler yapmamıza olanak tanıyan **önceden tanımlanmış yöntemler (metotlar)** bulunur. Örneğin, bir dizeyi (string) farklı bir duruma dönüştürmek için bu metotlar kullanılır. Bir metoda erişim, bir özelliğe (`property`) erişmeye benzer; ancak tıpkı bir fonksiyon çağrısında olduğu gibi **sonuna parantez eklenir**:

`javascript
KopyalaDüzenle`

`objectName.method()`

İşte bir dizeyi büyük harfe dönüştürmek için `toUpperCase()` metodunu kullanma (çağırma) örneği:

`const message = "JavaScript is awesome";
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"`

**Metotlar** ve **özellikler**, ait oldukları varlık (nesne) olmadan bağımsız olarak var olamazlar. Örneğin, bir **dize (string)** olmadan `trim()` metodunu çağıramazsınız; aynı şekilde, bir **dize** veya **dizi (array)** olmadan `length` özelliğinin değerine erişemezsiniz.

[**slice() Metodu**](String%20y%C3%B6ntemleri/slice()%20Metodu%2026d673274a8e807f89c3ee3d5a73d980.md)

[**toLowerCase() ve toUpperCase() metodları**](String%20y%C3%B6ntemleri/toLowerCase()%20ve%20toUpperCase()%20metodlar%C4%B1%2026d673274a8e809fbe32ccf6b21f3739.md)

[**includes() metodu**](String%20y%C3%B6ntemleri/includes()%20metodu%2026d673274a8e8059ad36d1315f81ed51.md)

[**Hedefler**](String%20y%C3%B6ntemleri/Hedefler%2026d673274a8e80a999d6e59c4990d84f.md)

[**startsWith() ve endsWith() metodu**](String%20y%C3%B6ntemleri/startsWith()%20ve%20endsWith()%20metodu%2026d673274a8e8098aea0e01276284d43.md)

[**indexOf() metodu**](String%20y%C3%B6ntemleri/indexOf()%20metodu%2026d673274a8e8002b509c5ed1befd752.md)

[**trim() metodu**](String%20y%C3%B6ntemleri/trim()%20metodu%2026d673274a8e80568399cf7e297d8e59.md)