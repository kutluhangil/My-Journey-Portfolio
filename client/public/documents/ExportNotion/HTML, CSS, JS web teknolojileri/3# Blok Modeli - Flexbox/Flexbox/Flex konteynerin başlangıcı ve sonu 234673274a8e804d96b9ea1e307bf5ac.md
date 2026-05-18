# Flex konteynerin başlangıcı ve sonu

Flexbox modeli, flex konteyner içindeki öğelerin sırasını tanımlamak için "start" ve "end" noktalarına sahiptir.

1. Eksenler (`main axis`, `cross axis`), öğelerin yerleştirildiği çizgileri tanımlar.
2. "start" ve "end" noktaları, ana veya çapraz eksen üzerindeki başlangıç ve bitiş noktalarıdır. Eksen üzerindeki ilk ve son elemanın nerede olacağını belirlerler.

Şimdi `main axis` ekseninin başlangıcına ve sonuna bakalım

- **main-start** ve **main-end** - konteynerdeki elemanlar her zaman `main-start` (ana eksenin başlangıcı) ile `main-end` (ana eksenin sonu) arasında yer alır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/0ee9c9f3-8b70-473d-a268-2ee68f1514f732.jpg)

Cross-start ve cross-end nedir?

- **Cross-start** ve **cross-end**, eleman sıralarının bulunduğu çapraz eksenin başlangıcı ve sonudur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/068516e3-2d98-43b5-9ef7-992b545cae8431.jpg)

Başlangıcın her zaman sol üstte ve bitişin her zaman sağ altta olduğunu varsaymayın. Herhangi bir eleman sırası yapılandırılabilir - soldan sağa veya sağdan sola, yukarıdan aşağıya veya aşağıdan yukarıya. Başlangıç ve bitiş noktaları doğrudan eksenlerin yönüne bağlıdır.

## **🧭 1. Flexbox’ta “Eksen” Ne Demek?**

Flexbox sisteminde 2 tür **eksen (axis)** vardır:

- **Main axis (ana eksen)**: Öğelerin **yerleştirildiği yön**.
    - Eğer flex-direction: row; ise, main axis yatay olur (soldan sağa).
    - Eğer flex-direction: column; ise, main axis dikey olur (yukarıdan aşağıya).
- Cross axis (çapraz eksen): Ana eksene dik olan eksen.
    - row için dikey eksen.
    - column için yatay eksen.

---

## **🚩 2. “Start” ve “End” Ne Demek?**

Flexbox, elemanları bir eksen boyunca sıralarken **başlangıç (start)** ve **bitiş (end)** noktalarını kullanır.

### **Main-start / Main-end:**

- main-start: Ana eksenin başlangıç noktası.
- main-end: Ana eksenin bitiş noktası.

Örnek:

```
flex-direction: row;
```

Bu durumda:

- main-start: Sol taraf
- main-end: Sağ taraf
    
    Yani öğeler soldan sağa sıralanır.
    

Ama:

```
flex-direction: row-reverse;
```

Bu durumda:

- main-start: Sağ taraf
- main-end: Sol taraf
    
    Yani öğeler sağdan sola sıralanır.
    

---

### **Cross-start / Cross-end:**

- cross-start: Çapraz eksenin (main axis’e dik olan eksen) başlangıcı.
- cross-end: Çapraz eksenin sonu.

Örnek:

```
flex-direction: row;
```

Main axis yatay → cross axis dikeydir.

- cross-start: Üst taraf
- cross-end: Alt taraf

Ama:

```
flex-direction: column;
```

Main axis dikey → cross axis yatay olur.

- cross-start: Sol taraf
- cross-end: Sağ taraf

---

## **🧠 Önemli Not:**

> Start
> 
> 
> **end**
> 

Yönlendirmeye (flex-direction, writing-mode, direction) göre **start** ve **end** noktaları değişebilir.

---

## **🖼️ Gözünde Canlandır**

Diyelim ki flex-direction: row;

```
main-start --------------------------> main-end
  [item1][item2][item3]
cross-start (üst)
|
|
↓
cross-end (alt)
```

Ama flex-direction: column; olursa:

```
cross-start →
[item1]
[item2]
[item3]
↓
main-end (aşağı)
```

---

## **Özetle:**

- **Main axis**: Elemanların sıralandığı ana yön.
- **Cross axis**: Ana yöne dik yön.
- **Start / End**: Eksen yönüne göre başlangıç ve bitiş noktalarıdır.
- Bu noktalar sabit değil, **flex-direction ve yazı yönü (LTR, RTL)** gibi ayarlarla değişir.

İstersen bu konuyu bir örnekle HTML + CSS üzerinden de gösterebilirim.

## **✅ HTML Kodu:**

```
<div class="flex-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

## **🎨 CSS örnek 1:**

## **flex-direction: row**

```
.flex-container {
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 150px;
  background-color: #eee;
  border: 2px dashed gray;
}

.item {
  background-color: steelblue;
  color: white;
  padding: 20px;
  margin: 5px;
  text-align: center;
}
```

### **📊 Görsel Anlamı:**

```
main-start →→→→→ main-end
 [ 1 ] [ 2 ] [ 3 ]

cross-start (üst)
|
|
↓
cross-end (alt)
```

- **flex-direction: row** → Elemanlar **soldan sağa** dizilir.
- main-start: Sol
- main-end: Sağ
- cross-start: Üst
- cross-end: Alt

---

## **🎨 CSS örnek 2:**

## **flex-direction: column-reverse**

```
.flex-container {
  display: flex;
  flex-direction: column-reverse;
  width: 150px;
  height: 300px;
  background-color: #eee;
  border: 2px dashed gray;
}
```

### **📊 Görsel Anlamı:**

```
cross-start → (sol)
↓
cross-end → (sağ)

main-end ↑
 [ 1 ]
 [ 2 ]
 [ 3 ]
main-start ↓
```

- **flex-direction: column-reverse** → Elemanlar **aşağıdan yukarıya** dizilir.
- main-start: Alt
- main-end: Üst
- cross-start: Sol
- cross-end: Sağ

---

## **📎 Not:**

Flexbox’ta bu kavramlar genellikle şu amaçla kullanılır:

- justify-content: Ana eksen boyunca hizalama (main axis)
- align-items: Çapraz eksen boyunca hizalama (cross axis)

---

## **İstersen Kendin Deneyebilirsin!**

Bunu [https://codepen.io](https://codepen.io/) ya da [https://jsfiddle.net](https://jsfiddle.net/) gibi bir sitede test edebilirsin. Ben de senin için bir örnek link hazırlamamı ister misin?

Ya da row-reverse ve column gibi diğer yönleri de örnekleyebilirim.