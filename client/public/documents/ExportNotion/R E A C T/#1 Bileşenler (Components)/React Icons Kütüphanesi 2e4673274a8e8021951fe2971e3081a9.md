# React Icons Kütüphanesi

[**React Icons**](https://react-icons.github.io/react-icons/), React uygulamaları için özel olarak geliştirilmiş geniş bir ikon setidir. Vektör tabanlı simgeleri bileşenler olarak kullanmayı kolaylaştıran bu kütüphane, popüler ikon setlerini React projelerine hızlı ve pratik bir şekilde entegre etmenizi sağlar.

Kütüphaneyi projeye eklemek için NPM paketi kullanmak gerekmektedir:

`npm install react-icons`

Kütüphane, Font Awesome, Material Icons, Ionicons ve birçok diğer popüler setleri temsil eden çeşitli simgelerden oluşan geniş bir yelpaze sunmaktadır.

Simgeleri kullanmak için sadece gerekli bileşeni içe aktarmanız ve JSX kodunuza dahil etmeniz yeterlidir. Örneğin, React Icons web sitesinde bir simge seçip gerekli kodu kopyalayabileceğiniz kullanışlı bir grafik arayüz bulunmaktadır.

Örneğin, kullanıcının adının soluna "Hero Icons" setinden bir kullanıcı simgesi ekleyelim:

```
import { HiUser } from "react-icons/hi";

const UserMenu = ({ name }) => {
  return (
    <div>
      <p><HiUser /> {name}</p>
    </div>
  );
};
```

Simge görünümünü, React stillerini kullanarak, kendi sınıflarınızı veya diğer parametreleri geçirerek kolayca özelleştirebilirsiniz.

```
import { HiUser } from "react-icons/hi";

const UserMenu = ({ name }) => {
  return (
    <div>
      <p><HiUser className="my-icon" size="24" /> {name}</p>
    </div>
  );
};
```

- İkonun rengi, ek CSS sınıfında **`color`** özniteliği ile belirtilir.
- İkonun boyutu, **`size`** özniteliğindeki sayı ile tanımlanır; bu, piksel cinsinden bir değerdir.
- Varsayılan ikon boyutu **`16px`**'dir.