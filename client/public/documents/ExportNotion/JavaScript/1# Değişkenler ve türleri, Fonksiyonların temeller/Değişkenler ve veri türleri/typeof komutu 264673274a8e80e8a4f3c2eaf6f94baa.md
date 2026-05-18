# typeof komutu

`typeof` komutu, bir değerin veya ifadenin veri türünü belirlemek için kullanılır.

`typeof operand`

`typeof` komutunda, **operand** olarak türünü belirlemek istediğiniz bir değişken, sabit (değişmez) ya da ifade kullanılır.

Komutun sonucu, veri türünü belirten bir **string** değerdir.

`const quantity = 17;
console.log(typeof quantity); *// yanıt "number"*

const message = "JavaScript is awesome!";
console.log(typeof message); *// yanıt "string"*

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); *// yanıt "boolean"*

let username;
console.log(typeof username); *// yanıt "undefined"*

let status = null;
console.log(typeof status); *// yanıt "object"*`

`null` değerinin türünü ve anlamını doğru kavramak önemlidir. `null`, bir nesne değil, **primitive (ilkel)** bir değerdir.

Ancak `typeof` operatörü ile `null` değerinin türünü kontrol ettiğinizde, **"object"** sonucunu alırsınız. Bu durum kafa karıştırıcı olabilir, çünkü `null` aslında bir nesne değil, **değerin yokluğunu** ifade eder.

Bu durumun nedeni, JavaScript'in ilk sürümlerinde `null`'un bir nesnenin özel bir durumu olarak tanımlanmış olmasıdır. Daha sonra bu tasarım hatası fark edilse de, geriye dönük uyumluluk sağlamak amacıyla bu davranış korunmuştur.

Bu detay, özellikle teknik mülakatlarda sıkça sorulan bir konudur.

---

### **🧸 Haydi hayal edelim:**

Bir sürü kutun var. Bu kutuların içine farklı şeyler koyuyorsun:

- Bir kutuya **elma sayısı** koydun → sayı (**number**)
- Bir kutuya **isim yazdın** → yazı (**string**)
- Bir kutuya **evet/hayır cevabı** koydun → doğru/yanlış (**boolean**)
- Bir kutuya **hiçbir şey koymadın** → boş (**undefined**)
- Bir kutuya bilerek **“şu an boş bıraktım” yazısı** koydun → null (**null**)

Şimdi sen kutuların içine bakmak istemiyorsun, sadece “bu kutunun içinde ne tür şey var?” diye merak ediyorsun.

Bunun için bir **dedektör makinen** var:

👉 Bu makine typeof

---

### **🔍 typeof nasıl çalışıyor?**

- typeof 17 → "number"
- typeof "JavaScript" → "string"
- typeof false → "boolean"
- typeof undefined → "undefined"
- typeof null → "object" 🤔

---

### **🤯 Peki neden**

### **null**

### **için “object” diyor?**

Çünkü JavaScript’in **çok eski zamanlarında** (1995, ilk sürüm) null aslında “boş nesne” gibi düşünülmüştü.

Sonra fark ettiler ki bu mantıklı değil çünkü null aslında **hiçlik** demekti. Ama **milyonlarca kod** zaten yazılmıştı.

O yüzden geriye dönük uyumluluk için **“hata ama artık değiştiremeyiz”** dediler.

---

### **📝 Basit Özet**

- typeof = “Kutunun içinde ne tür şey var?” diye soran makine.
- null aslında **hiçlik**, ama typeof null = "object" çünkü **tarihi bir hata**.
- Bunu bilmek önemli çünkü **mülakatlarda çok sorulur**:
    
    > “typeof null neden object döner?”
    > 
    
    > 👉 Cevap: JavaScript’in ilk sürümünden kalma bir tasarım hatası, uyumluluk için değiştirilmedi.
    > 

---