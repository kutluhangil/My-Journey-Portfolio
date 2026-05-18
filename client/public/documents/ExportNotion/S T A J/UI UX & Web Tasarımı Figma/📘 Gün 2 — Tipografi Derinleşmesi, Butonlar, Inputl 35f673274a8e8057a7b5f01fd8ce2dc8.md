# 📘 Gün 2 — Tipografi Derinleşmesi, Butonlar, Inputlar, İkonlar & Figma’ya Giriş

> **Hafta 1 — UI/UX & Web Tasarımı: FigmaEğitmen:** Meltem Turan (PNC Group)
**Süre:** 120 dk + soru-cevap
**Gün 2’nin Akışı:** Font telif hakları → Real-time colors → Type scale & line-height → Karakter sayısı → Butonlar (anatomi, tipler, state’ler, boyutlar) → Inputlar → Spacing & optik hizalama → İkonlar (SVG, evrensellik) → Figma arayüzü, frame, constraints, prototype giriş.
> 

---

## 📅 Haftanın Geri Kalanı

| Gün | Konu |
| --- | --- |
| **Salı (Bugün)** | Butonlar, inputlar, ikonlar, Figma temel araçları |
| **Çarşamba** | Tipografi (derin) + Auto Layout |
| **Perşembe** | Component, Variant |
| **Cuma** | Proje yapımı + Prototype |

---

## 1) Font Telif Hakları (1. Gün’den Devam)

Dün konuştuğumuz font davası mevzusu için detaylı bir araştırma kaynağı.

### 1.1 Font Kaynakları — Risk Karakteri

| Kaynak | Karakter | Risk |
| --- | --- | --- |
| **Google Fonts** | Açık kaynak (OFL/Apache lisansı) | ✅ Düşük |
| **DaFont** | Topluluk yüklemesi, stilize fontlar | ⚠️ Değişken — fonta göre |
| **Adobe Fonts** | Lisanslı | ✅ Adobe aboneliği varsa düşük |
| **Marka fontları** (Adobe Clean, Amazon Ember, Coca-Cola) | Spesifik markaya ait | ❌ Yüksek |

### 1.2 Lisans Kontrol Yöntemi

1. Fontu indirdiğinde ZIP içindeki `LICENSE.txt` ve `README.txt` dosyalarını oku.
2. `Free for personal use only` → ticari kullanım yasak (freelance/müşteri projesi dahil!).
3. `OFL (Open Font License)` veya `Apache 2.0` → ticari kullanım serbest.
4. Bazı fontlar yayıncıya mail atılmasını şart koşar — mailde projeyi anlat, yazılı izin al.

### 1.3 Pratik Risk Kontrol Araçları

| Araç | URL | Ne Yapar? |
| --- | --- | --- |
| **lipi.ai** | lipi.ai | Font ismi veya URL ver, risk skorunu yeşil/sarı/kırmızı olarak verir |
| **FontDrop** | fontdrop.info | `.ttf/.otf` dosyasını sürükle bırak, lisans bilgisi gösterir |
| **Font Converters** | Google’da ara | Font formatı dönüşümü + lisans okuma |

> 🧪 **Hoca’nın test sonuçları (lipi.ai’da):**
- Montserrat → ✅ Düşük risk
- IBM Plex Mono → ⚠️ Yüksek risk
- Adobe Clean → ❌ Yüksek risk
- Klasik sans-serif aile (Inter, Roboto, Open Sans) → ✅ Genellikle güvenli
> 

### 1.4 Anahtar Çıkarım

> ⚠️ **Freelance / müşteri projelerinde:** Müşteri spesifik bir font istiyorsa, lisansı önceden kontrol et. Sözleşmeye “font lisansından müşteri sorumludur” maddesi eklemek koruyucu olur (Hüseyin Bey’in dava deneyimi bunu doğruluyor).
> 

> ✅ **Güvenli seçim:** Google Fonts → çoklu ağırlığı olan sans-serif → Montserrat, Inter, Roboto, Open Sans, Poppins.
> 

---

## 2) Real Time Colors — Renk Paletini Canlı Test Etme

> 🌐 **realtimecolors.com**
> 

Renk paletinin bir UI üzerinde **gerçek nasıl görüneceğini** gösteren araç. Sadece swatch’a bakmak yanıltıcıdır, bunun yerine canlı bir mock UI’da deneyimlersin.

### Nasıl Kullanılır?

```
1. Site açılır → 4 renk slotu görürsün:
   • Text     (tipografi rengi)
   • Background (sayfa arka planı)
   • Primary  (ana CTA)
   • Secondary
   • Accent   (vurgu)

2. Her slota hex kodunu gir.

3. Sağ üstten Dark / Light mode arası geçiş yap.

4. Export → CSS variables, Tailwind config, hex, RGB,
   shade tones (50-900) hepsi alınır.

5. Figma plugin: "Real Time Colors" — paleti
   doğrudan Figma'ya color style olarak import eder.
```

### Neden Önemli?

Bir renk **tek başına** güzel görünebilir, ama:
- Buton ile arka plan arasında okunmuyor olabilir
- Dark mode’da kontrast bozuluyor olabilir
- Primary, secondary’i bastırıyor olabilir

Real-time colors bunları **tasarıma girmeden** görmeni sağlar.

> 💻 **Frontend bağlantısı:** Export ettiğinde CSS variables (`--color-primary: #...`) olarak verir. Bu doğrudan Tailwind config’e veya CSS custom properties’e yapıştırılabilir.
> 

---

## 3) Tipografi — Derinleşme

### 3.1 Type Scale (Tipografik Ölçek)

> 🌐 **typescale.com** — Bir base font size belirle, scale ratio seç, otomatik H1-H6 hiyerarşisi üretir.
> 

| Scale | Oran | Karakter |
| --- | --- | --- |
| **Minor Second** | 1.067 | Çok yakın boyutlar, sıkı |
| **Major Second** | 1.125 | Klasik, web için yaygın |
| **Minor Third** | 1.200 | Dengeli |
| **Major Third** | 1.250 | Etkili hiyerarşi |
| **Perfect Fourth** | 1.333 | Güçlü dramatik |
| **Golden Ratio** | 1.618 | Çok dramatik, editorial |

### 3.2 Mobil için Önerilen Boyutlar

```
┌─────────────────────────────────────────┐
│ H1 (Display)    32-40 px   Bold/SemiBold│
│ H2              24-28 px   SemiBold     │
│ H3              20-22 px   SemiBold     │
│ H4              18-20 px   Medium       │
│ Body            16 px      Regular      │  ← baz
│ Caption/Label   12-14 px   Regular      │
│ Micro           10-11 px   ⚠️ kaçın     │
└─────────────────────────────────────────┘
```

### 3.3 Kritik Kurallar

| Kural | Açıklama |
| --- | --- |
| **Minimum body 14px** (mobil) | 12px altı erişilebilirlik açısından kabul edilmez |
| **Body’den küçük başlık olmaz** | H3 = body olabilir ama weight ile ayrılır (semibold) |
| **Aynı sayfada maksimum 4 farklı font size** | Daha fazlası görsel kaos |
| **Hiyerarşi sadece boyutla değil** | Weight + line-height + color birlikte |

### 3.4 Line Height (Satır Yüksekliği)

> Metin satırları arasındaki **dikey boşluk**.
> 

### Genel Formül

```
line-height = font-size × katsayı
```

| Kullanım | Katsayı | Örnek |
| --- | --- | --- |
| **Body / paragraf** | 1.5 | 16px font → 24px line-height |
| **Başlıklar** | 1.2 – 1.3 | 32px font → 40px line-height |
| **Caption / küçük metinler** | 1.4 | 12px font → 17px line-height |

### Neden Önemli?

- **Çok dar (1.0–1.1):** Metin sıkışır, okunmaz.
- **Çok geniş (2.0+):** Metin kopar, satırlar arası bağ kaybolur.
- **Auto Layout’ta:** Line-height padding’i etkiler. Yanlış line-height → dikey hizalama bozulur.

### Figma’da Line Height İşlemi

```
1. Text seçiliyken sağ panelde Line Height alanına git.
2. "Auto" → Figma fontun default'unu kullanır.
3. Sayısal değer gir (örn. 24).
4. Sil + boşluk + Enter → "Auto"ya geri döner.
```

### 3.5 Karakter Sayısı (Line Length)

Bir satırda olması gereken **maksimum karakter sayısı**:

| Cihaz | Karakter Sayısı |
| --- | --- |
| **Web (Desktop)** | 50–75 karakter |
| **Tablet** | 40–60 karakter |
| **Mobil** | 30–40 karakter |

Bunun üstüne çıkarsa okuma yorucu olur. Çözüm:
- Metni **böl** (paragraflar)
- **Container width** sınırla
- Web’de `max-width: 65ch` CSS pattern’i bu kuralın karşılığı

### 3.6 Koşullu Yönlendirme (UX Writing)

> Uzun ve dolaylı mesajlar yerine **kısa, doğrudan, koşullu** mesajlar.
> 

❌ **Kötü:**
> “Hesabınızı silmek istediğinize emin misiniz? Lütfen unutmayın ki hesabınız silindiğinde tüm mesajlarınız, fotoğraflarınız ve profil bilgileriniz kalıcı olarak kaybolacaktır.”
> *(25 kelime)*

✅ **İyi:**
> “Hesabı silersen profil, mesajlar ve fotoğraflar kaybolur.”
> *(9 kelime — aynı bilgi, %64 kısalma)*

### 3.7 Tipografik Hiyerarşi — Görsel Karşılaştırma

```
TEK FONT, TEK BOYUT (kötü)        AŞAMALI HİYERARŞİ (iyi)
─────────────────────────         ─────────────────────────
The Indian Army                    THE INDIAN ARMY
Lorem ipsum dolor sit amet         ━━━━━━━━━━━━━━━━━━━━
consectetur adipiscing elit.       Lorem ipsum dolor sit
                                   amet consectetur.

                                   Detayları görmek için ↓
```

Hiyerarşi okuyucuya **nereye bakacağını söyler**. UX’in görsel karşılığıdır.

---

### 🎯 PROJE NOTU — Tipografi

> Projeyle bu bölümün eşleştirilmesi:
- [ ] **1 font ailesi** seç (max 2). Önerilen: Inter, Montserrat, Poppins, Roboto.
- [ ] Minimum **4 ağırlık** olsun: Regular, Medium, SemiBold, Bold.
- [ ] Body = 16px, Caption = 14px, H1 = 32-40px aralığı.
- [ ] Tipografi stillerini Figma’da **Text Style** olarak kaydet (4. gün için hazırlık).
- [ ] H3 ve body aynı boyutta olabilir ama farklı weight ile ayrılsın.
- [ ] Line-height = font-size × 1.5 (paragraflar için).
- [ ] Mobil ekranda satır başına 30-40 karakter geçmesin.
> 

---

## 4) Butonlar — Detaylı

### 4.1 Buton Davranışı (Feedback)

> Her butonun **mutlaka** bir tepki vermesi gerekir. Tepki vermeyen buton = ölü buton = kullanıcı paniği.
> 

### İki Tür Feedback

| Tip | Açıklama | Örnek |
| --- | --- | --- |
| **Görsel Feedback** | Anlık, gözle görünür | Hover’da renk değişimi, basıldığında scale efekti |
| **Sistemsel Feedback** | İşlem sonucunu bildiren | Loading spinner, success toast, error message |

```
İyi UI = Anlık görsel feedback + Net sistemsel feedback (gecikmesiz)
```

### 4.2 Buton Anatomisi

```
   ┌─────────────────────────────────┐  ← label (üst yazı, opsiyonel)
   │                                 │
   │  [icon]   Button Text   [icon]  │  ← leading icon + text + trailing icon
   │                                 │
   └─────────────────────────────────┘
   ↑                                 ↑
   border / radius                   shadow (opsiyonel)

   ◄── padding-x ──►  ◄── gap ──►
   ▲
   padding-y
```

| Parça | Açıklama |
| --- | --- |
| **Label** | Butonun üstündeki tanımlayıcı yazı (form alanlarında yaygın) |
| **Container** | Butonun çerçevesi (background fill + border + radius) |
| **Leading icon** | Solda ikon |
| **Trailing icon** | Sağda ikon |
| **Text** | Buton metni |
| **Padding** | İç boşluk (yukarı/aşağı + sağ/sol) |
| **Gap** | İki buton arası boşluk |
| **Shadow** | Gölge (drop shadow) |

### 4.3 Buton Tipleri (Hiyerarşi)

| Tip | Görsel Ağırlık | Kullanım | Sayfada Adet |
| --- | --- | --- | --- |
| **Primary** | Dolu, baskın renk | Ana aksiyon: “Giriş Yap”, “Satın Al” | ⚠️ **Sayfada 1 adet** |
| **Secondary** | Outline veya soft fill | İkincil aksiyon: “İptal”, “Geri” | Sınırsız |
| **Tertiary / Ghost** | Sadece text, arka plan yok | Düşük öncelikli: “Atla”, “Daha sonra” | Sınırsız |

> 🎯 **Tek Primary Kuralı:** Bir ekranda **sadece 1 primary buton** olur. Sebebi: Kullanıcının gözü en önemli aksiyona kilitlenmeli. 2 primary = kafa karışıklığı.
> 

### Tipleri Renk Sisteminde Konumlandırma

```
Primary   → primary-500 (dolu) + beyaz text
Secondary → outline (primary-500 border) + primary-500 text
                  veya neutral-200 fill + neutral-900 text
Ghost     → arka plan yok + primary-500 text
```

### 4.4 Buton State’leri (Davranış Durumları)

| State | Ne Zaman? | Görsel Değişim | Örnek (Material) |
| --- | --- | --- | --- |
| **Default** | Etkileşim yok | Baz hali | `primary-500` |
| **Hover** | Mouse üzerinde (desktop) | Renk koyulaşır/açılır | `primary-600` |
| **Focus** | Klavye ile odaklanmış | Border / outline ring | `primary-500` + outline |
| **Pressed (Active)** | Tıklanma anı | Renk daha koyu, scale 0.98 | `primary-700` |
| **Disabled** | Aksiyon kullanılamaz | %50 opacity, gri ton | `neutral-300` |
| **Loading** | İşlem devam ediyor | Spinner + disabled text | spinner + disabled |

### Renk Geçişleri — Material Design Pattern

```
Default → primary-500
Hover   → primary-600 (1 ton koyu)
Focus   → primary-500 + 2px outline (primary-300)
Pressed → primary-700 (2 ton koyu)
Disabled → neutral-200 fill + neutral-400 text
```

> 💡 Bu geçişleri **Foundation Color Generator** plugin’i Figma’da otomatik 50-900 tonlarıyla üretir. Material 3’ün renk skalasını verir.
> 

### 4.5 Buton Boyutları

| Boyut | Yükseklik | Padding (Y) | Padding (X) | Font Size |
| --- | --- | --- | --- | --- |
| **Small** | 36 px | 8 | 12 | 14 |
| **Medium** | 44 px | 10 | 16 | 14-16 |
| **Large** | 48 px | 12 | 24 | 16 |
| **XLarge** | 56 px | 16 | 32 | 16-18 |

### 🚨 Kritik Kural: Minimum 44×44px Dokunma Alanı

> **Apple HIG ve Material Design** standartı: dokunmatik ekranda buton minimum 44×44 piksel olmalı. Daha küçükse parmak ucu butonu kaçırır, kullanılabilirlik düşer.
> 

İkon butonlarda bile bu kural geçerli — ikon 24×24 olabilir ama tıklama alanı 44×44 olur (padding ile büyütülür).

### Padding Oranı: 2:1 Kuralı

```
Dikey padding = X
Yatay padding = 2X (genelde)

Örnek: padding-y: 12px → padding-x: 24px
```

Bu oran her zaman sabit değil ama %80 tasarımda görülür.

### 4.6 Buton Metni Yazma Kuralları

| ❌ Kötü | ✅ İyi | Sebep |
| --- | --- | --- |
| “Devam edebilirsiniz” | “Devam Et” | Emir kipi, kısa |
| “Lütfen giriş yapınız” | “Giriş Yap” | “Lütfen” gereksiz |
| “Tamam” | “Kaydet” / “Sil” | Ne yaptığı net |
| “Evet” / “Hayır” | “Hesabı Sil” / “Vazgeç” | Konteksten bağımsız anlaşılır |
| “Şimdi ilerle” | “Devam Et” | Doğal Türkçe |

> 📏 **Kural:** Buton metni **2-3 kelime**, **emir kipi**, **net aksiyon**.
> 

### 4.7 Border Radius — Markaya Etki

| Radius | Karakter | Marka Tipi |
| --- | --- | --- |
| **0 px** | Ciddi, kurumsal, sert | Bankalar, hukuk firmaları |
| **4-6 px** | Dostça ama ciddi | SaaS, kurumsal teknoloji |
| **8-12 px** | Modern, friendly | Çoğu mobil uygulama |
| **16-20 px** | Çok modern, oyuncu | Genç markalar |
| **Pill (yükseklik/2)** | Samimi, dokunulası | Apple, premium markalar |

> 💡 **Pill Button kuralı:** `border-radius = height / 2`. Örnek: 48px yüksekliğindeki butonun pill radius’u 24px.
> 

### 4.8 Buton Kullanım Hataları (Anti-Patterns)

```
❌ Aynı ekranda 2 primary buton (hangisine basacağım?)
❌ Primary butonda muğlak metin: "Tamam", "Devam"
❌ 32px altında buton (dokunulamıyor)
❌ Hover state'i tanımlanmamış (etkileşim yok)
❌ Disabled button hala primary renkte (kullanılır görünüyor)
❌ İkon ile metin arası gap çok dar/geniş (8-12px ideal)
❌ Tek satıra sığmayacak uzunlukta buton metni
```

---

### 🎯 PROJE NOTU — Butonlar

> • [ ] **Primary buton** tasarla (default + hover + focus + disabled state’leri).
• [ ] **Secondary buton** (outline veya soft fill versiyonu).
• [ ] **Ghost/Tertiary buton** (text-only).
• [ ] Her sayfada **sadece 1 primary buton** olduğunu kontrol et.
• [ ] Minimum yükseklik 44px, tercihen 48px (large).
• [ ] İkonlu ve ikonsuz versiyonları yap (Variant ile — 4. gün).
• [ ] Buton metinleri **emir kipinde**: “Giriş Yap”, “Devam Et”, “Kaydet”.
• [ ] Hover’da renk değişimi göster (`primary-500` → `primary-600`).
• [ ] Tüm butonlar Design System sayfasında dokümante.
> 

---

## 5) Inputlar — Form Alanları

### 5.1 Input Anatomisi

```
   Label (input üstünde — Static label)
   ▼
   ┌─────────────────────────────────────┐
   │ [icon]  placeholder text     [icon] │  ← input field
   └─────────────────────────────────────┘
   ▲                                    ▲
   leading icon                  trailing icon (clear, eye, vb.)

   Caption: yardımcı metin / hata mesajı
```

### 5.2 Static vs Floating Label

| Static Label | Floating Label |
| --- | --- |
| ✅ Erişilebilirlik için **önerilen** | Trendy ama erişilebilirlik düşük |
| Her zaman görünür | Tıklanınca yukarı kayar |
| Ekran okuyucular doğru okur | Bazı screen reader’larda kayıp |
| Otofill ile uyumlu | Bazen otofill ile çakışır |

> 💡 **Tavsiye:** **Static label** kullan. Görünür kalsın, kullanıcı her zaman ne girdiğini bilsin.
> 

### 5.3 Input State’leri

| State | Görsel İpucu |
| --- | --- |
| **Default (Empty)** | Border `neutral-300`, placeholder gri |
| **Focus** | Border `primary-500` (2px) + opsiyonel halo |
| **Filled** | Border `neutral-400`, text koyu |
| **Error** | Border `error-500` (kırmızı) + hata mesajı caption’da |
| **Success** | Border `success-500` (yeşil) + check ikonu |
| **Disabled** | Background `neutral-100`, %50 opacity |

### 5.4 Input Boyutları

| Boyut | Yükseklik | Kullanım |
| --- | --- | --- |
| Small | 36 px | Dense forms, table inline edit |
| Medium | 44 px | Standard form |
| **Large** | **48 px** | ⭐ Mobil için tercih edilen |

> Aynı **44px minimum dokunma alanı** kuralı geçerli.
> 

### 5.5 Input Türleri

| Tip | Kullanım | Özel Davranış |
| --- | --- | --- |
| **Text** | Genel metin (isim, başlık) | — |
| **Password** | Şifre | Eye icon ile göster/gizle |
| **Email** | E-posta | Klavye `@` ile açılır (mobil) |
| **Number** | Sayı | Sayı klavyesi |
| **Tel** | Telefon | Ülke kodu dropdown’lu |
| **URL** | Bağlantı | Leading: `https://` prefix |
| **Date** | Tarih | Date picker (sağa veya altta açılır) |
| **Search** | Arama | Leading: arama ikonu, trailing: clear |
| **Verification Code** | OTP | 4-6 kutucuk, ayrı inputlar |
| **Dropdown / Select** | Seçim listesi | Açılır liste |
| **Text Area** | Çok satırlı metin | Yorum, mesaj — resize’lı |
| **Stepper** | Sayı +/- | Adet seçimi (sepet vb.) |

### 5.6 Validation (Doğrulama) Mesajları

```
┌─────────────────────────────────────┐
│ ✓ Email                             │
│ user@example.com                    │
└─────────────────────────────────────┘
✓ Geçerli email adresi              ← success message (yeşil)

┌─────────────────────────────────────┐
│ ✗ Email                             │
│ user@example                        │
└─────────────────────────────────────┘
✗ Lütfen geçerli bir email girin    ← error message (kırmızı)
```

### 5.7 Date Input — Trend ve Anti-Pattern

❌ **Kötü:** Tek tek yukarı/aşağı ok ile yıl, ay, gün seçtirmek (1990’a inmek için 35 yıl tıklama).

✅ **İyi:** Calendar picker → gün tıkla → ay tıklayınca ay seçimi → yıl tıklayınca yıl listesi.

> Sefa rahatsız ediciliği UX’in en temel anti-patternlerinden biri.
> 

---

### 🎯 PROJE NOTU — Inputlar

> Giriş sayfan için minimum:
- [ ] Email input (default + focus state)
- [ ] Password input (default + focus + eye toggle)
- [ ] Static label kullan
- [ ] Yükseklik 44px veya 48px
- [ ] Error state için bir örnek (caption’da kırmızı mesaj)
- [ ] Border radius butonlarla tutarlı (örn. 8px ise hep 8px)
- [ ] Inputlar arası gap: input grubu içinde **dar** (12-16px), grup dışı **geniş** (24-32px) — spacing kuralı
> 

---

## 6) Spacing — Boşluk Sistemi

### 6.1 4-Pixel Grid (4 Katı Kuralı)

Tasarımda kullanılacak tüm spacing değerleri **4’ün katları**:

```
4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 128
```

### Neden 4?

- **Geliştirici dostu:** Tailwind `spacing-1 = 4px` baz alır. CSS pixel grid’i ile uyumlu.
- **Görsel tutarlılık:** Random sayılar (örn. 11, 23, 37) yerine sistematik ölçüm.
- **Responsive uyum:** 1rem = 16px = 4 × 4 → mobile/desktop arası geçişlerde matematiksel.

### 6.2 Tailwind Karşılıkları (Frontend Bağlantısı)

| Figma px | Tailwind | CSS rem |
| --- | --- | --- |
| 4 | `gap-1` / `p-1` | 0.25rem |
| 8 | `gap-2` | 0.5rem |
| 12 | `gap-3` | 0.75rem |
| 16 | `gap-4` | 1rem |
| 24 | `gap-6` | 1.5rem |
| 32 | `gap-8` | 2rem |
| 48 | `gap-12` | 3rem |
| 64 | `gap-16` | 4rem |

> 💻 Tasarımda 4 katı kullanırsan **Tailwind sınıflarına 1:1 çevirme** çok kolaylaşır.
> 

### 6.3 Hiyerarşik Spacing Kuralı

> Aynı grup içindeki öğelerin arası, gruplar arası boşluktan **daha az** olmalı.
> 

```
┌─────────────────────────────┐
│ [Email Input]               │
│                             │  ← 12px (input grubu içinde)
│ [Password Input]            │
│                             │
│                             │  ← 24px (grup ile button arası)
│ [Giriş Yap Butonu]          │
│                             │
│                             │  ← 16px (alt-yardımcı bölüm)
│ [Şifremi Unuttum]           │
└─────────────────────────────┘
```

### Pratik Spacing Skalası — Mobil

| Bağlam | Aralık |
| --- | --- |
| İkon-text arası | 4-8 px |
| Form inputları arası (aynı grup) | 12-16 px |
| Bölümler arası | 24-32 px |
| Sayfa kenar boşlukları (margin) | 16-24 px |
| Kart içi padding | 16-20 px |
| Kartlar arası gap | 16-24 px |

### 6.4 Optik Hizalama (Optical Alignment)

> Bazı şekiller **matematiksel olarak** hizalı ama **göze yamuk** görünür. Bunu manuel düzeltiyoruz.
> 

### Klasik Örnek: Play Butonu

```
Matematiksel hizalama:        Optik hizalama:

   ⭕──────⭕                    ⭕──────⭕
   │       │                    │       │
   │  ▶    │  ← üçgen "merkez"  │   ▶   │  ← 1-2px sağa kaydır
   │       │     ama göze sola  │       │
   ⭕──────⭕     yatık görünür   ⭕──────⭕
```

Üçgenin kütle merkezi geometrik merkezinde değil, sola yatık. Bu yüzden 1-2px sağa kaydırmak göze daha “hizalı” görünmesini sağlar.

### Diğer Optik Hizalama Senaryoları

- **Yuvarlak ikonlar** kare ikonlardan biraz daha **büyük** çizilir (göz onu küçük algılar).
- **Italic text** uçtaki padding’de fazladan boşluk ister.
- **Border-radius’lu butonun içindeki text** hafifçe yukarı kaydırılabilir.

> 💡 **Hoca’nın felsefesi:** “Bizi rahatsız eden detay, kullanıcıyı da rahatsız edecektir. Gözüne güvenmediğin yerde optik hizala.”
> 

---

### 🎯 PROJE NOTU — Spacing

> • [ ] Tüm spacing değerlerin **4 katı** olsun (4, 8, 12, 16, 24, 32…).
• [ ] Grup içi spacing’in grup arası spacing’den az olmasına dikkat et.
• [ ] Sayfa margin’i: 16-24px (mobil için).
• [ ] Kart padding’i: 16-20px, kartlar arası gap: 16-24px.
• [ ] Auto Layout kullandığında bu değerleri direkt gap olarak ata.
> 

---

## 7) İkonlar

### 7.1 Format: SVG Zorunlu

| Format | Tip | İkon İçin Uygun mu? |
| --- | --- | --- |
| **SVG** | Vektörel | ✅ EVET — ölçeklenebilir, kalitesini korur |
| **PNG** | Raster + alpha (şeffaf arka plan) | ❌ Hayır — büyüdükçe bozulur |
| **JPEG** | Raster + dolgu arka plan | ❌ Hayır — şeffaflık yok, bozulur |
| **WebP** | Raster | ❌ Hayır (ikonlar için) |

### Neden SVG?

```
SVG    → vektör tabanlı → 16px de 1600px de aynı kalitede
PNG    → raster (piksel) tabanlı → büyütünce pixelleşir
```

> 💻 **Frontend bağlantısı:** React’te `<svg>` doğrudan inline kullanılabilir, `fill`/`stroke` CSS ile değiştirilebilir, `lucide-react` / `react-icons` paketleri SVG icon kütüphaneleridir.
> 

### 7.2 Standard Boyut: 24×24

Tüm ikonlar **aynı boyutta** olmalı:

| Bağlam | İkon Boyutu |
| --- | --- |
| Standart (buton içinde, menü, navigasyon) | **24×24 px** |
| Küçük (caption, label içinde) | 16×16 px |
| Büyük (hero, feature card) | 32-48 px |

> 🎯 Bir proje içinde **tek bir baz boyut** seç, hep ona sadık kal. Karışım yapma.
> 

### 7.3 İkon Kalitesi Kriterleri

| Kriter | Açıklama |
| --- | --- |
| **Evrensellik** | Mailbox = zarf, ev = home, arama = büyüteç. Kültürden bağımsız anlaşılmalı. |
| **Sadelik** | Karışık detay, kesik çizgi, gradient yok. Tek renk + tek stil. |
| **Tutarlılık** | Hepsi outline ise hep outline, hepsi filled ise hep filled. **Karışmaz.** |
| **Stroke kalınlığı** | Tüm ikonlarda aynı stroke (genelde 1.5px veya 2px). |
| **Renk** | Tek renk → text rengi ile uyumlu. Gradient kullanma. |

### Outline vs Filled

```
Outline (line icon)        Filled (solid icon)
─────────────────────      ─────────────────────
🏠 (sadece çizgi)           🏠 (içi dolu)
⚙️                          ⚙️
👤                          👤
```

> Karıştırma! Aynı ekranda hem outline hem filled ikon bulundurma — birini seç.
> 

### 7.4 Touch Target (Dokunma Alanı)

İkon 24×24 olabilir ama **tıklama alanı 44×44** olmalı:

```
┌────────────────────┐
│                    │  ← 44×44 dokunma alanı
│    ┌──────┐        │     (padding ile büyütülür)
│    │ ICON │        │
│    │ 24x24│        │  ← ikonun kendisi sabit
│    └──────┘        │
│                    │
└────────────────────┘
```

Figma’da:
1. İkonu al (24×24).
2. Shift+A ile Auto Layout uygula.
3. Padding’i 10px (44-24)/2 yap → toplam 44×44 olur.

### 7.5 İkon Kütüphaneleri

| Kütüphane | Plugin/Site | Karakter |
| --- | --- | --- |
| **Phosphor Icons** ⭐ | Figma plugin | Thin / Light / Regular / Bold / Fill 5 ağırlık — Meltem hocanın favorisi |
| **Iconify** | Figma plugin | 200K+ ikon, çoğu marka logosu da var |
| **Feather Icons** | feathericons.com | Minimal, 24×24 standardı |
| **Material Symbols** | Google Fonts → Icons | Material 3 standard |
| **Lucide** | lucide.dev | Feather’ın fork’u, daha aktif geliştiriliyor — `lucide-react` Claude artifact’larında hazır |
| **Heroicons** | heroicons.com | Tailwind ekibi, outline + solid |

> 💻 **Frontend kullanım:** `npm install lucide-react` → `<Home size={24} />`. Figma’daki ikonun karşılığı kodda hazır geliyor.
> 

### 7.6 İkonun Tasarımda Tanımlanma Şartı

> 🚨 **Önemli kural:** Tasarımda kullandığın **her ikon** Design System sayfasında **görünür** olmalı.
> 

Örnek: Login sayfasında “Google ile Giriş Yap” butonu varsa, Google logosu da Design System içinde **tanımlı** olmalı. Geliştirici ikonu nereden alacağını bilmeli.

### 7.7 PNG vs JPEG Hatırlatma

```
PNG  → şeffaf arka plan destekler (logo, ikon için)
JPEG → arka plan opak (genelde fotoğraf için)
```

Ama her ikisi de **raster** (piksel tabanlı) — ikonlar için yine **SVG** kullan.

---

### 🎯 PROJE NOTU — İkonlar

> • [ ] Tek bir ikon kütüphanesi kullan (**Phosphor Icons** öneriliyor).
• [ ] **Hepsi aynı stil** (hepsi regular veya hepsi outline).
• [ ] Standart boyut **24×24** — değişme.
• [ ] Touch area **44×44** — padding ile sağla.
• [ ] Tüm ikonları SVG olarak ekle (Figma’da `Import as Frame`).
• [ ] Sosyal medya/marka logoları varsa onları da Design System’a koy.
• [ ] Renk: tek renk, text rengiyle uyumlu — gradient yok.
> 

---

## 8) Figma’ya Giriş

### 8.1 Planlar

| Plan | Fiyat | Dosya Limiti | Sayfa Limiti | Kim İçin? |
| --- | --- | --- | --- | --- |
| **Free / Starter** | $0 | 3 dosya | 3 sayfa/dosya | Tek kullanıcı, başlangıç |
| **Professional** | $3/ay | Sınırsız | Sınırsız | Profesyonel kullanım |
| **Organization** | $45/ay | Sınırsız + admin | Sınırsız | Şirketler |
| **Education** ⭐ | **Ücretsiz** | Sınırsız (Pro’ya eşdeğer) | Sınırsız | Öğrenciler / mezunlar |

> 🎓 **Kutluhan Bey’in paylaşımı:** Öğrenci/mezunlar için **Figma Education** ücretsiz Pro plan veriyor. Başvuru: `figma.com/education`. Okul mail adresi veya **e-Devlet üzerinden öğrenci belgesi** ile aktive edilir. Dev Mode hariç hemen hemen tüm pro özellikleri açılır.
> 

### 8.2 Figma Niye Tercih Ediliyor?

| Özellik | Neden Önemli |
| --- | --- |
| **Bulut tabanlı** | Otomatik kaydet, hiçbir dosya kayıp riski yok |
| **Real-time collaboration** | Aynı dosyada birden fazla kişi aynı anda çalışabilir |
| **Plugin ekosistemi** | Phosphor, Iconify, Unsplash, Real-time Colors, Foundation Color, Stark, Contrast, Vectorize, Magic Pattern, Jitter, Logo Finder |
| **Versiyon kontrolü** | History’den geri alınabilir |
| **Sharing** | Link ile herkese açık, view/edit yetkisi |
| **Sketch dosyası import** | Migration kolay |

### 8.3 Figma Arayüzü

```
┌──────────────────────────────────────────────────────────────┐
│  [File] [Edit] [View] [Object] [Vector] [Text] [Arrange]     │ ← Menu bar
├──────────────────────────────────────────────────────────────┤
│ [Move] [Frame] [Section] [Shape] [Pen] [Text] [Image]        │ ← Toolbar
├──────────┬──────────────────────────────────────┬────────────┤
│          │                                      │ Design /   │
│ Layers   │                                      │ Prototype  │
│ Pages    │           CANVAS                     │            │
│ Assets   │           (sonsuz uzay)              │ - Position │
│          │                                      │ - Layout   │
│          │                                      │ - Fill     │
│          │                                      │ - Stroke   │
│          │                                      │ - Effects  │
│          │                                      │ - Export   │
└──────────┴──────────────────────────────────────┴────────────┘
```

### 8.4 Temel Araçlar (Toolbar)

| Araç | Kısayol | İşlev |
| --- | --- | --- |
| **Move** | `V` | Seçme + yer değiştirme |
| **Hand** | `H` | Canvas’ta gezinme (scroll) |
| **Frame** | `F` | Kapsayıcı oluşturma (Artboard) |
| **Section** | `Shift + S` | Bölümlere ayırma (canvas organizasyonu) |
| **Slice** | `S` | Belirli bir alanı export için işaretleme |
| **Shape** | `R` (rect), `O` (oval), `L` (line) | Şekil çizme |
| **Pen** | `P` | Vektör çizimi |
| **Text** | `T` | Metin |
| **Image** | `Ctrl+Shift+K` | Görsel yerleştirme |
| **Hand vs Move farkı** | — | Hand → ekranda gezinme, Move → öğenin yerini değiştirme |

### 8.5 Kısayollar (Verimlilik İçin)

| Kısayol | İşlev |
| --- | --- |
| `Ctrl+P` / `Ctrl+K` | Komut paleti + plugin arama |
| `Ctrl+/` | Quick action menu |
| `Ctrl+F` | Layer arama (sayfa içinde) |
| `Ctrl+Shift+R` | Cetvel (Ruler) aç/kapa |
| `Alt+L` | Tüm layer’ları collapse et |
| `Shift+A` | Auto Layout uygula |
| `Shift+G` | Grid göster/gizle |
| `Ctrl+Alt+K` | Component oluştur |
| `Ctrl+D` | Duplicate (kopya) |
| `Ctrl+Shift+E` | Export |
| `Z` | Zoom tool |
| `Shift+1` | Tüm çalışmaya zoom (fit) |
| `Shift+2` | Seçili öğeye zoom |
| `Shift+0` | %100 zoom |

### 8.6 Export

> Tasarımın dışarıya çıkarılması.
> 

```
1. Öğeyi/frame'i seç.
2. Sağ panel alt kısmında "Export" bölümü.
3. + işaretine bas → varyasyon ekle:
   - Format: PNG / JPEG / SVG / PDF
   - Scale: 1x / 2x / 3x / 4x (retina için 2x ve üstü)
   - Suffix: dosya adına eklenecek (@2x vb.)
4. "Export [öğe adı]" butonuna bas.
```

| Format | Kullanım |
| --- | --- |
| **PNG** | Genel ekran çıktısı, mockup |
| **JPEG** | Fotoğraf-ağırlıklı tasarımlar (daha küçük dosya) |
| **SVG** | İkon, logo, vektörel öğeler |
| **PDF** | Sunum, baskı, çok sayfalı dokümantasyon |

### 8.7 Share / Paylaşım

```
Share butonu (sağ üst) → Link kopyala → İki ayar:

1. Erişim:
   - "Anyone with the link" (linki olan herkes)
   - "Only people invited" (sadece davet edilenler)

2. Yetki:
   - "Can view" → sadece görüntüleme (prototype çalışmayabilir!)
   - "Can edit" → tam erişim (prototype, Dev Mode, vs.)
```

> 💡 **Tavsiye:** Eğitmen veya iş arkadaşıyla paylaşırken **“Can edit”** kullan. Prototype “Can view”’da bazen çalışmaz.
> 

---

## 9) Frame, Section, Constraints

### 9.1 Frame (F)

> **Tasarımın temel kapsayıcısıdır.** HTML’deki `<div>` gibi düşün.
> 

### Frame’in Özellikleri

```
┌─────────────────────────┐
│ FRAME                   │ ← clipping (içeriği keser)
│                         │
│   [içerideki öğeler]    │ ← frame'in içine girer
│   (clip with parent)    │
│                         │
└─────────────────────────┘
```

**Frame içine alınan öğe:** Frame dışına taşamaz (default), canvas’ta görünmez.

**Rectangle ile farkı:** Rectangle sadece bir şekil. Frame **container** — içine başka öğeler alır, Auto Layout uygulanabilir, Constraints çalışır.

### Standard Frame Boyutları

| Cihaz | Boyut |
| --- | --- |
| **iPhone 16** | 393 × 852 |
| **iPhone 16 Pro Max** | 440 × 956 |
| **iPhone SE** | 375 × 667 |
| **Android (Pixel 7)** | 412 × 915 |
| **iPad Pro 11”** | 834 × 1194 |
| **Desktop (Web)** | 1440 × 1024 / 1920 × 1080 |
| **Desktop (4K)** | 2560 × 1440 |

### 9.2 Section (Shift + S)

> Canvas’ı **görsel olarak bölümlere ayırır**. Tasarımı organize etmek için.
> 

```
┌─ 🟦 SECTION: Onboarding ──────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐             │
│  │Splash│  │Welcome│  │ Login│             │
│  └──────┘  └──────┘  └──────┘             │
└────────────────────────────────────────────┘

┌─ 🟩 SECTION: Main Pages ──────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐             │
│  │ Home │  │Profile│ │Search│             │
│  └──────┘  └──────┘  └──────┘             │
└────────────────────────────────────────────┘
```

**Section ≠ Frame:**
- Section sadece **görsel organizasyon**.
- Constraints, Auto Layout, prototip burada çalışmaz.
- İçindekileri **clip etmez**.

### 9.3 Constraints (Frame’in Süper Gücü)

> Frame içindeki öğelerin, frame **boyutu değiştiğinde** nasıl davranacağını belirler. **Responsive tasarımın temeli.**
> 

### Constraint Seçenekleri

```
Sağ panel → "Constraints" bölümü → 2 dropdown:

Horizontal (yatay):              Vertical (dikey):
┌────────────┐                   ┌────────────┐
│ Left       │                   │ Top        │
│ Right      │                   │ Bottom     │
│ Center     │                   │ Center     │
│ Left+Right │ (stretch)         │ Top+Bottom │ (stretch)
│ Scale      │                   │ Scale      │
└────────────┘                   └────────────┘
```

### Davranış Örnekleri

| Constraint | Frame Büyüdüğünde | Frame Küçüldüğünde |
| --- | --- | --- |
| **Left + Top** | Sol-üst sabit, boyut değişmez | Aynı |
| **Right + Bottom** | Sağ-alt sabit (örn. FAB butonu) | Aynı |
| **Center + Center** | Hep ortada kalır | Aynı |
| **Left+Right + Top** | Yatayda esner (full width) | Daralır |
| **Scale + Scale** | Orantılı büyür (zoom) | Orantılı küçülür |

### Gerçek Hayat Senaryosu

```
Mobile Frame (393 × 852)
┌─────────────────────────┐
│ ◀  Header (Top, L+R)    │ ← yatayda esner, üstte sabit
├─────────────────────────┤
│                         │
│   [Content]             │ ← T+B, L+R (esner)
│                         │
├─────────────────────────┤
│ [Bottom Nav] (B, L+R)   │ ← altta sabit, yatayda esner
└─────────────────────────┘
```

> Constraints **Auto Layout’un atasıdır**. Auto Layout daha gelişmiş bir versiyondur ve çoğu modern tasarımda Constraints yerine Auto Layout kullanılır. **Yarın işlenecek.**
> 

---

## 10) Prototype’a Giriş

> Statik tasarımı **etkileşimli mockup**’a dönüştürür. Yarınki konunun ön hazırlığı.
> 

### 10.1 Prototype Sekmesi

```
Sağ panel üst kısımdaki sekmeler:

┌──────────┬──────────────┐
│ Design   │  Prototype   │  ← buraya geç
└──────────┴──────────────┘
```

### 10.2 Cihaz Seçimi (Önemli!)

```
Prototype sekmesi → Show Prototype Settings:

Device: [iPhone 16 ▼]  ← Cihaz seç
Model:  [Space Black ▼]
Background: [#000000]
```

Cihaz seçince prototip ekran içeride simüle olur:
- iPhone 16’nın **Dynamic Island**’ı görünür → tasarımının üstüne taşan elementleri fark edersin.
- Status bar, home indicator (alt çubuk) doğru konumlanır.

### 10.3 Etkileşim (Interaction) Tipleri

| Trigger | Açıklama |
| --- | --- |
| **On Click / Tap** | Tıklayınca |
| **On Hover** | Üzerine gelince (desktop) |
| **On Press** | Basılı tutunca |
| **On Drag** | Sürükleyince |
| **While Hovering** | Üzerinde dururken |
| **While Pressing** | Basılı tutarken |
| **After Delay** | Belirli süre sonra otomatik |

### 10.4 Geçiş (Animation) Tipleri

| Tip | Karakter |
| --- | --- |
| **Instant** | Anında, animasyonsuz |
| **Dissolve** | Yumuşak fade |
| **Smart Animate** ⭐ | Şekiller arası akıllı interpolasyon (çok güçlü) |
| **Move In / Out** | Yandan kayma |
| **Push** | Eski sayfayı iter |
| **Slide In / Out** | Slayt geçişi |

### 10.5 Prototype Çalıştırma

```
Sağ üst köşede [▶ Present] butonu → tam ekran prototype açılır.
```

> 🎯 **Cuma günü (5. gün):** Tüm sayfalar arası geçişler, mikro animasyonlar (buton hover), scroll davranışı, dropdown açılma — hepsi prototype ile bağlanacak.
> 

---

### 🎯 PROJE NOTU — Figma Setup

> • [ ] **3 frame** oluştur: Giriş Sayfası, Ana Sayfa, Detay Sayfası.
• [ ] Cihaz: iPhone 16 (393 × 852) — mobil tavsiyesi.
• [ ] Tüm öğeleri **Frame içine** koy (Auto Layout için hazırlık).
• [ ] Section ile organize et: “Onboarding”, “Main”, “Design System”.
• [ ] Constraints’i Auto Layout öncesi anla, ama büyük olasılıkla **Auto Layout** (yarınki konu) kullanacaksın.
• [ ] **Design System sayfası** ayrı bir page olarak başlat:
    ◦ Renkler (Color Styles)
    ◦ Tipografi (Text Styles)
    ◦ Butonlar
    ◦ Inputlar
    ◦ İkonlar
> 

---

## 11) Önerilen Pluginler Listesi

| Plugin | Kullanım |
| --- | --- |
| **Iconify** ⭐ | 200K+ ikon, marka logoları |
| **Phosphor Icons** ⭐ | 5 ağırlıkta tutarlı ikon seti |
| **Feather Icons** | Minimal outline ikonlar |
| **Unsplash** | Stok fotoğraf (canlı arama) |
| **Pexels** | Alternatif stok fotoğraf |
| **Real Time Colors** | Renk paletini canlı UI’da test |
| **Foundation Color Generator** ⭐ | Material 3 renk skalası (50-900 tonlar) |
| **Stark** | Erişilebilirlik testi, renk körlüğü simülasyonu |
| **Contrast** | WCAG kontrast oranı testi |
| **Vectorize** | PNG’yi SVG’ye çevirme |
| **Magic Pattern** | Arka plan deseni üretici |
| **Jitter** | Tasarımı 3D / animasyona çevirme |
| **Logo Finder** | Marka logosu arama (Visa, Mastercard, vb.) |
| **Remove BG** | Görsel arka planı silme |

---

## 12) Önerilen Kaynaklar (Tasarım İlhamı)

### İlham & Referans

| Site | Ne İçin? |
| --- | --- |
| **Mobbin** (mobbin.com) | Gerçek mobil uygulama ekran galerileri |
| **Dribbble** (dribbble.com) | Konsept tasarımlar, ilham |
| **Behance** (behance.net) | Detaylı vaka çalışmaları, dev projeler |
| **UI Patterns** (ui-patterns.com) | Yaygın UI desenlerinin açıklamaları |
| **Laws of UX** (lawsofux.com) | Kullanıcı deneyimi yasaları (Hick, Fitts, vb.) |
| **Land-book** (land-book.com) | Landing page örnekleri |
| **Page Flows** (pageflows.com) | Onboarding ve flow video kayıtları |

### Eğitim / Makale

| Kaynak | Açıklama |
| --- | --- |
| **UX Planet** (Medium) | UX odaklı makaleler |
| **Nick Babich** (Medium) | “7 Basic Rules for Button Design” ve benzeri klasik UI rehberleri |
| **Material Design** (m3.material.io) | Google’ın tasarım sistemi |
| **Apple HIG** (developer.apple.com/design) | Apple’ın iOS rehberleri |
| **Smashing Magazine** | Derinlemesine UX/UI makaleleri |

---

## 13) Kritik Hatırlatmalar

> 🎯 **Her zaman ölçülebilir bir sistem kullan.** 4 katı spacing, 24×24 ikon, 44px touch target. Bunlar **rastgele değil**, sektör standardı.
> 

> 🎯 **Sadelik kazanır.** “Az çok”tur. Amazon gibi global ürünler bile minimal arayüz tercih ediyor.
> 

> 🎯 **Her tasarım kararı dokümante edilmeli.** Design System sayfan = tasarımcının kontratı + geliştiricinin kullanım kılavuzu.
> 

> 🎯 **Frontend’i unutma.** Tasarımdaki her piksel, kodda bir değer karşılığı olacak. 4 katı = Tailwind sınıfları. Bu zihinde olsun.
> 

> 🎯 **Erişilebilirlik = kaliteli tasarım.** Kontrast, touch target, label — bunlar “extra” değil, “şart”.
> 

---

## 14) Yarına Hazırlık (Çarşamba)

Yarın işlenecek:
- 🔜 **Tipografi (derin uygulama):** Text styles, fluid typography
- 🔜 **Auto Layout:** Padding, gap, alignment, fill/hug/fixed
- 🔜 **Constraints’in evrimi:** Auto Layout neden onun yerini aldı
- 🔜 Direction (horizontal/vertical), wrap, absolute position

Hazırlık için bu gece yapabileceğin:
- [ ] Figma’yı indir ve hesap aç (Education plan başvurusu da yap).
- [ ] Proje fikrini netleştir (özgün uygulama veya mevcut bir uygulamanın yeniden tasarımı).
- [ ] Mobbin / Dribbble’da benzer projelere bak, ilham notları al.
- [ ] Color Hunt’tan veya kendi renk paletinden 1 primary, 1 secondary, neutral’ler seç.
- [ ] 1 font ailesi belirle (Google Fonts’tan).

---

## 📚 Hızlı Erişim Kaynakları

- 🎨 [Real Time Colors](https://realtimecolors.com/)
- 📏 [Type Scale](https://typescale.com/)
- 🔤 [Font Pair](https://fontpair.co/)
- 🔤 [Font Joy](https://fontjoy.com/)
- 🔍 [Lipi.ai (Font Risk)](https://lipi.ai/)
- 🎯 [Mobbin](https://mobbin.com/)
- 🎯 [Laws of UX](https://lawsofux.com/)
- 🖼️ [Unsplash](https://unsplash.com/)
- 🎨 [Material Design 3](https://m3.material.io/)
- 🍎 [Apple HIG](https://developer.apple.com/design)
- 🎓 [Figma Education](https://figma.com/education) — **ücretsiz öğrenci planı**

---

> **Yarın:** Auto Layout — Figma’nın en güçlü özelliği. Doğru öğrenince tüm tasarım hızının %80’i değişir. Hazırlıklı gel.
>