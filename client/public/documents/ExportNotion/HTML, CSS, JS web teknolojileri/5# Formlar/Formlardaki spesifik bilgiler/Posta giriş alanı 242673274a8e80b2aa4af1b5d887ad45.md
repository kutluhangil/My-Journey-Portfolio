# Posta giriş alanı

`type` niteliğinin değeri, alanın türünü ve içine girilebilecek karakter kümesini tanımlar.

Akıllı telefon tarayıcısı `"email"` türünde bir alan gördüğünde, kolayca erişilebilen `@` sembolü ile e-posta girmek için özel bir klavye görüntüler. Tarayıcı ayrıca adres defterinden bir e-posta adresi seçmek için bir yol da sağlayabilir.

`<form>
	<label>
	  Email
	  <input type="email" name="email" />
	</label>
  <button type="submit">Register</button>
</form>`

### **📌 Temel Anlamı:**

```
<input type="email" name="email" />
```

Bu satır, kullanıcıdan **e-posta adresi** girmesini bekleyen bir form alanıdır.

---

### **🔍 Açıklamanın Detayları:**

- **type="email"**: Bu, input alanının bir e-posta adresi beklediğini belirtir. Kullanıcının “kutluhan@example.com” gibi bir formatta bilgi girmesi gerekir.
- **Tarayıcı Desteği (Browser Behavior)**:
    - Akıllı telefonlarda, bu tür bir alan görünce, **e-posta yazmayı kolaylaştıran özel bir klavye** açılır. Bu klavyede genellikle @ ve .com gibi tuşlar daha görünür hâle gelir.
    - Bazı tarayıcılar, kullanıcının daha önce girdiği e-posta adreslerini otomatik tamamlayabilir ya da **adres defterinden öneriler sunabilir**.

---

### **✅ Neden Kullanılır?**

1. Kullanıcı deneyimini artırmak (daha kolay giriş).
2. Formun doğruluğunu artırmak (geçerli e-posta formatı zorunluluğu).
3. Tarayıcıların otomatik doğrulama yapabilmesi.

---

### **🔧 Örnek Kod Açıklaması:**

```
<form>
	<label>
	  Email
	  <input type="email" name="email" />
	</label>
  <button type="submit">Register</button>
</form>
```

- <form>: Formun başlangıcı.
- <label>: “Email” metnini input ile ilişkilendirir.
- <input type="email">: E-posta adresi girilecek alan.
- <button type="submit">: “Register” butonuna basıldığında form gönderilir.

---

İşte <input type="email"> öğesinin açıklamasını özetleyen tablo:

---

### **📋**

### **<input type="email">**

### **Kullanımı Özeti**

| **Özellik / Terim** | **Açıklama** |
| --- | --- |
| **HTML Öğesi** | <input type="email"> |
| **Amacı** | Kullanıcıdan **geçerli bir e-posta adresi** almak |
| **Girdi Türü** | E-posta (örnek: kutluhan@example.com) |
| **Doğrulama** | Tarayıcı, @ ve . içeren geçerli formatta giriş ister |
| **Mobil Uyumluluk** | Akıllı telefonlarda özel e-posta klavyesi açılır |
| **Tarayıcı Desteği** | Otomatik tamamlama ve adres defteri entegrasyonu sağlanabilir |
| **Erişilebilirlik (Label)** | <label> etiketi sayesinde ekran okuyucularla uyumluluk artar |
| **Form Adı (name)** | name="email" ile gönderilen veriye isim verilir (sunucu tarafında) |
| **Form Gönderme** | <button type="submit"> ile bilgiler sunucuya gönderilir |

---

Bu yapı, HTML formu ile e-posta girişi yaparken hem kullanıcı dostu hem de teknik olarak sağlam bir temel sağlar.