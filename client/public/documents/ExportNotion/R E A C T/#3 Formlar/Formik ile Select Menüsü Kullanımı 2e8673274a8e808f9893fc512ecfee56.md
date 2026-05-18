# Formik ile Select Menüsü Kullanımı

Bir **`select`** elemanı eklemek için yine **`Field`** bileşeni kullanılır ve bu bileşene **`as="select"`** prop'u atanır. Seçenekler, **`Field`** bileşeninin açılış ve kapanış etiketleri arasında **`option`** etiketleri ile belirtilir.

```
<Field as="select">
	<option value="o1">Option 1</option>
	<option value="o2">Option 2</option>
	<option value="o3">Option 3</option>
</Field>
```

Geri bildirim formuna, hizmetten memnuniyet seviyesini seçme imkanı sunan bir select ekleyelim:

- **`Field`** bileşenini **`as="select"`** prop'u ile ekleyin.
- Seçenekleri, **`value`** niteliğine sahip **`option`** etiketleri ile belirtin.
- Başlangıç değerleri nesnesine varsayılan bir değer ile yeni bir özellik ekleyin.
- Alan için benzersiz bir kimlik oluşturmak amacıyla **`useId`** hook'unu kullanın.

```
import { useId } from "react";
import { Formik, Form, Field } from "formik";

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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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