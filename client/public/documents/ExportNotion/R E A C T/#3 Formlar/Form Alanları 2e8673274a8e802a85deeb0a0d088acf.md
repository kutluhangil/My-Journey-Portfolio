# Form Alanları

Formik'te form alanları oluşturmak için, varsayılan olarak **`input`** etiketini render eden **`Field`** bileşeni kullanılır. Her bir form alanında, **`input`** etiketinde olduğu gibi mutlaka bir **`name`** özelliği tanımlanmalıdır. Bu özellik, Formik'in form verilerini takip etmesine yardımcı olur.

```
import { Formik, Form, Field } from 'formik';

const FeedbackForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
			<Form>
	      <Field type="text" name="username" />
				<Field type="email" name="email" />
				<button type="submit">Submit</button>
			</Form>
    </Formik>
  );
};
```

**`Form`** etiketi gibi, **`Field`** etiketi de form alanlarını **`Formik`** bileşenindeki dahili mantıkla ilişkilendirir.