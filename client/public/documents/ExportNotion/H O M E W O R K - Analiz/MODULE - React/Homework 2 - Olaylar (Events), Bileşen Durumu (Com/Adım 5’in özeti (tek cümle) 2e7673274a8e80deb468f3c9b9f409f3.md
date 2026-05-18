# Adım 5’in özeti (tek cümle)

> Toplam feedback
> 
> 
> **pozitif yüzde**
> 

> App.jsx’te hesaplanır
> 
> 
> **Feedback bileşenine prop olarak gönderilir**
> 

---

## **1️⃣ NEDEN yeni state EKLEMİYORUZ?**

Çünkü:

- totalFeedback
- positivePercentage

bunlar **mevcut state’ten türetilen** değerlerdir.

Yanlış ❌:

```
const [total, setTotal] = useState(0);
```

Doğru ✅:

```
const totalFeedback = good + neutral + bad;
```

> React’ta
> 
> 
> **hesaplanabilen şey state olmaz**
> 

---

## **2️⃣ Sen App.jsx’te ZATEN doğru yapmışsın ✅**

Şu kod **%100 doğru**:

```
const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

const positivePercentage =
  totalFeedback === 0
    ? 0
    : Math.round((feedback.good / totalFeedback) * 100);
```

Ve bunları Feedback’e prop olarak gönderiyorsun:

```
<Feedback
  good={feedback.good}
  neutral={feedback.neutral}
  bad={feedback.bad}
  total={totalFeedback}
  positivePercentage={positivePercentage}
/>
```

✔ Adım 5 burada tamam.

---

## **3️⃣ Şimdi kritik kısım:**

## **Feedback.jsx nasıl olmalı?**

Aşağıdaki yapı **Adım 5’in birebir karşılığıdır**:

### **✅**

### **Feedback.jsx**

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
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
```

---

## **4️⃣ Akış mantığı (çok önemli 🧠)**

1. Kullanıcı butona tıklar
2. updateFeedback("good") çalışır
3. feedback state değişir
4. React yeniden render eder
5. totalFeedback ve % **yeniden hesaplanır**
6. Feedback bileşeni **güncel veriyi gösterir**

Hiç ekstra state yok → **temiz React**

---

## **5️⃣ Adım 5 bitti mi?**

✅ **Evet, tamamen bitti**

Şu an:

- ✔ total gösteriliyor
- ✔ yüzde gösteriliyor
- ✔ state şişirilmedi
- ✔ React mantığına uygun

---

## **Sonraki adım (istersen)**

👉 **Adım 6: LocalStorage ile veriyi saklama**

Sayfa yenilense bile feedback’ler kalsın

Hazırsan yaz:

**“Adım 6’ya geçelim”**