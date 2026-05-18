# React tam olarak ne işe yarar?

**React, kullanıcı arayüzü (UI) yapmak için kullanılır.**

Yani:

- Ekranda **ne görünecek**
- Hangi **veri değişince ekran nasıl değişecek**
- Butona basınca **ne olacak**

gibi işleri **daha kolay ve düzenli** yapmanı sağlar.

---

## **React yokken (klasik JS ile)**

Diyelim ki bir sayaç yapıyorsun:

```
<p id="count">0</p>
<button id="btn">Arttır</button>
```

```
let count = 0;

document.querySelector("#btn").addEventListener("click", () => {
  count++;
  document.querySelector("#count").textContent = count;
});
```

### **Burada sen ne yapıyorsun?**

- Veriyi tutuyorsun (count)
- DOM’u **manuel** güncelliyorsun
- “Hangi elementi değiştireyim?” diye sen düşünüyorsun

➡️ Küçük projede sorun yok, **büyüyünce kaos** 😵

---

## **React ile aynı şey**

```
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Arttır
      </button>
    </>
  );
}
```

### **Burada fark ne?**

✅ **DOM’a dokunmuyorsun**

✅ Sadece diyorsun ki:

> “Ekranda count göster.
> 

> count değişirse, React ekranı güncellesin.”
> 

👉 React **ne zaman, neresi güncellenecek** onu kendi hallediyor.

---

## **React’in mantığını tek cümleyle**

> “Veri değişirse → arayüz otomatik değişir.”
> 

Sen **nasıl güncelleneceğini değil**,

**ne gösterileceğini** söylersin.

---

## **Bileşen (Component) ne demek?**

React’te her şey **bileşen**dir.

```
function UserCard() {
  return <h2>Ali</h2>;
}
```

Bu aslında:

- Küçük bir parça
- Tek bir sorumluluğu var
- Lego gibi birleşir 🧱

```
function App() {
  return (
    <>
      <UserCard />
      <UserCard />
      <UserCard />
    </>
  );
}
```

➡️ Tek kod, çok kullanım

➡️ Okunabilir

➡️ Bakımı kolay

---

## **React neden “reaktif”?**

Çünkü **veriyi dinler**.

```
const [name, setName] = useState("Ali");
```

- name değişirse
- Bu değişikliği kullanan **tüm UI otomatik güncellenir**

Sen:

❌ document.querySelector

❌ innerHTML

❌ textContent

yazmazsın.

---

---

---

## **Özet (akılda kalsın diye)**