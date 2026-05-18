# Formun Gönderilmesi

Form gönderildiğinde, `Formik` bileşenine `onSubmit` prop'u ile aktardığımız geri çağırma fonksiyonu tetiklenir. Form gönderme işlemini daha düzenli hale getirmek için bu fonksiyonu **`handleSubmit`** adıyla tanımlayabilir ve **`onSubmit`** prop'una bir referans olarak verebiliriz.

```
import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  email: ""
};

const FeedbackForm = () => {

  const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
	      <Field type="text" name="username" />
				<Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```

Form gönderme fonksiyonu iki parametre alır:

- **`values`** - Form gönderildiği andaki alan değerlerini içeren bir nesne.
- **`actions`** - Yardımcı yöntemler içeren bir nesne. Örneğin, **`resetForm`** yöntemi, form gönderildikten sonra alanları temizlemek için kullanılır.

Formik, form gönderildiğinde bazı rutin işlemleri otomatik olarak gerçekleştirir:

- Sayfanın yeniden yüklenmesini önlemek için **`preventDefault`** yöntemini çağırır;
- Form alanlarının değerlerini, özellik adı alan adı ve alanın değeri özellik değeri olacak şekilde tek bir uygun nesnede toplar.

Sonuç olarak, formun state yönetimi, alan değerlerinin toplanması gibi işlemlerle manuel olarak uğraşmamıza gerek kalmaz. **Formik**, bu rutin işlemleri otomatik olarak bizim yerimize halleder, böylece sadece form verileriyle ilgilenmemiz yeterli olur.