# Sözde eleman ::placeholder+

`*placeholder` niteliği bir araç ipucu ekler. `::placeholder` sözde öğesinin rolü nedir?*

Araç ipucunun metnini biçimlendirmek için `::placeholder` sözde elemanı kullanılır.

`input::placeholder {
	color: teal;
  font-weight: 700;
}`

Durum seçicileri kullanarak farenin üzerine geldiğinizde veya giriş alanını odakladığınızda araç ipucu metninin stillerini değiştirebilirsiniz.

`input:hover::placeholder, 
input:focus::placeholder {
  color:orange;
}`

![Screen Shot 2025-07-31 at 00.19.55 AM.png](S%C3%B6zde%20eleman%20placeholder+/Screen_Shot_2025-07-31_at_00.19.55_AM.png)

**Şimdiye kadar `placeholder`** **hakkında bildiklerim**

1. `placeholder` niteliği, bir form alanının içinde, yazdığınızda kaybolan gri bir metin görüntüler. HTML belgesine eklenir.
2. :placeholder sözde öğesi, placeholder metninin stilini değiştirmek için kullanılır. Bu stil değişiklikleri CSS dosyasına eklenir.

`form-input` sınıfına sahip metin alanlarının metin rengini `#616161` olarak değiştirin ve bu alanlara bir araç ipucu tasarımı ekleyin.

- CSS düzenleyicisinde `.form-input::placeholder` seçicisine sahip bir kural bulunmalıdır.
- `.form-input::placeholder` seçicisine sahip CSS kuralının `color` özelliği `#616161`değerine sahip olmalıdır.

.form-input::placeholder {
color: #616161;
}