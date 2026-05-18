# Görev Ekleme

Kullanıcının girdiği metni bekleyen bir görev ekleme işlemi tanımlayalım. Artık benzersiz bir tanımlayıcı oluşturma ve `completed` özelliğini ekleme backend'e ait olacak.

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

`TaskForm` bileşeninde, form gönderildiğinde görev ekleme işlemini başlatan kodu ekleyelim.

```
// src/components/TaskForm/TaskForm.jsx

import { useDispatch } from "react-redux";
import { addTask } from "redux/operations";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };

  // Bileşen kodunun geri kalanı
};
```

`tasksSlice` dilimine görev ekleme işlemlerini işleyen kodu ekleyelim.

```
// src/redux/tasksSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask } from "./operations";

const tasksSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(addTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // Diğer reducer’ların kodları
  },
});
```