# Kendi öznitelikleri

HTML spesifikasyonu, etiketlere (DOM öğelerine) ekleyebileceğimiz kapsamlı bir özellik listesini tanımlar. Bu sayede yapı doğru kalır. Ancak bazen bu liste **yetersiz**olabilir.

Örneğin, belirli bir bilgiyi tutmak, bir düğmenin eylem türünü belirtmek ya da daha sonra erişebilmek üzere bir veriyi saklamak gerekebilir. **İşte bu noktada**, kendi `data-` özniteliklerimiz devreye girer.

Kendi özel özniteliklerimizi kullanarak, bir etikete istediğimiz özellikleri ekleyebilir ve bu değerlere JavaScript ile erişebiliriz.

```
<button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editor</button>
```

# **Değerlerin Alınması**

`data- özniteliklerinin` değerini almak için `dataset` özelliği kullanılır.

Bu özelliğin ardından, nokta (`.`) ile öznitelik ismi — `data-` kısmı **atılarak** — yazılır.

Yani, `data-` bölümü çıkarılır ve ismin geri kalanı bir **nesne özelliği** olarak kullanılır.

```
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"
```

# **Değerlerin Değiştirilmesi**

Mevcut bir `data-` özniteliğinin değerini **değiştirmek** veya yeni bir tane **eklemek**, JavaScript'te diğer herhangi bir özellikte olduğu gibi aynı şekilde yapılabilir.

Bunun için, önce DOM öğesine erişmek, ardından `dataset` nesnesindeki ilgili özelliğin değerini değiştirmek veya ayarlamak gerekir.

```
// saveBtn düğmesi için data-action değerini değiştiriyoruz
saveBtn.dataset.action = "update";

// Yeni data-role veri-özniteliğini ekliyoruz
saveBtn.dataset.role = "admin";

// Yeni değerleri kontrol ediyoruz
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"
```

# **Öznitelik Silme**

**`data-özniteliğini`** silmek için **`delete`** operatörü kullanılır.

```
// data-action data-özniteliğini sil
delete saveBtn.dataset.action;

// Silme işlemini kontrol edelim
console.log(saveBtn.dataset.action); // undefined
```

`data-` öznitelikleri genellikle **kebap-kasa** (*kebab-case*) şeklinde kullanılır; yani kelimeler **tirelerle ayrılır**.

Bu `data-` özniteliklerine `dataset` özelliği aracılığıyla erişmek gerektiğinde, **kebap-kasa** biçimindeki öznitelikler **kamel-kasa** (*camelCase*) şekline dönüştürülür.

Yani tireler kaldırılır ve her tırnak (→ **tire**) sonrasındaki ilk harf büyük harfe çevrilir.

Örneğin, `data-user-role`, JavaScript'te `userRole` şeklinde dönüşür.

```
const userBlock= document.querySelector('div[data-user-role="admin"]');

// Yeni bir data-user-status veri özniteliği ekliyoruz
element.dataset.userStatus = "online";

console.log(element.dataset.userRole); // "admin"
console.log(element.dataset.userStatus); // "online"
```