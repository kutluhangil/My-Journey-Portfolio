# Karmaşık Veri Ekleme

Web depolama, yalnızca JSON formatını destekleyen verileri saklar; nesne metotları veya fonksiyonları değil.

Teknik olarak, web depolamaya sadece metinler ekleyebilirsiniz. Ancak, karmaşık tipleri dönüştürmek için JSON sınıfının metotlarını kullanırsanız, bu bir sorun olmaz.

Metin dışında, örneğin bir dizi veya nesne gibi bir şey saklamanız gerekiyorsa, bunları `JSON.stringify()` metodu ile bir metne dönüştürmeniz gerekir.

```
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
```

Şimdi veriler tarayıcının yerel deposunda görünmelidir.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/12ba7301-b08c-4d9f-b2fc-a5f0df5f8836Screenshot%202023-08-24%20at%2018.14.11.png)