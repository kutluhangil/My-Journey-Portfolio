# Programatik Navigasyon

React Router, sadece `Link` bileşeni aracılığıyla değil, aynı zamanda kullanıcı etkileşimleri veya belirli olaylar sonucunda da navigasyonu destekler. Örneğin, bir düğmeye tıklama, form gönderimi veya HTTP isteği gibi durumlar sonrasında yönlendirme yapabilirsiniz. Bir kullanıcı giriş sürecini ele alalım: Giriş formu gönderildikten ve HTTP isteği başarıyla tamamlandıktan sonra, kullanıcıyı profil sayfasına yönlendirebiliriz.

İlk yöntem `useNavigate` hook’udur. Bize `navigate` fonksiyonunu sağlar ve bu fonksiyonu çağırırken yönlendirme yapılacak yolu iletmemiz gerekir. Bu yöntem imperatif bir yapıya sahip olmakla birlikte daha esnektir ve daha az kod gerektirir.

```
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async values => {
    const response = await FakeAPI.login(values);
    if (response.success) {
      navigate("/profile", { replace: true });
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};
```

Buradaki önemli detaylardan biri, `navigate` fonksiyonunun argümanlarına dikkat etmektir. Bu argüman, isteğe bağlı parametreleri içeren bir nesnedir. `replace`özelliği varsayılan olarak `false` değerine sahiptir ve bu özellik, yeni rotanın tarayıcı geçmişine nasıl ekleneceğini kontrol eder.

Bunu bir kağıt yığınına benzetebiliriz. Varsayılan durumda, yeni sayfa en üste eklenir ve önceki sayfalara dokunulmaz. Ancak `replace: true` belirtildiğinde, yeni sayfa en üstteki sayfanın yerine geçer. Bu durum, nadiren kullanılır, örneğin kullanıcı giriş yaptıktan sonra, geri tuşuna basarak giriş sayfasına dönmemesi istenir çünkü artık giriş işlemi tamamlanmıştır.

İkinci yöntem ise `Navigate` bileşenidir. Bu bileşen, `useNavigate` kancasının deklaratif bir alternatifidir ve render anında yönlendirme yapar. Yönlendirme yolu ve isteğe bağlı parametreler `props` olarak aktarılır. Deklaratif bir yapıya sahip olsa da, daha az esneklik sunar ve daha fazla kod yazmayı gerektirebilir.

```
import { Navigate, useState } from "react-router-dom";

export const Login = () => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleSubmit = async values => {
    const response = await FakeAPI.login(values);
    setIsLoginSuccess(response.success);
  };

  if (isLoginSuccess) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};
```

Hangi yöntemi kullanacağınız, tamamen ihtiyaçlarınıza ve uygulamanın gereksinimlerine bağlıdır. Bazı durumlarda deklaratif `Navigate` bileşeni daha uygun olurken, diğerlerinde imperatif `useNavigate` fonksiyonunu tercih etmek daha pratik olabilir.