# JSON ayrıştırma

JSON formatındaki bir metni geçerli bir JavaScript değerine dönüştürmek için **ayrıştırma (parse)** işlemi yapılır. Bu işlem, `JSON.stringify(değer)` ile yapılan dönüştürmenin tersidir.

**`JSON.parse(değer)`** yöntemi, bir JSON dizesini alır ve onu karşılık gelen JavaScript veri türüne dönüştürür.

```
console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null
```

Eğer JSON, karmaşık bir veri türünü (örneğin bir nesne) tanımlıyorsa, sonuç olarak normal şekilde çalışabileceğiniz geçerli bir JavaScript nesnesi elde edersiniz:

```
const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

const dog = JSON.parse(json);
console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
console.log(dog.name); // "Mango"
```

---

## **Kısaca özet**

🧠 **JSON.parse ne yapar?**

- JSON string → JavaScript veri tipi
- Sayıyı sayıya
- Boolean’ı Boolean’a
- Nesneyi gerçek JS nesnesine çevirir

📌 **Ne zaman kullanılır?**

- API’den veri geldiğinde
- localStorage’dan veri okurken
- JSON dosyasıyla çalışırken