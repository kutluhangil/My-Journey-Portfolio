# transition-duration özelliği

Geçiş süresi belirtilmezse, değerler animasyon olmadan anında değişecektir. `transition-duration` özelliği, geçişin gerçekleşmesi gereken süreyi belirtir.

Özelliğin değeri içinde belirtilir:

- saniye: `2s` veya `0,5s`
- milisaniye: `2000ms` veya `500ms`

Farklı özellikler farklı geçiş sürelerine sahipse, bunlar virgülle ayrılarak listelenir.

`.box {
  background-color: teal;
  transition-property: background-color;
  transition-duration: 1000ms;
}

.box:hover {
  background-color: orange;
}`

Etkileşimli örnekte, `transition-duration` özelliği için farklı zaman değerlerine sahip bir geçişin etkisini görün.

transition-duration değerlerinin doğru olduğu örnekleri seçin (4 doğru cevap)

transition-duration: 100ms;

transition-duration: 1s;

transition-duration: 1,5s;

transition-duration: 1.5s;

transition-duration: 100ms 1s 2s;

transition-duration: 100ms, 1s, 2s;

---

### **Doğru Olanlar:**

1. **transition-duration: 100ms;**
    
    ✔ Doğru — ms (milisaniye) cinsinden geçiş süresi tanımlanmış.
    
2. **transition-duration: 1s;**
    
    ✔ Doğru — s (saniye) cinsinden geçiş süresi tanımlanmış.
    
3. **transition-duration: 1.5s;**
    
    ✔ Doğru — Ondalık sayı noktayla (.) yazılmalı, bu doğru kullanım.
    
4. **transition-duration: 100ms, 1s, 2s;**
    
    ✔ Doğru — Birden fazla değer virgül (,) ile ayrılır, bu da geçerli bir tanım.
    

---

### **Yanlış Olanlar:**

- **transition-duration: 1,5s;**
    
    🚫 Yanlış — CSS’de **virgül (,) değil nokta (.)** ile ondalık yazılır. Bu yazım hatalıdır.
    
- **transition-duration: 100ms 1s 2s;**
    
    🚫 Yanlış — Değerler **virgül ile** ayrılmalı. Araya boşluk koymak geçerli değil.
    

---

### **Doğru Cevaplar (4 tane):**

- transition-duration: 100ms;
- transition-duration: 1s;
- transition-duration: 1.5s;
- transition-duration: 100ms, 1s, 2s;