# Çok sayıda medya isteği

İstediğiniz kadar medya sorgusu kullanabilirsiniz. Kesme noktalarının sayısı tasarıma bağlıdır. Tarayıcı, her medya sorgusunun koşullarını kontrol eder ve uygun stilleri uygular.

`body {
  background-color: white;
}

*/* Görüntü alanının genişliği 600 pikselden az olduğunda kullanılır */*@media (max-width: 600px) {
  body {
    background-color: green;
  }
}

*/* Görüntü alanının genişliği 800 pikselden fazla olduğunda kullanılır */*@media (min-width: 800px) {
  body {
    background-color: orange;
  }
}`

Görünüm alanının genişliği için bu kodla:

- 600 piksele kadar, arka plan yeşil olacaktır
- 800 pikselden sonra - arka plan turuncu olacaktır.

601px ila 799px aralığında arka plan rengi beyazdır. Hiçbir medya sorgusu olmadığı için arka plan varsayılan değeri alacaktır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ab4e114b-7707-40fc-bfd4-19131a24f6a2Screenshot%202023-05-20%20at%2016.08.13.png)

Aşağıdaki canlı örnekte, arka plan rengi 600 ve 800 piksel kesme noktalarına sahip medya sorgularında belirtilen görüntü alanının genişliğine bağlı olarak değişecektir.

# **Rengin farklı ekran genişlikleri için değiştiğini nasıl kontrol edebilirim?**

[Bağlantı](https://codepen.io/goit-academy/full/WNaYaPp) adresine gidin ve goit sayfası örneğinde gösterildiği gibi duyarlı düzen için geliştirici araçlarını kullanın:

- geliştirici araçlarını açın (Windows ve Linux için **Ctrl + Shift + I**, macOS için **cmd + Shift + I**).
- Toggle device araç çubuğunu etkinleştirmek için `1` simgesine tıklayın (yukarıdaki şemaya bakın). Bu moddan çıkmak için `1` simgesine tekrar tıklayın.
- Görüntü alanının genişliğini basitçe esneterek değiştirin. Bunu yapmak için `2` kontrolünü kullanın. Etki, tarayıcı penceresinin gerilmesi veya sıkıştırılması ve böylece görüntü alanının genişliğinin değiştirilmesi gibidir.

CSS düzenleyicisinde iki medya sorgusu ekleyin:

- İlk medya sorgusu, ekran genişliği `600px` veya daha küçük olduğunda çalışacak ve `text` sınıfına sahip öğenin arka plan rengini `green` olarak değiştirecektir.
- İkinci medya sorgusu, ekran genişliği `800px` veya daha büyük olduğunda çalışacak ve `text` sınıfına sahip öğenin arka plan rengini `yellow`olarak değiştirecektir.
- Kodda medya sorgularının dışında bir `.text` sınıfına ait bir CSS kuralı bulunmalıdır.
- `.text` sınıfına ait kuralın `font-family` özelliği `sans-serif` olarak ayarlanmalıdır.
- `.text` sınıfına ait kuralın `line-height` özelliği `1.5` olarak ayarlanmalıdır.
- `.text` sınıfına ait kuralın `color` özelliği `black` olmalıdır.
- Kod, `max-width` özelliğini kullanan bir medya sorgusu içermelidir.
- Ekran genişliği `600px`e kadar olduğunda `max-width` özelliğini kullanan medya sorgusu devreye girmelidir.
- Ekran genişliği `600px`e kadar çıktığında, `text` sınıfına sahip öğenin arka plan rengi `green`ayarlanmalıdır.
- Kod, `min-width` özelliğini kullanan bir medya sorgusu içermelidir.
- Ekran genişliği `800px`den büyük olduğunda `min-width` özelliğini kullanan medya sorgusu devreye girmelidir.
- Ekran genişliği `800px`ten büyük olduğunda, `text` sınıfına sahip öğenin arka plan rengi `yellow` olarak değiştirilmelidir.
    
    ![Screen Shot 2025-08-06 at 00.56.34 AM.png](%C3%87ok%20say%C4%B1da%20medya%20iste%C4%9Fi/Screen_Shot_2025-08-06_at_00.56.34_AM.png)