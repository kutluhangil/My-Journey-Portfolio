# Eylem Gönderimi (dispatch)

Redux'a arayüzde bir olayın gerçekleştiğini bildirmek için bir eylem göndermek gerekmektedir. Bunun için React Redux kütüphanesinde [`useDispatch()`](https://react-redux.js.org/api/hooks#usedispatch) adlı bir hook bulunmaktadır; bu hook(kanca), eylem gönderme fonksiyonu olan `dispatch`'e bir referans döndürmektedir.

```
// Hook içe aktarıyoruz
import { useDispatch } from "react-redux";

const MyComponent = () => {
  // Eylem gönderme fonksiyonuna olan referansı al
  const dispatch = useDispatch();
};
```

Uygulamamızın bileşenlerinden daha önce tanımlı eylemleri gönderen kodu ekleyelim. Eylem gönderimine odaklanmak için örneklerde stil kodunu atlayacağız. Tam uygulama kodunu bu bölümün sonunda yer alan canlı örnekte inceleyebilirsiniz.4