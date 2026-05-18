# Onay Kutuları (Checkboxes)

Radyo butonları (radio buttons), kullanıcının birden fazla seçenek arasından yalnızca birini seçmesine olanak tanırken; **onay kutuları (checkboxes)** birden fazla öğeyi seçmeye imkan verir. Onay kutuları da radyo butonları gibi iki durumda bulunabilir: **seçili** ya da **seçilmemiş**.

Şimdi, bir onay kutusu ve bir butondan oluşan basit bir arayüz oluşturalım. Amacımız, yalnızca onay kutusu seçildiğinde butonun aktif hale gelmesini sağlamaktır.

```
const App = () => {
  return (
    <div>
      <label>
        <input type="checkbox" name="terms" />
				I accept terms and conditions
      </label>
      <button type="button">Proceed</button>
    </div>
  );
};
```

Bu yüzden checkbox'u **kontrollü bir eleman** haline getiriyoruz; yani bir durum (state) ve onu değiştiren bir fonksiyon tanımlamalıyız. Butonun `disabled` özelliğini bu duruma bağlı olarak kontrol ediyoruz. Böylece checkbox seçildiğinde (durum `true` olduğunda), buton aktif hale gelecektir.

```
const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {};

  return (
    <div>
      <label>
        <input type="checkbox" name="terms" />
				I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};
```

Checkbox'ı kontrol etmek için, durumun değerini `checked` özniteliğine veririz ve değişiklikleri `onChange` olayı ile yakalayarak durumu güncelleriz:

```
const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {};

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};
```

Checkbox'un seçili olup olmadığını anlamak için, olay işleyici fonksiyonunda `evt.target.checked` özelliğini kullanırız. Bu özellik `true` veya `false` döner ve bu değeri duruma kaydederiz:

```
const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};
```

Sonuç olarak, **checkbox** işaretlendiğinde buton aktif hale gelir ve kullanıcı, koşulları kabul etmeden ilerleyemez.

```
Birden fazla checkbox ile çalışırken, seçilen değerleri durum (state) içinde dizi ya da nesne olarak saklayabilirsiniz. Bu yöntem, daha karmaşık formlar oluştururken oldukça faydalıdır ve bu tür formları ilerleyen bölümlerde ele alacağız.
```