# HTML & CSS - Formlar ve Veri Görselleştirme 2

---

# **HTML Formlar – Bölüm 2: Ek Özellikler ve CSS ile Müdahale**

## **1) name, id, class – Ne zaman hangisi?**

- **name**: Form gönderiminde backend’e giden **anahtar**. Olmazsa veriyi yakalamak zorlaşır.
- **id**: Sayfa içinde **tekil** seçici. JS’te elemanı hızlı yakalamak, label for ile eşlemek için.
- **class**: CSS ve JS’te **grup** seçici; birden çok elemana aynı stili/işlevi vermek için.

**Örnek**

```
<label for="email">E-posta</label>
<input id="email" name="email" class="input" type="email" required>
```

---

## **2) required – Zorunlu alan**

- Değer almayan bir **boolean** özelliktir; required ya da required="required" yazılabilir.
- **Form içinde** çalışır; form dışında uyarı tetiklenmez.

**Örnek**

```
<form>
  <input type="text" name="adsoyad" required>
  <button>Gönder</button>
</form>
```

**İpucu:** Tarayıcı kontrolleri temel düzeydedir. Kritik formlarda **frontend (JS) + backend** doğrulama şarttır.

---

## **3) disabled – Pasif alan**

- Odaklanılamaz, düzenlenemez, **gönderimde POST edilmez**.
- value atanırsa **gösterilir** ama kullanıcı değiştiremez.

**Örnek**

```
<input type="text" value="Sistem tarafından atandı" disabled>
```

**Kullanım senaryosu:** “Önce şu alan dolsun, sonra bu alan aktif olsun” gibi durumlarda **JS ile disabledı kaldır**.

```
<input id="ad" required>
<input id="soyad" disabled>
<script>
  ad.addEventListener('input', () => {
    soyad.disabled = ad.value.trim().length < 2;
  });
</script>
```

---

## **4) autofocus – Sayfa açılınca odak**

- Form/oturum açma gibi ekranlarda yazma alanını **otomatik odaklar**.
- Belgede **tek** elemanda kullanılması önerilir.

**Örnek**

```
<input type="email" name="email" autofocus>
```

---

## **5) CSS Attribute Selectors – Özellik bazlı seçiciler**

- Belirli **tipteki** inputları tek seferde biçimlendirmek için harika.

**Örnek**

```
/* Sadece text inputlar */
input[type="text"] { border: 1px solid #e11d48; }

/* Birden çok hedef: .deneme sınıfı da dahil */
input[type="text"], .deneme { border-radius: 8px; }
```

---

## **6) :checked – Seçilmiş kutulara stil**

- **Checkbox** ve **radio** için seçiliyken stil uygular.

**Örnek**

```
<label><input type="checkbox" id="hobi"> Kitap okumak</label>
```

```
input[type="checkbox"]:checked { outline: 3px solid #22c55e; }
```

---

## **7) Kardeş Seçici + – “Hemen sonraki” öğeyi hedefle**

- A + B: A’dan **hemen sonra gelen** B’yi seçer (aynı ebeveyn içinde).

**Örnek**

```
<a href="#">link</a>
<p class="mesaj">Bu sadece linkten hemen sonra ise boyanır.</p>
```

```
a + p.mesaj { color: #2563eb; }
```

---

## **8) Placeholder stilini değiştirmek**

### **8.1) ::placeholder**

- Placeholder metninin stilini hedefler.

```
input::placeholder { color: #9ca3af; font-style: italic; }
```

### **8.2) :placeholder-shown**

- **Placeholder göründüğü sürece** (yani input boşken) seçer.

```
/* Alan boşken arka planı vurgula, yazı yazınca normalleşsin */
input:placeholder-shown {
  background: #fff7ed;
  border-color: #fb923c;
}
```

**Not:** ::placeholder yazıyı hedefler; :placeholder-shown durum (boş mu dolu mu?) hedefidir.

---

## **9) :focus-within**

## **– Kapsayıcı odaklı stil**

- Kapsayıcı içinde **odak** alan bir eleman varsa, kapsayıcıya stil uygular.
- Grup halinde inputları vurgulamak için idealdir.

**Örnek**

```
<div class="form-group">
  <input type="text" placeholder="Ad">
  <input type="text" placeholder="Soyad">
</div>
<input type="text" placeholder="Grup dışında">
```

```
.form-group:focus-within {
  background: #ecfeff;
  box-shadow: 0 0 0 3px rgba(14,165,233,.2) inset;
}
```

---

## **10) Label ile bağlama & erişilebilirlik tüyoları**

- label[for] ↔ input[id] eşlemesi **tıklanabilirlik** ve **ekran okuyucu** desteği sağlar.
- Checkbox/Radio’da etikete tıklayınca kutu değişsin: for/id kullan.
- Görsel ipuçlarına güvenme (renk körlüğü): Hata için **metin** ve/veya **ikon** ekle.
- Hata durumlarında aria-invalid="true" ve **yardım metni** (aria-describedby) ekle.

**Örnek**

```
<label for="tc">TC Kimlik</label>
<input id="tc" name="tc" aria-describedby="tcHint" required>
<small id="tcHint">11 haneli olmalı.</small>
```

---

## **11) Doğrulama stratejisi (öneri)**

1. **HTML5**: required, type="email", min/max, minlength/maxlength.
2. **JS (frontend)**: Anında geri bildirim (blur/input anında).
3. **Backend**: Nihai güvenlik—tüm kuralları tekrar doğrula.

**Mini JS örneği**

```
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  const email = form.email.value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    e.preventDefault();
    alert('Lütfen geçerli bir e-posta girin.');
  }
});
```

---

## **12) Küçük pratik parçası – Hepsini bir arada**

```
<form class="card">
  <div class="form-group">
    <label for="user">Kullanıcı adı</label>
    <input id="user" name="user" type="text" placeholder="ör. kutluhan" required autofocus>
  </div>

  <div class="form-group">
    <label><input type="checkbox" id="kvkk"> KVKK metnini okudum</label>
  </div>

  <div class="form-group disabled-chain">
    <label for="extra">Ek bilgi</label>
    <input id="extra" name="extra" type="text" placeholder="Önce KVKK onayı" disabled>
  </div>

  <button>Gönder</button>
</form>

<style>
.card { max-width: 420px; margin: 24px auto; padding: 16px; border:1px solid #e5e7eb; border-radius:12px; }
.form-group { display:grid; gap:6px; margin-bottom:12px; }
input::placeholder { color:#9ca3af; }
input:placeholder-shown { background:#fff7ed; border-color:#fb923c; }
.form-group:focus-within { background:#f0f9ff; box-shadow:0 0 0 3px rgba(14,165,233,.15) inset; }
input[type="checkbox"]:checked { outline: 2px solid #22c55e; }
</style>

<script>
  const kvkk = document.getElementById('kvkk');
  const extra = document.getElementById('extra');
  kvkk.addEventListener('change', () => {
    extra.disabled = !kvkk.checked;
  });
</script>
```

---

## **Sık yapılan hatalar & ipuçları**

- required **form dışında** deneniyor → **Çalışmaz**.
- disabled alanın gönderileceği varsayılıyor → **Gönderilmez**; veri gerekiyorsa readonly düşün.
- Placeholder’ı **etiket yerine** kullanmak → Erişilebilirlik zayıflar. **<label> ekle.**
- CSS’te tüm inputlara tek stil → type bazlı seçicilerle **nüans** ver (input[type="email"] gibi).

---