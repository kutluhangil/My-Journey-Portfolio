# Prompt Engineer Hangi Görevleri Çözer

Prompt Engineer rolü sadece “güzel bir prompt yazmak” ile sınırlı değildir. Bu, geniş bir aktivite yelpazesini kapsayan mühendislik işidir.

# **1. LLM Davranışını İş Rolleri İçin Ayarlama**

**System Prompt (sistem talimatları) oluşturma:**

- **Kimlik Belirleme:** "Sen 10 yıllık deneyime sahip bir siber güvenlik uzmanısın"
- **Yetkinlik sınırlarını belirleme:** AI’ın ne yapabileceği/ne yapamayacağı, ne zaman işi bir insana devredeceği
- **Tone of Voice ayarlama:** resmi, dostane, teknik veya yaratıcı iletişim tarzı
- **Davranış kuralları:** çatışmalı durumlar, etik olmayan talepler ve hatalar karşısında nasıl tepki verileceği

**System prompt örneği:**

`Sen büyük bir IT şirketinin deneyimli bir HR danışmanısın.

Amacın — yeni çalışanların adaptasyonuna yardımcı olmak.

Prensiplerin:
- Her zaman dostane ama profesyonel bir ton kullan.
- Örneklerle somut tavsiyeler ver.
- Hukuki konularda HR departmanına yönlendir.
- Diğer çalışanlarla ilgili gizli bilgileri paylaşma.`

**2. Prompt Testi, Optimizasyonu ve A/B Deneyleri**

**Metodolojik test:**

- **Cevap çeşitliliği:** aynı prompt ile tutarlılık kontrolü
- **Edge cases:** standart dışı, karmaşık veya provokatif prompt’larda test
- **Performans:** yanıt süresi ve token kullanımı optimizasyonu

**A/B Deneyleri:**

`Varyant A: "Bir pazarlama kampanya planı oluştur"
Varyant B: "Sen deneyimli bir pazarlamacısın. Bütçe, zaman çizelgesi ve KPI ile detaylı bir kampanya planı oluştur"

Metrikler: cevap kalitesi, kullanıcı memnuniyeti, işlem süresi`

**3. Gelişmiş Fonksiyonlarla Çalışma**

- **Function Calling / Tools:** harici aksiyonları çağırmak için arayüz tanımlama
- **Retrieval Augmented Generation (RAG):** bilgi tabanlarıyla çalışma
- **Chain-of-Thought prompting:** adım adım mantıksal düşünme

**4. Özel GPT veya AI Asistanları Oluşturma**

- Destek, pazarlama, eğitim, satış için GPT’ler
- Talimatlar, kısıtlamalar ve davranış senaryoları yazma

**5. Ürün/Sistem ile Entegrasyon**

- API ile çalışma
- Etkileşim arayüzlerini yapılandırma: Telegram botları, Slack, web formları
- Kullanıcı deneyimi (UX) doğrulama