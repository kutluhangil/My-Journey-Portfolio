# Task Ekleme (POST) + Form adımına geçiyoruz.

Yine **net, adım adım, kopyala–yapıştır** ilerleyeceğiz.

---

# **🎯 HEDEF (Bu adımda ne yapıyoruz?)**

- Kullanıcı **input’a task yazacak**
- **Add** butonuna basacak
- Backend’e **POST** isteği gidecek
- Redux state **otomatik güncellenecek**
- Liste **yeniden yüklenmeden** güncellenecek

> Yani gerçek
> 
> 
> **CRUD**
> 
> **C = Create**
> 

---

# **🧩 ADIM 1 — Backend beklentisini netleştirelim**

Backend (örnek):

```
POST /tasks
{
  "text": "Buy milk"
}
```

Backend sana şunu döner:

```
{
  "id": "abc123",
  "text": "Buy milk"
}
```

📌 **id’yi frontend üretmiyor!**

📌 Backend üretir → response.data ile alırız.

---

# **🧩 ADIM 2 — tasksOps.js → addTask thunk**

📁 **src/redux/tasksOps.js**

Şunun **ALTINA** ekle 👇

```
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

📌 Burada olanlar:

- text → input’tan gelen veri
- POST isteği atılıyor
- Backend’in döndürdüğü task → Redux’a gidiyor

---

# **🧩 ADIM 3 — tasksSlice.js → extraReducers ekle**

📁 **src/redux/tasksSlice.js**

Import satırını GÜNCELLE 👇

```
import { fetchTasks, addTask, deleteTask } from "./tasksOps";
```

Sonra builder içine **addTask** case’lerini ekle 👇

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

📌 Önemli:

- push kullanıyoruz → listeye yeni task ekleniyor
- Yeniden fetch YOK → performanslı

---

# **🧩 ADIM 4 — Task ekleme formu oluştur**

📁 **src/components/TaskForm.jsx**

(Yoksa yeni dosya oluştur)

```
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksOps";

export default function TaskForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch(addTask(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
```

📌 Bu form:

- Controlled input
- Empty submit engelleniyor
- Redux thunk çağrılıyor

---

# **🧩 ADIM 5 — App.jsx içine ekle**

📁 **src/App.jsx**

```
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div>
      <h1>Mini Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
```

---

# **🧪 TEST ZAMANI (çok önemli)**

1️⃣ Sayfayı aç

2️⃣ Input’a yaz: Learn Redux

3️⃣ **Add**’e bas

✔ Listeye EKLENDİ mi?

✔ Sayfa refresh olmadan göründü mü?

✔ Backend’de gerçekten kaydoldu mu?

---

# **🧠 Bu adımda öğrendiklerin**

| **Konu** | **Gerçek Hayat** |
| --- | --- |
| POST request | Veri oluşturma |
| createAsyncThunk | Backend bağlantısı |
| extraReducers | Async state yönetimi |
| Controlled input | Form kontrolü |
| Optimistic UI | Hızlı kullanıcı deneyimi |

Artık uygulaman **tam CRUD**’a çok yakın 🚀

---