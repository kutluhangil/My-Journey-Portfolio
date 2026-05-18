# Strict Mode (Sert Mod)

Bileşen monte edildikten sonra **konsola aynı mesajın iki kez** yazıldığını görebilirsiniz. Bu tamamen normaldir. Peki neden?

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/1a1edb4e-f400-44c8-a97d-c16e85508126image%20-%202024-10-09T194501.337.png)

Bu durum, React’in geliştirme ortamına özel bir özelliği olan `React.StrictMode`bileşeninden kaynaklanır. Bu bileşen, uygulamanızın potansiyel hatalarını önceden tespit etmek için bazı bileşenleri **iki kez** monte eder. Böylece kodunuzun durum ve güncellemelerle nasıl başa çıktığını test eder.

Aşağıdaki gibi kullanıldığında:

```
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Geliştirme modunda, `App` bileşeni şu adımlarla işler:

1. `App` bileşeni DOM’a monte edilir.
2. `useEffect` çalışır ve mesaj konsola yazdırılır.
3. Bileşen DOM’dan sökülür (unmount edilir).
4. `App` tekrar DOM’a monte edilir.
5. `useEffect` tekrar çalışır ve mesaj yeniden yazdırılır.
6. Bileşen DOM’da kalır ve güncellemeler için hazır hâle gelir.

Sonuç olarak mesajı **iki kez** görmeniz, `StrictMode` etkisinden kaynaklanır ve genellikle uygulamanın çalışmasını etkilemez. Hatta bu davranış, uygulamanızdaki

olası sorunları erkenden yakalamanıza yardımcı olabilir.

Bu konunun detaylarını bir sonraki bölümde ele alacağız.