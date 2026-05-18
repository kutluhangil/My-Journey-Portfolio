# Stillerin Yeniden Kullanımı

Farklı bileşenlerde aynı CSS sınıflarını doğrudan kullanmak önerilmez; bu yaklaşım, bileşenlerin ayrışmasını ve modüler yapıyı engelleyebilir. Bunun yerine, stil tekrarı gerektiren bileşenlerin ortak bir yapı altında birleştirilmesi daha etkili olacaktır. Örneğin, `<LoginButton>` ve `<FollowButton>` bileşenlerinde temel CSS sınıfı `.button`kullanmak yerine, kendi stilleri olan `<Button>` adlı bir bileşen oluşturmak daha iyidir. Böylece, `<LoginButton>` ve `<FollowButton>` bileşenleri doğrudan bir CSS sınıfı kullanmak yerine `<Button>` bileşenini kullanabilir.

```
// Button.jsx
const Button = ({ variant, children }) => {
  // Buton için temel stil ve birkaç gösterim seçeneği
  return <button className={clsx("button", variant)}>{children}</button>;
};

// LoginButton.jsx
const LoginButton = () => {
  // Giriş butonuna özgü mantık
  return <Button variant="primary">Login</Button>;
};

// FollowButton.jsx
const FollowButton = () => {
  // Takip butonuna özgü mantık
  return <Button variant="secondary">Follow</Button>;
};
```