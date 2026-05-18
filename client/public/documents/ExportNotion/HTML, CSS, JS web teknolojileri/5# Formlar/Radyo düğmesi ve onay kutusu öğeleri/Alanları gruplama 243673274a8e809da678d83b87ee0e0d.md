# Alanları gruplama

Büyük bir formda, ilgili öğeleri gruplandırmak kullanıcıların formu daha kolay anlamasını sağlar. Bu yöntem, formun tamamını bir kerede anlamak yerine, küçük ve sıralı alan gruplarına odaklanmaya yardımcı olur.

Gruplama hem arayüzde görsel olarak hem de kodda mantıksal olarak gerçekleştirilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/877fa591-99b4-407f-99a4-06b3cd4d6e93Screenshot%202023-05-10%20at%2013.27.35.png)

`Fieldset` öğesi, bir formdaki birkaç ilgili öğeyi gruplamak için bir kapsayıcıdır ve iç içe geçmiş `legend` grup başlığı olarak işlev görür. İlgili radyo düğmeleri ve onay kutuları her zaman gruplanmalıdır. Diğer alan türleri gerektiğinde gruplandırılır.

`<form>
  <fieldset>
    <legend>Grup başlığı</legend>
    *<!-- Etkileşimli öğeler grubu -->*</fieldset>

  <fieldset>
    <legend>Grup başlığı</legend>
    !-- Etkileşimli öğeler grubu -->
  </fieldset>

  <button type="submit">Submit</button>
</form>`

Varsayılan olarak, `fieldset` öğesinin kenar boşlukları, dolgusu ve kenarlığı vardır. Bunlar, göreve bağlı olarak genel olarak veya belirli bir form için noktasal olarak sıfırlanabilir.

`fieldset {
  padding: 0;
  margin: 0;
  border: none;
}`

![Screen Shot 2025-08-02 at 04.10.56 AM.png](Alanlar%C4%B1%20gruplama/Screen_Shot_2025-08-02_at_04.10.56_AM.png)

Elbette! Aşağıda bu konuyu sana **düzenli, sade ve not alabileceğin** şekilde açıklıyorum. Hem HTML yapı mantığını hem de CSS kısmını net bir şekilde anlamanı sağlayacak.

---

## **Formlarda Alan Gruplama (<fieldset> ve <legend>)**

---

### **1. Neden Alanları Gruplarız?**

- Büyük formlar **göz korkutucu** olabilir.
- İlgili alanları bir araya getirerek kullanıcıya **daha anlaşılır** bir yapı sunarız.
- Bu hem **görsel** hem de **mantıksal** olarak formu bölmeyi sağlar.

**Örnek:**

- Kişisel Bilgiler
- Teslimat Bilgileri
- Ödeme Bilgileri gibi bölümler

---

### **2. HTML’de Gruplama Nasıl Yapılır?**

### **<fieldset> :**

- Gruplama kapsayıcısıdır.
- İçine **ilgili form alanlarını** yazarsın.

### **<legend> :**

- fieldset içindeki grubun **başlığını** verir.

### **🧾 Örnek:**

```
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label>
      Name:
      <input type="text" name="username" />
    </label>
    <label>
      Email:
      <input type="email" name="email" />
    </label>
  </fieldset>

  <fieldset>
    <legend>Preferences</legend>
    <label>
      <input type="checkbox" name="newsletter" />
      Subscribe to newsletter
    </label>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

---

### **3. Varsayılan Fieldset Stili**

Tarayıcılar fieldset ve legend için varsayılan olarak şu görsel özellikleri uygular:

| **Özellik** | **Açıklama** |
| --- | --- |
| margin | Dış boşluk |
| padding | İç boşluk |
| border | Kenarlık (gri çerçeve gibi) |
| legend | Otomatik başlık konumlandırması |

---

### **🧾 Bu Varsayılan Stilleri Sıfırlamak**

Bazı durumlarda bu stiller istenmez. O zaman sıfırlayabiliriz:

```
fieldset {
  padding: 0;
  margin: 0;
  border: none;
}
```

Bu kod:

- Tüm kenar boşluklarını ve çerçeveyi kaldırır.
- Geriye sadece içerik ve legend kalır.

---

### **📌 Özet Notlar**

| **Terim** | **Açıklama** |
| --- | --- |
| <fieldset> | İlgili form öğelerini gruplamak için kullanılır. |
| <legend> | Grup başlığıdır. Kullanıcının hangi alanı doldurduğunu belirtir. |
| Neden önemli? | Kullanıcı deneyimini artırır, erişilebilirliği geliştirir. |
| CSS sıfırlama | padding: 0; margin: 0; border: none; ile görünüm temizlenir. |
| Kullanım alanı | Radyo butonları, checkbox’lar, adres veya ödeme gibi form alt bölümleri. |

---

Form alanlarını HTML düzenleyicisinde gruplandırın:

- Telefon numarası giriş alanları `Contact info` başlıklı ilk grupta olmalıdır..
- `name="delivery"` olan radyo butonları `Delivery` başlıklı grupta olmalıdır.
- `name="payment"` olan radyo butonları `Payment method` başlıklı grupta olmalıdır..
- HTML düzenleyicisinin bir `form` açılış etiketi vardır
- HTML düzenleyicisinin bir `form` kapanış etiketi vardır
- `form` etiketinin içine üç adet `fieldset` etiketi yerleştirilmelidir.
- Her `fieldset` etiketi, `form-group` adında bir `class` niteliğine sahip olmalıdır.
- İlk `fieldset` etiketi içerisinde, `Contact info` metni ile bir `legend` etiketi iç içe geçmelidir.
- İlk `fieldset` etiketi, iki adet giriş alanı içermelidir.
- İkinci `fieldset` etiketi içerisinde, `Delivery` metniyle iç içe geçmiş bir `legend`etiketi bulunmalıdır.
- İkinci `fieldset` etiketi, `name="delivery"` olan iki adet radyo butonu içermelidir.
- Üçüncü `fieldset` etiketi içerisinde, `Payment method` metni ile bir `legend` etiketi iç içe geçmelidir.
- Üçüncü `fieldset` etiketi, `name="payment"` olan üç adet radyo butonu içermelidir.

---

## **✅ Düzenlenmiş ve Doğru Hali:**

```
<form class="order-form">

  <!-- 1. GRUP: Contact Info -->
  <fieldset class="form-group">
    <legend>Contact info</legend>

    <label>
      Recipient name
      <input type="text" name="name" required />
    </label>

    <label>
      Phone number
      <input type="tel" name="contact_tel" required />
    </label>
  </fieldset>

  <!-- 2. GRUP: Delivery -->
  <fieldset class="form-group">
    <legend>Delivery</legend>

    <label>
      <input type="radio" name="delivery" value="pickup" required />
      Pickup
    </label>

    <label>
      <input type="radio" name="delivery" value="courier" required />
      Courier
    </label>
  </fieldset>

  <!-- 3. GRUP: Payment Method -->
  <fieldset class="form-group">
    <legend>Payment method</legend>

    <label>
      <input type="radio" name="payment" value="cash" required />
      Cash
    </label>

    <label>
      <input type="radio" name="payment" value="card" required />
      Credit card
    </label>

    <label>
      <input type="radio" name="payment" value="apple" required />
      Apple pay
    </label>
  </fieldset>

  <button type="submit">Place order</button>
</form>
```

---

## **🧾 Açıklamalar – Adım Adım**

| **Alan** | **Açıklama** |
| --- | --- |
| <form> | Formun ana kapsayıcısı |
| <fieldset class="form-group"> | Her ilgili alan grubunu bir araya getirir |
| <legend> | Alan grubunun başlığını belirtir |
| **Contact info grubu** | İki input içeriyor: name ve contact_tel |
| **Delivery grubu** | name="delivery" olan 2 radyo butonu içeriyor |
| **Payment method grubu** | name="payment" olan 3 radyo butonu içeriyor |
| <button type="submit"> | Formu göndermek için |

---

## **📌 Not Almalık Bilgiler**

| **Konsept** | **Açıklama** |
| --- | --- |
| fieldset | Form içindeki ilgili alanları gruplamak için kullanılır |
| legend | Fieldset başlığıdır, kullanıcıya grubun konusunu açıklar |
| class="form-group" | Tüm fieldset’lere verilmesi gereken sınıf adıdır |
| Gruplama Neden Önemli? | Hem kodda düzen sağlar, hem de kullanıcı arayüzünde anlamlı bölümler oluşturur |
| required | İlgili alanların boş bırakılmasını engeller |

---