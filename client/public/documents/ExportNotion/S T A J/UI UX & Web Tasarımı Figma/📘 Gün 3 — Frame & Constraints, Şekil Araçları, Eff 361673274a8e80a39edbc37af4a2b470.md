# 📘 Gün 3 — Frame & Constraints, Şekil Araçları, Effects, Auto Layout (Giriş)

> **Hafta 1 — UI/UX & Web Tasarımı: FigmaEğitmen:** Meltem Turan (PNC Group)
**Süre:** 120 dk + soru-cevap
**Gün 3’ün Akışı:** Hafta tekrarı → Daily UI Challenge → Constraints (derin) → Frame vs Group → Pages, Layers, Assets → Shape tools → Boolean Groups → Fill, Gradients, Styles → Blend Modes → Effects (drop shadow, blur) → Pen Tool → Glass Effect → Auto Layout girişi (Shift+A).
> 

---

## 📅 Hafta Akışı Hatırlatması

| Gün | Konu | Durum |
| --- | --- | --- |
| ✅ Pzt | UI/UX temelleri, 7 prensip, renk, tipografi | Tamamlandı |
| ✅ Sal | Butonlar, inputlar, ikonlar, Figma arayüzü | Tamamlandı |
| 🟢 Çar (Bugün) | **Frame, Constraints, Şekil araçları, Effects, Auto Layout girişi** | İşleniyor |
| 🔜 Per | Auto Layout (derin), Görsel hiyerarşi, Component, Variant | Yarın |
| 🔜 Cum | Proje yapımı + Prototype (5 sayfa örnek) | Cuma |

---

## 1) Hızlı Hafta Tekrarı (Ders Başlangıcı)

### Kritik Çıkarımlar

| Konu | Çıkarım |
| --- | --- |
| **UI ≠ UX** | UI görsel, UX strateji. Birbirinden ayrılmaz bütün. |
| **7 UI prensibi** | Hiyerarşi, aşamalı bilgi, tutarlılık, kontrast, erişilebilirlik, yakınlık, hizalama |
| **Renk** | Az renk + 60-30-10 kuralı. Ancak proje özgün ise farklı paletler de denenebilir (split, monokrom + zıt vurgu). |
| **Font** | 1 font, max 2. Ağırlıklarla hiyerarşi kurulur. |
| **Buton** | 1 ekran = 1 primary buton. Min 44×44 touch target. |
| **Input** | İçi boş + ikon destekli + label görünür. |
| **İkon** | SVG, 24×24, tek stil (hep outline veya hep filled). |
| **Spacing** | 4 katları. |

> 💡 **Hoca’nın felsefesi:** “Bu eğitimde en doğru renk seçimi ya da en doğru font seçimi değil, **araçları kullanmayı öğrenmek** önemli. Yani 60-30-10 zorunluluk değil, kolaylaştırıcı bir kural.”
> 

---

## 2) Daily UI Challenge — Pratik İçin Mükemmel Kaynak

> 🌐 **dailyui.co**
> 

Email ver, 100 gün boyunca her gün bir UI tasarım prompt’u gelir.

```
Gün 1  → Sign Up Form
Gün 2  → Credit Card Checkout
Gün 3  → Landing Page
Gün 4  → Calculator
Gün 5  → App Icon
...
Gün 100 → Redesign
```

| Avantaj | Açıklama |
| --- | --- |
| **Hızlı pratik** | Her örnek 30dk-1saat |
| **Sistematik** | UI/UX’in tüm temel bileşenlerini kapsar |
| **Figma pratiği** | Auto Layout, component, varyant pratiği için ideal |
| **Portfolyo malzemesi** | 100 gün sonunda solid bir Behance/Dribbble portfolyosu |

> ⚠️ Daily UI’da Design System kurmayı **beklemezler** — sadece o günün ekranını yapmak. Ama proje yönergemizde Design System **zorunlu**, bunu unutma.
> 

---

## 3) İlham Kaynakları — Derinleştirilmiş

| Site | Karakter | Kullanım |
| --- | --- | --- |
| **Mobbin** (mobbin.com) | Gerçek prodüksiyon uygulamalardan ekran galerisi | “Bu özellik X uygulamada nasıl tasarlanmış?” sorusuna cevap |
| **Dribbble** (dribbble.com) | Konsept tasarımlar, ilham | Görsel ilham — ama çoğu uygulanabilir değil |
| **Behance** (behance.net) | Vaka çalışmaları, case study’ler | “Tasarım kararları neden böyle alındı?” |
| **Figma Community** | Açık kaynaklı dosyalar | Doğrudan dosyayı açıp inceleyebilirsin |

### Figma Community Arama İpuçları

```
"mobile app UI kit"        → UI bileşen kütüphaneleri
"design system"            → Design system örnekleri
"food app"                 → Sektör özelinde örnekler
"fitness app design"       → Belirli niche örnekler
"icon kit"                 → İkon kütüphaneleri
```

> ⚠️ **Uyarı:** Community’deki her örnek mükemmel değildir. “Color 1, Color 2, Font 4” gibi anlamsız isimlendirmeler veya eksik Design System içeren dosyalar yaygın. **Eleştirel gözle incele.**
> 

---

## 4) Constraints — Derinlemesine

> Constraints, **frame içindeki bir öğenin**, frame boyutu değiştiğinde **nasıl davranacağını** belirler. Auto Layout’tan önceki responsive sistemdir.
> 

### 4.1 Constraints Nerede Görünür?

```
Bir öğeyi seç → Sağ panel → "Constraints" bölümü

Horizontal:          Vertical:
┌──────────┐         ┌──────────┐
│ Left  ▼  │         │ Top  ▼   │
└──────────┘         └──────────┘
```

> ⚠️ Auto Layout uygulanmış bir öğe seçilirse constraints görünmez — çünkü Auto Layout kendi hizalama sistemini kullanır.
> 

### 4.2 Constraint Seçenekleri ve Davranışları

```
                 Frame Genişlerken
                       ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│ Left          Center          Right             │
│ ◄━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━►    │
│ sabit         hep ortada      sabit             │
│ kalır         kalır           kalır             │
│                                                 │
│ Left+Right    ◄━━━━ Scale ━━━━►                 │
│ esner         orantılı büyür                    │
│ (full width)                                    │
│                                                 │
└─────────────────────────────────────────────────┘
```

### 4.3 Constraint Senaryoları

| Senaryo | Constraint | Açıklama |
| --- | --- | --- |
| **Logo** (üst-sol, sabit) | `Left + Top` | Sol-üstte kal, frame büyüsün küçülsün boyut değişme |
| **FAB Button** (sağ-alt) | `Right + Bottom` | Sağ-altta kal (floating action button) |
| **Modal başlık** (ortada) | `Center + Top` | Yatayda hep ortada, üstte sabit |
| **Header / Banner** (full width) | `Left+Right + Top` | Yatayda esner, üstte sabit |
| **Bottom Nav** (alt çubuk) | `Left+Right + Bottom` | Yatayda esner, altta sabit |
| **Modal içeriği** (her yere esner) | `Left+Right + Top+Bottom` | Tam ortada, esnek |
| **Tüm sayfa içeriği büyüsün** | `Scale + Scale` | Zoom efekti gibi, orantılı büyür |

### 4.4 Scale + Scale Pratiği (Önemli!)

> İç içe geçmiş yapılarda her **layer** için ayrı ayrı Scale verilmeli.
> 

```
Frame (parent)              ← Scale + Scale
  └── Card 1 (Component)    ← Scale + Scale (bu da scale olmalı!)
        └── Image            ← Scale + Scale
        └── Title            ← Scale + Scale
        └── Description      ← Scale + Scale
```

Eğer sadece üst frame’e Scale verirsen, içerideki kartların kendi boyutu değişmez — sadece pozisyonları değişir.

> 💡 **Hoca’nın itirafı:** “Figma’da iç içe geçmiş yapıların mantığını çözmek **Figma’nın %90’ı**. Bir plugin’i bugün bilmesen yarın öğrenirsin, ama bu mantığı kavramak çok kritik.”
> 

### 4.5 Constraint’in Sınırı

```
Frame'i çok küçültürsen:
┌──────┐
│ [obje]  ← obje frame'in dışına taşar ve görünmez olur (clipped)
└──────┘
```

Yani constraint öğeyi **belirli bir hizada tutar** ama frame öğeden daha küçük olunca öğe kırpılır.

### 4.6 Scale Aracı (K) — Constraints’in Alternatifi

> Tek bir öğeyi orantılı büyütmek/küçültmek için.
> 

| Araç | Davranış |
| --- | --- |
| `V` (Move) — kenardan çek | Sadece boyut büyür, içerik aynı kalır (text aynı punto) |
| `K` (Scale) — kenardan çek | Her şey orantılı büyür (text de büyür) |
| `Shift + Scale` | Köşeden orantılı |
| `Alt + Scale` | Merkezden orantılı |

> 💻 **Frontend bağlantısı:** Scale = CSS `transform: scale()`. Move = CSS width/height değiştirme. İkisi farklı sonuçlar üretir.
> 

---

### 🎯 PROJE NOTU — Constraints

> • [ ] Üç sayfanın frame’leri standart cihaz boyutunda (iPhone 16 → 393×852).
• [ ] Header öğelerine `Left+Right + Top` constraint.
• [ ] Bottom nav öğelerine `Left+Right + Bottom` constraint.
• [ ] Floating action button varsa `Right + Bottom`.
• [ ] İç içe yapılarda her layer için ayrı düşün.
• [ ] **Not:** Auto Layout kullandığın yerlerde constraints zaten yok — onların kendi kuralları var.
> 

---

## 5) Frame vs Group — Çok Sorulan Konu

| Özellik | Frame | Group |
| --- | --- | --- |
| **Oluşturma** | `F` veya dışından çizmek | `Ctrl+G` (önce öğe seç) |
| **Container** | ✅ Evet | ❌ Hayır |
| **Clip içeriği** | ✅ Evet (taşma kesilir) | ❌ Hayır |
| **Constraints** | ✅ Var | ❌ Yok |
| **Auto Layout** | ✅ Uygulanır | ❌ Uygulanmaz |
| **Fill / Stroke / Effect** | ✅ Uygulanır | ❌ Uygulanmaz |
| **Corner Radius** | ✅ Var | ❌ Yok |
| **Export** | ✅ Tek dosya olarak | ⚠️ Genelde tek tek |

### Ne Zaman Hangisi?

```
✅ Frame kullan:
   • Bir kart yapısı (üyelik kartı, ürün kartı)
   • Sayfa kapsayıcı (login page, home page)
   • Bir bölüm (header, footer, sidebar)
   • Auto Layout uygulayacağın her yapı

✅ Group kullan:
   • Geçici toplama (taşıma için bir araya getirme)
   • İkonlar arası bir araya getirme (Boolean groups ile)
   • Hızlı, tek seferlik
```

> 💡 **Pratik kural:** Şüpheliysen Frame kullan. Group neredeyse hiç gerekli olmaz.
> 

> 💻 **Frontend karşılığı:** Frame = `<div class="card">` (gerçek container). Group = sadece JS’te bir array gibi geçici gruplama.
> 

---

## 6) Pages, Layers, Assets — Hierarchy

```
DOSYA (File)                    ← .fig dosyası
  │
  ├─ PAGE 1: Login Page         ← Sayfa
  │    │
  │    ├─ LAYER: Frame (iPhone) ← Katmanlar
  │    │   ├─ Header
  │    │   ├─ Form
  │    │   │   ├─ Email Input
  │    │   │   └─ Password Input
  │    │   └─ Button
  │    │
  │    └─ LAYER: Frame (Annotations)
  │
  ├─ PAGE 2: Home Page
  ├─ PAGE 3: Detail Page
  └─ PAGE 4: Design System       ← Komponentler burada toplanır
       ├─ Colors
       ├─ Typography
       ├─ Buttons (Component)    ← Reusable
       ├─ Inputs (Component)
       └─ Icons
```

### Assets Paneli

> Sol panelde **Layers** sekmesinin yanında **Assets** sekmesi var.
> 

```
Bir öğeyi Component yaptığında (Ctrl+Alt+K) → Assets paneline geçer
                                            → Her yerden çağrılabilir
                                            → "Insert Instance" ile yapıştırılır
```

### Asset Olarak Saklanması Önerilenler

- ✅ Tüm butonlar (Primary, Secondary, Ghost)
- ✅ Tüm input türleri
- ✅ Kart tasarımları (product card, user card)
- ✅ İkonlar (komponent set olarak)
- ✅ Logo
- ✅ Avatar
- ✅ Navigation bar
- ✅ Modal/Dialog
- ✅ Tab bar

> 💡 **Free plan limiti:** 3 dosya, 3 sayfa per dosya. Education plan ile sınırsız.
> 

---

## 7) Şekil Araçları — Tam Liste

### 7.1 Araçların Listesi

| Araç | Kısayol | Karakter |
| --- | --- | --- |
| **Rectangle** | `R` | Kart, button, container |
| **Line** | `L` | Ayraç, basit çizgi |
| **Arrow** | `Shift + L` | Yön gösterici, anotasyon |
| **Ellipse** | `O` | Avatar, daire, daire grafik (donut chart) |
| **Polygon** | — (toolbar) | Üçgen ve çokgenler, özgün görsel kapsayıcı |
| **Star** | — (toolbar) | Yıldız (rating), dekoratif |
| **Image / Video** | `Ctrl+Shift+K` | Görsel yerleştirme |

### 7.2 Hepsinde Ortak: Modifier Tuşlar

```
Çizim sırasında:
  Shift           → Eşit en/boy (kare, daire)
  Alt             → Merkezden çiz
  Shift + Alt     → Merkezden + eşit en/boy

Çizim sonrası:
  Shift + drag    → Orantılı büyüt/küçült
  Alt + drag      → Kopyala
  Shift + Alt     → Merkezden orantılı büyüt
```

### 7.3 Fill (Dolgu) Türleri

| Tür | Açıklama |
| --- | --- |
| **Solid** | Tek renk dolgu |
| **Linear** | Doğrusal renk geçişi (degrade) |
| **Radial** | Merkez → dışa doğru renk geçişi |
| **Angular** | Açısal renk geçişi (konik) |
| **Diamond** | Elmas şekilli renk geçişi |
| **Image** | Görsel doldurma |

### 7.4 Stroke (Kenar Çizgisi) Ayarları

```
Stroke özellikleri:
  • Kalınlık (px)
  • Renk
  • Pozisyon:
    ◦ Center  → çizginin yarısı içeride, yarısı dışarıda
    ◦ Inside  → tamamen şeklin içinde
    ◦ Outside → tamamen şeklin dışında
  • Style:
    ◦ Solid    → düz çizgi
    ◦ Dashed   → kesik çizgi (dash + gap mesafesi ayarlanır)
  • Cap (uçlar):
    ◦ None / Square / Round
  • Join (köşeler):
    ◦ Miter / Round / Bevel
```

> 💻 **CSS karşılığı:**
- Stroke = `border`
- Stroke pozisyonu = CSS’te yok (her zaman outside)
- Dashed = `border-style: dashed`
- Cap & Join = SVG path özellikleri
> 

### 7.5 Corner Radius — Detaylı

### Tek Değer (Uniform)

```
border-radius: 16px
┌─────────────┐
│             │
│             │
└─────────────┘
```

### Bağımsız Köşeler (Individual Corners)

```
Figma'da sağ panelden "Independent corners" butonu açılır.

  TL: 64px  TR: 0px
  ┌──────────────┐
  │              │
  │              │
  └──────────────┘
  BL: 0px   BR: 32px
```

### İç İçe Radyus Kuralı (Nested Radius Rule)

> 🎯 **Profesyonel tasarımcıların altın kuralı:** İç içe geçmiş öğelerde radius’lar belirli bir formüle göre olmalı.
> 

```
Formül:  iç radius = dış radius − padding
```

```
┌──────────────────────────────────┐
│   padding: 30px                  │
│  ┌──────────────────────────┐    │
│  │                          │    │
│  │       İç element         │    │  Dış radius: 64px
│  │       (radius: 34)       │    │  Padding:    30px
│  │                          │    │  İç radius:  64 - 30 = 34
│  │                          │    │
│  └──────────────────────────┘    │
│                                  │
└──────────────────────────────────┘
```

Bu kural ile **eş merkezli** (concentric) bir görünüm elde edilir. Çoğu profesyonel tasarımın sırrı.

### 7.6 Aspect Ratio Lock (Orantı Kilidi)

```
Sağ panelde W ve H arasında bir kilit ikonu vardır:

  ┌─────┐ 🔒 ┌─────┐
  │ 1200│ ━━ │ 1500│
  └─────┘    └─────┘
```

Kilit aktifken `W` değiştirince `H` orantılı değişir (4:5 oranı korunur). Görsellerin orantısını bozmamak için kritik.

---

### 🎯 PROJE NOTU — Şekil Araçları

> • [ ] Kart yapılarında **iç içe radius kuralını** uygula (`iç = dış − padding`).
• [ ] İkon container’ları için circle/pill (`O` ile elipse) kullan.
• [ ] Avatar için circle.
• [ ] Görsellerde **Aspect Ratio Lock** açık olsun.
• [ ] Stroke pozisyonunu **Inside** veya **Center** seç — Outside ile boyut hesabı bozulur.
> 

---

## 8) Boolean Groups (Boolean Operations) — Özgün Şekiller

> İki veya daha fazla şeklin nasıl birleşeceğini belirleyen operasyonlar. SVG’de `<path>` operations’ın karşılığı.
> 

### 8.1 İşlemler ve Kısayolları

| İşlem | Kısayol | Sonuç | Görsel |
| --- | --- | --- | --- |
| **Union** | `Ctrl + Alt + U` | İki şekli birleştirir | A ∪ B |
| **Subtract** | `Ctrl + Alt + S` | A’dan B’yi çıkarır | A − B |
| **Intersect** | `Ctrl + Alt + I` | Sadece kesişen alanı tutar | A ∩ B |
| **Exclude** | `Ctrl + Alt + X` | Kesişen kısmı çıkarır | (A ∪ B) − (A ∩ B) |
| **Flatten** | `Ctrl + E` | İç içe operasyonu tek vektöre düzleştirir | — |

### 8.2 Görsel Örnekler

```
2 Çakışan Daire:

UNION (Birleşim):           SUBTRACT (Fark):
  ╭──────╮                    ╭──────╮
  │      ╭──────╮             │      ╲──────╮
  │      │      │             │      │      │
  ╰──────│      │             ╰──────│      │  ← sağdaki kalır
         ╰──────╯                    ╰──────╯

INTERSECT (Kesişim):        EXCLUDE (Hariç):
         ╭──╮                ╭──────╮  ╭──────╮
         │  │                │      ╲╱│      │
         │  │                │      ╱╲│      │
         ╰──╯                ╰──────╯  ╰──────╯
```

### 8.3 Pratik Kullanım Örnekleri

### Glass Card Tasarımı (Substract ile)

```
1. Büyük rectangle çiz → radius: 64
2. İçine küçük rectangle çiz (genişlik dolu, yarıya kadar) → radius: 0
3. İki rectangle'ı seç → SUBTRACT
4. Üst yarı kalır, alt yarı boş → Glass card şekli
```

### Donut Chart (Subtract ile)

```
1. Dış circle çiz (mavi, 200×200)
2. İç circle çiz (200×200 → ortalanmış, daha küçük 150×150)
3. İkisini seç → SUBTRACT
4. Donut (halka) şekli elde edersin
```

### Pie Chart Slice (Ellipse arc + rotate ile)

```
Ellipse seçili → sağ panelde Arc başlangıç ve bitiş açısı ayarlanır
  - 0° başlangıç, 90° bitiş → çeyrek
  - 0° başlangıç, 180° bitiş → yarım
```

### 8.4 Flatten Ne Yapar?

```
Boolean op:               Flatten sonrası:

[Shape A] ─┐
           ├─ Union ─┐    →  [Tek vektör path]
[Shape B] ─┘         │
                     │
                     └─ İçeride hala A ve B düzenlenebilir

Flatten = "kimyasal olarak da" birleştirme. Geri alınamaz, ama temiz tek path.
```

> 💻 **Frontend bağlantısı:** Bu operasyonlar SVG’ye export edildiğinde **gerçek `<path d="...">`** olur. Pure CSS’te yapılamaz; SVG masking veya `clip-path` kullanılır.
> 

---

### 🎯 PROJE NOTU — Boolean Groups

> • [ ] Özgün bir görsel öğe oluştur (örn. kartın köşesindeki kesik şekil, donut grafik, custom badge).
• [ ] Detay sayfasında dekoratif bir element ekle (Boolean ile yapılmış).
• [ ] Logo veya badge tasarımında Boolean operasyon kullan.
> 

---

## 9) Fill — Gradient (Degrade) Kullanımı

### 9.1 Gradient Türleri Karşılaştırması

| Tür | Görsel Karakter | CSS Karşılığı |
| --- | --- | --- |
| **Linear** | Düz çizgi boyunca renk geçişi | `linear-gradient()` |
| **Radial** | Merkezden dışa renk geçişi | `radial-gradient()` |
| **Angular** | Açısal/konik renk geçişi | `conic-gradient()` |
| **Diamond** | Elmas şekilli geçiş | CSS’te yok |

### 9.2 Linear Gradient Yapımı

```
1. Şekli seç → Fill → Solid'i Linear'a çevir
2. Sol-alttan sağ-üste doğru bir çizgi belirir
3. Çizginin uçlarını ve açısını sürükle
4. Çizgi üzerine tıklayarak yeni renk durağı ekle
5. Her durak için renk ve opacity ayarla
```

### 9.3 Gradient Renk Stops (Durakları)

```
Renk Stops (0 → 1 arası):

 0.0           0.5            1.0
  ●──────────●──────────●
  │           │           │
 #FF0000   #FF8800     #FFFF00
```

> 💻 **CSS karşılığı:**
> 
> 
> ```css
> background: linear-gradient(45deg, #FF0000 0%, #FF8800 50%, #FFFF00 100%);
> ```
> 

### 9.4 Banding Sorunu

Gradient’lerde bazen renkler arası **bant çizgileri** (banding) görünür. Çözümler:

```
1. Daha fazla renk durağı ekle (interpolation yumuşar)
2. Layer Blur efekti uygula (0.5-1px)
3. Üstüne hafif Noise efekti ekle (modern teknik)
```

---

## 10) Styles — Renk ve Stil Kaydetme

> Bir kez kaydet, projenin her yerinde aynı stili kullan. **Design System’in en temel parçası.**
> 

### 10.1 Color Style Kaydetme

```
1. Fill'i seç → Sağda küçük "Apply styles" ikonu (4 nokta)
2. + (artı) butonuna bas
3. İsim ver:
   primary/500
   primary/600
   neutral/100
   neutral/900
   text/primary
   text/secondary
4. Create style
```

### 10.2 İsimlendirme Konvansiyonu (Önerilen)

```
Renkler:
  primary/50, primary/100, primary/200, ..., primary/900
  secondary/50 ... secondary/900
  neutral/50 ... neutral/900
  semantic/success
  semantic/warning
  semantic/error
  semantic/info

  text/primary
  text/secondary
  text/disabled
  text/on-primary       (primary rengin üzerinde okunan renk)

  background/page
  background/card
  background/elevated

  border/default
  border/focus
  border/error
```

### 10.3 Style Türleri

| Tür | Kullanım |
| --- | --- |
| **Color Style** | Renk paleti |
| **Text Style** | Tipografi stilleri (H1, body, caption) |
| **Effect Style** | Drop shadow, blur preset’leri |
| **Grid Style** | Grid system preset’leri |

> 💻 **Frontend bağlantısı:** Bu styles = **CSS variables** veya **Tailwind config**. Figma’dan export edildiğinde aynısı kullanılır.
> 

---

### 🎯 PROJE NOTU — Styles

> • [ ] Tüm renklerini **Color Style** olarak kaydet (`primary/500`, `text/primary` gibi).
• [ ] Body, başlık, caption için **Text Style** kaydet.
• [ ] Drop shadow için **Effect Style** kaydet (`shadow-sm`, `shadow-md`, `shadow-lg`).
• [ ] Word dosyasına eklerken bu Color Style listesini export et (görsel olarak göster).
> 

---

## 11) Blend Modes — Renk Karıştırma Modları

> Bir katmanın altındaki katmanla **nasıl karışacağını** belirler. CSS `mix-blend-mode` ile birebir aynı.
> 

### 11.1 Blend Modes Listesi

| Mode | Etki |
| --- | --- |
| **Normal** | Karışma yok |
| **Darken** | Daha koyu olanı tutar |
| **Multiply** | İki rengi çarpar, koyulaştırır |
| **Color Burn** | Karşıt renkleri yakar (yüksek kontrast) |
| **Lighten** | Daha açık olanı tutar |
| **Screen** | Çarpmanın tersi, açıklaştırır |
| **Color Dodge** | Açıklaştırır + parlaklık |
| **Overlay** | Multiply + Screen kombinasyonu |
| **Soft Light** ⭐ | Yumuşak ışık efekti (en sık) |
| **Hard Light** | Sert ışık efekti |
| **Difference** | Renklerin farkını alır (ters renk) |
| **Exclusion** | Difference’in yumuşağı |
| **Hue** | Sadece hue değiştir |
| **Saturation** | Sadece doygunluk değiştir |
| **Color** | Hue + Saturation |
| **Luminosity** | Sadece parlaklık |

### 11.2 Pratik Örnekler

```
🎨 RENK HARMANLAMA İÇİN:
   • Overlay     → CTA üstüne ışık efekti
   • Soft Light  → Background'a textured görünüm
   • Multiply    → Logo'yu fotoğrafa kaynaştırma

🌑 KOYU MOD İÇİN:
   • Multiply    → Açık görseli koyulaştırma
   • Darken      → Belirli alanlara gölge

✨ EFEKT İÇİN:
   • Difference  → Negative film efekti
   • Screen      → Işık efekti (highlight)
```

> 💻 **CSS:**
> 
> 
> ```css
> mix-blend-mode: multiply;
> mix-blend-mode: overlay;
> mix-blend-mode: soft-light;
> ```
> 

---

## 12) Effects — Görsel Efektler

> Sağ panelde **Effects** bölümünden eklenir. Bir öğeye birden fazla effect uygulanabilir.
> 

### 12.1 Effect Türleri

| Effect | Açıklama | CSS Karşılığı |
| --- | --- | --- |
| **Drop Shadow** | Dış gölge | `box-shadow` |
| **Inner Shadow** | İç gölge | `box-shadow: inset` |
| **Layer Blur** | Öğenin kendisini bulanıklaştır | `filter: blur()` |
| **Background Blur** | Arkasındaki içeriği bulanıklaştır | `backdrop-filter: blur()` |
| **Noise** ⭐ | Doku/gürültü ekler (modern) | (CSS native değil) |
| **Texture** | Doku ekler | (CSS native değil) |

### 12.2 Drop Shadow Parametreleri

```
Drop Shadow ayarları:
  ┌─────────────────────┐
  │ X offset:    0      │  ← yatay kayma
  │ Y offset:    4      │  ← dikey kayma (genelde +)
  │ Blur:        16     │  ← yayılma yumuşaklığı
  │ Spread:      0      │  ← genişleme
  │ Color:    rgba(0,0,0,0.1)  ← renk + opacity
  └─────────────────────┘
```

### 12.3 Shadow Seviyeleri (Material Design Inspired)

```
shadow-xs:  0 1px 2px rgba(0,0,0,0.05)    Çok hafif
shadow-sm:  0 1px 3px rgba(0,0,0,0.10)    Hafif (card)
shadow-md:  0 4px 6px rgba(0,0,0,0.10)    Orta (button hover)
shadow-lg:  0 10px 15px rgba(0,0,0,0.10)  Belirgin (modal)
shadow-xl:  0 20px 25px rgba(0,0,0,0.10)  Çok belirgin
shadow-2xl: 0 25px 50px rgba(0,0,0,0.25)  Dramatik
```

### 12.4 Layer Blur — Pratik Kullanım

```
Renk harmanlama tekniği:

1. Frame içine birkaç renkli elips çiz (mavi, mor, pembe gibi)
2. Hepsini seç
3. Effect → Layer Blur → 150-200
4. SONUÇ: Renkler birbirine yumuşakça karışır
            → Background için harika
            → "Blob" / "Mesh gradient" görünümü
```

### 12.5 Background Blur — Glassmorphism İçin

```
Glass effect formülü:

1. Frame oluştur
2. Fill: White, opacity %5-10
3. Stroke: gradient (white → transparent)
4. Effect:
   • Background Blur: 50
   • Drop Shadow: White, blur 50, opacity %10
   • Inner Shadow: White, blur 5, opacity %15
```

> 💻 **CSS karşılığı (Glassmorphism):**
> 
> 
> ```css
> .glass {
>   background: rgba(255, 255, 255, 0.05);
>   backdrop-filter: blur(50px);
>   border: 1px solid rgba(255, 255, 255, 0.2);
>   box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1);
> }
> ```
> 

---

## 13) Glass Effect / Glass Button Yapımı

> 2020’den beri trend olan tasarım yaklaşımı. Apple, Microsoft, birçok modern uygulamada kullanılıyor.
> 

### 13.1 Glass Button — Adım Adım

```
ADIM 1: Renkli/karanlık background hazırla
  → Glass effect ancak arkada renk varsa görünür
  → Gradient veya renkli görsel arka plan ideal

ADIM 2: Buton frame'ini oluştur
  → Shift+A ile Auto Layout
  → Padding: 16-32 (y) / 64-96 (x)
  → Corner radius: 12-20

ADIM 3: Fill ekle
  → Solid: White
  → Opacity: %5-10 (arka plan görünsün)

ADIM 4: Stroke ekle
  → Linear gradient
  → Beyazdan beyaza (opacity %50 → %0)
  → Pozisyon: Outside
  → Kalınlık: 1-2px

ADIM 5: Effects (sırayla 3 effect)
  ① Background Blur: 50
  ② Drop Shadow: White, x=0 y=8, blur=50, opacity %10
  ③ Inner Shadow: White, x=0 y=1, blur=5, opacity %15

ADIM 6: Text ekle
  → Renk: white (veya çok açık ton)
  → Weight: Medium veya SemiBold
```

### 13.2 Glass Card Versiyonu

```
Buton ile aynı ama:
  • Daha büyük (kart boyutu)
  • Padding daha geniş (24-32 her yönde)
  • İçinde content var (text, görsel, button)
```

### 13.3 Görsel Önizleme

```
┌──────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│ ░░ Arkadaki renkli/görsel bg ░░░░░░│
│ ░░░░░░  ╭────────────────╮  ░░░░░░│  ← Glass element
│ ░░░░░░  │  Bulanık ama   │  ░░░░░░│
│ ░░░░░░  │  şeffaf görünüm│  ░░░░░░│
│ ░░░░░░  ╰────────────────╯  ░░░░░░│
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└──────────────────────────────────────┘
```

---

### 🎯 PROJE NOTU — Glass Effect

> Opsiyonel ama görseli güçlendiren detay.
- [ ] Detail page’de bir glass kart kullanabilirsin (info card, price card).
- [ ] Login page’de glass container deneyebilirsin (background görsel üzerinde).
- [ ] Hero section’da glass CTA buton.
> 

---

## 14) Görsel Manipülasyon (Image Properties)

> Görsel öğeleri Figma içinde manipüle edebilirsin. Photoshop’a gerek yok.
> 

### 14.1 Görsele Çift Tıkla → Sağ Panelde Image Properties

```
┌─ Image Properties ──────────┐
│ Crop Mode:      Fill ▼      │  ← Fill, Fit, Crop, Tile
│                             │
│ Exposure:       0           │  Parlaklık
│ Contrast:       0           │  Kontrast
│ Saturation:     0           │  Doygunluk (-100 = siyah-beyaz)
│ Temperature:    0           │  Sıcaklık (mavi ↔ turuncu)
│ Tint:           0           │  Renk tonu (yeşil ↔ pembe)
│ Highlights:     0           │  Açık bölgeler
│ Shadows:        0           │  Koyu bölgeler
└─────────────────────────────┘
```

### 14.2 Pratik Kullanım

```
🎯 Görseli siyah-beyaz yap:
   Saturation: -100

🎯 Karanlık moda uygun hale getir:
   Exposure: -20, Shadows: +20

🎯 Tüm görselleri aynı look'a getir:
   Aynı temperature ve saturation değerlerini uygula
```

> 💻 **CSS karşılığı:**
> 
> 
> ```css
> filter: grayscale(100%);          /* Saturation -100 */
> filter: brightness(0.8);          /* Exposure */
> filter: contrast(1.2);            /* Contrast */
> filter: sepia(50%);
> filter: hue-rotate(45deg);
> ```
> 

---

## 15) Pen Tool — Vektör Çizim

> `P` kısayolu. SVG `<path>` çizmek için.
> 

### 15.1 Temel Kullanım

```
1. P'ye bas
2. Canvas'a tıkla → ilk nokta (anchor point)
3. Bir yere daha tıkla → ikinci nokta, ilk noktayla bağlanır
4. Tıkla-sürükle → bezier handle (eğri) oluştur
5. Enter → çizimi bitir (açık path)
6. Başa dön ve ilk noktaya tıkla → kapalı path (fill alabilir)
```

### 15.2 Anchor Point Düzenleme

```
Vektörün üzerine çift tıkla → vektör edit modu

  Move        → Anchor point taşı
  Lasso       → Birden fazla nokta seç
  Paint       → Stroke düzenle

  + (ikon)    → Yeni anchor point ekle
  - (ikon)    → Anchor point sil
```

### 15.3 Pen Tool Kullanım Senaryoları

| Senaryo | Açıklama |
| --- | --- |
| **Özgün ikon** | Standart kütüphanede yoksa, kendin çiz |
| **İllüstrasyon** | Karakter, dekoratif şekil |
| **Eğri çizgiler** | Linear ile yapılamayan curves |
| **Trace etme** | Bir resmin üzerinden vektör çıkarma |
| **Logo tasarımı** | Vektörel logo |

> 💻 **Frontend bağlantısı:** Pen tool ile çizdiğin her path SVG olarak export edilir → React’te `<svg><path d="M0,0..."/></svg>` olarak inline kullanılır.
> 

---

## 16) Auto Layout — GİRİŞ (Yarın Derin)

> 🚀 **Figma’nın en güçlü özelliği.** Doğru öğrenince tasarım hızı **3-5x artar**.
> 

### 16.1 Neden Auto Layout?

```
Manuel düzenleme (constraints ile):
  1. Buton çiz
  2. Text ekle, ortala
  3. Padding'i göz kararı ayarla
  4. İkon ekle, manuel hizala
  5. Yeni text ekledikçe her şeyi yeniden hizala  ← UZUN

Auto Layout:
  1. Buton frame'i seç → Shift+A
  2. Padding ve gap değerlerini gir
  3. Text/icon değişse de hizalama otomatik       ← KISA
```

### 16.2 Temel Kullanım

```
Bir veya birden fazla öğeyi seç → Shift + A

  Sağ panelde Auto Layout bölümü açılır:
  ┌──────────────────────────────────┐
  │ ▲                                │
  │ ◀━ Direction: Horizontal/Vertical│
  │ ▼                                │
  │                                  │
  │ Padding:    16  16  16  16       │
  │ Gap:        12                   │
  │                                  │
  │ Alignment:  ⊞  ⊞  ⊞              │  ← 9 hizalama
  │             ⊞  ⊞  ⊞              │
  │             ⊞  ⊞  ⊞              │
  └──────────────────────────────────┘
```

### 16.3 Content vs Container — Kritik Kavram

```
┌─ CONTAINER (frame) ────────────────┐
│  padding ───────────────────────►  │
│  ┌──────────────────────────────┐  │
│  │                              │  │
│  │  CONTENT (içerideki öğeler)  │  │
│  │  ◄── gap ──►                 │  │
│  │  [icon] [text] [icon]        │  │
│  │                              │  │
│  └──────────────────────────────┘  │
│  padding ───────────────────────►  │
└────────────────────────────────────┘

Container = dış kutu (padding sahibi)
Content   = içerideki öğeler (gap aralarındaki)
```

### 16.4 Resizing Modu

| Mod | Davranış | İkon |
| --- | --- | --- |
| **Fixed Width/Height** | Sabit ölçü | `[125]` |
| **Hug Contents** | İçeriğe göre büzülür | `≈Hug` |
| **Fill Container** | Container’ı tamamen kaplar | `≡Fill` |

> 💻 **CSS karşılığı:**
- Fixed = `width: 200px`
- Hug Contents = `width: fit-content` veya `width: auto`
- Fill Container = `width: 100%` veya Flexbox’ta `flex: 1`
> 

### 16.5 Buton Pratiği (Yarın Derinleştirilecek)

```
Adım 1: Text "Giriş Yap" yaz
Adım 2: Shift+A → Auto Layout uygula
Adım 3: Padding: 24 (y) / 48 (x)
Adım 4: Fill ekle (primary renk)
Adım 5: Corner radius: 8
Adım 6: Text rengini white yap

Sonuç: Auto Layout'lu buton.
       Text uzasa da kısalsa da padding korunur.
       İkon eklersen otomatik hizalanır.
```

### 16.6 Auto Layout Anti-Patterns (Yapmaman Gerekenler)

```
❌ Her frame'i Auto Layout yapma — gereksiz overhead
❌ İç içe çok fazla Auto Layout (5+ nest) — performans sorunu
❌ Manuel kaydırılmış öğeyi Auto Layout'a koyma — pozisyon kaybolur
❌ İkonu text gibi inline koyma — alignment kontrolü zor
```

---

### 🎯 PROJE NOTU — Auto Layout

> Auto Layout **proje şartlarından zorunlu**.
- [ ] Tüm butonlarda Auto Layout (her zaman).
- [ ] Tüm input field’larda Auto Layout.
- [ ] Kart yapılarında Auto Layout.
- [ ] Sayfa içeriği için Auto Layout (vertical, gap’lerle bölümler).
- [ ] Navigation barlarda horizontal Auto Layout.
- [ ] 3 ana frame’in **kendisi** Auto Layout olmak zorunda değil — ama içerikleri olmalı.
> 

---

## 17) Effects App Plugin — Bonus

> `Ctrl+P` → `Effekt App` çalıştır → Görseller için hazır filtre setleri.
> 

| Filter | Etki |
| --- | --- |
| Motion Blur | Hareket bulanıklığı |
| Glitch | Glitch efekt |
| Pixelate | Piksel efekti |
| Halftone | Yarım ton (Pop art) |
| Distortion | Bozulma |

### Vectorize Plugin (PNG → SVG)

```
Ctrl+P → Vectorize
1. PNG görseli seç
2. Plugin'i çalıştır
3. Otomatik SVG'ye dönüşür
4. Renkleri ayrı ayrı değiştirebilir
```

> 💡 Marka logosu PNG bulduğun ama SVG’ye ihtiyacın var → Vectorize plugin işini görür.
> 

---

## 🚨 PROJE TESLİM FORMATI — KRİTİK BÖLÜM

> Hoca bugün **detaylı olarak** anlattı. Bunu mutlaka uygula.
> 

### 18.1 Teslim Edilecek 2 Dosya

```
┌─── 1. PDF Dosyası ────────────────────────┐
│                                           │
│  Sadece 3 ekran (export edilmiş PNG):     │
│   • Giriş Sayfası (Login)                 │
│   • Ana Sayfa (Home)                      │
│   • Detay Sayfası (Detail)                │
│                                           │
│  Her ekran ayrı sayfada veya alt alta.    │
│                                           │
└───────────────────────────────────────────┘

┌─── 2. Word Dosyası (Tanıtım) ─────────────┐
│                                           │
│  İçerik:                                  │
│   1. Proje Tanımı (1-2 paragraf)          │
│   2. Tasarımın Amacı                      │
│   3. Renk Seçimi + Hex Kodları            │
│   4. Tipografi (görsel + açıklama)        │
│   5. Komponent ve Varyant Gösterimi       │
│   6. Auto Layout Kullanımı (örnekli)      │
│   7. Prototip (opsiyonel)                 │
│   8. Figma Dosya Linki (opsiyonel)        │
│                                           │
└───────────────────────────────────────────┘
```

### 18.2 Word İçeriği — Detay

### Bölüm 1: Proje Tanımı

```
Örnek paragraf:
"Bu proje, [yurtdışı tur rezervasyonu] amaçlı bir mobil
uygulamanın arayüz tasarımıdır. Hedef kullanıcı kitlesi
[25-45 yaş arası seyahat severlerdir]. Tasarımın amacı,
kullanıcının [hızlıca tur arayıp detaylarını incelemesini]
sağlamaktır.

Uygulama 3 ana ekrandan oluşmaktadır:
- Giriş sayfası: kullanıcı kimlik doğrulama
- Ana sayfa: tur kategorileri ve liste görünümü
- Detay sayfası: seçilen turun detay bilgileri"
```

### Bölüm 2: Renk Seçimi

```
Yöntem 1 — Yazıyla:
"Projemde ana renk olarak #3B82F6 (mavi) seçilmiştir.
İkincil renk #F59E0B (turuncu) olup vurgu rengi olarak..."

Yöntem 2 — Görsel (HOCA TAVSİYESİ) ⭐:
Color palette frame'ini export et → Word'e yapıştır
Altına 2-3 cümle açıklama
```

### Bölüm 3: Tipografi

```
1. Design System'deki tipografi alanını export et
2. Word'e yapıştır
3. Açıklama yaz:
   "Projede Inter font ailesi kullanılmıştır. Başlıklar
    için SemiBold ve Bold ağırlıkları, gövde metin için
    Regular tercih edilmiştir."
```

### Bölüm 4: Komponent ve Varyant

```
1. Component set'leri export et (buton varyantları, input state'leri)
2. Word'e yapıştır
3. Açıklama:
   "Butonlarda 3 ana varyant kullanılmıştır: Primary,
    Secondary, Ghost. Her varyantın 5 state'i (Default,
    Hover, Focus, Pressed, Disabled) tanımlanmıştır."
```

### Bölüm 5: Auto Layout

```
1. Auto Layout kullandığın bir bölümü export et
2. Açıklama:
   "İkincil butonlarımda otolayout yapısı kullandım.
    İkonla metin arasındaki spacing 16 piksel ile
    belirlendi. Padding değerleri dikey 12, yatay 24 olarak..."
```

### Bölüm 6: Prototype (Opsiyonel)

```
1. Prototype sekmesinde 2 sayfa arası bağlantıyı göster
2. İnteraction okun ekran alıntısı al
3. Açıklama:
   "Giriş Yap butonuna tıklandığında 'Smart Animate' geçişi
    ile ana sayfaya yönlendirme yapılmaktadır."
```

### Bölüm 7: Figma Link (Opsiyonel)

```
Share → Anyone with the link → Can VIEW
Linki Word'ün en sonuna yapıştır.
(Edit yetkisi vermesen de olur, view yeterli)
```

### 18.3 Hocanın Tavsiyesi: Görsel > Yazılı

> 🎯 **Hoca’nın net tavsiyesi:** “Tek tek yazmak yerine **Design System’i export edip görsel olarak göster, altına 1-2 cümle açıklama**. Hem daha hızlı hem daha profesyonel görünür.”
> 

### 18.4 Son Teslim Tarihi

```
4 hafta eğitim + 1 hafta portfolyo = 5 hafta
                                     │
                                     └─ Bayram haftası nedeniyle değişebilir
                                        Hoca takvimi sonradan netleştirecek
                                        Yaklaşık: Haziran ortası
```

Eğitim haftası içinde **bitirmek gerekmiyor**. Ama erken bitirmek **avantaj** — diğer projelere vakit kalır.

---

## 19) Önerilen Pluginler — Bugün Eklenenler

| Plugin | Kullanım |
| --- | --- |
| **Effekt App** | Görsel filtreler (motion blur, glitch, halftone) |
| **Vectorize** | PNG → SVG dönüşüm |
| **Logo Finder** | Marka logosu arama |
| **Unsplash** | Stok fotoğraf (önceden bahsedildi) |
| **Foundation Color Generator** ⭐ | Material 3 renk skalası |
| **Real Time Colors** ⭐ | Renk paletini canlı UI’da test |
| **Stark** | Erişilebilirlik testi |

---

## 20) Anti-Pattern Hatırlatması

```
❌ Yapma:
   • Community'den dosya alıp Design System olmadan kullanma
   • Random isimlendirme (color-1, color-2, font-3)
   • Boolean ile birleştirmiş şekle radius vermeyi unutma (substract'taki içteki radius'a dikkat!)
   • Glass effect'i renksiz arka plana koyma (görünmez)
   • Auto Layout ve constraints'i karıştırma (Auto Layout'lu öğede constraints çalışmaz)
   • Group kullanma (Frame kullan)
   • Manuel hizalama (Auto Layout ile yap)
```

---

## 21) Yarına Hazırlık (Perşembe — 4. Gün)

```
🔜 Auto Layout (DERİN)
   • Horizontal vs Vertical direction
   • Wrap (yeni özellik)
   • Absolute position
   • Resizing modları detaylı

🔜 Görsel Hiyerarşi (UI tarafı)
   • Boyut, renk, konum, ağırlık ile hiyerarşi
   • Aşamalı bilgi sunumu

🔜 Text Styles (Tipografi)
   • Font ailesi yönetimi
   • Style kaydetme

🔜 Component & Variant
   • Component oluşturma (Ctrl+Alt+K)
   • Variant ekleme
   • Properties (instance swap, boolean, text)
```

### Bu Akşam Yapılabilecekler

- [ ]  Figma’da 3 frame oluştur (Login, Home, Detail).
- [ ]  Color palette’i Design System sayfasında Color Style olarak kaydet.
- [ ]  4-5 örnek **Pen Tool** çizimi dene (özgün ikon oluştur).
- [ ]  Bir Glass Card örneği yap (pratik).
- [ ]  Boolean Groups ile özgün bir şekil dene.

---

## 📚 Kaynak Linkleri

- 🎨 [Daily UI Challenge](https://dailyui.co/)
- 🎯 [Mobbin](https://mobbin.com/)
- 🎯 [Dribbble](https://dribbble.com/)
- 🎯 [Figma Community](https://figma.com/community)
- 📐 [Laws of UX](https://lawsofux.com/)
- 📱 [UI Patterns](https://ui-patterns.com/)
- 🌈 [Coolors](https://coolors.co/)
- 🌈 [Real Time Colors](https://realtimecolors.com/)
- 🔌 [Iconify](https://iconify.design/)
- 🔌 [Phosphor Icons](https://phosphoricons.com/)
- 📏 [Type Scale](https://typescale.com/)
- 🎓 [Figma Education](https://figma.com/education)
- 📖 [Material Design 3](https://m3.material.io/)
- 🍎 [Apple HIG](https://developer.apple.com/design)
- ✍️ [Smashing Magazine](https://smashingmagazine.com/)
- ✍️ [UX Planet on Medium](https://uxplanet.org/)

---

## 🎯 GENEL PROJE CHECKLİSTİ (3 Gün Sonrası — Mevcut Durum)

```
TASARIM TEMELLERİ
─────────────────
[ ] Renk paleti seçildi (primary, secondary, neutral)
[ ] Color Styles olarak kaydedildi
[ ] Font ailesi seçildi (max 2)
[ ] Text Styles oluşturuldu (H1-H4, body, caption)
[ ] İkon kütüphanesi seçildi (Phosphor önerilir)
[ ] Standart boyutlar belirlendi (spacing 4 katları, button 48px)

FRAMING & STRUCTURE
─────────────────
[ ] 3 ana frame oluşturuldu (Login, Home, Detail)
[ ] Cihaz boyutu: iPhone 16 (393×852) veya tercihen mobil
[ ] Design System için ayrı page açıldı

DESIGN SYSTEM
─────────────────
[ ] Color palette kayıtlı
[ ] Typography stilleri kayıtlı
[ ] Buttons component (primary, secondary, ghost — her birinin state'leri)
[ ] Input components (default + focus minimum)
[ ] Icons (24×24, hep aynı stil)
[ ] Logo (eğer marka varsa)

LOGİN PAGE
─────────────────
[ ] Logo veya başlık
[ ] Email input (default + focus state)
[ ] Password input
[ ] Primary buton (Giriş Yap)
[ ] Secondary action (Şifremi Unuttum / Kayıt Ol)
[ ] Spacing'ler doğru (4 katları, grup içi < grup dışı)

HOME PAGE
─────────────────
[ ] Header (logo + search/menu)
[ ] Hero / Banner alanı veya kategori bölümleri
[ ] Kart yapısı veya liste (gerçek içerikle, lorem ipsum YOK)
[ ] Bottom navigation bar (mobil için)

DETAIL PAGE
─────────────────
[ ] Geri butonu
[ ] Görsel alanı (hero image)
[ ] Başlık, açıklama
[ ] Aksiyon butonu (Sepete Ekle, Rezerve Et, vb.)
[ ] Detay listesi veya özellikler

AUTO LAYOUT (ZORUNLU)
─────────────────
[ ] Tüm butonlar Auto Layout'lu
[ ] Inputlar Auto Layout'lu
[ ] Kartlar Auto Layout'lu
[ ] Bölümler Auto Layout'lu (yarın derinleşecek)

COMPONENT & VARIANT (ZORUNLU)
─────────────────
[ ] Butonlar component olarak tanımlı
[ ] Variantlar var (state'ler için)
[ ] Inputlar component olarak tanımlı
[ ] Kart bileşeni varsa component olarak

TESLİM
─────────────────
[ ] PDF: 3 ekran (export edilmiş)
[ ] Word: proje tanıtım belgesi
[ ] (Opsiyonel) Figma view link
[ ] (Opsiyonel) Prototype gösterimi
```

---

> **Yarın:** Auto Layout’un tüm sırları + Component & Variant. Bu iki konu olmadan Figma “araç olmaktan çıkıp **sistem**” olamaz. Pratik yapmaya gel.
>