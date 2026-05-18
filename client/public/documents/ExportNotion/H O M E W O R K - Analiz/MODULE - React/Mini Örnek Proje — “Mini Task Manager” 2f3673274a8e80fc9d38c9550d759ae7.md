# Mini Örnek Proje — “Mini Task Manager”

Bu mini proje, **React + Redux Toolkit + Async işlemler** mantığını **tek yerde** görmeni sağlar.

Gerçek projelerde yazdıklarının **küçültülmüş hali** gibi düşün.

---

## **🎯 Proje Amacı**

- Backend’den görevleri çekmek
- Görev eklemek
- Görev silmek
- Loading & error durumlarını göstermek
- Redux Toolkit + createAsyncThunk kullanmak

---

## **📂 Proje Yapısı (Basit)**

```
src/
├── components/
│   └── TaskList.jsx
├── redux/
│   ├── store.js
│   ├── tasksSlice.js
│   └── tasksOps.js
├── App.jsx
└── main.jsx
```

---

## **🔹 1. Redux Store**

### **redux/store.js**

```
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
```

📌 **Ne oluyor?**

- Uygulamanın **global state deposu** oluşturuluyor
- tasks isimli slice store’a bağlanıyor

---

## **🔹 2. Async İşlemler (Backend)**

### **redux/tasksOps.js**

```
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://example-api.com";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/tasks");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
```

📌 **Burada ne öğrendin?**

- createAsyncThunk = async action
- pending / fulfilled / rejected otomatik oluşur
- Hata kontrolü backend seviyesinde yapılır

---

## **🔹 3. Slice (State Yönetimi)**

### **redux/tasksSlice.js**

```
import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./tasksOps";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default tasksSlice.reducer;
```

📌 **Önemli noktalar**

- reducers YOK
- Sadece extraReducers
- Async state kontrolü burada

---

## **🔹 4. UI Tarafı**

### **components/TaskList.jsx**

```
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksOps";

export default function TaskList() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {items.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}
```

📌 **Bu component ne yapıyor?**

- Sayfa açılınca backend çağrılıyor
- Loading & error UI’da gösteriliyor
- Redux state okunuyor

---

## **🔹 5. App.jsx**

```
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div>
      <h1>Mini Task Manager</h1>
      <TaskList />
    </div>
  );
}
```

---

# **📊 2️⃣ “Bu Nerede Kullanılır?” — Tablo ile Anlatım**

## **🔹 React Kavramları**

| **Kavram** | **Nerede Kullanılır** | **Örnek** |
| --- | --- | --- |
| Component | UI parçalamak | Contact, Button |
| Props | Veri göndermek | <User name="Ali" /> |
| State | UI değişimi | Modal açık/kapalı |
| useEffect | API çağrısı | Sayfa yüklenince veri çekme |

---

## **🔹 Form & Input**

| **Kavram** | **Nerede** | **Neden** |
| --- | --- | --- |
| Controlled Input | Login form | Input kontrolü |
| Formik | Büyük formlar | Validation kolaylığı |
| Yup | Form doğrulama | Hata mesajları |

---

## **🔹 Redux & Async**

| **Kavram** | **Nerede Kullanılır** | **Gerçek Hayat** |
| --- | --- | --- |
| Redux | Global state | Kullanıcı, tema |
| createSlice | State yönetimi | contactsSlice |
| createAsyncThunk | API çağrısı | fetchContacts |
| extraReducers | Async durum | loading / error |
| Selector | State okuma | filteredContacts |

---

## **🔹 Routing**

| **Kavram** | **Nerede** | **Örnek** |
| --- | --- | --- |
| Route | Sayfa | /login |
| Link | Navigasyon | Menü |
| useNavigate | Kodla yönlendirme | Login sonrası |
| Protected Route | Yetki | Dashboard |

---

## **🔹 Auth & JWT**

| **Kavram** | **Nerede** | **Amaç** |
| --- | --- | --- |
| Authentication | Login | Kullanıcıyı tanı |
| Authorization | API | Yetki kontrol |
| JWT | HTTP header | Güvenli istek |

---

## **🧠 Özet (Akılda Kalıcı)**

- **React** → UI
- **Redux** → Global state
- **Thunk** → Backend
- **Selector** → Performans
- **Router** → Sayfalar
- **JWT** → Güvenlik

---

[**Backend endpoint’i netleştirelim**](Mini%20%C3%96rnek%20Proje%20%E2%80%94%20%E2%80%9CMini%20Task%20Manager%E2%80%9D/Backend%20endpoint%E2%80%99i%20netle%C5%9Ftirelim%202f3673274a8e808d9622f9fa939f6a1a.md)

[**Task silme (DELETE)** adımına **aynı netlikte, “şunu buraya yaz” şeklinde** geçiyoruz.](Mini%20%C3%96rnek%20Proje%20%E2%80%94%20%E2%80%9CMini%20Task%20Manager%E2%80%9D/Task%20silme%20(DELETE)%20ad%C4%B1m%C4%B1na%20ayn%C4%B1%20netlikte,%20%E2%80%9C%C5%9Funu%20b%202f3673274a8e801da7c3d9a6a92144a2.md)

[**Loading & Error UI (Kullanıcı Deneyimi)** adımına **çok net, tane tane** geçiyoruz.](Mini%20%C3%96rnek%20Proje%20%E2%80%94%20%E2%80%9CMini%20Task%20Manager%E2%80%9D/Loading%20&%20Error%20UI%20(Kullan%C4%B1c%C4%B1%20Deneyimi)%20ad%C4%B1m%C4%B1na%20%C3%A7o%202f3673274a8e80edb92ad38772b5b6e8.md)

[**Task Ekleme (POST) + Form** adımına geçiyoruz.](Mini%20%C3%96rnek%20Proje%20%E2%80%94%20%E2%80%9CMini%20Task%20Manager%E2%80%9D/Task%20Ekleme%20(POST)%20+%20Form%20ad%C4%B1m%C4%B1na%20ge%C3%A7iyoruz%202f3673274a8e806fac23dc9e9e253373.md)

[**UX İYİLEŞTİRME (Loading, Disable, Feedback)**](Mini%20%C3%96rnek%20Proje%20%E2%80%94%20%E2%80%9CMini%20Task%20Manager%E2%80%9D/UX%20%C4%B0Y%C4%B0LE%C5%9ET%C4%B0RME%20(Loading,%20Disable,%20Feedback)%202f3673274a8e8059b85df83796b12215.md)

[**AUTH + REFRESH TOKEN (GERÇEK HAYAT SEVİYESİ)**](Mini%20%C3%96rnek%20Proje%20%E2%80%94%20%E2%80%9CMini%20Task%20Manager%E2%80%9D/AUTH%20+%20REFRESH%20TOKEN%20(GER%C3%87EK%20HAYAT%20SEV%C4%B0YES%C4%B0)%202f3673274a8e8078b2cbff8eb3e83a0a.md)

[**AUTH SİSTEMİ — BÜYÜK RESİM DİYAGRAMI**](Mini%20%C3%96rnek%20Proje%20%E2%80%94%20%E2%80%9CMini%20Task%20Manager%E2%80%9D/AUTH%20S%C4%B0STEM%C4%B0%20%E2%80%94%20B%C3%9CY%C3%9CK%20RES%C4%B0M%20D%C4%B0YAGRAMI%202f3673274a8e809bbf52da6105f45c63.md)