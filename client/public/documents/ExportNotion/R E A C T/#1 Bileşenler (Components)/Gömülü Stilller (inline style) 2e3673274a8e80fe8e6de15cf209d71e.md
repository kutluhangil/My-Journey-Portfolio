# Gömülü Stilller (inline style)

Bir bileşeni stilize etmenin çeşitli yöntemleri vardır; bunlardan en basit ve en sınırlı olanı **inline stillerdir**. Inline stiller, bileşenlere doğrudan stil vermek için `style`özelliği kullanılarak uygulanır. React'te bu özellik bir dize değil, bir **stil nesnesi** olarak tanımlanır.

```
// src/components/App.jsx

export const App = () => {
  return (
    <p
      style={{
        margin: 8,
        padding: "12px 16px",
        borderRadius: 4,
        backgroundColor: "gray",
        color: "white",
      }}
    >
      Please update your email!
    </p>
  );
};
```

Gömülü stiller için birkaç zorunlu kuralı örneklerle belirtebiliriz:

- İki veya daha fazla kelimeden oluşan CSS özellik adları, örneğin `background-color`, camelCase notasyonu kullanılarak yazılmalıdır (örneğin `backgroundColor`). Bu, React'teki stil nesnesi tanımlamalarında geçerlidir.
- Sayısal değerlere `px` birimi varsayılan olarak eklenir. Eğer başka bir birim kullanılacaksa ya da değer birden fazla parçadan oluşuyorsa, değer bir dize içinde belirtilmelidir.

JSX yapısının okunabilirliğini artırmak için stil nesnesini bir değişkene alalım.

```
// src/components/App.jsx

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

export const App = () => {
  return (
    <>
      <p style={alertStyles}>Please update your email!</p>
      <p style={alertStyles}>There was an error during transaction!</p>
      <p style={alertStyles}>Payment received, thank you for your purchase!</p>
    </>
  );
};
```

Daha modüler bir yapı oluşturmak için bir **`Alert`** bileşeni tanımlayabiliriz. Bu bileşen, belirli bir metni stilize ederken **arka plan rengi ve diğer stil özelliklerini yönetmek için** kullanılır.

```
//src/components/Alert.jsx

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

export const Alert = ({ children }) => {
  return <p style={alertStyles}>{children}</p>;
};
```

`Alert` bileşenini, birden fazla mesajı render etmek için kullanıyoruz.

```
// src/components/App.jsx

import { Alert } from "./Alert";

export const App = () => {
  return (
    <>
      <Alert>Please update your email!</Alert>
      <Alert>There was an error during transaction!</Alert>
      <Alert>Payment received, thank you for your purchase!</Alert>
    </>
  );
};
```