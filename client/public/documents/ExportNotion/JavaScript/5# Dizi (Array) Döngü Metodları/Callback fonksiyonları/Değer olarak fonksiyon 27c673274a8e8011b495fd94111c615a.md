# Değer olarak fonksiyon

Bir fonksiyonun kendisi (yani referansı), bir değişkende saklanabilir veya başka bir fonksiyona argüman olarak aktarılabilir. Bu açıdan fonksiyonlar; sayılar, dizeler ya da diziler gibi değerlerle aynı şekilde ele alınabilir.

```
function greet(name) {
  return `Welcome ${name}!`;
}

// Selamlama fonksiyonunu çağırıyoruz ve sonucu konsola gönderiyoruzconsole.log(greet("Mango"));// "Welcome Mango!"// Selamlama fonksiyonunu çağırmadan konsola gönderiyoruzconsole.log(greet);// ƒ greet() {return `Welcome ${name}!`}
```

İlk örnekte, `greet` fonksiyonu parantez kullanılarak çağrılır ve döndürdüğü değer konsola yazdırılır.

İkinci örnekte ise, `greet` fonksiyonuna yalnızca bir referans verilir (parantez olmadan), bu yüzden fonksiyon çalıştırılmaz. Bunun yerine konsolda fonksiyonun tanımı (içeriği) görüntülenir.

Bu davranış sayesinde, fonksiyonlar başka değişkenlere atanabilir veya başka fonksiyonlara argüman olarak aktarılabilir.

# **Görev**

`makePizza` fonksiyonu konsola bir mesaj içeren bir dize döndürür.

Kodu, `result` değişkeni `makePizza` fonksiyonunun sonucunu içerecek ve `pointer` değişkeni `makePizza` fonksiyonuna bir referans içerecek şekilde tamamlayın.

# **Testler**

- `makePizza` fonksiyonu şöyle tanımlanır
- `result` değişkeni tanımlanır
- `result` değişkeninin değeri `"Your pizza is being prepared, please wait."` dizesidir.
- `result` değişkeninin değeri şu fonksiyon çağrılarak elde edilir
- `pointer` değişkeni tanımlanır
- `pointer` değişkeninin değeri `makePizza` fonksiyonuna bir referanstır

```
function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;
```

Bu görevde senden istenen şey:

1. **makePizza** adında bir fonksiyon tanımlayacaksın.
2. Bu fonksiyon "Your pizza is being prepared, please wait." stringini döndürecek.
3. **result** değişkeni, fonksiyonu çağırarak dönen değeri saklayacak.
4. **pointer** değişkeni, fonksiyonun kendisine (referansına) işaret edecek.

### **📖 Açıklama**

- makePizza() → fonksiyonu **çağırır** ve string döner.
- makePizza → parantezsiz yazarsan, fonksiyonun **referansını** tutarsın (çalıştırmadan).
- Bu yüzden result ile pointer farklıdır:
    - result → "Your pizza is being prepared, please wait."
    - pointer → fonksiyonun kendisi