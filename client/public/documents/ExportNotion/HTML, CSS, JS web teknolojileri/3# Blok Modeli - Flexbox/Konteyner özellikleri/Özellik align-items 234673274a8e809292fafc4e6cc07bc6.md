# Özellik align-items

`Align-items` özelliği, öğelerin çapraz eksen boyunca konumlandırılmasını kontrol eder. Bu özellik `justify-content` özelliğine benzer, ancak farklı bir eksen içindir.

`align-items: stretch | flex-start | flex-end | center | baseline`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a8db8c8e-20b5-4366-9d6e-213d15445d09Frame%2048113.png)

- `stretch` — elemanlar `cross axis` tüm uzunluğu boyunca gerilir. Bu varsayılan değerdir.
- `flex-start` — elemanlar `cross start` noktasına bastırılır
- `flex-end` — elemanlar `cross end` noktasına sıkıştırılır.
- `center` — elemanlar `cross axis` üzerinde ortalanır.
- `baseline` — öğeler metin içeriklerinin taban çizgisine hizalanır.

```
align-items özelliğinin başka değerleri de vardır, ancak bunlar bazı tarayıcılar tarafından desteklenmez veya farklı tarayıcılar arasında kararsız çalışır.

```

- Bu özelliğin muhtemelen en yaygın kullanımını görmek için **Result** öğesine tıklayın - bir satırdaki farklı yükseklikteki öğeleri dikey olarak ortalamak.
    
    ![Screen Shot 2025-07-18 at 22.24.10 PM.png](%C3%96zellik%20align-items/Screen_Shot_2025-07-18_at_22.24.10_PM.png)