# Operasyonlar

Sık karşılaşılan bir görev olan verilerin yüklenmesi, yükleme göstergesinin işlenmesi ve istek hatalarının ele alınmasını inceleyelim. Bu tür bir işlem için görev listelerini saklayacak bir slice oluşturalım. Bu slice'ın durumu, görevlerin dizisini, yükleme durumu bayrağını ve olası hata verilerini içerecektir.

```
// src/redux/tasksSlice.js

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
});
```

Her bir olası istek durumunu işlemek için bir reducer ekleyelim.

```
// src/redux/tasksSlice.js

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // HTTP isteği başladığında yürütülür
    fetchingInProgress(state) {},
    // HTTP isteği başarılı olduysa çalıştırılır
    fetchingSuccess() {},
    // HTTP isteği bir hata ile başarısız olursa yürütülür
    fetchingError() {},
  },
});
```

Reducer'larda, durumun ilgili kısımlarını güncelliyoruz. Yükleme bayrağını `isLoading`olarak, isteğin başlangıcında `true`, diğer durumlarda ise `false` yapıyoruz çünkü istek tamamlanmıştır. Eğer istek hata ile tamamlanırsa, `error` özelliğini `action.payload`'dan gelen hata bilgisiyle güncelliyoruz. Başarılı bir istek sonucunda ise, `error` değerini sıfırlayıp, `items` dizisini `action.payload`'dan gelen görevlerle güncelliyoruz.

```
// src/redux/tasksSlice.js

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
```

Asenkron kodu çalıştırmak için, bir "operasyon" adı verilen asenkron bir aksiyon oluşturucu tanımlamamız gerekiyor. Bu aksiyon oluşturucusunda, diğer senkron aksiyon oluşturucuları çağırarak işlem yapacağız. Operasyon, doğrudan bir aksiyon döndürmek yerine, `dispatch` fonksiyonunu argüman olarak alan başka bir fonksiyon döndürecektir. Bu fonksiyonun içinde asenkron işlemler, örneğin HTTP istekleri gerçekleştirilebilir. İstekler için [axios](https://axios-http.com/) kütüphanesini kullanıyoruz.

```
// src/redux/operations.js

import axios from "axios";

axios.defaults.baseURL = "<https://62584f320c918296a49543e7.mockapi.io>";

const fetchTasks = () => async dispatch => {
  try {
    const response = await axios.get("/tasks");
  } catch (e) {}
};
```

Asenkron aksiyon oluşturucuları ilan etme ve asenkron işlemler gerçekleştirme yeteneğini, varsayılan olarak Redux Toolkit'e dahil edilen `redux-thunk` [uzantısı](https://github.com/reduxjs/redux-thunk) sağlar.

Şimdi, operasyon içinde yükleme göstergesini ayarlamak, başarılı bir istekle veri almak ve hata işlemek için senkron aksiyonları göndereceğiz.

```
// src/redux/operations.js

import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./tasksSlice";

axios.defaults.baseURL = "<https://62584f320c918296a49543e7.mockapi.io>";

export const fetchTasks = () => async dispatch => {
  try {
    // Yükleme göstergesi
    dispatch(fetchingInProgress());
    // HTTP isteği
    const response = await axios.get("/tasks");
    // Veri işleme
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Hata işleme
    dispatch(fetchingError(e.message));
  }
};
```

Son olarak, bir bileşende asenkron aksiyon oluşturucusunun nasıl çağrıldığını, yükleme göstergesini, verileri ve hata işleme kodunu en azından şu şekilde göstereceğiz:

```
// src/App.jsx

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";
import { getTasks } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  // Eyaletin bazı bölgelerini ele almak
  const { items, isLoading, error } = useSelector(getTasks);

  // İşlemin çağrılması
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Durumdaki değerlere bağlı olarak biçimlendirme oluşturma
  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};
```

Canlı örneğin kodunu inceleyebilirsiniz. `App` bileşeni ilk yüklendiğinde önce bir yükleme göstergesi görüntülenir, ardından görevler listesi gösterilir. Örneği sanal ortamda güncellemek için pencerenin üst kısmındaki yenileme düğmesine tıklayın.

[https://safari-fix.staticblitz.com/?https://stackblitz.com/edit/vitejs-vite-k5o74qyj?file=src%2Fredux%2Foperations.js](https://safari-fix.staticblitz.com/?https://stackblitz.com/edit/vitejs-vite-k5o74qyj?file=src%2Fredux%2Foperations.js)

Bir hata durumu yaratmak için, backend adresine geçersiz bir harf veya rakam ekleyerek örneği güncelleyin. Bu durumda, önce bir yükleme göstergesi belirir ve bir süre sonra hata mesajı görüntülenir.

---

## **1️⃣ Problem Ne? (Bunu neden yapıyoruz?)**

Şu ana kadar şunu yaptığını varsayalım:

- Veriyi:
    - useState
    - localStorage
    - veya sabit bir array’den
- **anında** alıyorduk.

Ama **gerçek uygulamalarda**:

- Veriler **backend’de** (server + database)
- Biz bu verilere **HTTP istekleri** ile ulaşırız:
    - GET /tasks
    - POST /tasks
    - vs.

❗ Bu istekler **anlık değildir** → **asenkron** çalışır.

---

## **2️⃣ Asenkron Ne Demek?**

Bir HTTP isteği atıldığında 3 olası durum vardır:

### **⏳ 1. Pending (Beklemede)**

- İstek gönderildi
- Henüz cevap gelmedi

### **✅ 2. Fulfilled (Başarılı)**

- Server cevap verdi
- Veri geldi

### **❌ 3. Rejected (Hatalı)**

- İnternet yok
- Server çöktü
- 404 / 500 hatası

👉 **İyi bir UI**, bu 3 durumu da yönetmelidir.

---

## **3️⃣ Redux’ta Bu Durumları Nerede Tutarız?**

Redux’ta **state** içinde tutarız.

Bu yüzden tasksSlice içinde şunlar var:

```
initialState: {
  items: [],        // gelen görevler
  isLoading: false, // istek devam ediyor mu?
  error: null,      // hata var mı?
}
```

Bu yapı **%90 Redux projelerinde aynıdır**.

---

## **4️⃣ Neden 3 Ayrı Reducer Var?**

Çünkü her asenkron durum için **ayrı state güncellemesi** gerekir.

### **🔄 fetchingInProgress**

```
fetchingInProgress(state) {
  state.isLoading = true;
}
```

👉 Ne zaman çalışır?

- HTTP isteği **başladığı anda**

UI sonucu:

- Spinner / “Loading…” göster

---

### **✅ fetchingSuccess**

```
fetchingSuccess(state, action) {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
}
```

👉 Ne zaman çalışır?

- Veri **başarıyla geldiyse**

UI sonucu:

- Loading gizlenir
- Veriler ekranda gösterilir

---

### **❌ fetchingError**

```
fetchingError(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}
```

👉 Ne zaman çalışır?

- İstek hata verirse

UI sonucu:

- Loading gizlenir
- Hata mesajı gösterilir

---

## **5️⃣ “Operation” (Asenkron Action) Nedir?**

Redux’ta normal action’lar **senkron**dur:

```
dispatch(fetchingInProgress());
```

Ama HTTP isteği **asenkron** olduğu için:

- Redux Toolkit içinde **redux-thunk** kullanılır
- Bu sayede action → **fonksiyon döndürebilir**

---

## **6️⃣ fetchTasks Operasyonu Nasıl Çalışıyor?**

```
export const fetchTasks = () => async dispatch => {
```

Bu şu demek:

> “Ben bir action değilim,
> 
> 
> **dispatch alabilen bir fonksiyonum**
> 

---

### **Adım adım:**

### **1️⃣ Loading başlat**

```
dispatch(fetchingInProgress());
```

Redux state:

```
isLoading = true
```

---

### **2️⃣ HTTP isteği at**

```
const response = await axios.get("/tasks");
```

Burada:

- JS **bekler**
- UI donmaz
- Redux state korunur

---

### **3️⃣ Başarılıysa**

```
dispatch(fetchingSuccess(response.data));
```

Redux state:

```
items = gelen görevler
isLoading = false
error = null
```

---

### **4️⃣ Hata varsa**

```
dispatch(fetchingError(e.message));
```

Redux state:

```
error = "Network Error" (örnek)
isLoading = false
```

---

## **7️⃣ Bileşen (App.jsx) Tarafında Ne Oluyor?**

### **🔗 State’i Redux’tan alıyoruz**

```
const { items, isLoading, error } = useSelector(getTasks);
```

---

### **🚀 Sayfa açılınca isteği atıyoruz**

```
useEffect(() => {
  dispatch(fetchTasks());
}, [dispatch]);
```

👉 Sayfa yüklendi

👉 Backend’e istek gitti

---

## **8️⃣ UI Mantığı (En Önemli Kısım)**

```
{isLoading && <p>Loading tasks...</p>}
{error && <p>{error}</p>}
{items.length > 0 && JSON.stringify(items, null, 2)}
```

Bu **gerçek dünya UI mantığıdır**:

| **Durum** | **Ne Gösterilir** |
| --- | --- |
| Loading | “Loading…” |
| Error | Hata mesajı |
| Data | Veriler |

---

## **9️⃣ Büyük Resim (Özet)**

Bu yapı şunu sağlar:

✅ Backend’e bağlı gerçek uygulama

✅ Kullanıcıya loading feedback

✅ Hata kontrolü

✅ Temiz ve ölçeklenebilir Redux mimarisi

---

## **🔥 Kafanda Şöyle Kodla**

> “HTTP isteği = 3 durum
> 

> Redux state = bu 3 durumu temsil eder
> 

> Operation = bu süreci yöneten beyin”
> 

---