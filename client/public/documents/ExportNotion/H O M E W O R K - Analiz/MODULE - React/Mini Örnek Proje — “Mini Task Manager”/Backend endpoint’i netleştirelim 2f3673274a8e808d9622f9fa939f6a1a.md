# Backend endpoint’i netleştirelim

Şu an tasksOps.js içinde **GET** çalışıyor.

POST da **aynı endpoint’e** gidecek.

Örnek:

```
axios.defaults.baseURL = "https://example-api.com";
```

> Eğer JSONPlaceholder kullanıyorsan:
> 

```
https://jsonplaceholder.typicode.com/todos
```

Şimdilik mantık aynı, endpoint fark etmez.

---

# **🧩 ADIM 2 —**

# **addTask**

# **async thunk oluştur**

📁 **src/redux/tasksOps.js**

Dosyayı aç → **EN ALTINA** şunu EKLE 👇

```
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", {
        text,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

### **📌 Burada olanlar**

- "tasks/addTask" → action type
- text → input’tan gelen değer
- POST /tasks → backend’e gönderiliyor
- Backend yeni task’ı **geri döndürüyor**

---

# **🧩 ADIM 3 — Slice içine addTask lifecycle ekle**

📁 **src/redux/tasksSlice.js**

### **1️⃣ En üste import ekle**

```
import { fetchTasks, addTask } from "./tasksOps";
```

---

### **2️⃣**

### **extraReducers**

### **içine EKLE 👇**

```
.addCase(addTask.pending, state => {
  state.isLoading = true;
})
.addCase(addTask.fulfilled, (state, action) => {
  state.items.push(action.payload);
  state.isLoading = false;
})
.addCase(addTask.rejected, (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
});
```

### **📌 Önemli**

- push → çünkü backend **tek task** döndürüyor
- items = action.payload YAPMIYORUZ ❌

---

# **🧩 ADIM 4 — UI: Input + Button ekle**

📁 **src/components/TaskList.jsx**

### **1️⃣ En üste import ekle**

```
import { addTask } from "../redux/tasksOps";
import { useState } from "react";
```

---

### **2️⃣ Component içine state ekle**

```
const [text, setText] = useState("");
```

---

### **3️⃣ Return’un ÜSTÜNE handler ekle**

```
const handleAdd = () => {
  if (!text.trim()) return;
  dispatch(addTask(text));
  setText("");
};
```

---

### **4️⃣ JSX’in EN ÜSTÜNE input + button ekle**

```
<div>
  <input
    value={text}
    onChange={e => setText(e.target.value)}
    placeholder="New task..."
  />
  <button onClick={handleAdd}>Add</button>
</div>
```

---

# **🧩 ADIM 5 — Test et**

Terminal:

```
npm run dev
```

Tarayıcıda:

1. Input’a yaz
2. **Add**’e bas
3. Task **listeye düşüyor mu?** ✅

---

# **🧠 Şu anda öğrendiğin ÇOK kritik şey**

| **Ne** | **Neden önemli** |
| --- | --- |
| createAsyncThunk | Gerçek backend işleri |
| POST isteği | Veri oluşturma |
| Redux state güncelleme | UI otomasyonu |
| Tek source of truth | Redux |

Bu **junior → mid geçiş** konusudur.

---