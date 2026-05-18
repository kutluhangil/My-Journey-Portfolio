# PROJENİN TEMEL MANTIĞI

Bu proje bir **User – Siri – Bystander** ses etkileşim etiketleme projesi.

Ama burada sadece “kim konuştu?” sorulmuyor.

Senin yapman gerekenler:

1. Kim konuştuğunu belirlemek
2. Hangi zaman aralığında konuştuğunu işaretlemek
3. Doğru label’ı seçmek
4. Gerekirse follow-up sorularını cevaplamak
5. User konuşmalarını doğru formatta transcribe etmek
6. Filler ve pause’ları ayrı label’lamak ama transcription’a koymamak
7. Unsure / Truncated tag’lerini doğru kullanmak

Bu proje **yüksek hassasiyet** istiyor. Küçük hatalar puan kırdırır.

---

# **2️⃣ AUDIO WORKFLOW (ÇALIŞMA SIRASI)**

Her dosyada aynı sırayı uygulamalısın:

### **Step 1 – Full audio’yu baştan sona dinle**

Direkt etiketlemeye atlama.

Önce:

- Kaç kişi var?
- Kim User?
- Siri gerçek mi taklit mi?
- Bystander var mı?
- Arka plan sesi var mı?

Bütün resmi gör.

---

### **Step 2 – Speakers’ı belirle**

Üç olası speaker var:

| **Speaker** | **Rol** |
| --- | --- |
| User | Siri ile bilinçli konuşan kişi |
| Siri | Asistan (gerçek ya da taklit) |
| Bystander | Üçüncü kişi, dikkat dağıtıcı |

Önemli detay:

User genelde ilk konuşan kişidir ama her zaman değil.

Bystander:

- Yan konuşma yapabilir
- User’a laf atabilir
- Siri ile konuşmaz

---

### **Step 3 – Label’ları sırayla uygula**

Audio akarken:

- Invocation
- User Turn
- Siri Turn
- Bystander Side Speech
- Filler
- Pause

uygun yerde etiketle.

Önemli:

Primary label’lar (User Turn, Siri Turn) secondary label’larla overlap edebilir.

---

### **Step 4 – Review and Refine**

Kontrol et:

- Zaman sınırları doğru mu?
- Filler transcription’a girmiş mi?
- Pause 0.5 saniyeden kısa mı?
- Invocation’da 0.5 saniye silence öncesi var mı?

---

### **Step 5 – Submit**

Emin değilsen tekrar dinle.

---

# **3️⃣ TÜM LABEL’LARIN DETAYLI AÇIKLAMASI**

---

## **🔹 1. Invocation**

Tanım:

User’ın Siri’yi aktive etmek için söylediği trigger.

Genelde:

- “Hey Siri”
- “Siri”

### **Kritik kurallar:**

- Leading request’te olabilir
- Follow-up request’te olabilir
- Buton basma varsa invocation yok
- Beep sesi varsa invocation yok

### **Zaman seçimi:**

- “Hey Siri” veya “Siri” başlangıç ve bitişini seç
- Öncesinde minimum 0.5 saniye silence dahil etmelisin

### **Follow-up soru:**

“Was the keyword Siri or Hey Siri mentioned?”

Seçenek:

- Hey Siri
- Siri
- Another Phrase (Hello Siri gibi hatalıysa)

---

## **🔹 2. User Turn**

Tanım:

User’ın Siri’ye yönelik konuşmasının tamamı.

Şunları içerir:

- Invocation
- Pauses
- Fillers
- Payload

### **Required actions:**

1. Tüm konuşma segmentini seç
2. Transcribe et
3. Follow-up sorusunu cevapla:

“Did the user intend to use Siri?”

- Yes → Siri ile konuşuyor
- No → Bystander ile konuşuyor ya da düşünerek konuşuyor

---

## **🔹 3. Siri Turn**

Tanım:

Siri’nin tüm konuşması.

Gerçek Siri ya da insan taklidi fark etmez.

---

## **🔹 4. Bystander Side Speech**

Tanım:

Üçüncü insan sesi.

Eğer ikinci bir insan sesi yoksa bu label kullanılmaz.

---

## **🔹 5. Filler**

“uh”, “um”, “ııı” gibi sesler.

Kurallar:

- Sadece User Turn içinde label’lanır
- Siri veya Bystander filler’ları label’lanmaz
- Transcription’a yazılmaz

---

## **🔹 6. Pause**

User’ın konuşma içindeki duraksaması.

Kurallar:

- 0.5 saniyeden kısa pause’ları label’lamak zorunda değilsin
- Sadece User Turn içinde label’lanır
- Siri ve Bystander pause’ları label’lanmaz

---

# **4️⃣ TRANSCRIPTION KURALLARI**

---

## **🔹 Post-ITN Format**

Ekranda nasıl görünmesi gerekiyorsa öyle yazılır.

Örnek:

Pre:

“nine to nine thirty”

Transcription:

“9 to 9:30”

---

## **🔹 Remove Fillers and Pauses**

Konuşma:

“Yes, uh, save it”

Transcription:

“Yes, save it”

---

## **🔹 Remove Non-Speech Sounds**

Burp, kissing sound, chuckle → yazılmaz.

---

# **5️⃣ UNSURE VE TRUNCATED TAG’LERİ**

---

## **🔹 [unsure: ]**

Ne zaman?

- Gürültü var
- Mumbled speech
- Kelime anlaşılmıyor
- Yazımı emin değil

Eğer:

- Tek kelime belirsiz → o kelimeyi tag’le
- Cümlenin yarısından fazlası anlamsız → tüm utterance empty [unsure: ]

---

## **🔹 [truncated: ]**

Ne zaman?

- Audio başı veya sonu kesilmiş
- Kelime yarım kalmış

Önemli:

Eğer hem unsure hem truncated gibi görünüyorsa → truncated öncelikli.

Format çok önemli:

Doğru:

[unsure: ]

[truncated: BTS]

Yanlış:

[unsure:]

[truncated:]

Arada boşluk olmalı.

---

# **6️⃣ OVERLAPPING LABELS**

Primary:

- User Turn
- Siri Turn

Bunlar overlap edebilir:

User Turn içinde:

- Invocation
- Pause
- Filler

Siri Turn overlap olabilir:

- Bystander
- User Turn (konuşmalar üst üste)

---

# **7️⃣ SENARYOLAR (SINAVDA ÇIKABİLİR)**

Şimdi son gönderdiğin senaryoları tablo halinde çıkarıyorum.

---

## **📌 Scenario 2**

“Siri” follow-up request içinde tekrar söyleniyor

| **Speech** | **Label** | **Not** |
| --- | --- | --- |
| Siri | Invocation | siri |
| Siri set an alarm for 7am | User Turn | intended |
| done | Siri Turn |  |
| Siri | Invocation | siri |
| Siri, no I meant 8am | User Turn | intended |

Önemli:

Follow-up içindeki “Siri” de invocation sayılır.

---

## **📌 Scenario 3**

İki trigger arka arkaya

User:

“Hey Siri, Siri set an alarm for 7am”

| **Speech** | **Label** |
| --- | --- |
| Hey Siri | Invocation |
| Siri | Invocation |
| Hey Siri, Siri set an alarm for 7am | User Turn |

Her trigger ayrı invocation.

---

## **📌 Scenario 4**

Hatalı + doğru trigger

User:

“hey Si.., hey Siri set an alarm”

| **Speech** | **Label** |
| --- | --- |
| hey Siri | Invocation |
| hey Si.., hey Siri set an alarm | User Turn |

Sadece doğru formulation invocation olur.

Yanlış olan sadece User Turn’a dahil edilir.

---

## **📌 Scenario 5**

Two-shot trigger

User:

“Hey Siri ”

Siri:

“Yes?”

User:

“Set alarm for 7am”

| **Speech** | **Label** |
| --- | --- |
| Hey Siri | Invocation |
| Hey Siri | User Turn |
| yes | Siri Turn |
| set alarm for 7am | User Turn |

Invocation User Turn içinde olmak zorunda değil.

Pause overlap edebilir.

---

# **SONUÇ**

Bu proje:

- Speaker detection
- Precise boundary selection
- Layered labeling
- Clean transcription
- Correct tag usage

üzerine kurulu.

---