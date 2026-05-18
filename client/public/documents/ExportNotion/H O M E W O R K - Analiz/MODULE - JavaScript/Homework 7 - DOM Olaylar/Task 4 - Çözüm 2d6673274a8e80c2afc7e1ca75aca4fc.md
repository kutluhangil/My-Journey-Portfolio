# Task 4 - Çözüm

**Task-4 Çözümü (task-4.js)**

```
const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  form.reset();
});
```

---

## **🧠 Mantık (adım adım, kısa)**

### **1️⃣ Formu seçiyoruz**

```
const form = document.querySelector(".login-form");
```

---

### **2️⃣ submit olayını dinliyoruz**

```
form.addEventListener("submit", ...)
```

✔ Mentorun istediği olay

✔ Enter tuşu ve buton tıklaması ikisi de çalışır

---

### **3️⃣ Sayfa yenilenmesini engelliyoruz**

```
event.preventDefault();
```

✔ Form gönderilince **reload olmaz**

---

### **4️⃣ Form elemanlarına elements ile erişiyoruz**

```
const { email, password } = form.elements;
```

✔ **Mentor şartı**

✔ name attribute’larına göre erişim

---

### **5️⃣ Boşlukları temizleyip kontrol ediyoruz**

```
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
```

```
if (emailValue === "" || passwordValue === "") {
  alert("All form fields must be filled in");
  return;
}
```

✔ required yok

✔ JS ile kontrol

✔ Alanlardan biri bile boşsa → alert

---

### **6️⃣ Nesne oluşturup konsola yazıyoruz**

```
const formData = {
  email: emailValue,
  password: passwordValue,
};

console.log(formData);
```

✔ Anahtarlar = input name değerleri

✔ Değerler = trimlenmiş input değerleri

---

### **7️⃣ Formu temizliyoruz**

```
form.reset();
```

✔ Gönderim sonrası inputlar sıfırlanır

---

## **🎯 Mentor checklist kontrolü**

✔ submit olayı dinleniyor

✔ Sayfa yenilenmiyor

✔ Boş alan varsa alert çıkıyor

✔ elements kullanıldı

✔ Trim uygulandı

✔ Nesne konsola yazdırıldı

✔ Form resetlendi

💯 **Tam puanlık çözüm**

---

## **🧪 Canlı test senaryoları**

| **Email** | **Password** | **Sonuç** |
| --- | --- | --- |
| boş | dolu | ❌ alert |
| dolu | boş | ❌ alert |
| "  test@mail.com " | " 12345 " | ✅ { email: "test@mail.com", password: "12345" } |

---