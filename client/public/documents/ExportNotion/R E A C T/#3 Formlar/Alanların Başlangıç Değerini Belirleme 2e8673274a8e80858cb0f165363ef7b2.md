# Alanların Başlangıç Değerini Belirleme

`Formik` kütüphanesiyle oluşturulan formlar, her alanın değerinin state'de saklandığı kontrol edilen formlardır. Ancak, state'i manuel olarak tanımlamak veya değiştirmek zorunda kalmazsınız; `Formik` bunu sizin yerinize yönetir. Formik, state yönetimini ve güncelleme mantığını kendi içinde barındırır.

Her form alanının başlangıç değerleri, **`initialValues`** prop'u ile sağlanmalıdır. Bu prop, alanların isimlerini state özellikleriyle eşleştiren bir nesnedir. Her alanın değeri ise ilgili state özelliğinin değeri olarak tanımlanır.

```
import { Formik, Form, Field } from "formik";

const FeedbackForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: ""
      }}
      onSubmit={() => {}}
    >
      <Form>
	      <Field type="text" name="username" />
				<Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```

Yukarıdaki örnekte, **`initialValues`** prop'una verilen nesne ile formun alanlarına başlangıç değerleri atanır. Sayfayı yenilediğinizde, ilgili form alanlarının belirttiğiniz değerlerle dolduğunu göreceksiniz.

Formunuz daha büyük olduğunda, başlangıç değerlerini içeren nesneyi harici bir değişkene taşımak daha düzenli ve okunabilir bir kod yazmanızı sağlar.

```
import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  email: ""
};

const FeedbackForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
	      <Field type="text" name="username" />
				<Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```