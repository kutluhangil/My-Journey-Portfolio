# E-POSTA SİSTEMİ NASIL ÇALIŞIR (ÖZET)

İnternette e-posta gönderme ve alma işlemleri **özel protokollerle** yapılır.

En önemlileri:

### **SMTP**

(Simple Mail Transfer Protocol)

### **POP3**

(Post Office Protocol)

---

# **2️⃣ SMTP NEDİR (E-POSTA GÖNDERME)**

SMTP sadece **mail göndermek için kullanılır**.

Örneğin:

```
Sen → Gmail server → Alıcının mail serverı
```

Adımlar:

1️⃣ Kullanıcı mail gönderir

2️⃣ Mail gönderen servera gider

3️⃣ Server alıcının mail serverına bağlanır

4️⃣ Mail teslim edilir

Örnek:

```
sen@gmail.com → SMTP → outlook.com server
```

---

### **Node.js’te SMTP nasıl kullanılır?**

Genelde şu paket kullanılır:

```
nodemailer
```

Örnek:

```
await transporter.sendMail({
  to: email,
  subject: "Reset password",
  html: "<a href='reset link'>Reset</a>"
});
```

---

# **3️⃣ POP3 NEDİR (E-POSTA ALMA)**

POP3 ise **mail alma protokolüdür**.

Adımlar:

1️⃣ Kullanıcı mail servera bağlanır

2️⃣ Mail indirir

3️⃣ Mail genelde serverdan silinir

---

### **SMTP vs POP3**

| **Özellik** | **SMTP** | **POP3** |
| --- | --- | --- |
| Görev | Mail gönderme | Mail alma |
| Yön | Gönderici → Server | Server → Kullanıcı |
| Kullanım | Nodemailer | Mail client |

---

# **4️⃣ PASSWORD RESET SİSTEMİ**

Şimdi asıl önemli kısım burası.

Kullanıcı şifresini unuttuysa:

```
"Şifremi unuttum"
```

Butonuna basar.

Ama sistem şu soruyu sorar:

```
Bu gerçekten o kullanıcı mı?
```

Çünkü herkes başka birinin şifresini değiştirebilir.

Bu yüzden **email doğrulaması kullanılır.**

---

# **5️⃣ PASSWORD RESET NASIL ÇALIŞIR**

Adımlar:

### **1️⃣ Kullanıcı email girer**

```
POST /auth/request-reset-email
```

Body:

```
{
 email: "user@test.com"
}
```

---

### **2️⃣ Sistem kullanıcıyı bulur**

```
UsersCollection.findOne({ email })
```

---

### **3️⃣ JWT token oluşturulur**

Token içinde:

```
userId
expire time
```

---

### **4️⃣ Email gönderilir**

Mail içeriği:

```
https://site.com/reset-password?token=JWT_TOKEN
```

---

### **5️⃣ Kullanıcı linke tıklar**

Frontend açılır:

```
Reset password page
```

---

### **6️⃣ Yeni şifre girer**

```
POST /auth/reset-password
```

Body:

```
{
 token: "...",
 password: "newPassword"
}
```

---

### **7️⃣ Backend tokenı doğrular**

```
jwt.verify(token)
```

---

### **8️⃣ Kullanıcının şifresi güncellenir**

```
bcrypt.hash(newPassword)
```

---

# **6️⃣ JWT TOKEN NEDİR**

JWT = JSON Web Token

Kullanıcı bilgilerini **token içinde taşıyan bir sistemdir.**

Token formatı:

```
header.payload.signature
```

Örnek:

```
xxxxx.yyyyy.zzzzz
```

---

# **7️⃣ JWT TOKEN İÇERİĞİ**

### **Header**

Algoritma:

```
{
 "alg": "HS256",
 "typ": "JWT"
}
```

---

### **Payload**

Veriler:

```
{
 userId: "123",
 exp: 171234234
}
```

---

### **Signature**

Tokenın değiştirilmediğini doğrular.

```
hash(header + payload + secret)
```

---

# **8️⃣ JWT NEDEN KULLANILIYOR**

JWT’nin büyük avantajı:

```
STATELESS AUTH
```

Yani:

Server oturum saklamak zorunda değildir.

Token içinde zaten bilgiler vardır.

---

# **9️⃣ JWT AVANTAJLARI**

### **1️⃣ Stateless**

Server session tutmaz.

---

### **2️⃣ Hızlıdır**

Database sorgusu gerekmez.

---

### **3️⃣ Microservice uyumludur**

Token her serviste çalışır.

---

# **10️⃣ JWT DİKKAT EDİLMESİ GEREKEN ŞEY**

JWT:

```
Şifrelenmiş değildir
```

Sadece:

```
imzalanmıştır
```

Yani herkes payload kısmını okuyabilir.

Bu yüzden JWT içine şu konmaz:

❌ password

❌ credit card

❌ secret data

---

# **11️⃣ Bu sistemin amacı**

Password reset için güvenli doğrulama yapmak.

Yani kullanıcı:

```
Email → Link → Reset password
```

---

# **12️⃣ Gerçek backend mimarisi**

```
User forgot password
        │
        ▼
POST /auth/request-reset-email
        │
        ▼
JWT token create
        │
        ▼
Email send (SMTP)
        │
        ▼
User clicks link
        │
        ▼
POST /auth/reset-password
        │
        ▼
Password update
```

---

# **13️⃣ Neden OTP yerine link kullanılıyor**

OTP yöntemi:

```
email code → kullanıcı girer
```

Ama link yöntemi:

```
email → click → reset page
```

Daha kullanıcı dostudur.

---

# **Özet**

Bu bölüm sana şunları öğretiyor:

### **Email sistemi**

SMTP → mail gönderme

---

### **Password reset sistemi**

```
request-reset-email
reset-password
```

---

### **JWT**

Kullanıcıyı doğrulamak için token.

---

💡 İstersen sana ayrıca bir şey gösterebilirim:

Node.js backendlerde kullanılan **tam password reset sistemi kod mimarisi** (controller + service + mail + jwt).

Bu sistem **senin kursun muhtemelen bir sonraki ödevde yaptıracak**.