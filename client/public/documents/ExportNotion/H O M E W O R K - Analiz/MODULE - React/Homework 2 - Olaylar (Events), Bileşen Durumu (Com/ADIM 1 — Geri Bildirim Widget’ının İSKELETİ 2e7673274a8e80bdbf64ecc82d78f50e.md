# ADIM 1 — Geri Bildirim Widget’ının İSKELETİ

Bu adımda **HİÇ state, HİÇ logic yok**

Sadece **ekranda görünen statik yapıyı** kuracağız.

🎯 **Hedef:**

Ekranda şunlar görünsün:

- Kafe adı
- Açıklama metni
    
    Hepsi **App içinde**, ayrı bileşenlerle
    

---

## **🔍 Bu adımda yapacaklarımız**

- index.html → **dokunmuyoruz**
- App.jsx → sadeleştiriyoruz
- Description adında **ilk bileşeni** oluşturuyoruz
- CSS → şimdilik **yok** (bilerek)

---

## **1️⃣ index.html (DEĞİŞTİRME)**

index.html **şu an doğru**, aynen kalsın:

```
<div id="root"></div>
```

👉 React her şeyi buraya basacak.

---

## **2️⃣ components klasörünü düzenleyelim**

Şu yapıyı oluştur:

```
src/components/
 └── Description/
     ├── Description.jsx
```

> ❗ CSS’i bilinçli olarak sonra ekleyeceğiz
> 

---

## **3️⃣ Description.jsx — Açıklama Bileşeni**

📄 src/components/Description/Description.jsx

```
export default function Description() {
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
```

🔎 Burada ne öğrendin?

- export default → ödev kuralına uygun
- JSX içinde **tek root** (div)
- Henüz **props yok**, **state yok**

---

## **4️⃣ App.jsx — Her şeyin merkezi**

📄 src/App.jsx

Mevcut içeriği **tamamen sil**, şunu yaz:

```
import Description from "./components/Description/Description";

export default function App() {
  return (
    <div>
      <Description />
    </div>
  );
}
```

🔎 Burada ne yaptık?

- App = **kök bileşen**
- Description’ı **App içinde render ettik**
- Mimariyi doğru kurduk

---

## **5️⃣ Kontrol Et (ÇOK ÖNEMLİ)**

Terminalde:

```
npm run dev
```

Tarayıcıda şunu görmen lazım:

```
Sip Happens Café
Please leave your feedback about our service by selecting one of the options below.
```

❌ Hata varsa DUR

✅ Görünüyorsa → **1. adım TAMAM**

---

## **🧠 Bu Adımın Mantığı (Özet)**

- React’te **önce görünüm**
- Sonra **butonlar**
- En son **state & localStorage**

Biz şu an **temeli attık**.

---