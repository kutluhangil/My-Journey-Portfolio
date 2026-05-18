# Ofset

`translateX(tx)`, `translateY(ty)` ve `translate(tx, ty)` işlevleri, öğeyi orijinal konumuna göre yatay (X ekseni) ve/veya dikey (Y ekseni) yönlerde hareket ettirir.

- X'in pozitif değerleri öğeyi sağa, negatif değerleri ise — sola taşır.
- Y'nin pozitif değerleri öğeyi aşağı, negatif değerleri ise — yukarı hareket ettirir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/ba4c41ee-eb56-405b-837a-bd922acb05e3Frame%2048414.jpg)

Değerler piksel veya yüzde cinsinden olabilir. Değer bir yüzde ise, taşıdığınız öğenin boyutundan hesaplanır.

`.box {
  transform: translate(100px, 200px);
}`

![Screen Shot 2025-07-26 at 17.48.57 PM.png](Ofset/Screen_Shot_2025-07-26_at_17.48.57_PM.png)