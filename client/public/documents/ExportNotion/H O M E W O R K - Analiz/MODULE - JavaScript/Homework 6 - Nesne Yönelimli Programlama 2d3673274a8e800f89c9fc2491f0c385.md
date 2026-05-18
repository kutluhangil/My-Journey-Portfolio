# Homework 6 - Nesne Yönelimli Programlama

Neredeyse JavaScript’in merkezindesiniz! 💪

Modül 6'nın materyalleri üzerinde çalıştıktan sonra

- tek bir fonksiyon bağlamında `this` anahtar kelimesinin ne olduğunu
- global kapsamda, nesne metodunda, ok ve geri arama fonksiyonlarında `this`in nasıl tanımlanacağını
- `call`, `apply` ve `bind` yöntemlerini
- OOP'nin özünü, sınıf, örnek, arayüz kavramlarını
- prototiplemenin ne olduğunu ve kullanım özelliklerini
- prototipik kalıtım kullanarak, aynı tipte, aynı özelliklere ancak farklı değerlere sahip nesneler oluşturmak için sınıfların ne olduklarını biliyorsunuz

Sırada ne var?

Son adım, this anahtar kelimesini doğru kullanmanız, mal deposunu yönetmek için bir sınıf oluşturmanız ve dize kurucusunu yapılandırmanız gereken 3 görevi tamamlamaktır. Kulağa ilginç geliyor, değil mi?

Hadi başlayalım!

# **Ödev 6**

- `goit-js-hw-06` deposunu oluşturun ve bilgisayarınıza indirin.
- `goit-js-hw-06` klasöründe, aşağıdaki şemada gösterildiği gibi bir proje yapısı oluşturun.

```
Dikkat! Dosyaların ve klasörlerin adlarının yanı sıra iç içe geçmiş yapıları da yukarıdaki şemaya uygun olmalıdır. Aksi takdirde çalışmanız kabul edilmeyecektir.

```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/a1d5283c-41e0-4677-9760-f5799e1a9c8eFrame%2048582%20%285%29.jpg)

- Her görevi okuyun ve ilgili dosyada çalıştırın.
- Kodun `Prettier` ile biçimlendirildiğinden ve canlı atama sayfasını açtığınızda konsolda herhangi bir hata veya uyarı olmadığından emin olun
- Not vermek için ödevinizi teslim edin

**Gönderme biçimi:** Ödev iki bağlantı içerir: kaynak dosyalara ve `GitHub Pages` üzerindeki çalışma sayfasına.

# **Görev 1. Kullanıcı hesabı**

```
Bu görevi task-1.js dosyasında çalıştırın.

```

Geliştirici ayrılmadan önce, yemek dağıtım hizmetimiz için kullanıcı hesaplarını yönettiğimiz kaynak kodunu hackledi. Nesnenin özelliklerine erişirken eksik olan `this` ifadesini değiştirerek `customer` nesnesinin metodlarını yeniden düzenleyin.

Bu başlangıç kodunu kullanın ve yeniden düzenleyin. Nesneyi tanımladıktan sonra yöntem çağrılarını ekleyin. Çalışmalarının sonuçları konsolda görüntülenecektir. Lütfen orada herhangi bir değişiklik yapmayın.

```
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
```

Bu kodu mentörün kontrolü için bırakın.

**Mentörün kontrol ederken dikkat edecekleri:**

- `customer` değişkeni tanımlanmıştır.
- `customer` değişkeninin değeri, özellikleri ve yöntemleri olan bir nesnedir
- `customer.getDiscount()` çağrısı, `discount` özelliğinin geçerli değerini döndürür
- `customer.setDiscount(0.15)` çağrısı `discount` özelliğinin değerini günceller
- `customer.getBalance()` çağrısı, `balance` özelliğinin geçerli değerini döndürür.
- `customer.getOrders()` çağrısı, `orders` özelliğinin geçerli değerini döndürür
- `customer.addOrder(5000, "Steak")` çağrısı `orders` özelliğinin değer dizisine `"Steak"` ekler ve bakiyeyi günceller
- `customer` nesnesinin `getBalance` metodu `this` kullanır.
- `customer` nesnesinin `getDiscount` metodu `this` kullanır.
- `customer` nesnesinin `setDiscount` metodu `this` kullanır.
- `customer` nesnesinin `getOrders` metodu `this` kullanır.
- `customer` nesnesinin `addOrder` metodu `this` kullanır.

# **Görev 2. Depo**

```
Bu görevi task-2.js dosyasında çalıştırın.

```

Mal deposunu yönetmek için nesneler oluşturacak bir `Storage` sınıfı oluşturun. Sınıf yalnızca bir argüman bekler - oluşturulan nesneye `items` özel özelliğinde yazılan ilk mal dizisi.

Aşağıdaki sınıf yöntemlerini tanımlayın:

- `getItems()` - `items` özel özelliğindeki mevcut öğelerin bir dizisini döndürür.
- `addItem(newItem)` - yeni bir öğe `newItem` kabul eder ve nesnenin `items` özel özelliğindeki öğeler dizisine ekler.
- `removeItem(itemToRemove)` - `itemToRemove` öğesinin adını içeren bir dize alır ve nesnenin `items` özel özelliğindeki öğeler dizisinden kaldırır.

Aşağıdaki kodu örnek başlatma ve yöntem çağrılarıyla birlikte alın ve çalışmanın doğruluğunu kontrol etmek için sınıf bildiriminden sonra yapıştırın. Konsol, çalışmalarının sonuçlarını gösterecektir. Lütfen orada herhangi bir değişiklik yapmayın.

```
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
```

Bu kodu mentörün kontrol etmesi için bırakın.

**Mentörün kontrol ederken nelere dikkat edecekleri:**

- `Storage` sınıfı tanımlanmış.
- `Storage` sınıfında `getItems` metodu tanımlanmış
- `Storage` sınıfında `addItem` metodu tanımlanmış
- `Storage` sınıfında `removeItem` metodu tanımlanmış
- `Storage` sınıfındaki `items` özelliği private olarak tanımlanmış
- `getItems` metodu, kendisini çağıran sınıf örneğinin `items` özelliğinin değerini döndürür
- `addItem` metodu, kendisini çağıran sınıf örneğinin `items` özelliğinin değerini değiştirir
- `removeItem` metodu, kendisini çağıran sınıf örneğinin `items` özelliğinin değerini değiştirir
- `new Storage(["Nanitoids", "Prolonger", "Antigravitator"])` çağrısının sonucu olarak, `storage`değişkeninin değeri bir nesnedir
- `storage` nesnesinin genel bir `items` özelliği yok
- Örnek başlatıldıktan hemen sonra `storage.getItems()` öğesine yapılan ilk çağrı bir dizi `["Nanitoids", "Prolonger", "Antigravitator"]` döndürür
- `storage.addItem("Droid")` çağrısından sonra `storage.getItems()` fonksiyonuna yapılan ikinci çağrı, `["Nanitoids", "Prolonger", "Antigravitator", "Droid"]` dizisini döndürür.
- `storage.removeItem("Prolonger")` çağrısından sonra `storage.getItems()` fonksiyonuna yapılan üçüncü çağrı, `["Nanitoids", "Antigravitator", "Droid"]` dizisini döndürür

# **Görev 3. String birleştirme**

```
Bu görevi task-3.js dosyasında çalıştırın.

```

Bir `initialValue` parametresi alan bir `StringBuilder` sınıfı yazın - oluşturulan nesnenin `value` özel özelliğine yazılan rastgele bir dize.

Aşağıdaki sınıf metodlarını tanımlayın:

- `getValue()` - `value` özel özelliğinin geçerli değerini döndürür.
- `padEnd(str)` - `str` (string) parametresini alır ve bu metodu çağıran nesnenin `value` özel özelliğinin değerinin sonuna ekler.
- `padStart(str)` - `str` (string) parametresini alır ve bu metodu çağıran nesnenin `value` özel özelliğinin değerinin başlangıcına ekler.
- `padBoth(str)` - `str` (string) parametresini alır ve bu yöntemi çağıran nesnenin `value` özel özelliğinin değerinin başına ve sonuna ekler.

Aşağıdaki kodu örnek başlatma ve metodlarıyla birlikte alın ve çalışmanın doğruluğunu kontrol etmek için sınıf tanımlanmasından sonra yapıştırın. Konsol, çalışmalarının sonuçlarını gösterecektir. Lütfen orada herhangi bir değişiklik yapmayın.

```
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
```

Bu kodu mentörün kontrol etmesi için bırakın.

**Mentörün kontrol ederken dikkat edecekleri:**

- `StringBuilder` sınıfı tanımlanmıştır.
- `StringBuilder` sınıfındaki `value` özelliği private olarak tanımlanmıştır
- `StringBuilder` sınıfı `getValue` metodunu tanımlar
- `getValue` metodu, kendisini çağıran sınıf örneğinin `value` özel özelliğinin değerini döndürür
- `StringBuilder` sınıfında, `padEnd` metodu tanımlanır
- `padEnd` yöntemi, kendisini çağıran sınıf örneğinin `value` özel özelliğinin değerini değiştirir
- `StringBuilder` sınıfında, `padStart` metodu tanımlanır
- `padStart` metodu, kendisini çağıran sınıf örneğinin `value` özel özelliğini değiştirir
- `StringBuilder` sınıfında, `padBoth` metodu tanımlanır
- `padBoth` metodu, kendisini çağıran sınıf örneğinin `value` özelliğinin değerini değiştirir
- `new StringBuilder(".")` çağrısının sonucu olarak, `builder` değişkeninin değeri bir nesnedir
- `builder` nesnesi `value` genel özelliğini içermez.
- Örnek başlatıldıktan hemen sonra `builder.getValue()` öğesine yapılan ilk çağrı `.` dizesini döndürür.
- `builder.padStart("^")` çağrısından sonra yapılan ikinci `builder.getValue()` çağrısı `^.` dizesini döndürür.
- `builder.padEnd("^")` çağrısından sonra yapılan üçüncü `builder.getValue()` çağrısı `^.^` dizesini döndürür
- `builder.padBoth("=")` çağrısından sonra yapılan dördüncü `builder.getValue()` çağrısı `=^.^=` dizesini döndürür

[Task 1 - Çözüm](Homework%206%20-%20Nesne%20Y%C3%B6nelimli%20Programlama/Task%201%20-%20%C3%87%C3%B6z%C3%BCm%202d3673274a8e80bfb99aef0f38cd7129.md)

[Task 2 - Çözüm](Homework%206%20-%20Nesne%20Y%C3%B6nelimli%20Programlama/Task%202%20-%20%C3%87%C3%B6z%C3%BCm%202d3673274a8e80ad8f29da8f894af132.md)

[Task 3 - Çözüm](Homework%206%20-%20Nesne%20Y%C3%B6nelimli%20Programlama/Task%203%20-%20%C3%87%C3%B6z%C3%BCm%202d3673274a8e806db85ef5f4b6d2b99d.md)