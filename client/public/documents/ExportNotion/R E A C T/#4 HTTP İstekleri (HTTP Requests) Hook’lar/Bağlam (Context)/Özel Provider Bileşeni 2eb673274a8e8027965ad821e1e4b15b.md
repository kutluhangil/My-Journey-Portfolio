# Özel Provider Bileşeni

Şu an context değeri dinamik değil. Kullanıcı kayıt olabilir ve çıkış yapabilir, bu durumu bileşen durumunda saklayacağız. Ayrıca, bu durumu değiştirmek için yöntemlere ihtiyacımız olacak. **`UserProvider`** adında özel bir provider bileşeni oluşturacağız ve state yönetim mantığını burada yerleştireceğiz.

Artık context dosyası `.jsx` uzantısıyla bitiyor.

```
// src/userContext.jsx

import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ username, setUsername ] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <userContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
};
```

Ana dosya **`main.jsx`** içinde tüm bileşen ağacını özel provider ile saracağız.

```
// src/main.jsx

import { UserProvider } from "./userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
```

**`App`** bileşeni içinde, kullanıcı menüsü bileşeni aynı şekilde render edilecektir.

```
// src/components/App.jsx

import { UserMenu } from "./UserMenu";

const App = () => {
  return (
    <div>
      <UserMenu />
    </div>
  );
};
```

**`useUser`** kancasını kullanarak kullanıcı context değerine erişeceğiz ve farklı bir arayüz render edeceğiz.

```
// src/components/UserMenu.jsx

import { useUser } from "../userContext";

export const UserMenu = () => {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
```