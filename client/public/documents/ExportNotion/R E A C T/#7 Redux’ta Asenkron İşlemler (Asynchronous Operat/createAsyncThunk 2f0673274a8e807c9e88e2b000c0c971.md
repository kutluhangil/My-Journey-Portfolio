# createAsyncThunk

Redux Toolkit, asenkron aksiyon oluşturucularını tanımlamayı `createAsyncThunk()` fonksiyonu ile daha kolay hale getirir. Bu fonksiyonun ilk argümanı aksiyon türünü, ikinci argümanı ise HTTP isteğini gerçekleştirecek ve sonuç olarak `payload` değeri olacak verilerle bir promise döndürecek bir fonksiyondur. Bu fonksiyon, çalıştırıldığında istek kodunu içeren bir fonksiyonu yerine getirir.

```
// src/redux/operations.js

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "<https://62584f320c918296a49543e7.mockapi.io>";

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async () => {
  const response = await axios.get("/tasks");
  return response.data;
});
```

`createAsyncThunk()` fonksiyonu, HTTP isteğinin yaşam döngüsünü temsil eden aksiyonları otomatik olarak oluşturur ve isteğin durumuna göre doğru sırayla gönderir. Oluşturulan aksiyon türleri, ilk argüman olarak belirtilen dizeyi (`"tasks/fetchAll"`) temel alır ve sonlarına isteğin durumunu belirten `pending`, `fulfilled` veya `rejected` ekleri eklenir.

- `"tasks/fetchAll/pending"` - isteğin başlangıcı
- `"tasks/fetchAll/fulfilled"` - isteğin başarılı bir şekilde tamamlanması
- `"tasks/fetchAll/rejected"` - isteğin bir hatayla tamamlanması

Örneğimizde, `fetchTasks` operasyonunu tanımladıktan sonra, geliştirici araçlarını kullanarak sayfayı yeniden yüklediğinizde, `App` bileşeni monte edildiğinde doğru türde ve `payload` içeren aksiyonların gönderildiğini gözlemleyebilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0ced0a85-bca7-4769-8002-04a0bfc3f46aimage%20-%202024-11-11T185406.450.png)

`createAsyncThunk` fonksiyonu, yükleme durumunu nasıl izleyeceğimizi, isteğin hangi verilerle sonuçlanacağını ve bunları nasıl doğru şekilde işleyeceğimizi bilmediği için bir reducer oluşturmaz. Bu nedenle, bir sonraki adım olarak `tasksSlice` dilimindeki kodu, yeni aksiyonları işleyebilecek şekilde değiştireceğiz.

```
// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";
// Bir işlemi içe aktarma
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Harici eylem işleme ekleyin
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {})
      .addCase(fetchTasks.fulfilled, (state, action) => {})
      .addCase(fetchTasks.rejected, (state, action) => {});
  },
});

export const tasksReducer = tasksSlice.reducer;
```

`extraReducers` özelliği, "dış" aksiyon türleri için reducer'lar tanımlamak için kullanılır, yani reducers özelliğinden türetilmeyen aksiyon türleri için. Bu reducer'lar "dış" aksiyonları işlediği için slice.actions içinde aksiyon oluşturucuları oluşturulmaz; buna gerek yoktur.

Asenkron isteklerin yaşam döngüsüne ait aksiyon oluşturucular, `createAsyncThunk`fonksiyonu tarafından otomatik olarak `pending`, `fulfilled` ve `rejected` adında üç farklı durumu temsil eden aksiyon türleri olarak tanımlanır. Bu aksiyonlar, `createAction` ile oluşturulur ve her biri, aksiyon türünü belirten `type` özelliğine ve aksiyon türünü döndüren `toString()` metoduna sahiptir.

`reducers` özelliğine artık ihtiyacımız yok, bu nedenle istek aksiyonlarının işlenmesiyle ilgili tüm mantığı yeni reducer'lara taşıyoruz.

```
// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
```

Geriye sadece hatayla sonuçlanan bir isteğin işlenmesi kaldı. Bunun için `fetchTasks` operasyonunu oluşturan kodu, bir istek hatası durumunda reddedilecek bir promise döndürecek şekilde güncellememiz gerekiyor. Bu durumda, hata aksiyonunda `payload` özelliği bulunacaktır.

```
// src/redux/operations.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "<https://62584f320c918296a49543e7.mockapi.io>";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  // İlk parametrenin adı olarak alt çizgi karakterini kullanırız,
  // çünkü bu işlemde ona ihtiyacımız yok
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      // İstek başarılı olursa, verileri içeren bir yanıt (response) döndürürüz
      return response.data;
    } catch (e) {
      // İstek başarısız olursa, bir söz döndürürüz
      // hata metni ile reddedilecek bir promise döndürürüz
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

İstek kodunun gerçekleştirildiği geri çağırma fonksiyonuna `payloadCreator` denir ve `payload` özelliğinin değerini belirlemekle sorumludur. Bu fonksiyon, iki argümanla çağrılır: `arg` ve `thunkAPI`.

`payloadCreator(arg, thunkAPI)`

Bunlar:

- `arg` - Operasyon çağrıldığında iletilen değerdir. Örneğin, silme işlemlerinde nesne kimliklerini, oluşturma sırasında not metinlerini vb. iletmek için kullanılır.
- `thunkAPI` - Asenkron aksiyon oluşturucularına `redux-thunk` içinde iletilen bir nesnedir. Store'a erişim, aksiyon gönderme gibi özellikler ve bazı ek işlevler içerir.

Bahsedilen tüm materyalin kullanıldığı canlı örneğin kodunu inceleyin.

[https://stackblitz.com/edit/vitejs-vite-qwumax?ctl=1&embed=1&file=src%2Fredux%2Foperations.js&view=editor](https://stackblitz.com/edit/vitejs-vite-qwumax?ctl=1&embed=1&file=src%2Fredux%2Foperations.js&view=editor)