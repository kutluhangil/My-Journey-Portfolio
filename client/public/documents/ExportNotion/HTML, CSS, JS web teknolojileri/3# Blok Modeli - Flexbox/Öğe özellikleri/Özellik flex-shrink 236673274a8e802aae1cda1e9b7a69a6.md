# Özellik flex-shrink

`flex-grow` özelliğinin aksine, `flex-shrink` özelliği bir flex öğesinin orijinal boyutundan daha az yer kaplamasını (küçülmesini) tanımlar, yani öğenin son boyutunu etkiler.

`flex-shrink: değer;`

Değer bir oran (kesir, faktör) olarak belirtilir.

- Varsayılan olarak, tüm öğeler `1` olarak ayarlanır, bu da öğelerin gerektiği gibi sıkıştırılacağı anlamına gelir.
- `0` değeri, öğenin sıkıştırılmasını önleyecektir. Negatif değerler ayarlanamaz.

Pratikte, `flex-shrink` genellikle bir öğenin küçülmesini önlemek için kullanılır. Standart bir sorunu ele alalım: içinde iki öğe bulunan bir kap - arka plan görüntüsü olan bir simge gibi dekoratif bir öğe ve metin.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/51e0ea2b-2092-45d9-ba86-3248e8c23a42Frame%2048262.png)

`<div class="card">
  <span class="icon"></span>
  <p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum odio 
		harum! Nulla aliquid quasi facere atque, corrupti voluptatum cupiditate 
		placeat delectus, velit alias dicta praesentium iste amet eos vero.
	</p>
</div>`

`.card {
  display: flex;
  gap: 10px;
  width: 300px;
  border: 1px solid black;
  padding: 10px;
}

.icon {
  width: 40px;
  height: 40px;  
}`

Simgenin CSS'de açık bir yüksekliği ve genişliği vardır.

Ancak tarayıcıdaki sonuca bakalım - simge öğesi metinle birlikte sağa doğru sıkıştırılır, çünkü `flex-shrink: 1` özelliğine sahip olduğundan metin içerikli öğe satırda daha fazla yer kaplar ve simgeyi sıkıştırır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/dfdf5a57-b4c7-4f1e-a026-14109853d68eScreenshot%202023-03-29%20at%2014.53.39.png)

Simgenin orijinal genişliğini korumasını sağlamak için, `flex-shrink: 0` özelliğini kullanarak simgenin küçülmesini engelleyebilirsiniz. Bu durumda, simge 40 piksel genişliğinde kalır ve satırın geri kalanı metin tarafından doldurulur.

`.icon {
	flex-shrink: 0;
  width: 40px;
  height: 40px;
}`

![Screen Shot 2025-07-20 at 14.33.53 PM.png](%C3%96zellik%20flex-shrink/Screen_Shot_2025-07-20_at_14.33.53_PM.png)

### **Doğru Olanlar (4 tane)**

---

### **Hem flex-grow hem de flex-shrink özellikleri bir öğenin son boyutunu etkiler.**

✔️ **Doğru**

- Evet, ikisi de bir öğenin **nihai (son) boyutunu** etkiler:
    - flex-grow: Boş alan varsa büyütür.
    - flex-shrink: Alan dar ise küçültür.

---

### **Her iki özellik de, flex-grow ve flex-shrink, negatif değerlere sahip olamaz.**

✔️ **Doğru**

- Evet, her iki özellik de **0 veya pozitif değer** alabilir.
- Negatif değerler geçersizdir.

---

### **flex-shrink özelliğinin varsayılan değeri 1’dir.**

✔️ **Doğru**

- flex-shrink varsayılan olarak 1’dir.
- Yani öğeler, varsayılan durumda küçülmeye **izin verir**.

---

### **Tipik olarak, flex-shrink bir elemanın küçülmesini önlemek için kullanılır.**

✔️ **Doğru**

- Evet, eğer bir öğenin daralmasını istemiyorsan flex-shrink: 0 yaparsın.
- Yani bu özellik küçülme kontrolünü sağlar.

---

### **Yanlış Olanlar**

---

### **flex-shrink özelliği, bir flex öğesinin büyüme yeteneğini belirler.**

✖️ **Yanlış**

- Bu flex-grow’un görevidir.
- flex-shrink küçülmeyi kontrol eder, büyümeyi değil.

---

### **flex-shrink özelliğinin varsayılan değeri 0’dır.**

✖️ **Yanlış**

- Hayır, flex-shrink‘in **varsayılan değeri 1’dir**.
- 0 olursa, öğe daralmaz.

---

### **🎯 Sonuç —**

### **Doğru Seçenekler:**

1. ✅ Hem flex-grow hem de flex-shrink özellikleri bir öğenin son boyutunu etkiler.
2. ✅ Her iki özellik de, flex-grow ve flex-shrink, negatif değerlere sahip olamaz.
3. ✅ flex-shrink özelliğinin varsayılan değeri 1’dir.
4. ✅ Tipik olarak, flex-shrink bir elemanın küçülmesini önlemek için kullanılır.

---