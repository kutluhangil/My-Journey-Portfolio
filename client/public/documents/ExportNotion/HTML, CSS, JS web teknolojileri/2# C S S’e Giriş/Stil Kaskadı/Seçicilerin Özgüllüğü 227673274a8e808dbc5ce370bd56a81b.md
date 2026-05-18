# Seçicilerin Özgüllüğü

Her CSS kuralı için tarayıcı, seçicinin özgüllüğünü (ağırlığını) hesaplar.

Bir öğeye farklı kurallardan özellikler uygulamanız gerektiğini ve öğenin çakışan özellikler içerdiğini, yani aynı olduklarını düşünün. tarayıcı özgüllüğü en yüksek olan kuralı tercih eder ve sayfada bu kuralın özellikleri görüntülenir.

Her seçicinin özgüllüğünü belirlemek için bir puanlama sistemi vardır. Sanki tarayıcı en az spesifik seçicilerin her birini 1 puanla ödüllendiriyor gibi. Daha spesifik bir seçici türü 10 puan değerindedir. Daha da spesifik bir seçici türü 100 puan alır ve en eşsiz olanı 1000 puan alır. Ve sonra belirli bir CSS kuralının kaç puana sahip olduğunu hesaplamanız ve sayfada bir gösterimle ödüllendirmeniz gerekir.

Özgüllük değeri dört rütbeden oluşur. Önemleri sağdan sola doğru artar, yani sol sütundaki 1, 1000 puanla aynıdır ve sağ sütundaki 1 bir kalır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/9d732c70-7be6-4e0c-b3dc-165b65fb95f6Untitled%20%2825%29.jpeg)

## **Seçicilerin Özgüllüğü Nedir?**

Bir HTML öğesine birden fazla CSS kuralı uygulanabilir.

Bu kurallar **aynı özelliği** (örneğin color, font-size, vb.) tanımlıyorsa, **hangisinin geçerli olacağına tarayıcı karar verir**.

İşte burada devreye **özgüllük (specificity)** girer.

Tarayıcı her CSS seçicisine bir “puan” verir. Bu puanlar, kuralın ne kadar “spesifik” (belirgin) olduğunu gösterir.

---

## **Özgüllük Puanlama Sistemi (Örnekli Açıklama)**

Özgüllük 4 basamaklı bir sayı gibi düşünülür:

**(a, b, c, d)** şeklinde okunur. Önem sırası soldan sağa:

| **Seçici Türü** | **Puan** | **Açıklama** |
| --- | --- | --- |
| !important | — | (özgüllükten bağımsız, en güçlüdür) |
| inline style (HTML’deki style=”…”) | a=1 | Çok güçlü |
| id seçicisi (#header) | b=1 | Oldukça güçlü |
| class, [attr], :hover | c=1 | Orta düzey |
| element veya type seçicisi (p, h1) | d=1 | En zayıf |

---

### **🧠 Örnekler:**

```
/* (0,0,0,1) → sadece bir etiket */
p {
  color: blue;
}

/* (0,0,1,0) → bir class */
.title {
  color: red;
}

/* (0,1,0,0) → bir id */
#main {
  color: green;
}
```

Bir <p> öğesi hem class="title" hem de id="main" içeriyorsa:

- #main → en yüksek özgüllüğe sahip (0,1,0,0)
- Bu yüzden color: green; uygulanır.

---

### **🔁 Kural:**

- **Daha yüksek özgüllük = daha güçlü kural**
- Özgüllük eşitse → **sayfada daha sonra yazılan** kural kazanır.

---

## **🎁 Kısa Özet**

> Eğer bir HTML öğesi için birden fazla CSS kuralı varsa ve bu kurallar aynı özelliği tanımlıyorsa,
> 
> 
> **tarayıcı “kimin sözü daha geçerli?” diye özgüllük puanlarına bakar.**
> 

> En yüksek puanı olan seçici kazanır, yani onun tanımladığı stil uygulanır.
>