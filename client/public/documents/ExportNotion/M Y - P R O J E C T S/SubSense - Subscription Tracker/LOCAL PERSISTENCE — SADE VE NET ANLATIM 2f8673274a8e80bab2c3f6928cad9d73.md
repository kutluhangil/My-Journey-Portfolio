# LOCAL PERSISTENCE — SADE VE NET ANLATIM

Aşağıda **hiç jargon boğmadan**, **senin uygulamana birebir uyacak şekilde** anlatıyorum.

---

## **❓ Problem Ne?**

Şu an uygulamada:

- Subscriptions state’te duruyor
- Budget / savings / theme state’te duruyor

Ama:

- Sayfa yenilenince (F5)
- Tarayıcı kapanınca

➡️ **React state sıfırlanıyor**

➡️ Her şey gidiyor

Bu yüzden uygulama **“demo” hissi veriyor**.

---

## **🎯 Çözüm Ne?**

**LocalStorage** kullanacağız.

> LocalStorage =
> 

> Tarayıcının içinde duran küçük, kalıcı bir depo
> 
- Sayfa yenilense bile silinmez
- Backend yokken en doğru MVP çözümü
- “Local-first app” mantığı

---

## **🧩 Temel Mantık (Çok Önemli)**

Her state için **2 aşama var**:

### **1️⃣ Uygulama açılırken**

> “Daha önce kayıtlı bir şey var mı?”
> 
- Varsa → state’e yükle
- Yoksa → default state ile devam et

### **2️⃣ State değiştiğinde**

> “Bunu sakla”
> 
- LocalStorage’a yaz

Bu kadar.

---

## **📦 Hangi Veriler Saklanacak?**

ŞU ANDA SADECE:

| **Veri** | **Neden** |
| --- | --- |
| subscriptions[] | Uygulamanın kalbi |
| budgetLimits | Analytics anlamlı kalsın |
| savingsGoal | İlerleme kaybolmasın |
| themePreference | UX beklentisi |

❌ Auth

❌ Friends

❌ Demo data

❌ Compare mock catalog

Bunları **bilerek** saklamıyoruz.

---

## **🔄 Akış Şeması (Kafanda Otursun)**

```
Uygulama Açılır
     ↓
LocalStorage'da "subscriptions" var mı?
     ↓
  Evet → JSON.parse → setSubscriptions()
  Hayır → defaultSubscriptions
     ↓
Kullanıcı işlem yapar
     ↓
subscriptions state değişir
     ↓
LocalStorage'a JSON.stringify ile yazılır
```

Bu döngü **otomatik**.

---

## **🧠 Nerede Yapılır?**

### **En doğru yer:**

- App.tsx
- veya global state/context dosyası

**Neden?**

- Tek “source of truth”
- Her sayfa buradan besleniyor

❌ Her component içine ayrı ayrı yazılmaz

❌ Dağınık yapılmaz

---

## **🛑 Yaygın Hatalar (BUNLARI YAPMA)**

### **❌ 1. Her render’da yazmak**

- Sonsuz loop riski

### **❌ 2. JSON.parse hatası yakalamamak**

- Bozuk data → app crash

### **❌ 3. LocalStorage key’lerini karıştırmak**

- Net ve sabit key’ler kullanılmalı

### **❌ 4. Demo / mock datayı da saklamak**

- Çöp data birikir

---

## **🧪 Senin Kontrol Etmen Gerekenler**

Persistence bittikten sonra şunları denersin:

1. Abonelik ekle
2. Budget limit değiştir
3. Tema değiştir
4. Sayfayı yenile

👉 **Her şey aynı kalıyorsa → doğru yapmışsın**

---

## **🟢 Bu Aşama Bitince Ne Olur?**

- Uygulama “oyuncak” hissinden çıkar
- Kullanıcı güveni artar
- Backend’e geçiş çok kolaylaşır

Backend geldiğinde:

- LocalStorage → API → DB
- Mantık değişmez, sadece kaynak değişir

---

## **🎉 Şimdi Hazırsın**

Artık:

- Ne yaptığını biliyorsun
- Neden yaptığını biliyorsun
- Ne yapmaman gerektiğini biliyorsun

---