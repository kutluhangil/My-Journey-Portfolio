# LE LOCALIZATION – GERÇEK ÇÖZÜM MANTIĞI

Bu sertifikada biz şunu değerlendiriyoruz:

> Response, target locale için “native gibi” mi?
> 

Sadece buna bakıyoruz.

---

# **1️⃣ İlk Karar: YES mi NO mu?**

Soru:

> Are there any localization issues in the response?
> 

### **Eğer tek bir localization problemi varsa:**

→ YES

### **Hiçbir localization problemi yoksa:**

→ NO

Ama kritik nokta şu:

Localization ≠ kalite

Localization ≠ doğruluk

Localization ≠ instruction following

---

# **2️⃣ Localization Nedir? (Guideline’a göre)**

Localization şu alanları kapsar:

- Dil varyantı
- Yazım standardı
- Kültürel perspektif
- Para birimi / ölçü birimi
- Deyim / ifade
- Format (tarih, noktalama)
- Doğallık

---

# **3️⃣ Şimdi 13 kategoriyi netleştiriyoruz**

## **1. Unlocalized Information**

Yanlış locale’e ait bilgi verilmiş.

Örnek:

- en_GB user → IRS önerilmiş
- en_CA user → Victoria (Australia) anlatılmış

Burada kritik:

> Model yanlış ülkeyi referans alıyor.
> 

---

## **2. Over-localized Content**

Gereksiz yere locale’e fazla odaklanma.

Örnek:

User genel kitap listesi istiyor

Assistant sadece Canadian authors veriyor.

Locale var ama gereksiz daraltılmış.

---

## **3. Spelling**

Şunları kapsar:

- Typos
- Wrong variant (favourite vs favorite)
- Uydurma kelime
- Locale standardına uymayan yazım

Önemli:

> İngilizce varyant farkları localization hatasıdır.
> 

---

## **4. Non-local Perspective**

Yanlış perspektif.

Örnek:

Australian user → “In the US…” ile cevap başlıyor.

Model, user’ın locale’ini merkez almıyor.

---

## **5. Units of Measurement**

- USD vs GBP vs AUD
- Celsius vs Fahrenheit
- Date format

Eğer locale’e uygun değilse işaretlenir.

Ama:

Bazı durumlarda açıklama zorunludur → localization hatası değildir.

---

## **6. Vocabulary**

Kelime seçimi locale’e uygun değil.

Örnek:

British English yerine American English kullanımı.

---

## **7. Phrase or Idiom**

Deyimlerin literal çevirisi

Yanlış kültürel kullanım

---

## **8. Wrong Language**

Locale tr_TR ama response English.

Direkt YES.

---

## **9. Grammar**

Locale grammar hatası varsa işaretle.

Ama:

Eğer sadece factual hata varsa → localization değil.

---

## **10. Tone**

Kültürel ton uyumu.

Örnek:

Aşırı resmi ya da aşırı samimi kullanım.

---

## **11. Awkward / Unnatural Writing**

Bu çok kritik.

Native gibi durmayan, çeviri kokan cümleler.

LE’de sık çıkar.

---

## **12. Formatting & Punctuation**

- Date format
- Quote style
- Virgül kullanımı

Locale standardına uymuyorsa işaretle.

---

## **13. Other**

Yukarıdakilere girmeyen ama bariz localization sorunu.

---

# **4️⃣ Transcript’ten En Kritik Cümle**

> You only care about localization.
> 

Yani:

- Tarih yanlış mı? Umursama.
- İçerik eksik mi? Umursama.
- Talimatı takip etmiş mi? Umursama.
- Bilgi yanlış mı? Umursama.

Sadece:

> Locale’e uygun mu?
> 

---

# **5️⃣ Çözüm Sırası (Gerçek Sınavda Uygula)**

Her task’te:

1. Locale ne?
2. Response dili doğru mu?
3. Perspektif doğru mu?
4. Para/ölçü doğru mu?
5. Yazım doğru varyant mı?
6. Doğal mı?

Sonra karar ver.

---

# **6️⃣ Kritik İnce Noktalar (Görsellerden Çıkan)**

### **🔹 Bazen para birimi belirtilmemesi hata değildir.**

Örneğin:

Australian user için dolar yazmak yeterli olabilir.

Ama:

USD yazıp belirtmek gereksizse → over-localized olabilir.

---

### **🔹 Bazen açıklama yapılması gerekir.**

Örneğin:

AUD vs USD sorusunda spesifik belirtmek localization hatası değildir.

---

### **🔹 Locale’e ait bir bayramı açıklamak over-localization olabilir.**

User zaten o locale’den.

---

# **7️⃣ En Büyük Tuzak**

Over-localized vs Non-local Perspective karışır.

Kural:

- Yanlış ülke bilgisi → Unlocalized
- Gereksiz locale vurgusu → Over-localized
- Perspektif yanlış merkez → Non-local Perspective

---

# **8️⃣ Karar Verirken Kendine Sor**

> Bu cevap gerçekten bu ülke için yazılmış gibi mi?
> 

Eğer:

- Evet → NO
- Hayır → YES + kategori

---

Şimdi ikinci mesajı at.

Hepsini birleştirip final çözüm stratejisini netleştireceğiz.

Sonra örnek çözeceğiz.