# Görev Durumunu Değiştirme

Tüm görev nesnesini bekleyen bir durum değiştirme işlemi tanımlayalım.

```
// src/redux/operations.js

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

`Task` bileşeninde, checkbox tıklanıldığında durum değiştirme işlemini başlatan kodu ekleyip tüm görev nesnesini iletelim.

```
// src/components/Task/Task.jsx

import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted } from "redux/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <p>{task.text}</p>
      <button onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
```

`tasksSlice` dilimine görev durumu değiştirme işlemlerini işleyen kodu ekleyelim.

```
// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const tasksSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(toggleCompleted.pending, state => {
        state.isLoading = true;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleCompleted.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // Diğer reducer’ların kodları
  },
});

export const tasksReducer = tasksSlice.reducer;
```