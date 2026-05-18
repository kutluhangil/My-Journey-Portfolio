# Kısım Redüktörleri

Her bir durum dilimi için ayrı bir redüktör oluşturulur; böylece tek bir büyük kök redüktör yerine, her redüktör yalnızca kendi durum parçasını ve onu etkileyen eylemleri işler. Bu, durum güncelleme kodunu daha sade hale getirir.

Görevlerin eylem işleme ve filtre değişimlerini iki bağımsız redüktör olan `tasksReducer` ve `filtersReducer` olarak ayıracağız.

```
// src/redux/store.js

const initialState = {
  tasks: {
    items: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: false },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
  },
  filters: {
    status: 'all',
  },
};

// Sadece tasks özelliğini güncellemekten sorumlu
// state parametresinin değeri görevler nesnesi olacaktır
const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Sadece filters özelliğini güncellemekten sorumlu
// state parametresinin değeri filtreler nesnesi olacaktır
const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
```

Artık iki ayrı reducer'ımız var, ilgili eylemlerin işlenmesini ve ilgili durum parçasının güncellenmesi için mantığı ekleyeceğiz.

```
// src/redux/store.js

const tasksReducer = (state = initialState.tasks, action) => {
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

const filtersReducer = (state = initialState.filters, action) => {
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

`rootReducer`koduna artık ihtiyaç yok, bu yüzden onu kaldırıyoruz. Mağaza oluşturma fonksiyonunda ayrı redüktörler kullanıyoruz ve `reducer` özelliğine durum nesnesini geçirerek her redüktörün hangi özelliklerden sorumlu olduğunu belirtiyoruz.

```
// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";

// Dilimlerin redüktör kodu

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
```