# Sınıf Yapılandırması

Her bir bildirim türü için arka plan rengini `variant` prop'unun değerine bağlı olarak kontrol edeceğiz. Bunu yapmak için CSS sınıflarını kullanacağız ve bu sınıfları, prop değerleriyle tutarlı olacak şekilde isimlendireceğiz.

```
/* src/components/Alert.css */

.alert {
  margin: 8px;
  padding: 12px 16px;
  border-radius: 4px;
  color: white;
}

.alert.info {
  background-color: blue;
}

.alert.success {
  background-color: green;
}

.alert.error {
  background-color: red;
}

.alert.warning {
  background-color: orange;
}
```

className özniteliğinin nasıl hesaplanacağı, geliştiricinin tercihine ve uygulamanın ihtiyaçlarına bağlıdır. Örneğin, birden fazla sınıf adı bir dizi içinde tanımlanarak `join`yöntemiyle birleştirilebilir ve tek bir sınıf dizesi elde edilebilir.

```
// src/components/Alert.jsx

import "./Alert.css";

const Alert = ({ variant, children }) => {
  const classNames = ["alert", variant];

  return <p className={classNames.join(" ")}>{children}</p>;
};
```

Alert bileşenine iki isteğe bağlı prop ekleyeceğiz: `outlined` ve `elevated`. Bu prop'lar yalnızca `true`, `false` veya `undefined` değerlerini alabilir. Eğer bu prop'lar `true`olarak belirtilirse, `<p>` etiketi sırasıyla `is-outlined` ve `is-elevated` sınıflarını alacaktır.

```
/* src/components/Alert.css */

/* Tüm önceki CSS kodu */

.alert.is-outlined {
  outline: 1px solid black;
}

.alert.is-elevated {
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
}

```

`alert` sınıfı her zaman bulunacaktır. Ancak `elevated` ve `outlined` prop'larına karşılık gelen sınıflar, yalnızca bu prop'ların değeri `true` olduğunda `if` bloklarıyla eklenir.

```
// src/components/Alert.jsx

import "./Alert.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];

  if (outlined) {
		classNames.push("is-outlined");
	}

  if (elevated) {
		classNames.push("is-elevated");
	}

  return <p className={classNames.join(" ")}>{children}</p>;
};
```

Son olarak, burada ele aldığımız tüm materyali içeren canlı bir örneği gözden geçirebilirsiniz.

[https://stackblitz.com/edit/vitejs-vite-zvfqgb?ctl=1&embed=1&file=src%2FAlert.jsx&hideNavigation=1&view=editor](https://stackblitz.com/edit/vitejs-vite-zvfqgb?ctl=1&embed=1&file=src%2FAlert.jsx&hideNavigation=1&view=editor)

**`className özniteliğinin nihai değerini hesaplamak için if...else bloğu, switch ifadesi, ternary operatörü veya aynı sonuca ulaştıracak başka bir JavaScript söz dizimi kullanılabilirdi. Önemli olan, sınıf isimleri içeren dizeyi doğru bir şekilde oluşturmak ve fazladan veya geçersiz değerler içermemesidir.`**