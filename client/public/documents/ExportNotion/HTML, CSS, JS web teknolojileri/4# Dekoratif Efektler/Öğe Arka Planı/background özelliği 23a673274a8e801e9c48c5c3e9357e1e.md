# background özelliği

`background` özelliği —dikkate alınan tüm özelliklerin değerlerini aynı anda ayarlamak için kullanılan bileşik bir özelliktir.

`background: background-color background-image background-repeat background-position background-attachment`

Bir bileşen belirtilmemişse, varsayılan değeri kullanılır.

`*/* Yalnızca arka plan rengini ayarlayın */*background: #2a2a2a;

*/* Sol üst köşeden başlayarak x boyunca tekrarlanan bir resim ile şeffaf arka plan rengi. */*background: url(görüntü yolu) repeat-x;`

```
Başlangıçta her değer için ayrı özellikler kullanmanız önerilir, çünkü bileşikbackground özelliği ile kolayca karışıklık yaşanabilir.
```