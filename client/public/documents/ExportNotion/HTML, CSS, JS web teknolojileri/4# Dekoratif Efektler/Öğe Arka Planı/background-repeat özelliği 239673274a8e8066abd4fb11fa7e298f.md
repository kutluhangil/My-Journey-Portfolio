# background-repeat özelliği

`background-repeat` özelliği, arka plan görüntüsünün tekrarlanmasını kontrol eder. Varsayılan olarak, yatay (X) ve dikey (Y) olarak tekrarlanır. Bu, görüntü üst öğe boyutundan küçükse gerçekleşir.

`background-repeat: repeat | repeat-x | repeat-y | no-repeat`

- `repeat` — X ve Y'yi tekrarlayın. Varsayılan değerler.
- `repeat-x` — sadece X, yani yatay olarak tekrarla.
- `repeat-y` — sadece Y, yani dikey olarak tekrarla.
- `no-repeat` — tekrarlama.
    
    ![Screen Shot 2025-07-23 at 23.40.06 PM.png](background-repeat%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-23_at_23.40.06_PM.png)
    

Görüntünün öğe boyutlarından daha büyük olduğunu bilseniz bile, istenmeyen davranış olasılığını önlemek için `background-repeat` özelliğini `no-repeat` olarak ayarlamak iyi bir fikirdir.

Bunu karşılama bölümünün arka plan görüntüsü için yapalım.

`.hero {
	background-color: #2a2a2a;
	background-image: url(görüntü yolu);
	background-repeat: no-repeat;
}`

![Screen Shot 2025-07-23 at 23.40.20 PM.png](background-repeat%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-23_at_23.40.20_PM.png)