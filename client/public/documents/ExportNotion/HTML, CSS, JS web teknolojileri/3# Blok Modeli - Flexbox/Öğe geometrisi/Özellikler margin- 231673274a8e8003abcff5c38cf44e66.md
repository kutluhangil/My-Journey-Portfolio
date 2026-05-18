# Özellikler margin-*

Belirli durumlarda, yalnızca bir, iki veya üç tarafta kenar boşluklarını ayarlamanız gerekebilir. Açıkça belirtilmeyen kenarlar için tarayıcının varsayılan değerleri kullanılır ya da hiçbiri yoksa değerin `0` olduğu varsayılır.

`margin-top: 20px;
margin-right: 10px;
margin-bottom: 15px;
margin-left: 30px;`

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/61bb9775-c23a-4501-a7b1-c84cc7a2a64fFrame%2047970.png)

`margin` özelliğini kullanmak yerine, aşağıdaki öğelerin kenar boşluklarını ayarlamak için `margin-*` özelliğini kullanın:

- `.page-header` alt kenar boşluğu 20px
- `.page-title` alt kenar boşluğu 24px, üst kenar boşluğu 0px
- Stil sayfasında `.page-header` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-header` seçicisine sahip CSS kuralının `margin-bottom`değeri `20px` olmalıdır.
- `.page-header` seçicisine sahip CSS kuralının `margin` özelliği bulunmamalıdır.
- Stil sayfasında `.page-title` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `margin-top` değeri `0`olmalıdır.
- `.page-title` seçicisinin bulunduğu CSS kuralının `margin-bottom`değeri `24px` olmalıdır.
- `.page-title` seçicisine sahip CSS kuralının `margin`bulunmamalıdır.

`.page-header {
padding-top: 16px;
padding-bottom: 16px;
background-color: #e0e0e0;
margin-bottom: 20px;
}`

`.page-nav {
padding: 0;
}`

`.page-nav .link {
text-decoration: none;
font-size: 14px;
text-transform: uppercase;
}`

`.page-title {
margin-top: 0;
margin-bottom: 24px;
font-size: 32px;
text-align: center;
line-height: 1.333;
letter-spacing: 3px;
}`