# Form Elemanları

Formik kütüphanesi, **`label`**, **`fieldset`** ve **`legend`** gibi formun anlamsal HTML elemanları için özel bileşenler sunmaz. Bu nedenle, bu elemanlar için standart HTML etiketlerini kullanırız. Form alanlarına benzersiz kimlikler (id) atamak için **`useId`**hook'unu kullanmayı unutmayalım.

```
import { useId } from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  email: "",
};

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```