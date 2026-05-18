# Cumhuriyet Apartmanı Yönetim Uygulaması

## Proje Tanımı

Cumhuriyet Apartmanı için geliştirilecek minimalist bir apartman yönetim web uygulamasıdır.

Uygulama yalnızca apartman yöneticisi ve sistem yöneticisi (admin) tarafından veri girişine izin verecek şekilde tasarlanacaktır.

Apartman sakinleri uygulamaya giriş yapmadan da gelir-gider, faturalar ve toplantı kayıtlarını görüntüleyebilecektir.

Tasarım dili minimalist, sade ve modern olacaktır. Görsel stil olarak Apple web sitesi tasarım anlayışı referans alınacaktır.

---

# Temel Özellikler

## 1. Landing Page

Landing page apartman hakkında genel bilgileri içerecektir.

### İçerik

- Apartman adı: Cumhuriyet Apartmanı
- Minimal ve modern tasarım
- Gri tonlarında renk paleti
- Responsive tasarım (mobil ve masaüstü)

---

## Landing Page Bölümleri

### 1. Hero Section

- Başlık: Cumhuriyet Apartmanı
- Modern tipografi
- Minimal tasarım
- Büyük başlık ve sade arka plan

---

### 2. Zaman Tüneli (Timeline)

Apartmanın yıllara göre gelişimini gösteren bir bölüm olacaktır.

Timeline görsel olarak yatay veya dikey bir çizgi şeklinde tasarlanacaktır.

Her yıl için aşağıdaki bilgiler gösterilecektir:

- Toplanan toplam gelir
- Yapılan giderler
- Apartmanda yapılan çalışmalar
- Önemli gelişmeler

### Örnek Timeline

2024

- Apartman inşa edildi
- İlk yönetim oluşturuldu
- Aidat sistemi kuruldu

2025

- Asansör bakım sistemi kuruldu
- Ortak alan düzenlemeleri yapıldı
- Gelir gider kayıt sistemi oluşturuldu

2026

- Güncel gelir gider verileri
- Apartmanda yapılan yenilikler

---

### 3. Before / After Bölümü

Apartmanda yapılan bazı yenilemeler için:

- Önce / Sonra görselleri
- Yapılan işlerin açıklaması

Örnek:

- Bahçe düzenlemesi
- Giriş kapısı yenilemesi
- Ortak alan düzenlemesi

---

### 4. Footer

Sayfanın en altında ortalanmış şekilde animasyonlu bir yazı bulunacaktır:

Kutluhan Gül tarafından hazırlanmıştır

Bu yazı minimal bir animasyon ile gösterilecektir.

---

# Kullanıcı Rolleri

Sistemde iki rol olacaktır.

---

## 1. Yönetici (Manager)

Apartman yöneticisi sistemi aktif olarak kullanacaktır.

### Yetkileri

- Aidat ekleme
- Aidat ödeme durumunu güncelleme
- Gelir gider ekleme
- Fatura ekleme
- Toplantı oluşturma
- Toplantı notu ekleme

### Yönetici Hesabı

İsim:

Murat Ataç

Rol:

manager

---

## 2. Admin

Sistemin teknik yöneticisi.

### Yetkileri

- Tüm verilere erişim
- Yönetici hesabını yönetme
- Sistem ayarlarını değiştirme

### Admin Hesabı

İsim:

Kutluhan Gül

Rol:

admin

---

# Apartman Bilgileri

Apartmanda toplam 18 daire bulunmaktadır.

---

# Daire Listesi

| Daire | İsim |
| --- | --- |
| 1 | Turgut IRMAK |
| 2 | GÖZDE BARIK |
| 3 | Hakan ÇAKIR |
| 4 | İLYAS GÜLERYÜZ |
| 5 | A.Tahir ALTINSOY |
| 6 | R. Tolunay GENÇ |
| 7 | Hanife ŞEKER |
| 8 | Kutluhan GUL |
| 9 | SEVGİ AKKURT |
| 10 | BORA DENIZ |
| 11 | Bugra ÇAKIR |
| 12 | KALI YAPI |
| 13 | Murat ATAÇ |
| 14 | Basri GÜZER |
| 15 | Ebru Yeğin |
| 16 | KALI YAPI |
| 17 | KALİ YAPI |
| 18 | Bahtiyar TURAN |

Not:

"KALI YAPI / KALİ YAPI" olan daire sahipleri kesin olarak bilinmemektedir.

Bu nedenle geçici olarak bu şekilde kayıt edilmiştir.

---

# Yönetim Paneli

Yönetim paneli sadece login olmuş kullanıcılar tarafından erişilebilir olacaktır.

Giriş sistemi basit tutulacaktır.

### Login Sistemi

Giriş alanları:

- Email
- Şifre

Not:

- Google login kullanılmayacak
- Apple login kullanılmayacak
- Sadece sistem kullanıcıları giriş yapabilecek

---

# Panel Modülleri

## 1. Aidat Yönetimi

Yönetici aşağıdaki işlemleri yapabilir:

- Aidat oluşturma
- Aidat tutarı belirleme
- Aidat ödeme durumunu işaretleme

Her daire için aşağıdaki durum tutulacaktır:

- Ödendi
- Ödenmedi

Ayrıca şu bilgiler de tutulabilir:

- ödeme tarihi
- ödeme notu

---

## 2. Gelir / Gider Yönetimi

Apartman gelir ve giderleri burada tutulacaktır.

### Gelir

Örnek:

- Aidatlar
- Ek ödemeler

### Gider

Örnek:

- Elektrik faturası
- Su faturası
- Temizlik giderleri
- Asansör bakımı
- Tamirat giderleri

Her gider için aşağıdaki bilgiler tutulacaktır:

- açıklama
- tarih
- tutar
- fatura dosyası

---

## 3. Fatura Sistemi

Yönetici gider eklerken fatura yükleyebilecektir.

Desteklenen dosya türleri:

- PDF
- JPG
- PNG

Apartman sakinleri bu faturaları görüntüleyebilecektir.

---

## 4. Toplantı Paneli

Apartman toplantıları kayıt altına alınacaktır.

Her toplantı için:

- tarih
- saat
- katılan daire sayısı
- toplantı notları
- alınan kararlar
- yapılması gereken işler

Toplantı geçmişi sistemde saklanacaktır.

---

# Tasarım Kuralları

Tasarım prensipleri:

- Minimalist
- Modern
- Apple tarzı
- Fazla renk kullanılmamalı
- Temiz tipografi
- Bol boşluk kullanımı

---

## Renk Paleti

Önerilen renkler:

#111111

#333333

#666666

#f5f5f5

#ffffff

---

# Teknik Hedef

Uygulama aşağıdaki cihazlarda sorunsuz çalışmalıdır:

- Mobil
- Tablet
- Masaüstü

Responsive tasarım zorunludur.

---

# Gelecek Özellikler

İlerleyen versiyonlarda eklenebilecek özellikler:

- Duyuru sistemi
- Apartman mesajlaşma sistemi
- Online aidat ödeme
- PDF rapor oluşturma
- SMS / WhatsApp bilgilendirme
- Grafiksel gelir gider raporu
- Apartman bakım planı
- Bildirim sistemi

---

# Proje Durumu

Bu proje ilk etapta temel apartman yönetimi ihtiyaçlarını karşılamak amacıyla geliştirilecektir.

İlerleyen aşamalarda yeni özellikler eklenebilir.