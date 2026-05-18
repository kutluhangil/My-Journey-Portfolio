# LocalStorage ile Çalışma

Uygulamalarda, seçilen filtreler, tema tercihleri gibi değerleri **yerel depolamada**saklama ihtiyacı sıkça ortaya çıkar.

Başlangıç olarak, butona tıklama sayısını `clicks` durumunda saklayan bir bileşene göz atalım. Bu değeri sıfırlamak için bir buton da ekleyelim:

```
const App = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};
```

# 

[**Kayıt**](LocalStorage%20ile%20%C3%87al%C4%B1%C5%9Fma/Kay%C4%B1t%202e7673274a8e8051b89cdddd514c2dcc.md)

[**Okuma**](LocalStorage%20ile%20%C3%87al%C4%B1%C5%9Fma/Okuma%202e7673274a8e8062b410e4dbfb014664.md)