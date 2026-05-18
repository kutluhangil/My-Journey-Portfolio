# Controllers (Kontrolörler)

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/7011e27c-a9be-4f51-b1bd-866b46cf028dGroup%205%20%282%29.png)

Kontrolörler, sistemin belirli bir iş akışını veya yönlendirme senaryosunu yönetmekten sorumludur. Örneğin, Redux’taki `dispatch` işlemiyle benzer bir yapı sunar. HTTP servisleri bağlamında, **olay türü**, HTTP metodunun (GET, POST vb.) ve URL’nin birleşimini ifade eder.

Kontrolörler:

- İsteğin gövdesini (**body**) işlemekten,
- Gerekli iş mantığını çağırmaktan,
- Ve gerekirse istemciye bir yanıt döndürmekten sorumludur.