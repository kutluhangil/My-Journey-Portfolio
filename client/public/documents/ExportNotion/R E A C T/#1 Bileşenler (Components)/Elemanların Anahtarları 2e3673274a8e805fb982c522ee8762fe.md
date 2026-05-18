# Elemanların Anahtarları

Bu örnek çalıştırıldığında, liste elemanları için bir "anahtar" (key) gerektiğine dair bir uyarı alabilirsiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/dbe36fce-c938-4dd3-adb4-8f2e687a41e2Screenshot%202023-12-06%20at%2020.02.13.png)

```
 “Anahtar (key), koleksiyon öğeleri oluşturulurken her bir öğeye atanması gereken özel bir prop’tur.”

```

React, listelerdeki öğelerin hangi sırayla güncellenmesi gerektiğini anlamak için anahtarları kullanır. Anahtarlar, performansı optimize eder ve React'e hangi öğelerin değiştiğini bildirir.

Anahtarların iki temel özelliği olmalıdır:

- **Eşsiz** — bir öğenin anahtarı yalnızca tek bir koleksiyon içinde eşsiz olmalıdır. Küresel olarak eşsiz anahtarlar anlam ifade etmez.
- **Kararlı** — Anahtar, öğelerin sırası değişse bile aynı kalmalıdır.

Bazı anahtar seçimlerinden kaçınmalısınız:

- **Dizi indeksleri** eşsizdir, ancak kararlı değildir; öğelerin silinmesi veya karıştırılması durumunda indeksler değişir.
- **Tarih ve saat** eşsizdir, fakat kararlı değildir çünkü sürekli artmaktadır. Bu nedenle, her renderda yeni anahtarlar oluşturulur.
- **Rastgele sayı** kullanımı, anahtarın hem kararlı hem de eşsiz olması gerekir, rastgele sayılar bu gereksinimi karşılamaz.

En iyi anahtar belirleme yöntemi, listedeki öğeyi diğerlerinden ayırt eden statik bir dize kullanmaktır. Genellikle, veritabanı tarafından oluşturulan nesne tanımlayıcıları kullanılır; bu, sürekli ve değişmez değerlere tekabül eder. Ancak, herhangi bir nesnenin eşsiz bir özelliğinden elde edilen başka bir eşsiz değer de uygundur.

```
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

const BookList = ({ books }) => {
  return (
		<ul>
			{books.map((book) => {
			  return <li key={book.id}>{book.name}</li>;
			})}
		</ul>
  );
};

const App = () => {
  return (
    <>
			<h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};
```

Eğer dizide benzersiz bir özellik yoksa ve liste sıralanmıyor veya öğeler silinmiyorsa, dizi indekslerini anahtar olarak kullanabilirsiniz. Ancak bu, önerilen bir yöntem değildir.

```
const favouriteBooks = [
  { name: "JS for beginners" },
  { name: "React basics" },
  { name: "React Router overview" }
];

const BookList = ({ books }) => (
  <ul>
		{books.map((book, index) => {
		  return <li key={index}>{book.name}</li>;
		})}
  </ul>
);
```

`Dizi indekslerini anahtar olarak kullanmak, en son tercih edilmesi gereken bir yöntemdir. Çoğu durumda, veriler benzersiz tanımlayıcılara sahiptir ve bunlar kullanılmalıdır.`

---

## **🔑 “key” NEDİR? (Çok kısa tanım)**

**key**, React’te **liste halinde render edilen elemanları ayırt etmek** için kullanılan **özel bir prop**tur.

> React’e şunu söyler:
> 

> “Bu eleman bu, şu eleman şu.”
> 

---

## **🤔 React NEDEN key’e ihtiyaç duyar?**

Şuna bakalım:

```
<ul>
  <li>Elma</li>
  <li>Armut</li>
  <li>Muz</li>
</ul>
```

Bu liste **sonradan değişirse** (ekleme, silme, sıralama):

- React hangisinin **değiştiğini**
- hangisinin **aynı kaldığını**
- hangisinin **silindiğini**

**bilemez**, eğer bir ayırt edici işaret yoksa.

👉 İşte bu ayırt edici işaret **key**’dir.

---

## **🧠 React key’leri NASIL kullanır? (Mantık)**

React içinden şöyle düşünür:

> “Önceki render’da key=3 vardı
> 

> Yeni render’da da key=3 var
> 

> → Demek ki bu
> 
> 
> **aynı eleman**
> 

Key yoksa:

- React tahmin yapar
- Yanlış güncelleme olur
- Performans düşer
- Hatalı UI oluşabilir

---

## **✅ DOĞRU key nasıl olmalı?**

Bir key **iki şartı** sağlamalı:

### **1️⃣ EŞSİZ (unique)**

- Aynı liste içinde **iki eleman aynı key’e sahip olamaz**

### **2️⃣ KARARLI (stable)**

- Renderlar arasında **değişmemeli**

---

## **✅ EN DOĞRU KULLANIM (id ile)**

```
const books = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
);
```

🔹 id

- eşsiz ✔
- değişmez ✔
- **en ideal key** ✔

---

## **❌ NEDEN bazı key’ler KÖTÜ?**

### **❌ Dizi index’i (**

### **index**

### **)**

```
<li key={index}>...</li>
```

📌 Sorun:

- Eleman silinirse
- Sıralama değişirse

👉 index’ler kayar → React **yanlış elemanı günceller**

🔴 Bu yüzden **son çare** olarak kullanılır.

---

### **❌ Date / Math.random()**

```
<li key={Math.random()}>...</li>
```

📌 Sorun:

- Her render’da **yeni key**
- React tüm listeyi baştan render eder

🔴 Performans felaketi

---

## **⚠️ Ne zaman index KULLANILABİLİR?**

**Sadece şu durumda:**

- Liste **asla değişmiyorsa**
- Ekleme / silme / sıralama yoksa

```
const books = ["JS", "React", "Node"];

books.map((book, index) => (
  <li key={index}>{book}</li>
));
```

Ama yine de:

> ❗
> 
> 
> **Önerilmez**
> 

---

## **🧩 Kısa Özet Tablosu**

| **Key Türü** | **Kullanım** | **Neden** |
| --- | --- | --- |
| id | ✅ En iyi | Eşsiz + Kararlı |
| Benzersiz string | ✅ İyi | Değişmiyor |
| index | ⚠️ Son çare | Sıralama bozulur |
| Math.random() | ❌ Kötü | Her render değişir |
| Date.now() | ❌ Kötü | Kararlı değil |

---

## **🧠 Tek Cümlelik Özet**

> key
> 
> 
> **hangi elemanın hangisi olduğunu**
> 

> En iyi key:
> 
> 
> **veriden gelen değişmeyen id**
> 

---