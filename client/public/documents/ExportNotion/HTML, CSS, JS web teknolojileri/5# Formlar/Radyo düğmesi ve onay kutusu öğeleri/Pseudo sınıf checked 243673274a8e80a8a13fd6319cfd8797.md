# Pseudo sınıf :checked

**`:checked`** sözde sınıfı, kullanıcı tarafından seçilmiş olan etkileşimli öğelere stil uygulamak için kullanılır. Bu öğeler şunlardır:

- radyo düğmeleri
- onay kutuları
- seçicilerde açılır menü seçenekleri

Yalnızca belirtilen alanlara (etkileşimlere) stil eklemenizi sağlar.

`input:checked {
	box-shadow: 0 0 0 2px orangered;
}`

![Screen Shot 2025-08-02 at 03.14.21 AM.png](Pseudo%20s%C4%B1n%C4%B1f%20checked/Screen_Shot_2025-08-02_at_03.14.21_AM.png)

Canlı örneğin sağ üst köşesindeki codepen logosuna tıklayın.

Şu anda `box-shadow: 0 0 0 2px orangered;` olarak ayarlanmış olan `.form-input:checked` sözde sınıfının özelliklerini değiştirin.

Ne değişti?

Kodu CSS düzenleyicisinde tamamlayın. Bu işlem için, seçili durumdaki onay kutularını biçimlendirmek için `quiz-form` sınıfını kullanarak yeni bir kural ekleyin. Bu onay kutularına  `0 0 0 2px orange` değerinde bir gölge ekleyin.

- CSS düzenleyicisinde `.quiz-form input:checked` seçicisine sahip bir kural olmalıdır.
- Bu kural, seçili olan onay kutularına `box-shadow` özelliğini `0 0 0 2px orange` olarak uygulamalıdır.

`.quiz-form input:checked {
box-shadow: 0 0 0 2px orange;
}`