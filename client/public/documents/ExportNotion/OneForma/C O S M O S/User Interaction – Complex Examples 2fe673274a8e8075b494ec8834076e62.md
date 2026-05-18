# User Interaction – Complex Examples

---

## **🔑 ANA KURAL**

**Trigger duyulduğu anda segment başlar ve yeni bir trigger gelene kadar olan HER ŞEY tek segmenttir.**

---

## **✅ TEK SEGMENT olarak işaretlenecek durumlar**

### **1️⃣ Alakasız komutlar + sohbet (chit-chat)**

- Kullanıcı Siri’ye bir komut verir
- Araya **alakasız sohbet** girer
- Sonrasında **trigger’sız yeni bir Siri isteği** gelir

📌 **Hepsi tek segmenttir.**

➡️ Konu değişimi **segment bölme sebebi değildir**.

---

### **2️⃣ Komut + alakasız konuşma (follow-up olsa da olmasa da)**

- Komuttan sonra:
    - Kullanıcı kendi kendine konuşur
    - Başkasıyla sohbet eder
- Ardından:
    - Yeni ama trigger’sız bir Siri isteği olabilir

📌 **Hepsi tek segmenttir.**

---

### **3️⃣ Komut → sessizlik → Siri bip sesi**

- Kullanıcı komut verir
- Uzun sessizlik olur
- Siri yalnızca **bip / ton** verir

📌 **Segment bip bitene kadar devam eder.**

❗ Bipten önce kesmek = **QA FAIL**

---

## **🧠 NEDEN BÖLMÜYORUZ?**

- Konu değişimi önemli değil
- Sohbet normal
- Sessizlik normal
- Siri’nin bip sesi **yanıtın parçası**

➡️ **Gerçek hayattaki doğal konuşma böyle.**

---

## **❌ ASLA segment bölme sebebi OLMAYANLAR**

- Konu değişti
- Kullanıcı sohbet etti
- Başkası konuştu
- Sessizlik oldu
- Siri sadece bip verdi

---

## **🟢 DAHİL EDİLECEKLER**

- Ana komut
- Trigger’sız follow-up istekler
- Alakasız sohbetler
- Kullanıcı + bystander konuşmaları
- Sessizlik
- Siri konuşmaları / bip / ton

---

##