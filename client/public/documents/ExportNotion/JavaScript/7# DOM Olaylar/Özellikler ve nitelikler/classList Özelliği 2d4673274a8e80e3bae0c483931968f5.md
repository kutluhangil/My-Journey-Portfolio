# classList Özelliği

JavaScript kodundan bir elemanın CSS sınıflarını **okumak**, **eklemek**, **silmek** veya **varlığını kontrol etmek** için, `classList` özelliği kullanılır. `classList`, elemanın CSS sınıflarıyla çalışmak için çeşitli yöntemlere sahip bir nesnedir.

`<a class="link is-active" href="<https://goit.global>">GoIT</a>`

`classList` özelliği, bir diziyi andıran özel bir nesnedir. Ancak daha önce öğrendiğimiz JavaScript dizileri gibi **doğal bir dizi** değildir. DOM öğesindeki tüm sınıf listesini, `length` ve `value` özellikleriyle birlikte içerir.

- `value` özelliği, `class` özniteliğinin kesin değerini içerir.
- `length` özelliği, elemandaki sınıf sayısını içerir.

Ancak `value` ve `length` özellikleri genellikle doğrudan kullanılmaz; çünkü sınıflarla ilgili işlemler (ekleme, kaldırma vb.) için özel yöntemler vardır.

```
const link = document.querySelector(".link");
console.log(link.classList);
// ["link", "is-active", length: 2, value: "link is-active"]
```

# **classList.contains(className) Metodu**

`classList.contains(className)` metodu, bir sınıf adı dizisini bekler ve `className`sınıfının elemanda var olup olmamasına bağlı olarak `true` veya `false` döndürür.

**Dikkat et:** `className`, **nokta olmadan** (yani sınıf seçicisi olmadan) **dize** (string) olarak iletilir.

```
const hasActiveClass = link.classList.contains("is-active"); // true
const hasActiveClass = link.classList.contains("title"); // false
```

# **classList.add(className) Metodu**

`classList.add(className)` metodu, bir sınıf adı içeren bir dize argümanı bekler ve bu sınıf adını elemanın sınıf listesine ekler.

```
link.classList.add("special");
console.log(link.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]
```

`Birden fazla sınıf ekleyebilirsiniz, birden çok argümanı virgülle ayırarak belirtin.`

# **classList.remove(className) Metodu**

`classList.remove(className)` metodu, bir sınıf adı **dizesi** ile çağrılır ve verilen sınıf adını öğenin sınıf listesinden kaldırır.

```
link.classList.remove("is-active");
console.log(link.classList);
// ["link", "special", length: 2, value: "link special"]
```

`Eğer var olmayan bir sınıfı bir öğeden kaldırmaya çalışırsanız, bu bir hata vermez. Sadece hiçbir şey kaldırılmaz.`

# **classList.toggle(className) Metodu**

`classList.toggle(className)` metodu bir **anahtar** gibi çalışır:

- Eğer `className` sınıfı **yoksa**, onu sınıf listesine **ekler**.
- Tam tersi durumda, eğer `className` sınıfı **varsa**, onu **kaldırır**.

```
link.classList.toggle("is-active");
console.log(link.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]
```

# **classList.replace(oldClassName, newClassName)Metodu**

`classList.replace(oldClassName, newClassName)` metodu, iki dize argümanı alır (önce eski sınıf adı, sonra yeni sınıf adı) ve mevcut `oldClassName` sınıfını belirtilen `newClassName` ile değiştirir.

```
link.classList.replace("special", "regular");
console.log(link.classList);
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]
```

`Var olan bir sınıfı, eleman üzerinde değiştirmeye çalışırsanız bu bir hata oluşturmaz. Sadece hiçbir şey değişmez.`