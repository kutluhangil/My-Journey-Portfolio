# Formik ile Doğrulama Ekleme

Doğrulama, kullanıcı tarafından girilen değerlerin belirli kriterlere uygun olup olmadığını kontrol etme işlemidir. Frontend'de doğrulama - verilerin sunucuya gönderilmeden önce yanlış girişlerden korunmasını sağlar.

Formik, doğrulama işlemini otomatik olarak yönetir; sadece doğrulama yapılandırmasını yapmanız yeterlidir. Bunun için, [**Yup**](https://github.com/jquense/yup?tab=readme-ov-file#yup) adlı doğrulama kütüphanesini projeye dahil etmelisiniz.

`npm install yup`

Daha sonra doğrulama kütüphanesini form bileşenine import etmelisiniz.

`import * as Yup from "yup";`

Yup, doğrulama için doğrulama şemaları kullanır. Bu şemalar, form verilerinin bir nesne olarak saklandığı Formik yapısına uygun şekilde oluşturulur.

`const FeedbackSchema = Yup.object().shape({});`

Bu şemada, `initialValues` nesnesindeki her alan için doğrulama kuralları tanımlarız. Başlangıç olarak kullanıcı adından başlayalım.

```
const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
});
```

Bu kodda **`username`** alanı için şu doğrulama kuralları uygulanmaktadır:

- Girdi bir **string** olmalı,
- String en az 2 karakter uzunluğunda olmalı
- String en fazla 50 karakter uzunluğunda olmalı
- Zorunlu bir alan olmalı.

**`Yup.string()`**, **`Yup.min()`**, **`Yup.max()`**, **`Yup.required()`** gibi fonksiyonlar, belirli bir doğrulama kriterini eklemenizi sağlayan doğrulayıcılardır. Her bir doğrulayıcı sıfır ila iki parametre alabilir.

- Birinci parametre - doğrulama kriteridir, örneğin string uzunluğu ya da sayı değeri
- İkinci parametre - doğrulama hatası durumunda kullanılacak hata mesajıdır.

```
Tüm doğrulayıcılarda kriterler veya hata mesajları bulunmayabilir. Bunu öğrenmek için Yup API belgelerine bakmanız gerekmektedir.

```

Diğer form alanları için doğrulamayı ekleyin. Doğrulama kriterlerini gözden geçirin.

```
const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
	level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});
```

**`level`** alanına dikkat edin: Metin alanları herhangi bir string değeri kabul edebilirken, select menüsü yalnızca önceden tanımlanmış değerleri kabul eder. Bu nedenle, **`oneOf()`** doğrulayıcısını kullanarak belirli seçenekleri sınırlandırıyoruz.

Doğrulama şeması hazır, şimdi onu form ile bağlamamız gerekiyor. **`Formik`** bileşenine **`validationSchema`** adında üçüncü bir prop ekleyin ve bu prop'a Yup doğrulama şemasını geçin.

```
const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good"
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />

        <label htmlFor={msgFieldId}>Message</label>
        <Field as="textarea" name="message" id={msgFieldId} rows="5" />

        <label htmlFor={levelFieldId}>Service satisfaction level</label>
        <Field as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```

Doğrulama artık formunuza entegre edilmiştir. Geçersiz bir veri girildiğinde, form gönderilemeyecektir. Bir sonraki aşamada, kullanıcıya doğrulama hatalarının nasıl gösterileceğini ele alacağız.