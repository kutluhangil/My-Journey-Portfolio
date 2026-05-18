# Homework 7 - Redux’ta Asenkron İşemler

- **`goit-react-hw-07`** adında bir depo oluşturun.
- Ödevi teslim ederken, kaynak dosyalara ve [**Vercel**](https://vercel.com/) üzerindeki görev sayfasına giden iki bağlantı sağlayın.
- Proje [**Vite**](https://vitejs.dev/) kullanılarak oluşturulmalıdır.
- Görev kodu çalıştırıldığında, konsolda hata veya uyarı olmamalıdır.
- **`src/components`** klasöründe her bir bileşen için, bileşenin JSX dosyasını ve stil dosyasını içeren ayrı bir klasör vardır. Klasörün adı, bileşenin dosya adı (**`.jsx`** uzantılı) ve stil dosyasının adı (**`.module.css`** öncesi) aynı olmalı ve görevlerde belirtilen isimlere uygun olmalıdır (eğer belirtilmişse).
- Bileşenler için varsayılan dışa aktarma (`export default`) kullanılır.
- JS kodu temiz ve anlaşılır olmalıdır; Bunun için Prettier kullanın.
- **`Redux Toolkit`** kütüphanesi kullanılmalıdır.
- Stilizasyon CSS modülleri ile yapılmalıdır.

# **Kişi Rehberi**

Önceki modüldeki ödevin "Kişi Rehberi" uygulamasının kodunu yeniden yapılandırın.

- Redux Persist kodlarını kaldırın (kişilerin yerel depolama ile okunmasını ve saklanmasını sağlayan kod).
- Kişileri saklamak için backend ile etkileşim ekleyin.

# **Backend**

Geliştirme için UI hizmeti [**mockapi.io**](https://mockapi.io/) kullanarak kendi kişisel backend'inizi oluşturun. GitHub hesabınızı kullanarak kaydolun ve ücretsiz planı seçin.

`/contacts` uç noktasını almak için backend uygulamasını ve kaynak tasarımcısını nasıl oluşturacağınıza dair demo videosunu izleyin.

[https://goitlmsstorage.b-cdn.net/c91c6bdd-c4d0-45ab-9340-58d32cd324272024-03-27_18-32-29.mp4](https://goitlmsstorage.b-cdn.net/c91c6bdd-c4d0-45ab-9340-58d32cd324272024-03-27_18-32-29.mp4)

# **Durum Yönetimi**

Redux durumuna yükleme göstergesi ve HTTP istek hatalarının işlenmesini ekleyin. Bunu yapmak için kişi diliminin durum formunu `loading` ve `error` özelliklerini ekleyerek değiştirin.

```
{
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
		name: ""
	}
}
```

# **İşlemler**

`redux` klasöründe, asenkron eylem yaratıcılarını saklamak için `contactsOps.js` dosyasını oluşturun.

- İşlemleri duyurmak için [**createAsyncThunk**](https://redux-toolkit.js.org/api/createAsyncThunk) işlevini kullanın.
- HTTP istekleri için [**axios**](https://axios-http.com/uk/docs/intro) kütüphanesini kullanın.

Tanımlanması Gereken işlemler:

- `fetchContacts` - GET yöntemi ile kişi dizisini alma. Temel eylem türü `"contacts/fetchAll"` satırıdır.
- `addContact` - Yeni bir kişi ekleme (POST yöntemi) Temel eylem türü `"contacts/addContact"` satırıdır.
- `deleteContact` - ID’ye göre bir kişiyi silme (DELETE yöntemi). Temel eylem türü `"contacts/deleteContact"` satırıdır.

HTTP istek hatalarını düzgün şekilde işlemek için işlemlerin içinde `try...catch` yapısını kullanın ve `catch` bloğunda `thunkAPI.rejectWithValue` yönteminin çağrılma sonucunu döndürün.

Üç eylemin (fulfilled, rejected, pending) ve Redux durumundaki verilerin değiştirilmesini, kişi diliminin `extraReducers`özelliğinde yapın ve `reducers` özelliğini — kaldırın.

# **Seçicilerin Hafızaya Alınması**

`loading` ve `error` özelliklerini kişi dilimine ekledikten sonra, kişilerin filtrelenmesinde optimizasyon sorunu ortaya çıkacaktır; çünkü filtreleme ifadesi sadece kişilerin veya filtrenin değiştiğinde değil, aynı zamanda `loading` ve `error`değiştiğinde de çalışacaktır.

Bu sorunu çözmek için:

- `contactsSlice.js` dosyasında `selectFilteredContacts` adında memolı bir seçici oluşturun ve dışa aktarın, bu [**createSelector**](https://redux-toolkit.js.org/api/createSelector) işlevi ile yapılır.
- Seçici, geçerli kişi dizisine ve filtre değerine bağlı olmalı ve filtrelenmiş kişi dizisini döndürmelidir.
- `selectFilteredContacts` seçicisi `ContactList.jsx` bileşenine aktarılır ve `useSelector` içinde kullanılır.

# **Kişi Koleksiyonu**

Artık kişi koleksiyonunuz backend'de saklandığından, yeni bir kişi oluştururken ona benzersiz bir tanımlayıcı eklemenize gerek yoktur; bunu backend kendisi yapacak ve yanıt olarak yeni kişi nesnesini döndürecektir.

Uygulama yüklendiğinde, kişi dizisini almak için backend'e yapılacak isteği `App` bileşeninde yapın.

# **Checklist**

**Fastcheck**

Depo var mı kontrol edilir

Depo genel mi kontrol edilir

Depoda `main.jsx` dosyası var mı kontrol edilir

Depoda `src/components` klasörü var mı kontrol edilir

Depoda `src/redux` klasörü var mı kontrol edilir

`src/redux`

`store.js` dosyası mevcut

`contactsOps.js` dosyası mevcut

**Error**

`src/redux`

`contactsSlice.js` dosyası mevcut

`filtersSlice.js` dosyası mevcut

`store.js`

- İki argümanlı persistReducer() çağrısı yok. (varsa kritik hata)
- Dosyada`configureStore` yöntemi uygulama mağazasını oluşturmaki için kullanılır.

```
configureStore({
	reducer: {
	  contacts: contactsSliceReducer,
	  filters: filtersSliceReducer
	}
})
```

- Bu dosyadan mağazanın dışa aktarımı mevcut.

`filtersSlice.js`

- Dilimleri oluşturmak için `createSlice` işlevi kullanılır.
- createSlice() işlevine zorunlu öğelerin bulunduğu bir nesne iletilir:
- initialState: { name: "" }
- reducers alanı bulunmalıdır
- reducers alanında `changeFilter` alanı bulunmalıdır
- Eylemlerin dışa aktarımı var (export const { changeFilter } = filtersSlice.actions;)
- Azaltıcının dışa aktarımı mevcut (örneğin, export const filtersReducer = filtersSlice.reducer;)
- `selectNameFilter` işlevinin dışa aktarımı mevcut
- **`useSelector`** içinde kullanmak için seçici işlevleri duyurun:
- `selectNameFilter` - **`name`** özelliğinden filtre değerini döndürür.

`export const selectNameFilter = state => state.filters.name;`

`contactsSlice.js`

- Dilimleri oluşturmak için `createSlice` işlevi kullanılır
- İsimlendirilmiş dışa aktarımlar olarak fetchContacts, deleteContact ve addContact işlemleri içe aktarılır
- `createSlice()` işlevine şu zorunlu öğelerin bulunduğu bir nesne iletilir:

```
initialState: {
			items: []
			loading: false
			error: null
 }
```

- `reducers` alanı olmamalıdırfetchContacts, deleteContact ve addContact işlemlerinin işlendiği `extraReducers` alanı olmalıdır.
- Her işlemde 3 eylem olmalıdır: fulfilled, rejected, pending
- Azaltıcının dışa aktarımı mevcut (örneğin, export const contactsReducer = contactsSlice.reducer;)
- `createSelector` ile Redux Toolkit'ten `selectFilteredContacts` adında memolu bir seçici mevcut.
- İlk argüman olarak `[selectContacts, selectNameFilter]` değerleriyle bir dizi alır
- `selectFilteredContacts` işlevinin dışa aktarımı mevcut

```
import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from './filtersSlice';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);
```

`contactsOps.js`

- `createAsyncThunk` dışa aktarımı mevcut
- HTTP istekleri için `axios` kullanılır
- `createAsyncThunk` ile `fetchContacts` işleminin duyurulması vardır
- `fetchContacts` işlemi için temel eylem türü `"contacts/fetchAll"` olarak geçirilir
- `fetchContacts` işleminin asenkron işlevinde GET isteği vardır
- `fetchContacts` işleminin asenkron işlevinde `try…catch` kullanılır
- `catch` bloğunda `thunkAPI.rejectWithValue` yönteminin çağrılma sonucu döndürülür
- `fetchContacts` işlemi dışa aktarılır
- `createAsyncThunk` ile `addContact` işleminin duyurulması vardır
- `addContact` işlemi için temel eylem türü `"contacts/addContact"` olarak geçirilir
- `addContact` işleminin asenkron işlevinde POST isteği vardır
- `addContact` işleminin asenkron işlevinde `try…catch` kullanılır
- `catch` bloğunda `thunkAPI.rejectWithValue` yönteminin çağrılma sonucu döndürülür
- `addContact` işlemi dışa aktarılır
- `createAsyncThunk` ile `deleteContact` işleminin duyurulması vardır
- `deleteContact` işlemi için temel eylem türü `"contacts/deleteContact"` olarak geçirilir
- `deleteContact` işleminin asenkron işlevinde DELETE isteği vardır
- `deleteContact` işleminin asenkron işlevinde `try…catch` kullanılır
- `catch` bloğunda `thunkAPI.rejectWithValue` yönteminin çağrılma sonucu döndürülür
- `deleteContact` işlemi dışa aktarılır
- `store.js`
- `configureStore` yöntemi uygulama mağazasını oluşturmak için kullanılır
- İki argümanlı persistReducer() çağrısı yok. (varsa kritik hata)
- Dosyada `configureStore` yöntemi uygulama mağazasını oluşturmak için kullanılır

```
// src/redux/operations.js

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

`main.jsx`

- **`Provider`** bileşeni mevcut ve **`store`** prop'una oluşturulan store aktarılır.
- **`main.jsx`** dosyasında **PersistGate** bulunmamalıdır (aksi takdirde kritik hata).
- **`Provider`** bileşeni içinde **`<App>`** bileşeni bulunur.

`ContactList.jsx`

- Herhangi bir prop almaz. Prop'ların varlığı kritik bir hatadır.
- **`contactSlice.js`** dosyasından **`selectFilteredContacts`** seçicisinin importu vardır.
- **`useSelector()`** metodu çağrıldığında argüman olarak **`selectFilteredContacts`** iletilir.
- **`filter`** metodunun olmaması gerekir; aksi takdirde kritik hata olur.

`App.jsx`

- Bileşen içinde **`useDispatch`** kancası (hook) kullanılır.
- Boş bağımlılık dizisi ile **`useEffect`** kancası (hook) kullanılır ve içinde **`dispatch`** metodu ile **`fetchContacts`** işlemi çağrılır.

[Çözüm 1](Homework%207%20-%20Redux%E2%80%99ta%20Asenkron%20%C4%B0%C5%9Femler/%C3%87%C3%B6z%C3%BCm%201%202f2673274a8e80a2bd00e3c5b5d6b5c6.md)

[Çözüm 2](Homework%207%20-%20Redux%E2%80%99ta%20Asenkron%20%C4%B0%C5%9Femler/%C3%87%C3%B6z%C3%BCm%202%202f2673274a8e8094bd14f9a17882d120.md)