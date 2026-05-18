# Varsayılan Props Değeri

Bir bileşen herhangi bir değer bekliyorsa ve bu değer iletilmemişse ne olur? **`props`**nesnesinin bir özelliğine eriştiğimizde **`undefined`** değerini alırız. Props’ların varsayılan değerlerini belirtmek için, props’ların yapısal ayrıştırılması sırasında varsayılan değerler için bir sözdizimi kullanılır.

```
// src/components/Product.jsx

const Product = ({
  name,
  imgUrl = "<https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder>",
  price,
}) => (
  <div>
		<h2>{name}</h2>
    <img src={imgUrl} alt={name} width="480" />
    <p>Price: {price} credits</p>
  </div>
);
```

Varsayılan değerin belirlenmesi, **`props.imgUrl`** değişkeninin, bileşen üst bileşen tarafından çağrılırken belirtilmediği durumlarda bile bir değere sahip olmasını garanti eder.

```
// src/components/App.jsx

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="<https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640>"
        price={14.29}
      />
    </div>
  );
}
```

```
Varsayılan değerleri tüm props'lara atamak gerekmez; bunların büyük bir çoğunluğu, bileşenin düzgün çalışması için zorunlu değerlerdir. Ancak, örneğin varsayılan bir görüntü değeri yararlı olabilir.

```

# **Özet**

Bir ürünleri görüntülemek için yapılandırılabilir bir bileşen oluşturduk. Bu bileşene verileri props olarak aktarıyoruz ve elde edilen çıktı, props’larla yerleştirilmiş dinamik değerlere sahip bir React bileşen ağacıdır.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/3c8f4cf5-1797-47c5-a303-b39462a64258Screenshot%202023-12-06%20at%2019.01.13.png)

- Props, verilerin üst bileşenden alt bileşenlere aktarılması için kullanılır.
- Props, yalnızca üst bileşenden alt bileşenlere doğru bir ağaç yapısı içerisinde iletilir.
- Props sadece okunabilir; değiştirilmesi mümkün değildir.