# Geliştirme sunucusunu başlatma

`package.json` dosyasının `scripts` alanında, projenin terminalde çalıştırılabilen komutlarının listesi bulunmaktadır.

```
{
  "name": "my-vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.4.5"
  }
}
```

- **Özellik Adı** (örneğin `"dev"`) — çalıştıracağımız script komutunun adıdır.
- **Özellik Değeri** (örneğin `"vite"`) — çalıştırılması gereken betiğin kendisidir.

Yani, `scripts` alanı projede sıkça kullanılan komutlar için takma adlar içerir.

Script'leri çalıştırmak için `npm run` komutu kullanılır:

`npm run [script-name]`

`[script-name]` yerine çalıştırmak istediğiniz script adını, `scripts` alanında tanımlandığı şekilde yazmalısınız.

Projemizde `"dev"` adlı script, yerel geliştirme sunucusunu başlatır. Bu, bilgisayarınızda çalışan ve web sitelerini/uygulamalarını internete yüklemeden önce yerel cihazda geliştirip test etmenizi sağlayan bir sunucudur.

Yerel geliştirme sunucusunu başlatmak için şu komutu çalıştırın:

`npm run dev`

Artık uygulamayı [http://localhost:5173](http://localhost:5173/) adresinden yerel olarak görüntüleyebilirsiniz. Projedeki herhangi bir dosyayı düzenlediğinizde, değişiklikler anında ekrana yansır.

Önceki tüm komutlardan farklı olarak, sunucunun başlatılması sonucunda terminalde **sürekli çalışan** bir işlem başlatılır. Bu süreç, sunucu çalıştığı sürece devam eder ve terminali meşgul eder; yani başka komut girilemez.

Sunucuyu durdurmak için terminalde aşağıdaki tuş kombinasyonunu kullanın:

- **Windows kullanıcıları için:** `Ctrl + C`
- **macOS ve Linux kullanıcıları için:** `Control + C`

---

---

## **🧠 Şimdi mantığını netleştirelim (çok önemli)**

### **package.json → scripts ne işe yarar?**

```
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

Bu şu demek:

| **Komut** | **Ne yapar** |
| --- | --- |
| npm run dev | Geliştirme sunucusunu başlatır |
| npm run build | Prod için build alır |
| npm run preview | Build edilmiş halini gösterir |

---

## **🚀 Şu anda SEN ne yapmalısın?**

### **Senaryoya göre cevap:**

### **🔹 1. Sunucu HALA AÇIKSA**

Terminalde şunu görüyorsan:

```
VITE ready
press h + enter to show help
```

👉 **Hiçbir şey yapma**

👉 Tarayıcıdan http://localhost:5173 açık

👉 Kod yazmaya devam edebilirsin

Bu terminal **bilerek kilitli**

Bu bir hata değil ❌

---

### **🔹 2. Sunucuyu KAPATTIYSAN**

(terminali kapattın ya da Ctrl + C yaptın)

O zaman yapacağın tek şey:

```
npm run dev
```

---

## **❗ Çok önemli bir bilgi (not al)**

> “npm run dev çalışınca terminal niye kitleniyor?”
> 

Çünkü:

- Bu **uzun süre çalışan bir işlem**
- Sunucu çalıştığı sürece terminali meşgul eder
- Bu NORMAL ve GEREKLİ

📌 Terminalde başka iş yapacaksan:

- **Yeni bir terminal sekmesi aç**

---

## **🧾 Net özet (tek bakışta)**

- ✅ npm install → yapılmış
- ✅ npm run dev → daha önce yapılmış
- ✅ Sunucu ayağa kalkmış
- ❌ Hata yok
- ❌ Eksik adım yok

---