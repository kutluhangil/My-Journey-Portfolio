# 📘 Gün 1 — Tasarım Temelleri, UI/UX & Renk + Tipografi

> **Hafta 1 — UI/UX & Web Tasarımı: FigmaEğitmen:** Meltem Turan (PNC Group — Visual Designer)
**Süre:** 120 dk
**Hedef Çıktı (Hafta sonu):** Giriş sayfası, Ana sayfa ve Detay sayfasından oluşan; tasarım kurallarına (renk, tipografi, grid), Auto Layout, Component, Variant ve Prototype yapılarına uygun bir Figma arayüz tasarımı.
> 

---

## 🎯 Programa Genel Bakış

- 5 gün × 120 dk canlı ders (Pazartesi–Cuma)
- Soru-cevap bölümleri genellikle gün sonunda
- 4 hafta sonunda **uluslararası staj programına davet** performansa bağlı
- **Aktif katılım** kritik (yalnızca soru sormak değil, proje incelemelerine katılmak da sayılıyor)
- İletişim: `softwaremel@gmail.com`

---

## 1) Tasarım Kavramı

**Tasarım**, nesnelerin, etkileşimli sistemlerin ve süreçlerin oluşturulmasını öngörme ve planlama kavramıdır. Kendi içinde dallanır:

- Grafik tasarım
- Görsel tasarım
- İçerik tasarımı
- Mimari tasarım
- 3 boyutlu tasarım
- **Arayüz tasarımı (UI/UX)** ← bu eğitimin odağı

Her dal kendi kuralları ve çerçevesi içinde gelişir; birbirleriyle etkileşim halindedir (multidisipliner tasarım buradan doğar).

---

## 2) UI vs UX — Temel Ayrım

> ⚠️ **Kritik nokta:** UI ve UX **aynı şey değildir**, ama birbirinden ayrılmaz bir bütündür. Biri olmadan diğeri anlamlı değildir.
> 

### 🧠 UX — User Experience (Kullanıcı Deneyimi)

**Tanım:** Kullanıcının bir ürünle (uygulama, web sitesi, dijital ürün) etkileşime girdiği süreçte yaşadığı **toplam deneyim**.

**Odak noktaları:**

- Strateji, mantık, problem çözme
- Görsel olmak zorunda değildir
- **Ekran çizilmeden ÖNCE başlar**
- "Bu ne kadar verimli?", "Kullanıcı hedefe nasıl ulaşıyor?"

**UX'in anahtar kavramları:**

- Kullanıcı araştırması (User Research)
- Bilgi mimarisi (Information Architecture)
- Etkileşim tasarımı (Interaction Design)
- Akış ve senaryo tasarımı

**Felsefe:** Kullanıcıya en kısa ve zahmetsiz yol üzerinden sonuç verilmelidir. Hem somut süreçlerde (tıklama, kaydırma) hem soyut süreçlerde (karar verme, düşünme).

### 🎨 UI — User Interface (Kullanıcı Arayüzü)

**Tanım:** Kullanıcının ekranda gördüğü ve dokunduğu **her şey**. UX'ten gelen sistemi görsel tasarım kurallarına göre etkileşimli hale getirmek.

**Odak noktaları:**

- Renkler
- Tipografi
- Butonlar
- İkonlar
- Inputlar (giritler)
- Boşluk (spacing)
- Görsel hiyerarşi

**UI'ın olmazsa olmazları:**

- Görsel dil
- Tutarlılık
- Okunabilirlik
- Hiyerarşi

### 🔗 İkisinin Ortak Noktası

Kullanıcının ihtiyaçlarını belirleyip onu memnun eden ürünler tasarlamak. UX, kullanıcıdan veri toplar → tasarım kararlarını verir → UI Designer'a teslim eder.

---

## 3) UX'in Temel Elementleri

UX'in nitelikli sayılması için aşağıdaki 5 prensibi karşılaması gerekir:

| Element | Açıklama |
| --- | --- |
| **Kullanışlı (Useful)** | Gerçek bir kullanıcı ihtiyacına karşılık gelmeli, piyasada bir talep olmalı, tanımlanmış bir problemi çözmeli. |
| **Kullanılabilir (Usable)** | Kolay öğrenilebilir ve kolay kullanılabilir olmalı. (Özellikle 40+ yaş grubu için zorlayıcı olmamalı.) |
| **Bulunabilir (Findable)** | Aranılan bilgi ve özelliğe hızlıca ulaşılabilmeli. Menüler, yönlendirmeler net olmalı. |
| **Erişilebilir (Accessible)** | Yaş, fiziksel engel, teknik kısıt kullanıcıyı dışlamamalı. Maksimum kullanıcı kitlesine açık olmalı. |
| **Güvenilir (Credible)** | Profesyonel izlenim vermeli, gereksiz pop-up/reklamdan kaçınmalı, kullanıcıya güven vermeli. |

> 💡 **Yorum (sınıf tartışmasından):** UI bir "marka heves kredisi" tanımlar — UI ne kadar iyiyse, UX'in küçük hatalarında bu kredi daha yavaş tükenir. (Hüseyin Bey'in Ziraat vs. İş Bankası örneği: Ziraat altyapısı çok iyi olsa da, İş Bankası daha iyi UI sayesinde "en iyi uygulama" ödüllerini alıyor.)
> 

---

## 4) UI'ın 7 Temel Tasarım Prensibi

### 1️⃣ Hiyerarşi (Hierarchy)

Hangi bilginin önce fark edilmesi gerektiğini belirler. Sadece başlık punto farkı değil; **boyut + renk + konum + boşluk** birlikte hiyerarşiyi oluşturur.

### 2️⃣ Aşamalı Bilgi Sunumu (Progressive Disclosure)

Hiyerarşi doğru kurulursa, bilgi de kullanıcıya aşama aşama sunulabilir.

- *Örnek akış:* Ara → Alternatifleri gör → Kartları kontrol et → Detay sayfasına git.

### 3️⃣ Tutarlılık (Consistency)

Arayüzdeki benzer elemanlar **benzer şekilde davranmalı**. Bu prensip → **Design System** ihtiyacını doğurur.

- Primary renk her sayfada aynı yerde aynı şekilde
- Buton hover state'i her butonda aynı renk değişimine sahip
- İkonlar aynı boyutta (ör. 32×32) ve aynı renkte
- Tipografik stiller (title, subtitle, body) tüm projede sabit

### 4️⃣ Kontrast (Contrast)

Önemli öğeler arka plandan net şekilde ayrılmalı. Kontrast şu yollarla sağlanabilir:

- **Renk** ile
- **Boyut** ile
- **Ağırlık (font weight)** ile
- **Kontür (border)** ile

> 🔧 Figma'da **Ctrl + P** ile **Contrast Plugin** çalıştırılır. Pass/Fail testi yapar (WCAG standardına göre).
> 

### 5️⃣ Erişilebilirlik (Accessibility)

- Renk körlüğü
- Görme zorlukları
- Motor beceri farklılıkları
- Farklı cihaz boyutları ve aydınlatma koşulları göz önünde bulundurulmalı.

Kontrast testi büyük oranda erişilebilirliği de çözer.

### 6️⃣ Yakınlık (Proximity)

Birbiriyle ilişkili öğeler görsel olarak birbirine yakın konumlandırılır.

- *Örnek:* Login form'daki email/password inputları arasındaki boşluk, input grubu ile "Giriş Yap" butonu arasındaki boşluktan daha az olmalı.
- *Örnek:* Bir kartın içindeki resim ile başlık arasındaki boşluk, kartlar arası boşluktan az olmalı.

### 7️⃣ Hizalama (Alignment)

Arayüz elemanları belirli bir hizaya göre yerleştirilmeli.

- **Sola hizalı** metin tercih edilir (Latin alfabesinde gözümüz soldan okur).
- **Ortalı hizalı** uzun paragraflar okumayı zorlaştırır; başlıklarda kullanılabilir.

---

## 5) UX mi UI mi? — Yönelim Soruları

Kendinize sorabileceğiniz 3 soru:

1. **Bir problem gördüğünde** → "Niye böyle?" mi dersin, yoksa "Görsel olarak nasıl daha iyi olur?" mu? *(neden-sonuç → UX, görsel çözüm → UI)*
2. **Bir uygulama kullanırken** → "Çok karışık" mı dersin, yoksa "Gözüme güzel gelmiyor" mu?
3. **Bir tasarım sürecinde seni daha çok motive eden** → Kullanıcıyı rahat ilerletmek mi (UX) yoksa düzen, hizalama, estetik bütünlük mü (UI)?

> 💡 Sadece birine odaklanmak zorunda değilsiniz. UX kendi içinde de **UX Designer / UX Researcher / Information Architect** olarak dallanır.
> 

---

## 6) Tasarım–Geliştirme İşbirliği

UI Designer'ın görevi sadece "güzel font seçmek" değildir. Belirli bir **grid sistemine oturtulmuş**, **design system'e uygun**, geliştiricinin kolay implement edebileceği bir tasarım üretmek de işin parçasıdır.

> Akış: **UX Researcher** → Veri toplar → **UX Designer** → Akışı kurar → **UI Designer** → Görsel tasarımı yapar → **Developer** → Geliştirir → **Kullanıcı** → Kullanır.
> 

---

## 7) UI/UX Araçları

| Araç | Durum / Notlar |
| --- | --- |
| **Figma** | ⭐ Şu an en popüler ve güncel. Vektörel, web tabanlı, sık güncelleme alıyor. |
| **Adobe XD** | ❌ Artık yatırım almıyor, geliştirilmiyor. Creative Cloud'da hâlâ var ama 2024'ten beri güncellenmiyor. |
| **Sketch** | Sadece macOS. |
| **Framer** | Tasarımı doğrudan URL ile yayına alabilme özelliğiyle öne çıkıyor. Kırılma noktalarını (breakpoint) net gösterir. |
| **Protopie / InVision** | Daha az kullanılıyor. |

### Figma'da Bilinmesi Gereken İlk Şeyler

- **Design** sekmesi → tasarımın yapıldığı yer
- **Prototype** sekmesi → etkileşim ve sayfa geçişleri
- **Share** butonu → dosya paylaşımı
    - `Anyone` → herkese link ile açık
    - `Can edit` → tam erişim (prototip de görünür)
    - `Can view` → sadece görüntüleme (bazen prototip görünmeyebilir)
- Figma sık güncelleme aldığı için **isimler değişiyor**. Örnek: `Absolute position` → `Ignore auto layout` oldu.

---

## 8) Design System

> Bir kez kurulan, tüm projede sürekli aynı şekilde kullanılan **görsel kurallar bütünüdür**. Tutarlılığın somut karşılığıdır.
> 

Bir design system içinde olması gerekenler:

- ✅ Renk paleti (primary, secondary, neutral, text colors, background colors, border colors)
- ✅ Tipografi stilleri (title, subtitle, body, caption — her biri spesifik font + size + weight)
- ✅ Butonlar (primary, secondary, ghost) ve **varyantları** (default, hover, focus, disabled)
- ✅ Inputlar (default, focus, error, disabled)
- ✅ İkonlar (boyut ve renk standardı)
- ✅ Kartlar, chat box'lar, tab bar'lar gibi tekrar eden komponentler
- ✅ Logo
- ✅ Grid sistemi

> 🎯 **Kural:** Tanımsız hiçbir şey olmamalı. Her renk, her stil, her komponent isimlendirilmiş ve dokümante edilmiş olmalı.
> 

---

## 9) Renkler — Detaylı

### 9.1 RGB vs CMYK

|  | RGB | CMYK |
| --- | --- | --- |
| **Kullanım** | Dijital ekranlar (mobil, web, tablet) | Baskı (kartvizit, dergi, poster) |
| **Renk modeli** | Kırmızı + Yeşil + Mavi (ışık karışımı) | Cyan + Magenta + Yellow + Key/Black (boya karışımı) |
| **Gamut (renk aralığı)** | Daha geniş, daha canlı | Daha dar, daha soluk |

> 🔧 Figma'da yalnızca RGB vardır. Çünkü ekran için tasarım yapılır. CMYK gerekli olsaydı Photoshop/Illustrator'da çalışılırdı.
> 

### 9.2 Renklerin Rolü

Renkler dekoratif değildir; **iletişim aracıdır**. Kullanıcı bir arayüze girdiğinde bilinçsizce sorduğu sorulara renkler cevap verir:

- Hangi element önce tıklanır?
- Hangi bilgi önemli?
- Hangi durum başarılı, hangi durum hata?

### 9.3 Temel Renk Grupları

### 🔹 Primary Color (Ana Renk)

- Markayı ve **ana aksiyonları** temsil eder.
- En **belirgin** renktir (en yoğun kullanılan değil!).
- Genelde **primary butonlarda**, logoda, vurgu kart kontürlerinde yer bulur.
- Tek bir renk seçilir.

### 🔸 Secondary Color (İkincil Renk)

- Primary'i destekler.
- İkincil aksiyonlar, vurgu alanları.
- Primary'i **gölgelememeli** — baskınlık yarışı olmamalı.

### ⚪ Neutral Colors (Nötr Renkler)

- Arka plan, geniş yüzeyler, konteyner alanları.
- Beyaz, siyah, gri ve tonları.
- Çalışmanın **%60–70'ini** kaplar.

### 9.4 Önerilen Minimum Renk Seti

Bir proje için ihtiyaç duyacağın minimum:

- 1 × Primary
- 1 × Secondary
- 1 × Text color
- 1 × Neutral (background)

İhtiyaca göre genişletilebilir: `text-primary`, `text-secondary`, `text-on-primary`, `border`, `background-1`, `background-2` (kart bg'si farklı olsun istenirse).

### 9.5 Renk Paletleri (Color Theory)

Renk tekerleği (Color Wheel) **Isaac Newton** tarafından bulunmuştur. Bir renk her zaman 3 katmanda gelişir:

- **Hue** → rengin kendisi
- **Tint** → renk + beyaz (açıldı)
- **Tone** → renk + gri (matlaştı)
- **Shade** → renk + siyah (koyulaştı)

### Renk Paleti Tipleri

| Tip | Mantığı | Karakter |
| --- | --- | --- |
| **Complementary** | Renk çemberinde **tam karşıt** iki renk | Yüksek kontrast, dikkat çekici |
| **Analog (Analogous)** | Çemberde **yan yana** olan 3 renk | Yumuşak, uyumlu, sakin |
| **Monokrom** | Tek rengin **açık-koyu** tonları (üst üste) | Sade, sofistike, premium |
| **Triadic** | Çemberde **eşit aralıkla** seçilen 3 renk (eşkenar üçgen) | Dengeli ama enerjik |
| **Split Complementary** | Bir ana renk + karşıt rengin **iki komşusu** | Komplementeriden daha yumuşak, ana renk baskın kalır |
| **Square (Tetradic)** | Çemberde **eşit dörtlü** | Triadic'in dörtlü versiyonu |

> 💡 **Pratik tavsiye:** Arayüz tasarımında triadic veya square gibi paletler **pek tercih edilmez**. Genelde önce nötr renk → sonra primary → sonra secondary belirlenir ve **kontrast testi** ile doğrulanır.
> 

### Renk Paleti Bulma Kaynakları

- 🎨 **coolors.co** — onlarca hazır palet
- 🎨 **colorhunt.co** — otomatik palet üretici
- 🎨 **Adobe Color** (color.adobe.com) — renk tekerleği ile özelleştirme
- 🎨 **Behance / Dribbble** — benzer projelerin renk paletlerinden ilham

### 9.6 60-30-10 Kuralı (UI Color Rule)

Arayüzdeki renk dağılımının ideal oranı:

```
┌─────────────────────────────────────┐
│ 60% — Neutral / Dominant            │
│       (arka plan, geniş yüzeyler)   │
├─────────────────────────────────────┤
│ 30% — Secondary                     │
│       (kartlar, paneller, ayırıcılar)│
├─────────────────────────────────────┤
│ 10% — Primary / Accent              │
│       (CTA butonlar, bildirimler)   │
└─────────────────────────────────────┘
```

> ⚠️ Burada ters orantı var: **Primary** renk en az alanı kaplar ama **en baskın** algılanır. Renk yoğunluğu ≠ görsel etki.
> 

### 9.7 Pratik Renk Seçme Tekniği (Meltem Hoca'nın yöntemi)

1. **Ana rengi seç.**
2. Fill panelinde **Hex → HSB** moduna geç (H, S, B, A değerleri görülsün).
3. Bir kopya al → **Saturation'ı 5–10 puan düşür, Brightness'ı 95'e çek** → tint elde et.
4. Bir kopya daha al → **Hue'yu –40 derece kaydır, Brightness'ı +5 yap** → uyumlu yardımcı renk elde et.
5. Her yeni renk eşleşmesinde **kontrast testi (Ctrl+P)** çalıştır.

### 9.8 Siyah ve Beyaz Kullanımı

> 💡 **Pro Tip:** Tasarımda saf siyah `#000000` ve saf beyaz `#FFFFFF` gözü yorar.
> 
- **Rich Black** kullan → siyaha azıcık gri/renk eklenmiş varyasyonlar (ör. `#0A0A0A`, `#111111`).
- **Off-white** kullan → beyaza azıcık gri eklenmiş varyasyonlar (ör. `#FAFAFA`, `#F5F5F5`).

### 9.9 Kontrast & Okunabilirlik

> ⚡ Kontrast estetik için değil, **erişilebilirlik için** zorunludur.
> 
- Figma'da `Ctrl + P` → Contrast plugin → WCAG'a göre Pass/Fail döner.
- **AA standartı** minimum hedef olmalı (4.5:1 oran, normal text için).
- **AAA standartı** daha yüksek okunabilirlik için.

> 💡 Sadece renk yeterli değil — kontrast + ikon + tipografi birlikte erişilebilirlik sağlar.
> 

---

## 10) Tipografi — Detaylı

### 10.1 Typeface vs Font (Yaygın Karışıklık)

|  | Typeface | Font |
| --- | --- | --- |
| Ne? | **Yazı ailesi** (ör. Arial, Times New Roman, Inter) | Typeface'in **bir varyasyonu** (ör. Arial Regular, Arial Bold, Arial Italic) |

> Günlük dilde her şeye "font" denir ama teknik olarak farklılar.
> 

### 10.2 Serif vs Sans Serif

### Serif (Tırnaklı)

- Harflerin uçlarında küçük çıkıntılar (tırnaklar) var.
- Klasik, baskı ürünleri, gazete görünümü.
- **Arayüz tasarımında pek tercih edilmez** (büyük gövde metin hariç).
- *Örnekler:* Times New Roman, Georgia, Playfair Display.

### Sans Serif (Tırnaksız)

- Modern, temiz, ekranda kolay okunur.
- **Arayüz tasarımında standart** seçim.
- *Örnekler:* **Inter, Roboto, Open Sans, Montserrat, Helvetica, Arial, IBM Plex Sans.**

### Diğerleri (genelde dekoratif amaçlı)

- **Slab Serif:** Daha kalın, kare tırnaklı (Roboto Slab).
- **Display / Stilize:** Logo veya başlık için (Spider-Man, Sephora Hide gibi özel kullanım fontları).

### 10.3 Stilize Fontlardan Kaçınma Sebepleri

1. **Tek varyasyonu vardır** (sadece Regular). Bold/Italic alternatifleri yok → hiyerarşi kurulamıyor.
2. **Yukarı–aşağı boşlukları eşit değil** → Auto Layout'ta hizalama bozuluyor (içeriği dikey ortalanmamış görünüyor).
3. **Okunabilirlik düşük.**
4. **Telif riski** yüksek (özellikle marka fontları — Adobe Clean, Coca-Cola fontu vb.).

> ✅ **Tavsiye:** Stilize fontu **sadece logoda** kullan. Body, başlık, buton metni için her zaman **çoklu ağırlığı olan bir sans-serif** kullan.
> 

### 10.4 Font Kaynakları

| Kaynak | Açıklama |
| --- | --- |
| **Google Fonts** (fonts.google.com) | ⭐ En güvenilir, telif sorunsuz, ücretsiz |
| **Adobe Fonts** (Creative Cloud ile) | Geniş kütüphane, lisanslı |
| **DaFont** (dafont.com) | Stilize/dekoratif fontlar — telif kontrolü kullanıcıya ait |
| **1001 Fonts** | Alternatif arşiv |

### 10.5 Font Kurulumu

1. Google Fonts'tan font seç → **Get Font** → **Download All**
2. İndirilen ZIP'i aç → `.ttf` dosyalarını seç
3. Sağ tık → **Yükle** (Windows) / Font Book'a sürükle (Mac)
4. Figma'da otomatik olarak gelir (Figma açıksa yeniden başlat).

### 10.6 Bir Sitedeki Fontu Bulma — Font Ninja

> 🔌 **Font Ninja** (Chrome / Firefox eklentisi)
> 
- Herhangi bir web sitesinde aç → font bilgilerini analiz eder
- Font adı, **font size**, **line height**, **renk** bilgisi verir
- İlham alınan sitelerin tipografik sistemini kopyalamak için ideal

### 10.7 Bir Projede Kaç Font Kullanılmalı?

- **İdeal: 1 font ailesi** (farklı ağırlıklarla — Regular, Medium, SemiBold, Bold)
- **Maksimum: 2 font** (1 ana + 1 yardımcı, mesela başlık için)
- 3+ font kullanmak → görsel kaos

### 10.8 Telif Hakları (Dersteki Önemli Soru-Cevap)

- Marka fontları (**Adobe Clean, Amazon Ember, Netflix Sans** vb.) → kullanma, dava riski var
- Google Fonts → güvenli, Open Source / OFL lisansı
- DaFont → her fontun lisansı farklı, dikkat et: "Free for personal use" ≠ ticari kullanıma uygun
- Freelance projelerde özellikle dikkatli ol — Hüseyin Bey: "Müşterilere yaptığım sitelerde font yüzünden dava edildim."

---

## 11) Pratik Notlar ve Kısayollar

### Figma Kısayolları

| Kısayol | İşlev |
| --- | --- |
| `Ctrl + P` | Plugin menüsü (Contrast vb. açmak için) |
| `Shift + A` | Auto Layout uygula |
| `Shift + G` | Grid göster/gizle |
| `Alt + L` | Sayfaları kapat (sol panel) |
| `Ctrl + /` | Komut paleti |

### Eksik Kalan / Yarına Sarkan Konular

> Bu konular **2. günden itibaren** işlenecek:
> 
- 🔜 **Grid sistemi** (kolon sayıları: web/tablet/mobile)
- 🔜 **Butonlar** (tip, boyut, state)
- 🔜 **İkon kullanımı**
- 🔜 **Inputlar (giritler)**
- 🔜 **Spacing sistemi**
- 🔜 **Hick Yasası ve Gestalt Prensipleri** (hocanın yan sekmesinde açık tuttuğu konular)
- 🔜 **Auto Layout, Component, Variant, Prototype**

---

## 12) Hatırlatmalar

> 🎯 **Önemli olan kurallar değil, kuralların uygulanmasıdır.** Senin kart spacing'in 32px olabilir, başkasınınki 24px. Kural: **bir sistem belirle ve ona sadık kal.**
> 

> 🎯 **"Az çoktur."** Amazon gibi global ürünler bile minimal arayüz tercih ediyor — sadelik kullanıcıya hızlı sonuç verir.
> 

> 🎯 **Tutarlılık her şeyden önemli.** Tanımsız hiçbir renk, font, boyut, ikon bırakma.
> 

> 🎯 **Tasarım yalnız değildir.** Frontend ile uyumlu çalışmak için grid + design system zorunluluktur — geliştiriciye temiz teslim et.
> 

---

## 📚 Kaynak Linkleri

- 🎨 [Google Fonts](https://fonts.google.com/)
- 🎨 [Coolors](https://coolors.co/)
- 🎨 [Color Hunt](https://colorhunt.co/)
- 🎨 [Adobe Color](https://color.adobe.com/)
- 🎨 [Behance](https://behance.net/) / [Dribbble](https://dribbble.com/)
- 🔌 [Font Ninja Extension](https://www.fontninja.com/)
- 📦 [Figma Community](https://figma.com/community) — Design system örnekleri

---