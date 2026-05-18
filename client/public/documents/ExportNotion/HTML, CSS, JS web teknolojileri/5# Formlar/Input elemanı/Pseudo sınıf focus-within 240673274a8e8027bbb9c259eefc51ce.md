# Pseudo sınıf :focus-within

`:focus-within` pseudo sınıfı, bir öğeye veya içindeki öğelere odaklandığında uygulanır. Bu sınıf, formun tamamına veya içindeki elemanlara odaklandığınızda stilleri dinamik olarak değiştirmek için kullanılır.

- bir etiket
- form
- ayrı bir form alanı

kullanıcı form alanlarıyla etkileşime girdiğinde.

`form:focus-within {
  border-color: blue;
}`

Herhangi bir alana odaklanıldığında form çerçevesinin rengini ve ilişkili etiketin metnini mavi olarak değiştirme efekti ekleyin.

![Screen Shot 2025-07-31 at 00.31.09 AM.png](Pseudo%20s%C4%B1n%C4%B1f%20focus-within/Screen_Shot_2025-07-31_at_00.31.09_AM.png)

Kullanıcı metin kutusuna odaklandığında, `form-label` sınıfına sahip bir etiketin içindeki metnin rengini `#009688` olarak değiştirin. Renk değiştirme animasyonu `150ms` sürecek ve `ease-in-out` dağıtım fonksiyonu kullanılacak.

- `.form-label:focus-within` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.form-label:focus-within` seçicisine sahip CSS kuralının `#009688` değerinde bir `color` özelliği bulunmalıdır.
- `.form-label` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `.form-label` seçicisine sahip CSS kuralının `transition` özelliği `color 150ms ease-in-out` değerine sahip olmalıdır.

`.form-label {
display: flex;
flex-direction: column;
transition: color 150ms ease-in-out; /* Animasyon eklendi */
}`

`.form-label:focus-within {
color: #009688; /* Odaklandığında renk değişimi */
}`