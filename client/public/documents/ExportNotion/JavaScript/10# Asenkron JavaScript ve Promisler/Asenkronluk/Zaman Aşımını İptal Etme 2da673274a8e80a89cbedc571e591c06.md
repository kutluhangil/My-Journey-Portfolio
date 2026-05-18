# Zaman Aşımını İptal Etme

Herhangi bir nedenden dolayı ertelenmiş bir işlev çağrısının zaman aşımını iptal etmemiz gerekiyorsa, `clearTimeout(id)` yöntemi kullanılır.

`clearTimeout(id)` yöntemi, zamanlayıcı kimliğini alır ve onu "temizler", yani ertelenmiş işlev çağrısının kuyruktan çıkarılmasını sağlar.

```
const greet = () => {
  console.log("Hello!");
};

const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);
```

Yukarıdaki örnekte, `clearTimeout()` fonksiyonunu çağırdık, bu fonksiyon `greet()`fonksiyonu çağrıldığından önce gerçekleşecek. Dolayısıyla, `timerId` ile belirtilen zamanlayıcı silinecek ve ertelenmiş `greet()` çağrısı iptal edilecek. Bu nedenle konsola hiçbir şey yazdırılmayacak.

Bu örnekte, "Clear timeout" adlı bir düğme ekledik.

- Her basıldığında **Set timeout** düğmesine yeni bir zamanlayıcı oluşturulacak ve yeni bir kimlik ataması yapılacaktır.
- **Clear timeout** düğmesine basıldığında, ilgili sayısal kimlikle ilişkilendirilen zamanlayıcı temizlenecektir.
- Tüm zamanlayıcıları temizlemek gerekiyorsa, örneğin, başlatılan tüm zamanlayıcıların kimliklerini bir dizi şeklinde saklayarak, bu diziyi dolaşıp sırayla temizleyebilirsiniz.