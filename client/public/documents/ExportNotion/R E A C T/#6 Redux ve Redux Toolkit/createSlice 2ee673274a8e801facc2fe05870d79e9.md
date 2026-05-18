# createSlice

Redux durum yapısında, durumların farklı bölümler (slice) halinde düzenlendiğini ve her birinin kendi bağımsız redüktör tarafından yönetildiğini artık biliyoruz. Görev planlayıcı uygulamamızda iki temel bölüm (slice) bulunur — görevler (tasks) ve filtreler (filters).

```
{
  tasks: {},
  filters: {},
}
```

Her bir bölüm için belirli standart varlıklar oluşturulur: eylem (action) yaratıcıları ve bölümün başlangıç durumunu tanımlayan, durumu güncelleyen bir redüktör.

[`createSlice(options)`](https://redux-toolkit.js.org/api/createSlice) fonksiyonu, bu mantığı basitleştirerek standart hale getirir. Bir ayar nesnesi alarak, gerekli eylem yaratıcılarını ve bölümün redüktörünü oluşturur ve döndürür. Aşağıda, `tasksSlice.js` dosyası üzerinden bir örnek bulunmaktadır.

```
// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // Parçanın adı
  name: "tasks",
  // Parçanın redüktörünün başlangıç durumu
  initialState: {
		items: [
	    { id: 0, text: 'Learn HTML and CSS', completed: true },
	    { id: 1, text: 'Get good at JavaScript', completed: true },
	    { id: 2, text: 'Master React', completed: false },
	    { id: 3, text: 'Discover Redux', completed: false },
	    { id: 4, text: 'Build amazing apps', completed: false },
	  ],
	},
  // Case-redüktörler nesnesi
  reducers: {
    addTask: (state, action) => {},
    deleteTask: (state, action) => {},
    toggleCompleted: (state, action) => {},
  },
});

// Eylem fabrikalarını dışa aktarıyoruz
export const { addTask, deleteTask, toggleCompleted } = slice.actions;

// Parçanın redüktörünü dışa aktarıyoruz
export default slice.reducer;
```

- `name` özelliği, dilimin adını belirler ve `reducers` alanında tanımlanan eylemlerin ön ekini oluşturur. Böylece `tasks/addTask`, `tasks/deleteTask` ve `tasks/toggleCompleted` gibi eylemler elde edilir.
- `reducers` alanında tanımlanan case redüktörler, belirli eylemler için dilim durumunu nasıl değiştireceğini belirler. Her case redüktör, ilgili eylem için durumu günceller.
- `createSlice`, `reducers` içindeki fonksiyonlara göre eylem yaratıcılarını otomatik olarak oluşturur, böylece bunları manuel olarak tanımlamamız gerekmez.
- `reducer` ise, depoyu oluştururken dışa aktardığımız redüktörü içerir.

```
// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // Parçanın adı
  name: "tasks",
  // Parçanın redüktörünün başlangıç durumu
  initialState: {
		items: [
	    { id: 0, text: 'Learn HTML and CSS', completed: true },
	    { id: 1, text: 'Get good at JavaScript', completed: true },
	    { id: 2, text: 'Master React', completed: false },
	    { id: 3, text: 'Discover Redux', completed: false },
	    { id: 4, text: 'Build amazing apps', completed: false },
	  ],
	},
  // Case-redüktörler nesnesi
  reducers: {
    addTask: (state, action) => {
	    return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteTask: (state, action) => {
	    return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload),
      };
    },
    toggleCompleted: (state, action) => {
	    return {
        ...state,
        items: state.items.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };
    },
  },
});

// Eylem fabrikalarını dışa aktarıyoruz
export const { addTask, deleteTask, toggleCompleted } = slice.actions;

// Parçanın redüktörünü dışa aktarıyoruz
export default slice.reducer;
```

Benzer şekilde, `filtersSlice.js` dosyasında `createSlice` kullanacağız.

```
// src/redux/filtersSlice.js

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
	  status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
	    return {
        ...state,
        status: action.payload,
      };
    },
  },
});

// Eylem fabrikalarını dışa aktarıyoruz
export const { setStatusFilter } = slice.actions;

// Parçanın redüktörünü dışa aktarıyoruz
export default slice.reducer;
```

# **Görev Planlayıcı**

Bu güncellenmiş kod yapısını kullanarak bir görev planlayıcının canlı örneğini inceleyebilirsiniz:

[https://stackblitz.com/edit/vitejs-vite-mfzx4mz1?file=src%2Fredux%2FtasksSlice.js&memory-freed=1](https://stackblitz.com/edit/vitejs-vite-mfzx4mz1?file=src%2Fredux%2FtasksSlice.js&memory-freed=1)