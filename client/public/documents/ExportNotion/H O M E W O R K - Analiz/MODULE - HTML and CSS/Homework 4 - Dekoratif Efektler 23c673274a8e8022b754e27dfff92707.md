# Homework 4 - Dekoratif Efektler

# Dekoratif Efektler Ödev Kontrol Listesi

# **Proje**

- [x]  **`«A1»`** Proje kökünde `images` adında bir klasör bulunmalı ve bu klasörde tüm resimler yer almalıdır.
- [x]  **`«A2»`** Tüm vektör görüntüleri (simgeler) `images` klasöründe bulunan SVG-sprite `icons.svg` dosyasında toplanmalıdır.
- [x]  **`«A3»`** Tüm vektör görselleri optimize edilmelidir.
- [x]  **`«A4»`** Proje kökü, stil dosyalarının bulunduğu bir `css` klasörü içerir.
- [x]  **`«A5»`** Tüm stiller, `css` klasöründe bulunan `styles.css` dosyasında yazılmalıdır.
- [x]  **`«A6»`** Dosya adları büyük harf, boşluk veya özel karakterler içermemelidir. İsimler sadece İngilizce harf ve kelimelerden oluşmalıdır.
- [x]  **`«A7»`** Kaynak kodu `Prettier` ile biçimlendirilmiş olmalıdır.
- [x]  **`«A8»`** Tüm görseller ve metin içeriği mockup'tan alınmıştır.
- [x]  **`«A9»`** `modern-normalise` tarzı normalleştirici kullanılmalıdır.
- [x]  **`«A10»`** Tüm stiller, `css` klasöründe bulunan `styles.css` dosyasına yazılır.
- [x]  **`«A11»`** Kod, [kılavuz](https://codeguide.co/) ilkelere uygun olarak yazılmıştır.

# **İşaretleme**

- [x]  **`«B1»`** Tüm simgeler `svg` formatında vektör grafikleri kullanmalıdır.

- [x]  **`«B2»`** SVG simgeleri doğru şekilde dışa aktarılmış olmalıdır. Dışa aktarırken, vektörün kendisi yerine "grup" seçilmelidir.
- [x]  **`«B3»`** SVG sprite'ındaki tüm simgeler `<svg>` ve `<use>` etiketleri kullanılarak HTML'ye eklenmelidir.
- [x]  **`«B4»`** Avantajlar bölümüne simgeler eklenmelidir (`Our Team` üzerinde avantajların listesini içeren başlıksız bir bölüm).
- [x]  **`«B5»`** `Our Team` bölümüne sosyal medya ikonları eklenmelidir.
- [x]  **`«B7»`** Sosyal medya simgeleri altbilgiye eklenmelidir.
- [x]  **`«B8»`** Tüm düzen öğelerinin HTML işaretlemesi yapılmalıdır.
- [x]  **`«B9»`** Etiketler anlamsal içeriklerine göre kullanılmalıdır.

# **Tasarım**

- [x]  **`«C1»`** Başlık altında büyük bir arka plan resmi kullanılmalıdır. Arka plan, solma efekti ve degrade içeren çok katmanlı bir tasarıma sahip olmalıdır.
- [x]  **`«C2»`** Başlığın altındaki blokta yer alan arka plan resmi, orijinal boyutu olan `1440px`’den daha geniş bir alana yayılmamalıdır.
- [x]  **`«C3»`** `Our Team` bölümündeki kartlar kalıcı bir gölge efekti bulunmalıdır.
- [x]  **`«C4»`** `Our Portfolio` bölümündeki kartlar, kart üzerinde herhangi bir yere gelindiğinde gölge efekti görünmelidir.
- [x]  **`«C5»`** Üzerine gelindiğinde veya odaklanıldığında, simgeler etkin duruma geçmelidir - düzende belirtilmişse renk değiştirmelidir.
- [x]  **`«C6»`** Tüm hover ve odak efektleri (renk, arka plan, gölge) için geçişler uygulanmalıdır. Zaman - `250ms`, zaman dağılım fonksiyonu - `cubic-bezier(0.4, 0, 0.2, 1)`.
- [x]  **`«C7»`** Geçişler animasyonlu özellikleri açıkça belirtir. Hiçbir yerde bir `all` değeri kullanılmamalıdır.
- [x]  **`«C8»`** Ana navigasyonda, `::after` sözde öğesi kullanılarak, geçerli sayfanın (kullanıcının o anda bulunduğu yer) bağlantısının altı çizilmelidir.
- [x]  **`«C9»`** `Our Portfolio` bölümündeki kartlarda metin içeren kaplama, kart üzerinde herhangi bir yere geldiğinizde görünmelidir.
- [x]  **`«C10»`** `Our Portfolio` bölümündeki kartlarda yer alan mavi kaplama alt kısma basılmış olmalıdır.
- [x]  **`«C11»`** Pseudo elemanların `content` özelliğinde metin içeriği bulunmamalıdır. Sadece dekoratif amaçlı kullanılmalıdır.

Ödev açıklamaları by Gemmini:

---

### Konu: Hero Bölümüne Arka Plan Görseli ve Degrade Katmanı Ekleme

**Hedef:** Sayfamızdaki "Effective Solutions for Your Business" başlığının bulunduğu "Hero Section"a (kahraman bölümü) bir arka plan görseli eklemek ve üzerine saydam bir degrade katmanı bindirerek "solma efekti" oluşturmak.

**İlgili Maddeler (Homework 4.jpg dosyasından):**

- [x]  `«C1» Başlık altında büyük bir arka plan resmi kullanılmalıdır. Arka plan, solma efekti ve degrade içeren çok katmanlı bir tasarıma sahip olmalıdır.`
- [x]  `«C2» Başlığın altındaki blokta yer alan arka plan resmi, orijinal boyutu olan 1440px’den daha geniş bir alana yayılmamalıdır.`

---

### **Adım 1: Görsel Dosyalarını Hazırlama**

1. **Ana Arka Plan Görseli (`hero-bg.jpg`):** Figma tasarımınızdaki ana arka plan görselini (`.jpg` veya `.png` formatında) projenizin `images` klasörüne kopyalayın. (Örn: `proje-klasoru/images/hero-bg.jpg`)
2. **Degrade Katmanı Görseli (`Dark-bg.jpg`):** Figma'dan aldığınız veya oluşturduğunuz, saydamlık içeren (veya saydamlaştırılacak) degrade katmanı görselini (örneğin düz koyu gri bir resim olabilir) yine `images` klasörüne kopyalayın. (Örn: `proje-klasoru/images/Dark-bg.jpg`)
    - **Önemli Not:** Eğer `Dark-bg.jpg` görseli kendiliğinden saydam değilse ve bir grafik programı kullanmadan saydamlık vermek istiyorsanız, CSS'in `linear-gradient` özelliğini kullanarak bir renk katmanı oluşturup ona `rgba()` ile saydamlık verebiliriz. Ancak, attığınız görseli direkt olarak kullanmak istediğiniz için, onun saydam bir görüntü olup olmadığını kontrol edin. Eğer değilse, görsel düzenleyici ile saydamlığını ayarlamak en iyisidir.

---

### **Adım 2: CSS Kodunu Güncelleme (`styles.css` dosyası)**

Şu anki `hero-section` stilinizin olduğu bloğu bulun ve aşağıdaki değişiklikleri yapın:

```css
.hero-section {
  /* Mevcut stiller (değişmez) */
  background-color: var(--color-dark); /* Görsel yüklenmezse veya degrade olmazsa varsayılan renk */
  color: var(--color-white);
  padding: 188px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* YENİ EKLENEN ARKA PLAN ÖZELLİKLERİ */

  /* 1. background-image: Birden Fazla Katman Ekleme */
  /* İlk görsel (Dark-bg.jpg) üstte görünür, ikinci görsel (hero-bg.jpg) altta. */
  background-image: url('../images/Dark-bg.jpg'), /* << ÜST KATMAN: Saydam degrade görseli */
                    url('../images/hero-bg.jpg'); /* << ALT KATMAN: Ana arka plan görseli */

  /* 2. background-repeat: Görsellerin Tekrarlamasını Engelleme */
  /* Her iki görsel için de 'no-repeat' (virgülle ayrılmış sırayla eşleşir) */
  background-repeat: no-repeat, no-repeat;

  /* 3. background-position: Görselleri Ortaya Hizalama */
  /* Her iki görsel için de 'center' */
  background-position: center, center;

  /* 4. background-size: Görselleri Bölümü Kaplayacak Şekilde Boyutlandırma */
  /* Her iki görselin de kendi alanlarını tamamen kaplamasını sağlar ('cover') */
  background-size: cover, cover;

  /* 5. max-width ve margin: C2 Maddesi ve Ortalamak İçin */
  /* Arka plan görselinin 1440px'den geniş olmamasını ve ortalanmasını sağlar */
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

```

---

### **Açıklamalar ve Nedenler:**

- **`background-image`'in Virgüle Ayrılmış Kullanımı:** CSS'de bir elemana birden fazla arka plan görseli atayabilirsiniz. Bu görseller, yazdığınız sıraya göre üst üste bindirilir. İlk görsel en üstte, son görsel en altta olacaktır. Bu sayede `Dark-bg.jpg` (degrade katmanı) `hero-bg.jpg` (ana görsel) üzerine gelecektir.
- **`background-repeat`, `background-position`, `background-size`'ın Virgüle Ayrılmış Kullanımı:** Bu özellikler de `background-image` ile aynı sırayı takip eder. Yani, ilk değer `Dark-bg.jpg`'ye, ikinci değer `hero-bg.jpg`'ye uygulanır.
    - `no-repeat`: Görselin tekrarlanmasını engeller, tek bir görsel olarak kalır.
    - `center`: Görseli elemanın tam ortasına hizalar.
    - `cover`: Görseli, elemanın tüm alanını kaplayacak şekilde boyutlandırır, bu esnada en boy oranını korur. Kapsayıcıyı tam doldurur, görselin bazı kısımları kırpılabilir.
- **`max-width: 1440px;` ve `margin: auto;`:** Bu kombinasyon, C2 maddesini karşılar. `.hero-section`'ın genişliğinin 1440px'i geçmemesini sağlar ve `margin: auto;` ile sayfada yatay olarak ortalanmasını sağlar. Bu, görselin belirli bir boyutta kalmasını garantilerken, daha geniş ekranlarda da merkezde kalmasını sağlar.

---