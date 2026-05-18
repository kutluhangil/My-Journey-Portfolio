# Temizleme Fonksiyonu(clean-up function)

`useEffect` hook’u, içinde tanımlanan etkiyi temizlemek için **bir temizleme fonksiyonu** döndürebilir. Bu fonksiyon, `useEffect` callback’inden bir `return` ile belirtilir:

```
const App = () => {

  useEffect(() => {
    console.log("Effect");

    return () => {
      console.log("Clean up");
    };
  });

  return <div>App</div>;
};
```

Bu kodu çalıştırırsanız ve konsolu incelerseniz, aşağıdaki mesajları göreceksiniz.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/5239eace-bc6a-4b3e-b919-40d494d6ec5fScreenshot%202023-12-13%20at%2014.12.10.png)

Temizleme fonksiyonu, her bir sonraki efekt çağrısından önce ve bileşen ayrılmadan önce çalıştırılır, yani:

- Etki ilk kez çalıştırılır
- İlk etki temizlenir
- İkinci etki çalıştırılır
- İkinci etki temizlenir
- Üçüncü etki çalıştırılır
- ve bu şekilde devam eder

**BELLEK SIZINTISINI ENGELLEME**

Modal bileşeni kaldırıldığında zamanlayıcıyı durdurmak için temizleme fonksiyonu kullanmalıyız. Bunun için zamanlayıcının ID’sini bir değişkende saklayıp `clearInterval` ile durdurabiliriz:

```
const Modal = () => {
  useEffect(() => {
      // Aralığın kimliğini bir değişkende saklıyoruz
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
		  }, 2000);

		return () => {
			// Aralığı kimliğine göre temizliyoruz
			clearInterval(intervalId);
		};
  }, []);

  return <div>Modal</div>;
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
    </div>
  );
};
```

```
ÖNEMLİ NOT
React'te temizleme işlemlerine sıkça ihtiyaç duyarsınız. Bu işlemler:
-Olay dinleyicilerini kaldırmak
-Zamanlayıcıları durdurmak
-HTTP isteklerini iptal etmek
gibi durumları kapsar. Temizleme fonksiyonlarını doğru kullanmak, performans ve bellek yönetimi açısından kritik öneme sahiptir.
```