# 📘 Gün 5 — Proje Yapımı, Component & Variant, Prototype, Grid & Styles

> **Hafta 1 — UI/UX & Web Tasarımı: Figma — SON GÜNEğitmen:** Meltem Turan (PNC Group)
**Süre:** ~180 dk + soru-cevap
**Gün 5’in Akışı:** Fixed Width derin (min/max) → Component & Variant deep → Buton mimarisi (3×2 = 6 variant) → İkon mimarisi → Toggle Switch variant → Tam proje yapımı (Login + Home + Detail) → Color & Text Styles → Grid Sistemi → Search Box → Tur kartları + filtreler → Prototype (Smart Animate, after delay, scroll) → Splash screen animasyonu → Buton hover animasyonu → Final teslim formatı.
> 

---

## 📅 Hafta Akışı — TAMAMLANDI ✅

| Gün | Konu | Durum |
| --- | --- | --- |
| ✅ Pzt | UI/UX temelleri, 7 prensip, renk, tipografi | Tamamlandı |
| ✅ Sal | Butonlar, inputlar, ikonlar, Figma arayüzü | Tamamlandı |
| ✅ Çar | Constraints, Şekil araçları, Effects, Auto Layout girişi | Tamamlandı |
| ✅ Per | Auto Layout derin, Nested, Resizing, Component intro | Tamamlandı |
| 🟢 **Cum (Bugün)** | **Tam proje + Variant + Prototype + Grid + Styles** | **İşleniyor** |
| 🔜 Son teslim | 22 Haziran — Portfolyo teslim haftası | Önümüzde |

---

## 1) Fixed Width Derin — Min/Max Kullanımı

Önceki gün Fixed/Hug/Fill öğrendik. Bugün **Fixed Width’in nüansı**: tek değer değil, **range** olarak da çalışabiliyor.

### 1.1 Basit Kullanım

```
Fixed Width: 200px  →  Görsel hep 200 piksel kalır
```

### 1.2 Min/Max ile Kullanım

```
Fixed Width: 200px
  Min Width: 100px
  Max Width: 400px

Anlamı: Container büyürken/küçülürken
  • 100px'in altına inme
  • 400px'in üzerine çıkma
  • Bu range'de fill gibi davran
```

### 1.3 Görsel Örnek — Görselli Kartlarda

```
┌─────────────────────────────┐
│                             │
│  ┌─────┐                    │
│  │ IMG │  Title             │
│  │     │  Description...    │  ← Title fill, IMG fixed (with min/max)
│  └─────┘                    │
│                             │
└─────────────────────────────┘
```

Kart küçüldüğünde IMG **100px’ten küçülmez**.
Kart büyüdüğünde IMG **400px’i geçmez**.
Aradaki alan title’a kalır (Fill Container).

### 1.4 Mobil/Web Uyumluluğu için Pratik

```
Kart genişliği: 187px (mobile minimum)
  Min: 187 (iPhone 16'da hiç küçülmesin)
  Max: 400 (web'de bu kadar büyüsün, ortaya yaslansın)
```

> 💻 **CSS karşılığı:** `min-width: 100px; max-width: 400px;` veya CSS Grid’de `minmax(100px, 400px)`.
> 

---

### 🎯 PROJE NOTU — Fixed Width Min/Max

> • [ ] Görsellerinde min/max width kullan — mobile’da daralmasın, web’de patlamasın.
• [ ] Avatar ve thumbnail’ları için Min: 48, Max: 96 gibi range belirle.
> 

---

## 2) Component’in Tekrar Hatırlatması

> Önceki gün giriş yapılmıştı. Bu gün bütün proje **component üzerine** kurulacağı için tekrar.
> 

### 2.1 Mantık Şeması

```
┌─────────────────────────────────────────────┐
│         MAIN COMPONENT (kaynak)             │
│         Mor diamond ◆ ikonu                 │
│         Ctrl + Alt + K ile yapılır          │
└──────────────────┬──────────────────────────┘
                   │
                   ▼ (sürükle = instance üret)
   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
   │ Instance 1  │ │ Instance 2  │ │ Instance 3  │
   │ İçi BOŞ ◇   │ │ İçi BOŞ ◇   │ │ İçi BOŞ ◇   │
   └─────────────┘ └─────────────┘ └─────────────┘
```

### 2.2 Kuralı Tekrar Et

| Değişiklik | Nerede? | Etki |
| --- | --- | --- |
| Renk | **Main**’de | Tüm instance’lara yansır ✅ |
| Renk | **Instance**’ta | Sadece o instance ⚠️ |
| Text | Instance’ta | Sadece o instance |
| Yapı (auto layout) | Main’de | Hepsine yansır |

### 2.3 Component Olması Gerekenler

> ✅ Tekrar eden her şey:
> 
- Butonlar (zorunlu)
- Input alanları (zorunlu)
- İkonlar (zorunlu)
- Logo
- Search box
- Cards (product, list, info)
- Navigation bar
- Tab bar
- Progress bar
- Tooltip
- Modal/Dialog

> ❌ Bunlar **gereksiz**:
- 300 farklı ürün görselinin hepsini component yapmak (mantığı anlat, bir tanesini yap)
- Tek seferlik dekoratif öğeler
- Hero section’lar
> 

---

## 3) VARIANT — Tasarım Sisteminin Beyni

> Bugünün en kritik konularından biri. Aynı component’in **farklı durumlarını** tek bir yapı içinde tutar.
> 

### 3.1 Neden Variant?

Bir butonu düşün. Şu durumları olabilir:

```
DURUM AKSI               BOYUT AKSI              İKON AKSI
─────────────────        ─────────────────       ─────────────────
• Default                • Small                  • Icon ON
• Hover                  • Medium                 • Icon OFF
• Active/Selected        • Large
• Disabled
• Error
```

**Hepsi tek tek component olsa:** 5 × 3 × 2 = **30 component** olur. Yönetilmez.

**Variant kullanırsan:** **1 component**, içinde 30 variant. Sağ panelden tek tıkla seçilir.

### 3.2 Variant Yapımı — Adım Adım

```
ADIM 1: İlk butonu hazırla
  • Text + auto layout + padding + fill + radius

ADIM 2: Ctrl+Alt+K → Component yap

ADIM 3: İsimlendir — slash sistemiyle
  Örnek: "default / icon-off / large"
  (slash'lar otomatik olarak hierarchical property'lere döner)

ADIM 4: Bu component'i ALT+sürükle ile kopyala
  • Şimdi 2. variant: aynı componentin farklı versiyonu
  • Örn: "hover / icon-off / large" (rengini değiştir)
  • Ctrl+Alt+K ile bunu da component yap

ADIM 5: Tüm varyasyonları yap
  • default / hover / error  (3 durum)
  • icon-on / icon-off       (2 ikon)
  • large / medium           (2 boyut)
  • Toplam: 3 × 2 × 2 = 12 varyasyon

ADIM 6: HEPSİNİ seç → "Combine as Variants"
  • Sağ tık → Combine as Variants
  • Veya sağ panel → Combine as Variants

SONUÇ: Tek bir component grubu, içinde 12 variant
       Sağ panelde 3 property dropdown'ı (durum, ikon, boyut)
```

### 3.3 İsimlendirme Kuralı — KRİTİK

```
❌ YANLIŞ:
   "Buton 1"
   "Buton büyük mavi"
   "Buton2 hover"

✅ DOĞRU (slash ile):
   "default / icon-off / large"
   "hover / icon-on / medium"
   "error / icon-off / large"
```

Slash’lar Figma’ya “bu bir property hiyerarşisidir” der. Sonra:

```
Sağ panel:
  Type:    [ Default ▼ ]  ← otomatik dropdown
  Icon:    [ Icon Off ▼ ]
  Size:    [ Large ▼ ]
```

### 3.4 Görsel Sonuç

```
┌── BUTONLAR (Variant Component) ──────────────┐
│                                              │
│  default/icon-off/large  default/icon-on/large
│  ┌──────────┐            ┌────────────────┐  │
│  │ Giriş Yap│            │ 🔓 Giriş Yap   │  │
│  └──────────┘            └────────────────┘  │
│                                              │
│  hover/icon-off/large    hover/icon-on/large │
│  ┌──────────┐            ┌────────────────┐  │
│  │ Giriş Yap│            │ 🔓 Giriş Yap   │  │
│  └──────────┘            └────────────────┘  │
│                                              │
│  error/icon-off/large    error/icon-on/large │
│  ┌──────────┐            ┌────────────────┐  │
│  │ Giriş Yap│            │ 🔓 Giriş Yap   │  │
│  └──────────┘            └────────────────┘  │
│                                              │
│  ... aynısı medium boyutta ...               │
│                                              │
└──────────────────────────────────────────────┘
```

### 3.5 Minimum Variant — Proje İçin

> 🎯 **Hoca’nın projeye dair beklentisi:** En az **4-6 varyasyon** göster. Tek buton tipi olsa bile minimum 2 boyut × 2 durum.
> 

```
Minimum proje gereksinimi:
  default / medium
  hover / medium
  default / large
  hover / large
```

> 💻 **Frontend bağlantısı:** Bu Tailwind/Material UI gibi sistemlerde props gibi:
> 
> 
> ```tsx
> <Button variant="default" size="large" icon={LoginIcon} />
> <Button variant="hover" size="medium" />
> ```
> 

---

## 4) İkon Mimarisi — Toplu Variant

İkonlar genellikle 20-30 adet birden component’lenir.

### 4.1 Yöntem

```
ADIM 1: Tüm ikonları sayfaya getir (Phosphor'dan)
  • user, message, search, trash, shopping-bag, heart, vs.
  • Hepsi 24×24 olmalı

ADIM 2: Hepsini SEÇ
  • Shift ile ya da kutu seçimi ile

ADIM 3: Sağ tık → "Create Multiple Components"
  • Her biri AYRI component oldu
  • Tek tek Ctrl+Alt+K yapmaktan kurtulduk

ADIM 4: Yine hepsini seç → "Combine as Variants"
  • Şimdi tek component, 30 variant
  • Sağ panelden: "Icon" property → dropdown'dan seç
```

### 4.2 Kullanım Avantajı

```
Sayfada bir nav bar var. İkonları değiştirmek istiyorsun:
  • Eski yöntem: ikonu sil, yenisini ekle, hizala, boyutla
  • Variant yöntemi: ikonu seç → sağ panelden dropdown → bitti
```

### 4.3 İkon Variant’larında Renk

Variant içinde **selection colors** ile renk değişimleri eklenebilir:

```
Variant property'leri:
  Icon:  [ User / Message / Heart / ... ]
  Color: [ Default / Primary / White / Error ]
```

> 💡 İkonların hepsinde aynı yapıyı koru — 24×24 px, ortalı.
> 

---

### 🎯 PROJE NOTU — Variant

> Proje şartlarından **zorunlu**.
- [ ] Buton component’inde en az **4 variant** göster (default/hover × 2 boyut).
- [ ] İkonlarını **Combine as Variants** yap (en az 5 ikon).
- [ ] Word dosyasında variant’ı **görsel olarak** göster — sağ panelin variant property’lerini ekran alıntısıyla yakalayıp koy.
- [ ] İsimlendirmede slash kuralına dikkat et.
> 

---

## 5) Toggle Switch Pattern — On/Off Variant

> Aynı variant mantığı toggle/switch için de çalışıyor. Çok şık bir örnek.
> 

### 5.1 Yapım

```
ADIM 1: Toggle OFF tasarla
  • Rectangle (pill button - corner radius 50%)
  • Fill: kırmızı (off durumu)
  • İçinde küçük beyaz daire — sola yaslı

ADIM 2: Toggle ON tasarla (kopyasını al)
  • Aynı rectangle ama yeşil fill
  • Daire sağa kaymış
  • Geri kalan her şey aynı

ADIM 3: İkisini SEÇ
  • Create Multiple Components

ADIM 4: Tekrar seç → Combine as Variants
  • Property name: "Switch" veya "State"
  • Values: "Off" / "On"
```

### 5.2 Görsel

```
        OFF                          ON
   ┌─────────────┐              ┌─────────────┐
   │ ●           │              │           ● │
   │   kırmızı   │              │    yeşil    │
   └─────────────┘              └─────────────┘
```

### 5.3 Kullanım

```
Sayfada:
  Toggle component'i sürükle → Off durumda gelir
  Sağ panelden "State" → "On" seç → görsel ve renk değişir
```

> 💻 **Frontend bağlantısı:** React’te `<Switch checked={true/false} />` ile aynı mantık. Boolean state’i.
> 

> 💡 **Hoca’nın ipucu:** Bu sadece toggle’da değil — checkbox, radio, accordion açık/kapalı, modal görünür/görünmez gibi **her ikili duruma** uygulanabilir.
> 

---

## 6) Buton Mimarisi — Tam Proje Örneği (Sayısal Hesaplama)

Hoca canlı bir buton sistemi kurdu. Adım adım:

### 6.1 Hedeflenen Yapı

```
3 Durum × 2 İkon × 2 Boyut = 12 variant

       icon-off       icon-on
       ─────────      ───────
LARGE  default        default
       hover          hover
       error          error

MEDIUM default        default
       hover          hover
       error          error
```

### 6.2 Yapım Adımları

```
1. Tek bir default/icon-off/large buton yap
   • Text: "Giriş Yap"
   • Padding: 36 yatay, 18 dikey (Large)
   • Fill: Primary 500
   • Text color: White
   • Corner radius: 24 (pill button)
   • Ctrl+Alt+K → Component
   • Adı: "default / icon-off / large"

2. ALT+sürükle ile kopyala
   • Rengi koyulaştır → Hover durumu
   • Ctrl+Alt+K → Component
   • Adı: "hover / icon-off / large"

3. ALT+sürükle ile kopyala
   • Rengi error red yap → Error durumu
   • Ctrl+Alt+K → Component
   • Adı: "error / icon-off / large"

4. Default'tan kopya al, ikon ekle:
   • İçine login icon (Phosphor) ekle
   • Ctrl+Alt+K → Component
   • Adı: "default / icon-on / large"

5. Aynı şekilde:
   • "hover / icon-on / large"
   • "error / icon-on / large"

6. Medium boyutlar için 6 component daha:
   • Padding: 24 yatay, 12 dikey (Medium)
   • Aynı 6 kombinasyon

7. TÜM 12 COMPONENT'İ SEÇ
   • Sağ tık → Combine as Variants

SONUÇ: Tek bir "Buton" component'i
       Property'ler:
         • Type: default / hover / error
         • Icon: on / off
         • Size: large / medium
```

### 6.3 İsimlendirme Kontrol Noktası

> ⚠️ **Hoca’nın hatırlatması:** İsimlendirmeyi yaparken **sola odaklan**. Boşluk ya da harf farkı olursa Figma o variant’ı bağımsız sayar ve combine etmez.
> 

```
Doğru:           "default / icon-off / large"
Yanlış olur:     "default / icon-off /large"    (boşluk)
Yanlış olur:     "default / icon off / large"   (dash yerine boşluk)
```

---

## 7) Tam Proje Yapımı — Login + Home + Detail

> Bu dersin **ana içeriği**. Hocayla beraber 3 ekran sıfırdan kuruldu.
> 

### 7.1 Hazırlık — Design System Sayfası

Her proje **Design System** sayfasıyla başlar. İçinde:

```
DESIGN SYSTEM SECTION:
─────────────────────
🎨 Color Palette  (primary, secondary, text, background, border)
📝 Typography     (H1, H2, H3, Body, Button, Label)
📐 Grid System    (4-col mobile, 8-col tablet, 12-col desktop)
🔘 Buttons        (variants)
📥 Inputs         (variants)
🔍 Search Box
🎯 Icons          (variants)
🏠 Logo           (light + dark)
📊 Status Bar     (üst bar)
📍 Indicator      (alt bar - iPhone home indicator)
🛏️  Cards         (product card, detail card)
```

### 7.2 Status Bar Eklemek

> Mobil tasarımın olmazsa olmazı.
> 

```
1. Communityede paylaşılan iPhone status bar'ı al
2. Component yap (dışarıdan alınmış olsa bile kendi sistemime ekle)
3. Her sayfaya kopyala
4. 0px hizaya çek (üst kenara yapıştır)
```

```
┌──────────────────────────────┐
│  9:41    📶 📡 🔋            │  ← Status bar (0px hizalı)
├──────────────────────────────┤
│                              │
│      [Sayfa içeriği]         │
│                              │
└──────────────────────────────┘
```

---

## 8) Color Styles — Detaylı Renk Yönetimi

### 8.1 Foundation Color Generator Plugin

> 🔌 **Plugin:** `Ctrl+P` → “Foundation Color Generator”
> 

Verdiğin tek bir renkten Material Design 3 paleti üretir:

```
Input:  #4A90E2 (mavi)

Output:
  blue/50   #E3F2FD  ← Çok açık
  blue/100  #BBDEFB
  blue/200  #90CAF9
  blue/300  #64B5F6
  blue/400  #42A5F5
  blue/500  #2196F3  ← Ana renk (default state için)
  blue/600  #1E88E5
  blue/700  #1976D2  ← Press/active state için
  blue/800  #1565C0
  blue/900  #0D47A1  ← Çok koyu
```

> 💡 **Kullanım pratiği:** Buton default → 500, hover → 400 (daha açık), press → 700 (daha koyu).
> 

> 💻 **Frontend bağlantısı:** Tailwind CSS’in renk sistemiyle bire bir uyumlu. `bg-blue-500 hover:bg-blue-400 active:bg-blue-700`.
> 

### 8.2 Renk Kayıt Etme — Manuel Yöntem

```
ADIM 1: Frame'e bir küçük kare çiz, rengini ver
ADIM 2: Seç → Sağ panel → Fill → 4 noktalı ikon (Styles)
ADIM 3: + ikonu → "Create new style"
ADIM 4: İsimlendir — KRİTİK SLASH KURALI
  ✅ "color/primary"
  ✅ "color/secondary"
  ✅ "text/primary"
  ✅ "text/on-primary"
  ✅ "background/1"
  ✅ "background/2"
  ✅ "border/default"
```

### 8.3 Önerilen Renk Kataloğu

```
PROJE İÇİN MİNİMUM RENKLER:
───────────────────────────
🎨 color/primary       (#XXXXXX)  — Ana marka rengi
🎨 color/secondary     (#XXXXXX)  — İkincil aksiyonlar
📝 text/primary        (#XXXXXX)  — Ana metin
📝 text/secondary      (#XXXXXX)  — Yardımcı metin
📝 text/on-primary     (#FFFFFF)  — Primary buton üstündeki yazı
🖼️  background/1       (#F5F5F5)  — Sayfa arka planı
🖼️  background/2       (#FFFFFF)  — Kart arka planı
─ border/default      (#E0E0E0)  — Border rengi
```

### 8.4 Renk Style Silme

Eğer Foundation Color Generator gibi araçlarla **istemediğin kadar çok** renk oluşturduysan:

```
Sağ panel → Local Styles → İlgili renge sağ tık → Delete Style
```

> 💡 Tek tek silmek yerine bütün paleti baştan kurmak bazen daha hızlı.
> 

---

### 🎯 PROJE NOTU — Color Styles

> • [ ] En az **6-8 renk** style olarak kaydedilmiş olsun.
• [ ] Hex kodlarını her renk altına yazılı koy (Word dosyasında).
• [ ] Primary ve secondary’yi açıkça ayır.
• [ ] text/on-primary için **mutlaka kontrast** sağla (genelde beyaz).
> 

---

## 9) Text Styles — Tipografi Kaydı

### 9.1 Minimum Stiller

```
H1 / Heading 1        28px · SemiBold     — Ana başlık
H2 / Heading 2        20px · Regular      — Bölüm başlığı
H3 / Heading 3        16px · SemiBold     — Alt başlık
Body                  16px · Regular      — Paragraf
Button                16px · SemiBold     — Buton içi yazı
Label                 14px · Regular      — Input üstü etiket
Caption (opsiyonel)   12px · Regular      — Yardımcı metin
```

### 9.2 Kayıt Etme

```
ADIM 1: Bir text yaz, fontunu ve weight'ini belirle
ADIM 2: Seç → Sağ panel → Text → 4 noktalı ikon (Styles)
ADIM 3: + → Create new style
ADIM 4: İsim: "H1 / Heading 1 / Montserrat"
        Veya kısaca: "Heading 1"
```

### 9.3 Font Weight — Hiyerarşi Kuralı

> 💡 **Body ile Button aynı font/boyut olabilir** ama weight’leri farklı:
- Body → Regular
- Button → SemiBold
> 

```
Body:   "Lorem ipsum dolor sit amet..."     (Regular - 400)
Button: [   GİRİŞ YAP   ]                   (SemiBold - 600)
```

Aynı boyutta görünseler bile **kalınlık fark** yaratır — bu hiyerarşi tasarımcıya zaman kazandırır.

---

### 🎯 PROJE NOTU — Text Styles

> • [ ] En az **5 text style** kayıtlı: H1, H2, H3, Body, Button.
• [ ] Tek font ailesi kullan (max 2 — bir display + bir body).
• [ ] Word dosyasına typography görselini export et + altına: font adı, weight’ler, boyut.
• [ ] Line-height: AUTO (Gün 4’ten hatırla — bu olmadan auto layout bozulur).
> 

---

## 10) Grid System — Sayfa Düzeni Iskeleti

> Tüm responsive tasarımın altyapısı. Her sayfada **olmazsa olmaz**.
> 

### 10.1 Grid Standartları

```
📱 MOBILE     → 4 kolon
📱 TABLET     → 8 kolon
🖥️  DESKTOP    → 12 kolon
```

Her birinde **margin** (kenar boşluğu) ve **gutter** (kolonlar arası boşluk).

### 10.2 Mobile Grid Önerisi

```
4 KOLON
  Margin:  24px (kenarlar)
  Gutter:  24px (kolonlar arası)

┌─────────────────────────────────┐
│ ⎕     ⎕     ⎕     ⎕             │
│ K1    K2    K3    K4            │
│ ←────→← ←→ ←────→← ←→ ←────→   │
│   24    24    24                │
│                                 │
│ ←─ Margin: 24 ─→  ←─ 24 ─→     │
└─────────────────────────────────┘
```

### 10.3 Grid Ekleme

```
ADIM 1: Frame'i seç (iPhone 16)
ADIM 2: Sağ panel → Layout Grid → +
ADIM 3: Grid türünü "Columns" yap
ADIM 4: Count: 4
ADIM 5: Margin: 24
ADIM 6: Gutter: 24
ADIM 7: Color: kırmızı (görünür olsun, varsayılan kırmızı)
```

### 10.4 Grid Style Olarak Kaydet

```
ADIM 1: Yukarıdaki ayarlar yapıldıktan sonra
ADIM 2: Layout Grid yanındaki 4 noktalı ikon (Styles)
ADIM 3: + → Create style
ADIM 4: İsim: "Grid Sistem / Mobile 4col"
```

Artık her sayfada bu stil tek tıkla uygulanır.

### 10.5 Grid Göster/Gizle Kısayolu

```
Shift + G  →  Grid'i aç/kapa
```

> 💡 Sürekli grid açık çalışmıyoruz — düzeni hizalarken aç, hizalama bitince kapat.
> 

### 10.6 Desktop Grid (Web Sayfası İçin)

```
12 KOLON
  Margin:  120 veya 240 (geniş kenar boşluğu)
  Gutter:  24

⌐─── büyük margin ───⌐ [12 kolon ortada] ⌐─── büyük margin ───⌐
```

Bu, web sayfalarında “ortada bir sütun” hissi verir. Modern web tasarımının imzası.

---

### 🎯 PROJE NOTU — Grid

> • [ ] Her 3 sayfanda da grid sistemi açık olsun (export’ta görünmeyecek).
• [ ] Mobile 4-col, margin 24, gutter 24 kullan.
• [ ] Grid style olarak kaydet — diğer sayfalarda tek tıkla uygula.
• [ ] Word dosyasında bir sayfanın grid açık halini görsel olarak göster.
• [ ] Üzerine ölçüleri yaz: “Margin: 24px, Gutter: 24px, 4 columns”.
> 

---

## 11) Logo Yapımı

### 11.1 Yöntem 1 — Phosphor İkonu ile

```
ADIM 1: Ctrl+P → Phosphor → herhangi bir ikon (örn: cube, star)
ADIM 2: Boyutu büyüt → 120×120
ADIM 3: Auto Layout ekle
ADIM 4: Arkasına fill (primary color)
ADIM 5: Yuvarlaklaştır (corner radius)
ADIM 6: Ctrl+Alt+K → Component
ADIM 7: İsim: "Logo"
```

### 11.2 Yöntem 2 — Dışarıdan SVG

```
ADIM 1: SVG logo indir (mutlaka SVG, PNG değil)
ADIM 2: Figma'ya sürükle bırak
ADIM 3: Boyutla
ADIM 4: Ctrl+Alt+K → Component
ADIM 5: Light + Dark varyasyonları yap
        • Renklerin yerini değiştir → dark version
```

### 11.3 Logo Variant’ı

```
Logo:
  Theme: [ Light / Dark ]

Sayfalarda kullanırken dropdown'dan seç → renkler değişir.
```

---

## 12) Login Page Yapımı — Adım Adım

### 12.1 Yapısal Plan

```
┌────────────────────────────────┐
│ 9:41   📶 📡 🔋                │  ← Status Bar (0px)
│                                │
│            [LOGO]              │  ← Logo (boyutlu, ortalı)
│                                │
│                                │
│         Hoş Geldiniz          │  ← H1 başlık
│                                │
│                                │
│  ┌──────────────────────────┐  │
│  │ Kullanıcı Adı            │  │  ← Label
│  │ ┌──────────────────────┐ │  │
│  │ │ 👤  ...               │ │  │  ← Input alanı
│  │ └──────────────────────┘ │  │
│  └──────────────────────────┘  │
│                                │
│  ┌──────────────────────────┐  │
│  │ Şifre                    │  │
│  │ ┌──────────────────────┐ │  │
│  │ │ 🔒  ...               │ │  │
│  │ └──────────────────────┘ │  │
│  └──────────────────────────┘  │
│                                │
│   ┌──────────────────────┐    │
│   │       GİRİŞ YAP       │    │  ← Primary Button
│   └──────────────────────┘    │
│                                │
│        Şifremi Unuttum         │  ← Secondary text
│                                │
│                                │
│   ─── veya ile giriş yap ───  │
│                                │
│   ┌──────────────────────┐    │
│   │ 🔍 Google ile giriş   │    │  ← Outlined buton
│   └──────────────────────┘    │
│   ┌──────────────────────┐    │
│   │ f  Facebook ile giriş │    │
│   └──────────────────────┘    │
│   ┌──────────────────────┐    │
│   │   Apple ile giriş     │    │
│   └──────────────────────┘    │
│                                │
│           ●●━━━●●              │  ← Indicator
└────────────────────────────────┘
```

### 12.2 Input Yapısı — Detaylı

```
INPUT ANATOMI:
─────────────
1. LABEL ("Kullanıcı Adı" - 14px Label style, text/primary)
2. INPUT FRAME (44px yükseklik)
   • Background: transparent
   • Border: 1px, border/default rengi
   • Corner radius: 8-12
   • Padding: 12 (yatay)
   • Auto Layout (horizontal, gap: 8)
   • İçinde:
     - Icon (24×24, secondary color)
     - Placeholder text ("Kullanıcı Adı", Body style, text/secondary)
```

### 12.3 Input’u Component Yap

```
ADIM 1: Yukarıdaki yapıyı tek bir frame'de kur
ADIM 2: Label + Input → Auto Layout (vertical, gap: 4)
ADIM 3: Ctrl+Alt+K → Component
ADIM 4: İsim: "Username Input"
ADIM 5: Aynısı şifre için → "Password Input"
ADIM 6: İkisini de seç → Combine as Variants
ADIM 7: Variant property: "Type" → values: "Username / Password"
```

> 💡 **Avantaj:** Tek input component’i, sağ panelden tipini seç → ikon ve label otomatik değişir.
> 

### 12.4 Buton Yerleştirme

```
1. Design system'daki Buton variant'ından bir instance al
2. Sağ panelden:
   • Type: default
   • Size: large
   • Icon: off
3. Text'i değiştir: "Giriş Yap"
4. Width'i Fill Container yap (kart genişliği kadar)
```

### 12.5 Secondary Butonlar — Sosyal Giriş

```
İLK PRIMARY BUTON'DAN KOPYALA:
─────────────
1. Detach instance (artık bağımsız)
2. Fill'i kaldır → transparent
3. Stroke ekle: 2px, primary color
4. Text color → primary
5. Sol başına platform logosu (Google, Facebook, Apple)
6. Üç tane kopyala → her birinde farklı logo
```

> ⚠️ **Hoca’nın kuralı:** Bir ekranda **iki primary buton olamaz**. Hiyerarşi bozulur. Primary buton = “asıl aksiyon”. Diğerleri secondary olmalı.
> 

---

### 🎯 PROJE NOTU — Login Page

> • [ ] Status bar 0px hizada (üste yapışık).
• [ ] Logo ortalı, büyük puntolu.
• [ ] H1 başlık (“Hoş Geldiniz” vb.) — heading 1 style ile.
• [ ] Username + Password input (her ikisi component instance).
• [ ] Primary buton (kart genişliği).
• [ ] (Opsiyonel) Sosyal giriş — secondary butonlar.
• [ ] Indicator alt bar (mobil için).
> 

---

## 13) Home Page Yapımı

### 13.1 Yapısal Plan

```
┌────────────────────────────────┐
│ 9:41   📶 📡 🔋                │  ← Status Bar (fixed)
├────────────────────────────────┤
│                                │
│  ┌────────────────┐ ┌────────┐│  ← Search Box + Action Button
│  │ 🔍 Arama       │ │   ⚙️   ││
│  └────────────────┘ └────────┘│
│                                │
│  Tatilini Seç                  │  ← H3 başlık
│                                │
│  ┌─────┐┌─────┐┌─────┐┌──────┐│  ← Yatay scroll filtreler
│  │TÜM..││K.DEN││EGE  ││Y.DIŞ ││
│  └─────┘└─────┘└─────┘└──────┘│
│                                │
│  ┌──────────────┐ ┌──────────┐│  ← 2 kolon kart grid'i
│  │              │ │          ││
│  │  [Görsel]    │ │ [Görsel] ││
│  │              │ │          ││
│  │  Paris...    │ │ Karadeniz││
│  │  ₺1.500      │ │ ₺1.500   ││
│  └──────────────┘ └──────────┘│
│                                │
│  ┌──────────────┐ ┌──────────┐│
│  │              │ │          ││
│  │  [Görsel]    │ │ [Görsel] ││
│  │              │ │          ││
│  │  Ege...      │ │ İstanbul ││
│  │  ₺2.000      │ │ ₺2.500   ││
│  └──────────────┘ └──────────┘│
│                                │
│       ●●━━━●●                  │  ← Indicator (fixed)
└────────────────────────────────┘
```

### 13.2 Search Box Yapımı

```
ADIM 1: Frame: 328×40
   • Background: background/2 (beyaz)
   • Corner radius: 20 (pill)
   • Border: 1px, border/default

ADIM 2: İçine text "Arama" yaz
   • Body style, text/secondary

ADIM 3: Search box'ı Auto Layout yap
   • Padding: 12 yatay, 0 dikey
   • Gap: 8

ADIM 4: Sol başına search ikonu ekle (24×24)

ADIM 5: Ctrl+Alt+K → Component
   • İsim: "Search Box"
```

### 13.3 Yanına Action Button

```
40×40 ikon butonu
  • Aynı renk
  • Aynı border radius (yuvarlak)
  • İçinde filter veya settings ikonu
```

### 13.4 Search Box + Button Combine

```
Search Box + Action Button → Auto Layout (horizontal)
  Gap: 28
  Padding: 24 (her yön)
```

> 💡 Padding’leri büyük tutmamızın sebebi: bu yapı **0px hizalı** olacak ve içeride kendi padding’i kart kenar boşluklarını oluşturacak.
> 

### 13.5 Tur Filtreleri (Yatay Scroll’lu)

Hoca tek bir buton tipi yapmış, sonra varyantlarla iki state:

```
PRIMARY (seçili) filter button:
  • Fill: primary color
  • Text: white, body style
  • Padding: 16 yatay, 8 dikey
  • Corner radius: 16 (pill)

SECONDARY (seçili değil) filter button:
  • Fill: transparent
  • Border: 1px, primary color
  • Text: primary color
  • Aynı padding ve radius
```

```
ADIM 1: İki butonu yan yana yap
ADIM 2: Select Multiple → Create Multiple Components
ADIM 3: Combine as Variants
   Property: "State" → "Active" / "Inactive"
```

### 13.6 Tur Filtrelerinin Listesi (Yatay Scroll)

```
"Tüm Turlar" (Active)
"Karadeniz Turları" (Inactive)
"Ege Turları" (Inactive)
"Yurt Dışı Turları" (Inactive)
"Kültür Turları" (Inactive)
```

```
ADIM 1: Bu filtreleri yan yana koy
ADIM 2: HEPSİNİ seç → Shift+A (yatay auto layout)
   • Gap: 8
ADIM 3: İçindeki padding 0
ADIM 4: Bu Auto Layout'a TEKRAR Shift+A
   • Bu DIŞ Auto Layout için: padding: 10, gap: 10
ADIM 5: Dış frame'in clip content'i AÇIK
   İç frame'in clip content'i KAPALI
ADIM 6: Prototype tab → Overflow scrolling → Horizontal
```

### 13.7 Tur Kartları — Grid Yerleşim

```
1. Daha önce yaptığın product card component'inin instance'ından 6 tane al
2. Hepsini seç → Shift+A
   • Gap: 32 (yatay ve dikey aynı çoklu gap)
3. Bu otomatik 2 sütunlu grid oluşturur
4. Çünkü frame genişliğine sığmıyor → 2'şerli alta inecek
```

> 💡 **Çoklu Auto Layout (Multi-row):** Tek bir Auto Layout’a koyduğun elementler sığmadığında **alt satıra geçer**. Tıpkı CSS Flexbox `flex-wrap: wrap` gibi.
> 

---

### 🎯 PROJE NOTU — Home Page

> • [ ] Search box (component) en üstte.
• [ ] H3 başlık (“Tatilini Seç” vb.).
• [ ] Yatay scroll filtre butonları (variant’lı).
• [ ] 2 kolon kart grid’i (en az 4-6 kart).
• [ ] Bottom indicator/nav bar (fixed).
• [ ] **Prototype:** sayfa vertical scroll.
> 

---

## 14) Detail Page Yapımı

### 14.1 Yapısal Plan

```
┌────────────────────────────────┐
│ 9:41   📶 📡 🔋                │
├────────────────────────────────┤
│                                │
│  ┌────────────────┐ ┌────────┐│  ← Aynı search bar
│  │ 🔍 Arama       │ │   ⚙️   ││
│  └────────────────┘ └────────┘│
│                                │
│  Tur Detay Sayfası            │
│                                │
│  ┌────────────────────────┐   │
│  │                        │   │
│  │   [Büyük Hero Görsel]  │   │  ← Detail kart
│  │                        │   │
│  │   Karadeniz Turu       │   │  ← H2 başlık
│  │   3 gün 2 gece          │   │  ← H3 alt başlık
│  │   ─────────────         │   │
│  │   Tur Programı:         │   │
│  │   1. Gün ...            │   │  ← Body text
│  │   2. Gün ...            │   │
│  │   3. Gün ...            │   │
│  └────────────────────────┘   │
│                                │
│  ┌────┐┌────┐┌────┐┌────┐    │  ← Mini galeri (yatay scroll)
│  │IMG ││IMG ││IMG ││IMG │    │
│  └────┘└────┘└────┘└────┘    │
│                                │
└────────────────────────────────┘
```

### 14.2 Detail Card

```
Frame
  ├── Image (geniş, ~%100 kart genişliği)
  ├── Title (H2)
  ├── Subtitle (H3)
  ├── Divider (border/default ile çizgi)
  └── Body content (paragraflar)
```

Hepsi nested Auto Layout — gün 4’teki atom-molekül kuralı geçerli.

### 14.3 Mini Galeri (Yatay Scroll)

Hoca’nın gösterdiği özel pattern:

```
1. 80×80 görselleri yan yana koy (en az 4-5 tane)
2. HEPSİNİ seç → Shift+A
   • Gap: 24
3. Bu Auto Layout'a TEKRAR Shift+A
   • Dış Auto Layout: padding'ler dilediğin gibi
4. Clip content kuralı:
   • Dış Auto Layout: clip content OPEN ✅
   • İç Auto Layout: clip content CLOSED ❌
5. Prototype tab → Overflow: Horizontal
```

> 💡 **Mantık:** İç Auto Layout taşar (uzar gider), dış Auto Layout onu kırpar — bu sayede scroll oluşur.
> 

```
[ scroll konteyner (dış AL, clip ON) ]
  └── [ yatay liste (iç AL, clip OFF, ekran dışına taşar) ]
       └── [img] [img] [img] [img] [img] ←─ scrolled →
```

---

### 🎯 PROJE NOTU — Detail Page

> • [ ] Geri butonu (sol üst köşe — opsiyonel).
• [ ] Aynı search bar başta.
• [ ] Detail card: hero image + H2 title + H3 subtitle + body.
• [ ] (Opsiyonel) Mini galeri yatay scroll.
• [ ] Prototype: home’dan tıklayınca buraya gelsin.
> 

---

## 15) PROTOTYPE — İnteraktif Davranış

> Son aşama. Tasarımı **canlı** hale getirme.
> 

### 15.1 Temel Kavramlar

```
TRIGGER (Tetikleyici)        ACTION (Eylem)
─────────────────────        ─────────────────────
• On tap     (tıkla)         • Navigate to (gitsin)
• On hover   (üzerinde)      • Change to (değiştir)
• On drag    (sürükle)       • Back (geri)
• On press   (basılı tut)    • Close overlay
• On change                  • Open URL
• After delay (otomatik)     • Set variable
```

### 15.2 Animation Türleri

```
• Instant       — Anlık değişim (animation yok)
• Dissolve      — Fade in/out
• Smart Animate — Aynı isimli elementler arasında akıllı geçiş ✨
• Move In/Out   — Sağdan/soldan/yukarıdan giriş
• Push          — İtmeli geçiş
• Slide         — Kaymalı geçiş
```

### 15.3 Easing (Yumuşatma)

```
• Linear     — Düz, robotik
• Ease In    — Yavaş başla
• Ease Out   — Yavaş bitir
• Ease In Out — Yavaş başla, yavaş bitir (en doğal)
• Gentle     — Yumuşak elastik
• Quick      — Hızlı, snappy
• Bounce     — Zıplamalı
```

### 15.4 Sayfalar Arası Geçiş Yapımı

```
ADIM 1: Prototype tab'ına geç (sağ üst)

ADIM 2: Login sayfasındaki "Giriş Yap" butonunu seç
   • Sağdan mavi nokta → sürükle → Home sayfasına bırak

ADIM 3: Sağ panelden ayarla:
   • Trigger:      On tap
   • Action:       Navigate to
   • Animation:    Smart Animate
   • Easing:       Gentle
   • Duration:     300ms

ADIM 4: Home sayfasındaki herhangi bir karta tıklamak için:
   • Kart seç → mavi noktayı Detail sayfasına sürükle
   • Aynı ayarlar

ADIM 5: Detail'den geri için:
   • Geri butonu → Home sayfasına bağla
   • Trigger: On tap
   • Animation: Smart Animate (300ms)
```

### 15.5 Flow Starting Point

```
Bir sayfayı SEÇ (örn: Splash veya Login)
Sağ panel → Flow starting point ekle → +

Bu, prototype'ın "BAŞLANGIÇ" noktası olur.
Test ederken bu sayfadan başlar.
```

### 15.6 Show Prototype Settings

```
Sağ üst → Show Prototype Settings
  • Device: iPhone 16 (frame'inle aynı olmalı)
  • Background: dark/light
  • Starting frame: yukarıda seçtiğin
```

Sonra play butonuna basınca prototype simülasyonu açılır.

---

## 16) Scroll Davranışı

### 16.1 Vertical Scroll (Sayfa Aşağı Inebilir)

```
ADIM 1: Frame'i seç (örn: Home sayfası)
ADIM 2: Prototype tab → Overflow scrolling → Vertical
ADIM 3: Test et — sayfa yukarı aşağı kayıyor
```

### 16.2 Fixed Position (Sticky Bar)

> Üstteki status bar veya alttaki nav bar **scroll edilirken yerinde kalsın** isterseniz:
> 

```
ADIM 1: Sticky kalmasını istediğin elementi seç
   (örn: search bar, bottom nav)
ADIM 2: Sağ panel (Design tab) → Position → "Fix when scrolling"
ADIM 3: Veya kısayolla: sağ panelin position kısmında ⌖ ikonu
```

> 💻 **CSS karşılığı:** `position: sticky` veya `position: fixed`.
> 

### 16.3 Horizontal Scroll (Yatay Liste)

Yukarıda mini galeri ve filtre butonları için anlattığımız pattern:

```
ADIM 1: Dış Auto Layout
   • Clip content: AÇIK ✅
   • Genişlik: ekran boyunda
   • Prototype → Overflow: Horizontal

ADIM 2: İç Auto Layout
   • Clip content: KAPALI ❌
   • Tüm elementler yan yana
   • Genişlik: serbest (ekrandan dışarı taşabilir)
```

---

### 🎯 PROJE NOTU — Prototype

> Opsiyonel ama eklenirse puanı arttırır.
- [ ] Login → Home geçişi (smart animate, 300ms).
- [ ] Home → Detail geçişi (smart animate, gentle).
- [ ] Detail → Home geri dönüş.
- [ ] Home sayfası vertical scroll edilebiliyor.
- [ ] Status bar fixed (kayma yok).
- [ ] (Opsiyonel) Tur filtreleri yatay scroll.
- [ ] Word dosyasına prototype ekran görüntüsü ekle.
> 

---

## 17) Splash Screen Animasyonu — Logo Büyüme Efekti

> Hocanın sonda gösterdiği “wow” efekti. Apple/Spotify gibi açılış logosu.
> 

### 17.1 Setup

```
ADIM 1: İki tane "Splash Screen" frame oluştur

FRAME 1 (Başlangıç):
  • Background: dark veya primary color
  • Ortada KÜÇÜK logo
  • Logo'nun rengini selection colors'tan opacity %0 yap
  → Yani logo VAR ama görünmez

FRAME 2 (Bitiş):
  • Aynı background
  • Ortada BÜYÜK logo
  • Logo'nun rengi %100 görünür
  • Boyutu 200×200 (büyük)
```

### 17.2 Prototype Bağlantısı

```
Frame 1 → Frame 2:
  Trigger:   After delay
  Delay:     1000ms (1 saniye boyunca Frame 1 görünür)
  Action:    Navigate to Frame 2
  Animation: Smart Animate
  Easing:    Linear veya Gentle
  Duration:  800ms (1 saniyede büyüsün)
```

### 17.3 Devamı: Login’e Geç

```
Frame 2 → Login:
  Trigger:   After delay
  Delay:     500ms
  Action:    Navigate to Login
  Animation: Dissolve veya Smart Animate
  Duration:  300ms
```

### 17.4 Sonuç

```
Saniye 0     → Karanlık ekran (logo görünmez)
Saniye 1     → Logo aniden belirip büyümeye başlar
Saniye 1.8   → Logo tam boyutta
Saniye 2.3   → Login sayfasına geçiş
```

> 💡 **Smart Animate sihri:** İki frame’deki aynı isimli element (logo) arasında **otomatik** geçiş yapar. Sen sadece boyut ve opacity’yi değiştirirsin, Figma morph eder.
> 

---

## 18) Buton Hover Animasyonu

> Variant’lar arasında geçiş animasyonu. Buton üzerine gelince renk değişimi.
> 

### 18.1 Hazırlık

```
ADIM 1: Buton variant component'in zaten hazır
   • Default state
   • Hover state (rengi farklı)

ADIM 2: Bir kart yapısı içinde butonu kullan
```

### 18.2 Prototype Bağlantısı (Variant Geçişi)

```
ADIM 1: Default variant'ı seç
ADIM 2: Prototype tab → Mavi nokta → Hover variant'a sürükle
ADIM 3: Ayarlar:
   • Trigger:   While hovering (üzerinde dururken)
   • Action:    Change to (variant'lar arası)
   • Animation: Smart Animate
   • Easing:    Gentle
   • Duration:  300ms
```

### 18.3 Mobilde Hover Yerine

```
Mobile için:
  Trigger: On tap (tıkla)
  Action:  Change to (variant değişir)
  Then:    After delay → Navigate to (sayfaya gitsin)
```

### 18.4 Like Butonu Örneği (On/Off Toggle)

Hocanın yaptığı detay:

```
ADIM 1: Iki buton component'i
   • "Like Off" — kalp boş, sayı 5
   • "Like On" — kalp dolu, sayı 6

ADIM 2: Default Off variant'ı kullan
ADIM 3: Prototype:
   • Trigger: On tap
   • Action:  Change to (Like On)
   • Animation: Smart Animate
   • Duration: 800ms

SONUÇ: Tıklayınca kalp doluyor, sayı 5→6 yumuşakça değişiyor
```

---

### 🎯 PROJE NOTU — Animasyonlar (Bonus)

> • [ ] (Opsiyonel) Splash screen → Login geçişi smart animate ile.
• [ ] (Opsiyonel) Buton hover animasyonu variant geçişiyle.
• [ ] (Opsiyonel) Like/favori toggle animasyonu.
> 

---

## 19) Final Teslim Formatı

> 🎯 **HOCA’NIN NET TALIMATLARI** — Projeyi nasıl teslim edeceğiz?
> 

### 19.1 Son Teslim Tarihi

```
📅 22 HAZİRAN — Portfolyo Teslim Haftası

⚠️ Önemli notlar:
  • Tüm 4 eğitimin (Figma + diğer 3) son teslim tarihi aynı: 22 Haziran
  • Google Forms'a YALNIZCA 1 KEZ yükleme hakkı var
  • Bu yüzden hemen yüklemeyin — kontrol ettikten sonra portfolyo haftasında
```

### 19.2 Teslim Dosyaları (Zorunlu 2 Dosya)

```
📄 1. PDF DOSYASI
   • 3 ekran (Login + Home + Detail) export edilmiş
   • Her ekran tek sayfa olabilir

📄 2. WORD DOSYASI
   • Proje tanıtım dokümanı
   • İçeriği aşağıda detaylı
```

### 19.3 Word Dosyası — Detaylı İçerik

```
SAYFA 1: Proje Tanıtımı
  • Projenin adı ve amacı
  • Hedef kullanıcı
  • Kısa açıklama

SAYFA 2: Renk Paleti
  • Color palette görseli (export ile)
  • Her rengin altına HEX kodu
  • "Primary Color: #XXXXXX (kullanım: ...)"

SAYFA 3: Tipografi
  • Typography görselini export edip yapıştır
  • Caption: Font adı, weight'ler, boyutlar
  • Örn: "Montserrat - Heading: 28px SemiBold..."

SAYFA 4: Component Showcase
  • Buton variant'larının görseli
  • İkonların görseli
  • Input variant'larının görseli
  • Sağ panelden variant property'lerinin ekran görüntüsü

SAYFA 5: Auto Layout Örneği
  • Bir kart yapısı seç (örn: product card)
  • Yapısını anlat: "Auto Layout zinciri..."
  • Görselle göster

SAYFA 6: Grid Sistemi
  • Bir sayfanın grid açık halini göster
  • Ölçüleri yaz (margin, gutter, columns)

SAYFA 7-9: Sayfa Tasarımları
  • Login, Home, Detail ekran görüntüleri
  • Her birinin altında kısa açıklama

SAYFA 10 (Opsiyonel): Prototype
  • Prototype ekran görüntüsü
  • Hangi akışları kurduğunu yaz

SAYFA 11 (Opsiyonel): Figma View Link
  • View-only link paylaş
```

### 19.4 Hoca’nın Net Tercihi

> 🎯 **“Yazmak yerine GÖRSEL göster.”**
“Eklediğiniz şeylerin word dosyasında görünür olması, görsel olarak aktarılması daha etkili oluyor. Renk paleti yazıyla anlatma — Figma’dan export et, yapıştır. Tipografi yazıyla anlatma — Figma’dan export et, yapıştır.”
> 

### 19.5 Export Yöntemi

```
ADIM 1: Frame'i seç (örn: Login sayfası)
ADIM 2: Sağ panel → Export
ADIM 3: + ekle → Format: PNG (2x veya 3x), JPG veya PDF
ADIM 4: "Export Login Screen" → indir
ADIM 5: Word'e sürükle bırak
```

> 💡 Resolution: **2x veya 3x** kullan. 1x bulanık görünür yazdırınca.
> 

### 19.6 Yükleme Stratejisi

```
❌ YAPMA:
   Bu hafta Figma'yı bitirip hemen yükle
   (1 kere yükleme hakkı var, geri alamayacaksın)

✅ YAP:
   1. Bu hafta tüm sayfaları bitir
   2. 1 hafta dinlendir
   3. Tekrar bak — eksikleri gör, düzelt
   4. Diğer 3 dersi de bitir
   5. Hepsini bir arada 22 Haziran haftasında yükle
```

---

### 🎯 PROJE NOTU — Final Teslim

> • [ ] Login, Home, Detail PNG/JPG olarak export edildi (2x veya 3x).
• [ ] PDF birleştirilmiş — 3 sayfada 3 ekran.
• [ ] Word dosyası hazır:
    ◦ [ ] Renk paleti görseli + hex’ler
    ◦ [ ] Tipografi görseli + açıklamalar
    ◦ [ ] Component variant görselleri
    ◦ [ ] Auto Layout açıklaması
    ◦ [ ] Grid görseli
    ◦ [ ] 3 sayfa ekran görüntüsü
    ◦ [ ] (Opsiyonel) Prototype screenshot
    ◦ [ ] (Opsiyonel) Figma view link
• [ ] **22 Haziran’a kadar bekle, kontrolden geçir.**
> 

---

## 20) Soru-Cevap Bölümünden Önemli Notlar

### 20.1 Renk Silme

> Eklediğin renk style’ı sağ panelin “Local styles” kısmından sağ tık → **Delete Style**.
> 

### 20.2 Renk ve Font’ları Neden Design System’a Ekliyoruz?

> 🎯 **Hoca’nın açıklaması:** “Ben bu projeyi sana ilettim. Sen kontrol ediyorsun. Renk yazıyla ‘mavi’ diyorsam karışır. Ama ‘primary color’ olarak tanımladıysam herkes aynı şeyi görür. Yazılımcı bunu HEX olarak alır. Aynı tasarımcı revize sırasında karışmaz. Bu **tasarım dili kurmak** demek.”
> 

### 20.3 Component’i Geri Bağlama

> Bir instance’ı detach ettin, değiştirdin. Şimdi tekrar component’leştirip ana sete eklemek istiyorsun:
1. Değiştirilmiş frame’i seç
2. Ctrl+Alt+K → yeni component
3. Ana component grubu içine sürükle bırak
4. Otomatik gruba dahil olur
> 

### 20.4 Alt ile Kopyalama

> Component’ler ve variant’lar için de geçerli. `Alt+sürükle` ile bir variant’ı kopyalayıp diğer variant’a dönüştürebilirsin.
> 

### 20.5 Sayfalar Arası Geçiş

> Soru: “Figma’da farklı page’ler arası prototype yapabilir miyim?”
Cevap: **HAYIR.** Prototype her zaman **aynı sayfada** çalışır. Sol panelde “Page 1”, “Page 2” gibi ayırırsan prototype çalışmaz. **Tek bir page içinde** 3 frame ile yap.
> 

### 20.6 Figma’dan Koda Geçiş

> Soru: “Bu tasarımı nasıl gerçek bir web sitesine çeviririm?”
Cevap: 3 yöntem:
1. **Developer Mode** (Figma Pro) — kodu otomatik üretir (genelde temel)
2. **Figma Sites** — Figma’nın no-code web yayınlama aracı
3. **Framer** — Figma tasarımını alıp interaktif siteye çevirir
4. **Manuel** — Frontend developer Figma’dan ölçüleri alıp HTML/CSS yazar (en yaygın)
> 

### 20.7 Sepet Terk Etme Oranını Nasıl Azaltırız?

> Soru: E-ticaret uygulamasında kullanıcının sepeti terk etme oranını minimuma indirme.
Cevap: Hoca’nın önerdiği genel pratikler:
- **Yönlendirici metinler** (CTA güçlendirme)
- Renk uyumu + tipografi hiyerarşisi
- Aciliyet hissi yaratma (“Son 2 kaldı” gibi)
- Açık fiyat gösterimi
- Az adımlı checkout
> 

> 💻 **Senin SaaS’lerin için bağlantı:** EntrepreneurLoop Analytics, ReturnBox, MeetMind gibi projelerinde onboarding flow ve trial-to-paid conversion için aynı prensipler geçerli.
> 

---

## 📚 Kaynak Linkleri

- 🎨 [Figma Variants Docs](https://help.figma.com/hc/en-us/articles/360056440594)
- 🎯 [Foundation Color Generator (Plugin)](https://www.figma.com/community/plugin/1119669347257621205)
- 🎯 [Smart Animate Tutorial](https://help.figma.com/hc/en-us/articles/360039818874)
- 🌈 [Material Design Color System](https://m3.material.io/styles/color/system)
- 🍎 [Apple HIG - Interface Essentials](https://developer.apple.com/design/human-interface-guidelines/)
- 🌐 [Figma Community Templates](https://www.figma.com/community)
- 🔌 [Phosphor Icons](https://phosphoricons.com/)
- 🔌 [Iconify](https://iconify.design/)
- 🎓 [Figma to Code (Framer)](https://www.framer.com/)

---

## 🎯 NIHAI PROJE CHECKLİSTİ — Hafta Sonu Durumu

```
═══════════════════════════════════════════════════
DESIGN SYSTEM  (zorunlu)
═══════════════════════════════════════════════════
[ ] Design System sayfası ayrı section'da
[ ] Color Styles kayıtlı (min 6-8 renk)
[ ] Text Styles kayıtlı (min 5 stil — H1, H2, H3, Body, Button)
[ ] Grid Style kayıtlı (4-col mobile)
[ ] Status Bar component
[ ] Indicator/Home Bar component

═══════════════════════════════════════════════════
ICONS  (zorunlu)
═══════════════════════════════════════════════════
[ ] En az 5-8 ikon (Phosphor önerilir)
[ ] 24×24 boyutta
[ ] Create Multiple Components yapılmış
[ ] Combine as Variants yapılmış

═══════════════════════════════════════════════════
COMPONENTS  (zorunlu)
═══════════════════════════════════════════════════
[ ] Button component (en az 2 boyut)
[ ] Button VARIANT'ı (en az 4 variant — default/hover × 2 boyut)
[ ] Input component (en az 2 — username, password)
[ ] Input variant'ları
[ ] Search Box component
[ ] Logo component
[ ] Card component (product/list/detail)

═══════════════════════════════════════════════════
AUTO LAYOUT  (zorunlu)
═══════════════════════════════════════════════════
[ ] Tüm butonlar Auto Layout'lu
[ ] Tüm inputlar Auto Layout'lu
[ ] Tüm kartlar Auto Layout'lu (nested zincir)
[ ] Header Auto Layout'lu (gap: auto)
[ ] Bottom nav Auto Layout'lu
[ ] Atom-molekül kuralı tüm seviyelerde uygulanmış
[ ] line-height: AUTO

═══════════════════════════════════════════════════
3 EKRAN  (zorunlu)
═══════════════════════════════════════════════════
[ ] LOGIN PAGE:
    [ ] Status bar (0px hizalı)
    [ ] Logo (büyük, ortalı)
    [ ] H1 başlık ("Hoş Geldiniz")
    [ ] Username input (component)
    [ ] Password input (component)
    [ ] Primary Button (component)
    [ ] Şifremi unuttum (label)
    [ ] (Opsiyonel) Sosyal giriş butonları
    [ ] Indicator

[ ] HOME PAGE:
    [ ] Status bar
    [ ] Search box + action button (search bar)
    [ ] H3 başlık
    [ ] Filtre butonları (variant, yatay scroll)
    [ ] Kart grid'i (en az 4-6 kart, 2 kolon)
    [ ] Indicator

[ ] DETAIL PAGE:
    [ ] Status bar
    [ ] (Aynı search bar başta)
    [ ] Hero görsel
    [ ] H2 başlık
    [ ] H3 alt başlık
    [ ] Body content
    [ ] (Opsiyonel) Mini galeri (yatay scroll)
    [ ] Indicator

═══════════════════════════════════════════════════
PROTOTYPE  (opsiyonel ama önerilen)
═══════════════════════════════════════════════════
[ ] Flow starting point eklendi
[ ] Login → Home (smart animate, on tap)
[ ] Home → Detail (smart animate, on tap)
[ ] Detail → Home (geri butonu, smart animate)
[ ] Vertical scroll açık
[ ] Status bar fixed
[ ] (Opsiyonel) Horizontal scroll filtreler
[ ] (Opsiyonel) Splash screen animasyonu

═══════════════════════════════════════════════════
TESLİM DOSYALARI
═══════════════════════════════════════════════════
[ ] PDF: 3 ekran export edilmiş (2x veya 3x)
[ ] Word dosyası:
    [ ] Proje tanıtımı (1 paragraf)
    [ ] Renk paleti (görsel + hex'ler)
    [ ] Tipografi (görsel + açıklamalar)
    [ ] Component showcase (görsel)
    [ ] Auto Layout açıklaması (görsel)
    [ ] Grid sistem görseli
    [ ] 3 sayfa ekran görüntüsü
    [ ] (Opsiyonel) Prototype screenshot
    [ ] (Opsiyonel) Figma view link

═══════════════════════════════════════════════════
SON KONTROL  (22 Haziran öncesi)
═══════════════════════════════════════════════════
[ ] Tüm component'ler bağımsız bir Design System sayfasında
[ ] Tüm style'lar (renk, tipografi, grid) kaydedilmiş
[ ] Hiçbir element "elle" konumlandırılmamış — hepsi Auto Layout
[ ] Variant'lar slash isimlendirme ile düzenli
[ ] Word + PDF dosyaları hazır
[ ] Figma dosyası View link açılmış (paylaşım izni)
[ ] 1 hafta dinlendir, tekrar bak
[ ] Sonra Google Forms'a yükle
```

---

## 🏆 Hafta Sonu Özeti — Neyi Öğrendin?

```
GÜN 1: UI vs UX, 7 prensip, renk teorisi, tipografi temelleri
   ↓
GÜN 2: Buton/input mimarisi, spacing, ikonlar, Figma arayüzü
   ↓
GÜN 3: Constraints, şekil araçları, effects, glass/neon, Auto Layout girişi
   ↓
GÜN 4: Auto Layout DERIN, nested, atom-molekül kuralı, component intro
   ↓
GÜN 5: Variant sistemi, color & text styles, grid, prototype,
       tam proje yapımı, splash & hover animasyonları
```

### Frontend Bağlantısı — Hafta Boyu Kurulan Köprüler

| Figma Kavramı | CSS/React Karşılığı |
| --- | --- |
| Auto Layout | Flexbox (`display: flex`) |
| Direction (horizontal/vertical) | `flex-direction: row/column` |
| Gap | `gap: 16px` |
| Padding | `padding: 16px` |
| Gap: auto | `justify-content: space-between` |
| Fixed Width | `width: 200px` |
| Hug Contents | `width: fit-content` |
| Fill Container | `width: 100%` veya `flex: 1` |
| Ignore Auto Layout | `position: absolute` |
| Clip Content | `overflow: hidden` |
| Aspect Ratio Lock | `aspect-ratio: 16/9` |
| Component / Instance | `class` / `object`, React Component / JSX |
| Variant property | React prop (`<Button variant="primary" />`) |
| Color Styles | Tailwind color tokens (`bg-primary`) |
| Text Styles | Tailwind typography (`text-2xl font-semibold`) |
| Grid (4-col) | CSS Grid `grid-template-columns: repeat(4, 1fr)` |
| Smart Animate | Framer Motion / CSS transitions |
| After Delay | `setTimeout(..., 1000)` |
| On Tap | `onClick` |
| While Hovering | `:hover` veya `onMouseEnter` |

---

> **🎓 Hafta sonu, Hoca’nın kapanış sözleri:**
“1 ay daha uzun bir süre proje döneminde birlikteyiz. Eğitim bitti diye düşünmeyin — projenizle ilgili ne konuşmak isterseniz mail atın, 24 saat içinde dönüş yapacağım. Bu eğitim sadece başlangıç.”
> 

> 💡 **Senin için bir not (vibe coding zaviyesinden):**
Bu hafta öğrendiğin Auto Layout + Component + Variant mantığı **doğrudan React component mimarine** çevrilir. EntrepreneurLoop Analytics, NeoRescue, FitCRM, MeetMind ve diğer SaaS projelerindeki UI sistemleri için bu Figma şablonu birebir referans olabilir. Especially: button variants, card layouts, design tokens for colors — hepsi senin Tailwind + shadcn/ui yaklaşımına oturuyor.
> 

---

> **🌟 PROJE BAŞARI DİLEMEZ — 22 Haziran’da hep birlikte teslim! 🌟**
>