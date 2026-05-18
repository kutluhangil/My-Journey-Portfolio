# Or operatör

**`Or`** operatörü, en az biri doğruysa medya sorgusunun yürütüleceği bir dizi ifade belirtmenize olanak tanır. Örneğin, `600px` öncesi veya `900px` sonrası aralığında aynı stilleri uygulamanız gerekir. Mantıksal operatör veya kodda virgül (,) olarak yazılır.

`@media screen and (max-width: 600px), (min-width: 900px) {
  body {
    background-color: orange;
  }
}`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/cb178a90-bf42-4607-bebd-822c1a80a1a2image%20%2859%29.png)

Bunun sadece stilleri uygulaması gereken bir dizi medya sorgusunun listesi olduğunu görebilirsiniz. Bunları iki farklı medya sorgusu olarak yazabilirsiniz. Ancak o zaman stil kodu yinelenecektir.

`@media (max-width: 600px) {
  body {
    background-color: orange;
  }
}

@media (min-width: 900px) {
  body {
    background-color: orange;
  }
}`

```
Değer aralıklarını doğru okumanıza yardımcı olacak bir sır var: max-width'i "TO" kelimesiyle değiştirin min-width - "FROM" kelimesi ile

```

Yani, yukarıdaki medya sorguları örneği şu şekilde okunabilir:

- 600px'e kadar olan aralıkta
- 900px'den sonra

CSS düzenleyicide, `text` sınıfına sahip öğenin metninin rengi `500px`den küçük veya `800px`den büyük olduğunda `teal` değerini alacak medya sorgusunun kodunu ekleyin.

- Kodda medya sorgusunun dışında bir `.text` seçicisine sahip bir kural bulunmalıdır.
- Kod, gekran genişliği `500px`den az veya `800px`den fazla olduğunda çalıştırılan bir medya sorgusu içermelidir.
- Ekran genişliği `500px`den az veya `800px`den fazla olduğunda, `text` sınıfına sahip öğenin metin rengi `teal` değerini almalıdır.
    
    ![Screen Shot 2025-08-06 at 01.28.54 AM.png](Or%20operat%C3%B6r/Screen_Shot_2025-08-06_at_01.28.54_AM.png)