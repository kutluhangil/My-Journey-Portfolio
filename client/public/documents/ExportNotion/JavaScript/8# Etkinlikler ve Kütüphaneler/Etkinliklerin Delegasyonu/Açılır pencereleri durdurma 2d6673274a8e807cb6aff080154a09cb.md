# Açılır pencereleri durdurma

Genellikle, bir olay `window` öğesine kadar süzülür ve bu sırada yol üzerindeki tüm uygun işleyiciler çağrılır.

Ayrıca, bazen bir öğenin aynı olay türü için birden fazla işleyicisi olabilir.

Örneğin, `descendant` öğesinde bir olay meydana geldiğini varsayalım. Bu olay, ardından `child` ve `parent` öğelerine iletilir. Ancak bu süreçte herhangi bir ara işleyici, olay nesnesi üzerinde tanımlı yöntemleri kullanarak olayın yayılmasını durdurabilir:

- `event.stopPropagation()`
- `event.stopImmediatePropagation()`

`event.stopPropagation()` ve `event.stopImmediatePropagation()` Arasındaki Fark

`event.stopPropagation()`

- Olayın DOM hiyerarşisinde yukarıya doğru **yayılmasını** (baloncuklaşmasını) engeller. Bu, olayın hiçbir üst öğe tarafından yakalanamayacağı anlamına gelir.
- Ancak, **aynı öğe üzerinde tanımlanmış diğer olay işleyicilerinin** çalışmasını engellemez. Yani olay, mevcut öğede tanımlı diğer dinleyiciler tarafından hâlâ işlenebilir.

`event.stopImmediatePropagation()`

- `event.stopPropagation()` ile aynı şekilde olayın baloncuklaşmasını durdurur.
- Buna ek olarak, aynı öğe üzerinde tanımlı olan **diğer tüm olay işleyicilerinin çalışmasını da engeller** — daha önce kaydedilmiş olsalar bile. Olay, tamamen sonlandırılır ve o anda yürütülen işleyici dışında başka hiçbir dinleyici tetiklenmez.

```
Açılır pencereleri (baloncuklaşmayı) durdurmak, kendi içinde bazı sorunlara yol açabilir ve bu hataların üstesinden gelmek ek çaba gerektirir.
Örneğin, web analitik araçları kullanıcıların bir sayfadaki etkileşimlerini izlemek için genellikle açılır pencere (event bubbling) mekanizmasını kullanır. Eğer bu olaylar gereksiz yere durdurulursa, bu tür analiz sistemleri gerekli verileri toplayamaz hâle gelir.
Bu nedenle, yalnızca gerçekten gerekli olduğunda stopPropagation() veya stopImmediatePropagation() gibi yöntemleri kullanmanız önerilir.
```

### **Olay yayılımını durdurma**

Normalde bir olay, **hedef öğeden başlayıp üst öğelere doğru yayılır** (baloncuk).

Bunu durdurmak için iki yöntem vardır:

### **event.stopPropagation()**

- Olayın **üst öğelere yayılmasını durdurur**
- **Aynı öğe üzerindeki diğer event listener’lar çalışmaya devam eder**

### **event.stopImmediatePropagation()**

- Olayın **üst öğelere yayılmasını durdurur**
- **Aynı öğe üzerindeki diğer tüm event listener’ları da durdurur**
- Olay tamamen sonlandırılır

### **Kısaca fark**

- **stopPropagation** → Yukarı çıkma durur, aynı öğedeki diğer dinleyiciler çalışır
- **stopImmediatePropagation** → Her şey durur (yayılım + aynı öğedeki diğer dinleyiciler)

🎯 Ne zaman kullanılır?

İstenmeyen tıklamaların üst öğelere veya başka dinleyicilere ulaşmasını engellemek istediğinde.