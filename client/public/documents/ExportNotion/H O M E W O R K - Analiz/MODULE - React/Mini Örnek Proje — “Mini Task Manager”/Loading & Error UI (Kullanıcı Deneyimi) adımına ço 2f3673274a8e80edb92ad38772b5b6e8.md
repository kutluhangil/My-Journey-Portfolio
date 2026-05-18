# Loading & Error UI (Kullanıcı Deneyimi) adımına çok net, tane tane geçiyoruz.

> Şu an backend çalışıyor ama kullanıcı
> 
> 
> **arka planda ne oluyor bilmiyor**
> 

> Bu adımda uygulamayı
> 
> 
> **“gerçek uygulama” gibi**
> 

---

# **🎯 HEDEF (Bu adımda ne yapacağız?)**

- API çağrısı sırasında **Loading…** göster
- Hata olursa **Error mesajı** göster
- Kod zaten hazır → **sadece doğru yerlerde kullanacağız**
- Redux state’i doğru okuyacağız

---

## **🔎 Ön Bilgi (1 dakika)**

Redux state’in şu şekilde 👇

```
tasks: {
  items: [],
  isLoading: false,
  error: null
}
```

Yani:

- isLoading === true → backend çalışıyor
- error !== null → bir şey ters gitti

---

# **🧩 ADIM 1 — TaskList.jsx’i aç**

📁 **src/components/TaskList.jsx**

Şu satır ZATEN var (çok iyi 👍):

```
const { items, isLoading, error } = useSelector(state => state.tasks);
```

👉 Yani Redux state’i **doğru okuyorsun**, ekstra bir şey yok.

---

# **🧩 ADIM 2 — Loading UI ekle**

📍 **return’dan ÖNCE** şunu EKLE 👇

```
if (isLoading) {
  return <p>⏳ Loading tasks...</p>;
}
```

📌 Mantık:

- Backend çağrısı sürüyorsa
- Liste yerine loading göster

---

# **🧩 ADIM 3 — Error UI ekle**

Loading bloğunun ALTINA 👇

```
if (error) {
  return <p style={{ color: "red" }}>❌ Error: {error}</p>;
}
```

📌 Mantık:

- Backend hata verdiyse
- Listeyi GÖSTERME
- Kullanıcıya net mesaj ver

---

# **🧩 ADIM 4 — Son hal (tam örnek)**

📁 **TaskList.jsx** (tam, düzgün hali)

```
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../redux/tasksOps";

export default function TaskList() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (isLoading) {
    return <p>⏳ Loading tasks...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>❌ Error: {error}</p>;
  }

  return (
    <ul>
      {items.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => dispatch(deleteTask(task.id))}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
```

---

# **🧪 TEST (çok önemli)**

1️⃣ Sayfayı yenile

→ “⏳ Loading tasks…” görünüyor mu? ✅

2️⃣ Backend kapat (veya yanlış URL ver)

→ Kırmızı hata yazısı çıkıyor mu? ✅

3️⃣ Backend açıkken

→ Liste geliyor mu? ✅

---

# **🧠 Bu adımda ne öğrendin?**

| **Kavram** | **Gerçek Hayat** |
| --- | --- |
| isLoading | Spinner / bekleme |
| error | Hata mesajı |
| UX | Kullanıcıyı bilgilendirme |
| Conditional render | Profesyonel React |

Artık bu uygulama **junior değil** → **mid-level pattern** kullanıyor.

---