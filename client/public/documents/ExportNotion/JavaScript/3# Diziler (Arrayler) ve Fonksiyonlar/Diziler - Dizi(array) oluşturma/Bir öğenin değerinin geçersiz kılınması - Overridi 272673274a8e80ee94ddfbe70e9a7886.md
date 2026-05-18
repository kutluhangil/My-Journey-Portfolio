# Bir öğenin değerinin geçersiz kılınması - Overriding işlemi

Bir dizinin elemanlarına indeksle erişerek ve yeni bir değer atayarak onları değiştirebilirsiniz. Bu işlem, bir elemanın değerini "geçersiz kılma" olarak adlandırılır.

İşte bir dizinin elemanlarının nasıl geçersiz kılınacağına dair bir örnek:

`const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
planets[0] = 'Jupiter';
planets[2] = 'Neptune';
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']`

Bu örnekte, `planets` adında bir değişken oluşturduk ve içine gezegenlerin adlarını içeren bir dizi yerleştirdik. Daha sonra dizi elemanlarına indekse göre eriştik ve onlara yeni değerler atadık.

`planets` değişkeninin kendisini değiştirmediğimizi, hala bir dizi içerdiğini anlamak önemlidir. Biz sadece bu dizinin içindeki değerleri değiştirdik.

Dizi elemanlarını geçersiz kılmak, verileri güncellememize ve çalışma zamanında diziyi değiştirmemize olanak tanır. Bu, bir dizi veriye sahip olduğumuzda ve belirli bir değeri değiştirmek veya güncellemek istediğimizde kullanışlıdır.

# **Amaçlar**

İndeksleri `1` ve `3` olan öğelerin değerini geçersiz kılın. `"plum"` kelimesini `"peach"` ile ve `"orange"` kelimesini `"banana"` ile değiştirin.

# **Testler**

- Tanımlanan değişken `fruits`
- `fruits` değişkeninin değeri bir dizidir — `["apple", "peach", "pear", "banana"].`

`const fruits = ["apple", "plum", "pear", "orange"];
const fruits = ["apple", "plum", "pear", "orange"];`

`fruits[1] = "peach"*;*
fruits[3] = "banana"*;*`