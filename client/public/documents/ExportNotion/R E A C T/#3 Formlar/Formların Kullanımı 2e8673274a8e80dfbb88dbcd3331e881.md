# Formların Kullanımı

# 

Pratikte, formlar genellikle yalnızca kendi alanlarının değerlerini toplamakla ilgilenen bağımsız bileşenler olarak tasarlanır. Form tarafından toplanan bu verilerle ne yapılacağı ise genellikle formun render edildiği üst bileşen tarafından belirlenir ve bir prop aracılığıyla forma iletilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0803b2ab-ef6b-489a-8cf2-89c434bd152cScreenshot%202024-01-03%20at%2017.57.11.png)

Aşağıdaki görselde de gösterildiği gibi, formu **`App`** bileşeninde kullanıyoruz ve ona **`onLogin`** adında bir prop geçiriyoruz. Bu prop, kullanıcı verilerini parametre olarak alan bir geri çağırma fonksiyonu (callback function) olacaktır.

```
const App = () => {

  // Formun gönderimini işlemek için geri çağırma fonksiyonu
  const handleLogin = (userData) => {
    // Verilerle gerekli işlemleri yapıyoruz
    console.log(userData);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Geri çağırmayı form prop'u olarak geçiriyoruz */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};
```

```
Form bileşeni için prop ismi herhangi bir şey olabilir; onLogin olmak zorunda değildir çünkü bu, form öğesinin yerleşik bir prop'u değildir.

```

Form bileşeninde `onLogin` prop’unu ayrıştırarak (destructure ederek), form gönderildiğinde bu fonksiyonu çağırır ve form alanlarının değerlerini ona iletiriz.

```
const LoginForm = ({ onLogin }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // onLogin prop'unu çağırıyoruz
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
```

Dikkat edilmesi gereken nokta şudur: `onLogin` prop’una form alanlarının değerlerini geçiriyoruz, olay nesnesini (event object) değil. Olay nesnesi yalnızca form içinde varsayılan davranışı iptal etmek ve form elemanlarıyla çalışmak için kullanılır. Olay nesnesini bir prop olarak iletmek bir anti-pattern olarak kabul edilir.