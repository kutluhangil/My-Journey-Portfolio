# Stillendirme

Formik bileşenleri, HTML etiketlerinde olduğu gibi, **`className`** özelliği ve CSS modülleri kullanılarak kolayca stillendirilebilir.

```
import { Formik, Form, Field } from 'formik';
import css from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
			<Form className={css.form}>
	      <Field className={css.field} type="text" name="username" />
				<Field className={css.field} type="email" name="email" />
				<button className={css.btn} type="submit">Submit</button>
			</Form>
    </Formik>
  );
};
```

**`className`** özelliğinin değeri, bileşenin render ettiği etikete iletilir ve buna göre stil uygulaması gerekli etikete yapılır.

```
Dikkat: Formik bileşeni doğrudan bir HTML etiketi render etmediği için ona stil uygulanamaz; sadece formun yönetim mantığını sağlar.
```