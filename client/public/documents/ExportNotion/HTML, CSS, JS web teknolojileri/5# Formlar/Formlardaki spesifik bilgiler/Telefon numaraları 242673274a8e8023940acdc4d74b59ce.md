# Telefon numaraları

`type="tel"` niteliği, telefon numaralarının girilmesi için bir alan oluşturur. Telefon numaraları çeşitli biçimlerde gösterilebilir.

`<form>
	<label>
	  Email
	  <input type="email" name="email" />
	</label>
	<label>
	  Password
	  <input type="password" name="pwd" minlength="5" maxlength="12" />
	</label>
  <label>
    Phone number
    <input type="tel" name="phone" />
  </label>
  <button type="submit">Register</button>
</form>`

`type="tel"` özelliği, mobil tarayıcılarda telefon numaraları girilirken rakam içeren sanal bir klavye görüntülenmesini sağlar, böylece kullanıcı deneyimini iyileştirir.

![Screen Shot 2025-08-02 at 01.18.08 AM.png](Telefon%20numaralar%C4%B1/Screen_Shot_2025-08-02_at_01.18.08_AM.png)

Bir sipariş formu oluşturun. `Phone number` etiketinden sonra `contact_tel` adında bir telefon numarası giriş alanı ekleyin.

- HTML düzenleyicisinde `<form>` açılış etiketi olmalıdır.
- HTML düzenleyicide bir `</form>` kapanış etiketi olmalıdır.
- `form` etiketi içinde bir `label` etiketi olmalıdır.
- `label` etiketi `Phone number` metninini içermelidir.
- `label` etiketi içinde `input` etiketi olmalıdır.
- `input` etiketi `type = tel` özniteliğine sahip olmalıdır.
- `input` etiketi `name=contact_tel` özniteliğine sahip olmaıdır.

`<form class="order-form">
<label>
Phone number
<input type="tel" name="contact_tel"/>
</label>
<button type="submit">Place order</button>
</form>`