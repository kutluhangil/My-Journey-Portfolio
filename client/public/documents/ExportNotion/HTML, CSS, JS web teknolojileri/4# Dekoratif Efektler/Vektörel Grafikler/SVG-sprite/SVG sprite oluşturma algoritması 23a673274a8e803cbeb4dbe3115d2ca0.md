# SVG sprite oluşturma algoritması

1. Figma'da düzeni açın, tüm simgeleri seçin ve SVG formatında bilgisayarınıza aktarın.
2. [icomoon.io](http://icomoon.io/) adresine gidin, sol üstteki **Import Icons** düğmesine tıklayın ve tüm simgeleri ekleyin.
3. Sol alttaki **Generate SVG & More**'a tıklayın.
4. Sol alttaki **Download** seçeneğine tıklayın.

Bilgisayarınızda bir .svg dosyası görünecektir. Bu bir SVG sprite.

```
icomoon.io hizmetini kullanarak bir SVG sprite oluşturmak, öğretmen ile online sınıfta ayrıntılı olarak tartışılacaktır.

```

SVG belgesi, raster grafiklerden farklı olarak tarayıcının oluşturacağı şekilleri tanımlayan bir metin dosyasıdır. Tek bir dosyada, `<symbol>` öğesini kullanarak birçok farklı şekil tanımlanabilir ve her bir sembole benzersiz bir `id` atanarak HTML belgesinde kullanılabilir.

`<svg aria-hidden="true" style="position:absolute*;width:0;height:0" xmlns="<http://www.w3.org/2000/svg>" overflow="hidden">*
  <defs>
    <!-- Trash can icon -->
    <symbol id="delete" viewBox="0 0 32 32">
      <path d="M8 25.333C8 26.8 9.2 28 10.667 28h10.667c1.467 0 2.667-1.2 2.667-2.667v-16h-16v16zm17.333-20h-4.667L19.333 4h-6.667l-1.333 1.333H6.666V8h18.667V5.333z" />
    </symbol>
    <!-- Camera icon -->
    <symbol id="camera" viewBox="0 0 32 32">
      <path d="M20.267 16a4.267 4.267 0 11-8.534 0 4.267 4.267 0 018.534 0z" />
      <path d="M12 2.667L9.56 5.334H5.333a2.675 2.675 0 00-2.667 2.667v16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667h-4.227l-2.44-2.667h-8zm4 20c-3.68 0-6.667-2.987-6.667-6.667S12.32 9.333 16 9.333 22.667 12.32 22.667 16 19.68 22.667 16 22.667z" />
    </symbol>
    <!-- Portfolio icon -->
    <symbol id="work" viewBox="0 0 32 32">
      <path d="M26.667 8h-5.333V5.333a2.658 2.658 0 00-2.667-2.667h-5.333a2.658 2.658 0 00-2.667 2.667V8H5.334a2.646 2.646 0 00-2.653 2.667l-.013 14.667a2.658 2.658 0 002.667 2.667h21.333a2.658 2.658 0 002.667-2.667V10.667A2.658 2.658 0 0026.668 8zm-8 0h-5.333V5.333h5.333V8z" />
    </symbol>
  </defs>
</svg>`

Bu örnekte, SVG sprite içindeki tüm SVG dosyalarını ve her bir şekli ayrı ayrı tanımlayan bir dizi `<svg>` ve `<symbol>` öğesi bulunmaktadır. Her `<symbol>` öğesine benzersiz bir tanımlayıcı (ID) atanmıştır.

SVG sprite'tan bir ikonu HTML belgesinde kullanmak için, `<svg>` öğesine ve içine bir `<use>` öğesi eklemeniz gerekir. `<use>` öğesinin `href` özniteliğine, ikonun yolunu belirttiğiniz bir değer vermelisiniz. Yol normal bir dosya gibi ayarlanır, ancak sonuna sprite'daki karakter kimliğini içeren bir çapa eklenir.

`<svg>
  <use href="./path-to-svg-sprite/image-sprite.svg#sembol-tanımlayıcı"></use>
</svg>`

Anlaşılır olması için, sizi SVG kodunu aramaktan kurtarmak için (içinde nasıl düzenlendiğini merak ediyorsanız) SVG sprite'ının tamamını belgeye ekledik (ve bir kimlik vererek gizledik).

Örnekte, SVG sprite'ının tamamı HTML işaretlemesindedir, bu nedenle `#` ’den önce SVG dosya adı yoktur.

![Screen Shot 2025-07-25 at 01.28.42 AM.png](SVG%20sprite%20olu%C5%9Fturma%20algoritmas%C4%B1/Screen_Shot_2025-07-25_at_01.28.42_AM.png)

Eğer SVG sprite'ı ayrı bir dosya olsaydı, dosya adı ve `#` sembolü ile birlikte sembol `id`si kullanılırdı.

---

### SVG Sprite Nedir ve Nasıl Çalışır?

`SVG sprite`, birden fazla SVG simgesini tek bir `<svg>` elementinin içine, `<defs>` etiketi ve `<symbol>` etiketlerini kullanarak yerleştirme tekniğidir. Her bir simgeye benzersiz bir `id` verilir. Daha sonra, bir simgeyi kullanmak istediğimizde, sadece `<use>` etiketini kullanarak o simgenin `id`'sine referans veririz.

Bu, bir resim galerisindeki tüm resimlerin bir albümde toplanması ve her birini ayrı ayrı dosyalardan çağırmak yerine albümdeki ismine göre bulmaya benzer.

### Görevini Nasıl Yapacağız?

Sana verilen HTML yapısında, `<ul class="social-links">` içinde `<li`\> ve `<a>` etiketleri zaten var. `<a>` etiketlerinin içine **`<svg>`** etiketlerini yerleştireceğiz. Bu `<svg>` etiketlerinin içine de, yukarıdaki büyük `<svg>` sprite'ında tanımlanmış olan simgeleri **`<use>`** etiketi ile çağıracağız.

**İşte adım adım yapman gerekenler:**

1. Her bir `<a>` etiketinin içine bir `<svg>` etiketi ekle.
2. Bu `<svg>` etiketlerine `class="icon"` ve `width="20"` ile `height="20"` özelliklerini ekle.
3. Her bir `<svg>` etiketinin içine bir **`<use>`** etiketi ekle.
4. `<use>` etiketinin `href` özelliğini, çağırmak istediğin simgenin `id`'si ile belirle (örneğin, `"#instagram-icon"`).

**Hazır kodun aşağıdadır:**

```html
<svg
  aria-hidden="true"
  style="position: absolute; width: 0; height: 0; overflow: hidden"
  version="1.1"
  xmlns="<http://www.w3.org/2000/svg>"
  xmlns:xlink="<http://www.w3.org/1999/xlink>"
>
  <defs>
    <symbol id="facebook-icon" viewBox="0 0 32 32">
      <path
        d="M21.329 5.313h2.921v-5.088c-0.504-0.069-2.237-0.225-4.256-0.225-4.212 0-7.097 2.649-7.097 7.519v4.481h-4.648v5.688h4.648v14.312h5.699v-14.311h4.46l0.708-5.688h-5.169v-3.919c0.001-1.644 0.444-2.769 2.735-2.769z"
      ></path>
    </symbol>
    <symbol id="instagram-icon" viewBox="0 0 32 32">
      <path
        d="M17.371 2.668c0.973-0.004 1.946 0.006 2.919 0.029l0.259 0.009c0.299 0.011 0.593 0.024 0.949 0.040 1.419 0.067 2.387 0.291 3.236 0.62 0.88 0.339 1.621 0.797 2.363 1.539 0.678 0.666 1.202 1.472 1.537 2.361 0.329 0.849 0.553 1.819 0.62 3.237 0.016 0.355 0.029 0.651 0.040 0.949l0.008 0.259c0.024 0.972 0.034 1.945 0.031 2.917l0.001 0.995v1.747c0.003 0.973-0.007 1.946-0.031 2.919l-0.008 0.259c-0.011 0.299-0.024 0.593-0.040 0.949-0.067 1.419-0.293 2.387-0.621 3.236-0.334 0.89-0.858 1.697-1.537 2.363-0.667 0.678-1.473 1.202-2.363 1.537-0.849 0.329-1.817 0.553-3.236 0.62-0.356 0.016-0.651 0.029-0.949 0.040l-0.259 0.008c-0.973 0.024-1.946 0.034-2.919 0.031l-2.74 0.001c-0.973 0.003-1.946-0.007-2.919-0.031l-0.259-0.008c-0.317-0.012-0.633-0.025-0.949-0.040-1.419-0.067-2.387-0.293-3.237-0.621-0.89-0.334-1.696-0.859-2.361-1.537-0.679-0.666-1.204-1.472-1.539-2.363-0.329-0.849-0.553-1.817-0.62-3.236-0.015-0.316-0.028-0.633-0.040-0.949l-0.007-0.259c-0.025-0.973-0.036-1.946-0.033-2.919v-2.741c-0.004-0.973 0.006-1.945 0.029-2.917l0.009-0.259c0.011-0.299 0.024-0.595 0.040-0.949 0.067-1.42 0.291-2.387 0.62-3.237 0.335-0.89 0.861-1.695 1.541-2.36 0.665-0.679 1.471-1.205 2.36-1.54 0.851-0.329 1.817-0.553 3.237-0.62l0.949-0.040 0.259-0.007c0.972-0.025 1.945-0.036 2.917-0.033l2.741 0.001zM16 9.335c0.883-0.012 1.76 0.151 2.58 0.48s1.566 0.818 2.195 1.439c0.629 0.62 1.129 1.359 1.47 2.174s0.517 1.69 0.517 2.573c0 0.883-0.176 1.758-0.517 2.573s-0.84 1.554-1.47 2.174c-0.629 0.62-1.375 1.109-2.195 1.439s-1.697 0.493-2.58 0.48c-1.768 0-3.464-0.702-4.714-1.953s-1.953-2.946-1.953-4.714-0.702-3.464-1.953-4.714c-1.25-1.25-2.946-1.951-4.714-1.951zM16 12.001c0.531-0.010 1.059 0.086 1.553 0.283s0.943 0.489 1.323 0.862c0.379 0.372 0.681 0.816 0.886 1.306s0.312 1.016 0.312 1.548c0 0.531-0.106 1.058-0.311 1.548s-0.507 0.934-0.886 1.307c-0.379 0.372-0.829 0.666-1.322 0.862s-1.022 0.293-1.553 0.283c-1.061 0-2.078-0.421-2.828-1.172s-1.172-1.768-1.172-2.828c0-1.061 0.421-2.078 1.172-2.828s1.768-1.172 2.828-1.172l-0.001 0.001zM23 7.335c-0.43 0.017-0.837 0.2-1.135 0.511s-0.465 0.724-0.465 1.155 0.166 0.844 0.465 1.155c0.298 0.31 0.705 0.493 1.135 0.511 0.442 0 0.866-0.176 1.178-0.488s0.488-0.736 0.488-1.179c0-0.442-0.176-0.866-0.488-1.178s-0.736-0.488-1.178-0.488v0.003z"
      ></path>
    </symbol>
    <symbol id="youtube-icon" viewBox="0 0 32 32">
      <path
        d="M16.325 5.333c0.712 0.004 2.493 0.021 4.387 0.097l0.672 0.029c1.905 0.089 3.809 0.244 4.755 0.507 1.26 0.355 2.249 1.387 2.584 2.696 0.533 2.080 0.6 6.136 0.608 7.119l0.001 0.203v0.232c-0.009 0.983-0.076 5.040-0.609 7.119-0.339 1.313-1.329 2.347-2.584 2.696-0.945 0.263-2.849 0.417-4.755 0.507l-0.672 0.031c-1.893 0.075-3.675 0.093-4.387 0.096l-0.313 0.001h-0.34c-1.507-0.009-7.808-0.077-9.813-0.635-1.259-0.355-2.249-1.387-2.584-2.696-0.533-2.080-0.6-6.136-0.608-7.119v-0.435c0.008-0.983 0.075-5.040 0.608-7.119 0.339-1.313 1.329-2.347 2.585-2.695 2.004-0.559 8.307-0.627 9.813-0.635h0.652zM13.332 11.333v9.333l8-4.667-8-4.667z"
      ></path>
    </symbol>
  </defs>
</svg>

<ul class="social-links">
  <li>
    <a href="<https://www.instagram.com/>" target="_blank" class="link">
      <svg class="icon" width="20" height="20">
        <use href="#instagram-icon"></use>
      </svg>
    </a>
  </li>
  <li>
    <a href="<https://www.facebook.com/>" target="_blank" class="link">
      <svg class="icon" width="20" height="20">
        <use href="#facebook-icon"></use>
      </svg>
    </a>
  </li>
  <li>
    <a href="<https://www.youtube.com/”> bağlantısına" target="_blank" class="link">
      <svg class="icon" width="20" height="20">
        <use href="#youtube-icon"></use>
      </svg>
    </a>
  </li>
</ul>

```

Bu kod, `<ul class="social-links">` içindeki her bir bağlantıya, belirtilen **SVG sprite**'tan ilgili simgeyi **`<use>`** etiketi aracılığıyla ekler ve tüm gereksinimleri (sınıf, boyutlar, bağlantılar) karşılar.