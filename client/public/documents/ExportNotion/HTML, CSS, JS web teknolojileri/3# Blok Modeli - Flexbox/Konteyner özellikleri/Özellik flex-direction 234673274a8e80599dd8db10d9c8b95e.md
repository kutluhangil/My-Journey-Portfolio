# Özellik flex-direction

Flexbox, öğeleri tek bir yönde düzenlemeye yarayan bir sistemdir: yatay veya dikey. `Flex-direction` özelliği ana eksenin yönünü belirtir ve bu nedenle kapsayıcıdaki öğelerin yönünü belirler.

`flex-direction: row | row-reverse | column | column-reverse`

- `row` — eksen soldan başlar ve sağdan biter. Bu varsayılan değerdir.
- `row-reverse` — eksen sağdan başlar ve solda biter.
- `column` — ana eksen dikey olur, üstten başlar ve altta biter.
- `column-reverse` — ana eksen dikey olur, alttan başlar ve üstte biter.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/c7a55cd5-257f-4f48-b4be-7c2cf4b33a61Frame%2048099.png)

```
Bu özellik, ana ekseninmain-start vemain-end değerlerini değiştirir. Flex öğeleri her zaman ana eksen boyunca başlangıçtan (main-start) sona (main-end) kadar yerleştirilecektir.

```

- Sayfanın üst ve alt menüleri için `flex-direction` özelliğinin iki farklı değerinin görselleştirmesini görmek için **Result** öğesine tıklayın.
- `flex-direction` özelliği için hangi değerlerin ayarlandığını belirlemek için **CSS** sekmesine tıklayın.
    
    ![Screen Shot 2025-07-18 at 22.11.55 PM.png](%C3%96zellik%20flex-direction/Screen_Shot_2025-07-18_at_22.11.55_PM.png)
    

Varsayılan olarak, `flex-direction` `row` olarak ayarlanmıştır, bu nedenle örnekte üst menü öğeleri soldan sağa doğru düzenlenmiştir.

Alt menü `row-reverse` olarak ayarlanmıştır: ana eksen 180 derece döndürülür ve öğeler sağdan sola doğru düzenlenir.

Öğelerin sırasına dikkat edin: sadece kapsayıcının sağ kenarına itilmemişler, yönlerini de tersine çevirmişler!

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/27c03e96-b309-48f3-87fc-49c1cd99094eUntitled%20-%202024-04-25T112757.378.png)