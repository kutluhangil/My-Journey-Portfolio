# Global stil sıfırlama

Genellikle, tarayıcının stil sayfasındaki `margin` ve `padding` değerleri tasarımla eşleşmez ve bazılarına hiç gerek yoktur. Örneğin, başlıklar ve paragraflar genellikle yalnızca alt veya üst kenar boşluğuna ihtiyaç duyar ve her ikisi de varsayılan olarak ayarlanır.

Başlıklar için varsayılan kenar boşluğu değerlerine bir göz atın (*Örnek 1*):

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a07caf17-1da9-4882-a9d7-3008bfe0e2a3Screenshot%202023-03-20%20at%2014.58.45.png)

Ve paragraflar için varsayılan kenar boşluğu değeri (*Örnek 2*):

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/97df9797-83c0-4a54-be6a-381cf0d9f58aScreenshot%202023-03-20%20at%2016.23.13.png)

Listeler için standart `padding` ve `margin` genellikle gerekli değildir. Eğer standart `padding` özelliğini kaldırırsanız, liste işaretleyicileri kaybolacaktır. Ancak çoğu durumda, tasarım gereği bu boşluklara ihtiyaç duyulmaz ve `list-style-type` özelliği ile sıfırlanabilirler.

Stil yazarken, bu öğeler için her CSS kuralına sıfırlama veya geçersiz kılma değerleri eklemeniz gerekecektir.

# **Bu sorun nasıl çözülür?**

Tarayıcıların varsayılan değerlerini etiket seçiciler kullanarak global stillere sıfırlayabilirsiniz. Bu, kod tekrarlarının sayısını azaltacak ve sıfırlama değerlerini düzenlemenizi kolaylaştıracaktır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3ddd7416-7a9b-48e8-87d9-1be690a6d8fcScreenshot%202023-03-20%20at%2014.59.35.png)

`h1, h2, h3, h4, h5, h6, p {
	margin-top: 0;
	margin-bottom: 0;
}

ul, ol {
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
}`

Kurallardaki değerleri değiştirdiğinizde, stil kademelendirme mekanizması sayesinde her şey çalışacaktır.

## **💡 Tarayıcılar Neden Kendi Stillerini Kullanır?**

Her tarayıcı (Chrome, Safari, Firefox vs.), sen hiçbir CSS yazmasan bile HTML etiketlerine otomatik olarak **bazı stiller** uygular.

Bu stiller **tarayıcının kendi “varsayılan stil sayfası”** içindedir.

### **Örnekler:**

- <h1> etiketi genellikle büyük puntoludur ve **üstünde/altında boşluk (margin)** vardır.
- <p> paragraf etiketlerinin **altında otomatik boşluk** olur.
- <ul> veya <ol> listelerinde hem **iç boşluk (padding)** hem de **işaretçiler (bullet / sayı)** vardır.

---

## **🚫 Bu Ne Sorun Yaratır?**

Sen kendi web tasarımını yaparken bu otomatik boşluklar ve stiller:

- Tasarımını **bozabilir,**
- **Uymayan boşluklar** oluşturabilir,
- Her öğede tek tek margin: 0; padding: 0; yazmana neden olur (çok uğraştırır).

---

## **✅ Bu Sorunu Nasıl Çözeriz?**

İşte burada devreye **“global stil sıfırlama”** giriyor.

---

## **🔧 “Global Stil Sıfırlama” Ne Demek?**

Global stil sıfırlama demek, **bazı yaygın HTML etiketlerinin varsayılan stillerini tek seferde kaldırmak** demektir.

Örnek:

```
h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
  margin-bottom: 0;
}
```

Bu satır:

- Tüm başlık etiketlerinin (h1, h2…) ve paragrafın (p) **üst ve alt boşluklarını sıfırlar.**

Aynı şekilde:

```
ul, ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}
```

Bu satır:

- Sıralı (ol) ve sırasız (ul) listelerin **üst/alt boşluklarını sıfırlar.**
- **İç boşluklarını (padding)** da sıfırlar (bu, liste işaretlerini de kaldırır).

---

## **🧠 Neden Önemli?**

- Bu sıfırlama kurallarını başta yazarsan, **her etiketi tek tek düzeltmek zorunda kalmazsın.**
- Kod tekrarını **azaltır.**
- Tasarımı daha **kontrollü** ve **tutarlı** hale getirir.

---

## **🔀 Stil Kademelendirme (CSS cascade) Ne Demek?**

Metnin sonunda şu yazıyor:

> “Kurallardaki değerleri değiştirdiğinizde, stil kademelendirme mekanizması sayesinde her şey çalışacaktır.”
> 

Bu şu demek:

- Sen sıfırlama kurallarını yazarsın (örneğin margin: 0;)
- Ama sonradan bir öğeye özel başka bir margin verirsen, **o daha baskın olur ve çalışır.**

Yani CSS sıralamasına ve önem derecesine göre **en son yazılan veya daha özel olan kural kazanır.**

---

## **🟢 Özetle:**

| **Terim** | **Açıklama** |
| --- | --- |
| Varsayılan stiller | Tarayıcıların otomatik verdiği margin/padding gibi ayarlardır. |
| Global stil sıfırlama | Bu varsayılanları tek seferde sıfırlamak için kullanılan CSS kurallarıdır. |
| Kod tekrarını azaltma | Her öğeye tek tek sıfırlama yazmak yerine topluca yazılır. |
| Stil kademelendirme | CSS kuralları çakışırsa, hangisinin uygulanacağına karar veren sistemdir. |

---