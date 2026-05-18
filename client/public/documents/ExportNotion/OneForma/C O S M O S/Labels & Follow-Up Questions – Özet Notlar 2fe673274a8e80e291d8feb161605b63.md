# Labels & Follow-Up Questions – Özet Notlar

## **1️⃣ Invocation Label**

**Ne zaman kullanılır?**

- Kullanıcı **“Hey Siri”** veya **“Siri”** dediğinde

**Nasıl etiketlenir?**

- Sadece **trigger phrase’in olduğu kısmı** seç
- Başlangıçtan önce **en az 0.5 sn sessizlik** dahil et

**Zorunlu Soru**

> Was the keyword mentioned?
> 

Seçenekler:

- **Hey Siri**
- **Siri**
- **Another Phrase** → *Hello Siri, Hi Siri gibi hatalı tetikler*

❗ **Önemli**

- Eğer Siri **butonla** ya da **beep ile** tetiklendiyse → **Invocation ekleme**
- Trigger phrase **follow-up request içinde geçiyorsa** yine Invocation eklenir
- Lokal trigger’ları **tablodan kontrol et**

---

## **2️⃣ User Turn Label**

**Ne zaman kullanılır?**

- Kullanıcının konuştuğu **her durumda**

**Nasıl etiketlenir?**

- Kullanıcının **tüm konuşmasını kapsa**
- **Transcription zorunlu**
- Kurallara uygun yaz

**Zorunlu Soru**

> Did the user intend to use Siri?
> 
- **Yes** → Siri’ye konuşuyorsa
- **No** →
    - Kendi kendine konuşuyorsa
    - Başkasına konuşuyorsa
    - Siri’yi taklit ediyorsa

📌 User Turn çoğu zaman **ilk duyulan sestir**

---

## **3️⃣ Siri Turn Label**

**Ne zaman kullanılır?**

- Siri’nin **her türlü sesi**
    - Konuşma
    - Beep
    - Tone
    - İnsan taklidi Siri

**Nasıl etiketlenir?**

- Siri’nin konuştuğu **tüm süreyi kapsa**

---

## **4️⃣ Bystander Side Speech**

**Ne zaman kullanılır?**

- Kullanıcı dışındaki **ikinci insan sesi**

**Kullanılmaz:**

- Eğer User dışında **başka insan yoksa**

---

## **5️⃣ Filler Label**

**Nedir?**

- Kullanıcının düşünürken çıkardığı sesler
    
    → *“uh”, “umm”, “eee”*
    

**Kurallar**

- ❗ **Sadece User Turn içinde**
- Siri veya Bystander için **kullanılmaz**

---

## **6️⃣ Pause Label**

**Nedir?**

- Kullanıcının duraksaması / sessizlik

**Kurallar**

- ❗ **Sadece User Turn içinde**
- 0.5 sn’den kısa pause’u etiketlememek OK
- Siri veya Bystander pause’ları **etiketlenmez**

---

## **🔁 Label Overlap Kuralları**

- **Primary label’lar çakışabilir**
    - User Turn + Invocation
    - User Turn + Filler
    - User Turn + Pause
- Siri Turn, User veya Bystander ile **overlap edebilir**

📌 Overlap **hata değildir**, beklenen bir durumdur

---

## **🌍 Localized Trigger Phrase – tr_TR**

- **hey Siri**

📌 Invocation label’ı için **lokale göre trigger kontrolü şart**

---

## **🧠 Altın Kurallar (QA Seviyor)**

- Invocation = **sadece tetik kelime**
- User Turn = **kullanıcının tüm konuşması**
- Filler & Pause = **yalnızca User Turn içinde**
- Siri beep = **Siri Turn**
- Emin değilsen → **context’e bak, split yapma**

---