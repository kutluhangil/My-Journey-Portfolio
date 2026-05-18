# Context Oluşturma

Context oluşturmak için yerleşik **`createContext`** fonksiyonu kullanılır. Bu fonksiyonun çağrılması, bir context nesnesi döndürür.

```
import { createContext } from "react";

const myContext = createContext();
```

`createContext`, bir varsayılan değer alabilir ancak genellikle bu değeri belirtmek gerekli değildir. Çünkü çoğu zaman context'e erişim olmadan uygulamanın mantıklı bir şekilde çalışması mümkün olmayabilir.