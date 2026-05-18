# DAHİLİ Stiller (Internal CSS)

**Dahili stilleri** (internal styles) kullanıldığında, CSS kuralları `<style>` etiketi içine eklenir. `<style>` etiketi, genellikle `<title>` etiketinden sonra, belgenin `<head>` bölümünde yer alır.

`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS is amazing!</title>
		<style>
	    p {
	      color: tomato;
	    }
	  </style>
  </head>
  <body></body>
</html>`

Dahili stiller yalnızca mevcut HTML belgesinde geçerli olup, diğer sayfalarda tekrar kullanılamaz. Ayrıca, bu stillerin ölçeklendirilmesi ve bakımı zor olabilir.

Belgenize gömülü bir stil sayfası ekleyin ve başlık ve paragraf için iki CSS kuralı ekleyin. Metin rengi değeri; başlık için `orange` ve paragraf için `cyan` olsun.

- Kod `h1` etiketine sahip olmalıdır.
- `h1` etiketinin `style` niteliği bulunmamalıdır.
- Kod `p` etiketini içermelidir.
- `p` etiketi `style` niteliğine sahip olmamalıdır.
- `head` etiketinin içinde `style` etiketi bulunmalıdır.
- `style` etiketi `h1` seçicisi ile bir CSS kuralı bulunmalıdır.
- `h1` seçicisine sahip CSS kuralının `color` değeri `orange` olmalıdır.
- `style` etiketi, `p` seçicisine sahip bir CSS kuralı bulunmalıdır.
- `p` seçicisine sahip CSS kuralının `color` değeri `cyan` olmalıdır.

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta
name="description"
content="Planet Fatness description meta tag content"
/>
<title>Planet Fatness is the place for beginners and pros!</title>
<style>
h1 {
color: orange;
}
p {
color: cyan;
}
</style>
</head>