# CSS Modülleri

CSS modülleri, resmi bir standart değildir ve doğrudan tarayıcı tarafından uygulanmaz. Bu, projenin derlenme aşamasında başlatılan bir süreçtir (örneğin, Vite kullanarak), bu süreç sonucunda sınıf adları benzersiz olanlarla değiştirilir. Bu, aynı sınıf adını farklı CSS dosyalarında kullanmayı mümkün kılar, böylece isim çatışmalarından endişe etmeden çalışabilirsiniz. Bu yaklaşım, CSS'deki global görünürlük sorununu çözmek amacıyla geliştirilmiştir.

Vite, varsayılan olarak CSS modüllerini destekler; tek yapmanız gereken, stil dosyalarını `.module.css` uzantısıyla oluşturmaktır; örneğin `Alert.module.css`. CSS modülü içerisinde geçerli herhangi bir CSS kullanılabilir.

```
/* src/components/Alert.module.css */

.alert {
  margin: 8px;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: gray;
  color: white;
}
```

CSS modülünün içe aktarım sözdizimi, JavaScript modülleriyle benzerlik gösterir. Modül, sınıf adlarının orijinal ve üretilmiş hallerini eşleyen bir nesneyi varsayılan olarak dışa aktarır.

```
// src/components/Alert.jsx

// CSS modülünün ithalat sözdizimi
import css from "./Alert.module.css";

// Sınıf adlarının eşleşme nesnesini alıyoruz
console.log(css); // { alert: "Alert_alert_ax7yz" }

const Alert = ({ children }) => {
  // CSS modülünden sınıf adı olan nesnenin özelliğine erişiyoruz
  return <p className={css.alert}>{children}</p>;
};
```

Canlı bir örnek kodu incelemek için aşağıdaki bağlantılara göz atabilirsiniz; bu örneklerde şimdiye kadar ele aldığımız tüm materyaller kullanılmıştır:

`Varsayılan etiket seçicileri küresel etki alanına sahip olmaya devam eder; CSS modülleri yalnızca benzersiz sınıf adları üretir.`