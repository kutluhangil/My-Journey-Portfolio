# Adlandırma (Naming)

Şu ana kadar, seçici isimleri üzerinde pek durmamıştık. Ancak, resmi [Redux stil kılavuzu](https://redux.js.org/style-guide) içinde, seçici isimlendirmesi için en iyi uygulamalar hakkında bilgiler bulunmaktadır.

Stil kılavuzunda önerilen yöntem, seçici fonksiyon isimlerinin **`select`** önekiyle başlaması ve ardından seçilen değerin açıklayıcı bir şekilde belirtilmesidir.

Şu anki seçicileri içeren dosya aşağıdaki gibi görünüyor. Her seçicinin ismi **`get`**önekiyle başlatılmış. Bu kullanım aslında hatalı değildir; ancak proje içerisindeki kodun tutarlılığı öncelikli olmalıdır.

```
// src/redux/selectors.js

export const getTasks = state => state.tasks.items;

export const getIsLoading = state => state.tasks.isLoading;

export const getError = state => state.tasks.error;

export const getStatusFilter = state => state.filters.status;
```

Yine de, stil kılavuzundaki en iyi uygulamalara uyarak bu öneki `select` ile değiştirelim.

```
// src/redux/selectors.js

export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;
```

Seçici isimlerini değiştirdikten sonra, bileşen dosyalarındaki import kodlarını da güncellememiz gerekecek.

```
//=============== Before ========================
import {
  getTasks,
  getIsLoading,
  getError,
  getStatusFilter,
} from "redux/selectors";

//=============== After ========================
import {
  selectTasks,
  selectIsLoading,
  selectError,
  selectStatusFilter,
} from "redux/selectors";
```