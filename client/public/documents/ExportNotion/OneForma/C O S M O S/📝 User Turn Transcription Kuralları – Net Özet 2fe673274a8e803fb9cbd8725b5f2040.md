# 📝 User Turn Transcription Kuralları – Net Özet

---

## **1️⃣ Genel Transkripsiyon Kuralları**

### **✅ Post-ITN Format (EN ÖNEMLİ KURAL)**

- **Nasıl söylenmiş gibi değil, yazıda nasıl görünüyorsa öyle yaz**
- Sayıları, saatleri, tarihleri **normalize et**

**Örnek**

- Konuşma:
    
    *“from nine to nine thirty”*
    
- Transkripsiyon:
    
    **from 9 to 9:30**
    

---

### **🌍 Lokal Trigger Phrase**

- Invocation için **lokale uygun tetik** kullanılmalı
- **tr_TR → “hey Siri”**

Yanlış / farklı dil varsa:

- Invocation’da **Another Phrase** seçilir

---

### **🚫 Konuşma Dışı Sesleri Yazma**

**ASLA transkribe edilmez:**

- gülme
- öksürme
- geğirme
- dudak sesi
- öpme sesi
- anlamsız ses efektleri

👉 Metinden **tamamen sil**

---

### **🚫 Pause & Filler Transkribe Etme**

- “uh”, “um”, “eee”, duraksamalar **YAZILMAZ**

**Örnek**

- Konuşma:
    
    *“save it, uh, in photos and um add music”*
    
- Transkripsiyon:
    
    **save it in photos and add music**
    

---

### **❓ Emin Değilsen**

- **Transcription Convention PDF**’e bak
- Kafadan yorumlama yapma

---

## **2️⃣ Emin Olunmayan / Yarım Kalan Konuşmalar**

Bu projede **2 özel tag** var:

### **🟨 [unsure: ]**

### **🟥 [truncated: ]**

⚠️ **İkisi de uygunsa → her zaman [truncated:] kullan**

---

## **🟨 [unsure: ] Ne Zaman Kullanılır?**

**Anlam var ama emin değilsen**

Kullan:

- mırıltı
- düşük ses
- arka plan gürültüsü
- bozuk ses
- yazımı emin olunmayan kelime

Kurallar:

- Tahmin edebiliyorsan → **içine yaz**
- Hiç tahmin edemiyorsan → **boş bırak**

**Örnek**

```
[unsure: playlist]
```

---

## **🟥 [truncated: ] Ne Zaman Kullanılır?**

**Kelime veya cümle yarım kalmışsa**

Kullan:

- cümle ortasında kesilme
- kelime yarım söylenmişse
- ses aniden bitmişse

**Örnek**

```
[truncated: play my]
```

---

## **🧠 Özel Kurallar (QA’da Çok Sorulur)**

### **✔️ Hangisi Öncelikli?**

- Hem emin değil + yarım → **[truncated:]**

---

### **✔️ Tüm Cümle Anlamsızsa**

- Konuşmanın **%50’den fazlası anlamsızsa**

```
[unsure: ]
```

---

### **✔️ Yanlış Dil Konuşuluyorsa**

- Locale dışı dil →

```
[unsure: ]
```

---

### **✔️ Tek Kelime Yabancıysa**

- Sadece o kelimeyi tag’le

```
play [unsure: canción] please
```

---

### **✔️ Uydurma / Anlamsız Kelime**

- [unsure:] ile işaretle

---

### **✔️ Noktalama Emin Değilsen**

- Noktalama işaretini bile tag’leyebilirsin

```
what time is it[unsure:?]
```

---

## **🔍 Verilen Örnek Açıklaması**

**Ses:**

```
“hey Siri _____ a jo-”
```

**Doğru Transkripsiyon:**

```
hey Siri [unsure: tell me] [truncated: BTS.] [truncated: joke.]
```

📌 Çünkü:

- İlk kısım net değil → unsure
- Son kısım yarım → truncated

---

## **🎯 Altın QA Kuralları**

- Filler & pause **ASLA yazılmaz**
- Duyduğunu değil **gösterimdeki halini** yaz
- Emin değilsen → tag kullan
- Tahmin varsa yaz, yoksa boş bırak
- Yarım her zaman **truncated**

---

Tamam 👍

Bunu **not alabileceğin, sade ve QA-odaklı** şekilde özetliyorum.

---

## **🟥 [truncated: ] Tag – Kısa ve Net Notlar**

### **📌 Ne Zaman Kullanılır?**

Bir **kelime veya ifade ses kaydının BAŞINDA ya da SONUNDA net şekilde kesilmişse**.

Yani:

- Cümle **yarım başlamışsa**
- Cümle **yarım bitmişse**
- Kelime **tam söylenmeden kesilmişse**

---

### **✅ Kullanım Kuralları**

- **Sadece ilk veya son kelime(ler)** için kullanılır
- Ortadaki kesintiler için **kullanılmaz**
- Konuşma **tam duyuluyorsa**, devam edecek gibi hissettirse bile **truncated KULLANMA**

---

### **❌ Ne Zaman Kullanılmaz?**

- Kelime net ve tamamlanmışsa
- Sadece “devam edecekti gibi” hissi varsa ama kesilme yoksa

---

### **🟨 Truncated ama Anlaşılamıyorsa**

- Kelime **hem kesilmiş hem de anlaşılamıyorsa**

```
[truncated: ]
```

(boş bırakılır)

---

### **⚠️ Öncelik Kuralı (ÇOK ÖNEMLİ)**

Bir kelime:

- Hem **emin değil**
- Hem **kesilmişse**

👉 **HER ZAMAN [truncated:] kullanılır**

([unsure:] kullanılmaz)

---

## **✍️ Noktalama Kuralları**

### **✔️ Noktalama Netse**

- Noktalama işaretini de **[truncated:] içine al**

**Örnek**

```
[truncated: BTS.]
```

---

### **❓ Noktalama Emin Değilse**

- Noktalama için **[unsure:]** kullan

**Örnek**

```
[unsure:?]
```

---

## **🎧 Verilen Örnek Açıklaması**

**Ses:**

```
“hey Siri play Life Goes On by B-”
```

**Doğru Transkripsiyon:**

```
hey Siri play Life Goes On by [truncated: BTS.]
```

📌 Çünkü:

- “BTS” kelimesi **yarım kesilmiş**
- Ne olacağı belli → BTS
- Cümle bitiminde nokta net → truncated içine alındı

---

## **🧠 QA için Altın Kurallar**

- Kesilmiş = **truncated**
- Emin değil ama kesilmiş = **truncated**
- Emin değil ama kesilmemiş = **unsure**
- “Devam edecekti gibi” hissi **önemli değil**
- Sadece **duyulan** şeye bak

---