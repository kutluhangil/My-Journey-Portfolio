# 📘 Gün 4 — Auto Layout (Derin), Nested Layout, Resizing & Component Girişi

> **Hafta 1 — UI/UX & Web Tasarımı: FigmaEğitmen:** Meltem Turan (PNC Group)
**Süre:** ~155 dk + soru-cevap
**Gün 4’ün Akışı:** Hızlı tekrar (glass, boolean pattern, neon effect) → Tipografi & line-height tuzağı → Plugin’ler (Fast Isometric, Logo Finder, Vectorize) → Figma’nın 3 büyük süreci → Auto Layout deep → Container vs Content → Nested Auto Layout → Resizing (Fixed / Hug / Fill) → Navigation Bar pratiği → Product Card pratiği → Component & Instance girişi.
> 

---

## 📅 Hafta Akışı Hatırlatması

| Gün | Konu | Durum |
| --- | --- | --- |
| ✅ Pzt | UI/UX temelleri, 7 prensip, renk, tipografi | Tamamlandı |
| ✅ Sal | Butonlar, inputlar, ikonlar, Figma arayüzü | Tamamlandı |
| ✅ Çar | Constraints, Şekil araçları, Effects, Auto Layout girişi | Tamamlandı |
| 🟢 Per (Bugün) | **Auto Layout derin + Nested + Resizing + Component’a giriş** | İşleniyor |
| 🔜 Cum | Tam proje yapımı + Prototype | Yarın |

---

## 1) Hızlı Tekrar — Önceki Gün Pratikleri

### 1.1 Glass Input Alanı (Giriş Sayfası Için)

Şekil araçları + efekt kombinasyonuyla giriş sayfası altyapısı:

```
1. Frame oluştur (mobil boyut)
2. İki dekoratif renk dairesi (primary + secondary)
3. Arkada layer blur ile renkleri harmanla (50-100 blur)
4. Glass kart:
   • Beyaz fill, opacity %25
   • Glass effect (Background blur)
   • Drop shadow (beyaz, parıldama efekti)
5. Içeriye input alanı yerleştir (auto layout ile)
```

> 💻 **Frontend bağlantısı:** Bu yapı CSS’te `backdrop-filter: blur()` + `rgba(255,255,255,0.25)` + degrade arka planla yapılır.
> 

### 1.2 Boolean Groups ile Hareket Edebilen Pattern

```
1. Bir rectangle ana plan
2. İçinde küçük dikdörtgenler (4'e bölünmüş)
3. İki tane daha "kalın+ince" rectangle
4. Subtract → kesilmiş bir desen
5. Corner radius 48 → her köşede yumuşaklık
```

**Püf nokta:** Flatten **yapmazsan** içerideki parçaları hâlâ sürükleyip yerini değiştirebilirsin. Bu, ekranlar arası farklı varyasyonlar üretmek için ideal — Blender’daki shape edit moduna benzer.

> ⚠️ **Flatten** dedikten sonra geri dönüşü yok. Onun yerine “tek vektör path” elde edersin.
> 

### 1.3 Tipografi Tuzağı — Line Height

> 🚨 **Çok kritik ama gözden kaçan detay:** Auto Layout’ta gap’i `4` yapıyorsun ama yine de elemanlar **uzakta** görünüyor. Çünkü text’in `line-height` değeri varsayılan olarak yüksek.
> 

### Çözüm

```
Text seçiliyken sağ panelde:
  • Line height: 45  ← YANLIŞ (yapay olarak yüksek)
  • Line height: AUTO ← DOĞRU (font yüksekliğine eşit)
```

```
Tipografi → Type Details → Line height: AUTO
```

**Tüm metinleri seçip line height’ı AUTO yap.** Bu yapılmadan Auto Layout’ta gap değerleri yanıltıcı görünür.

> 💻 **CSS karşılığı:** `line-height: normal` (font ailesinin önerdiği). `line-height: 1` ile `line-height: 1.5` arasında devasa fark yaratır.
> 

---

### 🎯 PROJE NOTU — Tekrar

> • [ ] Tüm metinlerin **line-height değerini AUTO yap** — yoksa spacing kontrolü imkansız.
• [ ] Glass effect kullanacaksan **koyu/renkli arka plan zorunlu** — beyazda görünmez.
• [ ] Boolean ile yapılan özgün şekiller henüz **flatten edilmemiş** olsun — düzenlemeye açık tut.
> 

---

## 2) Neon Effect — Adım Adım Yapım

Popüler dark mode tasarımlarda kullanılan parlama efekti.

### Reçete

```
ADIM 1: Subtract ile delik açılmış bir şekil oluştur
   • İki elips → biri büyük, biri içine ortalı küçük
   • Substract → halka (donut)

ADIM 2: Background blur ekle
   • Effect → Background Blur → 50

ADIM 3: Inner Shadow #1 (beyaz, üst katman)
   • Color: white, opacity %50
   • X: 0, Y: 4
   • Blur: 40

ADIM 4: Inner Shadow #2 (beyaz, daha hafif)
   • Color: white, opacity %25
   • X: 0, Y: 4
   • Blur: 50

ADIM 5: Inner Shadow #3 (RENKLİ — neon glow)
   • Color: kırmızı/mavi/yeşil (ne istiyorsan)
   • Opacity %50
   • X: 25, Y: 0  (yanlardan parlasın)
   • Blur: 40
```

### Sonuç

```
  ╭──────────────╮
  │  ┌────────┐  │   ← Beyaz iç gölge (highlight)
  │  │ ░░░░░░ │  │   ← Renkli neon glow
  │  │ ░BG░░░ │  │   ← Background blur
  │  │ ░░░░░░ │  │
  │  └────────┘  │
  ╰──────────────╯
```

Logo, badge, buton, decorative element için kullanılabilir.

> 💡 **Çeşitlendirme:** İki rengi karıştır (mavi + kırmızı inner shadow’lar) → mor neon. Arka plan rengini de değiştir → görünüm tamamen değişir.
> 

---

## 3) Bonus Pluginler — Bugün Eklenenler

### 3.1 Fast Isometric — 3D Görünüm Verme

> `Ctrl+P` → `Fast Isometric` çalıştır.
> 

```
Düz tasarım  →  İzometrik 3D görünüm
   [Card]    →   ╱[Card]╲
                ╱       ╲
```

**Önemli kural:** Tüm parçaların **aynı frame içinde** olması gerekiyor. Frame’in dışında kalan elemanlar dönüşmez.

```
Kontrol yöntemi:
  Frame'in göz ikonu (👁) tıklayıp kapat.
  Hangi elemanlar görünmez olduysa → frame içindedir ✅
  Hâlâ görünüyorsa → frame dışındadır ❌
```

Kullanım: kredi kartı tasarımı, ödeme ekranı, dashboard sunumu.

### 3.2 Logo Finder

> Ödeme metodu logoları (Visa, Mastercard, PayPal, Apple Pay vb.) hazır olarak ekler.
> 

```
Ctrl+P → Logo Finder → "Visa" ara → Insert
```

### 3.3 PNG → SVG: Vectorize

PNG bulduğun bir logoyu küçültmek istersen çözünürlük kaybeder. **Önce vektörleştir, sonra küçült.**

```
1. PNG'yi Figma'ya ekle (büyük boyutta)
2. Seç → Ctrl+P → Vectorize
3. Şimdi SVG → istediğin boyuta küçült (çözünürlük kaybı yok)
4. Renkleri bile değiştirebilirsin
```

> 💻 **Frontend bağlantısı:** Web’de bir logoyu hiçbir zaman PNG olarak kullanma — SVG her zaman daha küçük dosya boyutu + her ekran çözünürlüğünde keskin.
> 

---

## 4) Figma’nın 3 Büyük Süreci — Zihinsel Harita

> Hocadan kritik tanım. Figma’da çalışma sırası **her zaman** bu 3 aşamadır:
> 

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  1️⃣  ŞEKİL · RENK · DOKU                            │
│      Arayüzü "kişiselleştirdiğin" aşama             │
│      → Şekiller, gradient, glass, neon, blend       │
│      → "Bu nasıl görünmeli?" sorusu                 │
│                                                     │
│  2️⃣  AUTO LAYOUT · COMPONENT · VARIANT              │
│      Tasarımın herkesçe anlaşılabilir hale gelmesi  │
│      → Sistem kurma, tekrar eden öğeler             │
│      → "Bu nasıl yönetilebilir?" sorusu             │
│                                                     │
│  3️⃣  PROTOTYPE                                      │
│      Tasarımın sunulması                            │
│      → Interactions, transitions, scroll            │
│      → "Bu nasıl davranır?" sorusu                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

> 🎯 **Hoca’nın sektör notu:** “Auto Layout, Component ve Variant kullanılmadan hiçbir tasarım kabul edilmiyor. Sektör pratiği bu. Freelance ya da kurumsal — beklenen araç Figma ve beklenen yöntem bu.”
> 

---

## 5) Auto Layout — Derin Anlatım

### 5.1 Hızlı Anımsama

```
Auto Layout kısayolu:  Shift + A
Auto Layout kaldırma:  Sağ tık → Frame Selection
                       (Ctrl+Z de işe yarar ama anlık)
```

### 5.2 İki Kritik Kavram — CONTAINER vs CONTENT

> Bu ikisi Auto Layout’un **ana sözlüğü**. Her dakika kullanacaksın.
> 

```
┌─ CONTAINER (en dıştaki frame) ────────────┐
│  ↑ padding-top                            │
│  ┌────────────────────────────────────┐   │
│  │                                    │   │
│  │   CONTENT (içerideki tüm öğeler)   │   │
│  │   ◄── gap ──►                      │   │
│  │   [icon] [text] [button]           │   │
│  │                                    │   │
│  └────────────────────────────────────┘   │
│  ↓ padding-bottom                         │
└────────────────────────────────────────────┘
  ← padding-left      padding-right →
```

| Kavram | Tanım | CSS Karşılığı |
| --- | --- | --- |
| **Container** | Dıştaki Auto Layout’lu frame | `<div>` (flex container) |
| **Content** | Container’ın içindeki öğeler | flex children |
| **Padding** | Container’ın iç boşluğu | `padding` |
| **Gap** | Content’ler arası boşluk | `gap` |
| **Alignment** | Content’lerin container içindeki hizası | `justify-content` + `align-items` |

> 💡 **Kritik:** Nested (iç içe) yapılarda **en dıştaki** her zaman container, **onun bir altındaki** content. Ama o content de kendi içinde başka bir container olabilir. Bu **hiyerarşi**.
> 

### 5.3 Alignment’ın Gizli Önemi

> Alignment 9’lu grid’in görüntüsü budur:
> 

```
┌─────────────────────┐
│ ⊞   ⊞   ⊞           │   ← top-left, top-center, top-right
│                     │
│ ⊞   ⊞   ⊞           │   ← center-left, center, center-right
│                     │
│ ⊞   ⊞   ⊞           │   ← bottom-left, bottom-center, bottom-right
└─────────────────────┘
```

**Sürpriz:** Container içeriği TAM doldurmuşsa alignment **görünmez** — değiştirsen de bir şey olmaz. **Ne zaman görünür?**

```
Container'ı BÜYÜTÜRSEN:
  Width arttığında → yatay alignment (sol/orta/sağ) belirir
  Height arttığında → dikey alignment (üst/orta/alt) belirir
```

> 💻 **CSS karşılığı:**
- Top-center = `justify-content: flex-start; align-items: center`
- Center = `justify-content: center; align-items: center`
- Bottom-right = `justify-content: flex-end; align-items: flex-end`
> 

### 5.4 Gap = “Auto” Sürprizi (Space-Between)

> Bu özellik en sık karıştırılan ama en çok işe yarayan.
> 

```
[Logo] [Title]                    [Button] [Avatar]
   ◄────────── gap: AUTO ──────────►
```

**Ne anlama geliyor?** Container genişledikçe, gap **otomatik** olarak büyür. İlk eleman bir uçta, son eleman diğer uçta — aralarda kalan boşluk gap olarak dağıtılır.

Klasik header pattern’ı için ideal:
- Sol: logo
- Sağ: menü/buton
- Arada: ne kadar boşluk varsa dolsun

```
Sağ panel → Gap kutusu → Değer yerine "auto" seç
```

> 💻 **CSS karşılığı:** `justify-content: space-between`. Bu da modern frontend’in en çok kullanılan flexbox pattern’lerinden biri.
> 

### 5.5 Anti-Pattern: Gereksiz Auto Layout

> ⚠️ **En yaygın Auto Layout hatası:** Her şeye Auto Layout vermek.
> 

```
❌ YANLIŞ:
   Text yapısına Auto Layout (hiç gerek yok)
   → İçine padding ver
   → Sonra bunu başka bir Auto Layout'a koy
   → Yapı bozuluyor ve kontrol kaybediliyor

✅ DOĞRU:
   Yalnızca container görevi göreceği zaman Auto Layout uygula
   Text'ler ve ikonlar tek başına bırakılır
```

**Belirti:** Auto Layout uyguladıktan sonra “neden bozuldu, neden ortalı değil, padding niye işe yaramıyor” diye sorduğun her durum bu hatadan kaynaklanıyor olabilir.

> 💡 **Kural:** “Şüpheliysen Auto Layout uygulama.” Sonradan eklemek kolay; var olanı düzeltmek zordur.
> 

### 5.6 Ignore Auto Layout (Eski Adı: Absolute Position)

Auto Layout içindeki bir öğeyi **serbest hareket ettirmek** istiyorsun. Örnek: notification badge, FAB button, ürün rozeti.

```
1. Container'ı oluştur (Auto Layout)
2. Badge'i içine at — otomatik hizalanır
3. Badge'i seç → Sağ panel → Position → Ignore Auto Layout
4. Şimdi serbestçe sürükleyebilirsin
5. Bu badge HÂLÂ container'ın içinde — sadece kuralları es geçiyor
```

> 💻 **CSS karşılığı:** `position: absolute`. Parent `position: relative` olmalı.
> 

```
🛒 Sepet ikonu üstünde "5" badge
     ┌────┐
     │ 🛒 │
     │   ●5 │  ← Ignore Auto Layout uygulanmış
     └────┘
```

### 5.7 Flow Direction (Akış Yönü)

```
Horizontal flow:           Vertical flow:
┌──────────────────┐       ┌─────────┐
│ [A] [B] [C] [D]  │       │  [A]    │
└──────────────────┘       │  [B]    │
                           │  [C]    │
                           │  [D]    │
                           └─────────┘
```

```
Sağ panelden direction toggle'ı:  ↔ veya ↕
```

> 💡 Yatay → dikey çevirmek için **akışı değiştirmek yeter**. Tüm öğeleri tekrar elle taşımana gerek yok.
> 

> 💻 **CSS karşılığı:** `flex-direction: row` ↔︎ `flex-direction: column`.
> 

---

### 🎯 PROJE NOTU — Auto Layout Temelleri

> • [ ] Her butonun **etrafı** Auto Layout (içindeki text + icon zaten otomatik hizalanır).
• [ ] Form alanlarında dikey Auto Layout — gap ~16-20px.
• [ ] Header’da yatay Auto Layout + **gap: auto** (logo solda, menü sağda).
• [ ] Bottom nav bar’da yatay Auto Layout + gap auto (ikonlar eşit dağılsın).
• [ ] Notification badge → **Ignore Auto Layout** ile pozisyonla.
> 

---

## 6) Nested Auto Layout — İç İçe Hiyerarşi

> Gerçek tasarımlar tek bir Auto Layout’tan oluşmaz. **İç içe** Auto Layout’lar zincirler oluşturur.
> 

### 6.1 Mantık — Buton Örneği

```
Sorun:  Buton içinde [icon] [text] [icon] var.
        Gap = 64 verdim → her şey 64 piksel uzakta.
        Ama ben icon ile text'in YAKIN olmasını,
        uçaktaki iconun UZAK olmasını istiyorum.
```

**Çözüm: Nested Auto Layout**

```
┌─ DIŞ CONTAINER (gap: 64) ──────────────────┐
│                                            │
│  ┌─ İÇ CONTAINER (gap: 8) ──┐  [✈️ icon]  │
│  │  [🔓 login]  [Giriş Yap]│              │
│  └──────────────────────────┘              │
│                                            │
└────────────────────────────────────────────┘
```

İçerideki iki öğeyi seçip tekrar Shift+A → kendi container’larını oluşturur. Şimdi:
- Dış container gap: 64 → uçak uzak
- İç container gap: 8 → login + text yakın

### 6.2 Hiyerarşi Şeması

```
ANA SAYFA
└── ANA CONTAINER (Auto Layout)
    ├── Header                  ← bir Auto Layout
    │   ├── Logo
    │   └── Menu
    │       ├── Menu Item 1     ← Menu kendi içinde Auto Layout
    │       ├── Menu Item 2
    │       └── Menu Item 3
    ├── Hero Section            ← bir Auto Layout
    │   ├── Title
    │   ├── Subtitle
    │   └── Button Group
    │       ├── Primary Button
    │       └── Secondary Button
    └── Footer                  ← bir Auto Layout
        ├── Links
        └── Social Icons
```

> 💡 **Anlama yöntemi:** Her seviyede “Bu container’ın content’i kim? Bu content kendi içinde container olabilir mi?” sorusunu sor.
> 

> 💻 **CSS karşılığı:** Aynen iç içe Flexbox div’leri.
> 

---

### 🎯 PROJE NOTU — Nested Auto Layout

> • [ ] Login page → form container → input group → her input içinde [label, field, icon] iç Auto Layout.
• [ ] Product card → image + content group → content içinde [title, description] iç Auto Layout, sonra [price, button] başka iç Auto Layout.
• [ ] Header → logo + nav grup → nav içinde menu items yatay Auto Layout.
> 

---

## 7) Resizing — Fixed / Hug / Fill (Auto Layout’un Kalbi)

> 🚨 **Burası en çok kafa karıştıran ama en kritik bölüm.** İyi anlanmadan responsive tasarım yapılamaz.
> 

### 7.1 Üç Davranış

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  📏 FIXED WIDTH/HEIGHT                                  │
│      "Sabit kal. Ne içerideki büyüse de, ne dışarıdaki │
│      çekiştirse de boyutum değişmesin."                 │
│      → Logo, ikon, avatar gibi formu korunan öğeler     │
│                                                         │
│  🫂 HUG CONTENTS                                        │
│      "İçerideki content'e sarıl. İçerik küçüldüyse     │
│      ben de küçülürüm, büyüdüyse büyürüm."             │
│      → Buton (text'ine sarılır), kart (içeriğine)      │
│                                                         │
│  📦 FILL CONTAINER                                      │
│      "Dıştaki container'ı doldur. Container ne kadar   │
│      yer veriyorsa ben o kadar genişlerim."            │
│      → Responsive sayfa içeriği, esnek alanlar         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 7.2 Karşılaştırma Tablosu

| Mod | Davranış | İkon | CSS Karşılığı |
| --- | --- | --- | --- |
| **Fixed** | Sabit boyut | `[125]` | `width: 200px` |
| **Hug** | İçeriğe sarıl | `≈Hug` | `width: fit-content` |
| **Fill** | Container’ı doldur | `≡Fill` | `width: 100%` veya `flex: 1` |

### 7.3 Atom-Molekül Mantığı (Hoca’nın Altın Kuralı)

> 🎯 **Hoca’nın sözleri:** “Bu Nike ve 5.000 fiyatı bir moleküldür. İçindeki her bir yazı atomdur. Molekül fill ise, içindeki atomların **her birinin de fill** olması gerekir. Ancak bu şekilde responsive olur.”
> 

```
DIŞARIDAKİ CONTAINER (Fill / Hug)
└── ORTA SEVIYE (Fill)
    └── İÇ SEVIYE (Fill)
        └── EN İÇ ELEMENT (Fill veya Fixed - yapıya göre)
```

**Eğer herhangi bir seviyede Fill yerine Hug/Fixed varsa, oradan yukarıya responsive zinciri kırılır.**

### 7.4 Pratik Karar Şeması

```
                 BU ÖĞE NE OLMALI?
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Logo, ikon,    Buton, kart,    Sayfa container,
   avatar gibi    içeriğe göre    hero section,
   sabit         boyutlanan        full-width bar
        │              │              │
        ▼              ▼              ▼
    🔒 FIXED      🫂 HUG          📦 FILL
```

### 7.5 Tipografi + Auto Layout Sorunu

> Bir text’i fill yapıp container’ı çok küçülttüğünde **text taşar** veya **tek karakter olarak gözükür**. Bu doğal — text’in piksel kapasitesi var.
> 

**Pratik kural:** Mobil → 393px gibi gerçekçi minimum kullan. 50 pixel’e indirip “neden bozuldu” deme.

---

### 🎯 PROJE NOTU — Resizing

> • [ ] Login page kart container → **Fixed Width** (393px - iPhone genişliği).
• [ ] İçerideki tüm öğeler → **Fill Container** (yatay olarak kartı doldursunlar).
• [ ] Logo, ikon, avatar → **Fixed** her zaman.
• [ ] Buton → **Hug Contents** (text’ine göre boyutlansın) ya da **Fill** (tam genişlik isteniyorsa).
• [ ] Atom-molekül kuralı: Her seviyede zinciri kontrol et.
> 

---

## 8) Pratik 1 — Navigation Bar Yapımı

> Hocayla beraber yapılan örnek. **Yatay → dikey** değiştirilebilen, responsive bir nav bar.
> 

### 8.1 Görsel Yapı

```
┌────────────────────────────────────────────────────────┐
│ [LOGO]  Hakkımızda  Hizmetler  Çözümler  Blog  [Btn] [Btn] │
└────────────────────────────────────────────────────────┘
```

### 8.2 Adım Adım

```
ADIM 1: Logo ekle
  • Yüksekliği 56-80 piksel arası
  • RESIZING: Fixed Width (büyümesin)

ADIM 2: Menü itemlerini ayrı ayrı yaz
  • "Hakkımızda", "Hizmetler", "Çözümler", "Blog", "İletişim"
  • Hepsini seç → Shift+A → asker gibi dizilir
  • Frame içindeki padding'i 0 bırak — başka padding'e ihtiyaç yok
  • Gap: 24 (menu items arası)

ADIM 3: Butonları ekle
  • "Get Started" ve "Login" → iki ayrı buton
  • Her buton kendi içinde Auto Layout
  • Buton'lar birbiriyle de Auto Layout (gap: 16)

ADIM 4: Hepsini birleştir
  • Logo + Menu + Button Group → Shift+A (dış Auto Layout)
  • Direction: Horizontal
  • Gap: AUTO  ← KRITIK (space-between davranışı)
  • Padding: 24 (yatay) 12 (dikey)

ADIM 5: Resizing ayarları
  • Container → Hug Contents
  • Menu items → Fill Container
  • Logo → Fixed Width
  • Butonlar → Fill Container
```

### 8.3 Test: Yatay → Dikey Çevirme

> Bu, yapının doğru kurulup kurulmadığının testidir.
> 

```
1. Dış container'ın direction'ını Vertical yap
2. SONUÇ: Her şey alt alta dizilir mi? Boşluklar korunur mu?
3. EVET → ✅ Yapı sağlam
4. HAYIR → ❌ Bir seviyede resizing yanlış (genelde Fill yerine Fixed)
```

### 8.4 Hocadan Pratik Tavsiye

> 💡 “Auto Layout uygulayacağın yapılar **layers panelinde üst üste** olsun. Eli alışana kadar shift’le hepsini birden seç, sonra Shift+A bas. %100 garanti.”
> 

---

### 🎯 PROJE NOTU — Navigation Bar

> • [ ] Home page’in üstüne bir navigation bar (header) ekle.
• [ ] Logo + sayfa adı (Home, Detail) + ikon → header yapısı.
• [ ] Yatay Auto Layout + gap: auto.
• [ ] Logo’yu Fixed Width yap, diğerlerini Fill Container.
• [ ] Bottom nav bar (mobil) → 4-5 ikon, gap: auto, ortalı hizalı.
> 

---

## 9) Pratik 2 — Product Card Yapımı (Sneakers Örneği)

> Hocayla beraber yapılan ikinci pratik. **Birden çok nested Auto Layout** içeren gerçek kart yapısı.
> 

### 9.1 Görsel Yapı

```
┌─────────────────────────────┐
│                             │
│   ┌─────────────────────┐   │
│   │                     │   │
│   │   [Sneaker Image]   │   │  ← Image area
│   │                     │   │
│   └─────────────────────┘   │
│                             │
│   Sneakers                  │  ← Title (Heading 3)
│   2026 Yeni Koleksiyon      │  ← Subtitle (Body, secondary)
│                             │
│   ┌─────────────┬─────────┐ │
│   │ Nike  5.000 │   [+]   │ │  ← Brand+Price + Add button
│   └─────────────┴─────────┘ │
│                             │
└─────────────────────────────┘
```

### 9.2 Yapı Hiyerarşisi (Nested Auto Layout Zinciri)

```
KART (en dış Auto Layout, Vertical)
├── Image Frame (Aspect Ratio Lock açık)
└── Content Group (iç Auto Layout, Vertical, gap: 16)
    ├── Title Group (iç iç Auto Layout, gap: 8)
    │   ├── Title (Sneakers)
    │   └── Subtitle (2026 Yeni Koleksiyon)
    └── Bottom Row (iç iç Auto Layout, Horizontal, gap: auto)
        ├── Price Group (iç iç iç Auto Layout)
        │   ├── Brand (Nike)
        │   └── Price (5.000)
        └── Add Button
```

### 9.3 Adım Adım

```
ADIM 1: Image ekle
  • Frame oluştur, içine Unsplash'tan görsel
  • Corner radius: 16-24
  • RESIZING: Aspect Ratio Lock AÇIK (görsel orantısı korunsun)

ADIM 2: Title yapısı
  • "Sneakers" - Heading 3, SemiBold
  • "2026 Yeni Koleksiyon" - Body, Regular, secondary color
  • İkisini seç → Auto Layout (Vertical, gap: 8)

ADIM 3: Brand + Price
  • "Nike" - body
  • "5.000" - body, primary color
  • İkisini Auto Layout (vertical, gap: 0)

ADIM 4: Add button (+ ikon)
  • Phosphor icon "Plus"
  • 24×24, padding'li bir container içinde

ADIM 5: Bottom row birleştir
  • Brand+Price + Button → Auto Layout (Horizontal, gap: AUTO)
  • Bu sayede price solda, button sağda kalır

ADIM 6: Content Group birleştir
  • Title group + Bottom row → Auto Layout (Vertical, gap: 16)

ADIM 7: Kartı tamamla
  • Image + Content Group → Auto Layout (Vertical, gap: 16)
  • Card padding: 16-24
  • Card corner radius: 24
  • Card fill: white

ADIM 8: Resizing zinciri
  • Tüm seviyeler → Fill Container
  • Logo/ikon → Fixed
```

### 9.4 Atom-Molekül Doğrulaması

```
Kartı genişlettiğinde:
  ✅ Image büyüyor (Fill)
  ✅ Title kart genişliğine yayılıyor (Fill)
  ✅ Brand-Price hizada (Fill)
  ✅ Add button sağda kalıyor (gap: auto)

Kartı küçülttüğünde:
  ✅ Image küçülüyor (Fill)
  ✅ Text küçülmüyor (font sabit) ama alanı küçülüyor
  ✅ Add button sola gelmiyor — uçta kalıyor
```

### 9.5 Yatay Varyasyon

```
Aynı kartın yatay versiyonu için:
  • En dış Auto Layout direction: Horizontal
  • Image → Fixed Width (sabit kalsın solda)
  • Content Group → Fill Container (sağ tarafı doldurur)
```

> 💡 Bu yapı kurulduktan sonra **direction tek tıkla değişiyor**. Yatay ve dikey aynı dosyada iki ayrı çözüm değil — tek çözüm.
> 

---

### 🎯 PROJE NOTU — Product/Item Card

> • [ ] Home page için kart yapısı oluştur (örn. tur kartı, ürün kartı, video kartı).
• [ ] **Nested Auto Layout zinciri kullan** — kart > content > satırlar.
• [ ] Aspect Ratio Lock görselde açık.
• [ ] Bottom row’da gap: auto kullan (price/info solda, action sağda).
• [ ] Tüm seviyelerde Fill Container.
• [ ] Word dosyasında bu kart için bir auto layout açıklaması göster.
> 

---

## 10) Component & Variant — Giriş

> Hocanın “yarın detaylı işleyeceğiz” dediği konunun **temelleri**. Samet Bey’in sorusu üzerine ufak ama önemli bir tanıtım yapıldı.
> 

### 10.1 Component Nedir?

```
Component = tasarımın ŞABLONU (master)
Instance  = bu şablonun kullanılan KOPYALARI
```

```
   ┌─ MAIN COMPONENT ─┐
   │  [Buton: Giriş]  │  ← Bu sadece BURADA durur (kütüphane gibi)
   └──────────────────┘
            │
            ▼ (kopyala)
   ┌─ INSTANCE 1 ────┐    ┌─ INSTANCE 2 ────┐    ┌─ INSTANCE 3 ────┐
   │ [Buton: Giriş]  │    │ [Buton: Giriş]  │    │ [Buton: Giriş]  │
   └─────────────────┘    └─────────────────┘    └─────────────────┘
   sayfa 1                sayfa 2                sayfa 3
```

### 10.2 Oluşturma

```
Yöntem 1: Seç → Sağ tık → Create Component
Yöntem 2: Seç → Ctrl + Alt + K  (kısayol)

Sonuç:
  • Komponent ana kaynağı oluştu (mor diamond ikon ◆)
  • Sayfada bu ikon görünür — bu MAIN component
  • Bunu sayfaya sürükleyerek INSTANCE oluşturursun
```

### 10.3 Kuralı — Hangi Değişiklik Nereye Yansır?

| Değişiklik Türü | Nerede Yapıldı? | Etkisi |
| --- | --- | --- |
| Renk, font, padding | **Main Component’te** | TÜM instance’lara yansır ✅ |
| Renk, font, padding | **Bir instance’ta** | Sadece o instance etkilenir ⚠️ |
| İçerik (text) | Instance’ta | Sadece o instance |
| Boyut, yapı | Main’de yap (instance ezilirse instance da değişir) | Bağlı |

### 10.4 Pratik Akış

```
Senaryo: Buton tasarımı yapıyorum.

1. Bir buton tasarla (auto layout, padding, fill, vs.)
2. Ctrl+Alt+K → Bu artık main component
3. Main component'i kütüphane sayfasına/section'a koy
4. Tasarım sayfasına bu component'in instance'larını koy
5. Instance'larda her birini farklı text yapabilirsin
   ("Login", "Sign Up", "Get Started" vb.)
6. Bir gün dedi ki: "Tüm butonların radius'unu 12'den 20'ye değiştir."
   → MAIN'e git, radius'u değiştir
   → 50 sayfa boyunca tüm instance'lar otomatik güncellenir
```

> 🎯 **Bu güç sayesinde:** 300 sayfalık bir tasarımda renk paleti değiştiğinde 5 dakikada her şey güncellenebiliyor. Manuel ile **günler** alır.
> 

### 10.5 Detach Instance (Bağı Koparma)

```
Senaryo: Bu instance benzersiz olsun, ana component'e bağlı olmasın.

Instance'ı seç → Sağ tık → Detach Instance
→ Artık normal frame, hiçbir component'e bağlı değil
→ Üzerinde değişiklik yaparsan hiçbir yere yansımaz
→ İstersen bunu yeni bir component'e dönüştürebilirsin (Ctrl+Alt+K)
```

> 💻 **Programlama analojisi:** Component = `class`, Instance = `class'tan üretilmiş object`. Detach = “bu objeyi class’ından bağımsız hale getir”.
> 

### 10.6 Tipik Component’ler (Project İçin Öneri)

```
✅ Component yap:
   • Tüm buton türleri
   • Input field'lar
   • Avatar
   • İkonlar (toplu olarak)
   • Card yapıları (product card, user card)
   • Navigation bar
   • Modal/Dialog
   • Tab bar
   • Toggle, checkbox

❌ Component yapma (tek seferlik):
   • Hero section
   • Sayfa container
   • Bir kere kullanılan dekoratif öğe
```

---

### 🎯 PROJE NOTU — Component

> Proje şartlarından **zorunlu**.
- [ ] Tüm butonlarını component yap (en az 2 varyasyon — yarın varyant öğreneceğiz).
- [ ] Tüm input’larını component yap.
- [ ] Kart yapılarını component yap.
- [ ] Ana component’leri bir **Design System** sayfasında topla.
- [ ] Word dosyasında bu component’leri **görsel olarak** göster (export edip yapıştır).
> 

---

## 11) Anti-Patterns — Bugün Vurgulananlar

```
❌ Yapma:
   • Tek text'e Auto Layout (gereksiz nested)
   • Hangi container'da olduğunu bilmeden padding değiştirme
   • Auto Layout içinde elemanı manuel sürüklemeye çalışmak
   • Tipografide line-height'ı fazla yüksek bırakıp gap'leri anlamlandıramamak
   • Hug yerine Fill verip "neden büyüyor" demek
   • Fill yerine Fixed verip "neden responsive değil" demek
   • Component'in MAIN'ini sayfaya yerleştirmek (instance kullan)
   • Aspect Ratio Lock kapalıyken görsel boyutlandırmak
```

---

## 12) Yarına Hazırlık (Cuma — Son Gün)

```
🔜 PROJE GÜNÜ
   • Tüm öğrenilenler birleştirilecek
   • Login + Home + Detail sayfaları hocayla birlikte yapılacak
   • Adım adım, ölçü ölçü

🔜 COMPONENT & VARIANT (derin)
   • Buton mimarisi (default/hover/error × small/medium/large × icon-on/off)
   • Combine as Variants
   • Component properties (text, boolean, instance swap)

🔜 PROTOTYPE
   • On tap, on hover, after delay
   • Smart Animate (sayfalar arası geçiş)
   • Scroll behavior (vertical, horizontal)
   • Fixed (sticky header/footer)
   • Splash screen → Home animation
```

### Bu Akşam Yapılabilecekler

- [ ]  Login page’in Auto Layout zincirini kur (form, input grup, button).
- [ ]  Home page’de bir kart yapısı dene (atom-molekül kuralıyla).
- [ ]  Tüm text’lerinin line-height’ını AUTO yap.
- [ ]  Buton tasarımını Ctrl+Alt+K ile component’e dönüştür.
- [ ]  Design System için ayrı bir page aç ve renk + tipografi + buton component’lerini ekle.

---

## 📚 Kaynak Linkleri

- 🎓 [Figma Auto Layout 4.0 Docs](https://help.figma.com/hc/en-us/articles/360040451373)
- 🎨 [Daily UI Challenge](https://dailyui.co/)
- 🎯 [Mobbin](https://mobbin.com/) — Auto Layout pattern örnekleri
- 🎯 [Dribbble](https://dribbble.com/)
- 🔌 [Phosphor Icons](https://phosphoricons.com/)
- 🔌 [Iconify](https://iconify.design/)
- 🌈 [Coolors](https://coolors.co/)
- 📐 [Laws of UX](https://lawsofux.com/)
- 📖 [Material Design 3](https://m3.material.io/)
- 🍎 [Apple HIG](https://developer.apple.com/design)

---

## 🎯 GENEL PROJE CHECKLİSTİ (4 Gün Sonrası — Güncel Durum)

```
TASARIM TEMELLERİ
─────────────────
[ ] Renk paleti (primary, secondary, neutral) seçildi
[ ] Color Styles kayıtlı
[ ] Font ailesi seçildi (max 2)
[ ] Text Styles oluşturuldu (H1-H4, body, caption)
[ ] İkon kütüphanesi seçildi (Phosphor önerilir)
[ ] Tüm text'lerin line-height'ı AUTO

FRAMING & STRUCTURE
─────────────────
[ ] 3 ana frame oluşturuldu (Login, Home, Detail)
[ ] Mobil boyutta (iPhone 16 = 393×852 önerilen)
[ ] Design System sayfası açıldı

DESIGN SYSTEM
─────────────────
[ ] Color palette kayıtlı (en az 5-7 renk style)
[ ] Typography stilleri kayıtlı
[ ] Buttons component (en az primary + secondary)
[ ] Input components
[ ] Icons (24×24)
[ ] Logo

AUTO LAYOUT (ZORUNLU ✅)
─────────────────
[ ] Tüm butonlar Auto Layout'lu
[ ] Inputlar Auto Layout'lu
[ ] Kartlar Auto Layout'lu (nested zincir kurulmuş)
[ ] Header/Navigation Auto Layout'lu
[ ] Bottom nav Auto Layout'lu
[ ] Atom-molekül kuralı: tüm seviyelerde Fill zinciri kontrol edildi
[ ] Tüm text'lerin line-height'ı AUTO

COMPONENT (ZORUNLU ✅)
─────────────────
[ ] Butonlar component
[ ] Input'lar component
[ ] Kart bileşeni varsa component
[ ] Main component'ler Design System sayfasında
[ ] Instance'lar tasarım sayfalarında kullanılıyor

VARIANT (yarın derinleşecek)
─────────────────
[ ] Buton varyantları (yarın yapılacak)
[ ] Input state'leri (yarın yapılacak)

LOGİN PAGE
─────────────────
[ ] Logo veya başlık
[ ] Email input (Auto Layout'lu, component)
[ ] Password input (Auto Layout'lu, component)
[ ] Primary buton (component, instance)
[ ] Secondary action

HOME PAGE
─────────────────
[ ] Header (logo + menu)
[ ] Hero veya kategori bölümü
[ ] Kart listesi (component'lerle dolu)
[ ] Bottom navigation

DETAIL PAGE
─────────────────
[ ] Geri butonu
[ ] Görsel alanı (hero image)
[ ] Başlık + açıklama (Nested AL ile)
[ ] Aksiyon butonu

TESLİM (Cumadan sonra)
─────────────────
[ ] PDF: 3 ekran export edilmiş
[ ] Word: proje tanıtım belgesi
[ ] Design system görselleri Word'de gösterilmiş
[ ] Component & Variant gösterimi Word'de
[ ] Auto Layout örneği Word'de açıklamayla
[ ] (Opsiyonel) Figma view link
[ ] (Opsiyonel) Prototype screenshots
```

---

> **Yarın:** Tüm öğrenilenleri tek bir gerçek projeye dökeceğiz. **Component variant**, **prototype**, **smart animate** — son detaylar. Otonun gerçek gücünü göreceğin gün bu.
>