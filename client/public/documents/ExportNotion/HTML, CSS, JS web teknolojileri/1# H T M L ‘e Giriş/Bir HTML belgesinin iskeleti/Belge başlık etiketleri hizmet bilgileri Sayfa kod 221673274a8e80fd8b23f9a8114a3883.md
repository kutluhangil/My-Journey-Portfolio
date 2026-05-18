# Belge başlık etiketleri: hizmet bilgileri. Sayfa kodlama meta charset kümesi

`<meta>` etiketi, tarayıcı ve arama motorlarına yönelik bilgileri saklamak için kullanılır:

- belge kodlamasının tanımlanması,
- arama motorlarına bilgi aktarımı vb.

Birden fazla meta etiketi olabilir, çünkü kullanılan niteliklere bağlı olarak farklı bilgiler taşırlar. `<meta>` etiketleri her zaman `<head>` öğesinin içinde yer alır.

```
Tarayıcının hangi karakterlerin kullanıldığını bilmesi ve metni doğru şekilde görüntüleyebilmesi için sayfa kodlaması belirtilmelidir. Eğer bu yapılmaz veya yanlış kodlama ayarlanırsa, tarayıcı metin yerine anlamsız karakterler veya hiyeroglifler görüntüleyebilir.

```

Bunu yapmak için, en yaygın karakter kodlaması olan `utf-8` olarak ayarlanmış `charset` özniteliğine sahip `<meta>` etiketini kullanın.

`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>HTML is simple!</title>
  </head>
</html>`

### **<meta charset="utf-8" />**

- Sayfanın karakter kodlamasını belirtir. UTF-8, Türkçe karakterler dâhil birçok dili destekler.
- **Önemli:** Türkçe karakterler kullanacaksan mutlaka bu satır olmalı, yoksa “ç, ı, ğ” gibi harfler bozuk görünebilir.