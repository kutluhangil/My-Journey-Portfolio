# GENEL MANTIĞI (Bu Senaryoların Ortak Noktası)

Bu senaryoların tamamı şunu test eder:

- User gerçekten Siri ile mi konuşuyor?
- User konuşması bölündü mü?
- Yeni bir niyet mi oluştu?
- Siri mi böldü?
- User mı böldü?
- Arada Bystander mı var?
- User aynı request’i mi tamamlıyor yoksa yeni request mi başlatıyor?

Bu ayrımı doğru yapamazsan:

👉 User Turn sayısını yanlış belirlersin

👉 intended / unintended hatalı olur

👉 Sınavdan kalırsın

Şimdi tek tek açıklıyorum.

---

# **📘 SCENARIO 6**

**User speaks to Siri → replies to Bystander → continues request**

### **Yapı:**

1. User Siri’ye konuşur (intended)
2. User Bystander’a cevap verir (unintended)
3. User tekrar Siri’ye döner (intended)

### **Nasıl anot edilir?**

👉 **3 ayrı User Turn**

| **Segment** | **Label** | **Intent** |
| --- | --- | --- |
| Siri set alarm 7am | User Turn | intended |
| we’ll have to drive tomorrow | User Turn | unintended |
| actually change to 6:30am | User Turn | intended |

Önemli:

User Bystander’a cevap veriyorsa → unintended

---

# **📘 SCENARIO 7**

**User thinks aloud before speaking to Siri**

User kendi kendine konuşuyor.

Örnek:

“I need to set an alarm tomorrow…”

Bu Siri’ye yönelik değil.

Sonra:

“Hey Siri, set alarm”

### **Nasıl anot edilir?**

👉 2 ayrı User Turn

| **Segment** | **Label** | **Intent** |
| --- | --- | --- |
| I need to set alarm tomorrow | User Turn | not intended |
| Hey Siri set alarm | User Turn | intended |

Ek olarak:

Hey Siri → Invocation

---

# **📘 SCENARIO 8**

**User unrelated speech in between**

User Siri’ye request yapar.

Siri cevap verir.

User başka bir şey söyler (Siri ile ilgili değil).

Örnek:

“Can you take the trash out please?”

Bu Siri’ye yönelik değil.

### **Anotasyon:**

2 ayrı User Turn:

| **Segment** | **Label** | **Intent** |
| --- | --- | --- |
| Siri set alarm | User Turn | intended |
| can you take trash out | User Turn | unintended |

---

# **📘 SCENARIO 9**

**User interrupts Siri with a follow-up**

Yapı:

User → Siri cevap vermeye başlar → User Siri’yi keser → yeni follow-up başlatır

Bu kritik bir ayrımdır.

Bu durumda:

👉 2 ayrı User Turn vardır.

Çünkü ikinci konuşma yeni bir follow-up intent’tir.

| **Segment** | **Label** |
| --- | --- |
| what is population of China | User Turn intended |
| Actually what about Guangzhou | User Turn intended |

Siri arada konuşur ama bu User Turn sayısını değiştirmez.

---

# **📘 SCENARIO 10**

**User starts request → pause/filler → Siri interrupts → User continues SAME request**

Burada kritik nokta şu:

User henüz bitirmemiştir.

Siri yanlışlıkla erken cevap verir.

User devam eder ve aynı request’i tamamlar.

👉 Bu durumda **TEK User Turn**

Çünkü intent değişmedi.

| **Segment** | **Label** |
| --- | --- |
| what is the population of China in 2024 | User Turn intended |

Siri’nin erken girmesi User Turn’u bölmez.

Bu çok kritik.

---

# **📌 SCENARIO KARŞILAŞTIRMA TABLOSU**

| **Scenario** | **User Turn Sayısı** | **Neden** |
| --- | --- | --- |
| 6 | 3 | Siri → Bystander → Siri |
| 7 | 2 | Thinking aloud + intended |
| 8 | 2 | Unrelated speech |
| 9 | 2 | Follow-up yeni intent |
| 10 | 1 | Aynı request devam ediyor |

---

# **📌 MODÜL ÖZETİ (Sınavda Ölçülen Çekirdek Noktalar)**

1. Event Annotation = Core Task
    
    Kim konuştu + ne zaman konuştu
    
2. Speakers’ı doğru ayır
3. Label’ları sırayla uygula
4. Invocation sadece geçerli trigger için
5. User Turn mutlaka transcribe edilir
6. intended / not intended doğru belirlenir
7. Edge case’ler (thinking aloud, interruption vs.) dikkatli analiz edilir
8. Filler, pause transcription’a girmez
9. Boundary’ler temiz olmalı
10. Tutarlılık çok önemli

---

# **🎯 EN KRİTİK PÜF NOKTALARI (SINAVDA HAYAT KURTARIR)**

Şimdi sana altın değerinde karar kuralları veriyorum:

---

### **🔹 1️⃣ Eğer User konuşması anlam olarak tek bir isteği tamamlıyorsa → TEK User Turn**

Siri araya girse bile bölme.

---

### **🔹 2️⃣ Eğer User yeni bir intent başlatıyorsa → YENİ User Turn**

Anahtar soru:

Bu yeni bir soru mu?

Cevap: Evet → böl.

---

### **🔹 3️⃣ Eğer User Bystander’a konuşuyorsa → unintended**

---

### **🔹 4️⃣ Eğer User kendi kendine konuşuyorsa → unintended**

---

### **🔹 5️⃣ Eğer User Siri’yi kesip follow-up yapıyorsa → 2 ayrı intended User Turn**

---

### **🔹 6️⃣ Eğer Siri User’ı pause sırasında bölerse ama User aynı cümleyi tamamlıyorsa → bölme**

---

### **🔹 7️⃣ Invocation her geçerli trigger için ayrı**

“Hey Siri Siri” → 2 invocation

---

### **🔹 8️⃣ Yanlış trigger formulation → Invocation olmaz**

“Hello Siri” → Invocation değil

---

### **🔹 9️⃣ Pause ve Filler sadece User içinde**

Siri filler’ı label’lanmaz

---

### **🔹 🔟 Eğer kararsız kalırsan şu soruyu sor:**

> User’ın niyeti değişti mi?
> 

Değiştiyse → yeni User Turn

Değişmediyse → tek User Turn

---

# **🧠 SON STRATEJİ**

Sınavda şu 3 şeyi her soruda kendine sor:

1. Kaç intent var?
2. Siri ile mi konuşuyor?
3. Bu devam mı yoksa yeni request mi?

Bu üç sorunun cevabı doğruysa hatasız geçersin.

---

İstersen şimdi sana bu 6–10 senaryolar üzerinden mini deneme hazırlayabilirim.

Gerçek sınav simülasyonu yapabiliriz.