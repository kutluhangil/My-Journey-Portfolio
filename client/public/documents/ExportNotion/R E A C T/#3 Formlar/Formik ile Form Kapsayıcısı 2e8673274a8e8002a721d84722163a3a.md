# Formik ile Form Kapsayıcısı

**Formik**, form oluşturmayı ve yönetmeyi kolaylaştıran, kullanıma hazır bileşenler kümesidir. Bir formu başlatmanın temel adımı, `Formik` bileşen kapsayıcısını kullanmaktır.

```
import { Formik } from 'formik';

const FeedbackForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      ...
    </Formik>
  );
};
```

Bu bileşene iki temel özellik (prop) iletmeniz gerekir:

- **`initialValues`** - Form alanlarının başlangıç değerlerini içeren bir nesne. İlk aşamada boş bir nesne geçebilirsiniz.
- **`onSubmit`** - Form gönderildiğinde çağrılacak fonksiyon.

```
Not: Bu prop değerlerini form elemanlarını ekledikçe adım adım dolduracağız.

```

**`Formik`** bileşeni içerisinde form elemanlarını yerleştirirken, doğrudan HTML form etiketlerini (**`form`**, **`input`** vb.) kullanmak yerine, Formik'in sağladığı özel bileşenleri tercih etmelisiniz.

```
import { Formik, Form } from 'formik';

const FeedbackForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
			<Form>
				...
			</Form>
    </Formik>
  );
};
```

Bu örnekte, **`Form`** bileşeni normal bir HTML **`form`** etiketi gibi çalışır, ancak Formik kütüphanesinin sunduğu ek işlevselliklerle birlikte gelir.

Formu gönderebilmek için **`button`** etiketini kullanın; Formik kütüphanesinde gönderme butonu için özel bir bileşen bulunmamaktadır.

```
import { Formik, Form } from 'formik';

const FeedbackForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
			<Form>
				<button type="submit">Submit</button>
			</Form>
    </Formik>
  );
};
```