# Formun Gönderilmesi

Kontrollü bir formun değerlerini işlemek için bir `handleSubmit` fonksiyonu tanımlarız:

```
const handleSubmit = (evt) => {
  evt.preventDefault();

	// Alan değerleri
  console.log(values);
};
```

Bu fonksiyonu formun `onSubmit` özniteliğine bağlarız:

`<form onSubmit={handleSubmit}>`

Form gönderildikten sonra, formu sıfırlamak için durumu başlangıç değerlerine döndürürüz. Bu, bileşeni yeniden render eder:

```
const handleSubmit = (evt) => {
  evt.preventDefault();
  console.log(values);

	// Formun temizlenmesi
  setValues({
    login: "",
    password: "",
  });
};
```

İşte giriş formu örneğinin tam kodu.

```
const LoginForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
```