# Kütüphane bağlama “nanoid” ve “yup” için

## **ben mi yapıyorum, sen mi yapacaksın?**

👉 **Bu adımda YAPMAN GEREKEN ŞEYLER VAR**, ama **çok basit**:

### **✅ 1️⃣ Senin yapman gereken (terminalde)**

Projene **3 kütüphane** ekleyeceğiz:

- **formik** → form yönetimi
- **yup** → form doğrulama
- **nanoid** → id üretmek için

Terminali aç (proje kökünde) ve **şunu çalıştır**:

```
npm install formik yup nanoid
```

✔️ Bunu **sen yapacaksın**

✔️ 1 kere yapılır

✔️ Sonra bir daha dokunmayız

---

### **❌ Senin yapmana gerek OLMAYAN şeyler**

- Formik form yapısını kurmak
- Yup validation yazmak
- nanoid ile id üretmek
- State’e kişi ekleme mantığını kurmak

👉 **Bunları ben sana adım adım kodlayarak göstereceğim**

---

## **🧠 Mantığı şimdiden anlayalım (kod yazmadan)**

### **Form gönderildiğinde ne olacak?**

1. Kullanıcı:
    - Name girer
    - Number girer
2. Formik:
    - Alanları kontrol eder (Yup)
3. Eğer **geçerliyse**:
    - nanoid() ile id üretir
    - Yeni kişiyi:

```
{
  id: "rastgele-id",
  name: "...",
  number: "..."
}
```

1. 
    - şeklinde oluşturur
2. App.jsx’teki contacts state’ine ekler
3. Liste otomatik güncellenir

---

## **📌 Bu adımda oluşturacağımız bileşen**

```
src/components/ContactForm/
  ContactForm.jsx
  ContactForm.module.css
```

⚠️ **Henüz yapma**

Bir sonraki mesajda **sıfırdan beraber** yazacağız.

---

## **🔥 Özet (aklında kalsın)**

✔️ **Şimdi yapman gereken tek şey:**

```
npm install formik yup nanoid
```

✔️ Kod yazmaya **henüz başlamıyoruz**

✔️ Bir sonraki adımda:

- ContactForm.jsx
- Formik
- Yup validation
- nanoid
- App’e kişi ekleme

---