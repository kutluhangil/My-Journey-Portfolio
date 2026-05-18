# S C R U M

# **Scrum nedir?**

**Scrum**, ürünü **kısa döngüler** (sprint’ler) halinde geliştirmeyi, her döngüde **çalışan bir parça** teslim etmeyi ve **sürekli geri bildirim** alarak ilerlemeyi sağlayan **hafif (lightweight)** bir çerçevedir.

Temel amaç: **şeffaflık → denetleme → uyarlama** döngüsünü işletmek.

---

## **Temel bileşenler**

### **1) Roller**

- **Product Owner (PO)** — *“Ne” yapılacak?*
    
    Backlog’u oluşturur, önceliklendirir, değeri maksimize eder.
    
- **Scrum Master (SM)** — *Süreç koçu*
    
    Scrum’ın doğru uygulanmasını sağlar, engelleri kaldırır, takıma hizmet eder.
    
- **Geliştirme Ekibi (Developers)** — *“Nasıl” yapılacak?*
    
    Analiz, tasarım, FE/BE, test… Sprint sonunda **Done** bir artış (Increment) üretir.
    

> Not: Rollerin sayısı esnek olabilir; tek kişilik projede bile bu “sorumlulukları” kendine dağıtırsın.
> 

---

### **2) Artefaktlar**

- **Product Backlog**: Tüm isteklerin (epic/story/bug) **tek** kuyruğu. Öncelik PO’da.
- **Sprint Backlog**: Bu sprint’te yapacağınız **seçili** işler + teslim planı.
- **Increment**: Sprint sonunda “Definition of Done”’ı sağlayan **çalışan ürün**.

---

### **3) Seremoniler (olmazsa olmaz toplantılar)**

- **Sprint Planning (Planlama)**
    
    Hedef belirlenir: *“Bu sprint’te ne değer üreteceğiz?”*
    
    Çıktı: **Sprint Goal** + **Sprint Backlog**.
    
- **Daily Scrum (Günlük 15 dk)**
    
    Ekip ilerleme ve engelleri senkronlar: *Dün/bugün/engel*.
    
- **Sprint Review (Gözden Geçirme)**
    
    Çalışan ürünü canlı demo ile göster, **geri bildirim** topla.
    
- **Sprint Retrospective (Geribildirim)**
    
    Süreci iyileştir: *Neyi durduralım / neyi başlatalım / neyi sürdürelim?*
    
    Çıktı: **1–2 somut iyileştirme aksiyonu**.
    

> Sprint uzunluğu genelde
> 
> 
> **1–2 hafta**
> 

---

## **“Definition”lar**

- **Definition of Ready (DoR)**: Story çalışmaya **hazır** mı? (Net kabul kriteri, UX, bağımlılık yok vb.)
- **Definition of Done (DoD)**: Story **bitti** sayılmasının şartları (kod, test, review, dokümantasyon, deployment).

---

## **Scrum akışı (2 haftalık örnek)**

1. **Backlog Refinement (sprint boyunca kısa oturumlar)** → Story’leri netleştir, puanla.
2. **Planlama** → Sprint Goal + seçilen story’ler.
3. **Geliştirme** → Küçük PR’lar, test, code review.
4. **Daily** → Engelleri görünür yap, WIP’i düşük tut.
5. **Review** → Demo + geri bildirimleri Product Backlog’a ekle.
6. **Retro** → 1–2 süreç iyileştirmesi belirle ve **bir sonraki sprintte uygula**.

---

## **Ölçümler (pratik olanlar)**

- **Velocity**: Sprint başına tamamlanan story point toplamı (planlama için faydalı).
- **Burndown Chart**: Günlük kalan iş (scope creep ve tıkanmaları erken görürsün).
- **Cycle Time / Lead Time**: Bir işin akış hızını takip et (darboğaz tespiti).

---

## **Mini sözlük + örnekler (full-stack perspektifi)**

**User Story şablonu:**

*As a* user, *I want to* sign in with email, *so that* I can access my dashboard.

**Kabul Kriteri (Given/When/Then):**

- *Given* verified account, *When* valid email/password entered, *Then* dashboard loads and JWT is set.

**Örnek Epic → Story’ler:**

- **Auth & Profile**
    - Email/password login (AC: hatalı giriş 3 denemede uyarı)
    - OAuth (Google) login
    - Password reset flow
- **Subscriptions**
    - Abonelik ekleme (name/price/currency; FE validasyon)
    - Aylık toplam hesaplama (Node.js servis; unit test %70+)
    - Listeleme/filtreleme (React; pagination)

**DoD örneği:**

- Lint/format temiz, min %70 unit test, 1 review onayı, staging deploy edildi, AC sağlandı.

---

## **Scrum vs Kanban (kısaca)**

- **Scrum**: Zaman kutuları (sprint), sabitlenmiş hedef, törenler belirgin.
- **Kanban**: Sürekli akış, **WIP limit**’leriyle darboğazları azaltma, zaman kutusu yok.

> Tek kişi / çok değişken akışta Kanban pratik; ekip ve ritim istiyorsan Scrum güçlü.
> 

---

## **Sık hatalar & kaçınma önerileri**

- **Toplantıları seremonik ama değersiz yapmak** → Review’da **gerçek demo** göster; Retro’da **eylem** çıkar.
- **Aşırı büyük story** → Dilimle (UI, API, depolama, e2e değil; dikey dilim).
- **DoD belirsiz** → Takıma görünür yap; bitmeden “Done” deme.
- **Sprint ortasında sürekli kapsam ekleme** → Eklenen iş, planı bozuyorsa **bir sonrakine** koy veya Sprint Goal’ü PO ile revize et.

---

## **Yarın başlamak için hızlı şablon**

- **Sprint süresi**: 2 hafta
- **Daily**: 15 dk, aynı saat
- **DoD**: README’ye yaz (test, review, deploy şartları)
- **Board sütunları**: *Backlog → Selected → In Progress → Review → Done* (WIP=2)
- **Önceliklendirme**: En çok değer + en az bağımlılık
- **Araçlar**: GitHub Projects / Jira / Linear + CI (GitHub Actions)

---

### **Özet**

**Scrum = kısa sprint’ler + net hedef (Sprint Goal) + çalışan ürün + sürekli iyileştirme.**