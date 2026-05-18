# Store'a Abone Olma (selectors)

Bir bileşenin store’dan veri alabilmesi için React Redux kütüphanesinde [`useSelector(selector)`](https://react-redux.js.org/api/hooks#useselector) adında bir kanca (hook) bulunmaktadır. Bu kanca, Redux’un tüm durum nesnesini `state` olarak alan bir fonksiyonu (seçici) parametre olarak kabul eder. Seçici fonksiyon, bileşenin ihtiyaç duyduğu durumun yalnızca ilgili kısmını döndürmelidir.

```
  // Hook içe aktarıyoruz
import { useSelector } from "react-redux";

const MyComponent = () => {
  // Gerekli durum parçasını alıyoruz
  const value = useSelector(state => state.some.value);
};
```

Uygulamamızdaki bileşenler için gerekli abonelik kodunu ekleyelim. Örneklerde mantığa odaklanmak adına stil detaylarını atlayacağız. Programın tam kodunu, bu bölümün sonunda canlı bir örnekte inceleyebilirsiniz.