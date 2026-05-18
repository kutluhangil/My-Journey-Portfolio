# ADIM 3 — Feedback + Notification + Koşullu Render

🎯 **Amaç:**

- Geri bildirim **varsa** → Feedback bileşeni gösterilecek
- Geri bildirim **yoksa** → Notification bileşeni gösterilecek
- totalFeedback **App’te hesaplanacak**

---

## **🧠 Neden App’te hesaplıyoruz?**

Çünkü:

- good, neutral, bad **App state’inde**
- Koşullu render (if / else) **App’te yapılıyor**
- React’te kararlar **state’in olduğu yerde** verilir

---

## **1️⃣ Feedback bileşenini oluştur**

📁 Klasör yapısı:

```
src/components/
 └── Feedback/
     └── Feedback.jsx
```

📄 src/components/Feedback/Feedback.jsx

```
export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
```

👉 Bu bileşen **sadece gösterir**, hesap yapmaz.

---

## **2️⃣ Notification bileşenini oluştur**

📁

```
src/components/
 └── Notification/
     └── Notification.jsx
```

📄 src/components/Notification/Notification.jsx

```
export default function Notification() {
  return <p>No feedback given yet</p>;
}
```

---

## **3️⃣ App.jsx — totalFeedback hesapla**

📄 src/App.jsx

Şimdi burayı **güncelliyoruz** 👇

```
import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage =
    totalFeedback === 0
      ? 0
      : Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
```

---

## **4️⃣ Buradaki kritik noktalar 🔍**

### **🔹 totalFeedback**

```
const totalFeedback = good + neutral + bad;
```

➡️ Görevde aynen istenen şey

➡️ Koşullu render için kullanılıyor

---

### **🔹 Koşullu render**

```
{totalFeedback > 0 ? <Feedback /> : <Notification />}
```

| **Durum** | **Gösterilen** |
| --- | --- |
| Hiç tıklama yok | Notification |
| En az 1 tıklama | Feedback |

---

### **🔹 Positive Percentage**

```
Math.round((good / total) * 100)
```

✔️ 0’a bölme hatası yok

✔️ Yüzde tam sayı

---

## **5️⃣ Tarayıcıda ne görmelisin?**

### **İlk açılışta:**

```
Sip Happens Café
Description
Buttons
No feedback given yet
```

### **Good / Neutral / Bad tıklayınca:**

```
Good: 1
Neutral: 0
Bad: 0
Total: 1
Positive: 100%
```

---

## **6️⃣ Bu adımın özeti 🧠**

- State **App’te**
- Hesaplamalar **App’te**
- Gösterim **bileşenlerde**
- Koşullu render React’in temel taşıdır

---