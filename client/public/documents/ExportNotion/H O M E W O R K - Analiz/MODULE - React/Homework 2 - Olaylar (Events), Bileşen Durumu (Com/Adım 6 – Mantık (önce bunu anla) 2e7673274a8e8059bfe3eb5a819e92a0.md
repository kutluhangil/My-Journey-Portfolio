# Adım 6 – Mantık (önce bunu anla)

İki şey yapacağız:

1️⃣ **Sayfa açılırken**

- localStorage’da kayıtlı veri VAR mı bak
- varsa → state’i onunla başlat
- yoksa → { good: 0, neutral: 0, bad: 0 }

2️⃣ **State her değiştiğinde**

- güncel feedback’i localStorage’a kaydet

👉 Bunun için:

- useEffect
- localStorage.getItem
- localStorage.setItem
    
    kullanacağız.
    

---

# **1️⃣ localStorage’da kullanacağımız key**

Sabit bir isim belirleyelim:

```
const STORAGE_KEY = "feedback";
```

---

# **2️⃣ State’i localStorage’dan BAŞLATMA (en önemli kısım)**

Normalde şöyleydi:

```
const [feedback, setFeedback] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
});
```

❌ BUNU DEĞİŞTİRİYORUZ

✅ **Fonksiyonla başlatıyoruz**:

```
const [feedback, setFeedback] = useState(() => {
  const savedFeedback = localStorage.getItem(STORAGE_KEY);

  if (savedFeedback !== null) {
    return JSON.parse(savedFeedback);
  }

  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
});
```

📌 Neden?

- React **ilk render’da** localStorage’dan okur
- Sayfa yenilense bile değerler korunur

---

# **3️⃣ State DEĞİŞTİĞİNDE localStorage’a KAYDET**

Bunun için useEffect ekliyoruz.

```
import { useState, useEffect } from "react";
```

Sonra **App.jsx içinde**:

```
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}, [feedback]);
```

📌 Bu ne yapar?

- feedback her değiştiğinde çalışır
- Güncel state’i localStorage’a yazar

---

# **4️⃣ TAM VE DOĞRU App.jsx (birebir kopyala)**

```
import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const STORAGE_KEY = "feedback";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem(STORAGE_KEY);

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
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

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

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

# **5️⃣ Kontrol listesi (kendin test et)**

✅ Butona bas → sayı artıyor

✅ Sayfayı yenile → **sayılar kaybolmuyor**

✅ Reset → sıfırlanıyor

✅ Reset’ten sonra yenile → yine sıfır