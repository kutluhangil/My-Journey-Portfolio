# Reducer Kuralları

Reducer'lar saf fonksiyonlar olmalı ve bir dizi kurala uymalıdır:

- Argümanlar (state ve action) değiştirilemez. Reducer'lar yalnızca bu argümanları dikkate alarak durumun yeni değerini hesaplamalıdır.
- Durumu (state) doğrudan değiştiremezsiniz. Bunun yerine, mevcut durumu kopyalayıp güncellemeler yapmalısınız.
- Reducer'lar, herhangi bir "yan etki" gerçekleştirmemelidir. Örneğin, bir zamanlayıcı başlatmak, bir HTTP isteği yürütmek, fonksiyonun veya argümanlarının dışındaki bir değeri değiştirmek, rastgele sayılar veya dizeler üretmek vb.

Yan etkileri nasıl gerçekleştireceğimizi ilerleyen bölümlerde ele alacağız, ama aklınızda bulunsun ki - bir reducer saf bir fonksiyon olmalıdır. Argümanları aldığında, sonraki durumu hesaplamalı ve bunu döndürmelidir. Hiçbir yan etki yok. Hiçbir mutasyon yok. Sadece yeni bir durum versiyonunu hesaplama.