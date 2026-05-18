# useContext() Hook’u

Context değerine erişmek için `useContext` hook'u kullanılır.

```
import { createContext, useContext } from "react";

const myContext = createContext();

const contextValue = useContext(myContext);
```

**`useContext`** Hook’u:

- Bileşenlerde context'e erişmek için kullanılır.
- Tek bir argüman alır - oluşturulan context'e referans.
- Provider'dan context değerini döndürür.
- Context değeri değiştiğinde, bu değere bağımlı bileşen güncellenir.

Context nesnesinin referansını her seferinde ithal etmek pek pratik olmayabilir. Bu nedenle, context'e erişmek için özel bir kanca oluşturulur.

```
import { createContext, useContext } from "react";

const myContext = createContext();

// Bu kancayı bileşenlere aktarın ve kullanın
export const useMyContext = () => useContext(myContext);
```