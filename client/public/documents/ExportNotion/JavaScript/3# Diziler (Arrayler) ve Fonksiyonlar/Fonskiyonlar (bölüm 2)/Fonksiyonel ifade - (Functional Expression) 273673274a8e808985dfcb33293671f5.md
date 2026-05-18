# Fonksiyonel ifade - (Functional Expression)

Fonksiyon ifadesi (function expression), fonksiyon değerini bir değişkene atayarak fonksiyon tanımlamanın alternatif bir yoludur.

Bir fonksiyon tanımlamanın sözdizimini zaten biliyorsunuz (**function declaration**):

`function multiply(x, y, z) {
  console.log(x * y * z);
}`

Fonksiyon ifadesinin sözdizimi (**function expression**):

`const multiply = function (x, y, z) {
  console.log(x * y * z);
};`

Aralarındaki fark şudur: Fonksiyon ifadesiyle tanımlanan bir fonksiyon, yalnızca tanımlandıktan sonra çağrılabilir. Çünkü bu, bir `const` değişkenine atanmış bir fonksiyondur.

`*// ❌ Hata! fonksiyon çalışmaz*
multiply(1, 2, 3);

const multiply = function (x, y, z) {
  console.log(x * y * z);
};

*// ✅ Kod, fonksiyon tanımlandıktan sonra çalışır*
multiply(4, 5, 6);`

Fonksiyon bildirimi (function declaration), tanımlandığı yerden önce ya da sonra çağrılabilir.

`*// ✅ Tanımlamadan önce fonksiyonu kullanın*multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(x * y * z);
}

*// ✅ Tanımladıktan sonra fonksiyonu kullanın*multiply(4, 5, 6);`

Hangi sözdizimini kullanacağınız önemli değildir; önemli olan projede tutarlılığı korumaktır. Daha okunabilir ve standart bir yapı için, fonksiyon bildirimleri (function declaration) ile fonksiyon ifadelerini (function expression) karıştırmamaya dikkat edin.

---

### **🎯 Function Declaration (Fonksiyon Bildirimi)**

Bu yöntemde fonksiyonu klasik şekilde tanımlıyorsun:

```
function sayHello() {
  console.log("Hello!");
}
```

- Bu fonksiyonu **dosyanın herhangi bir yerinde çağırabilirsin** (üstte ya da altta olması fark etmez).
- Çünkü JavaScript, çalışmaya başlamadan önce bu fonksiyonları belleğe yükler (**hoisting** deniyor).

```
sayHello(); // ✅ Çalışır

function sayHello() {
  console.log("Hello!");
}
```

---

### **🎯 Function Expression (Fonksiyon İfadesi)**

Bu yöntemde fonksiyon bir **değişkene atanır**:

```
const sayHello = function () {
  console.log("Hello!");
};
```

- Burada fonksiyon aslında **bir değişkenin değeri**.
- Yani ancak tanımlandıktan sonra çağrılabilir.

```
sayHello(); // ❌ Hata! Çünkü daha tanımlanmadı

const sayHello = function () {
  console.log("Hello!");
};

sayHello(); // ✅ Çalışır
```

---

### **🚀 Özet**

- **Function Declaration** → Tanımlamadan önce de çağırabilirsin.
- **Function Expression** → Ancak tanımlandıktan sonra çağırabilirsin.
- İkisi de aynı işi yapar, fark sadece **ne zaman kullanılabileceğinde**.

---

📌 **Benzetme:**

- *Declaration*: Evde bir robot var, her zaman kullanabilirsin.
- *Expression*: Evde robot yapmak için bir kutu parçan var, robotu kurana kadar çalışmaz.

---