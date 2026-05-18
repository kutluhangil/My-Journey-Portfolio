# SubSense - Subscription Tracker

Harika fikir — gerçekten kapsamlı ve yenilikçi bir proje düşünüyorsun! 🚀

Senin isteğine göre **AI’nin (ve geliştiricilerin) kolayca anlayacağı formatta, sistematik bir “site planı / yapı dokümanı”** hazırlayacağım.

Bu plan; sayfalar, veri akışı, kullanıcı işlevleri, veritabanı öğeleri ve ek özellikleri kapsayacak.

---

## **🌐 Website Adı (taslak):**

## **SubTrack Global**

**Amaç:**

Kullanıcıların tüm aboneliklerini merkezi bir yerden yönetebildiği, takip ettiği, arkadaşlarıyla kıyaslayabildiği, fiyat değişikliklerini görebildiği **ücretsiz, hesap tabanlı, global bir abonelik takip platformu.**

---

## **🧩 1. Ana Site Yapısı (Sayfa ve Bölümler)**

### **1.1. Giriş (Landing Page)**

- Basit, minimalist, modern tasarım (Apple tarzı beyaz boşluk + net tipografi)
- Slogan: “Tüm aboneliklerini tek yerden yönet.”
- CTA (Call To Action): “Ücretsiz Hesap Oluştur”
- Örnek görseller / ikonlar: Netflix, Spotify, Game Pass, YouTube Premium, Adobe, Amazon Prime, ChatGPT Plus, Canva Pro, vs.
- Diller: 🌐 Türkçe, İngilizce, Almanca, Fransızca, Japonca vb.
- Para birimi seçici (USD, EUR, TRY, GBP, JPY…)

---

### **1.2. Kullanıcı Hesabı (Authentication)**

- **Log In / Sign Up** (email + şifre)
- **OAuth (isteğe bağlı):** Google, Apple, GitHub ile giriş
- Profil oluşturma aşaması:
    - Profil fotoğrafı
    - Ad-soyad
    - Ülke
    - Para birimi
    - Zaman dilimi
    - Abonelik geçmişi (isteğe bağlı import)

---

### **1.3. Dashboard (Ana Panel)**

Ana kontrol merkezi.

**Bölümler:**

1. **Toplam Ödeme Özeti**
    - Aylık toplam, yıllık toplam, artış oranı grafiği (% değişim)
    - Abonelik sayısı, aktif / iptal edilenler
2. **Abonelik Listesi**
    - Arama + filtre (kategori, fiyat, popülerlik, ödeme yöntemi, ülke)
    - Her servis için:
        - Logo
        - Servis adı (Netflix, Spotify, vs.)
        - Fiyat (güncel, lokal para birimi)
        - Son ödeme tarihi
        - Yenileme tarihi
        - Fiyat değişim geçmişi (grafik veya tablo)
3. **Kıyaslama Ekranı**
    - Farklı ülkelerdeki fiyat karşılaştırması (örnek: TR vs US vs UK)
    - Kur farkı otomatik hesaplama (API ile canlı döviz kurları)
4. **Abonelik Ekle / Sil / Düzenle**
    - Servis seç (dropdown veya arama)
    - Plan seç (Basic, Premium, Family, vs.)
    - Fiyat (otomatik çek + manuel düzenlenebilir)
    - Ödeme periyodu (aylık, yıllık)
    - Hatırlatma (e-posta bildirimi)
5. **Abonelik Fiyat Güncellemeleri**
    - Global fiyat değişikliklerini otomatik listeleyen bir feed
    - “Netflix TR fiyatı %15 arttı” gibi bildirimler

---

### **1.4. Arkadaşlar / Sosyal Özellikler**

- Arkadaş ekleme (username / email ile)
- Arkadaş listesini görüntüleme
- Arkadaşların aboneliklerini görebilme (isteğe bağlı gizlilik ayarı)
- “Ortak abonelik” alanı (örnek: ikinizde de Spotify var → ortak listeye düşer)
- Profil istatistikleri:
    - En çok harcanan kategori (örnek: Entertainment %70)
    - Ortalama abonelik sayısı
    - Toplam yıllık harcama kıyaslaması

---

### **1.5. Analitik ve Tarihçe**

- Aylık / yıllık ödeme grafiği (bar chart, line chart)
- Harcama kategorileri (eğlence, oyun, tasarım, AI, üretkenlik)
- Abonelik geçmişi: başlama, iptal, fiyat değişiklikleri
- Veri dışa aktarma (CSV, Excel, PDF)

---

### **1.6. Ayarlar**

- Dil, para birimi, ülke seçimi
- Bildirim tercihleri (e-posta, push)
- Tema: Light / Dark / System
- Güvenlik: 2FA, şifre değişimi
- Hesap silme / veri temizleme

---

### **1.7. Admin Panel (İleri Seviye)**

> (Geleceğe dönük planlama)
> 
- Abonelik servisleri veritabanı yönetimi
- Yeni servis ekleme / silme
- API bağlantı yönetimi (örnek: Netflix fiyat API, currency API)

---

## **🧠 2. Veritabanı Model Taslağı**

**User Table**

- id, email, password_hash, name, country, currency, created_at, updated_at

**Subscription Table**

- id, name, category, base_price_usd, icon_url

**UserSubscription Table**

- id, user_id, subscription_id, plan_name, local_price, currency, payment_cycle, start_date, next_payment, active

**Friends Table**

- user_id, friend_id, status

**PriceHistory Table**

- subscription_id, date, old_price, new_price, currency, country

**Notification Table**

- id, user_id, type, message, read_status, created_at

---

## **🌍 3. Çoklu Dil ve Para Birimi Desteği**

- i18n altyapısı (örn: JSON dil dosyaları)
- Currency API entegrasyonu (güncel döviz kurları)
- Locale bazlı fiyat ve tarih formatlama

---

## **📈 4. Ek Özellikler (Opsiyonel / Gelecekte)**

- “AI Advisor” → harcamaları analiz edip optimizasyon önerisi verir.
- “Topluluk Fiyat Takibi” → kullanıcılar global fiyat farklarını raporlar.
- “Smart Reminder” → ödemeden önce AI tabanlı bildirim (örnek: “Bu ay 20% fazla harcadın, dikkat et”).

---

## **🧭 5. Teknoloji Önerileri (AI anlayacağı şekilde)**

- **Frontend:** React + Next.js + Tailwind CSS
- **Backend:** Node.js (Express / NestJS)
- **Database:** PostgreSQL / Supabase
- **Auth:** JWT / Firebase Auth
- **Hosting:** Vercel (Frontend) + Render / Railway (Backend)
- **API:** RESTful + CurrencyAPI, ExchangeRateAPI, SubscriptionsAPI
- **Multilingual:** i18next

---

İstersen bir sonraki adımda bu plana göre **sayfa bazlı wireframe (görsel düzen planı)** ya da **AI prompt formatında sistem akışı (örneğin: “Generate UI for Subscription Dashboard”)** çıkarabilirim.

---

🧩 **Devam Etmek İstersen:**

- Sayfa bazlı wireframe planı mı çıkarayım?
    
    yoksa
    
- Bu sistemin **AI prompt formatında (örneğin Antigravity’ye direkt verilecek teknik prompt)** halini mi hazırlayayım?

[**KODLARI BİTEN ARKADAŞLAR İÇİN REHBER:**](SubSense%20-%20Subscription%20Tracker/KODLARI%20B%C4%B0TEN%20ARKADA%C5%9ELAR%20%C4%B0%C3%87%C4%B0N%20REHBER%202f8673274a8e8028b4a4ffbb1d1044c0.md)

[Based on the review of the current codebase and implemented changes, here is the **Final Product Audit & Documentation**.](SubSense%20-%20Subscription%20Tracker/Based%20on%20the%20review%20of%20the%20current%20codebase%20and%20im%202f8673274a8e8071ad95c9adbdee91f0.md)

[**LOCAL PERSISTENCE — SADE VE NET ANLATIM**](SubSense%20-%20Subscription%20Tracker/LOCAL%20PERSISTENCE%20%E2%80%94%20SADE%20VE%20NET%20ANLATIM%202f8673274a8e80bab2c3f6928cad9d73.md)

[**GENEL YOL HARİTASI (Önce Bunu Anla)**](SubSense%20-%20Subscription%20Tracker/GENEL%20YOL%20HAR%C4%B0TASI%20(%C3%96nce%20Bunu%20Anla)%202f9673274a8e801ca780cafb6a7f4518.md)

[**FIRESTORE SECURITY RULES (MANUEL)**](SubSense%20-%20Subscription%20Tracker/FIRESTORE%20SECURITY%20RULES%20(MANUEL)%202f9673274a8e800dbbeed76bff6ee9c7.md)

[ **MASTER PROMPT**](SubSense%20-%20Subscription%20Tracker/MASTER%20PROMPT%202f9673274a8e8031b65ae1fdf3a72c5e.md)

[**GERİ SARALIM: BACKEND AŞAMALARI NEYDİ?**](SubSense%20-%20Subscription%20Tracker/GER%C4%B0%20SARALIM%20BACKEND%20A%C5%9EAMALARI%20NEYD%C4%B0%202f9673274a8e809884f6ec8d29fc3df1.md)

[**Stage 3.4 — Data Integrity, Guardrails & Consistency**](SubSense%20-%20Subscription%20Tracker/Stage%203%204%20%E2%80%94%20Data%20Integrity,%20Guardrails%20&%20Consisten%202f9673274a8e80c38c09fa257ef2fdd4.md)

[Subs. Logo](SubSense%20-%20Subscription%20Tracker/Subs%20Logo%202f9673274a8e80e1ad26edd4733c5df2.md)

[B U G S](SubSense%20-%20Subscription%20Tracker/B%20U%20G%20S%20302673274a8e80a79a97fd1ab145ecac.md)