# Dikey kenar boşluklarını daraltma

Komşu blok öğelerinin dikey kenar boşlukları birbirine eklenmez. Eğer `margin` özelliği farklı değerlerde iki öğe varsa, bu öğeler arasındaki mesafeyi belirlemek için en büyük `margin` değeri seçilir. Kenar boşluğu daraltması yalnızca blok öğeleri için geçerlidir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/45681615-bb46-4dbd-a1b1-3f38f3b19c6d%D0%BC%D0%B0%D1%80%D0%B6%D0%B8%D0%BD%2040.jpg)

`<div class="box top"></div>
<div class="box bottom"></div>`

Üst bloğu 20 piksellik bir alt `margin` ve alt bloğu 40 piksellik bir üst `margin` olarak ayarlayın.

Kenar boşluğu daraltması nedeniyle, aralarındaki mesafe `40px` olacaktır, çünkü en büyük `margin` değeri uygulanır.

`.box {
  width: 200px;
  height: 100px;
}

.top {
  margin-bottom: 20px;
  background-color: teal;
}

.bottom {
  margin-top: 40px;
  background-color: palevioletred;
}`