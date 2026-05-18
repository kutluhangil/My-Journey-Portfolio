# Doğrulama Hataları

Kullanıcılara doğrulama hatalarını göstermek için `ErrorMessage` bileşeni kullanılır:

`import { ErrorMessage } from "formik";`

Her bir form alanının yanına bu bileşeni ekleyeceğiz. Örneğin, aşağıda bir alan için doğrulama hatası mesajını nasıl göstereceğimizi görebilirsiniz:

```
<div>
  <label htmlFor={nameFieldId}>Username</label>
  <Field type="text" name="username" id={nameFieldId} />
  <ErrorMessage name="username" component="span" />
</div>
```

Dikkat edilmesi gereken iki önemli nokta:

1. `ErrorMessage` ve `Field` bileşenlerinin `name` öznitelikleri aynı olmalıdır. Bu, `ErrorMessage` bileşeninin ilgili alan için doğrulama hatasını doğru şekilde göstermesini sağlar.
2. Varsayılan olarak `ErrorMessage` metni etiket olmadan render edilir. ****Bu da stil vermeyi zorlaştırabilir. `component` prop’u, hata metninin hangi HTML etiketi içinde gösterileceğini belirlemenizi sağlar.

Ek olarak, `ErrorMessage` bileşenini tıpkı diğer Formik bileşenleri gibi stillendirebilirsiniz. Örneğin:

 `<ErrorMessage className={css.error} name="username" component="span" />`

Tüm form alanlarına `ErrorMessage` ekleyerek kullanıcıya hataları gösterebilirsiniz. Aşağıda, geri bildirim formundaki tüm alanlara doğrulama hatalarının eklendiği tam bir örnek yer almaktadır:

```
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  level: "good",
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
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" component="span" />
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor={msgFieldId}>Message</label>
          <Field as="textarea" name="message" id={msgFieldId} rows="5" />
          <ErrorMessage name="message" component="span" />
        </div>

        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage name="level" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```