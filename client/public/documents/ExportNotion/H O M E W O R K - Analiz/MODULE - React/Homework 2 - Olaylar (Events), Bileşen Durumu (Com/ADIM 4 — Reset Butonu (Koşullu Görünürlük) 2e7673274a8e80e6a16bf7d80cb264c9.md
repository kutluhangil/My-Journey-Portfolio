# ADIM 4 — Reset Butonu (Koşullu Görünürlük)

🎯 **Amaç:**

- Options içine **Reset** butonu eklemek
- Reset’e basınca **tüm geri bildirimleri sıfırlamak**
- Reset butonu **sadece feedback varsa** görünmeli

---

## **🧠 Mantık (çok önemli)**

- good / neutral / bad state’i **App’te**
- Reset işlemi de **App’te yapılmalı**
- Ama buton **Options bileşeninde**
    
    👉 Yani:
    
- Reset fonksiyonunu **App’te yaz**
- **Prop** olarak Options’a gönder

---

## **1️⃣ App.jsx — resetFeedback fonksiyonunu ekle**

📄 src/App.jsx

```
const resetFeedback = () => {
  setFeedback({
    good: 0,
    neutral: 0,
    bad: 0,
  });
};
```

👉 Bu fonksiyon state’i **ilk haline döndürür**

---

## **2️⃣ totalFeedback’i Options’a prop olarak gönder**

📄 src/App.jsx (Options çağrısı)

```
<Options
  updateFeedback={updateFeedback}
  totalFeedback={totalFeedback}
  resetFeedback={resetFeedback}
/>
```

👉 Şimdi Options şunları biliyor:

- Feedback var mı? (totalFeedback)
- Reset nasıl yapılır? (resetFeedback)

---

## **3️⃣ Options bileşenini güncelle**

📁 src/components/Options/Options.jsx

```
export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
}
```

---

## **4️⃣ Buradaki kritik nokta 🔑**

### **Koşullu render**

```
{totalFeedback > 0 && <button>Reset</button>}
```

| **totalFeedback** | **Reset** |
| --- | --- |
| 0 | ❌ görünmez |
| ≥ 1 | ✅ görünür |

👉 Görevde istenen **birebir davranış**

---

## **5️⃣ Tarayıcıda ne olmalı?**

### **İlk açılış**

- Reset **yok**
- Notification görünüyor

### **Bir butona basınca**

- Reset **çıkıyor**
- Feedback görünüyor

### **Reset’e basınca**

- Sayılar **sıfırlanıyor**
- Feedback kayboluyor
- Notification geri geliyor
- Reset tekrar **kayboluyor**

---

## **6️⃣ Bu adımın özeti 🧠**

- State yönetimi → **App**
- Görünürlük kontrolü → **App’ten gelen prop**
- Buton → **Options**
- React’te bu desen **çok sık kullanılır**

---