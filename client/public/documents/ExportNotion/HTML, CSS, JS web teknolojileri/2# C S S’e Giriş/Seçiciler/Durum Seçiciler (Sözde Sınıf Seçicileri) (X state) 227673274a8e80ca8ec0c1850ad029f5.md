# Durum Seçiciler (Sözde Sınıf Seçicileri) (X:state)

Durum seçicileri (sözde sınıflar), etkileşimli öğelere (kullanıcı tarafından etkileşimde bulunulabilen öğeler) stil uygulamak için kullanılır. Stil, öğeye belirli bir etkileşim durumunda, örneğin bir bağlantının üzerine gelindiğinde veya klavye ile odaklanıldığında uygulanır.

`*/* ✅ */*
selector:pseudo-class {
  */* Özellikler */*
}

*/* ✅ */*
selector:pseudo-class {
  */* Properties */*
}

*/* ❌ */*
selector :pseudo-class {
  */* Özellikler */*
}

*/* ❌ */*
selector :pseudo-class {
  */* Properties */*
}`

Bir sözde sınıf, bir öğenin belirli bir durumunu tanımlar ve genellikle bir etiket veya sınıf seçicisinin sonuna eklenir. Aşağıdaki bölümlerde, en yaygın kullanılan sözde sınıflardan bazılarına daha yakından bakacağız.

```
Seçici ile sözde sınıf arasında boşluk bırakmak gerekmez. Boşluk bırakıldığında, sözde sınıf tüm öğelere uygulanır, bu da istenmeyen sonuçlara yol açabilir.
```

---

## **🎯 Konu ne?**

**Sözde sınıf seçiciler (pseudo-class selectors)**, bir HTML öğesinin **belirli bir durumuna** göre (fareyle üzerine gelme, seçilme, odaklanma gibi) CSS stili vermeni sağlar.

Yani bu seçiciler, “öğe bu haldeyken” diye düşünebilirsin.

---

## **✅ Doğru yazım şekli:**

```
a:hover {
  color: red;
}
```

Bu ne demek?

👉 <a> etiketi (yani link) üzerine **fareyle gelindiğinde**, yazı rengi kırmızı olacak.

> ❗ Dikkat: : işaretinden
> 
> 
> **önce boşluk yok!**
> 

---

## **❌ Hatalı yazım neden işe yaramaz?**

```
a :hover {
  color: red;
}
```

Bu CSS ne anlama gelir biliyor musun?

👉 a etiketinin **içindeki** bir öğeye :hover durumu uygulanacak.

Ama <a> genelde içinde başka bir şey barındırmaz.

Yani bu CSS işe yaramaz çünkü :hover durumuna sahip iç öğe yok!

---

## **📌 Sözde sınıf neden kullanılır?**

Şöyle düşünebilirsin:

HTML elemanları **normalde sabittir**, ama kullanıcı bazı şeyler yaparsa bu öğeler **bir duruma girer**.

### **Örnek durumlar:**

| **Sözde Sınıf** | **Anlamı** |
| --- | --- |
| :hover | Fareyle üzerine gelinirse |
| :focus | Klavye ile seçilirse (mesela input alanı) |
| :checked | Checkbox işaretlenirse |
| :disabled | Pasif hale gelirse |
| :active | Üzerine tıklanırsa (mouse basılıyken) |

---

## **🧠 Akılda kalması için ipucu:**

> Yazım şekli:
> 

> seçici:sözde-sınıf
> 

> Yani
> 
> 
> **iki şeyin arasına boşluk yok!**
> 

```
button:focus { ... }     ✅ doğru
button :focus { ... }    ❌ yanlış
```

---

## **👨‍💻 Kısa HTML + CSS örneği:**

```
<button>Gönder</button>
```

```
button {
  background-color: gray;
}

button:hover {
  background-color: green;
}

button:focus {
  outline: 2px solid blue;
}
```

Bu ne yapar?

- Normalde gri düğme gösterir.
- Üzerine fareyle gelince yeşil olur.
- Klavye ile seçilince (örneğin tab tuşu ile) mavi çerçeve çıkar.

---

## **🔚 Özet:**

| **Kural** | **Açıklama** |
| --- | --- |
| selector:pseudo-class | ✅ Doğru kullanım (boşluk yok) |
| selector :pseudo-class | ❌ Yanlış kullanım (boşluk varsa CSS başka anlam çıkarır) |

---

[**Pseudo sınıf : hover**](Durum%20Se%C3%A7iciler%20(S%C3%B6zde%20S%C4%B1n%C4%B1f%20Se%C3%A7icileri)%20(X%20state)/Pseudo%20s%C4%B1n%C4%B1f%20hover%20227673274a8e8036bb6fd3992af978d8.md)

[**Pseudo-class :active**](Durum%20Se%C3%A7iciler%20(S%C3%B6zde%20S%C4%B1n%C4%B1f%20Se%C3%A7icileri)%20(X%20state)/Pseudo-class%20active%20227673274a8e8013b2c9e2fca05b9cb0.md)

[**Pseudo-class:focus**](Durum%20Se%C3%A7iciler%20(S%C3%B6zde%20S%C4%B1n%C4%B1f%20Se%C3%A7icileri)%20(X%20state)/Pseudo-class%20focus%20227673274a8e807595d4c2981f9432a6.md)