# Strateji: Global + Türkiye

## **🎯 Konumlandırma**

Ana marka dili: **İngilizce**

İkinci dil: Türkçe

Neden?

- Remote job arayan Türk developer → İngilizce CV hazırlıyor
- Global kullanıcı → İngilizce kullanıyor
- Türkiye pazarı → ilk traction için iyi test alanı

Yani ürün:

> Built for remote tech roles — usable globally.
> 

---

# **🧠 Ürün Konsepti (Netleşmiş Versiyon)**

## **✨ Remote Tech Resume Optimizer**

Kullanıcı:

1. CV yükler / yapıştırır
2. Remote job description yapıştırır
3. Sistem:
    - 🌍 Remote-specific keyword analizi yapar
    - 💻 Tech skill eşleşmesi yapar
    - 📊 ATS match score verir
    - ✍️ CV’yi optimize eder
    - 🧠 “Remote readiness” feedback verir

---

# **🧮 ATS Skoru + Remote Skoru**

Sadece keyword match yapmayacağız.

İki ayrı skor verebiliriz:

### **1️⃣ Tech Match Score**

Skill & keyword uyumu

### **2️⃣ Remote Readiness Score**

Şunları kontrol eder:

- Async communication
- Time zone collaboration
- Git workflow
- Documentation habits
- Self-management

Bu seni diğer CV tool’lardan ayırır.

---

# **🌐 Çok Dilli Mimari (Bunu Doğru Kuruyoruz)**

Frontend tarafında:

### **React + i18n**

Önerim:

- react-i18next

Structure:

```
/locales
  /en
    translation.json
  /tr
    translation.json
```

App başlangıcında:

- Tarayıcı dili detect
- Kullanıcı manuel değiştirebilir

---

# **🏗️ Backend Dilde Ne Yapacak?**

Backend:

- Kullanıcı dilini request header’dan alır
- OpenAI prompt’una dili ekler

Örneğin:

```
Rewrite this resume in English tailored for a remote tech job.
```

veya

```
Bu CV’yi uzaktan çalışan yazılım geliştirici rolüne göre optimize et.
```

---

# **💰 Monetization Stratejisi (Çok Önemli)**

Türkiye fiyatı ile global fiyatı aynı olamaz.

Önerim:

- Global fiyat: USD
- Türkiye için lokal fiyat (daha uygun)

Örneğin:

| **Plan** | **Global** | **Türkiye** |
| --- | --- | --- |
| 10 optimize | $5 | ₺99 |
| 50 optimize | $15 | ₺249 |

Stripe ile ülkeye göre pricing yapılabilir.

---

# **🖥️ Dashboard Feature Fikirleri**

MVP + biraz premium hissi:

- Optimize history
- Skor grafiği
- CV improvement progress
- “Top missing keywords” chart

Portfolio etkisi ↑

---

# **🚀 Positioning Cümlesi (Landing Page İçin)**

> Optimize your resume for remote tech jobs with AI-powered ATS simulation and remote-readiness scoring.
> 

Türkçe:

> CV’nizi uzaktan yazılım işleri için optimize edin. AI destekli ATS simülasyonu ve remote uyumluluk analizi.
> 

---

# **🔥 Sana Kritik Ürün Kararı**

Bu tool:

1️⃣ Sadece paste alanı mı olacak?

2️⃣ PDF upload da destekleyecek mi?

PDF upload:

- Daha profesyonel
- Ama parsing zorluğu var

MVP için paste alanı daha hızlı.

---

Şimdi product owner moduna giriyoruz 😄

Başlangıç MVP için:

- Sade UI + paste alanı mı?
- Yoksa biraz premium dashboard havası mı?

Kararına göre ilk sprint planını çıkaracağım.