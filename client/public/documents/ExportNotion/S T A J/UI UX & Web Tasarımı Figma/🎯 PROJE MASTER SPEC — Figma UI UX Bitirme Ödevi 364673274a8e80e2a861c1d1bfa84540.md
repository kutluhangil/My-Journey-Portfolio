# 🎯 PROJE MASTER SPEC — Figma UI/UX Bitirme Ödevi

> 📋 **Bu Doküman Nedir?**
5 günün notlarının (gun-1 → gun-5) ve hocanın sunum görsellerinin **sentezi**.
Sadece “ne yapmalısın + hangi değerle + neden” formatında.
Tasarıma başlarken bu dosyayı **tek başvuru kaynağı** olarak kullan.
> 
> 
> 👤 **Eğitmen:** Meltem Turan (Software Persona)
> 🏢 **Kurum:** PNC Group Staj — UI/UX & Web Tasarımı (Figma)
> 📅 **Teslim:** 22 Haziran 2026 (Google Forms — **1 kez yükleme hakkı**)
> 

---

## 📑 İçindekiler

1. [4 Mutlak Zorunluluk](about:blank#1-4-mutlak-zorunluluk)
2. [Spesifik Px Değerleri — Tek Bakışta Tablo](about:blank#2-spesifik-px-de%C4%9Ferleri)
3. [Tipografi — Ne Kullanacaksın](about:blank#3-tipografi)
4. [Renk Sistemi — Ne Kullanacaksın](about:blank#4-renk-sistemi)
5. [Spacing Sistemi](about:blank#5-spacing-sistemi)
6. [Butonlar — Detaylı Spec](about:blank#6-butonlar)
7. [Inputlar — Detaylı Spec](about:blank#7-inputlar)
8. [İkonlar — Detaylı Spec](about:blank#8-ikonlar)
9. [Auto Layout — Ne Yapacaksın](about:blank#9-auto-layout)
10. [Component & Variant — Ne Yapacaksın](about:blank#10-component--variant)
11. [Grid Sistemi](about:blank#11-grid-sistemi)
12. [3 Ekran — Sayfa Sayfa Yapılacaklar](about:blank#12-3-ekran)
13. [Prototype — Ne Yapacaksın](about:blank#13-prototype)
14. [Teslim Formatı — PDF + Word](about:blank#14-teslim-format%C4%B1)
15. [Yapım Sırası — Hangi Adımı Önce](about:blank#15-yap%C4%B1m-s%C4%B1ras%C4%B1)
16. [Yapmaman Gerekenler](about:blank#16-yapmaman-gerekenler)
17. [Son Kontrol Listesi](about:blank#17-son-kontrol-listesi)

---

## 1) 4 Mutlak Zorunluluk

> Hocanın **“bunlar olmazsa proje değerlendirilmez”** dediği 4 ana çıktı:
> 

| # | Zorunluluk | Ne Demek? | Nerede Görmem Lazım? |
| --- | --- | --- | --- |
| 1 | **Auto Layout** | Hiçbir öğe manuel pozisyonda olmayacak. Tüm buton, input, kart, header Auto Layout’lu. | Tüm 3 ekranda her container’da |
| 2 | **Component** | Tekrarlayan her şey (buton, input, ikon, kart) component olarak tanımlı. | Design System sayfasında ana, ekranlarda instance |
| 3 | **Variant** | Component’lerin farklı durumları variant ile bağlanmış. Min 4 variant. | Sağ panelde dropdown property görünmeli |
| 4 | **Grid** | Tüm sayfalarda grid sistemi açık. Mobile 4-col, margin 24, gutter 24. | Shift+G ile açıp kapatabilmen lazım |

> ⚠️ **Bu 4’ünden biri eksikse not düşer.** Bu yüzden her adımda kendine sor: “Bu Auto Layout’lu mu? Component mı? Variant’ı var mı? Grid’e oturuyor mu?”
> 

> 💻 **Frontend bağlantısı:** Bunlar aslında modern web tasarımının tam yansıması — Auto Layout = Flexbox/Grid, Component = React Component, Variant = props (`<Button variant="primary" size="lg" />`), Grid = CSS Grid container.
> 

---

## 2) Spesifik Px Değerleri

> 🚨 **Bu tablo hocanın sunum slaytlarından + 5 gün notlarından çıkarılmış kesin değerlerdir.** Tasarım yaparken “bunu kaç px yapayım?” diyorsan buraya bak.
> 

### 2.1 Ana Boyut Tablosu

| Element | Değer | Slayt Kaynağı | Neden? |
| --- | --- | --- | --- |
| **Frame (sayfa)** | 393 × 852 | Hoca önerisi | iPhone 16 — mobil tasarım standart |
| **Dokunma alanı (minimum)** | **44 × 44 px** | “dokunma alanı” slaytı | Apple HIG + Material Design — erişilebilirlik |
| **İkon — Small** | 16 × 16 | “İkonlar” slaytı | Desktop için |
| **İkon — Medium** | 20 × 20 | “İkonlar” slaytı | Desktop için |
| **İkon — Large (mobil için önerilen)** | **24 × 24** | “İkonlar” slaytı | **Mobilde bu kullanılacak** |
| **Input — Small** | 36 px yükseklik | “Input Boyutları” slaytı | Kompakt formlar, filtre |
| **Input — Medium (standart)** | **44 px yükseklik** | “Input Boyutları” slaytı | **Mobilde minimum, en yaygın** |
| **Input — Large** | 52 px yükseklik | “Input Boyutları” slaytı | Ödeme/önemli formlar |
| **Buton — Min yükseklik** | 44 px (tercihen 48) | Gün 2 notları | Dokunma alanı kuralı |
| **Touch padding (44’e ulaşmak için)** | İkon 24 + padding 10 her yönde | Hoca tekrar tekrar | Min `(44-24)/2 = 10px` padding |

### 2.2 Buton Padding Cheat Sheet (Slayt 17’den)

| Boyut | Dikey Padding | Yatay Padding | Ne Zaman? |
| --- | --- | --- | --- |
| **Small** | 8 px | 16 px | İkincil aksiyon, kart içi |
| **Medium** | 10-14 px | 16-24 px | Standart kullanım |
| **Large** | 12-16 px | 20-24 px | CTA, primary buton |

> 📐 **Örnek (slaytan birebir):** “40 px yüksekliğinde bir buton → padding-top/bottom: 12 px, padding-left/right: 20 px”
> 

### 2.3 Border Radius Sistemi (Slayt 17’den)

| Değer | Karakter | CSS Karşılığı |
| --- | --- | --- |
| **4 px** | Keskin / Kurumsal | `border-radius: 4px` |
| **6-8 px** | Standart / Modern | `border-radius: 8px` |
| **12-16 px** | Yuvarlak / Samimi | `border-radius: 16px` |
| **Pill** (h/2) | Tamamen yuvarlak | `border-radius: 9999px` |

> ⚠️ **Hoca’nın altın kuralı:** “Aynı projede **tek bir radius aklesı** kullanılmalıdır.” Yani projende sadece 8 px kullanıyorsan, başka yerlerde 12 görmeyeyim.
> 

### 2.4 Spacing Skalası (Slayt 9’dan — Mobilde Mutlaka Bu Değerler)

| Değer | Kullanım | Frontend (Tailwind) |
| --- | --- | --- |
| **4 px** | İkon ile metin arası — çok küçük boşluklar | `gap-1` |
| **8 px** | Component içi küçük padding | `gap-2` / `p-2` |
| **12 px** | Orta boy padding | `gap-3` / `p-3` |
| **16 px** | **STANDART — en çok kullanacağın değer** | `gap-4` / `p-4` |
| **20 px** | Mobil margin (grid’inde de 20-24) | `px-5` |
| **24 px** | Gruplar arası boşluk | `gap-6` |
| **32 px** | Bölümler arası | `gap-8` |
| **48 px** | Büyük bölümler arası | `gap-12` |

> 💡 **Kural:** 4’ün katları dışında değer KULLANMA (`13px`, `15px`, `22px` yasak).
> 

---

## 3) Tipografi

### 3.1 Font Seçimi — Hocanın Şartları

| Kural | Değer | Neden? |
| --- | --- | --- |
| Font ailesi sayısı | **1 (max 2)** | Tutarlılık. 2 kullanırsan: bir display + bir body |
| Minimum weight sayısı | **4** | Regular, Medium, SemiBold, Bold |
| Önerilen font listesi | Inter, Montserrat, Poppins, Roboto | Hepsi Google Fonts (lisans yok) |
| **Line-height** | **AUTO** (kritik!) | Gün 4’te tekrar tekrar: bu olmadan auto layout bozulur |
| Font lisansı | Google Fonts’tan al → bedava | lipi.ai veya fontninja.com kontrol et |

### 3.2 Text Style Tablosu — Minimum 5 Style (zorunlu)

| Stil İsmi | Boyut | Weight | Kullanım |
| --- | --- | --- | --- |
| **H1 / Heading 1** | 28 px | SemiBold | Ana başlık (login sayfası “Hoş Geldiniz”) |
| **H2 / Heading 2** | 20 px | Regular/Medium | Detail page başlığı |
| **H3 / Heading 3** | 16 px | SemiBold | Home page “Tatilini Seç” tarzı |
| **Body** | 16 px | Regular | Paragraf, açıklama metni |
| **Button** | 16 px | SemiBold | Buton içi yazı |
| **Label** (opsiyonel) | 14 px | Regular | Input üstü etiket |
| **Caption** (opsiyonel) | 12 px | Regular | Helper text, error mesaj |

### 3.3 Diğer Kurallar

- ✅ Mobil ekranda satır başına **30-40 karakter** geçmesin
- ✅ Body line-height = font-size × 1.5 (eğer manuel verirsen) — ama AUTO daha güvenli
- ✅ H3 ve body aynı boyut (16) olabilir, weight ile ayrılır
- ✅ Tüm tipografiyi **Text Style** olarak kaydet (sağ panelden 4 nokta → Create style)

### 3.4 Word Dosyasında Tipografi Bölümü

> Hoca dedi ki: “**Yazma, görsel göster.**”
- Figma’da tüm text style’ları yan yana koy → A4 boyutunda bir frame yap → export et (PNG)
- Word’e yapıştır → altına yaz: “Font: Inter. Weight’ler: Regular 400, Medium 500, SemiBold 600, Bold 700”
> 

---

## 4) Renk Sistemi

### 4.1 Color Style Tablosu — Minimum 6-8 Renk

| Style İsmi | Tipik Renk | Kullanım |
| --- | --- | --- |
| `primary/500` | Ana marka rengi | Primary buton, vurgu |
| `primary/600` | Primary’nin koyusu | Hover state |
| `secondary/500` | İkincil renk | Secondary buton, badge |
| `text/primary` | #0F172A vb. koyu | Başlık, ana metin |
| `text/secondary` | #64748B vb. gri | Açıklama, helper |
| `text/on-primary` | #FFFFFF | Primary buton içi yazı (mutlaka kontrast!) |
| `background/1` | #FFFFFF | Ana arka plan |
| `background/2` | #F8FAFC | Kart arka planı |
| `border/default` | #E2E8F0 | Input/kart border |
| `semantic/error` | #EF4444 | Error state |
| `semantic/success` | #22C55E | Success state |

### 4.2 Slash Naming Convention (ZORUNLU!)

```
primary/500          ← Figma otomatik gruplandırır
primary/600
text/primary
text/on-primary
background/1
semantic/error
```

> 💻 **Frontend bağlantısı:** Bu sistem Tailwind config’inin tam yansıması: `colors.primary[500]`, `colors.text.primary`. Naming convention’a uyarsan koda direkt çevrilebilir.
> 

### 4.3 Kontrast Kuralı (Erişilebilirlik)

- ✅ Text rengi vs background → en az **4.5:1 oran** (WCAG AA)
- ✅ Figma’da `Ctrl+P` → “Contrast” plugin → AA/AAA test et
- ⚠️ Beyaz buton üstüne beyaz yazı → ASLA. text/on-primary kullan.

### 4.4 60-30-10 Kuralı

- 60% → Dominant renk (background)
- 30% → Secondary (kart, panel)
- 10% → Accent (CTA buton, vurgu)

> 💡 Hocanın felsefesi: “60-30-10 zorunluluk değil, kolaylaştırıcı bir kural.”
> 

### 4.5 Word Dosyasında Renk Bölümü

- Color Style’ları **renk paletinin görselini export** et → Word’e yapıştır
- Her rengin altına **HEX kodunu** yaz (örn. `#3B82F6`)
- Primary ve secondary’yi açıkça ayır

---

## 5) Spacing Sistemi

### 5.1 Hocanın “Neden Spacing?” Slaytından Çıkan Kural

> ❌ **Yanlış:** “14px, 15px, 18px gibi random değerler”
✅ **Doğru:** “16px her yerde, çünkü aynı ilişkide”
> 

### 5.2 Mobil Tasarımda Standart Kullanım (Slayt 9’dan birebir)

```
4 px   →  İkon ↔ metin arası (çok yakın)
8 px   →  Component içi küçük padding
12 px  →  Orta boy padding
16 px  →  STANDART — en çok kullanacağın değer
20 px  →  Mobil margin (zaten grid'de var)
24 px  →  Gruplar arası boşluk
32 px  →  Bölümler arası
48 px  →  Büyük bölümler arası
```

### 5.3 Pratik Uygulama

| Yer | Değer |
| --- | --- |
| Sayfa margin (sol/sağ kenar boşluğu) | 20-24 px |
| Kart iç padding | 16-20 px |
| Kartlar arası gap | 16-24 px |
| Input’lar arası gap (form içi) | 12-16 px |
| Form ile buton arası | 24-32 px |
| Section başlığı ile içerik arası | 16-24 px |
| Section’lar arası | 32-48 px |
| Buton iç yatay padding | 16-24 px |
| Buton iç dikey padding | 10-14 px |

### 5.4 Spacing Kuralının Mantığı (Çok Önemli)

> 🎯 **Grup içi spacing < Grup dışı spacing**
> 

```
[Username Input]
   ↓ 12 px (grup içi — yakın)
[Password Input]
   ↓ 24 px (grup dışı — daha uzak)
[Primary Button]
```

Bu kural Gestalt’ın “yakınlık prensibi” — yakın olanlar gruplandırılır.

---

## 6) Butonlar

### 6.1 Kaç Tür Buton Lazım?

Hocanın “Type of Buttons” slaytındaki 8 tür var. Sen min **3 tür** yapacaksın:

| # | Tip | Ne Zaman Kullanılır? | Senin Projende? |
| --- | --- | --- | --- |
| 1 | **Primary / Filled** | Ana aksiyon, CTA | ✅ Login + Detail (zorunlu) |
| 2 | **Secondary / Ghost** | İkincil aksiyon | ✅ Login sayfası “Şifremi Unuttum” |
| 3 | **Elevated** | Hafif yükseltilmiş kart-buton | (Opsiyonel) |
| 4 | **Floating Action Button** | Mobile FAB (sağ alt köşe) | (Opsiyonel — home’da olabilir) |
| 5 | **Icon Button** | Sadece ikon (close, menu) | ✅ Header’da olur |
| 6 | **Social Media Button** | Google ile giriş vb. | (Opsiyonel ama hoş duruyor login’de) |
| 7 | **Button Group** | Yan yana 2 buton | ✅ Modal’da “İptal / Kaydet” |
| 8 | **Switcher / Toggle** | On/Off | (Opsiyonel) |

### 6.2 Buton Anatomisi

```
┌──────────────────────────────────┐
│  [📷]  Fotoğrafı Yükle  [→]      │
│   ↑         ↑              ↑      │
│ Leading   Label        Trailing   │
│  Icon                    Icon     │
└──────────────────────────────────┘
       │           │
   ┌───┴───┐  ┌────┴────┐
   │ Yatay │  │  Dikey  │
   │padding│  │ padding │
   └───────┘  └─────────┘
```

### 6.3 Boyut Spec’i

| Boyut | Yükseklik | Dikey Pad | Yatay Pad | Font | Ne Zaman? |
| --- | --- | --- | --- | --- | --- |
| Small | 36 px | 8 | 16 | 14/Medium | Kart içi, secondary |
| **Medium** | **44 px** | **12** | **20** | **16/SemiBold** | **STANDART** |
| Large | 52 px | 16 | 24 | 16/SemiBold | Login CTA |

### 6.4 6 State (Variant olarak yapılacak)

```
Default    → Standart durum
Hover      → Mouse üstündeyken (web)
Focus      → Tab ile odaklanmış (klavye)
Active     → Tıklandığı an
Disabled   → Tıklanamaz (gri)
Loading    → Spinner gösteriyor
```

> Senin projende **min 2 state**: Default + Hover (veya Disabled).
> 

### 6.5 ⚠️ Buton Yazısı — Hocanın Slayt 15’teki Altın Kuralı

> **“Buton metninde eylem bildiren fiil kullanmamak yanlış.”**
> 

| ❌ Yanlış | ✅ Doğru |
| --- | --- |
| “Evet” | “Fotoğrafı Sil” |
| “Hayır” | “İptal Et” |
| “Tamam” | “Değişiklikleri Kaydet” |
| “Devam” | “Ödemeyi Tamamla” |

**Neden?** Kullanıcı “Tamam” dediğinde ne olacağını **bilmiyor**. Silinecek mi? Kaydedilecek mi?

### 6.6 ⚠️ Tek Primary Buton Kuralı (Slayt 16)

> **Her ekranda SADECE 1 PRIMARY BUTON olur.**
> 
- Birden fazla primary → karar yorgunluğu, UX kalitesi düşer
- Yan yana butonlarda → biri primary, diğeri secondary (ghost)
- Primary daha baskın, secondary geri planda
- Aralarında yeterli boşluk (min 12-16 px gap)

### 6.7 Word Dosyasında Buton Bölümü

Design System’dan **tüm buton variant’larının** ızgara halini export et. Word’e yapıştır. Altına yaz:

```
Buton Component
- 3 variant (Primary, Secondary, Ghost)
- 2 boyut (Medium 44px, Large 52px)
- 2 state (Default, Hover)
- Toplam variant: 3 × 2 × 2 = 12
Padding: Medium 12/20, Large 16/24
Border Radius: 8 px
```

---

## 7) Inputlar

### 7.1 Input Anatomisi (Slayt 13 — Taras Bakusevych)

```
Label                              ← Üstte (Static label - önerilen)
┌───────────────────────────────────────────┐
│  [🔒]  !%Formsdesign:)            [👁]    │
│   ↑          ↑                       ↑     │
│ Leading    Input text             Trailing │
│  Icon                                Icon  │
└───────────────────────────────────────────┘
  ▔▔▔▔▔▔▔▔▔▔▔ Strong ▔▔▔▔▔▔▔▔▔▔
  Validation message
```

**Parçalar:**
- Label (üst)
- Border + Border radius
- Left padding + Right padding
- Top padding + Bottom padding
- Leading icon (sol) — opsiyonel
- Trailing icon (sağ) — password için göz ikonu
- Input text (placeholder veya kullanıcı yazısı)
- Validation message (alt)

### 7.2 Boyut Spec’i (Slayt 11)

| Boyut | Yükseklik | Font Boyutu | Ne Zaman? |
| --- | --- | --- | --- |
| Small | 36 px | 12 px | Filtre, küçük formlar |
| **Medium** | **44 px** | **16 px** | **STANDART (en yaygın)** |
| Large | 52 px | 16 px | Ödeme, önemli giriş |

> ⚠️ **Mobil için minimum 44 px** — Apple HIG ve Google Material Design standardı (dokunma hedefi).
> 

### 7.3 Input Türleri (Slayt 10 — Senin projende lazım olacaklar)

| Tür | Kullanım | Senin Projende |
| --- | --- | --- |
| **Text Input** | Ad, soyad, e-posta | ✅ Login username |
| **Password Input** | Şifre (göz ikonu zorunlu!) | ✅ Login password |
| **Search Input** | Arama (sol ikon, X temizle) | ✅ Home + Detail search box |
| Textarea | Çok satırlı | Opsiyonel |
| Number Input | Sayısal | (Telefon için kullanma → text kullan) |
| Dropdown / Select | Seçenek listesi | Opsiyonel |

### 7.4 Label Kuralı — Static vs Floating (Slayt 12)

> ⭐ **Hocanın önerisi:** **Static Label** kullan (input ÜZERİNDE, her zaman görünür)
> 

| Static Label (✅ önerilen) | Floating Label |
| --- | --- |
| Input’un üstünde, her zaman var | Boşken içinde, yazınca yukarı çıkar |
| Erişilebilirlik en yüksek | Daha şık ama erişilebilirlik düşük |
| Kullanıcı yazarken bile görünür | Yazı yazınca kaybolabilir |

> ❌ **Placeholder’ı label yerine kullanma** — kullanıcı yazınca kaybolur, ne girdiğini hatırlayamaz.
> 

### 7.5 6 State (Variant olarak yapılacak — Slayt 14, Material Text Field)

| State | Görsel | Ne Zaman? |
| --- | --- | --- |
| **Inactive** | Gri border | Default, boş |
| **Focused** | Mavi border, label highlighted | Kullanıcı tıklamış |
| **Activated / Filled** | İçinde değer var, normal | Yazı yazılmış |
| **Error** | Kırmızı border + alt mesaj | Validation hatası |
| **Success** | Yeşil border + check ikonu | Doğrulanmış |
| **Disabled** | Soluk gri, opak | Şu an kullanılamaz |

> Senin projende min: Inactive + Focused + Error (3 state).
> 

### 7.6 Diğer Kurallar

- ✅ Border radius butonlarla **tutarlı** (8 px → 8 px her yerde)
- ✅ Auto Layout zorunlu — padding’i Auto Layout veriyor olmalı
- ✅ Inputlar arası gap: **12-16 px** (grup içi dar)
- ✅ Tüm Input’ları **component** yap
- ✅ Variant’la state’leri bağla

---

## 8) İkonlar

### 8.1 Format — SVG ZORUNLU (Slayt 5)

> **“İkonlar SVG formatında kullanılmalıdır. PNG ve JPG çözünürlük kaybına neden olmaktadır.”**
> 

| Format | UI’da Uygun mu? |
| --- | --- |
| **SVG** | ✅ Evet — vektörel, ölçeklenebilir |
| PNG | ❌ Hayır — büyüdükçe bulanıklaşır |
| JPG | ❌ Hayır — şeffaflık yok |
| Emoji | ❌ Hayır — sistemle değişir |

### 8.2 Boyut — Mobilde 24 (Slayt 6)

| Standart | Değer | Ne Zaman? |
| --- | --- | --- |
| Small | 16 × 16 | Desktop, küçük alanlar |
| Medium | 20 × 20 | Desktop standart |
| **Large (mobil)** | **24 × 24** | **Senin projende kullanacağın** |

### 8.3 Dokunma Alanı (Slayt 5 — KRİTİK!)

> İkon 24×24 ama tıklanan alan **44×44** olmalı.
> 

```
┌──────────────────────┐
│  ┌──────────────┐    │  ← 44 × 44 (touch area)
│  │              │    │
│  │   [📷] 24px  │    │  ← 24 × 24 (görünür ikon)
│  │              │    │
│  └──────────────┘    │
│                      │
│  Padding: 10 her yön │  (44-24)/2 = 10 px
└──────────────────────┘
```

**Pratikte:** İkonu 24×24 çiz → Auto Layout ver → her yöne 10 px padding → toplam 44×44.

### 8.4 İkon Setleri

| Set | Avantaj |
| --- | --- |
| **Phosphor Icons** ⭐ | Hocanın önerisi, yumuşak ve modern |
| Font Awesome | Klasik, çok ikon |
| Google Icons / Material | Geniş kütüphane |
| Flaticon | Renkli + outline karışık |
| Ion Icons | iOS estetiği |

> ⚠️ **Tek bir set kullan.** Karıştırma — stil bozulur.
> 

### 8.5 Stil Kuralı

> “Tüm ikonlar aynı stroke kalınlığına sahip olmalıdır.”
> 
- ✅ Hepsi outline (regular) **YA DA** hepsi filled (bold)
- ❌ Bir kısmı outline, bir kısmı filled → ASLA
- ✅ Tek renk (text rengiyle uyumlu)
- ❌ Gradient ikon → ASLA

### 8.6 Variant Yapma (Gün 5)

> Min 5 ikon → **Combine as Variants**
> 

```
ADIM 1: 5+ ikonu yan yana koy
ADIM 2: Hepsini seç → "Create Multiple Components"
        (sağ panel → +Plus dropdown'ı)
ADIM 3: Hepsini seç → "Combine as Variants"
ADIM 4: Sağ panel → "Icon" property → dropdown'dan seç
```

Bu sayede kullanıcı sağ panelden dropdown ile ikonu değiştirebilir.

---

## 9) Auto Layout

> 🚨 **Proje şartından ZORUNLU.** Hocanın sunum slaytlarında “Always use Auto Layout” yazıyor (Slayt 4).
> 

### 9.1 Auto Layout Eklemenin 3 Yolu (Slayt 1, 3)

```
1. Öğeleri seç → sağ panel → Auto Layout + butonu
2. Klavye → Shift + A (en hızlı yöntem)
3. Sağ tık → Add Auto Layout
```

### 9.2 Auto Layout’un 6 Parametresi (Slayt 2, 4)

```
1. Sorting Direction  (yön: ↓ ↑ → ← ↻)
2. Content Alignment  (9-grid hizalama)
3. Advanced Settings  (...)
4. Horizontal Spacing (yatay padding)
5. Vertical Spacing   (dikey padding)
6. Spacing Between Items (gap)
```

### 9.3 Nerede Auto Layout ZORUNLU?

| Yer | Yön | Gap | Notlar |
| --- | --- | --- | --- |
| **Her buton** | Yatay | 8 px | İçinde [icon + text + icon] |
| **Her input** | Dikey (label + field) | 4-8 px | Field iç AL ayrı |
| **Form alanları** | Dikey | 16-20 px | Inputlar arası |
| **Kartlar** | Dikey | 12-16 px | İmage + content |
| **Header** | Yatay | **gap: AUTO** | Logo solda, menü sağda (= CSS `justify-content: space-between`) |
| **Bottom nav** | Yatay | **gap: AUTO** | İkonlar eşit dağılsın |
| **Sayfa içeriği** | Dikey | 24-32 px | Section’lar arası |

### 9.4 Resizing — Fixed / Hug / Fill (Auto Layout’un Kalbi)

> 🎯 **Bu kavram anlaşılmadan responsive tasarım yapılamaz.**
> 

| Davranış | Ne Yapar? | CSS Karşılığı | Ne Zaman? |
| --- | --- | --- | --- |
| **Fixed Width** | Sabit boyut | `width: 200px` | Logo, ikon, avatar |
| **Hug Contents** | İçeriğe sarılır | `width: fit-content` | Buton (text’ine sarılır) |
| **Fill Container** | Container’ı doldurur | `width: 100%` veya `flex: 1` | Input field, kart |

### 9.5 Atom-Molekül Kuralı (Hocanın Altın Kuralı)

> **Her seviyede zincir Fill olmalı — yoksa responsive bozulur.**
> 

```
Login Sayfası (393px Fixed)
   └─ Form Container (Fill Container) ← 393'ü dolduruyor
       └─ Input (Fill Container) ← Form'u dolduruyor
            └─ Field içi text (Fill Container) ← Input'u dolduruyor
```

Bir seviyede Fill yerine Fixed verirsen, üstte yapılan değişiklik aşağı yansımaz.

### 9.6 Özel Durumlar

- **Notification Badge** → “Ignore Auto Layout” (CSS `position: absolute` gibi)
- **Floating Action Button** → Ignore Auto Layout, alt sağa pozisyonla
- **Aspect Ratio Lock** → Görsellerde her zaman açık (kart resmi orantısı bozulmasın)

### 9.7 Word Dosyasında Auto Layout Bölümü

- Bir kart örneğini al → sağ panelin Auto Layout açık halini ekran alıntısı yap
- Word’e yapıştır → altına yaz:
    - “Yön: Dikey”
    - “Padding: 16 px”
    - “Gap: 12 px”
    - “Resizing: Width Fill, Height Hug”

---

## 10) Component & Variant

### 10.1 Component (Gün 4)

> Tekrarlayan her şey component olmalı.
> 

**Yapım:** Öğeyi seç → `Ctrl + Alt + K` → Mor diamond ◆ olur → Component oldu.

| Component | Senin Projende? |
| --- | --- |
| Buton | ✅ Zorunlu |
| Input (text, password, search) | ✅ Zorunlu |
| İkon set’i | ✅ Zorunlu |
| Logo | ✅ Zorunlu |
| Kart (product/list) | ✅ Zorunlu |
| Status Bar | ✅ Önerilen |
| Search Box | ✅ Önerilen |
| Bottom Nav | (opsiyonel) |

### 10.2 Variant (Gün 5)

> Aynı component’in farklı durumları tek yapıda.
> 

**Yapım:** Birden fazla component yap → hepsini seç → sağ panel → **“Combine as Variants”**.

### 10.3 Buton Variant Hesabı (Minimum)

```
DURUM AKSI:    Default × Hover           = 2
BOYUT AKSI:    Medium × Large            = 2
İKON AKSI:     With icon × Without icon  = 2

TOPLAM:  2 × 2 × 2 = 8 variant
```

Hocanın söylediği minimum: **4 variant**.
Tavsiye edilen: **8-12 variant**.

### 10.4 Slash Naming (KRİTİK)

```
default / medium / icon-on
default / medium / icon-off
hover / medium / icon-on
hover / medium / icon-off
default / large / icon-on
...
```

Slash’le ayırmazsan Figma property panel’i yapmaz.

### 10.5 İkon Variant Sistemi

```
ADIM 1: 5+ ikon yan yana
ADIM 2: Hepsini seç → "Create Multiple Components"
ADIM 3: Hepsini seç → "Combine as Variants"
ADIM 4: Property ismi: "Icon"
```

### 10.6 Word Dosyasında Variant Bölümü

- Sağ panelin variant property dropdown’unu **ekran alıntısı** yap
- Word’e yapıştır
- Açıklama: “Buton component’i 8 variant içeriyor. Sağ panelden state, boyut, ikon seçilebilir.”

---

## 11) Grid Sistemi

### 11.1 Standartlar (Gün 5)

| Cihaz | Kolon | Margin | Gutter |
| --- | --- | --- | --- |
| **Mobile (senin projen)** | **4 kolon** | **24 px** | **24 px** |
| Tablet | 8 kolon | 24-32 | 16-24 |
| Desktop | 12 kolon | 80-120 | 24 |

### 11.2 Mobile Grid Yapısı (393 px ekran)

```
┌──────────────────────────────────────┐
│ 24 │ COL │ 24 │ COL │ 24 │ COL │ 24 │ COL │ 24 │
│ M  │     │ G  │     │ G  │     │ G  │     │ M  │
└──────────────────────────────────────┘
  ↑                                          ↑
margin                                    margin
24px                                       24px
```

### 11.3 Yapım

```
ADIM 1: Frame seç (Login page)
ADIM 2: Sağ panel → Layout Grid → +
ADIM 3: "Grid" yerine "Columns" seç
ADIM 4: Count: 4
ADIM 5: Margin: 24
ADIM 6: Gutter: 24
ADIM 7: Color: kırmızı (default kalsın)
ADIM 8: Style olarak kaydet
ADIM 9: Diğer 2 sayfaya da uygula
```

### 11.4 Shift+G — Açıp Kapama

> Tasarım yaparken grid açık tut, **export ederken kapat** (kırmızı çizgiler PDF’e çıkmasın).
> 

### 11.5 Word Dosyasında Grid Bölümü

- Bir sayfanın **grid açık halini** ekran alıntısı yap
- Word’e yapıştır
- Altına yaz: “Mobile Grid: 4 kolon, Margin: 24 px, Gutter: 24 px”

---

## 12) 3 Ekran

### 12.1 LOGIN PAGE — Kesin Yapılacaklar

```
┌────────────────────────────────┐
│ 9:41   📶 📡 🔋                │  ← Status Bar (0px hizalı)
├────────────────────────────────┤
│                                │
│            [LOGO]              │  ← Logo (component, ortalı)
│                                │
│         Hoş Geldiniz           │  ← H1 başlık (28px SemiBold)
│       Hesabınıza giriş yapın   │  ← Body subtitle
│                                │
│   ┌────────────────────────┐  │  ← Username Input
│   │ Kullanıcı Adı          │  │     (component, 44px)
│   └────────────────────────┘  │
│                                │  ← gap: 12-16 px
│   ┌────────────────────────┐  │  ← Password Input
│   │ Şifre              [👁] │  │     (component, 44px)
│   └────────────────────────┘  │
│                                │
│         Şifremi Unuttum?       │  ← Ghost buton
│                                │
│                                │  ← gap: 24-32 px
│   ┌────────────────────────┐  │  ← Primary Button (Fill width)
│   │     Giriş Yap         │  │     (component, 52px Large)
│   └────────────────────────┘  │
│                                │
│         ──── veya ────         │  (opsiyonel divider)
│                                │
│   [G] Google ile devam et      │  (opsiyonel social)
│                                │
│                                │
│           ━━━━                 │  ← Home indicator
└────────────────────────────────┘
```

**Checklist:**
- [ ] Status bar **0 px hizada** (üste yapışık)
- [ ] Logo **ortalı**, büyük puntolu — **component instance**
- [ ] **H1 başlık** (“Hoş Geldiniz”) — Text Style ile
- [ ] **Username Input** — component instance, **Static label**, 44 px
- [ ] **Password Input** — component instance, **göz ikonu trailing**, 44 px
- [ ] Inputlar arası gap: **12-16 px**
- [ ] (Opsiyonel) “Şifremi Unuttum” — **Ghost buton**
- [ ] Form ile buton arası gap: **24-32 px**
- [ ] **Primary Button** — kart genişliği (Fill Container), 52 px Large
- [ ] Buton text’i: **“Giriş Yap”** (fiil, emir kipi)
- [ ] (Opsiyonel) Sosyal giriş — secondary butonlar
- [ ] Home indicator bar (mobil için)
- [ ] **Tüm yapı Auto Layout** zinciri içinde
- [ ] **Grid açık** (4-col mobile)

### 12.2 HOME PAGE — Kesin Yapılacaklar

```
┌────────────────────────────────┐
│ 9:41   📶 📡 🔋                │  ← Status Bar
├────────────────────────────────┤
│                                │
│  ┌────────────────┐ ┌────────┐│  ← Search Box + Action Button
│  │ 🔍 Arama       │ │   ⚙️   ││     (component instance + icon button)
│  └────────────────┘ └────────┘│
│                                │
│  Tatilini Seç                  │  ← H3 başlık (16px SemiBold)
│                                │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ → │  ← Yatay scroll filter buttons
│  │P │ │P │ │P │ │P │ │P │   │     (variant'lı buton instances)
│  └──┘ └──┘ └──┘ └──┘ └──┘    │
│                                │
│  ┌────────────┐ ┌────────────┐│  ← 2-col kart grid
│  │            │ │            ││     (en az 4-6 kart)
│  │  [Image]   │ │  [Image]   ││     (Aspect Ratio Lock açık)
│  │            │ │            ││
│  │ Title      │ │ Title      ││
│  │ ★★★★☆  $99│ │ ★★★★★ $129││
│  └────────────┘ └────────────┘│
│                                │
│  ┌────────────┐ ┌────────────┐│
│  │  [Image]   │ │  [Image]   ││
│  │            │ │            ││
│  │ Title      │ │ Title      ││
│  └────────────┘ └────────────┘│
│                                │
├────────────────────────────────┤
│  🏠   🔍   ❤️   👤              │  ← Bottom Nav (fixed)
└────────────────────────────────┘
```

**Checklist:**
- [ ] Status bar (0 px hizalı)
- [ ] **Search Box** + action button — component instance
- [ ] **H3 başlık** (“Tatilini Seç” vb.) — Text Style
- [ ] **Yatay scroll filter buttons** — variant’lı buton instance’ları (en az 5)
- [ ] Filter container: Auto Layout yatay, **Clip Content açık**
- [ ] **2 kolon kart grid’i** — en az **4-6 kart**
- [ ] Her kart: component instance, nested Auto Layout
- [ ] Görsellerde **Aspect Ratio Lock** açık
- [ ] Bottom nav bar — fixed, 4-5 ikon, **gap: auto**
- [ ] **Prototype:** sayfa vertical scroll açık
- [ ] **Grid açık** (4-col mobile)

### 12.3 DETAIL PAGE — Kesin Yapılacaklar

```
┌────────────────────────────────┐
│ 9:41   📶 📡 🔋                │  ← Status Bar
├────────────────────────────────┤
│  ┌────────────────┐ ┌────────┐│  ← Aynı search bar
│  │ 🔍 Arama       │ │   ⚙️   ││     (component re-use)
│  └────────────────┘ └────────┘│
│                                │
│   ←  Tur Detay Sayfası         │  ← Geri butonu + H2 başlık
│                                │
│  ┌──────────────────────────┐ │  ← Hero Image
│  │                          │ │     (büyük görsel, Aspect Ratio Lock)
│  │       [Hero Image]       │ │
│  │                          │ │
│  └──────────────────────────┘ │
│                                │
│  Kapadokya Balon Turu          │  ← H2 (20px Regular)
│  3 Gün · Tüm Dahil            │  ← H3 (16px SemiBold) subtitle
│                                │
│  Lorem ipsum dolor sit amet,   │  ← Body (16px Regular)
│  consectetur adipiscing elit.  │     paragraf
│  Sed do eiusmod tempor...      │
│                                │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ → →     │  ← Mini galeri (yatay scroll)
│  │I1│ │I2│ │I3│ │I4│           │     (Clip Content + horizontal AL)
│  └──┘ └──┘ └──┘ └──┘           │
│                                │
│  ₺ 12.500 / kişi   [Rezerve]   │  ← Bottom CTA bar
│                                │     (gap: auto, fiyat sol, buton sağ)
└────────────────────────────────┘
```

**Checklist:**
- [ ] (Opsiyonel) **Geri butonu** sol üst — Icon button (44×44 touch)
- [ ] Aynı **Search Bar** component (re-use)
- [ ] **Hero Image** — Aspect Ratio Lock, büyük
- [ ] **H2 title** — Text Style
- [ ] **H3 subtitle** — Text Style
- [ ] **Body paragraph** — Text Style
- [ ] (Opsiyonel) **Mini galeri** — yatay scroll, **Clip Content açık**
- [ ] **CTA bar** altta — gap: auto (price solda, primary buton sağda)
- [ ] **Prototype:** Home’dan kart tıklanınca buraya gelsin
- [ ] **Grid açık** (4-col mobile)

---

## 13) Prototype

> Opsiyonel ama “tasarım canlı görünsün” diyorsan değer katar.
> 

### 13.1 Temel Mantık

```
TRIGGER (tetikleyici)  →  ACTION (eylem)  →  ANIMATION (animasyon)
─────────────────────       ─────────────       ─────────────────
On tap (tıkla)              Navigate to         Smart Animate
On hover                    Change to           Instant
After delay                 Back                Move in
                            Open overlay         Dissolve
```

### 13.2 Senin Projende Yapılabilecekler

| # | Etkileşim | Adım |
| --- | --- | --- |
| 1 | Login → Home geçişi | Login butonuna **On tap → Navigate to** Home |
| 2 | Home kart → Detail | Karta **On tap → Navigate to** Detail |
| 3 | Geri butonu | Detail’deki ←’ya **On tap → Back** |
| 4 | Buton hover | Variant geçişi — **Smart Animate** |
| 5 | Splash screen | After delay → Logo büyüsün — Smart Animate |

### 13.3 Flow Starting Point

- Login page’i seç → sağ panelde **“Flow starting point”** ekle
- Bu, prototype’ı çalıştırınca **buradan başlasın** demek

### 13.4 Word Dosyasında Prototype Bölümü

- Prototype akışını **ekran alıntısı** olarak göster (sayfalar arası oklarla bağlı hali)
- Word’e yapıştır
- (Opsiyonel) Figma view link de ekle — okuyucu canlı görebilsin

---

## 14) Teslim Formatı

> 🚨 **Google Forms — 1 KEZ YÜKLEME HAKKI VAR.** Acele etme.
> 

### 14.1 Teslim Edilecek 2 Dosya

```
1. PROJE_ADI_ekranlar.pdf     ← 3 ekran (Login + Home + Detail)
2. PROJE_ADI_dokuman.docx     ← Proje tanıtım dokümanı
```

### 14.2 PDF Spec

| Özellik | Değer |
| --- | --- |
| Sayfa sayısı | 3 (her sayfada 1 ekran) |
| Export’tan | Figma → Export → **2x veya 3x** |
| Format | PDF |
| Çözünürlük | Yüksek (export’ta 3x al) |
| Boyut | A4 veya iPhone aspect (393×852 oranı) |

**PDF içinde:**
- Sayfa 1: Login ekranı (tek, ortada büyük)
- Sayfa 2: Home ekranı
- Sayfa 3: Detail ekranı

> ⚠️ Grid çizgileri **görünmesin** — export öncesi Shift+G ile kapat.
> 

### 14.3 Word Doc Spec (Kritik!)

Hocanın altın kuralı: **“YAZMA, GÖRSEL GÖSTER.”**

### Word Doc Sayfa Yapısı

```
Sayfa 1:  Kapak
   - Proje Adı
   - Kullanıcı Adı (Senin adın)
   - Tarih
   - PNC Group Staj — UI/UX Bitirme Ödevi

Sayfa 2:  Proje Tanıtımı
   - 2-3 paragraf: ne yaptın, neyi hedefliyor, kim için
   - Hedef kitle, ana akış

Sayfa 3:  Renk Paleti
   - Renk paletinin GÖRSELİ (export edilmiş)
   - Her rengin altına HEX kodu
   - Kısa açıklama: "Primary mavi sakinlik ve güveni temsil ediyor"

Sayfa 4:  Tipografi
   - Text style görselinin EXPORT'u
   - Altına: Font adı (Inter), weight'ler, boyutlar
   - "H1: 28px SemiBold" gibi liste

Sayfa 5:  Component / Variant
   - Buton variant'larının export'u
   - Sağ panelin variant property dropdown'ı ekran alıntısı
   - Component sayısı + variant sayısı bilgisi

Sayfa 6:  Auto Layout Örneği
   - Bir kartın Auto Layout açık halinin ekran alıntısı
   - Padding, gap değerleri yazılı

Sayfa 7:  Grid Sistemi
   - Bir sayfanın grid açık hali
   - "Mobile, 4 kolon, Margin 24, Gutter 24"

Sayfa 8 (opsiyonel):  Prototype
   - Prototype akışının (sayfalar arası bağlı hali) ekran alıntısı
   - Figma view link

Sayfa 9 (opsiyonel):  Kullanılan Pluginler / Kaynaklar
   - Iconify, Phosphor Icons, Foundation Color Generator, Mobbin vs.
```

### 14.4 Word Doc Yazım Tonu

- ❌ “Bu projede yaptıklarım…” (uzun yazı)
- ✅ Başlık + görsel + altında 2-3 cümle teknik açıklama

> Akademik makale değil, **portfolyo sunumu** gibi düşün.
> 

### 14.5 Görsel Export Ayarları

```
Figma → Frame seç → Sağ panel → Export
   Format: PNG
   Çarpan: 2x veya 3x
   Suffix: @2x veya @3x
```

PNG ile Word’e yapıştırınca **bulanık olmaz** — bu yüzden 2x/3x.

### 14.6 (Opsiyonel) Figma View Link

```
Figma → Share → "Can view" (Anyone with the link)
URL'i kopyala → Word doc'a yapıştır
```

> Hoca açıp **canlı dosyaya bakabilsin** — bu büyük bir + puan.
> 

---

## 15) Yapım Sırası

> Bu sırayı takip et — atlama, geri dönmek zorunda kalmazsın.
> 

### Aşama 1: Hazırlık (1-2 saat)

```
1. Figma'da yeni dosya aç → "PNC Staj Projesi"
2. 4 page oluştur:
   • Design System
   • Login
   • Home
   • Detail
3. Cihaz frame'lerini ekle (iPhone 16, 393×852) — 3 page'in her birine
4. Grid sistemini kur (her sayfaya 4-col, margin 24, gutter 24)
5. Renk paletini seç (Adobe Color, Coolors)
6. Font seç (Google Fonts'tan Inter veya Poppins)
```

### Aşama 2: Design System Sayfası (3-4 saat)

```
1. Color Style'ları kaydet (slash naming!)
2. Text Style'ları kaydet (min 5)
3. Buton component'lerini yap (3 tür × 2 boyut × 2 state = 12 variant)
4. Input component'lerini yap (text, password — variant'lı)
5. İkon setini import et (Phosphor) → Combine as Variants
6. Search Box component
7. Logo component
8. Card component (boş şablon)
```

### Aşama 3: Login Page (1-2 saat)

```
1. Status bar ekle (0 px hizada)
2. Logo instance koy → ortala
3. H1 + Body yaz
4. Input instance'larını ekle (username, password)
5. Primary Button instance
6. Tüm yapıyı Auto Layout zinciriyle bağla (en dış container Fill)
7. Grid'e oturduğunu kontrol et
```

### Aşama 4: Home Page (2-3 saat)

```
1. Search Box + Action Button (yatay AL)
2. H3 başlık
3. Filter buttons (yatay scroll — Clip Content açık)
4. 2-col card grid (6 kart örneği yap)
5. Bottom Nav (yatay AL, gap: auto)
6. Tüm yapı responsive (Fill chain)
```

### Aşama 5: Detail Page (1-2 saat)

```
1. Search Box (re-use Home'dan)
2. Geri butonu + H2 başlık
3. Hero Image (Aspect Ratio Lock)
4. H2 + H3 + Body content
5. Mini galeri (yatay scroll - opsiyonel)
6. Bottom CTA bar (gap: auto)
```

### Aşama 6: Prototype (1 saat — opsiyonel)

```
1. Login butonu → Home (Navigate to)
2. Home kart → Detail (Navigate to)
3. Detail ← → Back
4. Flow starting point: Login
```

### Aşama 7: Export (30 dakika)

```
1. Her sayfa için Shift+G → grid'i kapat
2. Frame seç → Export → 2x veya 3x → PDF
3. 3 ekranı tek PDF'e birleştir (online merger veya Preview)
```

### Aşama 8: Word Doc Hazırlama (2-3 saat)

```
1. Kapak sayfası
2. Color palette export → yapıştır
3. Text style export → yapıştır
4. Buton variant export → yapıştır
5. Auto Layout açıklama görselleri
6. Grid görseli
7. (Opsiyonel) Prototype akış görseli + Figma view link
```

### Aşama 9: Bekletme + Kontrol (1 hafta)

```
1. 1 hafta dinlendir
2. Taze gözle aç → kontrol et
3. Bu doküman'ın "Son Kontrol Listesi" bölümünü çalıştır
4. Düzelt → tekrar export et
```

### Aşama 10: Teslim (5 dakika)

```
1. Google Forms aç
2. PDF + Word yükle
3. Submit → ARTIK DEĞİŞTİREMEZSİN.
```

---

## 16) Yapmaman Gerekenler

> Hocanın “şunu yaparsan not düşer” dediği hatalar.
> 

### ❌ Tipografi Hataları

- ❌ Line-height: 1.5 manuel ver (AUTO yap — Gün 4’te 3 kez tekrar etti)
- ❌ 5+ font ailesi kullan (max 2)
- ❌ Aynı boyutta 3 farklı weight kullan (kafa karıştırır)

### ❌ Renk Hataları

- ❌ Düz renk yerine random hex kullan (“güzel görünüyor” demek)
- ❌ Beyaz buton üstüne beyaz yazı (kontrast 4.5:1 altı)
- ❌ 10+ renk kullan (6-8 yeter)
- ❌ Slash naming yerine random isim (“renk1”, “yesilim” → ASLA)

### ❌ Buton Hataları (Slayt 15-16-18)

- ❌ “Evet / Hayır / Tamam / Devam” buton metni → **Fiil kullan**
- ❌ Bir ekranda 2+ primary buton → Tek primary
- ❌ 44 px altında touch target → Min 44
- ❌ Auto Layout’suz buton → ASLA
- ❌ Hover state yok → Min 2 state lazım

### ❌ Input Hataları

- ❌ Placeholder’ı label yerine kullan → **Static label** kullan
- ❌ Border radius butondan farklı → Tutarlı tut
- ❌ Number input ile telefon → **Text input** kullan
- ❌ Password için göz ikonu yok → Mutlaka olsun

### ❌ İkon Hataları (Slayt 5-6)

- ❌ PNG ikon → **SVG** kullan
- ❌ Farklı stil ikon karıştır (outline + filled) → Tek stil
- ❌ Farklı set’ten ikon karıştır → Tek set
- ❌ Gradient ikon → ASLA
- ❌ 24×24 yerine random boyut → 24×24 mobil

### ❌ Auto Layout Hataları

- ❌ Tek text’e Auto Layout (gereksiz nested)
- ❌ Manuel sürükleyerek Auto Layout içine yerleştirmek
- ❌ Hug yerine Fill verip “neden büyüyor” demek
- ❌ Fill yerine Fixed verip “neden responsive değil” demek
- ❌ Atom-molekül zincirini bozmak

### ❌ Component Hataları

- ❌ Main component’i sayfaya yerleştirmek (instance kullan)
- ❌ Variant olmadan farklı boyutta 5 component yapmak
- ❌ Component dışında elle pozisyonlanmış element

### ❌ Spacing Hataları

- ❌ 4’ün katı olmayan değer (`13`, `15`, `22` → ASLA)
- ❌ Her yerde farklı değer (“14 başka yerde 16”)
- ❌ Grup içi gap > grup dışı gap (tersi olmalı)

### ❌ Grid Hataları

- ❌ Grid sistemi yok → Zorunlu
- ❌ Export’ta grid çizgileri açık (kırmızı çizgiler PDF’te görünür)
- ❌ Mobil için 12 kolon kullan (4 kolon kullan)

### ❌ Teslim Hataları

- ❌ Yazıyla anlat (görselle göster)
- ❌ Düşük çözünürlük export (2x veya 3x al)
- ❌ Acele yükle (1 hafta dinlendir, kontrol et)
- ❌ Figma view link kapalı (paylaşıma açık tut)

---

## 17) Son Kontrol Listesi

> Teslim öncesi bu listeyi baştan sona çalıştır. Her ✅ olmalı.
> 

### 🎨 Design System

- [ ]  Color Style’lar slash naming ile kayıtlı (min 6-8)
- [ ]  Text Style’lar kayıtlı (min 5: H1, H2, H3, Body, Button)
- [ ]  Grid Style kayıtlı (Mobile 4-col, margin 24, gutter 24)
- [ ]  Effect Style kayıtlı (drop shadow vb. varsa)
- [ ]  Design System ayrı bir page’de organize

### 🔘 Butonlar

- [ ]  Min 3 buton tipi (Primary, Secondary, Ghost)
- [ ]  Min 4 variant (state × boyut)
- [ ]  Min yükseklik 44 px (touch target)
- [ ]  Border radius tutarlı (örn. hep 8 px)
- [ ]  **Fiil kullanılmış metin** (“Giriş Yap”, “Sil”)
- [ ]  Tek ekranda 1 primary
- [ ]  Hover state yapılmış
- [ ]  **Tümü Auto Layout’lu**
- [ ]  **Tümü Component instance**

### 📝 Inputlar

- [ ]  Min 2 tür (Text, Password)
- [ ]  **Static label** (üstte, her zaman görünür)
- [ ]  Yükseklik 44 px
- [ ]  Border radius butonlarla tutarlı
- [ ]  **Password için göz ikonu** trailing
- [ ]  Min 2-3 state (Inactive, Focused, Error)
- [ ]  **Tümü Component instance**
- [ ]  **Variant’lı**

### 🎯 İkonlar

- [ ]  Tek set’ten (Phosphor önerilen)
- [ ]  **SVG formatında**
- [ ]  **24 × 24** boyutta (mobil)
- [ ]  **44 × 44 touch area** padding ile sağlanmış
- [ ]  Aynı stroke kalınlığı
- [ ]  Tek renk (text rengiyle uyumlu)
- [ ]  **Combine as Variants** yapılmış (min 5 ikon)

### 🔄 Auto Layout

- [ ]  Tüm butonlarda
- [ ]  Tüm inputlarda
- [ ]  Tüm kartlarda (nested zincir)
- [ ]  Header’da (gap: auto)
- [ ]  Bottom nav’da (gap: auto)
- [ ]  Form container’larda (dikey)
- [ ]  **Atom-molekül kuralı** tüm seviyelerde
- [ ]  **line-height: AUTO** her metinde

### 🧱 Component & Variant

- [ ]  Buton component (variant’lı)
- [ ]  Input component (variant’lı)
- [ ]  İkon variant set’i (min 5)
- [ ]  Logo component
- [ ]  Search Box component
- [ ]  Kart component
- [ ]  **Slash naming** uygulanmış

### 📐 Grid

- [ ]  3 sayfanın **hepsinde** grid açık (tasarım için)
- [ ]  Mobile 4-col, margin 24, gutter 24
- [ ]  **Export’ta grid kapalı** (kırmızı çizgi yok)
- [ ]  Grid style olarak kayıtlı

### 📱 Login Page

- [ ]  Status bar (0 px hizalı)
- [ ]  Logo instance (ortalı, büyük)
- [ ]  H1 başlık
- [ ]  Username input (component, Static label)
- [ ]  Password input (component, göz ikonu)
- [ ]  Primary Button (Fill width, “Giriş Yap”)
- [ ]  (Opsiyonel) “Şifremi Unuttum” ghost buton
- [ ]  (Opsiyonel) Sosyal giriş butonları
- [ ]  Tüm yapı **Auto Layout zinciri**
- [ ]  Grid’e oturuyor

### 📱 Home Page

- [ ]  Status bar
- [ ]  Search Box + action button (component)
- [ ]  H3 başlık
- [ ]  Yatay scroll filter buttons (variant’lı)
- [ ]  **2-col card grid** (en az 4-6 kart)
- [ ]  Her kart: component instance, Aspect Ratio Lock
- [ ]  Bottom Nav (fixed, gap: auto)
- [ ]  **Prototype:** vertical scroll
- [ ]  Grid açık

### 📱 Detail Page

- [ ]  Status bar
- [ ]  (Opsiyonel) Geri butonu (44×44 touch)
- [ ]  Search bar (component re-use)
- [ ]  Hero Image (Aspect Ratio Lock)
- [ ]  H2 + H3 + Body content
- [ ]  (Opsiyonel) Mini galeri (yatay scroll, Clip Content)
- [ ]  Bottom CTA bar (gap: auto, primary buton sağda)
- [ ]  **Prototype:** Home’dan geliyor
- [ ]  Grid açık

### 🎬 Prototype (Opsiyonel ama +)

- [ ]  Login butonu → Home (Navigate to)
- [ ]  Home kart → Detail (Navigate to)
- [ ]  Detail ← → Back
- [ ]  Smart Animate buton hover’da
- [ ]  Flow starting point: Login

### 📄 Teslim Dosyaları

### PDF

- [ ]  3 ekran, her biri 1 sayfa
- [ ]  **2x veya 3x export**
- [ ]  Grid çizgileri **kapalı**
- [ ]  Yüksek çözünürlük

### Word Doc

- [ ]  Kapak sayfası (proje adı + adın + tarih)
- [ ]  Proje tanıtımı (2-3 paragraf)
- [ ]  **Renk paleti görseli** + HEX kodları
- [ ]  **Tipografi görseli** + font/weight bilgisi
- [ ]  **Component/Variant görseli** + variant property ekran alıntısı
- [ ]  **Auto Layout açıklama görseli** (padding/gap değerleri)
- [ ]  **Grid görseli** (açık halde)
- [ ]  (Opsiyonel) Prototype akış görseli + Figma view link
- [ ]  (Opsiyonel) Kullanılan plugin listesi

### 🚀 Son Kontroller

- [ ]  **1 hafta dinlendirdim**, taze gözle baktım
- [ ]  Hiçbir element manuel pozisyonda değil
- [ ]  Tüm tekrarlayan element component
- [ ]  Buton/input variant’ları çalışıyor (dropdown’la değişiyor)
- [ ]  Renk paleti tutarlı
- [ ]  Tipografi hiyerarşisi net
- [ ]  Spacing 4’ün katı her yerde
- [ ]  Tek primary buton kuralı uygulandı
- [ ]  Buton metinleri fiil
- [ ]  İkonlar SVG ve aynı stil
- [ ]  Figma view link açık (Anyone with the link → View)
- [ ]  PDF + Word hazır
- [ ]  **Google Forms 1 kez yükleme hakkı olduğunu hatırlıyorum**

---

## 📚 Hızlı Referans — Tek Bakışta Değerler

```
═══════════════════════════════════════════════════════
ÖLÇÜLER (PX)
═══════════════════════════════════════════════════════
Frame:              393 × 852 (iPhone 16)
Dokunma alanı:      44 × 44 (min)
İkon (mobil):       24 × 24
Buton min:          44 (tercihen 48-52 large)
Input min:          44 (medium - en yaygın)
Border radius:      8 px (standart modern)

═══════════════════════════════════════════════════════
SPACING (PX)
═══════════════════════════════════════════════════════
İkon-text arası:    4
Component içi:      8
Orta padding:       12
STANDART:           16  ⭐
Mobil margin:       20-24
Gruplar arası:      24
Section arası:      32-48

═══════════════════════════════════════════════════════
GRID
═══════════════════════════════════════════════════════
Cihaz:              Mobile
Kolon:              4
Margin:             24
Gutter:             24

═══════════════════════════════════════════════════════
TYPOGRAPHY
═══════════════════════════════════════════════════════
H1:                 28 / SemiBold
H2:                 20 / Regular
H3:                 16 / SemiBold
Body:               16 / Regular
Button:             16 / SemiBold
Label:              14 / Regular
Line-height:        AUTO ⭐

═══════════════════════════════════════════════════════
RENGİ
═══════════════════════════════════════════════════════
Color Styles:       Min 6-8 (slash naming)
Text Styles:        Min 5
Effect Styles:      Min 2-3 (shadows)
Contrast:           AA (4.5:1)

═══════════════════════════════════════════════════════
COMPONENT
═══════════════════════════════════════════════════════
Buton variant:      Min 4 (ideal: 8-12)
Input variant:      Min 2-3 state
İkon variant:       Min 5 (Combine as Variants)
Naming:             slash/ ayırıcı

═══════════════════════════════════════════════════════
AUTO LAYOUT
═══════════════════════════════════════════════════════
Buton iç:           Auto Layout (gap 8)
Form:               Dikey AL (gap 16-20)
Header:             Yatay AL (gap: auto)
Bottom nav:         Yatay AL (gap: auto)
Kart:               Nested AL (dikey, gap 12-16)
Resizing chain:     Fill her seviyede
```

---

## 🎯 SON SÖZ

Bu proje **araç öğrenmek** üzerine. Hocanın felsefesi: “En doğru renk veya font değil, **Figma’yı sistem olarak kullanmayı öğrenmek**.”

Yani değerlendirme kriteri:
1. **Tutarlılık** — Spacing/renk/tipografi her yerde aynı sistemde mi?
2. **Sistem** — Component/Variant/Auto Layout/Grid çalışıyor mu?
3. **Erişilebilirlik** — Touch target, kontrast, label kuralları
4. **Hiyerarşi** — Tek primary, fiil metni, görsel hiyerarşi
5. **Teslim Kalitesi** — Word’de görsellerle anlatılmış mı?

Renk ve font seçimi **ikincil**. Sistem birinci.

İyi çalışmalar — başarılı teslimler! 🚀