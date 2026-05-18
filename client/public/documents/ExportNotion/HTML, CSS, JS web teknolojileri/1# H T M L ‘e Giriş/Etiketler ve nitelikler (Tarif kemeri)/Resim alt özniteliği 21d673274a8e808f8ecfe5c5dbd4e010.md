# Resim: alt özniteliği

Görselin yüklenmemesi durumunda veya sınırlı görüşe sahip kullanıcılar için görsel hakkında anlamlı bilgiler eklemelisiniz.

`<img
  src="<https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg>"
	alt="Gri ahşap masa üzerinde Macbook Air"
/>`

Alternatif metin her `<img>` etiketine dahil edilmelidir.

- Açıklama eksiksiz, tam olarak formüle edilmiş bir cümle içermelidir.
- Alternatif metin "Resimde ne gösteriliyor?" sorusuna cevap vermelidir.
- Açıklama benzersiz olmalı ve bu resim için metinde zaten bulunanları tekrar etmemelidir.
- Açıklamada "resim", veya "illüstrasyon" kelimeleri kullanılmamalıdır; bunu söylemeye gerek yoktur.

![](https://s3.eu-north-1.amazonaws.com/lms.goit.files/5f801c01-6fb1-47fe-9b22-515e4b0136dfalt-1.jpg)

Sayfa metni bu yavru kedilerin geçmişini anlatıyorsa, bu açıklama yeterli olacaktır:

`<img src="kittens.jpg" alt="Yavru kediler" />`

Ancak, herhangi bir metin açıklaması olmadan sadece bir resim galerimiz varsa, tam olarak neyin tasvir edildiğini netleştirmeniz gerekir.

`<img
  src="kittens.jpg"
	alt="Battaniye üzerinde oynayan beş kedi yavrusu."
/>`