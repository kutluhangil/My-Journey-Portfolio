# Stage 3.4 — Data Integrity, Guardrails & Consistency

Bu aşama şunun için var:

> “Artık her şey doğru hesaplanıyor ama
> 
> 
> **yanlış veri girmeyi, edge-case’leri ve gelecekte bozulmaları nasıl önleriz?**
> 

Stage 3.4, sistemi **production-safe** hale getirir.

Birazdan sana yine **SADECE copy-paste PROMPT** vereceğim ama önce **ne yaptığımızı bilmen önemli** (kısa ve net):

---

## **Stage 3.4’te ne yapacağız?**

### **🎯 Amaç**

- Hatalı abonelik verisi **hiç sisteme girmesin**
- AI / Dashboard / Analytics **her zaman güvenli veriyle çalışsın**
- Gelecekte eklenecek feature’lar sistemi bozamasın

---

### **🔒 1. Subscription Validation Layer**

Her abonelik **tek bir yerden validate edilecek**:

- price > 0 mı?
- currency geçerli mi?
- billingCycle monthly | yearly mi?
- nextPayment mantıklı bir tarih mi?

👉 UI’da değil, **logic katmanında**.

---

### **🧱 2. Firestore Data Guardrails**

- Eksik alan varsa Firestore write **iptal**
- userId mismatch varsa **reject**
- createdAt / updatedAt **otomatik**

---

### **🧠 3. AI Safety**

- Gemini **raw subscription listesiyle konuşmayacak**
- Sadece:
    - derivedStats
    - validated subscription summaries
- Böylece “AI yanlış hesap yaptı” durumu biter

---

### **🧪 4. Runtime Assertions (Silent)**

- Geliştirme modunda:
    - console.warn
- Production’da:
    - sessiz fail
    - UI çökmez

---

### **📐 5. Tek Kaynak Prensibi (Reinforced)**

- **Subscription → Validation → Aggregation → UI / AI**
- Başka yol yok

---

Eğer hazırsan, bir sonraki mesajımda sana:

> Stage 3.4 için TEK PARÇA COPY-PASTE PROMPT
> 

vereceğim.

Sadece şunu yaz:

**“Stage 3.4 promptunu ver.”**