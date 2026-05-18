# React & Modern Frontend — Basit ve Anlaşılır Notlar

---

## **1️⃣ React Kütüphanesi**

### **🔹 React Nedir?**

React, **kullanıcı arayüzü (UI)** oluşturmak için kullanılan bir JavaScript kütüphanesidir.

- **Component-based** → Her şey bileşenlerden oluşur
- **SPA (Single Page Application)** → Sayfa yenilenmeden içerik değişir
- **Declarative** → “Nasıl” değil, “ne” gösterileceğini söylersin
- **Virtual DOM** → Sadece değişen kısımlar güncellenir (performans)

👉 React = **Hızlı + Modüler + Okunabilir UI**

---

### **🔹 Component (Bileşen)**

React’te her şey **bileşendir**.

```
function Welcome() {
  return <h1>Merhaba React!</h1>;
}
```

- Bir bileşen:
    - UI üretir
    - Mantık barındırabilir
- Bileşen isimleri **BÜYÜK harfle başlar**

---

### **🔹 Props (Bileşenler Arası Veri)**

Props, **üst bileşenden alt bileşene veri gönderir**.

```
function Hello({ name }) {
  return <p>Merhaba, {name}!</p>;
}
```

```
<Hello name="Ahmet" />
```

📌 Önemli:

- Props **sadece okunur**
- Alt bileşen props’u değiştiremez

---

### **🔹 State (Bileşen İçi Veri)**

State, bileşenin **kendi iç verisidir**.

```
const [count, setCount] = useState(0);
```

- State değişirse → component **yeniden render olur**
- State = UI’nin durumu

Örnek:

```
<button onClick={() => setCount(count + 1)}>
  Artır
</button>
```

---

## **2️⃣ Event Handling (Olay Yönetimi)**

### **🔹 Event Nedir?**

Kullanıcı etkileşimleridir:

- Tıklama
- Yazma
- Gönderme

```
<button onClick={handleClick}>Tıkla</button>
```

📌 React’te event’ler:

- camelCase
- {} içinde fonksiyon

---

### **🔹 Event Object**

React, tarayıcı farklarını gizleyen **SyntheticEvent** kullanır.

```
function handleClick(e) {
  console.log(e.target);
}
```

---

### **🔹 Parametre Göndermek**

```
<button onClick={() => handleDelete(id)}>
  Sil
</button>
```

❌ Yanlış:

```
onClick={handleDelete(id)}
```

---

## **3️⃣ LocalStorage & Form Yönetimi**

### **🔹 LocalStorage**

Tarayıcıda **kalıcı veri saklar**.

```
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
```

📌 String saklar → JSON kullanılır

---

### **🔹 Controlled Form**

Input değeri state ile kontrol edilir.

```
const [name, setName] = useState("");

<input
  value={name}
  onChange={e => setName(e.target.value)}
/>
```

---

### **🔹 Formik (Form Kütüphanesi)**

Form yönetimini kolaylaştırır.

```
<Formik
  initialValues={{ email: "" }}
  onSubmit={values => console.log(values)}
>
```

Avantajları:

- Validation
- Error handling
- Temiz kod

---

## **4️⃣ HTTP, Hooks ve Context**

### **🔹 HTTP İstekleri**

API’den veri çekmek için kullanılır.

```
useEffect(() => {
  axios.get("/api/users")
    .then(res => setUsers(res.data));
}, []);
```

📌 [] → sadece ilk render’da çalışır

---

### **🔹 useMemo (Performans)**

Hesaplanan değeri **önbelleğe alır**.

```
const sortedList = useMemo(() => {
  return list.sort();
}, [list]);
```

---

### **🔹 useRef**

- DOM’a erişim
- Önceki değerleri tutma

```
const inputRef = useRef();
<input ref={inputRef} />
```

---

### **🔹 Custom Hook**

Tekrarlanan mantığı dışarı alırsın.

```
function useLocalStorage(key, initialValue) {
  ...
}
```

---

### **🔹 Context API**

Prop drilling’i önler.

```
const ThemeContext = createContext();
```

Global state gibi davranır (küçük projelerde)

---

## **5️⃣ React Router**

### **🔹 Routing Nedir?**

URL’e göre component gösterme.

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
```

---

### **🔹 Link**

```
<Link to="/about">Hakkında</Link>
```

---

### **🔹 useNavigate**

Kodla yönlendirme

```
const navigate = useNavigate();
navigate("/login");
```

---

### **🔹 Nested Routes**

İç içe sayfalar:

```
/movies
/movies/123
/movies/123/reviews
```

---

## **6️⃣ Redux & Redux Toolkit**

### **🔹 Redux Nedir?**

**Global state yönetimi**

Akış:

```
UI → dispatch → reducer → store → UI
```

---

### **🔹 Slice**

```
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});
```

---

### **🔹 Kullanım**

```
const value = useSelector(state => state.counter.value);
const dispatch = useDispatch();
dispatch(increment());
```

---

## **7️⃣ Asenkron İşlemler**

### **🔹 HTTP Akışı**

- pending → loading
- fulfilled → success
- rejected → error

---

### **🔹 Redux Thunk (Eski)**

```
export const fetchTasks = () => async dispatch => {
  dispatch(fetchingInProgress());
  try {
    const res = await axios.get("/tasks");
    dispatch(fetchingSuccess(res.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
```

---

### **🔹 createAsyncThunk (Önerilen)**

```
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

---

### **🔹 extraReducers**

```
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
  });
```

---

## **8️⃣ Authentication, Authorization & JWT**

### **🔹 Authentication**

- “Sen kimsin?”
- Email + şifre doğrulama

---

### **🔹 Authorization**

- “Ne yapabilirsin?”
- Token (JWT) ile kontrol edilir

---

### **🔹 JWT**

3 parçadan oluşur:

- Header
- Payload
- Signature

```
Authorization: Bearer TOKEN
```

- Token her istekte gönderilir
- Geçersizse → login sayfası

---

## **🧠 PÜF NOKTALAR (ALTIN DEĞERİNDE)**

- useEffect([], []) → sadece ilk render
- Component isimleri **BÜYÜK**
- { margin:0; padding:0; box-sizing:border-box } → CSS reset
- border: 1px solid red → debug
- Inspect → canlı test
- Redux selector = performans

---