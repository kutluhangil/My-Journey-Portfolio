# Özellik align-content

`align-content`, çok satırlı bir kapsayıcının tüm satırlarını `cross axis` boyunca hizalamayı kontrol eder. Bu, her satırdaki öğelerin `align-items` özelliği ile hizalanmasına benzer. Ancak, bu özellik yalnızca bir satır öğe olduğunda veya kapsayıcıda dikey boşluk bulunmadığında (örneğin, içerikten daha büyük bir yükseklik belirtilmediğinde) çalışmaz.

`align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/4e9a572d-d3fc-4a1d-9de6-0475e4e57632Frame%2048134.png)

- `stretch` - çizgiler tüm alanı kaplayacak şekilde eşit olarak gerilir. Varsayılan değer.
- `flex-start` - satırlar `cross axis` başlangıcına itilir.
- `flex-end` - satırlar `cross axis` sonuna itilir.
- `centre` - dizeler `cross axis` üzerinde ortalanır.

```
space-between,space-around vespace-evenly değerlerijustify-content özelliğine benzer şekilde sadece dizeler için çalışır ve nadiren kullanılır.
```