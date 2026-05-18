# Kontrollü Form

Eğer form alanlarının değerlerine yalnızca gönderim anında değil, her değişiklikte de erişilmesi gerekiyorsa örneğin doğrulama amacıyla bu tür formlar **kontrollü form**olarak adlandırılır.

```
Karmaşık kontrollü formlar, özellikle doğrulama işlemleri söz konusu olduğunda genellikle manuel olarak değil, bir kütüphane yardımıyla oluşturulur. Bu kütüphaneleri ilerleyen derslerde inceleyeceğiz. Ancak temel çalışma mantığını öğrenmek, bu kütüphanelerle çalışırken işlemlerin arka planını anlamamızı sağlar.

```

Kontrollü bir formda tüm elemanların verileri, **durum (state)** içinde saklanır ve `value` özniteliği ile ilgili alanlara iletilir.

```
const LoginForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: ""
  });

  return (
    <form>
      <input type="text" name="login" value={values.login} />
      <input type="password" name="password" value={values.password} />
      <button type="submit">Login</button>
    </form>
  );
};
```

```
Burada dikkat edilmesi gereken nokta, durum nesnesindeki özellik isimlerinin (login ve password), form elemanlarının name özellikleriyle birebir aynı olmasıdır. Bu eşleşme, ileride veri işlemeyi kolaylaştırır.

```

Sonraki adımda, her alan için bir durum güncelleme fonksiyonu tanımlar ve bunu `onChange` özniteliğiyle input’a bağlarız. Callback fonksiyonu, bir olay nesnesi (event object) alır:

```
const LoginForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleLoginChange = (evt) => {
    setValues({
      ...values,
      login: evt.target.value,
    });
  };

  const handlePwdChange = (evt) => {
    setValues({
      ...values,
      password: evt.target.value,
    });
  };

  return (
    <form>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleLoginChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handlePwdChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
```

Görüldüğü gibi, her iki fonksiyon neredeyse aynıdır:

- Olay nesnesini alır.
- `setValues` fonksiyonunu çağırır.
- Güncellenen alanın değerini `evt.target.value` ile alır.
- Tek fark, güncellenen nesne özelliğindedir.