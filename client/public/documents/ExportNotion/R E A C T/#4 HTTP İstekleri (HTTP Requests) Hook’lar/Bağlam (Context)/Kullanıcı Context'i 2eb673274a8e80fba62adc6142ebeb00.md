# Kullanıcı Context'i

Bir kullanıcı durumu yönetmek için context oluşturabiliriz. Örneğin, giriş durumu ve kullanıcı bilgilerini saklayabiliriz.

```
// src/userContext.js
import { createContext, useContext } from "react";

export const userContext = createContext();

export const useUser = () => useContext(userContext);
```

Context'i tüm bileşen ağacına sağlamak için `Provider` ile sarılabilir. Bu işlem genellikle `main.jsx` dosyasında yapılır.

```
// src/main.jsx
import ReactDOM from "react-dom/client";
import { userContext } from "./userContext.js";

const contextValue = {
	username: "Mango",
	isLoggedIn: true
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <userContext.Provider value={contextValue}>
    <App />
  </userContext.Provider>
);
```

Bir kullanıcı menüsü bileşeni ekleyip, `App` bileşeni içinde render edeceğiz. Bu bileşen, kullanıcı adını göstermek için context'i kullanacaktır.

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

`UserMenu` bileşeni context'ten alınan kullanıcı adını gösterecektir.

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

**`UserMenu`**'da context değerine erişmek için özel bir kanca **`useUser`** kullanacağız ve kullanıcı adını göstereceğiz.

```
// src/components/UserMenu.jsx

import { useUser } from "../userContext";

export const UserMenu = () => {
  const { username } = useUser();

  return (
    <div>
      <p>Welcome, {username}!</p>
	  <button>Log out</button>
    </div>
  );
};
```