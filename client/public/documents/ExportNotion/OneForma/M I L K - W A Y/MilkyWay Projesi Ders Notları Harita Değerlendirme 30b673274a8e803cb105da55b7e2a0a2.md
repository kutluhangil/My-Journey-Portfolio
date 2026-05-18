# MilkyWay Projesi Ders Notları: Harita Değerlendirme Eğitimi

Bu eğitim, kullanıcı sorgularını anlamak, konum niyetini belirlemek ve harita sonuçlarının (sonuç adı, adresi ve pin konumu) doğruluğunu değerlendirmek üzerine kuruludur.

**BÖLÜM 1: ALAKA DÜZEYİ (RELEVANCE)**

Alaka düzeyi, bir sonucun kullanıcının sorgusunu tatmin edip etmediğini belirler. Değerlendirme yaparken iki temel faktör dikkate alınır:

1. **Kullanıcı Niyeti (User Intent):** Sonuç, kullanıcının aradığı şey mi?.

2. **Mesafe (Distance):** Sonuç, kullanıcının beklediği konumda mı (Location Intent)?.

**1.1. Konum Niyeti (Location Intent) Nasıl Belirlenir?**

Sonuçların nerede olması gerektiği "Location Intent" olarak adlandırılır.

- **Konum Belirleyici (Location Modifier) Var mı?** (Örn: "near me", "in Istanbul", "closest...")

◦ **EVET:** Sonuçlar belirtilen bölgede, caddede veya adreste olmalıdır. "Near me" gibi ifadeler kullanıcının kendi konumunu işaret eder.

◦ **HAYIR:** Kullanıcının haritadaki **Viewport (Görünüm)** durumuna bakılır.

**Viewport Türleri ve Kuralları:**

- **FRESH (Taze) Viewport:** Kullanıcı yakın zamanda haritada bir yere bakmıştır.

◦ *Kullanıcı Viewport İçindeyse:* Konum niyeti kullanıcının kendisidir.

◦ *Kullanıcı Viewport Dışındaysa:* Sonuçlar Viewport alanı içinde veya yakınında beklenir.

- **STALE (Eski) Viewport:**

◦ Kullanıcı harita alanının içinde de olsa dışında da olsa, konum niyeti her zaman **Kullanıcının Konumu (User Location)** olarak kabul edilir.

**1.2. Sorgu Türleri ve Puanlama Kuralları**

Sorguyu anlamak, doğru puanlama için kritiktir. Üç ana sorgu tipi vardır.

**A. İlgi Noktası (POI) Sorguları**

İki türe ayrılır:

1. **Zincir İşletmeler (Chain Business):** Birden fazla şubesi olanlar (Starbucks, Zara vb.).

◦ *Puanlama:* Konum belirtilmediyse "Excellent" ile başlar. Dağılıma bakılır.

◦ En yakın şube sonuçtaysa -> **Excellent**.

◦ Daha yakın bir şube varken ikinci en yakını verdiyse -> **Good (-1 Distance)**.

◦ Kullanıcıya daha yakın şubeler varken, sonuç Fresh Viewport içinde ama uzaktaysa -> **Acceptable (-2 Distance)**.

2. **Benzersiz POI (Unique POI):** Dünyada tek şubesi olanlar (Müzeler, yerel butikler).

◦ *Puanlama:* Tek bir doğru sonuç vardır. Doğru sonuç -> **Navigational**. Diğer tüm sonuçlar -> **Bad (User Intent)**.

**B. Kategori Sorguları (Category Queries)**

Belirli bir işletme tipi (İtalyan restoranı, eczane) veya ürün (dondurma, çiçek) aramalarıdır.

- *Puanlama:* Konum belirtilmediyse "Excellent" ile başlar. Yalnızca konum belirleyici içeren kategori sorguları "Navigational" alabilir.
- Sonuç kategoriye ait değilse -> **Bad**.
- Kategori sorguları geniş kapsamlı olduğu için mesafe cezaları (demotion) sıkı uygulanır, ancak Fresh Viewport içindeki hiçbir sonuç sadece mesafe yüzünden "Bad" almaz.

**C. Adres Sorguları (Address Queries)**

Üç türe ayrılır:

1. **Tam Adresler (Full Addresses):**

◦ Sorgu tek ve net bir konumu işaret ediyorsa ve sonuç tam eşleşiyorsa -> **Navigational**.

◦ Sonuç o adresteki POI ise -> **Navigational**.

◦ Sonuç spesifik adres yerine tüm caddeyi gösteriyorsa -> **Acceptable**.

◦ Tamamen farklı bir adres ise -> **Bad**.

2. **Kısmi Adresler (Partial Addresses):**

◦ En yakın ve niyeti karşılayan sonuç -> **Excellent**.

◦ Daha yakın bir seçenek varken uzaktaki verildiyse -> **Good (-1 Distance)**.

3. **Yerleşim Yerleri (Localities):** Şehir, mahalle aramaları.

◦ Sonuç tam o yerleşim yeriyse -> **Navigational**.

◦ Sonuç o yerleşim yerindeki bir Havalimanı veya Transit istasyon ise -> **Good** (İkincil niyet).

◦ Sonuç o yerdeki bir hayvanat bahçesi veya alakasız bir POI ise -> **Bad**.

- -------------------------------------------------------------------------------

**BÖLÜM 2: VERİ DOĞRULUĞU (DATA ACCURACY)**

Sonucun alakalı olup olmadığından bağımsız olarak, verilen bilgilerin (İsim, Adres, Pin) doğru olup olmadığı kontrol edilmelidir.

**2.1. İsim ve Kategori Doğruluğu (Name & Category Accuracy)**

Değerlendirme skalası: Correct, Partially Correct, Incorrect, Can't Verify.

**İsim (Result Name):**

- **Correct (Doğru):** Resmi web sitesinde veya diğer resmi kaynaklarda kullanılan isim.
- **Partially Correct (Kısmen Doğru):** Resmi versiyondan farklı ama kullanıcı tarafından tanınabilir.

◦ Kabul edilenler: Ufak yazım hataları, "The" ekinin eksik/fazla olması, gereksiz isim parçaları.

◦ Konum belirteçleri (Location Modifiers): Eğer ismin anlaşılması için kritik değilse "Correct", yanlış yazılmışsa veya kritikse "Partially Correct".

- **Incorrect (Yanlış):**

◦ Anlamı değiştiren ciddi yazım hataları (Örn: Taco Bell yerine Taco Bull).

◦ Tamamen farklı bir marka ismi veya argo/uygunsuz dil.

◦ **Önemli:** Eğer sonuç kategorisi (Category) "Incorrect" ise, İsim (Name) doğru olsa bile nihai puan **Incorrect** olur.

**Kategori (Result Category):**

- **Correct:** İşletmenin işlevini, hizmetini doğru yansıtan kategori (çok spesifik veya genel olabilir ama yanıltıcı olmamalı).
- **Incorrect:** Yanlış, yanıltıcı, eksik veya beklenmedik bir dilde ise.

**Transit İsimleri:**

- İstasyon isimlerinde "Station" veya "Subway" ibaresinin eksik olması yine de **Correct** kabul edilir. Birden fazla hat geçiyorsa herhangi birinin ismi **Correct** kabul edilir.

**2.2. Adres Doğruluğu (Address Accuracy)**

Adres bileşenleri tek tek kontrol edilir. Hata varsa ilgili kutucuk (checkbox) işaretlenir.

**Adres Bileşenleri ve Kurallar:**

- **Street Number (Kapı No):** Resmi kaynakla uyuşmalı. Eksik veya yanlışsa -> *Incorrect - Street Number*.
- **Unit/Apt (Daire/Bina No):** Resmi adreste varsa sonuçta da olmalı. Yoksa -> *Incorrect*.
- **Sub-Locality:** Yanlışsa veya zorunlu olduğu halde eksikse -> *Incorrect*.
- **Locality (İlçe/Semt):** Yanlışsa veya yazım hatası varsa -> *Incorrect*.
- **Region/State (Bölge/Eyalet):** Ülkeye göre değişir (ABD'de zorunlu). Eksikse -> *Incorrect*.
- **Postal Code (Posta Kodu):** En azından bir kısmı doğruysa (sokağa veya şehre aitse) **Correct** kabul edilebilir. ABD'de 5 haneli kod yeterlidir, uzantısı olmasa da olur.
- **Country (Ülke):** Yerel (in-locale) adreslerde zorunlu değildir ama varsa hatasız olmalıdır. Sonuç test edilen bölge (locale) dışındaysa ülke bilgisi zorunludur.

**Özel Adres Sorunları (Issues):**

- **Address does not exist:** Adreste bina veya arsa yoksa ya da adres başka bir yerde çıkıyorsa işaretlenir.
- **Language/Script Issue:** Adres dili test bölgesinden farklıysa.
- **Formatting Issue:** Bilgiler doğru ama format yanlışsa (sıralama hatası, ekstra boşluk, çift virgül vb.) -> *Correct with Formatting Issue* işaretlenir.
- **Can't Verify:** Resmi kaynak, web sitesi veya sokak görüntüsü yoksa ve doğrulanamıyorsa.

**Önemli Notlar:**

- **Doğal Özellikler (Natural Features):** Nehir, dağ gibi yerlerin sokak adresi olmayabilir. Bu durumda adresin eksik olması sorun değildir.
- **Alternatif Adresler:** Bir işletmenin birden fazla resmi adresi varsa hepsi **Correct** kabul edilir.
- -------------------------------------------------------------------------------

**BÖLÜM 3: PİN DOĞRULUĞU (PIN ACCURACY)**

Pin doğruluğu, haritadaki işaretin gerçek dünyadaki konumla ne kadar örtüştüğünü ölçer. Değerlendirme için önce sonucun "Sınırlarını" (Boundaries) ve "Çatı Alanını" (Rooftop) belirlemelisin.

**Kavramlar:**

- **Rooftop (Çatı):** Binanın kendisi (Yeşil alan).
- **Boundaries (Sınırlar):** Binaya ait arsa, park yeri veya bahçe dahil tüm alan (Sarı alan). Sınır yoksa "Yarı Yarıya Kuralı" (Half 'n' half rule) uygulanır: Cadde veya sonraki bina ile olan mesafenin yarısı sınır kabul edilir.
- **Çatısı Olmayan Özellikler (Doğal Alanlar):** Parklar, dağlar, göller için "Tanımlayıcı Özellik" (örn: gölün suyu) Rooftop yerine geçer.

**Puanlama Seçenekleri:**

1. **PERFECT (Mükemmel):**

◦ Pin, **Rooftop** (Çatı) üzerindeyse.

◦ Çatısı olmayanlar için tanımlayıcı özelliğin üzerindeyse.

◦ *Kenar Durumu (Tennis Rule):* Pin tam sınıra (çizgiye) düşerse Perfect kabul edilir.

◦ *Paylaşılan Alanlar (AVM vb.):* İşletmenin tam yeri biliniyorsa o dükkanın çatısı Perfect'tir. Bilinmiyorsa tüm AVM çatısı Perfect kabul edilir.

2. **APPROXIMATE (Yaklaşık):**

◦ Pin, Rooftop (Çatı) üzerinde **değil** ama **Boundaries** (Arsa sınırları) içindeyse.

3. **NEXT DOOR (Yan Kapı):**

◦ Pin, sonucun sınırları dışında **AMA** bitişik/komşu mülkün çatısı üzerindeyse.

◦ Komşu mülk aynı sokakta ve bitişik olmalıdır. Araya başka bina veya farklı blok giremez.

◦ *İstisna:* Paylaşılan alanlarda (Shared Spaces) "Next Door" kullanılmaz.

4. **WRONG (Yanlış):**

◦ Pin, hem çatının, hem sınırların, hem de bitişik komşunun dışında ise.

◦ Koordinat aramalarında 50 metreden daha uzaksa.

5. **CAN'T VERIFY:** Gerçek konum doğrulanamıyorsa.

- -------------------------------------------------------------------------------

**ÖZET İŞ AKIŞI (WORKFLOW)**

Sınav simülasyonunda izlemen gereken adım sırası şudur:

1. **Sorguyu Anla:** Chain business mı, Address mi, Kategori mi?

2. **Konum Niyetini Belirle:** Location modifier var mı? Viewport taze mi?

3. **Alaka Düzeyini (Relevance) Puanla:** User Intent ve Distance'a göre.

4. **Veri Doğruluğunu (Data Accuracy) Kontrol Et:** İsim, Adres ve Pin doğruluğuna bak.

Başarılar dilerim! Bu notları takip edersen "MilkyWay" projesine kabul edilmen çok olası.