# Dilim Dosyaları

Kodda dilim, Redux durumunun bir kısmını güncelleyen bir azaltıcıdır ve bu azaltıcının işlediği eylemlerdir. Bu nedenle, her dilimin mantığı, Redux kodunu daha düzenli ve net bir şekilde yapılandırmak için ayrı bir dosyaya taşınır.

Artık uygulamamızın klasör ve dosya yapısı şöyle görünecek. Eylemleri ilgili dilim dosyasına taşıyacağımız için `actions.js` dosyasını kaldıracağız.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/8c560ceb-c82f-4ada-99fe-0142f9966dd6carbon%20%281%29.png)

Aşağıda `tasksSlice.js` dosyasının nasıl görüneceği gösterilmiştir:

```
// src/redux/tasksSlice.js

import { createAction } from '@reduxjs/toolkit';

// Görevlerle ilgili eylemleri dilim dosyasına taşıdık
export const addTask = createAction('tasks/addTask');

export const deleteTask = createAction('tasks/deleteTask');

export const toggleCompleted = createAction('tasks/toggleCompleted');

// Dilimin başlangıç durumu
const initialState = {
  items: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
};

// Dilim reducer'ını dışa aktarıyoruz
export default function tasksReducer(state = initialState, action){
  switch (action.type) {
    case 'tasks/addTask': {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case 'tasks/deleteTask':
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload),
      };

    case 'tasks/toggleCompleted':
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

    default:
      return state;
  }
};
```

Aşağıda `filtersSlice.js` dosyasının nasıl görüneceği gösterilmiştir:

```
// src/redux/filtersSlice.js

import { createAction } from '@reduxjs/toolkit';

// Filtrelerle ilgili eylemleri dilim dosyasına taşıdık
export const setStatusFilter = createAction('filters/setStatusFilter');

// Dilimin başlangıç durumu
const initialState = {
  status: 'all',
};

// Dilim reducer'ını dışa aktarıyoruz
export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
```

Her bir dilim için dosyalar oluşturduktan sonra, dilimlerin reducer'larını `store.js`dosyasına aktarıyoruz.

```
// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
```

```
Dikkat: Bileşenlerdeki eylem importlarının da güncellenmesi gerekmektedir; çünkü bu eylemler artık src/redux/actions.js dosyasından değil, ilgili dilim dosyalarından alınacaktır.

```

Güncellenmiş dilim kodlarıyla bir görev planlayıcısının canlı örneğini inceleyin.

[https://stackblitz.com/edit/vitejs-vite-nxurph4g?file=src%2Fredux%2Fstore.js&memory-freed=1](https://stackblitz.com/edit/vitejs-vite-nxurph4g?file=src%2Fredux%2Fstore.js&memory-freed=1)