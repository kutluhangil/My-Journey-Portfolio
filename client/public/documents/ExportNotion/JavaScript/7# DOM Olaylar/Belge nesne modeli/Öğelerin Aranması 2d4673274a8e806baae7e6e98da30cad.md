# Öğelerin Aranması

DOM öğelerinin bir nesne, yani özellikleri ve yöntemleri olan bir yapı olduğunu biliyorsunuz. Şimdi, istediğiniz CSS seçicisi ile bir öğeyi hızlıca bulmayı öğrenme zamanı geldi.

`elem.querySelector*` metotları grubu, öğeleri aramak için modern bir standarttır. Bu metotlar, CSS seçicisi ile bir öğe veya öğe grubunu bulmanıza olanak tanır.

`element.querySelector(selector)`

Genellikle yalnızca bir tane — çoğunlukla benzersiz — öğe bulunması gerektiğinde kullanılır.

`element` içinde CSS seçicisi `selector` ile eşleşen **ilk bulunan öğeyi** döndürür. Birden fazla öğe olsa bile, her zaman DOM ağacındaki yalnızca ilk öğenin referansı döndürülür.

- Hiçbir şey bulunamazsa, `null` döner.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/e69673c9-49e5-476c-8f87-16cb280ad1e7Frame%2048659.jpg)

DOM'a erişim, `document` nesnesinden başlar. Bu sayede herhangi bir öğeye ulaşılabilir. `document` nesnesi, tarayıcıda çalıştırıldığında betiğe erişilebilen global `window` nesnesinin bir parçasıdır. `alert`, `console.log` ve pek çok diğer şey gibi.

`element.querySelectorAll(selector)`

Koleksiyon elemanlarını bulmak gerektiğinde, yani aynı seçiciye sahip öğelerin bir dizisini almak için kullanılır. Örneğin, `list-item` sınıfına sahip liste öğeleri gibi.

`element` içindeki tüm CSS seçicisine uyan öğelerin bir **NodeList (dizi benzeri yapı)**kopyasını döndürür.

- Hiçbir şey bulunmazsa, **boş bir dizi** döner.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0784c4eb-0031-40cc-8963-8346182f3ec3unnamed.jpg)

Örnek penceresinin sağ tarafındaki **CODEPEN** logosuna tıklayarak bu örneği ayrı bir pencerede açabilirsiniz. Geliştirici konsolundaki günlüklere göz atın.