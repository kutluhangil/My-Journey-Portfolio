# ECMAScript modülleri

ECMAScript Modülleri (ESM), JavaScript modül sistemlerinin modern standartıdır ve projedeki farklı dosyalar arasında veri aktarımını düzenli ve standart bir şekilde sağlamaya yarar.

Bir modül, tekrar tekrar kullanılabilen bir kod parçasını içeren JavaScript dosyasıdır. Modül, belirli nesneleri dışa aktararak (export) bu nesnelerin diğer modüller tarafından erişilebilir olmasını sağlar.

Aşağıdaki örnekte, `makeMessage.js` dosyası kullanıcı adına göre bir mesaj oluşturan bir işlev tanımlar ve bu işlevi dışa aktarır:

```
export default function makeMessage(username) {
	return `Welcome, ${username}!`;
}
```

`makeMessage.js` modülünden dışa aktarılan bu işlev, projenin başka dosyalarında kullanılabilir. Örneğin, `index.js` içinde:

```
import makeMessage from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
```

Her JavaScript dosyası benzersiz bir modül bağlamında kod saklar, ihtiyaç duyduğu bağımlılıkları içe aktarır ve diğer modüllerin içe aktarabileceği her şeyi dışa aktarır. Daha sonra, dışa aktarma/içe aktarma sözdizimini ayrıntılı olarak inceleyeceğiz.

```
Zamanla ECMAScript Modülleri (ESM) tarayıcılar tarafından ek araçlara gerek kalmadan tamamen desteklenecek. Ancak, şu anda tarayıcı desteği tam olarak oluşturulmadığından, ESM genellikle modül paketleme araçlarıyla birlikte kullanılır, örneğin Vite, ek yapılandırma gerektirmeden bu işlemi yapmanıza olanak tanır.

```