# Öğelerin kaldırılması

Bir öğeyi kaldırmak için, `element.remove()` metodu kullanılır.

`<p class="text">Random text content</p>`

Kaldırılacak `element` üzerinde çağrılır.

`const text = document.querySelector(".text")
text.remove();`

Canlı örnekte makaleden bir metin öğesini siliyoruz.

## **📌 Kısa Özet**

- element.remove() → öğeyi DOM’dan siler
- Sayfada artık görünmez
- Geri almak için yeniden oluşturmak gerekir
- En basit ve modern silme yöntemidir