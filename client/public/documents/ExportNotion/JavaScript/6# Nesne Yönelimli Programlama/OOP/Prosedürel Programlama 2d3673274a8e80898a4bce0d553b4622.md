# Prosedürel Programlama

Prosedürel programlama, veriler üzerinde belirli işlemleri gerçekleştiren bir dizi fonksiyon olarak yapılandırılmış bir programlama paradigmidir.

Temel kavramları şunlardır:

1. **Prosedürler (fonksiyonlar):** Programın temel birimi fonksiyonlardır. Belirli görevleri yerine getirmek üzere tasarlanırlar. Fonksiyonlar, argümanlar (giriş verileri) alır, bunları işler ve bir sonuç (çıkış verisi) döndürebilir.
2. **Yerel ve global değişkenler:** Fonksiyon içinde tanımlanan değişkenler *yereldir*ve sadece o fonksiyon içinde erişilebilir. Fonksiyonlar dışında tanımlanan değişkenler *globaldir* ve programın her yerinden erişilebilir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/2e55bb10-d6d7-46c0-b50b-afd415b1e982Frame%2048643.jpg)

Prosedürel kod, bilgileri depolamak ve işlemek için doğrudan ilişkili olmayan fonksiyonlar ve değişkenlerin bir kümesidir.

```
Bu yaklaşım basit ve anlaşılırdır. Veriler ve işlemler arasında sıkı bir bağın gerekmediği durumlarda kullanılabilir.

```

Aşağıda, hesaplama sonucu için global değişkenler ve bir fonksiyon içeren prosedürel kod örneği verilmiştir:

```
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

getWage(baseSalary, overtime, rate);
```

```
Prosedürel programlama, şimdiye kadar birlikte kullandığımız yaklaşım şeklidir. Basit ve anlaşılırdır, dolayısıyla küçük programlar için uygundur. Ancak program karmaşıklaştıkça, veri ile bu verilerin işlenme yöntemleri arasındaki bağlantı kopabilir ve bu yaklaşım yetersiz kalabilir.
```

AI tarafından:

Kısaca ve net şekilde özetleyeyim 👇

---

## **🔍 Metin Ne Anlatmak İstiyor?**

### **❓ “İyi kod” nedir?**

> Sadece çalışan kod yeterli değildir.
> 

Gerçek hayatta **iyi kod**, şu özelliklere de sahip olmalıdır:

- ✅ **Güvenilir** → Hata yapmadan stabil çalışmalı
- 📈 **Ölçeklenebilir** → Kullanıcı/yük artınca bozulmamalı
- 🔄 **Uyarlanabilir** → Değişiklik yapmak kolay olmalı
- 💰 **Düşük maliyetli** → Geliştirmesi ve bakımı kolay olmalı

Bunlar yoksa kod çalışsa bile **kötü koddur**.

---

## **🧠 Neden Programlama Paradigmaları?**

Bu kalite kriterlerini karşılamak için:

- Ya çok deneyimli olman gerekir
- Ya da **doğru programlama yaklaşımlarını (paradigmaları)** kullanman gerekir

Bu yüzden metin, paradigmaları tanıtmaya başlıyor.

---

## **⚙️ Prosedürel Programlama Nedir?**

> Program =
> 
> 
> **fonksiyonlar + değişkenler**
> 
- Fonksiyonlar işleri yapar
- Veriler genelde **ayrı** durur
- Global ve lokal değişkenler kullanılır

### **Örnek:**

```
const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};
```

---

## **👍 Artıları**

- Basit
- Okuması kolay
- Küçük programlar için ideal

---

## **👎 Eksileri**

- Program büyüdükçe:
    - Veri + davranış ilişkisi kopar
    - Kod dağınıklaşır
    - Değiştirmesi zorlaşır

---

## **🧩 Tek Cümlelik Özet (Ezber)**

> Prosedürel programlama
> 

Bu metin, seni **daha gelişmiş yaklaşımlara (OOP gibi)** hazırlamak istiyor.

---