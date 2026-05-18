# DOM özelliklerine erişim

DOM ağacını oluştururken, bazı standart HTML özellikleri DOM nesnelerinin **özellikleri** haline gelir.

**Örnek üzerinden açıklayalım:**

- Eğer HTML'de bir bağlantı etiketi varsa:

`<a class="link" href="<https://goit.global>">GoIT</a>;`

- JavaScript kodunda, `querySelector` kullanarak bu bileşeni (yani DOM nesnesini) seçebilir ve ardından `href` özelliğine erişebilirsiniz.

```
const link = document.querySelector(".link");
console.log(link.href); // "<https://goit.global>"
```

JavaScript kodundan, bir özelliğin değerini doğrudan yeni bir değerle değiştirerek güncelleyebilirsiniz. Bu işlem sırasında script çalıştırıldığında, yani **DOM ağacı üzerinde**, HTML'deki ilgili değerler de dinamik olarak değişmiş olur.

```
const link = document.querySelector(".link");
console.log(link.href); // "<https://goit.global>"
link.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
console.log(link.href); // "[<https://neo.goit.global>](<https://neo.goit.global/>)"
```

Canlı bir örnek üzerinden, bir resmi değiştirerek ve `src` ile `alt` özelliklerinin değerlerini güncelleyerek, betik aracılığıyla hem resmi hem de açıklamasını değiştirebiliriz.