# Prototip zincirleri

Bir nesnenin diğer bir nesne için prototip olması durumunda, prototipin de kendi prototipi olabilir. Dolayısıyla, prototip zincirleri mevcuttur.

![Screen Shot 2025-12-25 at 00.28.25 AM.png](Prototip%20zincirleri/Screen_Shot_2025-12-25_at_00.28.25_AM.png)

Hadi bunu kodda gerçekleştirelim. Prototip zinciri sağdan sola doğru inşa edilir.

```
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
```

- `objC` nesnesini oluşturuyoruz.
- Ardından `objB` nesnesini oluşturuyoruz ve onu prototip olarak `objC` olarak ayarlıyoruz.
- Bundan sonra `objA` nesnesini oluşturuyoruz ve onu prototip olarak `objB`olarak ayarlıyoruz.

En basit şekilde bakma yöntemi:

1. Geliştirici konsolunda `objA` nesnesini göster.
2. Özellikleri aç.
3. Yapıya bak.

Bu yapı kesinlikle prototip zincirini yansıtıyor.

![Screen Shot 2025-12-25 at 00.28.50 AM.png](Prototip%20zincirleri/Screen_Shot_2025-12-25_at_00.28.50_AM.png)

```
objC nesnesinin [[Prototype]] özelliği neyi gösterir, bu konuya daha sonra biraz daha bakacağız. Bu, üzerinde durulması gereken ayrı bir konudur.

```

`objA`, `objB` ve `objC` nesneleri prototip zincirinde bağlı oldukları için, `objA` nesnesi `objB` ve `objC` nesnelerinin özelliklerine erişebilir, `objB` nesnesi ise `objC` nesnesinin özelliklerine erişebilir.

```
console.log(objA.hasOwnProperty("a")); // true
console.log(objA.a); // "objA prop"

console.log(objA.hasOwnProperty("b")); // false
console.log(objA.b); // "objB prop"

console.log(objA.hasOwnProperty("c")); // false
console.log(objA.c); // "objC prop"

console.log(objA.hasOwnProperty("x")); // false
console.log(objA.x); // undefined
```

Arama özellikleri ilk eşleşmeye kadar gerçekleşir. Yorumlayıcı, bir özellik adına göre nesnede özellik arar:

- Yorumlayıcı kendi özelliğini bulamazsa, `[[Prototype]]` özelliğine başvurur; yani, prototip nesnesine bir referansla geçer ve ardından zincir boyunca prototipin prototipine gider.
- Yorumlayıcı zincirin sonuna ulaşır ve böyle bir isimle özellik bulamazsa, `undefined` olarak döner.

```
const apartment = {
	rooms: 4,
	floor: 2,
	taxFree: false
};

const condo = Object.create(apartment);
condo.rooms = 3;
```

Örnek:

```
const apartment = {
	rooms: 4,
	floor: 2,
	taxFree: false
};

const condo = Object.create(apartment);
condo.rooms = 3;
```

Doğru cevap: **3** ✔️

---

### **🔍 Neden?**

```
const condo = Object.create(apartment);
condo.rooms = 3;
```

- condo → **yeni bir nesne**
- apartment → condo’nun **prototipi**
- condo.rooms = 3 →
    
    rooms özelliği **condo’nun kendi özelliği** olarak eklenir
    

---

### **🔎 Özellik Arama Sırası**

JavaScript bir özelliğe erişirken şuna bakar:

1. **Önce kendi üzerinde**
2. Bulamazsa → **prototipine**
3. Bulamazsa → undefined

```
condo.rooms; // 3
```

➡️ Çünkü condo üzerinde **kendi rooms özelliği vardır**

---

### **🧠 Seçeneklerin Analizi**

| **Seçenek** | **Doğru mu** | **Neden** |
| --- | --- | --- |
| 3 | ✅ | Kendi özelliği |
| 4 | ❌ | Prototipte ama ezildi |
| undefined | ❌ | Özellik mevcut |

---

Eğer bir nesnenin özelliğine erişilirken undefined değeri döndürülüyorsa ne zaman olur?

Nesnede böyle bir özellik bulunmuyorsa

Prototipte böyle bir özellik bulunmuyorsa

Nesnede ve onun prototipte böyle bir özellik bulunmuyorsa

Doğru cevap: **Nesnede ve onun prototipte böyle bir özellik bulunmuyorsa** ✔️

---

### **🔍 Neden?**

JavaScript bir özelliğe erişirken şu sırayı izler:

1. **Önce nesnenin kendisine bakar**
2. Bulamazsa → **prototipine bakar**
3. Prototipte de yoksa → **undefined döner**

```
obj.someProp; // undefined
```

➡️ Bu ancak **hiçbir yerde yoksa** olur

---

### **🧠 Seçeneklerin Analizi**

| **Seçenek** | **Doğru mu** | **Neden** |
| --- | --- | --- |
| Nesnede böyle bir özellik bulunmuyorsa | ❌ | Prototipte olabilir |
| Prototipte böyle bir özellik bulunmuyorsa | ❌ | Nesnede olabilir |
| Nesnede ve onun prototipte böyle bir özellik bulunmuyorsa | ✅ | İşte bu durum |

---