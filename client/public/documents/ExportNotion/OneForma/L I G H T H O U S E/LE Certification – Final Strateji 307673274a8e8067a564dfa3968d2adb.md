# LE Certification – Final Strateji

## **1️⃣ Önce Büyük Resmi Anla**

Her task’te sana şu soru soruluyor:

> “Are there any localization issues in the response?”
> 

Yani:

- Response target locale’a uygun mu?
- Native gibi mi?
- Başka ülke/language kokuyor mu?

İlk kararın:

- **No (no issues)**
- **Yes (issues present)**

Eğer EN KÜÇÜK localization problemi varsa → **YES seçmek zorundasın.**

---

# **2️⃣ Nasıl Düşüneceksin? (Zihinsel Checklist)**

Her response’ta şu sırayla kontrol edeceksin:

---

## **🔎 A. Yanlış ülke / yanlış bağlam var mı?**

### **Category:**

### **Unlocalized Information**

Sor kendine:

- Kullanıcı tr_TR ama cevap ABD sistemi mi anlatıyor?
- UK kullanıcıya IRS mi anlatılmış?
- Kanada kullanıcıya Avustralya Victoria mı anlatılmış?

👉 Eğer response başka ülkeye ait bilgi veriyorsa → YES + Unlocalized Information

---

## **🔎 B. Gereksiz aşırı lokal referans var mı?**

### **Category:**

### **Overly-localized Content**

Bu çok kritik.

- Kullanıcı genel soru sormuş ama cevap “Türkiye’de…” diye zorla bağlamış mı?
- Kanada’da zaten bilinen şeyi gereksiz açıklamış mı?
- Local kullanıcıya kendi ülkesini yabancı gibi mi anlatmış?

👉 Eğer locale aşırı vurgulanıyorsa → YES + Overly-localized Content

---

## **🔎 C. Yazım yanlışları var mı?**

### **Category:**

### **Spelling**

Artık eski guideline gibi “başka locale’da doğruysa sorun değil” yok.

Şimdi kural net:

> Target locale için yanlış olan her spelling localization issue’dur.
> 
- “colour” yerine “color” (locale’a göre yanlışsa)
- yazım hatası
- uydurma kelime

👉 Varsa → YES + Spelling

---

## **🔎 D. Dil tamamen yanlış mı?**

### **Category:**

### **Wrong Language**

- Cevap farklı dilde mi?
- Büyük kısmı başka dil mi?
- İngilizce locale’da Çince cevap mı?

⚠️ Önemli:

Loanwords (cul-de-sac, entrepreneur gibi) kabul.

Ama:

Response büyük oranda yanlış dildeyse → kritik hata.

👉 YES + Wrong Language

---

## **🔎 E. Birim hatası var mı?**

### **Category:**

### **Units of Measurement**

Kontrol et:

- TL yerine USD
- Fahrenheit yerine Celsius (locale’a göre)
- Pound yerine kilo
- Mil yerine km

Locale için yanlışsa → YES + Units of Measurement

---

## **🔎 F. Yanlış kelime tercihi var mı?**

### **Category:**

### **Vocabulary**

Örnek:

- UK’da “soccer” yerine “football”
- TR için kültürel olarak tuhaf kelime

👉 Locale’a uygun değilse → YES + Vocabulary

---

## **🔎 G. İfade doğal mı?**

### **Category:**

### **Awkward / Unnatural Writing**

Bu çok sorulur.

Sor:

- Native biri böyle yazar mı?
- Dil mekanik mi?
- Çeviri kokuyor mu?

Gramer doğru olsa bile native değilse → YES + Awkward writing

---

## **🔎 H. Gramer hatası var mı?**

### **Category:**

### **Grammar**

Artık yeni guideline:

> Locale için yanlış olan her grammar hatası localization issue’dur.
> 
- Zaman hatası
- Ek hatası
- Native kullanım dışı yapı

👉 Varsa → YES + Grammar

---

## **🔎 I. Ton uygun mu?**

### **Category:**

### **Tone**

- Fazla kaba mı?
- Aşırı samimi mi?
- Stereotypical mı?
- Profesyonel olması gerekirken gayri resmi mi?

Locale kültürüne tersse → YES + Tone

---

## **🔎 J. Noktalama / format hatası var mı?**

### **Category:**

### **Formatting & Punctuation**

- Tarih formatı yanlış mı?
- Virgül / nokta hatalı mı?
- Spacing bozuk mu?
- Tırnak işaretleri yanlış mı?

👉 Varsa → YES + Formatting & Punctuation

---

## **🔎 K. Non-local Perspective**

Bu biraz ince.

Model locale içindeymiş gibi mi konuşuyor?

Örneğin:

- “In Australia, your country…” gibi garip bir dış bakış

Locale perspektifi dışarıdan anlatıyorsa → YES

---

# **3️⃣ Önemli: NEYE BAKMAYACAKSIN?**

Bu kritik.

🚫 Factual accuracy bakmıyorsun

🚫 Instruction following bakmıyorsun

🚫 İçerik kaliteli mi bakmıyorsun

🚫 Mantık doğru mu bakmıyorsun

Sadece localization.

---

# **4️⃣ YES seçtiğinde ne yapacaksın?**

✔️ Tüm ilgili kategorileri işaretle

✔️ Birden fazla seçebilirsin

✔️ Comment İngilizce yazılmalı

✔️ Net, kısa ve teknik yaz

Örnek comment mantığı:

> The response refers to US tax system (IRS), which is not relevant for the target locale (UK). Therefore, it contains unlocalized information.
> 

---

# **5️⃣ Zaman Stratejisi**

15–20 task var.

1 saat sürmesi bekleniyor.

Sen şöyle yap:

- İlk 2 task’te çok yavaş ol
- Beynini kategori sistemine alıştır
- Sonrakiler hızlanır

Ama:

⚠️ Skip yok.

⚠️ Submit ettikten sonra geri dönüş yok.

---

# **6️⃣ Altın Kural**

Her task’te kendine şunu sor:

> Eğer bu model gerçekten tr_TR için tasarlanmış olsaydı, bu cevabı böyle mi yazardı?
> 

Cevap:

- Evet → NO issues
- Hayır → YES + kategori seç

---

# **7️⃣ LE’nin Asıl Test Ettiği Şey**

Seni şunun için test ediyor:

- Native misin?
- Locale hassasiyetin var mı?
- Kültürel farkı ayırt edebiliyor musun?
- Dil doğal mı anlıyor musun?

---

# **🎯 Final Mental Model**

LE = “Bu cevap native kullanıcıyı rahatsız eder mi?”

Eğer:

- Ülke yanlış
- Dil yapay
- Kelime hatalı
- Birim yanlış
- Ton kültüre ters

→ Localization issue var.

---

Şimdi hazırım.

Örnek soruları at.

Her birini birlikte adım adım çözeceğiz.