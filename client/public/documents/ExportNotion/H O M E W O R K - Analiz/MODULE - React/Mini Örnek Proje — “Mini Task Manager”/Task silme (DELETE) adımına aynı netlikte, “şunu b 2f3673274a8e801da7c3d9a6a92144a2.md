# Task silme (DELETE) adımına aynı netlikte, “şunu buraya yaz” şeklinde geçiyoruz.

---

# **🎯 HEDEF**

- Her task’ın yanında **Delete (❌)** butonu olsun
- Tıklanınca **DELETE /tasks/:id** isteği gitsin
- Backend silsin
- Redux state’ten silinsin
- UI otomatik güncellensin

---

# **🧩 ADIM 1 —**

# **deleteTask**

# **async thunk oluştur**

📁 **src/redux/tasksOps.js**

Dosyayı aç → **addTask’in ALTINA** birebir EKLE 👇

```
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      await axios.delete(`/tasks/${taskId}`);
      return taskId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

### **📌 Ne oluyor?**

- taskId → silinecek id
- Backend çoğu zaman **body dönmez**
- O yüzden **id’yi geri döndürüyoruz**

---

# **🧩 ADIM 2 — Slice’a deleteTask lifecycle ekle**

📁 **src/redux/tasksSlice.js**

### **1️⃣ Import’a ekle**

```
import { fetchTasks, addTask, deleteTask } from "./tasksOps";
```

---

### **2️⃣**

### **extraReducers**

### **içine EKLE 👇**

```
.addCase(deleteTask.pending, state => {
  state.isLoading = true;
})
.addCase(deleteTask.fulfilled, (state, action) => {
  state.items = state.items.filter(
    task => task.id !== action.payload
  );
  state.isLoading = false;
})
.addCase(deleteTask.rejected, (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
});
```

### **📌 Kritik mantık**

- Backend siler
- Biz **Redux’tan id’ye göre siliyoruz**
- UI otomatik güncellenir

---

# **🧩 ADIM 3 — UI: Delete butonu ekle**

📁 **src/components/TaskList.jsx**

### **1️⃣ Import ekle**

```
import { deleteTask } from "../redux/tasksOps";
```

---

### **2️⃣ map içini GÜNCELLE 👇**

**ESKİ**

```
<li key={task.id}>{task.text}</li>
```

**YENİ**

```
<li key={task.id}>
  {task.text}
  <button onClick={() => dispatch(deleteTask(task.id))}>
    ❌
  </button>
</li>
```

---

# **🧩 ADIM 4 — Test**

Tarayıcıda:

1. Sayfa açılıyor mu? ✅
2. Task ekle
3. ❌’ye bas
4. Task siliniyor mu? ✅

---

# **🧠 Bu adımda ne öğrendin?**

| **Konu** | **Gerçek Hayat** |
| --- | --- |
| DELETE request | Veri silme |
| ID ile işlem | Backend mantığı |
| Redux filter | Immutable state |
| UI ↔ State | Otomatik senkron |

Bu artık **gerçek CRUD**.

---

## **🔜 Sıradaki adım**

👉 **3️⃣ Loading & Error UI**

Spinner, hata mesajı, UX iyileştirme

Hazırsan **“3”** yaz 🚀