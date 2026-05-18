# Bağlantı: target özniteliği

Bir bağlantının yönlendirdiği web sayfasının tarayıcıda yeni bir sekmede açılmasını istiyorsak, `<a>` etiketine `target="_blank"` özelliğini eklememiz gerekir.

Bağlantılar varsayılan olarak mevcut sekmede açılır ve `target` özelliğinin varsayılan değeri `target="_self"`tir.

`*<!-- Harici kaynağın bağlantısı geçerli sekmede açılacaktır -->*<a href="<https://goit.global/>">GoIT</a>

*<!-- Harici kaynağın bağlantısı yeni bir sekmede açılacaktır -->*<a href="<https://goit.global/>" target="_blank">
  GoIT
</a>`