# Immer Kütüphanesi

`createSlice()` fonksiyonu, durum güncellemelerini case-reducer'larda sanki durumu doğrudan değiştiriyormuşuz gibi, yani mevcut durumu mutasyona uğratıyormuşuz gibi yazmamıza olanak tanıyan [Immer](https://immerjs.github.io/immer/) kütüphanesini kullanır.

Örneğin, `addTask` case-reducer'ında yeni bir görevi duruma eklemek için aşağıdaki kodu kullanabiliriz:

```
// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: {
	  items: []
  },
  reducers: {
    addTask(state, action) {
      // Önceden böyleydi
			// return {
		  //   ...state,
		  //   items: [...state.items, action.payload],
		  // };

	    // ✅ Immer bunu güncelleme işlemiyle değiştirecek
      state.items.push(action.payload);
    },
  },
});

const { addTask, deleteTask, toggleCompleted } = slice.actions;
export default slice.reducer;
```

Reducer'lar, `state` parametresine mevcut durumun tam bir kopyasını alır ve **Immer**, bu kopyayı kullanarak tüm mutasyonları güncelleme işlemlerine dönüştürür. Bu sayede, durum güncelleme mantığını daha sade bir şekilde yazabilir ve karmaşık durumlarla çalışırken yaygın hatalardan kaçınabiliriz.

Aşağıda, Immer kullanarak oluşturulmuş `tasks` diliminin tam örneği bulunmaktadır:

```
// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: {
	  items: []
  },
  reducers: {
    addTask(state, action) {
	    // ✅ Immer bunu güncelleme işlemiyle değiştirecek
      state.items.push(action.payload);
    },
    deleteTask(state, action) {
      // ✅ Immer bunu güncelleme işlemiyle değiştirecek
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleCompleted(state, action) {
	    // ✅ Immer bunu güncelleme işlemiyle değiştirecek
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

const { addTask, deleteTask, toggleCompleted } = slice.actions;
export default slice.reducer;
```

Benzer bir yaklaşımı `filters` diliminde de kullanabiliriz:

# **Görev Planlayıcı**

Güncellenmiş kod ile görev planlayıcı uygulamasının canlı bir örneğini inceleyebilirsiniz:

[https://stackblitz.com/edit/vitejs-vite-pdwnwghv?file=src%2Fredux%2FtasksSlice.js](https://stackblitz.com/edit/vitejs-vite-pdwnwghv?file=src%2Fredux%2FtasksSlice.js)