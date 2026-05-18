# textContent Özelliği

`textContent` özelliği, öğelerin (hem kendi hem de iç içe geçmiş öğelerin) içindeki tüm **metin içeriğini** döndürür.
`<p class="text">Username: <span class=”sub-text”>Mango</span></p>`

Elemanın metin içeriğini almak için, her zamanki gibi öğenin referansını alır ve nokta (`.`) ile özelliğine erişiriz.

```
const el = document.querySelector(".text")
const nested = document.querySelector(".sub-text")

console.log(el.textContent); // "Username: Mango"
console.log(nested.textContent); // "Mango"
```

`textContent` özelliği hem **okunabilir** hem de **değiştirilebilir**. `textContent`'e ne eklenirse eklensin, veriler her zaman metin olarak kaydedilir.

```
const el = document.querySelector(".text")
console.log(el.textContent); // "Username: Mango"
el.textContent = "Username: Poly";
```