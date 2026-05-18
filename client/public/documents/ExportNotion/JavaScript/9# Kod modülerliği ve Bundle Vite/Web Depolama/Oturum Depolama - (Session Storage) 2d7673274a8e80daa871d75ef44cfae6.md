# Oturum Depolama - (Session Storage)

Oturum depolama, yalnızca tarayıcı sekmesi açık olduğu sürece verileri saklar.

Bu, her yeni sekme veya tarayıcı penceresi açıldığında yeni bir oturum depolama oluşturulduğu anlamına gelir. Dolayısıyla, oturum depolama içinde saklanan veriler, kullanıcı bu sekme/pencereyi kapattığında otomatik olarak silinir.

Yöntem seti ve işlevselliği, yerel depolamayla çalışma yöntemleriyle aynıdır.

Tek fark — bu işlemlere `localStorage` yerine `sessionStorage` nesnesi üzerinden erişilmesidir.

`console.log(window.sessionStorage); // Storage {length: 0}`

`setItem(key, value)` yöntemiyle hem metinleri hem de karmaşık veri tiplerini yazabilirsiniz:

```
sessionStorage.setItem("user-id", "123");
sessionStorage.setItem(
  "tickets",
  JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
);
console.log(sessionStorage);
// Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}
```

`getItem(key)` yöntemi, depolanan anahtarı kullanarak kayıtları okumak için kullanılabilir:

```
const userId = sessionStorage.getItem("user-id");
console.log(userId); // "123"

const tickets = JSON.parse(sessionStorage.getItem("tickets"));
console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }
```

Ve tabii ki, anahtarla öğeleri silmek ve depoyu tamamen temizlemek için `removeItem(key)` ve `clear()` yöntemleri kullanılabilir:

```
sessionStorage.removeItem("tickets");
console.log(sessionStorage); // Storage {user-id: '123', length: 1}

sessionStorage.clear();
console.log(sessionStorage); // Storage {length: 0}

```

Oturum depolama yalnızca tarayıcı sekmesinde saklandığından, bazı özel kullanım durumlarına sahiptir:

- **Çok aşamalı işlemler:**
- Uçak bileti, otel, sinema ya da tren rezervasyonlarında önceki adımların bilgileri oturum deposunda saklanabilir. Böylece formlar önceden doldurulabilir veya girilen bilgiler korunabilir.
- **Geçici ziyaretçileri yönetmek:**
- Bloglar, bültenler veya eğitim siteleri gibi platformlarda, kayıt olmadan içerik okuyan birçok kullanıcı olabilir. Bu durumda, içerik okunurken hesap oluşturma teklifi sunmak, ziyaretçiyi kayıtlı kullanıcıya dönüştürmenin etkili bir yoludur. Aynı zamanda kesintisiz bir deneyim sağlar.