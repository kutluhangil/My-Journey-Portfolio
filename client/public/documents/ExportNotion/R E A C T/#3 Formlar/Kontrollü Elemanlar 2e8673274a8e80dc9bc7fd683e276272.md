# Kontrollü Elemanlar

Eğer form elemanlarının değerlerine anlık olarak erişmek ve her değişiklikte dinamik işlemler yapmak istiyorsanız, bu elemanların kontrollü olması gerekir. Kontrollü bileşenlerde, form elemanlarının değerleri React bileşeninin durumu (state) içinde saklanır ve bu durum aracılığıyla yönetilir.

Kontrollü bileşenler yalnızca formlarda değil; arama alanları, filtreler ve diğer dinamik arayüz elemanları gibi durumlarda da kullanılabilir. Ancak bir formda, tüm elemanlar ya tamamen **kontrollü** ya da tamamen **kontrolsüz** olmalıdır. Bu iki yaklaşım birlikte kullanılmamalıdır.

Örneğin, metin alanına yazılan değerleri anlık olarak bir paragrafta göstermek istediğimiz bir `SearchBar` bileşeni oluşturalım. Başlangıç değeri boş bir dize olan `inputValue` adında bir durum (state) tanımlayacağız:

```
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input type="text" />
      <p>{inputValue}</p>
    </div>
  );
};
```

`input` elemanını kontrollü bir bileşene dönüştürmek için iki adım izlemeliyiz:

1. `value` özniteliğine `inputValue` durumunun değerini atamalıyız.
2. `onChange` olayında, alanın değerini alıp `inputValue` durumuna kaydetmeliyiz.

```
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};
```

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/b8e62fd8-199a-492a-932d-6cd1e8e9c06fScreenshot%202023-12-15%20at%2015.26.18.png)

Bu yapı aşağıdaki gibi bir döngü oluşturur:

1. Kullanıcı metin alanına bir karakter girer.
2. `onChange` olayına bağlı geri çağırma (callback) fonksiyonu tetiklenir.
3. Bu fonksiyon, `inputValue` durumunu günceller.
4. Durum güncellendiğinde, `value` özniteliği yeni değeri alır ve bileşen yeniden render edilir.

**Not:** Eğer bir girdiye yalnızca `value` özniteliği atayıp `onChange` olayını tanımlamazsanız, geliştirici araçları size bir uyarı gösterir. Bu uyarı, kontrolsüz bir bileşenden kontrollü bir bileşene geçiş yapılmaması gerektiğini belirtir. Bu nedenle kontrollü bileşen kullanırken **her zaman hem `value` hem de `onChange`özniteliklerini** tanımlamayı unutmayın.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/52bbaaaa-230d-43a2-8d83-bfcef9588db8Screenshot%202023-12-18%20at%2016.33.44.png)