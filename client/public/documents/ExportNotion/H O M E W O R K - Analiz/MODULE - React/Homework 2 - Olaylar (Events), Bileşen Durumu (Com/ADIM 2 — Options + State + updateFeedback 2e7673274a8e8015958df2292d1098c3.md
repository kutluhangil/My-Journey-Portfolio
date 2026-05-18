# ADIM 2 — Options + State + updateFeedback

---

🎯 **Amaç:**

- Good / Neutral / Bad butonları olacak
- Tıklanınca **App içindeki state değişecek**
- Mantık **App’te**, butonlar **Options’ta**

> 🔑 React kuralı:
> 

> State yukarıda olur, kontrol aşağıya props ile iner
> 

---

## **🔍 Bu adımda ne öğreneceksin?**

- useState nasıl kullanılır
- State’i **nesne (object)** olarak yönetmek
- Fonksiyonu **prop olarak** çocuk bileşene göndermek
- Button → App state zinciri

---

## **1️⃣ App.jsx — State ekleyelim**

📄 src/App.jsx

Mevcut halini **şununla değiştir**:

```
import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
    </div>
  );
}
```

### **🧠 Burayı çok iyi anla**

```
[feedbackType]
```

➡️ **Dynamic key**

➡️ "good" → feedback.good

➡️ "bad" → feedback.bad

Bu sayede **tek fonksiyon** 3 butonu da yönetiyor.

---

## **2️⃣ Options bileşeni oluştur**

Şu yapıyı oluştur:

```
src/components/
 └── Options/
     └── Options.jsx
```

---

## **3️⃣ Options.jsx — Butonlar**

📄 src/components/Options/Options.jsx

```
export default function Options({ updateFeedback }) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
    </div>
  );
}
```

### **🔎 Burada ne oluyor?**

- updateFeedback → **App’ten prop ile geldi**
- Her buton **farklı string gönderiyor**
- Options **state bilmiyor**, sadece tetikliyor

👉 Bu **doğru React mimarisi**

---

## **4️⃣ Şu anda ekranda ne olur?**

- Butonlar görünür
- Tıklayınca **state artar**
- Ama **henüz ekranda gösterilmiyor**

❗ Bu NORMAL

Göstermek **3. adımın konusu**

---

## **5️⃣ Hızlı kontrol listesi ✅**

- useState App’te
- updateFeedback App’te
- Fonksiyon prop olarak gönderildi
- Butonlar string argüman yolluyor
- Konsolda hata yok

Terminal:

```
npm run dev
```

---

## **🧠 Bu Adımın Özeti**

- **State = App**
- **UI tetikleyici = Options**
- **Tek fonksiyon, çok buton**
- React’te işlerin %80’i bu mantıkla kurulur

---