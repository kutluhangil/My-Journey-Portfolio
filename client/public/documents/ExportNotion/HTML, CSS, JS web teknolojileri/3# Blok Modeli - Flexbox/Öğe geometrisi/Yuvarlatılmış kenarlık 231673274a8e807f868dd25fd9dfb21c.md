# Yuvarlatılmış kenarlık

Çerçevenin tüm köşelerini yuvarlamak için `border-radius` özelliği kullanılır. Değerler mutlak (px) ya da göreli (%) olabilir. Kare bir öğenin yarıçapını `%50` olarak ayarlarsanız, bu onu bir daireye dönüştürür.

- **Result** sekmesinde, `border-radius` özelliğinin kenarlığın görünümünü nasıl değiştirdiğini görebilirsiniz.
- **CSS** sekmesinde her bir öğenin özellik değerlerine bakın.
    
    ![Screen Shot 2025-07-15 at 17.38.17 PM.png](Yuvarlat%C4%B1lm%C4%B1%C5%9F%20kenarl%C4%B1k/Screen_Shot_2025-07-15_at_17.38.17_PM.png)
    

Çerçevenin her bir köşesini ayrı ayrı yuvarlamanızı sağlayan özellikler de vardır.

`*/* sol üst köşe */*border-top-left-radius: değer;

*/* sağ üst köşe */*border-top-right-radius: değer;

*/* sağ alt köşe */*border-bottom-right-radius: değer;

*/* sol alt köşe */*border-bottom-left-radius: değer;`

```
body {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.box-1 {
  width: 140px;
  height: 80px;
  border-radius: 10px;
  background-color: #f44336;
}

.box-2 {
  width: 100px;
  height: 100px;
  border-radius: 20%;
  background-color: #2196f3;
}

.box-3 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #4caf50;
}
```

Kulüp listesi `.club-list .item` öğelerine `1px` genişliğinde ve `#03a9f4` renginde düz bir çerçeve ekleyin. Kenar yuvarlamasını `8px` olarak ekleyin.

- Stil sayfasında `.club-list .item` seçicisine sahip bir CSS kuralı bulunmalıdır.
- CSS kuralında `.club-list .item` seçicisi ile `1px solid #03a9f4` değerine sahip bir `border` özelliği olmalıdır.
- `.club-list .item` seçicisine sahip CSS kuralının `border-radius` değeri `8px`olmalıdır.

`.club-list .title {
margin-bottom: 8px;
font-size: 16px;
text-transform: uppercase;
line-height: 1.333;
border: 1px solid #03a9f4;
border-radius: 8px;
}`

![Screen Shot 2025-07-15 at 17.41.42 PM.png](Yuvarlat%C4%B1lm%C4%B1%C5%9F%20kenarl%C4%B1k/Screen_Shot_2025-07-15_at_17.41.42_PM.png)