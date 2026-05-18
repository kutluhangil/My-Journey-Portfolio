# Form elemanı - button type

`<button type="submit">` tıklayarak veya formun herhangi bir alanında `Enter` tuşuna basarak formu gönderebiliriz. Bu eylemler aynı zamanda geçerli tarayıcı sekmesini de yeniler. Bu varsayılan davranış, JavaScript kullanılarak değiştirilebilir.

`<form>
	*<!-- Form elemanı -->*<button type="submit">Submit feedback</button>
</form>`

Bir buton pek çok metin stilini miras almaz.

Bu stillerden başlıcaları yazı tipi ailesi ve metin rengidir. `Button` etiketinin global stilinin ayarlanması tavsiye edilir.

`button {
	font-family: inherit;
	color: currentColor;
}`

HTML düzenleyicide, forma aşağıdaki özelliklere sahip bir buton ekleyin:

- Sınıf : `form-button`
- Tür : `submit`
- Buton metni `Submit an issue`

CSS düzenleyicisinde, `form-button` sınıfını tanımlayan bir kural oluşturun ve aşağıdaki özellikleri belirleyin:"

- Buton, `align-self` özelliği ile flex-container'ın başlangıcına hizalanmış olmalı(`flex-start`)
- HTML düzenleyicisi `<form>` açılış etiketine sahip olmalı.
- HTML düzenleyicisi `</form>` kapanış etiketine sahip olmalıdır.
- Formun içinde bir `button` öğesi bulunmalıdır.
- `button` etiketi, `form-button` değerine sahip `class` niteliğine sahiptir
- `button` etiketi, değeri `submit` olan bir `type` niteliğine sahip olmalıdır.
- Düğmenin içindeki metin `Submit an issue` olmalıdır
- CSS düzenleyicisinde `.form-button` sınıfı için bir kural tanımlanmalıdır.
- `.form-button` sınıfı için tanımlanan CSS kuralı,`align-self` özelliği için `flex-start`değeri içermelidir.

`HTML kodu:`

`<form class="form" name="issue_report_form" autocomplete="off">
<!-- Form elemanları buraya gelecek -->`

`<button class="form-button" type="submit">Submit an issue</button>
</form>`

`CSS kodu:` 

- `{
box-sizing: border-box;
}`

`body {
font-family: sans-serif;
line-height: 1.5;
color: #212121;
}`

`input,
textarea,
button {
font-family: inherit;
line-height: inherit;
}`

`.form {
display: flex;
flex-direction: column;
gap: 12px;
padding: 8px;
border: 1px solid #212121;
max-width: 300px;
}`

`.form-button {
align-self: flex-start;
}`