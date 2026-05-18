# Özellik margin

`margin` bileşen özelliği, öğenin tüm kenarları için çerçeveden komşu öğelere kadar olan dış kenar boşluklarını kontrol eder. Sonuç, özelliğin kaç değerinin belirtildiğine bağlıdır.

`*/* Her tarafta 20px aynı girintiler */*margin: 20px;

*/* Üst ve alt girinti 10px, sol ve sağ girinti 20px */*margin: 10px 20px;

*/* Üstte 10px, solda ve sağda 20px, altta 5px girinti */*margin: 10px 20px 5px;

*/* Üstte 10px, sağda 15px, altta 20px, solda 25px girinti */*margin: 10px 15px 20px 25px;`

Kenar boşlukları, iki bitişik öğe arasında bir boşluk oluşturmak için kullanılır.

Örnekte, kartın her bir öğesinin renkli bir kenarlığı vardır, bu nedenle aralarında kenar boşlukları olduğunu görebilirsiniz.

**Bu tür kenar boşluklarını nasıl ayarlayabilirim?**

![Screen Shot 2025-07-14 at 00.07.23 AM.png](%C3%96zellik%20margin/Screen_Shot_2025-07-14_at_00.07.23_AM.png)

![Screen Shot 2025-07-14 at 00.07.46 AM.png](%C3%96zellik%20margin/Screen_Shot_2025-07-14_at_00.07.46_AM.png)

```
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  line-height: 1.5;
  color: #212121;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.post {
  padding: 20px;

  max-width: 400px;
  background-color: #fff;
  border: 2px dashed #2a2a2a;
}

.post-thumb {
  margin-bottom: 30px;
  border: 2px dashed tomato;
}

.post-heading {
  margin-top: 0;
  margin-bottom: 20px;

  border: 2px dashed teal;
}

.post-text {
  margin-bottom: 0;
  margin-top: 0;

  border: 2px dashed blue;
}
```

- `.post` seçicisinin bulunduğu kuralda, çerçeve ile içerik arasında bir kenar boşluğu oluşturmak için kartın dolgusunu ayarlıyoruz.
- `.post-thumb` seçicisinin bulunduğu kuralda, resim kabından başlığa kadar olan alt kenar boşluğunu ayarlarız.
- `.post-heading` seçicisini içeren kuralda, varsayılan üst kenar boşluğunu sıfırlayın ve alt kenar boşluğunu başlıktan paragrafa ayarlayın.
- `.post-text` seçicisinin bulunduğu kuralda, paragrafın varsayılan üst ve alt kenar boşluklarını sıfırlayın.

CSS düzenleyicisine aşağıdaki kenar boşluğu kurallarını ekleyin:

- `.page-header` alt kenar boşluğu 20 piksel, diğer kenarlar 0 piksel
- `.page-title` alt kenar boşluğu 24 piksel, diğer kenarlar 0 piksel
- Stil sayfasında `.page-header` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-header` seçicisine sahip CSS kuralının `margin` değeri `0 0 20px 0` olmalıdır.
- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `margin` değeri `0 0 24px 0` olmalıdır.

`.page-header {
padding-top: 16px;
padding-bottom: 16px;
background-color: #e0e0e0;
margin: 0 0 20px 0;
}`

`.page-nav {
padding: 0;
}`

`.page-nav .link {
text-decoration: none;
font-size: 14px;
text-transform: uppercase;
}`

`.page-title {
font-size: 32px;
text-align: center;
line-height: 1.333;
letter-spacing: 3px;
margin: 0 0 24px 0;`