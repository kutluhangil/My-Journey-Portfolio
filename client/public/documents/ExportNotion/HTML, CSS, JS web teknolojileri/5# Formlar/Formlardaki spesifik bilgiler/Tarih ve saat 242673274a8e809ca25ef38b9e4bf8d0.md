# Tarih ve saat

Giriş alanı tarih ve/veya saati seçmek için de kullanılabilir. Bunu yapmak için, `date`, `time` veya `datetime-local` türlerinden birine ayarlanmalıdır.

`*<!-- Sadece tarihi seçmek için -->*<input type="date" />
*<!-- Yalnızca saati seçmek için-->*<input type="time" />
*<!-- Hem tarih hem de saati seçmek için -->*<input type="datetime-local" />`

Canlı bir örnekle takvimi öğrenin.

![Screen Shot 2025-08-02 at 01.30.48 AM.png](Tarih%20ve%20saat/Screen_Shot_2025-08-02_at_01.30.48_AM.png)

Yerel (yerleşik) takvimin çeşitli dezavantajları vardır:

- farklı tarayıcılarda farklı görünüm
- CSS ile değiştirmede zorluk

Bu yüzden bunun yerine çoğunlukla JavaScript kütüphaneleri kullanılır.

Bir sipariş formu oluşturun. `Delivery time` etiketinden sonra `delivery_time` adıyla teslimat süresini girmek için bir alan ekleyin.

- HTML düzenleyicisinde bir `form` açılış etiketi olmalıdır.
- HTML düzenleyicisinde bir `form` kapanış etiketi olmalıdır.
- `form` etiketi içinde üç `label` etiketi olmalıdır.
- Üçüncü `label` etiketi `Delivery time` metnini içermelidir.
- Üçüncü `label` etiketi içinde bir `input` etiketi olmalıdır.
- Üçüncü `input` etiketi `typetime=` özniteliğine sahip olmalıdır.
- Üçüncü `input` etiketi `name=delivery_time` özniteliğine sahip olmalıdır.

`<form class="order-form">
<label>
Phone number
<input type="tel" name="contact_tel" />
</label>
<label>
Apartment
<input type="number" name="apt" />
</label>
<label>
Delivery time
<input type="time" name="delivery_time"/>€€€
</label>
<button type="submit">Place order</button>
</form>`