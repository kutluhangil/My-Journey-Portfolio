# text-indent özelliği

`text-indent` özelliği, bir metin bloğunun ilk satırının girintisini ayarlar. Bu özellik, özellikle paragrafların düzeninde kullanılır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/6b3898f0-7d7c-401a-91f7-7f6618e68c22Untitled%20%2833%29.jpeg)

Bu özellik paragrafın yalnızca ilk satırını etkiler ve diğer tüm satırları etkilemez.

`text-indent: uzunluk | <%> | initial | inherit;`

`text-indent` özelliğinin değeri piksel (`px`) gibi herhangi bir uzunluk birimi olabilir. Bir yüzde değeri belirtirseniz, girinti bloğun genişliğine bağlı olarak hesaplanır.

`<section class="post">
  <h1 class="post-title">Lorem ipsum dolor sit amet</h1>
  <p class="post-text">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.Obcaecati
    commodi, veritatis nihil alias iste odit similique sit eius optio veniam,
    impedit cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
</section>`

# **Müşterinin isteklerini dikkate almak için aşağıdaki koddaki değeri değiştirin.**

**Müşterinin istekleri:**

Paragraflar hakkında:

— Satır aralığı bunun yarısı kadar olmalıdır.

— Karakter aralığı %50 oranında artırılmalıdır.

— İlk satırın girintisi 3 kat azaltılmalıdır.

input

`p {
  text-indent: 20px;
  letter-spacing: 1px; 
  line-height: 24px;
}`

Bölümlerin metninin ilk satır girintisi `24px` olacak şekilde ayarlayın. Mevcut CSS kurallarını kullanın.

- Stil sayfasında `.section-text` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.section-text` seçicisine sahip CSS kuralının `text-indent` değeri `24px` olmalıdır.

![Screen Shot 2025-07-07 at 23.09.53 PM.png](text-indent%20%C3%B6zelli%C4%9Fi/Screen_Shot_2025-07-07_at_23.09.53_PM.png)