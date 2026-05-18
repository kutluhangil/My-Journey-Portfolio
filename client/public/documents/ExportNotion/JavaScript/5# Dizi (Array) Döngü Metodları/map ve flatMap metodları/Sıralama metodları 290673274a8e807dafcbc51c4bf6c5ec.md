# Sıralama metodları

JavaScript, fonksiyonel programlama dillerinden gelen dizi metodlarına sahiptir. Yinelemeli dizi metodlarının çoğu **saf fonksiyonlardır**. Bu metodlar, yeni bir dizi oluşturur; her bir elemanın değerine belirtilen callback fonksiyonunu uygulayarak diziyi doldurur ve ardından bu yeni diziyi döndürür.

Tüm döngü tabanlı dizi metodları benzer bir sözdizimine sahiptir. Orijinal `array`üzerinde, bir callback fonksiyonu argüman olarak verilen yinelemeli bir yöntem (`method`) çağrılır:

`array.method(callback(currentValue, index, array))`

Çoğu metodda, callback fonksiyonu üç parametre alır:

- **currentValue**: Dizinin geçerli öğesinin değeri
- **index**: Geçerli öğenin indeksi
- **array**: Orijinal dizinin kendisine referans

Şu şekilde de tanımlanabilir:

`array.method((item, idx, arr) => {
  *// her yinelemada gerçekleştirilecek mantık*
});`

`item` yani geçerli öğe değeri dışındaki tüm parametreler isteğe bağlıdır. Parametre isimleri anlamlı ve okunabilir olduğu sürece istediğiniz gibi adlandırabilirsiniz:

`array.method(item => {
  *// her yinelemada gerçekleştirilecek mantık*
});`