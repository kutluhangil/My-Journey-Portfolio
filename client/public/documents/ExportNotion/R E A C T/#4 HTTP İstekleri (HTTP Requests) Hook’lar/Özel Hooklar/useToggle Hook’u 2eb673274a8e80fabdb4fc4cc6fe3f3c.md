# useToggle Hook’u

İki bileşende, örneğin bir modal pencere ve bir yan panel gibi, arayüz elemanını açma, kapama ve geçiş yapma mantığını düşünelim.

```
// ComponentA.jsx
const ComponentA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

// ComponentB.jsx
const ComponentB = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <button onClick={openSidebar}>Open sidebar</button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
```

Her bileşende aynı açma/kapama mantığını tekrar tekrar yazmak kodun tekrarlanmasına neden olur. Özellikle bir projede çok sayıda modal, yan panel veya açılır pencere kullanıldığında bu tekrar büyüyebilir. Bu sorunu çözmek için `useToggle` adında bir hook oluşturarak bu mantığı yeniden kullanılabilir hale getireceğiz.

```
// src/hooks/useToggle.js

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};
```

Bu özel hook herhangi bir argüman alabilir ve herhangi bir şey döndürebilir; kurallar tamamen kullanım senaryosuna bağlıdır. Bizim durumumuzda, bir nesne döndürdük.

Şimdi önceki örneklerdeki kodu yeniden yapılandıralım:

```
// ComponentA.jsx
import { useToggle } from "../hooks/useToggle.js";

const ComponentA = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

// ComponentB.jsx
import { useToggle } from "../hooks/useToggle.js";

const ComponentB = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
			<button onClick={open}>Open sidebar</button>
      <Sidebar isOpen={isOpen} onClose={close} />
    </>
  );
};
```

u basit düzenleme bile kod tekrarını önemli ölçüde azalttı, proje dosyalarını daha iyi yapılandırdı ve bileşenleri daha temiz hale getirdi. Ayrıca, ileride bileşenlerin ve hook mantığının yeniden yapılandırılmasını da kolaylaştırdı.

Hook'lar sıradan fonksiyonlar oldukları için, argümanlar alabilirler. Örneğin, modal pencerenin başlangıçta açık olmasını sağlayacak şekilde `useToggle` hook'unu genişletebiliriz. Varsayılan olarak kapalı olacak şekilde ayarlayacağız.

```
// src/hooks/useToggle.js
export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

// MyComponent.jsx
import { useToggle } from "../hooks/useToggle.js";

const MyComponent = () => {
  const { isOpen, open, close } = useToggle(true);

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};
```

---

## **🔹 Özel Hook (Custom Hook) nedir?**

> Tekrarlanan React mantığını (state + logic) tek yerde toplayıp yeniden kullanmamızı sağlar.
> 
- Aslında **normal bir JavaScript fonksiyonudur**
- Adı **use ile başlar**
- İçinde başka hook’lar (useState, useEffect vb.) kullanabilir

---

## **🔹 Mantığı (çok net)**

Şunu düşün 👇

Bir projede:

- Modal aç / kapa
- Sidebar aç / kapa
- Dropdown aç / kapa

Hepsi **aynı mantık**:

```
isOpen
open()
close()
```

Ama her bileşende bunu **tekrar tekrar yazıyorsun** ❌

---

## **🔹 Özel hook ne yapar?**

> Bu ortak mantığı
> 
> 
> **tek bir yere taşır**
> 

```
const { isOpen, open, close } = useToggle();
```

- Bileşen **nasıl çalıştığını bilmez**
- Sadece **kullanır**

---

## **🔹 useToggle örneğinde ne oluyor?**

### **Eskiden (kopyala-yapıştır ❌)**

- Her bileşende:
    - useState
    - open
    - close

### **Sonra (özel hook ile ✅)**

- Hepsi useToggle içinde
- Bileşenler sadeleşir

---

## **🔹 Ne işe yarıyor? (tek cümle)**

> Kod tekrarını azaltır, mantığı merkezileştirir ve projeyi temiz tutar.
> 

---

## **🔹 Neden önemli?**

✅ Avantajları:

- Daha az tekrar
- Daha okunabilir bileşenler
- Daha kolay bakım
- Mantık değişirse **tek yerden** düzeltirsin

---

## **🔹 Nedir, ne değildir?**

❌ Özel hook:

- UI çizmez
- JSX return etmez

✅ Özel hook:

- State yönetir
- Mantık taşır
- Değer + fonksiyon döndürür

---

## **🔹 useToggle özelinde özet**

> useToggle =
> 

> 
> 

> “Aç / kapa mantığını her yerde yeniden kullanabilmek”
> 

```
const { isOpen, open, close } = useToggle(true);
```

---

## **🔹 Ne zaman yazmalısın?**

✔ Şu soruyu sor:

> “Aynı state + logic’i 2–3 yerde yazıyor muyum?”
> 

Cevap **evet** → custom hook yaz

Cevap **hayır** → gerek yok

---

## **🔹 Mini ezber**

> Component = nasıl görünüyor
> 

> 
> 

> Custom hook = nasıl çalışıyor
> 

---